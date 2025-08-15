"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader, CheckCircle, AlertCircle } from 'lucide-react';

const GitHubCallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    // This page will handle the GitHub OAuth callback
    // The actual processing is done in the GitHubAuth component
    // We just need to redirect back to the workspace
    
    const timer = setTimeout(() => {
      router.push('/workspace');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <style jsx>{`
        .callback-container {
          background: white;
          padding: 3rem;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          text-align: center;
          max-width: 400px;
          width: 90%;
        }
        .spinner {
          animation: spin 1s linear infinite;
          margin: 0 auto 1.5rem;
          color: #3b82f6;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }
        .description {
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.5;
        }
      `}</style>
      
      <div className="callback-container">
        <Loader size={48} className="spinner" />
        <h2 className="title">Processing GitHub Authentication</h2>
        <p className="description">
          Please wait while we complete your GitHub authentication and redirect you back to the workspace.
        </p>
      </div>
    </div>
  );
};

export default GitHubCallbackPage;
