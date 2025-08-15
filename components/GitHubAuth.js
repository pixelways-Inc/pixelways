"use client";

import React, { useState, useEffect } from 'react';
import { Github, Check, AlertCircle, ExternalLink } from 'lucide-react';

// Helper function to get current GitHub auth status (can be used by other components)
export const getGitHubAuthStatus = () => {
  if (typeof window === 'undefined') return null;
  
  const token = sessionStorage.getItem('github_access_token');
  const user = sessionStorage.getItem('github_user');
  
  if (token && user) {
    return {
      isAuthenticated: true,
      token,
      user: JSON.parse(user)
    };
  }
  
  return {
    isAuthenticated: false,
    token: null,
    user: null
  };
};

const GitHubAuth = ({ onAuthSuccess, onAuthError }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // GitHub OAuth App configuration
  const GITHUB_CLIENT_ID = 'Ov23liVwQzorWABZkC5t';
  const REDIRECT_URI = typeof window !== 'undefined' ? `${window.location.origin}/api/auth/github/callback` : '';

  useEffect(() => {
    // Check if user is already authenticated
    if (typeof window !== 'undefined') {
      const token = sessionStorage.getItem('github_access_token');
      const user = sessionStorage.getItem('github_user');
      
      if (token && user) {
        setIsAuthenticated(true);
        setUserInfo(JSON.parse(user));
        if (onAuthSuccess) {
          onAuthSuccess(token, JSON.parse(user));
        }
      }
    }

    // Handle OAuth callback from URL params (from our callback route)
    const urlParams = new URLSearchParams(window.location.search);
    const authSuccess = urlParams.get('github_auth_success');
    const token = urlParams.get('github_token');
    const username = urlParams.get('github_username');
    
    if (authSuccess === 'true' && token && username) {
      handleAuthSuccess(token, username);
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handleAuthSuccess = async (token, username) => {
    setIsLoading(true);
    setError(null);

    try {
      // Get user information
      const response = await fetch('https://api.github.com/user', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user information');
      }

      const userData = await response.json();
      const user = {
        id: userData.id,
        login: userData.login,
        name: userData.name,
        email: userData.email,
        avatar_url: userData.avatar_url,
      };

      // Store token and user info
      sessionStorage.setItem('github_access_token', token);
      sessionStorage.setItem('github_user', JSON.stringify(user));
      
      setIsAuthenticated(true);
      setUserInfo(user);
      
      if (onAuthSuccess) {
        onAuthSuccess(token, user);
      }

    } catch (error) {
      console.error('GitHub auth error:', error);
      setError(error.message);
      if (onAuthError) {
        onAuthError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const initiateGitHubAuth = () => {
    // Use our GitHub auth route which handles state generation and redirection
    window.location.href = '/api/auth/github?action=authorize';
  };

  const handleLogout = () => {
    sessionStorage.removeItem('github_access_token');
    sessionStorage.removeItem('github_user');
    setIsAuthenticated(false);
    setUserInfo(null);
  };

  if (isAuthenticated && userInfo) {
    return (
      <div className="github-auth-status">
        <style jsx>{`
          .github-auth-status {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.5rem 1rem;
            background: #f0f9ff;
            border: 1px solid #0ea5e9;
            border-radius: 8px;
            margin-bottom: 1rem;
          }
          .user-avatar {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 1px solid #e5e7eb;
          }
          .user-info {
            flex: 1;
          }
          .user-name {
            font-size: 0.875rem;
            font-weight: 500;
            color: #1f2937;
            margin: 0;
          }
          .auth-status {
            font-size: 0.75rem;
            color: #059669;
            display: flex;
            align-items: center;
            gap: 0.25rem;
          }
          .logout-btn {
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
            background: #f3f4f6;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            color: #374151;
            cursor: pointer;
            transition: background-color 0.2s;
          }
          .logout-btn:hover {
            background: #e5e7eb;
          }
        `}</style>
        
        <img 
          src={userInfo.avatar_url} 
          alt={userInfo.login}
          className="user-avatar"
        />
        <div className="user-info">
          <div className="user-name">{userInfo.login}</div>
          <div className="auth-status">
            <Check size={12} />
            GitHub Connected
          </div>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div className="github-auth-container">
      <style jsx>{`
        .github-auth-container {
          padding: 1.5rem;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          text-align: center;
          background: #fafafa;
          margin-bottom: 1rem;
        }
        .auth-icon {
          margin: 0 auto 1rem;
          color: #374151;
        }
        .auth-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }
        .auth-description {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .github-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: #24292e;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
          text-decoration: none;
        }
        .github-btn:hover {
          background: #1a1e22;
          color: white;
        }
        .github-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .error-message {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          padding: 0.75rem;
          border-radius: 6px;
          margin-top: 1rem;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .setup-note {
          background: #fef3c7;
          border: 1px solid #f59e0b;
          color: #92400e;
          padding: 0.75rem;
          border-radius: 6px;
          margin-top: 1rem;
          font-size: 0.75rem;
          line-height: 1.4;
        }
      `}</style>
      
      <Github size={48} className="auth-icon" />
      
      <h3 className="auth-title">Connect GitHub Account</h3>
      
      <p className="auth-description">
        Connect your GitHub account to deploy React/Vite projects directly to your repositories. 
        We'll create temporary repos for building and automatically clean them up after deployment.
      </p>
      
      <button 
        className="github-btn"
        onClick={initiateGitHubAuth}
        disabled={isLoading}
      >
        <Github size={16} />
        {isLoading ? 'Connecting...' : 'Connect with GitHub'}
        <ExternalLink size={14} />
      </button>
      
      {error && (
        <div className="error-message">
          <AlertCircle size={16} />
          {error}
        </div>
      )}
      
      <div className="setup-note">
        <strong>GitHub OAuth App Configuration:</strong>
        <br />Client ID: {GITHUB_CLIENT_ID}
        <br />Redirect URI: {REDIRECT_URI}
        <br />Scopes: repo, user:email, delete_repo
      </div>
    </div>
  );
};

export default GitHubAuth;
