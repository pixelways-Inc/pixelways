"use client";

import React from 'react';
import ChatInterfaceLanding from '@/components/ChatInterfaceLanding';
import { ThemeProvider } from '@/context/ThemeContext';

const BuilderPage = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-4 transition-colors">
        <div className="w-full max-w-4xl mx-auto py-12">
          <ChatInterfaceLanding />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default BuilderPage;
