'use client';

import React, { useState, useRef } from 'react';
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview, SandpackFileExplorer } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';
import { exportSandpackToStatic } from '../utility/sandpackExport';

const HybridPreviewSystem = ({ files, projectType = 'react', siteName, onDeploy }) => {
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployProgress, setDeployProgress] = useState(0);
  const [deployStatus, setDeployStatus] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
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

  // Handle deployment to Supabase
  const handleDeploy = async () => {
    if (!sandpackRef.current) return;

    setIsDeploying(true);
    setDeployProgress(0);
    setDeployStatus('Preparing files for deployment...');

    try {
      // Step 1: Export Sandpack to static files
      setDeployProgress(20);
      setDeployStatus('Exporting Sandpack project...');
      
      const exportedFiles = await exportSandpackToStatic(sandpackRef.current, files, projectType);
      
      setDeployProgress(40);
      setDeployStatus('Files exported successfully, deploying to Supabase...');

      // Step 2: Deploy to Supabase via API
      if (onDeploy) {
        const result = await onDeploy(exportedFiles, siteName);
        
        if (result.success) {
          setDeployProgress(100);
          setDeployStatus('Deployment successful!');
          setPreviewUrl(result.preview_url);
          
          // Show success message
          setTimeout(() => {
            setDeployStatus('');
            setDeployProgress(0);
          }, 3000);
        } else {
          throw new Error(result.error || 'Deployment failed');
        }
      }

    } catch (error) {
      console.error('Deployment failed:', error);
      setDeployStatus(`Deployment failed: ${error.message}`);
      setDeployProgress(0);
      
      // Reset status after delay
      setTimeout(() => {
        setDeployStatus('');
      }, 5000);
    } finally {
      setIsDeploying(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-gray-50">
      {/* Header with deployment controls */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Live Preview & Deployment
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {siteName || 'Untitled Project'} • {projectType}
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            {previewUrl && (
              <a
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View Live Site →
              </a>
            )}
            
            <button
              onClick={handleDeploy}
              disabled={isDeploying}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 px-6 py-2 rounded-lg font-medium text-white transition-colors flex items-center space-x-2"
            >
              {isDeploying ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Deploying...</span>
                </>
              ) : (
                <>
                  <span>🚀 Deploy to Supabase</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Deployment progress */}
        {isDeploying && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>{deployStatus}</span>
              <span>{deployProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${deployProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Deployment status */}
        {deployStatus && !isDeploying && (
          <div className={`mt-3 p-3 rounded-lg text-sm ${
            deployStatus.includes('successful') 
              ? 'bg-green-100 text-green-800' 
              : deployStatus.includes('failed')
              ? 'bg-red-100 text-red-800'
              : 'bg-blue-100 text-blue-800'
          }`}>
            {deployStatus}
          </div>
        )}
      </div>

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
            previewHeight: '100%',
            autorun: true,
            autoReload: true
          }}
        >
          <SandpackLayout>
            <SandpackFileExplorer />
            <SandpackCodeEditor 
              showLineNumbers 
              showInlineErrors
              showTabs
              wrapContent
            />
            <SandpackPreview 
              showNavigator 
              showRefreshButton
              showOpenInCodeSandbox={false}
            />
          </SandpackLayout>
        </SandpackProvider>
      </div>

      {/* Footer with project info */}
      <div className="bg-white border-t border-gray-200 p-3">
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>Powered by Sandpack + Supabase</span>
          <span>Project Type: {projectType}</span>
        </div>
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
    
    if (!sandpackFiles['/src/main.jsx']) {
      sandpackFiles['/src/main.jsx'] = {
        code: `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`,
        hidden: false
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

export default HybridPreviewSystem;
