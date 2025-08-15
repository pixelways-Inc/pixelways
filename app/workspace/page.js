"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import WorkspaceLayout from '../../components/WorkspaceLayout';
import WorkspaceChat from '../../components/WorkspaceChat';
import DesignMode from '../../components/DesignMode';
import PreviewFrame from '../../components/PreviewFrame';
import { Loader } from 'lucide-react';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '../../context/ThemeContext';
const MonacoCodeViewer = dynamic(() => import('../../components/MonacoCodeViewer'), { ssr: false });

const WorkspacePage = () => {
  const [generatedWebsite, setGeneratedWebsite] = useState(null);
  const [activeTab, setActiveTab] = useState('chat');
  const [previewUrl, setPreviewUrl] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);
  const [siteName, setSiteName] = useState('');
  const [rightTab, setRightTab] = useState('preview'); // 'preview' | 'code'
  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const website = sessionStorage.getItem('generatedWebsite');
    if (website) {
      setGeneratedWebsite(JSON.parse(website));
      setActiveTab('design');
    }
  }, []);

  const handleWebsiteGenerated = (website) => {
    setGeneratedWebsite(website);
    sessionStorage.setItem('generatedWebsite', JSON.stringify(website));
    setActiveTab('design');
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
      if (data.preview_url) setPreviewUrl(data.preview_url);
      if (data.site) setSiteName(data.site);
    } catch (e) {
      console.error('Preview error', e);
    } finally {
      setIsDeploying(false);
    }
  };

  return (
    <ThemeProvider>
      <WorkspaceLayout siteName={siteName}>
      <div className="h-100 d-flex">
        {/* Left Panel */}
        <div className="w-50 border-end d-flex flex-column">
          {/* Navigation Bar */}
          <div className="border-bottom d-flex align-items-center justify-content-between px-3 py-2" style={{height: '48px'}}>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center me-3">
                <div className="bg-success rounded-circle me-2" style={{width: '8px', height: '8px'}}></div>
                <span className="small fw-medium">Connected</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <button
                onClick={() => setActiveTab('chat')}
                className={`btn btn-sm px-3 ${
                  activeTab === 'chat' 
                    ? 'btn-light text-dark' 
                    : 'btn-outline-secondary'
                }`}
              >
                Chat
              </button>
              <button
                onClick={() => setActiveTab('design')}
                className={`btn btn-sm px-3 ${
                  activeTab === 'design' 
                    ? 'btn-light text-dark' 
                    : 'btn-outline-secondary'
                }`}
              >
                Design
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-fill">
            {activeTab === 'chat' && (
              <WorkspaceChat 
                generatedWebsite={generatedWebsite}
                onWebsiteGenerated={handleWebsiteGenerated}
              />
            )}
            
            {activeTab === 'design' && generatedWebsite && (
              <DesignMode website={generatedWebsite} onSelectFile={(f) => { setSelectedFile(f); setRightTab('code'); }} />
            )}
            
            {activeTab === 'design' && !generatedWebsite && (
              <div className="h-100 d-flex align-items-center justify-content-center text-muted">
                <p>Generate a website to see design files</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="w-50 d-flex flex-column">
          <div className="border-bottom d-flex align-items-center justify-content-between px-3 py-2" style={{height: '48px'}}>
            <div className="d-flex align-items-center gap-2">
              <button
                onClick={() => setRightTab('preview')}
                className={`btn btn-sm px-3 ${rightTab === 'preview' ? 'btn-light text-dark' : 'btn-outline-secondary'}`}
              >
                Preview
              </button>
              <button
                onClick={() => setRightTab('code')}
                className={`btn btn-sm px-3 ${rightTab === 'code' ? 'btn-light text-dark' : 'btn-outline-secondary'}`}
              >
                Code
              </button>
            </div>
            <div className="d-flex align-items-center">
              <button
                onClick={triggerPreview}
                disabled={!generatedWebsite || isDeploying}
                className="btn btn-dark btn-sm px-3"
                style={{opacity: (!generatedWebsite || isDeploying) ? '0.5' : '1'}}
              >
                {isDeploying ? 'Deploying…' : 'Preview'}
              </button>
            </div>
          </div>
          <div className="flex-fill">
            {!generatedWebsite ? (
              <div className="h-100 d-flex align-items-center justify-content-center text-muted"><p>Generate a website to see preview</p></div>
            ) : rightTab === 'preview' ? (
              <PreviewFrame previewUrl={previewUrl} isDeploying={isDeploying} />
            ) : (
              <div className="h-100">
                {selectedFile ? (
                  <MonacoCodeViewer
                    value={selectedFile.content}
                    language={(() => {
                      const filePath = selectedFile.path || selectedFile.name || '';
                      const ext = filePath.split('.').pop()?.toLowerCase();
                      if (ext === 'html') return 'html';
                      if (ext === 'css') return 'css';
                      if (ext === 'js' || ext === 'jsx' || ext === 'ts' || ext === 'tsx') return 'javascript';
                      if (ext === 'json') return 'json';
                      return 'plaintext';
                    })()}
                    height={'100%'}
                  />
                ) : (
                  <div className="h-100 d-flex align-items-center justify-content-center text-muted"><p>Select a file in Design to view code</p></div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      </WorkspaceLayout>
    </ThemeProvider>
  );
};

export default WorkspacePage;
