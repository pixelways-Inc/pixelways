"use client";

import React from 'react';
import WorkspaceSidebar from './WorkspaceSidebar';
import WorkspaceTopBar from './WorkspaceTopBar';

const WorkspaceLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#0f0f23]"> {/* workspace container */}
      <WorkspaceSidebar />
      <div className="flex flex-col flex-1 overflow-hidden"> {/* mainContent */}
        <WorkspaceTopBar />
        <div className="flex-1 bg-white m-4 rounded-xl overflow-hidden shadow-lg"> {/* contentArea */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default WorkspaceLayout;
