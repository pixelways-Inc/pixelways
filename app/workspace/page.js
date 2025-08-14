"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import WorkspaceLayout from '../../components/WorkspaceLayout';
import WorkspaceChat from '../../components/WorkspaceChat';
import DesignMode from '../../components/DesignMode';
import PreviewFrame from '../../components/PreviewFrame';

const WorkspacePage = () => {
  const [generatedWebsite, setGeneratedWebsite] = useState(null);
  const [activeTab, setActiveTab] = useState('chat');
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

  return (
    <WorkspaceLayout>
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
              <DesignMode website={generatedWebsite} />
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
            <span className="text-sm font-medium">Preview</span>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Live</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            {generatedWebsite ? (
              <PreviewFrame website={generatedWebsite} />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                <p>Generate a website to see preview</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </WorkspaceLayout>
  );
};

export default WorkspacePage;
