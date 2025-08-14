"use client";

import React from 'react';

const PreviewFrame = ({ previewUrl }) => {
  return (
    <div className="relative w-full h-full">
      {/* Loading spinner or message can go here */}
      <iframe
        src={previewUrl || "about:blank"} // Use a placeholder or about:blank if no URL
        className="w-full h-full border-none"
        title="Website Preview"
      ></iframe>
    </div>
  );
};

export default PreviewFrame;
