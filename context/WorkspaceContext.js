"use client";

import React, { createContext, useContext, useState } from 'react';

const WorkspaceContext = createContext();

export const WorkspaceProvider = ({ children }) => {
  const [activeMode, setActiveMode] = useState('preview'); // 'chat', 'design', 'preview'
  const [previewUrl, setPreviewUrl] = useState('https://www.example.com'); // Placeholder

  const value = {
    activeMode,
    setActiveMode,
    previewUrl,
    setPreviewUrl,
  };

  return (
    <WorkspaceContext.Provider value={value}>
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error('useWorkspace must be used within a WorkspaceProvider');
  }
  return context;
};
