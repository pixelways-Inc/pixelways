"use client";

import React from 'react';
import { Menu, Wrench, ChevronDown, MessageSquare } from 'lucide-react';
import ProjectExplorer from './ProjectExplorer';

const WorkspaceSidebar = ({ siteName }) => {
  return (
    <>
      <style jsx>{`
        .sidebar {
          width: 280px;
          background: #16213e;
          border-right: 1px solid #374151;
          height: 100vh;
        }
        .sidebar-header {
          padding: 1rem;
          border-bottom: 1px solid #374151;
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo-icon {
          width: 32px;
          height: 32px;
          background: white;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.125rem;
          font-weight: bold;
          color: black;
        }
        .logo-text {
          font-size: 1.25rem;
          font-weight: bold;
          color: white;
        }
        .beta-badge {
          background: #f59e0b;
          color: white;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.125rem 0.5rem;
          border-radius: 50px;
          margin-left: 0.25rem;
        }
        .toggle-button {
          margin-left: auto;
          background: transparent;
          border: 1px solid #374151;
          border-radius: 6px;
          padding: 0.25rem;
          color: #9ca3af;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .toggle-button:hover {
          background: #1e2951;
        }
        .sidebar-content {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
        }
        .sidebar-bottom {
          padding: 1rem;
          border-top: 1px solid #374151;
        }
        .chat-prompt {
          background: rgba(17, 24, 39, 0.8);
          border: 1px solid #374151;
          border-radius: 6px;
          padding: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .chat-prompt:hover {
          background: #1e2951;
        }
        .chat-prompt-text {
          font-size: 0.875rem;
          color: #9ca3af;
          font-style: italic;
        }
        .engineer-tag {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.75rem;
          padding: 0.5rem;
          background: rgba(79, 70, 229, 0.2);
          border: 1px solid #4f46e5;
          border-radius: 6px;
        }
        .engineer-text {
          font-size: 0.875rem;
          font-weight: 500;
          color: #a5b4fc;
        }
        .model-selector {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 0.5rem;
          padding: 0.5rem;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid #374151;
          border-radius: 6px;
          cursor: pointer;
        }
        .model-text {
          font-size: 0.875rem;
          color: #e5e7eb;
        }
      `}</style>
      <div className="sidebar d-flex flex-column">
        {/* Sidebar Header */}
        <div className="sidebar-header d-flex align-items-center">
          <div className="logo-container">
            <div className="logo-icon">
              P
            </div>
            <span className="logo-text">PixelAI</span>
            <span className="beta-badge">Beta</span>
          </div>
          <button className="toggle-button">
            <Menu size={16} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="sidebar-content">
          <ProjectExplorer siteName={siteName} />
        </div>

        {/* Sidebar Bottom */}
        <div className="sidebar-bottom">
          <div className="chat-prompt">
            <MessageSquare size={16} style={{color: '#9ca3af'}} />
            <span className="chat-prompt-text">Ask a follow-up...</span>
          </div>
          <div className="engineer-tag">
            <Wrench size={16} style={{color: '#a5b4fc'}} />
            <span className="engineer-text">Engineer</span>
          </div>
          <div className="model-selector">
            <span className="model-text">Model: GPT-4o</span>
            <ChevronDown size={16} style={{color: '#9ca3af'}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkspaceSidebar;