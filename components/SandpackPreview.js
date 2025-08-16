'use client';

import React, { useState, useRef, useEffect } from 'react';
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview, SandpackFileExplorer } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';

const SandpackPreview = ({ files, projectType = 'react', siteName, onExport }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const sandpackRef = useRef(null);

  // Convert files to Sandpack format
  const sandpackFiles = convertFilesToSandpack(files, projectType);

  // Get template based on project type
  const getTemplate = (type) => {
    switch (type) {
      case 'react':
      case 'react-vite':
        return 'react';
      case 'vue':
        return 'vue';
      case 'vanilla':
        return 'vanilla';
      case 'static':
        return 'static';
      default:
        return 'react';
    }
  };

  // Handle static export
  const handleExport = async () => {
    if (!sandpackRef.current) return;

    setIsExporting(true);
    setExportProgress(0);

    try {
      // Get the built files from Sandpack
      const builtFiles = await exportSandpackFiles(sandpackRef.current, projectType);
      
      setExportProgress(50);

      // Call the export callback with the built files
      if (onExport) {
        await onExport(builtFiles, siteName);
      }

      setExportProgress(100);
      
      // Reset progress after a delay
      setTimeout(() => {
        setIsExporting(false);
        setExportProgress(0);
      }, 2000);

    } catch (error) {
      console.error('Export failed:', error);
      setIsExporting(false);
      setExportProgress(0);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header with export button */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Live Preview - {siteName || 'Untitled Project'}
        </h2>
        <button
          onClick={handleExport}
          disabled={isExporting}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 px-4 py-2 rounded-lg font-medium transition-colors"
        >
          {isExporting ? 'Exporting...' : 'Export to Supabase'}
        </button>
      </div>

      {/* Export progress bar */}
      {isExporting && (
        <div className="bg-gray-100 p-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${exportProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Exporting files... {exportProgress}%
          </p>
        </div>
      )}

      {/* Sandpack container */}
      <div className="flex-1 min-h-0">
        <SandpackProvider
          ref={sandpackRef}
          template={getTemplate(projectType)}
          theme={nightOwl}
          files={sandpackFiles}
          customSetup={{
            dependencies: getDependencies(projectType),
            entry: getEntryPoint(projectType)
          }}
          options={{
            showLineNumbers: true,
            showInlineErrors: true,
            showNavigator: true,
            showTabs: true,
            wrapContent: true,
            editorHeight: '100%',
            previewHeight: '100%'
          }}
        >
          <SandpackLayout>
            <SandpackFileExplorer />
            <SandpackCodeEditor showLineNumbers showInlineErrors />
            <SandpackPreview showNavigator showRefreshButton />
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
};

// Helper function to convert files to Sandpack format
function convertFilesToSandpack(files, projectType) {
  const sandpackFiles = {};

  files.forEach(file => {
    let content = file.content;
    
    // Handle different file types
    if (file.path.endsWith('.jsx') || file.path.endsWith('.tsx')) {
      // Ensure React components are properly formatted
      if (!content.includes('import React') && !content.includes('import {')) {
        content = `import React from 'react';\n\n${content}`;
      }
    }

    // Add file to Sandpack
    sandpackFiles[`/${file.path}`] = {
      code: content,
      hidden: false
    };
  });

  // Add missing essential files based on project type
  if (projectType === 'react' || projectType === 'react-vite') {
    if (!sandpackFiles['/package.json']) {
      sandpackFiles['/package.json'] = {
        code: JSON.stringify({
          name: "react-app",
          version: "0.1.0",
          dependencies: {
            "react": "^18.2.0",
            "react-dom": "^18.2.0"
          }
        }, null, 2),
        hidden: true
      };
    }
  }

  return sandpackFiles;
}

// Helper function to get dependencies based on project type
function getDependencies(projectType) {
  switch (projectType) {
    case 'react':
    case 'react-vite':
      return {
        'react': '^18.2.0',
        'react-dom': '^18.2.0'
      };
    case 'vue':
      return {
        'vue': '^3.3.0'
      };
    default:
      return {};
  }
}

// Helper function to get entry point
function getEntryPoint(projectType) {
  switch (projectType) {
    case 'react':
    case 'react-vite':
      return '/src/main.jsx';
    case 'vue':
      return '/src/main.js';
    default:
      return '/index.html';
  }
}

// Helper function to export Sandpack files
async function exportSandpackFiles(sandpackInstance, projectType) {
  // This is a placeholder - in a real implementation, you'd need to:
  // 1. Get the built output from Sandpack
  // 2. Extract the static files
  // 3. Return them in the format expected by your API
  
  // For now, we'll return the original files with some processing
  const files = [];
  
  // This would need to be implemented based on Sandpack's API
  // The actual implementation depends on how you want to capture the built output
  
  return files;
}

export default SandpackPreview;
