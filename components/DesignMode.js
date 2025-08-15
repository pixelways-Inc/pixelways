"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronDown, File, Folder, FileText, Code, Play, Download } from 'lucide-react';
import dynamic from 'next/dynamic';
const MonacoCodeViewer = dynamic(() => import('./MonacoCodeViewer'), { ssr: false });

const DesignMode = ({ website, onSelectFile }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [expandedFolders, setExpandedFolders] = useState({});
  const [isDeploying, setIsDeploying] = useState(false);

  if (!website) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        <p>No website generated yet</p>
      </div>
    );
  }

  const toggleFolder = (path) => {
    setExpandedFolders(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const handleDeploy = async () => {
    if (!website || !Array.isArray(website.files)) return;
    setIsDeploying(true);
    try {
      const response = await fetch('/api/preview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          files: website.files,
          project_type: website.projectType,
        }),
      });
      
      const result = await response.json();
      if (result.preview_url) {
        const url = result.preview_url;
        window.open(url, '_blank', 'noopener');
      } else if (result.success && result.url) {
        window.open(result.url, '_blank', 'noopener');
      } else {
        alert('Deployment failed: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Deploy error:', error);
      alert('Deployment failed: ' + error.message);
    } finally {
      setIsDeploying(false);
    }
  };

  const getFileIcon = (filename) => {
    const ext = filename.split('.').pop();
    switch (ext) {
      case 'html':
        return <FileText size={16} className="text-orange-500" />;
      case 'css':
        return <Code size={16} className="text-blue-500" />;
      case 'js':
        return <Code size={16} className="text-yellow-500" />;
      case 'json':
        return <FileText size={16} className="text-green-500" />;
      default:
        return <File size={16} className="text-gray-500" />;
    }
  };

  const FileTreeNode = ({ name, path, isFile, content, children, level = 0 }) => {
    const isExpanded = expandedFolders[path];
    
    if (isFile) {
      return (
        <div 
          className={`flex items-center py-1 px-2 hover:bg-gray-100 cursor-pointer ${
            selectedFile?.path === path ? 'bg-blue-50 border-r-2 border-blue-500' : ''
          }`}
          style={{ paddingLeft: `${level * 16 + 8}px` }}
          onClick={() => {
            const file = { name, path, content };
            setSelectedFile(file);
            if (onSelectFile) onSelectFile(file);
          }}
        >
          {getFileIcon(name)}
          <span className="ml-2 text-sm">{name}</span>
        </div>
      );
    }

    return (
      <div>
        <div 
          className="flex items-center py-1 px-2 hover:bg-gray-100 cursor-pointer"
          style={{ paddingLeft: `${level * 16 + 8}px` }}
          onClick={() => toggleFolder(path)}
        >
          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          <Folder size={16} className="text-blue-500 ml-1" />
          <span className="ml-2 text-sm">{name}</span>
        </div>
        {isExpanded && children && (
          <div>
            {children.map((child, index) => (
              <FileTreeNode key={index} {...child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const generateFileTree = () => {
    const files = [];
    const fileArray = Array.isArray(website.files) ? website.files : [];

    // Helper to get content by path
    const contentByPath = (path) => fileArray.find((f) => f.path === path)?.content || '';

    if (website.projectType === 'static') {
      const staticPaths = ['index.html', 'style.css', 'script.js'];
      for (const p of staticPaths) {
        const content = contentByPath(p);
        if (content) {
          files.push({ name: p, path: p, isFile: true, content });
        }
      }
    } else if (website.projectType === 'react-vite') {
      const srcChildren = [];
      const srcFiles = ['src/App.jsx', 'src/index.css', 'src/main.jsx'];
      for (const p of srcFiles) {
        const name = p.split('/').pop();
        const content = contentByPath(p);
        if (content) srcChildren.push({ name, path: p, isFile: true, content });
      }
      if (srcChildren.length > 0) {
        files.push({ name: 'src', path: 'src', isFile: false, children: srcChildren });
      }
      const rootFiles = ['package.json', 'index.html', 'vite.config.js'];
      for (const p of rootFiles) {
        const content = contentByPath(p);
        if (content) files.push({ name: p, path: p, isFile: true, content });
      }
    }

    // Generic fallback: list any remaining files at root level
    if (files.length === 0 && fileArray.length > 0) {
      for (const f of fileArray) {
        const name = f.path.split('/').pop();
        files.push({ name, path: f.path, isFile: true, content: f.content });
      }
    }

    return files;
  };

  const fileTree = generateFileTree();

  return (
    <div className="h-full flex">
      {/* File Explorer */}
      <div className="w-80 border-r border-gray-200 bg-gray-50">
        <div className="h-10 border-b border-gray-200 flex items-center justify-between px-3">
          <span className="text-sm font-medium">Files</span>
          <div className="flex items-center space-x-1">
            <button
              onClick={handleDeploy}
              disabled={isDeploying}
              className="px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 disabled:opacity-50 flex items-center space-x-1"
            >
              <Play size={12} />
              <span>{isDeploying ? 'Deploying...' : 'Deploy'}</span>
            </button>
            <button className="p-1 text-gray-500 hover:text-gray-700">
              <Download size={14} />
            </button>
          </div>
        </div>
        <div className="overflow-auto" style={{ height: 'calc(100% - 40px)' }}>
          {fileTree.map((node, index) => (
            <FileTreeNode key={index} {...node} />
          ))}
        </div>
      </div>

      {/* Code Editor */}
      <div className="flex-1 flex flex-col">
        {selectedFile ? (
          <>
            <div className="h-10 border-b border-gray-200 flex items-center px-4">
              <div className="flex items-center space-x-2">
                {getFileIcon(selectedFile.name)}
                <span className="text-sm font-medium">{selectedFile.name}</span>
              </div>
            </div>
            <div className="flex-1 bg-white">
              <MonacoCodeViewer
                value={selectedFile.content}
                language={(() => {
                  const ext = selectedFile.name.split('.').pop();
                  if (ext === 'html') return 'html';
                  if (ext === 'css') return 'css';
                  if (ext === 'js' || ext === 'jsx' || ext === 'ts' || ext === 'tsx') return 'javascript';
                  if (ext === 'json') return 'json';
                  return 'plaintext';
                })()}
                height={'100%'}
              />
            </div>
          </>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            <div className="text-center">
              <Code size={48} className="mx-auto mb-4 text-gray-400" />
              <p>Select a file to view its contents</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesignMode;
