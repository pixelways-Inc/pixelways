"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Send, Loader, Plus, Bot, User, Square } from 'lucide-react';

const WorkspaceChat = ({ generatedWebsite, onWebsiteGenerated }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [dbLoaded, setDbLoaded] = useState(false);
  const messagesEndRef = useRef(null);
  const abortControllerRef = useRef(null);
  const textareaRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleStopGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsGenerating(false);
    // Remove thinking message if it exists
    setMessages(prev => prev.filter(msg => !msg.isThinking));
    addMessage({
      id: Date.now(),
      type: 'ai',
      content: 'AI generation stopped.',
      timestamp: new Date().toISOString()
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize input
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 160) + 'px';
  }, [newMessage]);

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
    if (!newMessage.trim()) return; // Only return if no message, allow stopping if generating

    // If currently generating, this click should stop it
    if (isGenerating) {
      handleStopGeneration();
      return;
    }

    setIsGenerating(true); // Set generating state when starting
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

      // Initialize AbortController
      abortControllerRef.current = new AbortController();
      const signal = abortControllerRef.current.signal;

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
        signal: signal // Pass the signal to the fetch request
      });

      const data = await response.json();
      
      // Remove thinking message
      setMessages(prev => prev.filter(msg => !msg.isThinking));
      
      if (data.success && data.website) {
        // Use the AI's description if available, otherwise use a default message
        const aiResponseContent = data.message || `I've updated your website: ${data.website.description}`;
        const actions = parseActions(aiResponseContent);
        const cleanContent = removeActionBlocks(aiResponseContent);
        
        // Optional: log actions for debugging/chron tracing
        if (actions && actions.length) {
          try { console.log('AI Actions:', actions); } catch (_) {}
        }

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
        
        if (actions && actions.length) {
          try { console.log('AI Actions (error path):', actions); } catch (_) {}
        }

        const errorMessage = {
          id: Date.now() + 2,
          type: 'ai',
          content: cleanContent,
          actions: actions
        };
        await addMessage(errorMessage);
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted by user.');
        // No need to add an error message, handleStopGeneration already added one
      } else {
        console.error('Error:', error);
        setMessages(prev => prev.filter(msg => !msg.isThinking));
        const errorContent = 'Sorry, I encountered an error. Please try again.';
        const actions = parseActions(errorContent);
        const cleanContent = removeActionBlocks(errorContent);
        
        if (actions && actions.length) {
          try { console.log('AI Actions (exception path):', actions); } catch (_) {}
        }

        const errorMessage = {
          id: Date.now() + 2,
          type: 'ai',
          content: cleanContent,
          actions: actions
        };
        await addMessage(errorMessage);
      }
    } finally {
      setIsGenerating(false);
      abortControllerRef.current = null; // Clear the controller
    }
  };

  const handleKeyPress = (e) => {
    // Enter to send; Shift+Enter makes a new line
    if (e.key === 'Enter' && !e.shiftKey) {
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
    <div className="flex flex-col h-full bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="text-sm font-semibold text-gray-800">AI Assistant</span>
          <span className="text-xs text-gray-400">connected</span>
        </div>
        <button
          onClick={handleClearChat}
          className="text-xs font-medium text-gray-500 hover:text-gray-700 hover:underline"
        >
          Clear Chat
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4 bg-gradient-to-b from-white to-gray-50">
        {messages.map((message) => {
          const isUser = message.type === 'user';
          return (
            <div key={message.id} className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
              {!isUser && (
                <div className="h-7 w-7 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-sm">
                  <Bot size={14} />
                </div>
              )}
              <div className={`max-w-[80%] rounded-2xl px-4 py-2 shadow-sm ${
                isUser
                  ? 'bg-gray-900 text-white rounded-br-md'
                  : 'bg-white border border-gray-200 text-gray-800 rounded-bl-md'
              }`}>
                {message.isThinking ? (
                  <div className="flex items-center gap-2">
                    <Loader size={16} className="animate-spin" />
                    <span>Thinking...</span>
                  </div>
                ) : (
                  <>
                    <div className={`${message.type === 'ai' && message.actions ? 'mb-1' : ''} whitespace-pre-wrap`}>
                      {message.content}
                    </div>
                    {message.type === 'ai' && message.actions && <ActionPills actions={message.actions} />}
                    {!message.isThinking && (
                      <div className={`mt-1 text-[10px] ${isUser ? 'text-gray-300 text-right' : 'text-gray-400'}`}>
                        {formatTimestamp(message.timestamp)}
                      </div>
                    )}
                  </>
                )}
              </div>
              {isUser && (
                <div className="h-7 w-7 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center shadow-sm">
                  <User size={14} />
                </div>
              )}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="sticky bottom-0 border-t border-gray-200 bg-white/90 backdrop-blur px-4 py-3">
        <div className="flex items-end gap-2">
          <button
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 hover:bg-gray-50"
            disabled={isGenerating}
            title="More actions"
          >
            <Plus size={18} />
          </button>
          <div className="flex-1">
            <div className="flex items-end gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-gray-200">
              <textarea
                ref={textareaRef}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask a follow-up..."
                className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-gray-400 max-h-40"
                rows={1}
                disabled={isGenerating}
              />
              <button
                onClick={isGenerating ? handleStopGeneration : handleSendMessage}
                disabled={!newMessage.trim() && !isGenerating} // Disable only if no message and not generating
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? <Square size={16} className="text-red-500" /> : <Send size={16} />}
              </button>
            </div>
            {/* Removed step indicator; actions are shown as pills inside AI messages and logged to console for debugging */}
          </div>
          {/* Optional Stop button kept but de-emphasized */}
          <button
            disabled={isGenerating}
            className="hidden sm:inline-flex px-3 py-2 rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceChat;
