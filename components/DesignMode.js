"use client";

import React, { useState } from 'react';
import { ChevronRight, ChevronDown, File, Folder, FileText, Code, Play, Download, FolderOpen, Edit3, Plus, Trash2, Save } from 'lucide-react';
import dynamic from 'next/dynamic';
const MonacoCodeViewer = dynamic(() => import('./MonacoCodeViewer'), { ssr: false });
const FileEditor = dynamic(() => import('./FileEditor'), { ssr: false });

const DesignMode = ({ website, onSelectFile, onDeploy, isDeploying, onWebsiteUpdate }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [expandedFolders, setExpandedFolders] = useState({});
  const [mobileTab, setMobileTab] = useState('files'); // 'files' | 'editor' | 'edit'
  const [viewMode, setViewMode] = useState('code'); // 'code' | 'edit'
  const [isMobile, setIsMobile] = useState(false);
  const [showCreateFile, setShowCreateFile] = useState(false);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [newFolderName, setNewFolderName] = useState('');

  // Detect mobile screen size
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  const handleFileUpdate = (filePath, newContent) => {
    if (onWebsiteUpdate) {
      // Update the file content in the website
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
      
      // Update selected file if it's the one being edited
      if (selectedFile && selectedFile.path === filePath) {
        setSelectedFile({ ...selectedFile, content: newContent });
      }
      
      // Sync to Supabase
      syncToSupabase(updatedWebsite);
    }
  };

  // File management functions
  const handleCreateFile = () => {
    if (!newFileName.trim()) return;
    
    const fileName = newFileName.trim();
    const fileExtension = fileName.split('.').pop();
    
    // Default content based on file type
    let defaultContent = '';
    if (fileExtension === 'html') {
      defaultContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${fileName.replace('.html', '')}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold text-center">New Page</h1>
        <p class="text-center mt-4">This is a new page created with PixelWays.</p>
    </div>
</body>
</html>`;
    } else if (fileExtension === 'css') {
      defaultContent = `/* ${fileName} */

body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, sans-serif;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}`;
    } else if (fileExtension === 'js') {
      defaultContent = `// ${fileName}

document.addEventListener('DOMContentLoaded', function() {
    console.log('${fileName} loaded');
    
    // Your JavaScript code here
});`;
    } else {
      defaultContent = `// ${fileName}\n\n// New file created with PixelWays`;
    }
    
    const newFile = {
      path: fileName,
      content: defaultContent,
      name: fileName
    };
    
    const updatedFiles = [...website.files, newFile];
    const updatedWebsite = {
      ...website,
      files: updatedFiles
    };
    
    onWebsiteUpdate(updatedWebsite);
    setNewFileName('');
    setShowCreateFile(false);
    
    // Select the new file
    setSelectedFile(newFile);
    
    // Sync to Supabase
    syncToSupabase(updatedWebsite);
  };

  const handleDeleteFile = (filePath) => {
    if (window.confirm(`Are you sure you want to delete ${filePath}?`)) {
      const updatedFiles = website.files.filter(file => file.path !== filePath);
      const updatedWebsite = {
        ...website,
        files: updatedFiles
      };
      
      onWebsiteUpdate(updatedWebsite);
      
      // Clear selected file if it was deleted
      if (selectedFile && selectedFile.path === filePath) {
        setSelectedFile(null);
      }
      
      // Sync to Supabase
      syncToSupabase(updatedWebsite);
    }
  };

  const handleCreateFolder = () => {
    if (!newFolderName.trim()) return;
    
    const folderName = newFolderName.trim();
    
    // Create a placeholder file in the folder to ensure it exists
    const placeholderFile = {
      path: `${folderName}/.gitkeep`,
      content: '# This file ensures the folder exists\n',
      name: '.gitkeep'
    };
    
    const updatedFiles = [...website.files, placeholderFile];
    const updatedWebsite = {
      ...website,
      files: updatedFiles
    };
    
    onWebsiteUpdate(updatedWebsite);
    setNewFolderName('');
    setShowCreateFolder(false);
    
    // Expand the new folder
    setExpandedFolders(prev => ({ ...prev, [folderName]: true }));
    
    // Sync to Supabase
    syncToSupabase(updatedWebsite);
  };

  // Sync changes to Supabase (only for static HTML sites)
  const syncToSupabase = async (updatedWebsite) => {
    if (!updatedWebsite || !updatedWebsite.files) return;
    
    // Only sync static HTML/CSS/JS projects to Supabase
    // React/Vite projects need to go through build pipeline first
    const isStaticProject = !updatedWebsite.projectType || updatedWebsite.projectType === 'static';
    
    if (!isStaticProject) {
      console.log(`Skipping Supabase sync for ${updatedWebsite.projectType} project - requires build pipeline`);
      return;
    }
    
    try {
      // Use the same site name from the current deployment
      const siteName = sessionStorage.getItem('current_site_name') || `site-${Date.now()}`;
      
      const response = await fetch('/api/sync-to-supabase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          files: updatedWebsite.files,
          siteName: siteName,
          projectType: updatedWebsite.projectType
        })
      });
      
      if (response.ok) {
        console.log('Successfully synced static site to Supabase');
      } else {
        console.error('Failed to sync to Supabase');
      }
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

  // File Tree Node Component
  const FileTreeNode = ({ name, type, path, children = [] }) => {
    if (type === 'folder') {
      const isExpanded = expandedFolders[path];
      return (
        <div className="file-tree-folder">
          <div className="folder-header" onClick={() => toggleFolder(path)}>
            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            <Folder size={14} />
            <span>{name}</span>
          </div>
          {isExpanded && children.map((child, index) => (
            <div key={index} className="folder-child">
              <FileTreeNode {...child} />
            </div>
          ))}
        </div>
      );
    }

    // File node
    const isSelected = selectedFile && selectedFile.path === path;
    const fileObj = website.files.find(f => f.path === path);
    
    return (
      <div className={`file-tree-file ${isSelected ? 'selected' : ''}`}>
        <div 
          className="file-content"
          onClick={() => {
            if (fileObj) {
              setSelectedFile({ ...fileObj, name: name });
              if (onSelectFile) onSelectFile(fileObj);
              // Auto-switch to editor tab on mobile when file is selected
              if (isMobile) {
                setMobileTab('editor');
              }
            }
          }}
        >
          {getFileIcon(name)}
          <span className="file-name">{name}</span>
        </div>
        <button 
          className="delete-file-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteFile(path);
          }}
          title="Delete file"
        >
          <Trash2 size={12} />
        </button>
      </div>
    );
  };

    // Mobile layout with tabs
  if (isMobile) {
    return (
      <>
        <style jsx>{`
          .mobile-design-container {
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          .mobile-tabs {
            display: flex;
            border-bottom: 1px solid #e5e7eb;
            background: white;
          }
          .mobile-tab {
            flex: 1;
            padding: 12px;
            border: none;
            background: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 500;
            color: #6b7280;
            cursor: pointer;
            transition: all 0.2s;
          }
          .mobile-tab.active {
            color: #2563eb;
            border-bottom: 2px solid #2563eb;
            background: #eff6ff;
          }
          .mobile-tab-content {
            flex: 1;
            overflow: hidden;
          }
          .mobile-file-list {
            height: 100%;
            overflow-y: auto;
            padding: 1rem;
          }
          .mobile-file-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.2s;
            margin-bottom: 8px;
          }
          .mobile-file-item:hover {
            background: #f3f4f6;
          }
          .mobile-file-item.selected {
            background: #dbeafe;
            color: #1d4ed8;
          }
          .mobile-file-name {
            font-size: 14px;
            font-weight: 500;
          }
          .mobile-file-actions {
            display: flex;
            gap: 8px;
            margin-bottom: 16px;
            padding: 0 4px;
          }
          .mobile-action-btn {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 8px 12px;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            background: white;
            color: #374151;
            font-size: 12px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
          }
          .mobile-action-btn:hover {
            background: #f3f4f6;
            border-color: #d1d5db;
          }
          .mobile-action-btn.create-file {
            border-color: #3b82f6;
            color: #3b82f6;
          }
          .mobile-action-btn.create-folder {
            border-color: #f59e0b;
            color: #f59e0b;
          }
          .mobile-create-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            width: 90%;
            max-width: 400px;
            overflow: hidden;
          }
          .modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px;
            background: #f8f9fa;
            border-bottom: 1px solid #e5e7eb;
            font-weight: 600;
          }
          .modal-header button {
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            color: #6b7280;
          }
          .modal-input {
            width: 100%;
            padding: 12px 16px;
            border: none;
            outline: none;
            font-size: 14px;
            border-bottom: 1px solid #e5e7eb;
          }
          .modal-actions {
            display: flex;
            gap: 8px;
            padding: 16px;
          }
          .modal-btn {
            flex: 1;
            padding: 8px 16px;
            border: 1px solid;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
          }
          .modal-btn.secondary {
            background: white;
            border-color: #d1d5db;
            color: #374151;
          }
          .modal-btn.secondary:hover {
            background: #f3f4f6;
          }
          .modal-btn.primary {
            background: #3b82f6;
            border-color: #3b82f6;
            color: white;
          }
          .modal-btn.primary:hover {
            background: #2563eb;
          }
          .mobile-editor {
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          .mobile-editor-header {
            padding: 12px 16px;
            border-bottom: 1px solid #e5e7eb;
            background: #f9fafb;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .mobile-editor-file-info {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .mobile-editor-content {
            flex: 1;
          }
          .mobile-project-info {
            margin-bottom: 12px;
            padding: 0 16px;
          }
          .mobile-project-badge {
            display: inline-block;
            font-size: 0.625rem;
            font-weight: 600;
            padding: 0.25rem 0.5rem;
            border-radius: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.025em;
            margin-bottom: 8px;
          }
          .mobile-project-badge.static {
            background: #dcfce7;
            color: #166534;
          }
          .mobile-project-badge.react-vite {
            background: #dbeafe;
            color: #1d4ed8;
          }
          .mobile-project-badge.nextjs {
            background: #f3e8ff;
            color: #7c3aed;
          }
          .mobile-sync-info {
            font-size: 0.75rem;
            color: #92400e;
            background: #fef3c7;
            padding: 8px;
            border-radius: 6px;
            border-left: 3px solid #f59e0b;
          }
          .mobile-deploy-section {
            padding: 16px;
            border-bottom: 1px solid #e5e7eb;
            background: #f9fafb;
          }
          .mobile-deploy-button {
            width: 100%;
            padding: 12px;
            background: #16a34a;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          .mobile-deploy-button:hover:not(:disabled) {
            background: #15803d;
          }
          .mobile-deploy-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .mobile-no-file {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            color: #6b7280;
            text-align: center;
            padding: 2rem;
          }
        `}</style>
        <div className="mobile-design-container">
          {/* Mobile Tabs */}
          <div className="mobile-tabs">
            <button
              className={`mobile-tab ${mobileTab === 'files' ? 'active' : ''}`}
              onClick={() => setMobileTab('files')}
            >
              <FolderOpen size={18} />
              <span>Files</span>
            </button>
            <button
              className={`mobile-tab ${mobileTab === 'editor' ? 'active' : ''}`}
              onClick={() => setMobileTab('editor')}
            >
              <Code size={18} />
              <span>Editor</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="mobile-tab-content">
            {mobileTab === 'files' ? (
              // Files Tab
              <div className="mobile-file-list">
                {/* Project Type & Deploy Section */}
                <div className="mobile-project-info">
                  {website?.projectType && (
                    <div className={`mobile-project-badge ${website.projectType}`}>
                      {website.projectType === 'static' ? 'HTML/CSS/JS' : website.projectType.toUpperCase()}
                    </div>
                  )}
                  {website?.projectType !== 'static' && (
                    <div className="mobile-sync-info">
                      📦 Changes sync to editor only - Deploy to see live preview
                    </div>
                  )}
                </div>
                
                {/* Deploy Section */}
                <div className="mobile-deploy-section">
                  <button
                    onClick={handleDeploy}
                    disabled={isDeploying}
                    className="mobile-deploy-button"
                  >
                    <Play size={16} />
                    <span>{isDeploying ? 'Deploying...' : 'Deploy Website'}</span>
                  </button>
                </div>
                
                {/* File Management Actions */}
                <div className="mobile-file-actions">
                  <button
                    className="mobile-action-btn create-file"
                    onClick={() => setShowCreateFile(true)}
                  >
                    <Plus size={14} />
                    New File
                  </button>
                  <button
                    className="mobile-action-btn create-folder"
                    onClick={() => setShowCreateFolder(true)}
                  >
                    <Folder size={14} />
                    New Folder
                  </button>
                </div>

                {/* Create File Modal */}
                {showCreateFile && (
                  <div className="mobile-create-modal">
                    <div className="modal-header">
                      <span>Create New File</span>
                      <button onClick={() => setShowCreateFile(false)}>×</button>
                    </div>
                    <input
                      type="text"
                      value={newFileName}
                      onChange={(e) => setNewFileName(e.target.value)}
                      placeholder="filename.html"
                      className="modal-input"
                      autoFocus
                    />
                    <div className="modal-actions">
                      <button className="modal-btn secondary" onClick={() => setShowCreateFile(false)}>
                        Cancel
                      </button>
                      <button className="modal-btn primary" onClick={handleCreateFile}>
                        Create
                      </button>
                    </div>
                  </div>
                )}

                {/* Create Folder Modal */}
                {showCreateFolder && (
                  <div className="mobile-create-modal">
                    <div className="modal-header">
                      <span>Create New Folder</span>
                      <button onClick={() => setShowCreateFolder(false)}>×</button>
                    </div>
                    <input
                      type="text"
                      value={newFolderName}
                      onChange={(e) => setNewFolderName(e.target.value)}
                      placeholder="folder-name"
                      className="modal-input"
                      autoFocus
                    />
                    <div className="modal-actions">
                      <button className="modal-btn secondary" onClick={() => setShowCreateFolder(false)}>
                        Cancel
                      </button>
                      <button className="modal-btn primary" onClick={handleCreateFolder}>
                        Create
                      </button>
                    </div>
                  </div>
                )}

                {/* File List */}
                {fileTree.map((node, index) => (
                  <FileTreeNode key={index} {...node} />
                ))}
              </div>
            ) : (
              // Editor Tab
              <div className="mobile-editor">
                {selectedFile ? (
                  <>
                    <div className="mobile-editor-header">
                      <div className="mobile-editor-file-info">
                        {getFileIcon(selectedFile.name)}
                        <span className="mobile-file-name">{selectedFile.name}</span>
                      </div>
                      <button
                        className="mobile-tab"
                        onClick={() => setMobileTab('files')}
                      >
                        <FolderOpen size={16} />
                      </button>
                    </div>
                    <div className="mobile-editor-content">
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
                  <div className="mobile-no-file">
                    <Code size={48} style={{color: '#9ca3af', marginBottom: '1rem'}} />
                    <p>Select a file from the Files tab to view its contents</p>
                    <button
                      className="mobile-tab"
                      onClick={() => setMobileTab('files')}
                      style={{marginTop: '1rem'}}
                    >
                      <FolderOpen size={16} />
                      <span>Browse Files</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  // Desktop layout (existing)
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
          gap: 0.75rem;
        }
        .header-title {
          font-size: 0.875rem;
          font-weight: 500;
        }
        .project-type-badge {
          font-size: 0.625rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }
        .project-type-badge.static {
          background: #dcfce7;
          color: #166534;
        }
        .project-type-badge.react-vite {
          background: #dbeafe;
          color: #1d4ed8;
        }
        .project-type-badge.nextjs {
          background: #f3e8ff;
          color: #7c3aed;
        }
        .sync-info-banner {
          padding: 0.5rem 1rem;
          background: #fef3c7;
          border-bottom: 1px solid #f59e0b;
          border-left: 3px solid #f59e0b;
        }
        .sync-info-text {
          font-size: 0.75rem;
          color: #92400e;
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
          justify-content: space-between;
          padding: 0 1rem;
        }
        .editor-header-right {
          display: flex;
          align-items: center;
        }
        .view-toggle {
          display: flex;
          background: #e9ecef;
          border-radius: 4px;
          overflow: hidden;
        }
        .toggle-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          border: none;
          background: transparent;
          color: #6c757d;
          font-size: 0.75rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .toggle-btn:hover {
          background: #dee2e6;
          color: #495057;
        }
        .toggle-btn.active {
          background: #007bff;
          color: white;
        }
        .file-tree-folder {
          margin-bottom: 0.25rem;
        }
        .folder-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          transition: background-color 0.2s;
        }
        .folder-header:hover {
          background: #f3f4f6;
        }
        .folder-child {
          margin-left: 1rem;
        }
        .file-tree-file {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.125rem;
          border-radius: 4px;
          transition: background-color 0.2s;
        }
        .file-tree-file:hover {
          background: #f3f4f6;
        }
        .file-tree-file.selected {
          background: #dbeafe;
          color: #1d4ed8;
        }
        .file-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          cursor: pointer;
          font-size: 0.875rem;
          flex: 1;
        }
        .file-name {
          flex: 1;
        }
        .delete-file-btn {
          display: none;
          background: none;
          border: none;
          color: #ef4444;
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 3px;
          transition: all 0.2s;
        }
        .delete-file-btn:hover {
          background: #fee2e2;
        }
        .file-tree-file:hover .delete-file-btn {
          display: block;
        }
        .file-action-btn {
          background: none;
          border: 1px solid #e5e7eb;
          border-radius: 0.25rem;
          color: #6b7280;
          cursor: pointer;
          padding: 0.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          margin-right: 0.25rem;
        }
        .file-action-btn:hover {
          background: #f3f4f6;
          border-color: #d1d5db;
          color: #374151;
        }
        .desktop-modal-overlay {
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
        .desktop-modal {
          background: white;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          width: 400px;
          max-width: 90vw;
          overflow: hidden;
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
            <div className="header-left">
              <span className="header-title">Files</span>
              {website?.projectType && (
                <span className={`project-type-badge ${website.projectType}`}>
                  {website.projectType === 'static' ? 'HTML/CSS/JS' : website.projectType.toUpperCase()}
                </span>
              )}
            </div>
            <div className="header-actions">
              <button
                onClick={() => setShowCreateFile(true)}
                className="file-action-btn"
                title="Create new file"
              >
                <Plus size={12} />
              </button>
              <button
                onClick={() => setShowCreateFolder(true)}
                className="file-action-btn"
                title="Create new folder"
              >
                <Folder size={12} />
              </button>
              <button
                onClick={handleDeploy}
                disabled={isDeploying}
                className="deploy-button"
              >
                <Play size={12} />
                <span>{isDeploying ? 'Deploying...' : 'Deploy'}</span>
              </button>
            </div>
          </div>
          
          {/* Sync Status Info */}
          {website?.projectType !== 'static' && (
            <div className="sync-info-banner">
              <span className="sync-info-text">
                📦 Changes sync to editor only - Deploy to see live preview
              </span>
            </div>
          )}
          
          {/* Desktop Create File Modal */}
          {showCreateFile && (
            <div className="desktop-modal-overlay">
              <div className="desktop-modal">
                <div className="modal-header">
                  <span>Create New File</span>
                  <button onClick={() => setShowCreateFile(false)}>×</button>
                </div>
                <input
                  type="text"
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                  placeholder="filename.html"
                  className="modal-input"
                  autoFocus
                />
                <div className="modal-actions">
                  <button className="modal-btn secondary" onClick={() => setShowCreateFile(false)}>
                    Cancel
                  </button>
                  <button className="modal-btn primary" onClick={handleCreateFile}>
                    Create
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Create Folder Modal */}
          {showCreateFolder && (
            <div className="desktop-modal-overlay">
              <div className="desktop-modal">
                <div className="modal-header">
                  <span>Create New Folder</span>
                  <button onClick={() => setShowCreateFolder(false)}>×</button>
                </div>
                <input
                  type="text"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  placeholder="folder-name"
                  className="modal-input"
                  autoFocus
                />
                <div className="modal-actions">
                  <button className="modal-btn secondary" onClick={() => setShowCreateFolder(false)}>
                    Cancel
                  </button>
                  <button className="modal-btn primary" onClick={handleCreateFolder}>
                    Create
                  </button>
                </div>
              </div>
            </div>
          )}
          
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
                <div className="editor-header-right">
                  <div className="view-toggle">
                    <button
                      className={`toggle-btn ${viewMode === 'code' ? 'active' : ''}`}
                      onClick={() => setViewMode('code')}
                    >
                      <Code size={14} />
                      Code
                    </button>
                    <button
                      className={`toggle-btn ${viewMode === 'edit' ? 'active' : ''}`}
                      onClick={() => setViewMode('edit')}
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
                    allFiles={website.files}
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
    </>
  );
};

export default DesignMode;