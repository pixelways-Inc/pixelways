"use client";

import React from 'react';
import ChatInterfaceLanding from '@/components/ChatInterfaceLanding';

const BuilderPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto py-12">
        <ChatInterfaceLanding />
      </div>
    </div>
  );
};

export default BuilderPage;
