"use client";

import React from 'react';
import { Loader, Globe, AlertCircle } from 'lucide-react';

const PreviewFrame = ({ previewUrl, isDeploying }) => {
  if (isDeploying) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-50">
        <div className="text-center">
          <Loader size={48} className="mx-auto mb-4 text-blue-500 animate-spin" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Deploying Your Website</h3>
          <p className="text-sm text-gray-500">Building and uploading files to the cloud...</p>
          <div className="mt-4 w-64 bg-gray-200 rounded-full h-2 mx-auto">
            <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (!previewUrl) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-50">
        <div className="text-center">
          <Globe size={48} className="mx-auto mb-4 text-gray-300" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Preview Available</h3>
          <p className="text-sm text-gray-500">Generate a website and deploy it to see the preview here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 right-0 bg-white border-b border-gray-200 p-2 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe size={16} className="text-green-500" />
            <span className="text-sm text-gray-600 truncate">{previewUrl}</span>
          </div>
          <a 
            href={previewUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            Open in new tab
          </a>
        </div>
      </div>
      <iframe
        src={previewUrl}
        className="w-full h-full border-none"
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
