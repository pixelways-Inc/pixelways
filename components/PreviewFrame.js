"use client";

import React, { useEffect, useState } from 'react';
import { Loader, Globe, AlertCircle, ExternalLink, Monitor, Smartphone } from 'lucide-react';

const PreviewFrame = ({ previewUrl, isDeploying }) => {
  const [viewMode, setViewMode] = React.useState('desktop'); // 'desktop' | 'mobile'
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  if (isDeploying) {
    return (
      <div className="h-100 d-flex align-items-center justify-content-center bg-light">
        <div className="text-center">
          <Loader size={48} className="mb-4 text-primary" style={{animation: 'spin 1s linear infinite'}} />
          <h3 className="h5 fw-medium text-dark mb-2">Deploying Your Website</h3>
          <p className="small text-muted">Building and uploading files to the cloud...</p>
          <div className="mt-4 mx-auto bg-secondary rounded-pill" style={{width: '256px', height: '8px'}}>
            <div className="bg-primary rounded-pill" style={{ width: '60%', height: '8px', animation: 'pulse 2s infinite' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (!previewUrl) {
    return (
      <div className="h-100 d-flex align-items-center justify-content-center bg-light">
        <div className="text-center">
          <Globe size={48} className="mb-4 text-muted" />
          <h3 className="h5 fw-medium text-dark mb-2">No Preview Available</h3>
          <p className="small text-muted">Generate a website and deploy it to see the preview here.</p>
        </div>
      </div>
    );
  }

  const getIframeStyles = () => {
    // On mobile devices, always show full screen
    if (isMobile) {
      return {
        width: '100%',
        height: 'calc(100% - 48px)', // Adjusted for header bar
        marginTop: '48px', // Adjusted for header bar
        border: 'none'
      };
    }
    
    // On desktop, show mobile preview if selected
    if (viewMode === 'mobile') {
      return {
        width: '375px',
        height: '667px',
        maxHeight: 'calc(100vh - 200px)',
        border: '8px solid #1f2937',
        borderRadius: '24px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        backgroundColor: '#000',
        margin: '20px auto',
        position: 'relative'
      };
    }
    return {
      width: '100%',
      height: 'calc(100% - 48px)',
      marginTop: '48px',
      border: 'none'
    };
  };

  const getContainerStyles = () => {
    if (viewMode === 'mobile') {
      return {
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '48px',
        backgroundColor: '#f8f9fa'
      };
    }
    return {
      width: '100%',
      height: '100%',
      position: 'relative'
    };
  };

  return (
    <div className="position-relative w-100 h-100">
      {/* Header Bar */}
      <div className="position-absolute top-0 start-0 end-0 bg-white border-bottom p-2" style={{zIndex: 10}}>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <Globe size={16} className="text-success" />
            <span className="small text-muted text-truncate">{previewUrl}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <button
              onClick={() => window.open(previewUrl, '_blank', 'noopener noreferrer')}
              className="btn btn-outline-primary btn-sm p-1"
              title="Open in new tab"
            >
              <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Preview Area */}
      <div style={getContainerStyles()}>
        {viewMode === 'mobile' && (
          <div className="text-center mb-3" style={{paddingTop: '10px'}}>
            <span className="small text-muted">iPhone 12 Pro (375×667)</span>
          </div>
        )}
        
        <iframe
          src={previewUrl}
          style={getIframeStyles()}
          title="Website Preview"
          onError={() => {
            console.error('Failed to load preview iframe');
          }}
        />
      </div>

      {/* View Mode Toggle - Bottom Right (Hidden on mobile) */}
      {!isMobile && (
        <div className="position-absolute bottom-0 end-0 p-3" style={{zIndex: 10}}>
          <div className="btn-group" role="group">
            <button
              onClick={() => setViewMode('desktop')}
              className={`btn btn-sm d-flex align-items-center gap-1 ${
                viewMode === 'desktop' 
                  ? 'btn-primary text-white' 
                  : 'btn-outline-secondary bg-white'
              }`}
              title="Desktop View"
            >
              <Monitor size={14} />
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`btn btn-sm d-flex align-items-center gap-1 ${
                viewMode === 'mobile' 
                  ? 'btn-primary text-white' 
                  : 'btn-outline-secondary bg-white'
              }`}
              title="Mobile View"
            >
              <Smartphone size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewFrame;
