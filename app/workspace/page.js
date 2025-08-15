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
      <div className="h-full flex">
        {/* Left Panel */}
        <div className="w-1/2 border-r border-gray-200 flex flex-col">
          {/* Navigation Bar */}
          <div className="h-12 border-b border-gray-200 flex items-center justify-between px-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Connected</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActiveTab('chat')}
                className={`px-3 py-1 text-sm rounded ${
                  activeTab === 'chat' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Chat
              </button>
              <button
                onClick={() => setActiveTab('design')}
                className={`px-3 py-1 text-sm rounded ${
                  activeTab === 'design' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Design
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1">
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
              <div className="h-full flex items-center justify-center text-gray-500">
                <p>Generate a website to see design files</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Preview */}
        <div className="w-1/2 flex flex-col">
          <div className="h-12 border-b border-gray-200 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setRightTab('preview')}
                className={`px-3 py-1 text-sm rounded ${rightTab === 'preview' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Preview
              </button>
              <button
                onClick={() => setRightTab('code')}
                className={`px-3 py-1 text-sm rounded ${rightTab === 'code' ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Code
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={triggerPreview}
                disabled={!generatedWebsite || isDeploying}
                className="px-3 py-1 text-sm rounded bg-gray-900 text-white disabled:opacity-50"
              >
                {isDeploying ? 'Deploying…' : 'Preview'}
              </button>
            </div>
          </div>
          <div className="flex-1">
            {!generatedWebsite ? (
              <div className="h-full flex items-center justify-center text-gray-500"><p>Generate a website to see preview</p></div>
            ) : rightTab === 'preview' ? (
              <PreviewFrame previewUrl={previewUrl} isDeploying={isDeploying} />
            ) : (
              <div className="h-full">
                {selectedFile ? (
                  <MonacoCodeViewer
                    value={selectedFile.content}
                    language={(() => {
                      const ext = selectedFile.name.split('.').pop();
                      if (ext === 'html') return 'html';
                      if (ext === 'css') return 'css';
                      if (ext === 'js' || ext === 'jsx' || ext === 'ts' || ext === 'tsx') return 'javascript';
                      if (ext === 'json') return 'json';
                      return 'plaintext';
                    })()}
                    height={'100%'}
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500"><p>Select a file in Design to view code</p></div>
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
