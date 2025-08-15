"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronDown, File, Folder, FileText, Code, Play, Download } from 'lucide-react';
import dynamic from 'next/dynamic';
const MonacoCodeViewer = dynamic(() => import('./MonacoCodeViewer'), { ssr: false });

const DesignMode = ({ website, onSelectFile, onDeploy, isDeploying }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [expandedFolders, setExpandedFolders] = useState({});

  if (!website) {
    return (
      <>
        <style jsx>{`
          .no-website {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #6b7280;
          }
        `}</style>
        <div className="no-website">
          <p>No website generated yet</p>
        </div>
      </>
    );
  }

  const toggleFolder = (path) => {
    setExpandedFolders(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const handleDeploy = async () => {
    if (onDeploy) {
      // Use the parent's deploy function which sets preview URL state
      await onDeploy();
    }
  };

  const getFileIcon = (filename) => {
    const ext = filename.split('.').pop();
    switch (ext) {
      case 'html': return <FileText size={16} style={{color: '#e34c26'}} />;
      case 'css': return <FileText size={16} style={{color: '#1572b6'}} />;
      case 'js': case 'jsx': return <FileText size={16} style={{color: '#f7df1e'}} />;
      case 'ts': case 'tsx': return <FileText size={16} style={{color: '#3178c6'}} />;
      case 'json': return <FileText size={16} style={{color: '#000000'}} />;
      case 'md': return <FileText size={16} style={{color: '#083fa1'}} />;
      default: return <File size={16} style={{color: '#6b7280'}} />;
    }
  };

  const FileTreeNode = ({ name, type, content, children, path = '' }) => {
    const fullPath = path ? `${path}/${name}` : name;
    const isExpanded = expandedFolders[fullPath];
    
    if (type === 'file') {
      return (
        <>
          <style jsx>{`
            .file-item {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              padding: 0.25rem 0.75rem;
              cursor: pointer;
              font-size: 0.875rem;
              transition: background-color 0.2s;
            }
            .file-item:hover {
              background: #f3f4f6;
            }
            .file-item.selected {
              background: #dbeafe;
              color: #1d4ed8;
            }
          `}</style>
          <div
            className={`file-item ${selectedFile?.name === name ? 'selected' : ''}`}
            onClick={() => {
              const file = { name, content, path: fullPath };
              setSelectedFile(file);
              if (onSelectFile) onSelectFile(file);
            }}
          >
            {getFileIcon(name)}
            <span>{name}</span>
          </div>
        </>
      );
    }

    return (
      <>
        <style jsx>{`
          .folder-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.25rem 0.75rem;
            cursor: pointer;
            font-size: 0.875rem;
            transition: background-color 0.2s;
          }
          .folder-item:hover {
            background: #f3f4f6;
          }
          .folder-children {
            padding-left: 1rem;
          }
        `}</style>
        <div>
          <div className="folder-item" onClick={() => toggleFolder(fullPath)}>
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <Folder size={16} style={{color: '#f59e0b'}} />
            <span>{name}</span>
          </div>
          {isExpanded && children && (
            <div className="folder-children">
              {children.map((child, index) => (
                <FileTreeNode key={index} {...child} path={fullPath} />
              ))}
            </div>
          )}
        </div>
      </>
    );
  };

  const generateFileTree = () => {
    if (!website.files || !Array.isArray(website.files)) return [];

    const tree = {};
    
    website.files.forEach(file => {
      const filePath = file.path || file.name || '';
      const parts = filePath.split('/');
      let current = tree;
      
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        
        if (i === parts.length - 1) {
          // This is a file
          current[part] = {
            name: part,
            type: 'file',
            content: file.content
          };
        } else {
          // This is a directory
          if (!current[part]) {
            current[part] = {
              name: part,
              type: 'folder',
              children: {}
            };
          }
          current = current[part].children;
        }
      }
    });

    const convertToArray = (obj) => {
      return Object.values(obj).map(item => {
        if (item.type === 'folder') {
          return {
            ...item,
            children: convertToArray(item.children)
          };
        }
        return item;
      });
    };

    return convertToArray(tree);
  };

  const fileTree = generateFileTree();

  return (
    <>
      <style jsx>{`
        .design-container {
          height: 100%;
        }
        .file-explorer {
          width: 320px;
          background: #f9fafb;
          border-right: 1px solid #e5e7eb;
        }
        .file-explorer-header {
          height: 40px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 0.75rem;
        }
        .header-title {
          font-size: 0.875rem;
          font-weight: 500;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .deploy-button {
          padding: 0.25rem 0.5rem;
          background: #16a34a;
          color: white;
          border: none;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: background-color 0.2s;
        }
        .deploy-button:hover:not(:disabled) {
          background: #15803d;
        }
        .deploy-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .download-button {
          padding: 0.25rem;
          background: transparent;
          border: none;
          color: #6b7280;
          cursor: pointer;
          transition: color 0.2s;
        }
        .download-button:hover {
          color: #374151;
        }
        .file-tree {
          overflow: auto;
          height: calc(100% - 40px);
        }
        .code-editor {
          flex: 1;
        }
        .editor-header {
          height: 40px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          padding: 0 1rem;
        }
        .editor-file-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .editor-filename {
          font-size: 0.875rem;
          font-weight: 500;
        }
        .editor-content {
          flex: 1;
          background: white;
        }
        .no-file-selected {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #6b7280;
          text-align: center;
        }
      `}</style>
      <div className="design-container d-flex">
        {/* File Explorer */}
        <div className="file-explorer">
          <div className="file-explorer-header">
            <span className="header-title">Files</span>
            <div className="header-actions">
              <button
                onClick={handleDeploy}
                disabled={isDeploying}
                className="deploy-button"
              >
                <Play size={12} />
                <span>{isDeploying ? 'Deploying...' : 'Deploy'}</span>
              </button>
              <button className="download-button">
                <Download size={14} />
              </button>
            </div>
          </div>
          <div className="file-tree">
            {fileTree.map((node, index) => (
              <FileTreeNode key={index} {...node} />
            ))}
          </div>
        </div>

        {/* Code Editor */}
        <div className="code-editor d-flex flex-column">
          {selectedFile ? (
            <>
              <div className="editor-header">
                <div className="editor-file-info">
                  {getFileIcon(selectedFile.name)}
                  <span className="editor-filename">{selectedFile.name}</span>
                </div>
              </div>
              <div className="editor-content">
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
            <div className="no-file-selected">
              <div>
                <Code size={48} style={{color: '#9ca3af', margin: '0 auto 1rem'}} />
                <p>Select a file to view its contents</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DesignMode;