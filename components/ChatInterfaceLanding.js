"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send, Loader, Plus, Moon, Sun, Paperclip, Home, Briefcase, PenTool, Building2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ChatInterfaceLanding = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [projectType, setProjectType] = useState('static');
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();

  const handleGenerate = async () => {
    if (!prompt.trim() || isGenerating) return;
    setIsGenerating(true);

    try {
      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          projectType: projectType
        }),
      });
      const data = await response.json();

      if (data.success && data.website) {
        // Store the generated website data in sessionStorage
        sessionStorage.setItem('generatedWebsite', JSON.stringify(data.website));

        // Navigate to workspace with the generated content
        router.push('/workspace?generated=true');
      } else {
        console.error('Failed to generate website:', data.error);
        alert('Failed to generate website. Please try again.');
      }
    } catch (error) {
      console.error('Error generating website:', error);
      alert('Error generating website. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
      {/* Main Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-medium text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
          What can I help you build?
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Describe your project and I'll generate a complete website for you using AI.
        </p>
      </div>

      {/* Chat Input Section */}
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md focus-within:border-gray-300 dark:focus-within:border-gray-600 focus-within:shadow-md transition-all duration-200 mb-12 max-w-3xl mx-auto">
        <div className="p-4">
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask Pixel AI to build"
              className="w-full bg-transparent border-none text-base text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none focus:outline-none leading-relaxed min-h-[60px] max-h-[150px]"
              disabled={isGenerating}
              rows={2}
            />
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            {/* Attach Icon */}
            <button className="flex items-center justify-center w-7 h-7 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all duration-200">
              <Paperclip size={16} />
            </button>

            {/* Plus Icon */}
            <button className="flex items-center justify-center w-7 h-7 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all duration-200">
              <Plus size={16} />
            </button>

            {/* Agent Tag */}
            <div className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-gray-700 rounded-full px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 ml-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              Agent
            </div>
          </div>

          {/* Send Button */}
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="inline-flex items-center justify-center w-8 h-8 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isGenerating ? (
              <Loader size={16} className="animate-spin" />
            ) : (
              <Send size={16} />
            )}
          </button>
        </div>
      </div>

      {/* Project Type Selection */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Choose your project type:</p>
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setProjectType('static')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                projectType === 'static'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Static Site
            </button>
            <button
              onClick={() => setProjectType('react-vite')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                projectType === 'react-vite'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              React + Vite
            </button>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => setPrompt("Create a modern landing page for my startup")}
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all duration-200 text-left group"
          >
            <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
              <Home size={14} className="text-gray-600 dark:text-gray-300" />
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">Landing Page</span>
          </button>

          <button
            onClick={() => setPrompt("Build a portfolio website to showcase my work")}
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all duration-200 text-left group"
          >
            <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
              <Briefcase size={14} className="text-gray-600 dark:text-gray-300" />
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">Portfolio</span>
          </button>

          <button
            onClick={() => setPrompt("Create a blog website with multiple posts")}
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all duration-200 text-left group"
          >
            <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
              <PenTool size={14} className="text-gray-600 dark:text-gray-300" />
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">Blog</span>
          </button>

          <button
            onClick={() => setPrompt("Build a business website with contact forms")}
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all duration-200 text-left group"
          >
            <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors">
              <Building2 size={14} className="text-gray-600 dark:text-gray-300" />
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">Business</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterfaceLanding;