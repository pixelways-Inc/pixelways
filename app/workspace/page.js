"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import WorkspaceLayout from '../../components/WorkspaceLayout';
import WorkspaceChat from '../../components/WorkspaceChat';
import DesignMode from '../../components/DesignMode';
import PreviewFrame from '../../components/PreviewFrame';
import { Loader, Code, Eye, Rocket } from 'lucide-react';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '../../context/ThemeContext';
const MonacoCodeViewer = dynamic(() => import('../../components/MonacoCodeViewer'), { ssr: false });

const WorkspacePage = () => {
  const [generatedWebsite, setGeneratedWebsite] = useState(null);
  const [activeView, setActiveView] = useState('code'); // 'code' | 'preview'
  const [previewUrl, setPreviewUrl] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);
  const [siteName, setSiteName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const website = sessionStorage.getItem('generatedWebsite');
    if (website) {
      setGeneratedWebsite(JSON.parse(website));
      setActiveView('code');
    }
  }, []);

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
            {activeView === 'code' ? (
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
