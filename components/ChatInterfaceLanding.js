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
        sessionStorage.setItem('generatedWebsite', JSON.stringify(data.website));
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
    <>
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .glass-effect-dark {
          background: rgba(17, 24, 39, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(75, 85, 99, 0.3);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2px;
          border-radius: 1rem;
        }
        
        .gradient-border-inner {
          background: white;
          border-radius: 0.875rem;
        }
        
        .gradient-border-inner-dark {
          background: #1f2937;
          border-radius: 0.875rem;
        }
        
        .hover-scale {
          transition: transform 0.2s ease-in-out;
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
        }
        
        .btn-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
          transition: all 0.3s ease;
        }
        
        .btn-gradient:hover {
          background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          color: white;
        }
        
        .template-card {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 1rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
          height: 100%;
        }
        
        .template-card:hover {
          border-color: #667eea;
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(102, 126, 234, 0.2);
        }
        
        .template-card-dark {
          background: #1f2937;
          border-color: #374151;
          color: white;
        }
        
        .template-card-dark:hover {
          border-color: #667eea;
        }
        
        .icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          transition: all 0.3s ease;
        }
        
        .icon-wrapper-blue {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          color: #2563eb;
        }
        
        .icon-wrapper-purple {
          background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
          color: #7c3aed;
        }
        
        .icon-wrapper-green {
          background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
          color: #16a34a;
        }
        
        .icon-wrapper-orange {
          background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
          color: #ea580c;
        }
        
        .theme-toggle {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          z-index: 1050;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 0.75rem;
          padding: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .theme-toggle:hover {
          transform: scale(1.1);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .theme-toggle-dark {
          background: rgba(17, 24, 39, 0.9);
          border-color: rgba(75, 85, 99, 0.3);
          color: white;
        }
        
        .pulse-dot {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .project-type-btn {
          border: 2px solid transparent;
          background: #f3f4f6;
          color: #6b7280;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          margin: 0 0.25rem;
        }
        
        .project-type-btn:hover {
          background: white;
          color: #1f2937;
          transform: scale(1.05);
        }
        
        .project-type-btn.active {
          background: white;
          border-color: #667eea;
          color: #667eea;
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
        }
        
        .project-type-btn-dark {
          background: #374151;
          color: #9ca3af;
        }
        
        .project-type-btn-dark:hover {
          background: #4b5563;
          color: white;
        }
        
        .project-type-btn-dark.active {
          background: #4b5563;
          border-color: #667eea;
          color: #93c5fd;
        }
      `}</style>

      <div className="container-fluid py-5">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`theme-toggle ${isDark ? 'theme-toggle-dark' : ''}`}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

      {/* Main Heading */}
        <div className="text-center mb-5">
          <h3 className={`display-4 fw-bold mb-4 ${isDark ? 'text-white' : 'gradient-text'}`}>
          What can I help you build?
          </h3>
          <p className={`lead ${isDark ? 'text-light' : 'text-muted'} mb-4`}>
          Describe your project and I'll generate a complete website for you using AI.
        </p>
          <div className="d-flex justify-content-center">
            <div style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '2px'
            }}></div>
          </div>
      </div>

      {/* Chat Input Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 col-xl-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-0">
                {/* Input Area */}
                <div className="d-flex align-items-end p-3 gap-3">
                  {/* Plus Icon */}
                  <button 
                    className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px', minWidth: '40px' }}
                    disabled={isGenerating}
                  >
                    <Plus size={20} className="text-muted" />
                  </button>

                  {/* Textarea Container */}
                  <div className="flex-fill position-relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyPress}
                      placeholder="Ask Pixel AI to build"
                      className="form-control border-0 resize-none"
                      style={{
                        minHeight: '40px',
                        maxHeight: '200px',
                        fontSize: '16px',
                        lineHeight: '1.5',
                        paddingRight: '50px'
                      }}
              disabled={isGenerating}
                      rows={1}
                    />
                    
                    {/* Generating State Overlay */}
                    {isGenerating && (
                      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-light bg-opacity-90 rounded">
                        <div className="d-flex align-items-center gap-2">
                          <div className="spinner-border spinner-border-sm text-primary" role="status">
                            <span className="visually-hidden">Generating...</span>
                          </div>
                          <span className="small fw-medium text-primary">Generating...</span>
          </div>
        </div>
                    )}
          </div>

          {/* Send Button */}
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
                    className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '40px', height: '40px', minWidth: '40px' }}
          >
            {isGenerating ? (
                      <Loader size={16} className="spinner-border spinner-border-sm text-light" />
            ) : (
                      <Send size={16} className="text-light" />
            )}
          </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Type Selection */}
        <div className="text-center mb-5">
          <p className={`h6 mb-4 ${isDark ? 'text-light' : 'text-dark'}`}>Choose your project type</p>
          <div className="d-flex justify-content-center">
            <div className={`p-2 rounded-4 ${isDark ? 'bg-secondary' : 'bg-light'}`} style={{border: '2px solid #e5e7eb'}}>
              <button
                onClick={() => setProjectType('static')}
                className={`project-type-btn ${isDark ? 'project-type-btn-dark' : ''} ${projectType === 'static' ? 'active' : ''}`}
              >
                Static Site
              </button>
              <button
                onClick={() => setProjectType('react-vite')}
                className={`project-type-btn ${isDark ? 'project-type-btn-dark' : ''} ${projectType === 'react-vite' ? 'active' : ''}`}
              >
                React + Vite
              </button>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="text-center mb-4">
          <h5 className={`mb-2 ${isDark ? 'text-light' : 'text-dark'}`}>Popular templates to get you started</h5>
          <p className={`small ${isDark ? 'text-muted' : 'text-secondary'}`}>Click any template to auto-fill the prompt</p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-6 col-md-3">
            <div
              onClick={() => setPrompt("Create a modern landing page for my startup")}
              className={`template-card ${isDark ? 'template-card-dark' : ''}`}
            >
              <div className="icon-wrapper icon-wrapper-blue">
                <Home size={24} />
              </div>
              <h6 className="text-center mb-2">Landing Page</h6>
              <p className={`small text-center mb-0 ${isDark ? 'text-muted' : 'text-secondary'}`}>
                Modern & responsive
              </p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div
              onClick={() => setPrompt("Build a portfolio website to showcase my work")}
              className={`template-card ${isDark ? 'template-card-dark' : ''}`}
            >
              <div className="icon-wrapper icon-wrapper-purple">
                <Briefcase size={24} />
              </div>
              <h6 className="text-center mb-2">Portfolio</h6>
              <p className={`small text-center mb-0 ${isDark ? 'text-muted' : 'text-secondary'}`}>
                Showcase your work
              </p>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div
              onClick={() => setPrompt("Create a blog website with multiple posts")}
              className={`template-card ${isDark ? 'template-card-dark' : ''}`}
            >
              <div className="icon-wrapper icon-wrapper-green">
                <PenTool size={24} />
              </div>
              <h6 className="text-center mb-2">Blog</h6>
              <p className={`small text-center mb-0 ${isDark ? 'text-muted' : 'text-secondary'}`}>
                Share your thoughts
              </p>
        </div>
      </div>

          <div className="col-6 col-md-3">
            <div
              onClick={() => setPrompt("Build a business website with contact forms")}
              className={`template-card ${isDark ? 'template-card-dark' : ''}`}
            >
              <div className="icon-wrapper icon-wrapper-orange">
                <Building2 size={24} />
              </div>
              <h6 className="text-center mb-2">Business</h6>
              <p className={`small text-center mb-0 ${isDark ? 'text-muted' : 'text-secondary'}`}>
                Professional presence
              </p>
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default ChatInterfaceLanding;