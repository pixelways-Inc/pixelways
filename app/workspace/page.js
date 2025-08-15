"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import WorkspaceLayout from '../../components/WorkspaceLayout';
import WorkspaceChat from '../../components/WorkspaceChat';
import DesignMode from '../../components/DesignMode';
import PreviewFrame from '../../components/PreviewFrame';
import { Loader, Code, Eye, Rocket, MessageSquare } from 'lucide-react';
import { ThemeProvider } from '../../context/ThemeContext';

const WorkspacePage = () => {
  const [generatedWebsite, setGeneratedWebsite] = useState(null);
  const [activeView, setActiveView] = useState('chat'); // 'chat' | 'code' | 'preview'
  const [previewUrl, setPreviewUrl] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);
  const [siteName, setSiteName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Client-side initialization
  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const website = sessionStorage.getItem('generatedWebsite');
      if (website) {
        setGeneratedWebsite(JSON.parse(website));
        setActiveView('code');
      }
    }
  }, [isClient]);

  const handleWebsiteGenerated = (website) => {
    setGeneratedWebsite(website);
    sessionStorage.setItem('generatedWebsite', JSON.stringify(website));
    setActiveView('code');
  };

  const triggerPreview = async () => {
    if (!generatedWebsite || !Array.isArray(generatedWebsite.files)) return;
    setIsDeploying(true);
    try {
      const response = await fetch('/api/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          files: generatedWebsite.files,
          project_type: generatedWebsite.projectType,
        }),
      });
      const data = await response.json();
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

  // Show loading until client-side hydration is complete
  if (!isClient) {
    return (
      <ThemeProvider>
        <div className="h-100 d-flex align-items-center justify-content-center">
          <Loader size={48} className="text-primary" style={{animation: 'spin 1s linear infinite'}} />
        </div>
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
              <button
                onClick={triggerPreview}
                disabled={isDeploying}
                className="mobile-deploy-button"
              >
                <Rocket size={16} />
                <span>{isDeploying ? 'Deploying...' : 'Deploy'}</span>
              </button>
            )}
          </div>

          {/* Mobile Content */}
          <div className="mobile-content">
            {activeView === 'chat' ? (
              <WorkspaceChat 
                generatedWebsite={generatedWebsite}
                onWebsiteGenerated={handleWebsiteGenerated}
                onSwitchToCodeView={() => setActiveView('code')}
              />
            ) : activeView === 'code' ? (
              generatedWebsite ? (
                <DesignMode 
                  website={generatedWebsite} 
                  onSelectFile={setSelectedFile}
                  onDeploy={triggerPreview}
                  isDeploying={isDeploying}
                />
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
                <PreviewFrame previewUrl={previewUrl} isDeploying={isDeploying} />
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
              {activeView === 'preview' && (
                <button
                  onClick={triggerPreview}
                  disabled={!generatedWebsite || isDeploying}
                  className="btn btn-success btn-sm px-3 ms-2 d-flex align-items-center gap-2"
                  style={{opacity: (!generatedWebsite || isDeploying) ? '0.5' : '1'}}
                >
                  <Rocket size={16} />
                  {isDeploying ? 'Deploying…' : 'Deploy'}
                </button>
              )}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-fill">
            {activeView === 'chat' ? (
              // Chat View - AI Chat Interface
              <div className="h-100">
                <WorkspaceChat 
                  generatedWebsite={generatedWebsite}
                  onWebsiteGenerated={handleWebsiteGenerated}
                  onSwitchToCodeView={() => setActiveView('code')}
                />
              </div>
            ) : activeView === 'code' ? (
              // Code View - File Explorer + Monaco Editor
              <div className="h-100">
                {generatedWebsite ? (
                  <DesignMode 
                    website={generatedWebsite} 
                    onSelectFile={setSelectedFile}
                    onDeploy={triggerPreview}
                    isDeploying={isDeploying}
                  />
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
                  <PreviewFrame previewUrl={previewUrl} isDeploying={isDeploying} />
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
