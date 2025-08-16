"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronDown, File, Folder, FileText, Code, Play, Download, Edit3, Plus, Trash2, Loader } from 'lucide-react';
import dynamic from 'next/dynamic';
const MonacoCodeViewer = dynamic(() => import('./MonacoCodeViewer'), { ssr: false });
const FileEditor = dynamic(() => import('./FileEditor'), { ssr: false });

const DesignMode = ({ website, onSelectFile, onDeploy, isDeploying, onWebsiteUpdate }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [expandedFolders, setExpandedFolders] = useState({});
  const [mobileTab, setMobileTab] = useState('files'); // 'files' | 'editor' | 'edit'
  const [viewMode, setViewMode] = useState('code'); // 'code' | 'edit'
  const [showCreateFileModal, setShowCreateFileModal] = useState(false);
  const [showCreateFolderModal, setShowCreateFolderModal] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [newFolderName, setNewFolderName] = useState('');

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
      await onDeploy();
    }
  };

  const handleFileUpdate = (filePath, newContent) => {
    if (onWebsiteUpdate) {
      const updatedFiles = website.files.map(file => 
        file.path === filePath 
          ? { ...file, content: newContent }
          : file
      );
      
      const updatedWebsite = {
        ...website,
        files: updatedFiles
      };
      
      onWebsiteUpdate(updatedWebsite);
      
      if (selectedFile && selectedFile.path === filePath) {
        setSelectedFile({ ...selectedFile, content: newContent });
      }
      
      syncToSupabase(updatedWebsite);
    }
  };

  const handleCreateFile = () => {
    if (!newFileName.trim()) return;
    
    const fileName = newFileName.trim();
    const fileExtension = fileName.split('.').pop();
    
    let defaultContent = '';
    if (fileExtension === 'html') {
      defaultContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${fileName.replace('.html', '')}</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>`;
    } else if (fileExtension === 'css') {
      defaultContent = `/* ${fileName} */
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
}`;
    } else if (fileExtension === 'js') {
      defaultContent = `// ${fileName}
console.log('Hello from ${fileName}');`;
    }
    
    const newFile = {
      name: fileName,
      path: fileName,
      content: defaultContent
    };
    
    const updatedWebsite = {
      ...website,
      files: [...website.files, newFile]
    };
    
    onWebsiteUpdate(updatedWebsite);
    setNewFileName('');
    setShowCreateFileModal(false);
    syncToSupabase(updatedWebsite);
  };

  const handleCreateFolder = () => {
    if (!newFolderName.trim()) return;
    
    const folderName = newFolderName.trim();
    const placeholderFile = {
      name: '.gitkeep',
      path: `${folderName}/.gitkeep`,
      content: ''
    };
    
    const updatedWebsite = {
      ...website,
      files: [...website.files, placeholderFile]
    };
    
    onWebsiteUpdate(updatedWebsite);
    setNewFolderName('');
    setShowCreateFolderModal(false);
    syncToSupabase(updatedWebsite);
  };

  const handleDeleteFile = (filePath) => {
    if (window.confirm('Are you sure you want to delete this file?')) {
      const updatedFiles = website.files.filter(file => file.path !== filePath);
      const updatedWebsite = {
        ...website,
        files: updatedFiles
      };
      
      onWebsiteUpdate(updatedWebsite);
      
      if (selectedFile && selectedFile.path === filePath) {
        setSelectedFile(null);
      }
      
      syncToSupabase(updatedWebsite);
    }
  };

  const syncToSupabase = async (updatedWebsite) => {
    const isStaticProject = !updatedWebsite.projectType || updatedWebsite.projectType === 'static';
    
    if (!isStaticProject) {
      console.log(`Skipping Supabase sync for ${updatedWebsite.projectType} project - changes sync to editor only`);
      return;
    }
    
    try {
      const siteName = `site-${Date.now()}`;
      
      await fetch('/api/sync-to-supabase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          files: updatedWebsite.files,
          siteName: siteName,
          projectType: updatedWebsite.projectType
        }),
      });
      
      console.log('Files synchronized to Supabase');
    } catch (error) {
      console.error('Error syncing to Supabase:', error);
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
              position: relative;
            }
            .file-item:hover {
              background: #f3f4f6;
            }
            .file-item:hover .delete-btn {
              opacity: 1;
            }
            .file-item.selected {
              background: #dbeafe;
              color: #1d4ed8;
            }
            .delete-btn {
              position: absolute;
              right: 0.5rem;
              padding: 0.125rem;
              background: #ef4444;
              color: white;
              border: none;
              border-radius: 0.25rem;
              cursor: pointer;
              opacity: 0;
              transition: opacity 0.2s;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .delete-btn:hover {
              background: #dc2626;
            }
          `}</style>
          <div
            className={`file-item ${selectedFile?.name === name ? 'selected' : ''}`}
            onClick={() => {
              const file = { name, content, path: fullPath };
              setSelectedFile(file);
              if (onSelectFile) onSelectFile(file);
              if (window.innerWidth < 768) {
                setMobileTab('editor');
              }
            }}
          >
            {getFileIcon(name)}
            <span style={{flex: 1}}>{name}</span>
            {name !== '.gitkeep' && (
              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteFile(fullPath);
                }}
                title="Delete file"
              >
                <Trash2 size={12} />
              </button>
            )}
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
          current[part] = {
            name: part,
            type: 'file',
            content: file.content
          };
        } else {
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
        .header-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .header-title {
          font-size: 0.875rem;
          font-weight: 500;
        }
        .project-type-badge {
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.625rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .project-type-badge.static {
          background: #dcfce7;
          color: #166534;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .action-button {
          padding: 0.25rem;
          background: transparent;
          border: none;
          color: #6b7280;
          cursor: pointer;
          border-radius: 0.25rem;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .action-button:hover {
          background: #e5e7eb;
          color: #374151;
        }
        .sync-info-banner {
          padding: 0.5rem 0.75rem;
          background: #fef3c7;
          border-bottom: 1px solid #e5e7eb;
          font-size: 0.75rem;
          color: #92400e;
        }
        .file-tree {
          overflow: auto;
          height: calc(100% - 40px);
        }
        .code-editor {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .editor-header {
          height: 40px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: space-between;
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
        .editor-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .view-toggle {
          display: flex;
          background: #f3f4f6;
          border-radius: 0.375rem;
          padding: 0.125rem;
        }
        .toggle-btn {
          padding: 0.25rem 0.5rem;
          border: none;
          background: transparent;
          color: #6b7280;
          font-size: 0.75rem;
          cursor: pointer;
          border-radius: 0.25rem;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .toggle-btn.active {
          background: white;
          color: #374151;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
        .toggle-btn:hover:not(.active) {
          color: #374151;
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
        
        /* Mobile Styles */
        .mobile-tabs {
          display: flex;
          background: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
        }
        .mobile-tab {
          flex: 1;
          padding: 0.75rem;
          text-align: center;
          background: transparent;
          border: none;
          color: #6b7280;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .mobile-tab.active {
          background: white;
          color: #374151;
          border-bottom: 2px solid #3b82f6;
        }
        .mobile-content {
          display: none;
          height: calc(100% - 50px);
        }
        .mobile-content.active {
          display: block;
        }
        
        /* Modals */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal {
          background: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          min-width: 300px;
        }
        .modal-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .modal-input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #d1d5db;
          border-radius: 0.25rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }
        .modal-actions {
          display: flex;
          gap: 0.5rem;
          justify-content: flex-end;
        }
        .modal-btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .modal-btn.primary {
          background: #3b82f6;
          color: white;
        }
        .modal-btn.primary:hover {
          background: #2563eb;
        }
        .modal-btn.secondary {
          background: #f3f4f6;
          color: #374151;
        }
        .modal-btn.secondary:hover {
          background: #e5e7eb;
        }
        .planned-pages-section {
          margin-top: 0.75rem;
          padding: 0.75rem;
          background: #fef3c7;
          border: 1px solid #f59e0b;
          border-radius: 0.375rem;
          margin-left: 0.75rem;
          margin-right: 0.75rem;
        }
        .planned-pages-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .planned-pages-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: #92400e;
        }
        .planned-pages-list {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .planned-page-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .planned-page-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f59e0b;
        }
        .planned-page-name {
          font-size: 0.75rem;
          color: #92400e;
        }
      `}</style>
      
      <div className="design-container">
        {/* Desktop Layout */}
        <div className="d-none d-md-flex" style={{height: '100%'}}>
          {/* File Explorer */}
          <div className="file-explorer">
            <div className="file-explorer-header">
              <div className="header-left">
                <span className="header-title">Files</span>
                {website?.projectType && (
                  <span className={`project-type-badge ${website.projectType}`}>
                    HTML/CSS/JS
                  </span>
                )}
              </div>
              <div className="header-actions">
                <button
                  onClick={() => setShowCreateFileModal(true)}
                  className="action-button"
                  title="New File"
                >
                  <Plus size={14} />
                </button>
                <button
                  onClick={() => setShowCreateFolderModal(true)}
                  className="action-button"
                  title="New Folder"
                >
                  <Folder size={14} />
                </button>
              </div>
            </div>
            
            <div className="file-tree">
              {fileTree.map((node, index) => (
                <FileTreeNode key={index} {...node} />
              ))}
            </div>
            
            {/* Planned Pages Indicator */}
            {website.plannedPages && website.plannedPages.length > 0 && !website.isComplete && (
              <div className="planned-pages-section">
                <div className="planned-pages-header">
                  <Loader size={12} className="animate-spin text-blue-600" />
                  <span className="planned-pages-title">Generating Pages...</span>
                </div>
                <div className="planned-pages-list">
                  {website.plannedPages.map((page, index) => (
                    <div key={page} className="planned-page-item">
                      <div className="planned-page-dot" />
                      <span className="planned-page-name">{page}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Code Editor */}
          <div className="code-editor">
            {selectedFile ? (
              <>
                <div className="editor-header">
                  <div className="editor-file-info">
                    {getFileIcon(selectedFile.name)}
                    <span className="editor-filename">{selectedFile.name}</span>
                  </div>
                  <div className="editor-actions">
                    <div className="view-toggle">
                      <button
                        onClick={() => setViewMode('code')}
                        className={`toggle-btn ${viewMode === 'code' ? 'active' : ''}`}
                      >
                        <Code size={14} />
                        Code
                      </button>
                      <button
                        onClick={() => setViewMode('edit')}
                        className={`toggle-btn ${viewMode === 'edit' ? 'active' : ''}`}
                      >
                        <Edit3 size={14} />
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="editor-content">
                  {viewMode === 'code' ? (
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
                  ) : (
                    <FileEditor
                      selectedFile={selectedFile}
                      onFileUpdate={handleFileUpdate}
                      allFiles={website?.files || []}
                      projectType={website?.projectType}
                    />
                  )}
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

        {/* Mobile Layout */}
        <div className="d-block d-md-none" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
          <div className="mobile-tabs">
            <button
              className={`mobile-tab ${mobileTab === 'files' ? 'active' : ''}`}
              onClick={() => setMobileTab('files')}
            >
              Files
            </button>
            <button
              className={`mobile-tab ${mobileTab === 'editor' ? 'active' : ''}`}
              onClick={() => setMobileTab('editor')}
            >
              Editor
            </button>
            <button
              className={`mobile-tab ${mobileTab === 'edit' ? 'active' : ''}`}
              onClick={() => setMobileTab('edit')}
            >
              Edit
            </button>
          </div>

          <div className={`mobile-content ${mobileTab === 'files' ? 'active' : ''}`}>
            <div className="file-explorer" style={{width: '100%', height: '100%'}}>
              <div className="file-explorer-header">
                <div className="header-left">
                  <span className="header-title">Files</span>
                  {website?.projectType && (
                    <span className={`project-type-badge ${website.projectType}`}>
                      {website.projectType === 'static' ? 'HTML/CSS/JS' : 
                       website.projectType === 'react-vite' ? 'REACT-VITE' : 
                       website.projectType === 'nextjs' ? 'NEXTJS' : website.projectType.toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="header-actions">
                  <button
                    onClick={() => setShowCreateFileModal(true)}
                    className="action-button"
                    title="New File"
                  >
                    <Plus size={14} />
                  </button>
                  <button
                    onClick={() => setShowCreateFolderModal(true)}
                    className="action-button"
                    title="New Folder"
                  >
                    <Folder size={14} />
                  </button>
                </div>
              </div>
              
              <div className="file-tree">
                {fileTree.map((node, index) => (
                  <FileTreeNode key={index} {...node} />
                ))}
              </div>
            </div>
          </div>

          <div className={`mobile-content ${mobileTab === 'editor' ? 'active' : ''}`}>
            {selectedFile ? (
              <div className="code-editor" style={{height: '100%'}}>
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
              </div>
            ) : (
              <div className="no-file-selected">
                <div>
                  <Code size={48} style={{color: '#9ca3af', margin: '0 auto 1rem'}} />
                  <p>Select a file to view its contents</p>
                </div>
              </div>
            )}
          </div>

          <div className={`mobile-content ${mobileTab === 'edit' ? 'active' : ''}`}>
            {selectedFile ? (
              <div style={{height: '100%'}}>
                <FileEditor
                  selectedFile={selectedFile}
                  onFileUpdate={handleFileUpdate}
                  allFiles={website?.files || []}
                  projectType={website?.projectType}
                />
              </div>
            ) : (
              <div className="no-file-selected">
                <div>
                  <Edit3 size={48} style={{color: '#9ca3af', margin: '0 auto 1rem'}} />
                  <p>Select a file to edit</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Create File Modal */}
      {showCreateFileModal && (
        <div className="modal-overlay" onClick={() => setShowCreateFileModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">Create New File</div>
            <input
              type="text"
              className="modal-input"
              placeholder="Enter file name (e.g., style.css)"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleCreateFile();
                }
              }}
              autoFocus
            />
            <div className="modal-actions">
              <button
                onClick={() => setShowCreateFileModal(false)}
                className="modal-btn secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateFile}
                className="modal-btn primary"
                disabled={!newFileName.trim()}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Folder Modal */}
      {showCreateFolderModal && (
        <div className="modal-overlay" onClick={() => setShowCreateFolderModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title">Create New Folder</div>
            <input
              type="text"
              className="modal-input"
              placeholder="Enter folder name"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleCreateFolder();
                }
              }}
              autoFocus
            />
            <div className="modal-actions">
              <button
                onClick={() => setShowCreateFolderModal(false)}
                className="modal-btn secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateFolder}
                className="modal-btn primary"
                disabled={!newFolderName.trim()}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DesignMode;