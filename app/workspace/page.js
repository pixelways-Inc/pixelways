"use client";

import React from 'react';
import WorkspaceLayout from '@/components/WorkspaceLayout';
import DesignMode from '@/components/DesignMode';
import PreviewFrame from '@/components/PreviewFrame';
import { WorkspaceProvider, useWorkspace } from '@/context/WorkspaceContext';

const WorkspaceContent = () => {
  const { activeMode, setActiveMode, previewUrl } = useWorkspace();

  let content;
  if (activeMode === 'chat') {
    content = (
      <div className="flex items-center justify-center h-full text-gray-700">
        Chat Interface Goes Here
      </div>
    );
  } else if (activeMode === 'design') {
    content = <DesignMode />;
  } else if (activeMode === 'preview') {
    content = <PreviewFrame previewUrl={previewUrl} />;
  }

  return (
    <WorkspaceLayout>
      <div className="flex h-full">
        {/* Left Panel (Chat/Design) */}
        <div className="w-1/2 border-r border-gray-200 flex flex-col">
          <div className="flex border-b border-gray-200">
            <button
              className={`px-4 py-2 ${activeMode === 'chat' ? 'bg-gray-100' : 'bg-white'} text-gray-700`}
              onClick={() => setActiveMode('chat')}
            >
              Chat
            </button>
            <button
              className={`px-4 py-2 ${activeMode === 'design' ? 'bg-gray-100' : 'bg-white'} text-gray-700`}
              onClick={() => setActiveMode('design')}
            >
              Design
            </button>
          </div>
          <div className="flex-1 overflow-auto">
            {content}
          </div>
        </div>

        {/* Right Panel (Preview) */}
        <div className="w-1/2">
          <PreviewFrame previewUrl={previewUrl} />
        </div>
      </div>
    </WorkspaceLayout>
  );
};

const WorkspacePage = () => {
  return (
    <WorkspaceProvider>
      <WorkspaceContent />
    </WorkspaceProvider>
  );
};

export default WorkspacePage;
