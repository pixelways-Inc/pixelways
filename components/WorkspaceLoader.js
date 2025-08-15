"use client";

import React, { useState, useEffect } from 'react';
import { Loader, CheckCircle, Code, Palette, Rocket } from 'lucide-react';

const WorkspaceLoader = ({ 
  isLoading = false, 
  progress = 0, 
  currentStep = '', 
  steps = [],
  onComplete 
}) => {
  const [animateSuccess, setAnimateSuccess] = useState(false);

  const defaultSteps = [
    { id: 'init', label: 'Initializing workspace...', icon: Loader },
    { id: 'generate', label: 'Generating website files...', icon: Code },
    { id: 'process', label: 'Processing design...', icon: Palette },
    { id: 'complete', label: 'Ready to deploy!', icon: CheckCircle }
  ];

  const allSteps = steps.length > 0 ? steps : defaultSteps;
  const currentStepIndex = allSteps.findIndex(step => step.id === currentStep);

  useEffect(() => {
    if (progress >= 100 && !animateSuccess) {
      setAnimateSuccess(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1500);
    }
  }, [progress, animateSuccess, onComplete]);

  if (!isLoading) return null;

  return (
    <>
      <style jsx>{`
        .workspace-loader {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loader-content {
          background: white;
          padding: 3rem;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          text-align: center;
          max-width: 400px;
          width: 90%;
        }
        .progress-container {
          margin: 2rem 0;
        }
        .progress-bar {
          width: 100%;
          height: 8px;
          background: #f1f5f9;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #06b6d4);
          border-radius: 4px;
          transition: width 0.5s ease;
          position: relative;
        }
        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .steps-list {
          text-align: left;
          margin: 1.5rem 0;
        }
        .step-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }
        .step-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .step-icon.pending {
          background: #f1f5f9;
          color: #64748b;
        }
        .step-icon.active {
          background: #3b82f6;
          color: white;
          animation: pulse 2s infinite;
        }
        .step-icon.completed {
          background: #10b981;
          color: white;
        }
        .step-icon.success-animate {
          animation: successBounce 0.6s ease;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes successBounce {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        .step-label {
          color: #374151;
        }
        .step-label.active {
          color: #1f2937;
          font-weight: 500;
        }
        .step-label.completed {
          color: #6b7280;
        }
        .main-spinner {
          width: 60px;
          height: 60px;
          border: 4px solid #f1f5f9;
          border-top: 4px solid #3b82f6;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1.5rem;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .success-icon {
          width: 60px;
          height: 60px;
          color: #10b981;
          animation: successScale 0.8s ease;
          margin: 0 auto 1.5rem;
        }
        @keyframes successScale {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .percentage {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }
        .percentage.success {
          color: #10b981;
        }
      `}</style>
      
      <div className="workspace-loader">
        <div className="loader-content">
          {progress >= 100 && animateSuccess ? (
            <CheckCircle className="success-icon" />
          ) : (
            <div className="main-spinner"></div>
          )}
          
          <div className={`percentage ${progress >= 100 ? 'success' : ''}`}>
            {progress}%
          </div>
          
          <h3 className="h5 fw-medium text-dark mb-3">
            {progress >= 100 ? 'Website Ready!' : 'Building Your Website'}
          </h3>
          
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="steps-list">
            {allSteps.map((step, index) => {
              const StepIcon = step.icon;
              let status = 'pending';
              
              if (index < currentStepIndex) {
                status = 'completed';
              } else if (index === currentStepIndex) {
                status = 'active';
              }
              
              if (progress >= 100 && index === allSteps.length - 1) {
                status = 'completed';
              }
              
              return (
                <div key={step.id} className="step-item">
                  <div className={`step-icon ${status} ${progress >= 100 && index === allSteps.length - 1 ? 'success-animate' : ''}`}>
                    {status === 'completed' ? (
                      <CheckCircle size={12} />
                    ) : status === 'active' ? (
                      <Loader size={12} />
                    ) : (
                      <StepIcon size={12} />
                    )}
                  </div>
                  <div className={`step-label ${status}`}>
                    {step.label}
                  </div>
                </div>
              );
            })}
          </div>
          
          {currentStep && (
            <p className="small text-muted mt-3">
              {allSteps.find(s => s.id === currentStep)?.label || currentStep}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default WorkspaceLoader;
