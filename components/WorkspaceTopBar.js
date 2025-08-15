"use client";

import React from 'react';
import { Monitor, RefreshCw, ExternalLink, Code, Share, ChevronDown, Menu } from 'lucide-react';

const WorkspaceTopBar = () => {
  return (
    <>
      <style jsx>{`
        .top-bar {
          height: 64px;
          background: #1a1a2e;
          border-bottom: 1px solid #374151;
          padding: 0 1rem;
        }
        .app-viewer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(17, 24, 39, 0.8);
          border: 1px solid #374151;
          border-radius: 6px;
          padding: 0.5rem 1rem;
        }
        .app-viewer-text {
          font-size: 0.875rem;
          font-weight: 500;
          color: #e5e7eb;
        }
        .user-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #3b82f6;
          border-radius: 6px;
          padding: 0.5rem 1rem;
        }
        .user-avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #60a5fa;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
        }
        .user-name {
          font-size: 0.875rem;
          font-weight: 500;
          color: white;
        }
        .control-button {
          background: transparent;
          border: 1px solid #374151;
          border-radius: 6px;
          padding: 0.5rem;
          color: #9ca3af;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .control-button:hover {
          background: rgba(156, 163, 175, 0.1);
        }
        .publish-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #4f46e5;
          border-radius: 6px;
          padding: 0.5rem 1rem;
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: background-color 0.2s;
        }
        .publish-button:hover {
          background: #6366f1;
        }
        .share-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #4f46e5;
          border-radius: 6px;
          padding: 0.5rem 1rem;
          color: white;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          border: none;
        }
        .menu-button {
          background: transparent;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          padding: 0.5rem;
        }
      `}</style>
         {/* 
      <div className="top-bar d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-4">
          <div className="app-viewer">
            <Monitor size={16} style={{color: '#9ca3af'}} />
            <span className="app-viewer-text">App Viewer</span>
          </div>
          <div className="user-tab">
            <div className="user-avatar">
              JD
            </div>
            <span className="user-name">John Doe</span>
          </div>
        </div>

        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-2">
            <button className="control-button">
              <RefreshCw size={16} />
            </button>
            <button className="control-button">
              <ExternalLink size={16} />
            </button>
            <button className="control-button">
              <Code size={16} />
            </button>
          </div>
          <button className="publish-button">
            <Share size={16} />
            Publish
          </button>
          <button className="share-button">
            Share <ChevronDown size={16} />
          </button>
          <button className="menu-button">
            <Menu size={20} />
          </button>
        </div>
      </div>
      */}
    </>
  );
};

export default WorkspaceTopBar;