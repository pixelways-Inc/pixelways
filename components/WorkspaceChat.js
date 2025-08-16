"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, Loader } from 'lucide-react';

const WorkspaceChat = ({ generatedWebsite, onWebsiteGenerated }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [dbLoaded, setDbLoaded] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // IndexedDB operations
  const openDB = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('PixelwaysChatDB', 1);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('messages')) {
          const store = db.createObjectStore('messages', { keyPath: 'id' });
          store.createIndex('timestamp', 'timestamp', { unique: false });
        }
      };
    });
  };

  const saveMessageToDB = async (message) => {
    try {
      const db = await openDB();
      const transaction = db.transaction(['messages'], 'readwrite');
      const store = transaction.objectStore('messages');
      await store.add(message);
      console.log('Message saved to IndexedDB:', message);
    } catch (error) {
      console.error('Error saving message to IndexedDB:', error);
    }
  };

  const loadMessagesFromDB = async () => {
    try {
      const db = await openDB();
      const transaction = db.transaction(['messages'], 'readonly');
      const store = transaction.objectStore('messages');
      const index = store.index('timestamp');
      
      return new Promise((resolve, reject) => {
        const request = index.getAll();
        request.onsuccess = () => {
          const messages = request.result.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
          resolve(messages);
        };
        request.onerror = () => reject(request.error);
      });
    } catch (error) {
      console.error('Error loading messages from IndexedDB:', error);
      return [];
    }
  };

  const clearMessagesFromDB = async () => {
    try {
      const db = await openDB();
      const transaction = db.transaction(['messages'], 'readwrite');
      const store = transaction.objectStore('messages');
      await store.clear();
      console.log('Messages cleared from IndexedDB');
    } catch (error) {
      console.error('Error clearing messages from IndexedDB:', error);
    }
  };

  // Load messages on component mount
  useEffect(() => {
    const initializeChat = async () => {
      try {
        const savedMessages = await loadMessagesFromDB();
        
        if (savedMessages.length > 0) {
          setMessages(savedMessages);
        } else {
          // Add initial welcome message if no messages exist
          const welcomeMessage = {
            id: Date.now(),
            type: 'ai',
            content: "Hello! I'm your AI assistant. I can help you modify your website, add new pages, or make any changes you need. What would you like to do?",
            timestamp: new Date().toISOString()
          };
          setMessages([welcomeMessage]);
          await saveMessageToDB(welcomeMessage);
          
          // Add a demo message showing action blocks (remove this after testing)
          setTimeout(async () => {
            const demoMessage = {
              id: Date.now() + 1,
              type: 'ai',
              content: "I can help you with website updates. For example, I could add a new section to your homepage, update the color scheme, or create additional pages.",
              actions: ["Adding responsive navigation", "Updating color scheme", "Creating contact form"],
              timestamp: new Date().toISOString()
            };
            setMessages(prev => [...prev, demoMessage]);
            await saveMessageToDB(demoMessage);
          }, 2000);
        }
        setDbLoaded(true);
      } catch (error) {
        console.error('Error initializing chat:', error);
        // Fallback to default message
        const fallbackMessage = {
          id: Date.now(),
          type: 'ai',
          content: "Hello! I'm your AI assistant. How can I help you today?",
          timestamp: new Date().toISOString()
        };
        setMessages([fallbackMessage]);
        setDbLoaded(true);
      }
    };

    initializeChat();
  }, []);

  const addMessage = async (message) => {
    const messageWithTimestamp = {
      ...message,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, messageWithTimestamp]);
    await saveMessageToDB(messageWithTimestamp);
  };

  // Parse action blocks from AI responses
  const parseActions = (content) => {
    const actionRegex = /<action>(.*?)<\/action>/gs;
    const actions = [];
    let match;
    
    while ((match = actionRegex.exec(content)) !== null) {
      actions.push(match[1].trim());
    }
    
    return actions;
  };

  // Remove action blocks from content to get clean text
  const removeActionBlocks = (content) => {
    return content.replace(/<action>.*?<\/action>/gs, '').trim();
  };

  // Action Pills Component
  const ActionPills = ({ actions }) => {
    if (!actions || actions.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2 mt-3">
        {actions.map((action, index) => (
          <div
            key={index}
            className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-medium border border-blue-200 hover:border-blue-300 transition-all duration-200 cursor-default shadow-sm"
            title={`Action: ${action}`}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            <span className="flex items-center gap-1">
              ⚡ {action}
            </span>
          </div>
        ))}
      </div>
    );
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || isGenerating) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: newMessage.trim()
    };

    await addMessage(userMessage);
    setNewMessage('');
    try {
      // Add thinking message
      const thinkingMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: 'Thinking...',
        isThinking: true
      };
      setMessages(prev => [...prev, { ...thinkingMessage, timestamp: new Date().toISOString() }]);

      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: userMessage.content,
          projectType: 'static',
          isFollowup: true,
          existingWebsite: generatedWebsite
        }),
      });

      const data = await response.json();
      
      // Remove thinking message
      setMessages(prev => prev.filter(msg => !msg.isThinking));
      
      if (data.success && data.website) {
        // Use the AI's description if available, otherwise use a default message
        const aiResponseContent = data.message || `I've updated your website: ${data.website.description}`;
        const actions = parseActions(aiResponseContent);
        const cleanContent = removeActionBlocks(aiResponseContent);
        
        const aiResponse = {
          id: Date.now() + 2,
          type: 'ai',
          content: cleanContent,
          actions: actions
        };
        await addMessage(aiResponse);
        
        if (onWebsiteGenerated) {
          onWebsiteGenerated(data.website);
        }
      } else {
        const errorContent = data.message || 'Sorry, I encountered an error updating the website. Please try again.';
        const actions = parseActions(errorContent);
        const cleanContent = removeActionBlocks(errorContent);
        
        const errorMessage = {
          id: Date.now() + 2,
          type: 'ai',
          content: cleanContent,
          actions: actions
        };
        await addMessage(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => prev.filter(msg => !msg.isThinking));
      const errorContent = 'Sorry, I encountered an error. Please try again.';
      const actions = parseActions(errorContent);
      const cleanContent = removeActionBlocks(errorContent);
      
      const errorMessage = {
        id: Date.now() + 2,
        type: 'ai',
        content: cleanContent,
        actions: actions
      };
      await addMessage(errorMessage);
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

  const handleClearChat = async () => {
    if (window.confirm('Are you sure you want to clear all chat messages?')) {
      await clearMessagesFromDB();
      setMessages([]);
      
      // Add welcome message
      const welcomeMessage = {
        id: Date.now(),
        type: 'ai',
        content: "Chat cleared! How can I help you with your website today?"
      };
      await addMessage(welcomeMessage);
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!dbLoaded) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <Loader size={24} className="animate-spin mb-2 mx-auto" />
          <p className="text-sm text-gray-500">Loading chat...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header with clear button */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium">AI Assistant</span>
        </div>
        <button
          onClick={handleClearChat}
          className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
        >
          Clear Chat
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col space-y-1">
            <div className={`${message.type === 'user' ? 'ml-8' : ''}`}>
              <div className={`max-w-full ${
                message.type === 'user' 
                  ? 'bg-blue-500 text-white rounded-lg px-4 py-2 inline-block'
                  : 'text-gray-700'
              }`}>
                {message.isThinking ? (
                  <div className="flex items-center space-x-2">
                    <Loader size={16} className="animate-spin" />
                    <span>Thinking...</span>
                  </div>
                ) : (
                  <div className={message.type === 'ai' ? 'w-full' : ''}>
                    <div className={message.type === 'ai' && message.actions ? 'mb-1' : ''}>
                      {message.content}
                    </div>
                    {message.type === 'ai' && message.actions && (
                      <ActionPills actions={message.actions} />
                    )}
                  </div>
                )}
              </div>
            </div>
            {!message.isThinking && (
              <div className={`text-xs text-gray-400 ${message.type === 'user' ? 'ml-8 text-right' : ''}`}>
                {formatTimestamp(message.timestamp)}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
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
