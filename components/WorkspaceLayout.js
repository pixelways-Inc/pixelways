"use client";

import React from 'react';
import WorkspaceSidebar from './WorkspaceSidebar';
import WorkspaceTopBar from './WorkspaceTopBar';

const WorkspaceLayout = ({ children, siteName }) => {
  return (
    <div className="flex h-screen bg-white"> {/* workspace container */}
      <WorkspaceSidebar siteName={siteName} />
      <div className="flex-1 flex flex-col">
        <WorkspaceTopBar />
        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WorkspaceLayout;
