"use client";

import React, { useState, useEffect } from 'react';
import { Send, Loader, Edit3, CheckCircle, AlertCircle, FileText, Folder, Plus, Trash2 } from 'lucide-react';
import GitHubAuth from './GitHubAuth';

const WorkspaceChat = ({ 
  generatedWebsite, 
  onWebsiteGenerated, 
  onSwitchToCodeView,
  onWebsiteUpdate,
  onFileAction
}) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm PixelAI, your website builder assistant. I can help you create websites, edit existing files, add new pages, or manage your project files. What would you like to build today?",
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [githubToken, setGithubToken] = useState(null);
  const [githubUser, setGithubUser] = useState(null);
  const [actionPills, setActionPills] = useState([]); // Track ongoing actions

  // Detect mobile screen size and check for GitHub auth
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const checkGitHubAuth = () => {
      if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem('github_access_token');
        const user = sessionStorage.getItem('github_user');
        if (token && user) {
          setGithubToken(token);
          setGithubUser(JSON.parse(user));
        }
      }
    };
    
    checkMobile();
    checkGitHubAuth();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Action pill management
  const addActionPill = (type, fileName, status = 'processing') => {
    const pillId = Date.now();
    const pill = {
      id: pillId,
      type, // 'edit', 'create', 'delete', 'folder'
      fileName,
      status, // 'processing', 'completed', 'failed'
      timestamp: new Date()
    };
    setActionPills(prev => [...prev, pill]);
    return pillId;
  };

  const updateActionPill = (pillId, status, result = null) => {
    setActionPills(prev => prev.map(pill => 
      pill.id === pillId 
        ? { ...pill, status, result, updatedAt: new Date() }
        : pill
    ));
  };

  const removeActionPill = (pillId) => {
    setActionPills(prev => prev.filter(pill => pill.id !== pillId));
  };

  // Extract filename from user message
  const extractFileName = (message) => {
    const filePattern = /[\w-]+\.(html|css|js|json|txt|md)/gi;
    const matches = message.match(filePattern);
    return matches ? matches[0] : null;
  };

  // Detect if message is an edit request
  const detectEditRequest = (message) => {
    const editKeywords = ['edit', 'change', 'modify', 'update', 'fix', 'alter'];
    const fileExtensions = ['.html', '.css', '.js', '.json'];
    
    const hasEditKeyword = editKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    );
    
    const mentionedFile = fileExtensions.find(ext => 
      message.toLowerCase().includes(ext)
    );
    
    return hasEditKeyword || mentionedFile;
  };

  // Detect if message is a file creation request
  const detectFileRequest = (message) => {
    const createKeywords = ['create', 'add', 'new', 'make'];
    const fileKeywords = ['file', 'page', 'component', 'folder'];
    
    return createKeywords.some(ck => message.toLowerCase().includes(ck)) &&
           fileKeywords.some(fk => message.toLowerCase().includes(fk));
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || isGenerating) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: newMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Detect action type and add appropriate pill
    let pillId = null;
    if (detectEditRequest(newMessage.trim())) {
      const fileName = extractFileName(newMessage.trim()) || 'file';
      pillId = addActionPill('edit', fileName, 'processing');
    } else if (detectFileRequest(newMessage.trim())) {
      const fileName = extractFileName(newMessage.trim()) || 'new file';
      pillId = addActionPill('create', fileName, 'processing');
    }

    setNewMessage('');
    setIsGenerating(true);

    try {
      // Add thinking message
      const thinkingMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: 'Thinking...',
        isThinking: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, thinkingMessage]);

      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: newMessage.trim(),
          projectType: generatedWebsite?.projectType || 'static',
          isFollowup: !!generatedWebsite,
          existingWebsite: generatedWebsite
        }),
      });

      const data = await response.json();
      
      // Remove thinking message and add response
      setMessages(prev => prev.filter(msg => !msg.isThinking));
      
      if (data.success && data.website) {
        const isUpdate = !!generatedWebsite;
        const aiResponse = {
          id: Date.now() + 2,
          type: 'ai',
          content: isUpdate 
            ? `I've updated your ${data.website.projectType} website: ${data.website.description}. Switching to code view to show the changes.`
            : `I've generated a ${data.website.projectType} website: ${data.website.description}. Switching to code view to explore the files.`,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
        
        if (onWebsiteGenerated) {
          onWebsiteGenerated(data.website);
        }
        
        // Update action pill to completed
        if (pillId) {
          updateActionPill(pillId, 'completed', { 
            filesCreated: data.website.files.length,
            projectType: data.website.projectType
          });
        }
        
        // Auto-switch to code view after generation/update
        setTimeout(() => {
          if (onSwitchToCodeView) {
            onSwitchToCodeView();
          }
        }, 1000);
      } else {
        // Update action pill to failed
        if (pillId) {
          updateActionPill(pillId, 'failed', { error: data.error });
        }
        
        const errorMessage = {
          id: Date.now() + 2,
          type: 'ai',
          content: 'Sorry, I encountered an error generating the website. Please try again.',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => prev.filter(msg => !msg.isThinking));
      const errorMessage = {
        id: Date.now() + 2,
        type: 'ai',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleGitHubAuthSuccess = (token, user) => {
    setGithubToken(token);
    setGithubUser(user);
  };

  const handleGitHubAuthError = (error) => {
    console.error('GitHub auth error:', error);
    // Could show an error message to user
  };

  return (
    <>
      <style jsx>{`
        .chat-container {
          height: 100%;
        }
        .action-pills-area {
          padding: 0.75rem 1rem 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .action-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 500;
          transition: all 0.2s;
          border: 1px solid transparent;
        }
        .action-pill.processing {
          background: #dbeafe;
          color: #1d4ed8;
          border-color: #3b82f6;
        }
        .action-pill.completed {
          background: #dcfce7;
          color: #166534;
          border-color: #22c55e;
        }
        .action-pill.failed {
          background: #fee2e2;
          color: #dc2626;
          border-color: #ef4444;
        }
        .pill-icon {
          display: flex;
          align-items: center;
        }
        .pill-content {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .pill-action {
          font-weight: 600;
        }
        .pill-file {
          font-weight: 400;
          opacity: 0.8;
        }
        .pill-status {
          display: flex;
          align-items: center;
        }
        .spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .messages-area {
          flex: 1;
          overflow-y: auto;
          padding: ${isMobile ? '1rem' : '1rem'};
        }
        .message-item {
          margin-bottom: ${isMobile ? '1.5rem' : '1rem'};
        }
        .ai-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: ${isMobile ? '0.875rem' : '0.75rem'};
          color: #6b7280;
          margin-bottom: 0.5rem;
        }
        .ai-dot {
          width: 8px;
          height: 8px;
          background: #3b82f6;
          border-radius: 50%;
        }
        .user-message {
          margin-left: ${isMobile ? '0' : '2rem'};
          text-align: ${isMobile ? 'right' : 'left'};
        }
        .user-bubble {
          display: inline-block;
          max-width: ${isMobile ? '85%' : '100%'};
          background: ${isMobile ? '#2563eb' : '#f3f4f6'};
          color: ${isMobile ? 'white' : '#1f2937'};
          border-radius: ${isMobile ? '1rem 1rem 0.25rem 1rem' : '0.5rem'};
          padding: ${isMobile ? '0.75rem 1rem' : '0.5rem 1rem'};
          font-size: ${isMobile ? '0.9rem' : '0.875rem'};
        }
        .ai-message {
          color: #374151;
          background: ${isMobile ? '#f8f9fa' : 'transparent'};
          padding: ${isMobile ? '0.75rem 1rem' : '0'};
          border-radius: ${isMobile ? '1rem 1rem 1rem 0.25rem' : '0'};
          max-width: ${isMobile ? '85%' : 'none'};
          display: ${isMobile ? 'inline-block' : 'block'};
          font-size: ${isMobile ? '0.9rem' : '0.875rem'};
          line-height: 1.5;
        }
        .thinking-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: ${isMobile ? '#f8f9fa' : 'transparent'};
          padding: ${isMobile ? '0.75rem 1rem' : '0'};
          border-radius: ${isMobile ? '1rem 1rem 1rem 0.25rem' : '0'};
          max-width: ${isMobile ? '85%' : 'none'};
        }
        .input-area {
          border-top: 1px solid #e5e7eb;
          padding: ${isMobile ? '1rem' : '1rem'};
          background: ${isMobile ? 'white' : 'transparent'};
        }
        .input-group {
          display: flex;
          align-items: end;
          gap: ${isMobile ? '0.75rem' : '0.5rem'};
        }
        .input-wrapper {
          flex: 1;
        }
        .message-input {
          width: 100%;
          resize: none;
          border: 1px solid #d1d5db;
          border-radius: ${isMobile ? '1rem' : '0.5rem'};
          padding: ${isMobile ? '0.75rem 1rem' : '0.5rem 0.75rem'};
          font-size: ${isMobile ? '1rem' : '0.875rem'};
          min-height: ${isMobile ? '48px' : '40px'};
          background: ${isMobile ? '#f8f9fa' : 'white'};
        }
        .message-input:focus {
          outline: none;
          border-color: #2563eb;
          background: white;
        }
        .controls-area {
          display: flex;
          align-items: center;
          gap: ${isMobile ? '0.75rem' : '0.5rem'};
          ${isMobile ? 'flex-direction: column; align-items: end;' : ''}
        }
        .agent-indicator {
          display: ${isMobile ? 'none' : 'flex'};
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: #6b7280;
        }
        .agent-icon {
          width: 1rem;
          height: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .send-button {
          padding: ${isMobile ? '0.75rem' : '0.5rem'};
          background: #2563eb;
          color: white;
          border: none;
          border-radius: ${isMobile ? '50%' : '0.5rem'};
          cursor: pointer;
          transition: background-color 0.2s;
          ${isMobile ? 'width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;' : ''}
        }
        .send-button:hover:not(:disabled) {
          background: #1d4ed8;
        }
        .send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .stop-button {
          display: ${isMobile ? 'none' : 'block'};
          padding: 0.5rem 0.75rem;
          background: #1f2937;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .stop-button:hover:not(:disabled) {
          background: #374151;
        }
        .stop-button:disabled {
          opacity: 0.5;
        }
        .github-auth-section {
          padding: ${isMobile ? '1rem' : '1rem'};
          border-bottom: 1px solid #e5e7eb;
        }
      `}</style>
      <div className="chat-container d-flex flex-column">
        {/* GitHub Auth Section */}
        <div className="github-auth-section">
          <GitHubAuth 
            onAuthSuccess={handleGitHubAuthSuccess}
            onAuthError={handleGitHubAuthError}
          />
        </div>

        {/* Action Pills */}
        {actionPills.length > 0 && (
          <div className="action-pills-area">
            {actionPills.map((pill) => (
              <div key={pill.id} className={`action-pill ${pill.status}`}>
                <div className="pill-icon">
                  {pill.type === 'edit' && <Edit3 size={14} />}
                  {pill.type === 'create' && <Plus size={14} />}
                  {pill.type === 'delete' && <Trash2 size={14} />}
                  {pill.type === 'folder' && <Folder size={14} />}
                </div>
                <div className="pill-content">
                  <span className="pill-action">
                    {pill.status === 'processing' && `Pixel ${pill.type === 'edit' ? 'editing' : 'creating'}`}
                    {pill.status === 'completed' && `Pixel ${pill.type === 'edit' ? 'edited' : 'created'}`}
                    {pill.status === 'failed' && `Pixel ${pill.type} failed`}
                  </span>
                  <span className="pill-file">{pill.fileName}</span>
                </div>
                <div className="pill-status">
                  {pill.status === 'processing' && <Loader size={12} className="spin" />}
                  {pill.status === 'completed' && <CheckCircle size={12} />}
                  {pill.status === 'failed' && <AlertCircle size={12} />}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Messages */}
        <div className="messages-area">
          {messages.map((message) => (
            <div key={message.id} className="message-item">
              {message.type === 'ai' && (
                <div className="ai-indicator">
                  <div className="ai-dot"></div>
                  <span>Thought for 3s</span>
                </div>
              )}
              <div className={message.type === 'user' ? 'user-message' : ''}>
                <div className={message.type === 'user' ? 'user-bubble' : 'ai-message'}>
                  {message.isThinking ? (
                    <div className="thinking-message">
                      <Loader size={16} className="spinner-border spinner-border-sm" />
                      <span>Thinking...</span>
                    </div>
                  ) : (
                    message.content
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="input-area">
          <div className="input-group">
            <div className="input-wrapper">
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={generatedWebsite ? "Ask for changes to your website..." : "Ask a follow-up..."}
                className="message-input"
                rows={1}
                disabled={isGenerating}
              />
            </div>
            <div className="controls-area">
              <div className="agent-indicator">
                <div className="agent-icon">
                  <span style={{fontSize: '0.75rem'}}>⚡</span>
                </div>
                <span>Agent</span>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim() || isGenerating}
                className="send-button"
              >
                {isGenerating ? (
                  <Loader size={16} className="spinner-border spinner-border-sm" />
                ) : (
                  <Send size={16} />
                )}
              </button>
              <button
                disabled={isGenerating}
                className="stop-button"
              >
                Stop
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkspaceChat;