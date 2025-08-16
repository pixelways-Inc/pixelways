"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import WorkspaceLayout from '../../components/WorkspaceLayout';
import ErrorBoundary from '../../components/ErrorBoundary';
import WorkspaceLoader from '../../components/WorkspaceLoader';
import { Loader, Code, Eye, Rocket, MessageSquare } from 'lucide-react';
import { ThemeProvider } from '../../context/ThemeContext';
import dynamic from 'next/dynamic';

// Dynamic imports to prevent SSR issues and resolve circular dependencies
const WorkspaceChat = dynamic(() => import('../../components/WorkspaceChat'), { 
  ssr: false,
  loading: () => (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <Loader size={24} className="spinner-border spinner-border-sm mb-2" />
        <div className="small text-muted">Loading Chat...</div>
      </div>
    </div>
  )
});

const DesignMode = dynamic(() => import('../../components/DesignMode'), { 
  ssr: false,
  loading: () => (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <Loader size={24} className="spinner-border spinner-border-sm mb-2" />
        <div className="small text-muted">Loading Code Editor...</div>
      </div>
    </div>
  )
});

const PreviewFrame = dynamic(() => import('../../components/PreviewFrame'), { 
  ssr: false,
  loading: () => (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <Loader size={24} className="spinner-border spinner-border-sm mb-2" />
        <div className="small text-muted">Loading Preview...</div>
      </div>
    </div>
  )
});

