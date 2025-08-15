"use client";

import React from 'react';
import { Loader, Globe, AlertCircle, ExternalLink } from 'lucide-react';

const PreviewFrame = ({ previewUrl, isDeploying }) => {
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

  return (
    <div className="position-relative w-100 h-100">
      <div className="position-absolute top-0 start-0 end-0 bg-white border-bottom p-2" style={{zIndex: 10}}>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <Globe size={16} className="text-success" />
            <span className="small text-muted text-truncate">{previewUrl}</span>
          </div>
          <button
            onClick={() => window.open(previewUrl, '_blank', 'noopener noreferrer')}
            className="btn btn-outline-primary btn-sm p-1"
            title="Open in new tab"
          >
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
      <iframe
        src={previewUrl}
        className="w-100 border-0"
        style={{ marginTop: '48px', height: 'calc(100% - 48px)' }}
        title="Website Preview"
        onError={() => {
          console.error('Failed to load preview iframe');
        }}
      />
    </div>
  );
};

export default PreviewFrame;
