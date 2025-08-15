"use client";

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="d-flex align-items-center justify-content-center h-100 p-4">
          <div className="text-center">
            <div className="mb-3">
              <i className="fas fa-exclamation-triangle text-warning" style={{fontSize: '2rem'}}></i>
            </div>
            <h5 className="text-muted mb-2">Component Error</h5>
            <p className="small text-muted mb-3">
              {this.props.fallbackMessage || 'Something went wrong loading this component.'}
            </p>
            <button 
              className="btn btn-sm btn-outline-primary"
              onClick={() => {
                this.setState({ hasError: false, error: null });
                if (this.props.onRetry) this.props.onRetry();
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
