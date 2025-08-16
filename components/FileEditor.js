"use client";

import React, { useState, useEffect } from 'react';
import { Edit3, Save, X, Loader, CheckCircle, AlertCircle, Eye, Code } from 'lucide-react';

const FileEditor = ({ 
  selectedFile, 
  onFileUpdate, 
  allFiles = [], 
  onClose,
  projectType = 'static'
}) => {
  const [editPrompt, setEditPrompt] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editResult, setEditResult] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset state when file changes
    setEditPrompt('');
    setEditResult(null);
    setError(null);
  }, [selectedFile?.path]);

  const handleEdit = async () => {
    if (!editPrompt.trim() || !selectedFile) return;
    
    setIsEditing(true);
    setError(null);
    
    try {
      const response = await fetch('/api/ai/edit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: editPrompt,
          targetFile: selectedFile.path,
          fileContent: selectedFile.content,
          allFiles: allFiles.map(f => ({ path: f.path }))
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Edit request failed');
      }

      if (data.success) {
        setEditResult(data);
        setShowPreview(true);
      } else {
        throw new Error('Edit processing failed');
      }
      
    } catch (error) {
      console.error('Edit error:', error);
      setError(error.message);
    } finally {
      setIsEditing(false);
    }
  };

  const handleApplyEdit = () => {
    if (editResult && onFileUpdate) {
      onFileUpdate(selectedFile.path, editResult.modifiedContent);
      setEditResult(null);
      setShowPreview(false);
      setEditPrompt('');
    }
  };

  const isStaticProject = !projectType || projectType === 'static';

  const handleDiscardEdit = () => {
    setEditResult(null);
    setShowPreview(false);
  };

  if (!selectedFile) {
    return (
      <div className="file-editor-container">
        <style jsx>{`
          .file-editor-container {
            padding: 2rem;
            text-align: center;
            color: #6b7280;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            background: #f9fafb;
          }
        `}</style>
        <Edit3 size={48} className="mb-3 text-muted" />
        <p>Select a file to start editing</p>
      </div>
    );
  }

  return (
    <div className="file-editor-container">
      <style jsx>{`
        .file-editor-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: white;
          border-radius: 8px;
          overflow: hidden;
        }
        .editor-header {
          display: flex;
          align-items: center;
          justify-content: between;
          padding: 1rem;
          background: #f8f9fa;
          border-bottom: 1px solid #e5e7eb;
        }
        .editor-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #374151;
          flex: 1;
        }
        .editor-content {
          flex: 1;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .edit-input {
          flex: 1;
          min-height: 120px;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          resize: vertical;
          font-family: inherit;
          font-size: 0.875rem;
          outline: none;
        }
        .edit-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }
        .edit-actions {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .edit-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .edit-btn.primary {
          background: #3b82f6;
          color: white;
        }
        .edit-btn.primary:hover:not(:disabled) {
          background: #2563eb;
        }
        .edit-btn.secondary {
          background: #6b7280;
          color: white;
        }
        .edit-btn.secondary:hover:not(:disabled) {
          background: #4b5563;
        }
        .edit-btn.success {
          background: #10b981;
          color: white;
        }
        .edit-btn.success:hover:not(:disabled) {
          background: #059669;
        }
        .edit-btn.danger {
          background: #ef4444;
          color: white;
        }
        .edit-btn.danger:hover:not(:disabled) {
          background: #dc2626;
        }
        .edit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .preview-container {
          margin-top: 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          overflow: hidden;
        }
        .preview-header {
          display: flex;
          align-items: center;
          justify-content: between;
          padding: 0.75rem;
          background: #f0f9ff;
          border-bottom: 1px solid #e5e7eb;
        }
        .preview-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: #1e40af;
        }
        .preview-content {
          padding: 1rem;
          max-height: 300px;
          overflow-y: auto;
          background: #fafafa;
        }
        .edit-stats {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .stat-success {
          color: #059669;
        }
        .stat-error {
          color: #dc2626;
        }
        .edit-diff {
          font-family: 'Courier New', monospace;
          font-size: 0.75rem;
          line-height: 1.4;
        }
        .diff-search {
          background: #fee2e2;
          padding: 0.25rem;
          margin: 0.25rem 0;
          border-left: 3px solid #ef4444;
        }
        .diff-replace {
          background: #dcfce7;
          padding: 0.25rem;
          margin: 0.25rem 0;
          border-left: 3px solid #10b981;
        }
        .sync-info-notice {
          background: #fef3c7;
          border: 1px solid #f59e0b;
          border-left: 3px solid #f59e0b;
          color: #92400e;
          padding: 0.75rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .error-message {
          background: #fee2e2;
          border: 1px solid #fecaca;
          color: #dc2626;
          padding: 0.75rem;
          border-radius: 6px;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>

      {/* Header */}
      <div className="editor-header">
        <div className="editor-title">
          <Edit3 size={16} />
          Edit: {selectedFile.path}
        </div>
        {onClose && (
          <button onClick={onClose} className="btn btn-sm btn-outline-secondary">
            <X size={14} />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="editor-content">
        {/* Sync Info for non-static projects */}
        {!isStaticProject && (
          <div className="sync-info-notice">
            <span>📦 {projectType.toUpperCase()} Project: Changes sync to editor only. Deploy to see live preview.</span>
          </div>
        )}
        
        {/* Edit Input */}
        <textarea
          value={editPrompt}
          onChange={(e) => setEditPrompt(e.target.value)}
          placeholder="Describe what you want to change..."
          className="edit-input"
          disabled={isEditing}
        />

        {/* Action Buttons */}
        <div className="edit-actions">
          <button
            onClick={handleEdit}
            disabled={!editPrompt.trim() || isEditing}
            className="edit-btn primary"
          >
            {isEditing ? (
              <>
                <Loader size={14} className="spin" />
                Processing...
              </>
            ) : (
              <>
                <Edit3 size={14} />
                Generate Edit
              </>
            )}
          </button>

          {editResult && !showPreview && (
            <button
              onClick={() => setShowPreview(true)}
              className="edit-btn secondary"
            >
              <Eye size={14} />
              Preview Changes
            </button>
          )}
        </div>

        {/* Error Display */}
        {error && (
          <div className="error-message">
            <AlertCircle size={16} />
            {error}
          </div>
        )}

        {/* Preview */}
        {showPreview && editResult && (
          <div className="preview-container">
            <div className="preview-header">
              <div className="preview-title">
                <Eye size={16} />
                Preview Changes
              </div>
              <div className="d-flex gap-2">
                                  <button
                    onClick={handleApplyEdit}
                    className="edit-btn success"
                  >
                    <CheckCircle size={14} />
                    {isStaticProject ? 'Apply & Sync' : 'Apply Changes'}
                  </button>
                <button
                  onClick={handleDiscardEdit}
                  className="edit-btn danger"
                >
                  <X size={14} />
                  Discard
                </button>
              </div>
            </div>
            
            <div className="preview-content">
              {/* Stats */}
              <div className="edit-stats">
                <div className="stat-item stat-success">
                  <CheckCircle size={14} />
                  {editResult.stats.appliedCount} applied
                </div>
                {editResult.stats.failedCount > 0 && (
                  <div className="stat-item stat-error">
                    <AlertCircle size={14} />
                    {editResult.stats.failedCount} failed
                  </div>
                )}
              </div>

              {/* Applied Edits */}
              {editResult.appliedEdits.map((edit, index) => (
                <div key={index} className="edit-diff">
                  <div><strong>Change {index + 1}:</strong></div>
                  <div className="diff-search">
                    <strong>- Remove:</strong><br />
                    {edit.searchPreview}
                  </div>
                  <div className="diff-replace">
                    <strong>+ Add:</strong><br />
                    {edit.replacePreview}
                  </div>
                </div>
              ))}

              {/* Failed Edits */}
              {editResult.failedEdits.map((edit, index) => (
                <div key={index} className="edit-diff">
                  <div className="stat-error">
                    <strong>Failed Change {index + 1}:</strong> {edit.reason}
                  </div>
                  <div className="diff-search">
                    <strong>Couldn't find:</strong><br />
                    {edit.searchPreview}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileEditor;
