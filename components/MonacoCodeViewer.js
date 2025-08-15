"use client";

import React, { useEffect, useRef } from 'react';

// Lightweight Monaco via CDN for read-only viewing
// This avoids adding heavy npm deps and works in client components
const MonacoCodeViewer = ({ value = '', language = 'html', height = '100%', theme = 'vs-dark' }) => {
  const containerRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    let disposed = false;
    const load = async () => {
      if (typeof window === 'undefined') return;
      if (window.monaco && window.require) {
        init();
        return;
      }
      // Load AMD loader and monaco
      const loader = document.createElement('script');
      loader.src = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/loader.min.js';
      loader.onload = () => {
        if (disposed) return;
        window.require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });
        window.require(['vs/editor/editor.main'], init);
      };
      document.body.appendChild(loader);
    };

    const init = () => {
      if (!containerRef.current || disposed) return;
      
      // Additional safety checks
      if (!containerRef.current.style || !containerRef.current.offsetParent) {
        // Container not ready or not visible, retry later
        setTimeout(init, 100);
        return;
      }

      try {
        if (window.monaco && window.monaco.editor) {
          const editor = window.monaco.editor.create(containerRef.current, {
            value: value || '',
            language: language || 'plaintext',
            theme: theme || 'vs-dark',
            readOnly: true,
            automaticLayout: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            fontSize: 14,
          });
          editorRef.current = editor;
        }
      } catch (error) {
        console.warn('Monaco editor initialization failed:', error);
      }
    };

    load();
    return () => {
      disposed = true;
      if (editorRef.current) {
        editorRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      const model = editorRef.current.getModel();
      if (model && model.getValue() !== value) {
        editorRef.current.setValue(value || '');
      }
    }
  }, [value]);

  return (
    <div 
      style={{ 
        width: '100%', 
        height, 
        position: 'relative',
        minHeight: '200px',
        overflow: 'hidden'
      }} 
      ref={containerRef}
      onError={(e) => console.warn('Monaco container error:', e)}
      data-testid="monaco-container"
    />
  );
};

export default MonacoCodeViewer;


