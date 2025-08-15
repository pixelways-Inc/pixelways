"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import TextareaAutosize from 'react-textarea-autosize';import { Send, Loader } from 'lucide-react';

const ChatInterfaceLanding = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [projectType, setProjectType] = useState('static');
  const router = useRouter();

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
    <div className="w-full max-w-4xl mx-auto px-4"> {/* container */}
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
          What can I help you build?
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Describe your project and I'll generate a complete website for you using AI.
        </p>
      </div>
      {/* Chat Input Section */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md focus-within:border-gray-300 focus-within:shadow-md transition-all duration-200 p-6 mb-8 max-w-3xl mx-auto"> {/* inputSection */}
        <div className="relative"> {/* inputContainer */}
          <TextareaAutosize
            id="chat-input"
            minRows={3}
            maxRows={6}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask v0 to build..."
            className="w-full bg-transparent border-none text-lg text-gray-900 placeholder-gray-500 resize-none focus:outline-none leading-relaxed" // textarea
            disabled={isGenerating}
          />

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-3">
              {/* Agent Tag */}
              <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700"> {/* engineerTag */}
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Agent
              </div>
            </div>
            {/* Send Button */}
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="inline-flex items-center justify-center w-8 h-8 bg-gray-900 text-white rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isGenerating ? <Loader size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </div>
        </div>
      </div>
      {/* Quick Action Buttons */}
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => setPrompt("Clone this screenshot and create a similar website")}
            className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200 text-left group"
          >
            <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              📷
            </div>
            <span className="text-sm font-medium text-gray-900">Clone a Screenshot</span>
          </button>

          <button
            onClick={() => setPrompt("Import and convert this Figma design to a website")}
            className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200 text-left group"
          >
            <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              🎨
            </div>
            <span className="text-sm font-medium text-gray-900">Import from Figma</span>
          </button>

          <button
            onClick={() => setPrompt("Upload my project files and help me build upon them")}
            className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200 text-left group"
          >
            <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              📁
            </div>
            <span className="text-sm font-medium text-gray-900">Upload a Project</span>
          </button>

          <button
            onClick={() => setPrompt("Create a beautiful landing page for my startup")}
            className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200 text-left group"
          >
            <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              🏠
            </div>
            <span className="text-sm font-medium text-gray-900">Landing Page</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterfaceLanding;