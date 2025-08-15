"use client";

import React, { useState, useEffect } from 'react';
import { Send, Loader } from 'lucide-react';
import GitHubAuth from './GitHubAuth';

const WorkspaceChat = ({ generatedWebsite, onWebsiteGenerated, onSwitchToCodeView }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "I'll create a modern, responsive landing page for StreamLine. Let me first generate a detailed design brief to ensure we create something visually compelling and professional.",
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [githubToken, setGithubToken] = useState(null);
  const [githubUser, setGithubUser] = useState(null);

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

  const handleSendMessage = async () => {
    if (!newMessage.trim() || isGenerating) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: newMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
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
        
        // Auto-switch to code view after generation/update
        setTimeout(() => {
          if (onSwitchToCodeView) {
            onSwitchToCodeView();
          }
        }, 1000);
      } else {
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