"use client";

import React from 'react';
import WorkspaceSidebar from './WorkspaceSidebar';
import WorkspaceTopBar from './WorkspaceTopBar';

const WorkspaceLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-white"> {/* workspace container */}
      {children}
    </div>
  );
};

export default WorkspaceLayout;
