"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUp, Plus, Moon, Sun, Square } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ChatInterfaceLanding = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const abortControllerRef = useRef(null);
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();

  // Clear prompt when generation starts
  useEffect(() => {
    if (isGenerating) setPrompt('');
  }, [isGenerating]);

  const handleStopGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsGenerating(false);
    alert('AI generation stopped.'); // Or a more subtle UI indication
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return; // Only return if no message, allow stopping if generating

    // If currently generating, this click should stop it
    if (isGenerating) {
      handleStopGeneration();
      return;
    }

    setIsGenerating(true); // Set generating state when starting

    try {
      // Initialize AbortController
      abortControllerRef.current = new AbortController();
      const signal = abortControllerRef.current.signal;

      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          projectType: 'static'
        }),
        signal: signal // Pass the signal to the fetch request
      });
      const data = await response.json();

      if (data.success && data.website) {
        sessionStorage.setItem('generatedWebsite', JSON.stringify(data.website));
        router.push('/workspace?generated=true');
      } else {
        console.error('Failed to generate website:', data.error);
        alert('Failed to generate website. Please try again.');
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted by user.');
        // handleStopGeneration already showed an alert
      } else {
        console.error('Error generating website:', error);
        alert('Error generating website. Please try again.');
      }
    } finally {
      setIsGenerating(false);
      abortControllerRef.current = null; // Clear the controller
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  const promptSuggestions = [
    { display: "Landing page", prompt: "Create a modern landing page for my startup" },
    { display: "Portfolio site", prompt: "Build a portfolio website to showcase my work" }, 
    { display: "Restaurant menu", prompt: "Design a restaurant website with menu" },
    { display: "E-commerce store", prompt: "Make an e-commerce store for clothing" },
    { display: "Blog with dark mode", prompt: "Create a blog website with dark mode" },
    { display: "Business website", prompt: "Build a business website with contact forms" }
  ];

  return (
    <div className={`lovable-container ${isDark ? 'dark-mode' : ''}`}>
      <style jsx>{`
        .lovable-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          position: relative;
          overflow: hidden;
        }

        .lovable-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .theme-toggle {
          position: fixed;
          top: 2rem;
          right: 2rem;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          padding: 12px;
          transition: all 0.3s ease;
          cursor: pointer;
          color: white;
        }

        .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }

        .main-content {
          width: 100%;
          max-width: 768px;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.1;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .heart {
          color: #ff6b6b;
          text-shadow: 0 0 20px rgba(255, 107, 107, 0.5);
        }

        .subtitle {
          font-size: 1.25rem;
          color: #000;
          margin-bottom: 3rem;
          font-weight: 400;
        }

        .chat-container {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .chat-container:hover {
          transform: translateY(-2px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
        }

        .plus-button {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: none;
          background: #f8f9fa;
          color: #6b7280;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .plus-button:hover {
          background: #e9ecef;
          color: #495057;
        }

        .input-area {
          flex: 1;
          position: relative;
        }

        .chat-input {
          width: 100%;
          border: none;
          outline: none;
          font-size: 1.1rem;
          color: #000000; /* Black text color */
          background: transparent;
          resize: none;
          line-height: 1.5;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          min-height: 44px;
          max-height: 120px;
          padding: 0;
        }

        .chat-input::placeholder {
          color: #9ca3af;
        }

        .send-button {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: none;
          background: #1f2937;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .send-button:hover:not(:disabled) {
          background: #111827;
          transform: scale(1.05);
        }

        .send-button:disabled {
          background: #e5e7eb;
          color: #9ca3af;
          cursor: not-allowed;
        }

        .generating-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.96);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(6px);
          z-index: 20;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.03);
        }

        .generating-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #667eea;
          font-weight: 600;
          font-size: 1.1rem;
          background: none;
          z-index: 21;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #e5e7eb;
          border-top: 2px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .suggestions-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          max-width: 100%;
        }

        .suggestion-pill {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 999px;
          padding: 0.5rem 1rem;
          color: white;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          max-width: 140px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-block;
        }

        .suggestion-pill:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .lovable-container {
            padding: 1rem 0.75rem;
            justify-content: flex-start;
            padding-top: 2rem;
          }
          
          .main-content {
            max-width: 100%;
            width: 100%;
          }
          
          .chat-container {
            margin: 0 0 2rem 0;
            padding: 1rem;
            width: 100%;
            box-sizing: border-box;
          }
          
          .input-wrapper {
            gap: 0.75rem;
          }
          
          .plus-button, .send-button {
            width: 36px;
            height: 36px;
            flex-shrink: 0;
          }
          
          .chat-input {
            font-size: 1rem;
            min-height: 36px;
          }
          
          .title {
            margin-bottom: 0.75rem;
            font-size: clamp(2rem, 8vw, 3rem);
          }
          
          .subtitle {
            margin-bottom: 2rem;
            font-size: 1rem;
            padding: 0 1rem;
          }
          
          .suggestions-container {
            gap: 0.5rem;
            padding: 0 0.5rem;
          }
          
          .suggestion-pill {
            font-size: 0.75rem;
            padding: 0.4rem 0.8rem;
            max-width: calc(50% - 0.25rem);
            min-width: 80px;
          }
          
          .theme-toggle {
            top: 1rem;
            right: 1rem;
            padding: 8px;
          }
        }
        
        @media (max-width: 480px) {
          .lovable-container {
            padding: 1rem 0.5rem;
          }
          
          .chat-container {
            padding: 0.75rem;
          }
          
          .input-wrapper {
            gap: 0.5rem;
          }
          
          .plus-button, .send-button {
            width: 32px;
            height: 32px;
          }
          
          .chat-input {
            font-size: 0.95rem;
            min-height: 32px;
          }
          
          .title {
            font-size: clamp(1.75rem, 10vw, 2.5rem);
          }
          
          .subtitle {
            font-size: 0.9rem;
          }
          
          .suggestions-container {
            gap: 0.4rem;
          }
          
          .suggestion-pill {
            font-size: 0.7rem;
            padding: 0.35rem 0.7rem;
            max-width: calc(50% - 0.2rem);
            min-width: 70px;
          }
        }

        .lovable-container.dark-mode {
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #3a3a3a 100%);
        }

        .lovable-container.dark-mode::before {
          background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
        }

        .lovable-container.dark-mode .theme-toggle {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
        }

        .lovable-container.dark-mode .theme-toggle:hover {
          background: rgba(0, 0, 0, 0.5);
        }

        .lovable-container.dark-mode .title {
          color: white;
          text-shadow: 0 2px 20px rgba(255, 255, 255, 0.1);
        }

        .lovable-container.dark-mode .subtitle {
          color: #ccc; /* Slightly lighter than pure white for contrast */
        }

        .lovable-container.dark-mode .chat-container {
          background: rgba(26, 26, 26, 0.95); /* Darker background for better contrast */
          border: 1px solid #333333; /* Slightly lighter border */
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .lovable-container.dark-mode .chat-container:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
          border-color: #404040;
        }

        .lovable-container.dark-mode .plus-button {
          background: #2a2a2a; /* Slightly lighter background */
          color: #ffffff;
          border: 1px solid #404040; /* Lighter border for visibility */
        }

        .lovable-container.dark-mode .plus-button:hover {
          background: #404040; /* Lighter hover background */
          color: white;
          border-color: #505050;
        }

        .lovable-container.dark-mode .chat-input {
          color: white;
          background: transparent; /* Keep transparent since parent container has background */
        }

        .lovable-container.dark-mode .chat-input::placeholder {
          color: rgba(255, 255, 255, 0.5); /* Better contrast for placeholder */
        }

        .lovable-container.dark-mode .send-button {
          background: #404040; /* Slightly lighter background for visibility */
          color: white;
          border: 1px solid #505050;
        }

        .lovable-container.dark-mode .send-button:hover:not(:disabled) {
          background: #505050; /* Lighter hover background */
          border-color: #606060;
        }

        .lovable-container.dark-mode .send-button:disabled {
          background: #2a2a2a; /* secondary-bg-color */
          color: rgba(255, 255, 255, 0.4);
        }

        .lovable-container.dark-mode .generating-overlay {
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
        }

        .lovable-container.dark-mode .generating-content {
          color: white;
        }

        .lovable-container.dark-mode .spinner {
          border: 2px solid #444444; /* global-border-color */
          border-top: 2px solid white;
        }

        .lovable-container.dark-mode .suggestion-pill {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          text-shadow: none;
        }

        .lovable-container.dark-mode .suggestion-pill:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }
      `}</style>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <div className="main-content">
        {/* Main Heading */}
        <h1 className="title">
          Build something <span className="heart">❤️</span> stunning
        </h1>
        <p className="subtitle">
          Create stunning websites by chatting with AI
        </p>

        {/* Chat Input Section */}
        <div className="chat-container">
          {isGenerating && (
            <div className="generating-overlay">
              <div className="generating-content">
                <div className="spinner"></div>
                <span>Pixel AI is working...</span>
              </div>
            </div>
          )}
          
          <div className="input-wrapper">
            <button className="plus-button" disabled={isGenerating}>
              <Plus size={20} />
            </button>
            
            <div className="input-area">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask Pixel to create an internal tool"
                className="chat-input"
                disabled={isGenerating}
                rows={1}
                style={{
                  height: 'auto',
                  minHeight: '44px'
                }}
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                }}
              />
            </div>
            
            <button
              onClick={isGenerating ? handleStopGeneration : handleGenerate}
              disabled={!prompt.trim() && !isGenerating} // Disable only if no prompt and not generating
              className="send-button"
            >
              {isGenerating ? <Square size={20} className="text-red-500" /> : <ArrowUp size={20} />}
            </button>
          </div>
        </div>

        {/* Suggestion Pills */}
        <div className="suggestions-container">
          {promptSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setPrompt(suggestion.prompt)}
              className="suggestion-pill"
              disabled={isGenerating}
              title={suggestion.prompt}
            >
              {suggestion.display}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatInterfaceLanding;
  