"use client";

import React, { useState } from 'react';
import { Send, Loader } from 'lucide-react';

const WorkspaceChat = ({ generatedWebsite, onWebsiteGenerated }) => {
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
          projectType: 'static'
        }),
      });

      const data = await response.json();
      
      // Remove thinking message and add response
      setMessages(prev => prev.filter(msg => !msg.isThinking));
      
      if (data.success && data.website) {
        const aiResponse = {
          id: Date.now() + 2,
          type: 'ai',
          content: `I've generated a ${data.website.projectType} website: ${data.website.description}`,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
        
        if (onWebsiteGenerated) {
          onWebsiteGenerated(data.website);
        }
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

  return (
    <>
      <style jsx>{`
        .chat-container {
          height: 100%;
        }
        .messages-area {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
        }
        .message-item {
          margin-bottom: 1rem;
        }
        .ai-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
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
          margin-left: 2rem;
        }
        .user-bubble {
          display: inline-block;
          max-width: 100%;
          background: #f3f4f6;
          color: #1f2937;
          border-radius: 0.5rem;
          padding: 0.5rem 1rem;
        }
        .ai-message {
          color: #374151;
        }
        .thinking-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .input-area {
          border-top: 1px solid #e5e7eb;
          padding: 1rem;
        }
        .input-group {
          display: flex;
          align-items: end;
          gap: 0.5rem;
        }
        .input-wrapper {
          flex: 1;
        }
        .message-input {
          width: 100%;
          resize: none;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          min-height: 40px;
        }
        .message-input:focus {
          outline: none;
          border-color: #9ca3af;
        }
        .controls-area {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .agent-indicator {
          display: flex;
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
          padding: 0.5rem;
          background: #1f2937;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .send-button:hover:not(:disabled) {
          background: #374151;
        }
        .send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .stop-button {
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
      `}</style>
      <div className="chat-container d-flex flex-column">
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
                placeholder="Ask a follow-up..."
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