const WorkspacePage = () => {
  const [generatedWebsite, setGeneratedWebsite] = useState(null);
  const [activeView, setActiveView] = useState('chat'); // 'chat' | 'code' | 'preview'
  const [previewUrl, setPreviewUrl] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);
  const [siteName, setSiteName] = useState('');
  const [customSiteName, setCustomSiteName] = useState('');
  const [exportStatus, setExportStatus] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isWorkspaceLoading, setIsWorkspaceLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStep, setLoadingStep] = useState('init');
  const router = useRouter();

  // Client-side initialization with loading progress
  useEffect(() => {
    const initializeWorkspace = async () => {
      try {
        // Step 1: Initialize client
        setLoadingStep('init');
        setLoadingProgress(10);
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setIsClient(true);
        const checkMobile = () => {
          if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 768);
          }
        };
        
        checkMobile();
        if (typeof window !== 'undefined') {
          window.addEventListener('resize', checkMobile);
        }
        
        // Step 2: Load components
        setLoadingStep('generate');
        setLoadingProgress(40);
        
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Step 3: Check for existing website
        setLoadingStep('process');
        setLoadingProgress(70);
        
        if (typeof window !== 'undefined') {
          const website = sessionStorage.getItem('generatedWebsite');
          if (website) {
            setGeneratedWebsite(JSON.parse(website));
            setActiveView('code');
          }
          
          // Load GitHub auth from localStorage on initial load (persistent across sessions)
          const savedToken = localStorage.getItem('github_access_token');
          const savedUser = localStorage.getItem('github_user');
          
          if (savedToken && savedUser) {
            // Copy to session storage for current session
            sessionStorage.setItem('github_access_token', savedToken);
            sessionStorage.setItem('github_user', savedUser);
            console.log('GitHub authentication loaded from localStorage');
          }
          
          // Check for pending deployment after auth
          const pendingDeployment = sessionStorage.getItem('pending_deployment');
          if (pendingDeployment) {
            try {
              const deployment = JSON.parse(pendingDeployment);
              // Check if deployment is not too old (within 10 minutes)
              if (Date.now() - deployment.timestamp < 10 * 60 * 1000) {
                console.log('Found pending deployment after auth, will deploy automatically');
              } else {
                // Remove stale deployment
                sessionStorage.removeItem('pending_deployment');
              }
            } catch (e) {
              console.error('Error parsing pending deployment:', e);
              sessionStorage.removeItem('pending_deployment');
            }
          }
        }
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Step 4: Complete
        setLoadingStep('complete');
        setLoadingProgress(100);
        
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setIsWorkspaceLoading(false);
        
      } catch (error) {
        console.warn('Workspace initialization error:', error);
        setIsClient(true);
        setIsWorkspaceLoading(false);
      }
    };

    initializeWorkspace();
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', () => {});
      }
    };
  }, []);

  // This is now handled in the initialization above

  const handleWebsiteGenerated = (website) => {
    setGeneratedWebsite(website);
    sessionStorage.setItem('generatedWebsite', JSON.stringify(website));
    setActiveView('code');
  };

  const triggerPreview = async () => {
    if (!generatedWebsite || !Array.isArray(generatedWebsite.files)) return;
    
    // Validate custom site name
    if (!customSiteName.trim()) {
      alert('Please enter a site name before deploying.');
      return;
    }
    
    // Validate site name format (no spaces, alphanumeric and hyphens only)
    const siteNameRegex = /^[a-zA-Z0-9-]+$/;
    if (!siteNameRegex.test(customSiteName.trim())) {
      alert('Site name can only contain letters, numbers, and hyphens (no spaces).');
      return;
    }
    
    // Check if this is a React/Vite project that requires GitHub auth
    const requiresGitHubAuth = generatedWebsite.projectType && generatedWebsite.projectType !== 'static';
    
    if (requiresGitHubAuth) {
      // Check if user is authenticated with GitHub
      const githubToken = typeof window !== 'undefined' ? sessionStorage.getItem('github_access_token') : null;
      const githubUserData = typeof window !== 'undefined' ? sessionStorage.getItem('github_user') : null;
      
      if (!githubToken || !githubUserData) {
        // User not authenticated - trigger OAuth in new tab
        const confirmAuth = window.confirm(
          `GitHub authentication required for ${generatedWebsite.projectType.toUpperCase()} projects.\n\n` +
          `Benefits:\n` +
          `• Deploy to your own GitHub repositories\n` +
          `• Full control over your projects\n` +
          `• No repository limits\n` +
          `• Private repositories supported\n\n` +
          `Click OK to connect your GitHub account in a new tab.`
        );
        
        if (!confirmAuth) {
          return;
        }
        
        // Store the current state for after auth
        sessionStorage.setItem('pending_deployment', JSON.stringify({
          siteName: customSiteName.trim(),
          projectType: generatedWebsite.projectType,
          files: generatedWebsite.files,
          timestamp: Date.now()
        }));
        
        // Open GitHub OAuth in new tab
        const authUrl = `/api/auth/github?action=authorize&origin=${encodeURIComponent(window.location.href)}`;
        window.open(authUrl, 'github-auth', 'width=600,height=700,scrollbars=yes,resizable=yes');
        
        // Listen for auth completion
        window.addEventListener('message', handleAuthMessage, false);
        return;
      }
    }
    
    // Proceed with deployment
    await performDeployment();
  };

  const handleAuthMessage = (event) => {
    if (event.origin !== window.location.origin) return;
    
    if (event.data.type === 'GITHUB_AUTH_SUCCESS') {
      // Remove the event listener
      window.removeEventListener('message', handleAuthMessage, false);
      
      // Auth successful, proceed with deployment
      const { token, user } = event.data;
      
      // Store tokens in session storage and localStorage
      sessionStorage.setItem('github_access_token', token);
      sessionStorage.setItem('github_user', JSON.stringify(user));
      localStorage.setItem('github_access_token', token);
      localStorage.setItem('github_user', JSON.stringify(user));
      
      console.log('GitHub authentication successful, proceeding with deployment');
      
      // Proceed with deployment
      performDeployment();
    } else if (event.data.type === 'GITHUB_AUTH_ERROR') {
      window.removeEventListener('message', handleAuthMessage, false);
      alert('GitHub authentication failed. Please try again.');
    }
  };

  const performDeployment = async () => {
    setIsDeploying(true);
    try {
      // Get GitHub credentials from session storage
      const githubToken = typeof window !== 'undefined' ? sessionStorage.getItem('github_access_token') : null;
      const githubUserData = typeof window !== 'undefined' ? sessionStorage.getItem('github_user') : null;
      const githubUser = githubUserData ? JSON.parse(githubUserData) : null;

      // Get deployment details (either from current state or pending deployment)
      const pendingDeployment = sessionStorage.getItem('pending_deployment');
      let siteName, files, projectType;
      
      if (pendingDeployment) {
        // Use stored deployment details from before auth
        const deployment = JSON.parse(pendingDeployment);
        siteName = deployment.siteName;
        files = deployment.files;
        projectType = deployment.projectType;
        // Clear pending deployment
        sessionStorage.removeItem('pending_deployment');
      } else {
        // Use current state
        siteName = customSiteName.trim();
        files = generatedWebsite.files;
        projectType = generatedWebsite.projectType;
      }

      const response = await fetch('/api/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          files: files,
          project_type: projectType,
          site_name: siteName,
          github_token: githubToken,
          github_username: githubUser?.login
        }),
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Deployment failed');
      }
      
      if (data.preview_url) {
        setPreviewUrl(data.preview_url);
        // Switch to preview view to show the result
        setActiveView('preview');
      }
      if (data.site) setSiteName(data.site);
    } catch (e) {
      console.error('Preview error', e);
      alert('Deployment failed: ' + e.message);
    } finally {
      setIsDeploying(false);
    }
  };

  const handleGitHubExport = async (website, githubAuth) => {
    try {
      setExportStatus('exporting');
      
      // Use custom site name or generate one
      const projectName = customSiteName.trim() || `pixelways-${website.projectType || 'website'}-${Date.now()}`;

      const response = await fetch('/api/export-to-github', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectName,
          files: website.files,
          githubToken: githubAuth.token,
          githubUsername: githubAuth.user.login
        }),
      });

      const data = await response.json();

      if (data.success) {
        setExportStatus('success');
        // Show success message with repo link
        if (window.confirm(`Successfully exported to GitHub!\n\nRepository: ${data.repoUrl}\n\nWould you like to open it?`)) {
          window.open(data.repoUrl, '_blank');
        }
      } else {
        throw new Error(data.error || 'Export failed');
      }
    } catch (error) {
      console.error('GitHub export error:', error);
      setExportStatus('error');
      alert(`Export failed: ${error.message}`);
    } finally {
      // Clear status after 3 seconds
      setTimeout(() => setExportStatus(null), 3000);
    }
  };

  // Show workspace loader during initialization
  if (isWorkspaceLoading || !isClient) {
    return (
      <ThemeProvider>
        <WorkspaceLoader
          isLoading={true}
          progress={loadingProgress}
          currentStep={loadingStep}
          onComplete={() => setIsWorkspaceLoading(false)}
        />
      </ThemeProvider>
    );
  }

  // Mobile Layout
  if (isMobile) {
    return (
      <ThemeProvider>
        <style jsx>{`
          .mobile-workspace {
            height: 100vh;
            display: flex;
            flex-direction: column;
            background: #f8f9fa;
          }
          .mobile-header {
            background: white;
            border-bottom: 1px solid #e5e7eb;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 56px;
          }
          .mobile-header-left {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .mobile-status-dot {
            width: 8px;
            height: 8px;
            background: #16a34a;
            border-radius: 50%;
          }
          .mobile-status-text {
            font-size: 14px;
            font-weight: 500;
            color: #374151;
          }
          .mobile-deploy-button {
            background: #16a34a;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 8px 12px;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          .mobile-deploy-button:hover:not(:disabled) {
            background: #15803d;
          }
          .mobile-deploy-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .mobile-deploy-section {
            display: flex;
            gap: 8px;
            align-items: center;
          }
          .mobile-site-input {
            padding: 6px 8px;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            font-size: 14px;
            width: 140px;
            outline: none;
          }
          .mobile-site-input:focus {
            border-color: #16a34a;
            box-shadow: 0 0 0 1px #16a34a;
          }
          .mobile-site-input:disabled {
            background-color: #f3f4f6;
            opacity: 0.5;
          }
          .mobile-content {
            flex: 1;
            overflow: hidden;
            padding-bottom: 64px; /* Account for fixed bottom nav */
          }
          .mobile-bottom-nav {
            background: white;
            border-top: 1px solid #e5e7eb;
            padding: 8px 0 env(safe-area-inset-bottom, 8px);
            display: flex;
            justify-content: space-around;
            min-height: 64px;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
          }
          .mobile-nav-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 8px;
            background: none;
            border: none;
            cursor: pointer;
            transition: all 0.2s;
            color: #6b7280;
          }
          .mobile-nav-item.active {
            color: #2563eb;
            background: #eff6ff;
            border-radius: 8px;
            margin: 0 4px;
          }
          .mobile-nav-label {
            font-size: 12px;
            font-weight: 500;
            margin-top: 4px;
          }
          .mobile-empty-state {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: #6b7280;
            text-align: center;
            padding: 2rem;
          }
          .mobile-empty-icon {
            margin-bottom: 16px;
            color: #9ca3af;
          }
          .mobile-empty-text {
            font-size: 16px;
            margin-bottom: 8px;
          }
          .mobile-empty-subtitle {
            font-size: 14px;
            color: #9ca3af;
          }
        `}</style>
        <div className="mobile-workspace">
          {/* Mobile Header */}
          <div className="mobile-header">
            <div className="mobile-header-left">
              <div className="mobile-status-dot"></div>
              <span className="mobile-status-text">PixelAI Workspace</span>
            </div>
            {activeView === 'preview' && generatedWebsite && (
              <div className="mobile-deploy-section">
                <input
                  type="text"
                  value={customSiteName}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^a-zA-Z0-9-]/g, ''); // Remove invalid chars
                    setCustomSiteName(value);
                  }}
                  placeholder="Enter site name"
                  className="mobile-site-input"
                  disabled={isDeploying}
                />
                <button
                  onClick={triggerPreview}
                  disabled={isDeploying || !customSiteName.trim()}
                  className="mobile-deploy-button"
                >
                  <Rocket size={16} />
                  <span>{isDeploying ? 'Deploying...' : 'Deploy'}</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Content */}
          <div className="mobile-content">
            {activeView === 'chat' ? (
              <ErrorBoundary fallbackMessage="Chat interface failed to load">
                <WorkspaceChat 
                  generatedWebsite={generatedWebsite}
                  onWebsiteGenerated={handleWebsiteGenerated}
                  onSwitchToCodeView={() => setActiveView('code')}
                  onWebsiteUpdate={setGeneratedWebsite}
                  onFileAction={(action, fileName, result) => {
                    console.log('File action:', action, fileName, result);
                  }}
                />
              </ErrorBoundary>
            ) : activeView === 'code' ? (
              generatedWebsite ? (
                <ErrorBoundary fallbackMessage="Code editor failed to load">
                  <DesignMode 
                    website={generatedWebsite} 
                    onSelectFile={setSelectedFile}
                    onDeploy={triggerPreview}
                    isDeploying={isDeploying}
                    onWebsiteUpdate={setGeneratedWebsite}
                  />
                </ErrorBoundary>
              ) : (
                <div className="mobile-empty-state">
                  <Code size={48} className="mobile-empty-icon" />
                  <div className="mobile-empty-text">No Code Yet</div>
                  <div className="mobile-empty-subtitle">Generate a website to view code files</div>
                </div>
              )
            ) : (
              !generatedWebsite ? (
                <div className="mobile-empty-state">
                  <Eye size={48} className="mobile-empty-icon" />
                  <div className="mobile-empty-text">No Preview Yet</div>
                  <div className="mobile-empty-subtitle">Generate a website to see preview</div>
                </div>
              ) : (
                <ErrorBoundary fallbackMessage="Preview failed to load">
                  <PreviewFrame 
                    previewUrl={previewUrl} 
                    isDeploying={isDeploying}
                    generatedWebsite={generatedWebsite}
                    onGitHubExport={handleGitHubExport}
                  />
                </ErrorBoundary>
              )
            )}
          </div>

          {/* Mobile Bottom Navigation */}
          <div className="mobile-bottom-nav">
            <button
              onClick={() => setActiveView('chat')}
              className={`mobile-nav-item ${activeView === 'chat' ? 'active' : ''}`}
            >
              <MessageSquare size={20} />
              <span className="mobile-nav-label">Chat</span>
            </button>
            <button
              onClick={() => setActiveView('code')}
              className={`mobile-nav-item ${activeView === 'code' ? 'active' : ''}`}
            >
              <Code size={20} />
              <span className="mobile-nav-label">Code</span>
            </button>
            <button
              onClick={() => setActiveView('preview')}
              className={`mobile-nav-item ${activeView === 'preview' ? 'active' : ''}`}
            >
              <Eye size={20} />
              <span className="mobile-nav-label">Preview</span>
            </button>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  // Desktop Layout (existing)
  return (
    <ThemeProvider>
      <WorkspaceLayout siteName={siteName}>
        <div className="h-100 d-flex flex-column">
          {/* Top Navigation Bar */}
          <div className="border-bottom d-flex align-items-center justify-content-between px-3 py-2" style={{height: '48px'}}>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center me-3">
                <div className="bg-success rounded-circle me-2" style={{width: '8px', height: '8px'}}></div>
                <span className="small fw-medium">Connected</span>
              </div>
            </div>
            
            {/* View Toggle Icons */}
            <div className="d-flex align-items-center gap-2">
              <button
                onClick={() => setActiveView('chat')}
                className={`btn btn-sm px-3 d-flex align-items-center gap-2 ${
                  activeView === 'chat' 
                    ? 'btn-primary text-white' 
                    : 'btn-outline-secondary'
                }`}
              >
                <MessageSquare size={16} />
                <span>Chat</span>
              </button>
              <button
                onClick={() => setActiveView('code')}
                className={`btn btn-sm px-3 d-flex align-items-center gap-2 ${
                  activeView === 'code' 
                    ? 'btn-primary text-white' 
                    : 'btn-outline-secondary'
                }`}
              >
                <Code size={16} />
                <span>Code</span>
              </button>
              <button
                onClick={() => setActiveView('preview')}
                className={`btn btn-sm px-3 d-flex align-items-center gap-2 ${
                  activeView === 'preview' 
                    ? 'btn-primary text-white' 
                    : 'btn-outline-secondary'
                }`}
              >
                <Eye size={16} />
                <span>Preview</span>
              </button>
              {activeView === 'preview' && generatedWebsite && (
                <>
                  {/* Site Name Input */}
                  <input
                    type="text"
                    value={customSiteName}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^a-zA-Z0-9-]/g, ''); // Remove invalid chars
                      setCustomSiteName(value);
                    }}
                    placeholder="Enter site name (no spaces)"
                    className="form-control form-control-sm ms-2"
                    style={{
                      width: '200px', 
                      fontSize: '0.875rem',
                      borderColor: customSiteName && !/^[a-zA-Z0-9-]+$/.test(customSiteName) ? '#dc3545' : ''
                    }}
                    disabled={isDeploying}
                  />
                  
                  {/* Deploy Button */}
                  <button
                    onClick={triggerPreview}
                    disabled={!generatedWebsite || isDeploying || !customSiteName.trim()}
                    className="btn btn-success btn-sm px-3 ms-2 d-flex align-items-center gap-2"
                    style={{opacity: (!generatedWebsite || isDeploying || !customSiteName.trim()) ? '0.5' : '1'}}
                  >
                    <Rocket size={16} />
                    {isDeploying ? 'Deploying…' : 'Deploy'}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-fill">
            {activeView === 'chat' ? (
              // Chat View - AI Chat Interface
              <div className="h-100">
                <ErrorBoundary fallbackMessage="Chat interface failed to load">
                  <WorkspaceChat 
                    generatedWebsite={generatedWebsite}
                    onWebsiteGenerated={handleWebsiteGenerated}
                    onSwitchToCodeView={() => setActiveView('code')}
                    onWebsiteUpdate={setGeneratedWebsite}
                    onFileAction={(action, fileName, result) => {
                      console.log('File action:', action, fileName, result);
                    }}
                  />
                </ErrorBoundary>
              </div>
            ) : activeView === 'code' ? (
              // Code View - File Explorer + Monaco Editor
              <div className="h-100">
                {generatedWebsite ? (
                  <ErrorBoundary fallbackMessage="Code editor failed to load">
                    <DesignMode 
                      website={generatedWebsite} 
                      onSelectFile={setSelectedFile}
                      onDeploy={triggerPreview}
                      isDeploying={isDeploying}
                      onWebsiteUpdate={setGeneratedWebsite}
                    />
                  </ErrorBoundary>
                ) : (
                  <div className="h-100 d-flex align-items-center justify-content-center text-muted">
                    <div className="text-center">
                      <Code size={48} className="mb-3 text-muted" />
                      <p>Generate a website to view code files</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              // Preview View - Full Screen Preview
              <div className="h-100">
                {!generatedWebsite ? (
                  <div className="h-100 d-flex align-items-center justify-content-center text-muted">
                    <div className="text-center">
                      <Eye size={48} className="mb-3 text-muted" />
                      <p>Generate a website to see preview</p>
                    </div>
                  </div>
                ) : (
                  <ErrorBoundary fallbackMessage="Preview failed to load">
                    <PreviewFrame 
                      previewUrl={previewUrl} 
                      isDeploying={isDeploying}
                      generatedWebsite={generatedWebsite}
                      onGitHubExport={handleGitHubExport}
                    />
                  </ErrorBoundary>
                )}
              </div>
            )}
          </div>
        </div>
      </WorkspaceLayout>
    </ThemeProvider>
  );
};

export default WorkspacePage;
