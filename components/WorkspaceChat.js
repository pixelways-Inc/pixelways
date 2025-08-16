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
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col space-y-2">
            {message.type === 'ai' && (
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Thought for 3s</span>
              </div>
            )}
            <div className={`${message.type === 'user' ? 'ml-8' : ''}`}>
              <div className={`inline-block max-w-full ${
                message.type === 'user' 
                  ? 'bg-gray-100 text-gray-900 rounded-lg px-4 py-2'
                  : 'text-gray-700'
              }`}>
                {message.isThinking ? (
                  <div className="flex items-center space-x-2">
                    <Loader size={16} className="animate-spin" />
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
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-end space-x-2">
          <div className="flex-1">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask a follow-up..."
              className="w-full resize-none border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-300 min-h-[40px]"
              rows={1}
              disabled={isGenerating}
            />
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <div className="w-4 h-4 flex items-center justify-center">
                <span className="text-xs">⚡</span>
              </div>
              <span>Agent</span>
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim() || isGenerating}
              className="p-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isGenerating ? (
                <Loader size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
            </button>
            <button
              disabled={isGenerating}
              className="px-3 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 disabled:opacity-50 transition-colors"
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceChat;
