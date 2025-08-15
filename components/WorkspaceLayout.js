"use client";

import React from 'react';

import WorkspaceTopBar from './WorkspaceTopBar';

const WorkspaceLayout = ({ children, siteName }) => {
  return (
    <>
      <style jsx>{`
        .workspace-container {
          height: 100vh;
          background: white;
        }
        .main-content {
          flex: 1;
          overflow: hidden;
        }
      `}</style>
      <div className="d-flex workspace-container">
      
        <div className="d-flex flex-column flex-fill">
          <WorkspaceTopBar />
          <div className="main-content">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkspaceLayout;
