"use client";

import React from 'react';
import ChatInterfaceLanding from '@/components/ChatInterfaceLanding';
import { ThemeProvider } from '@/context/ThemeContext';

const BuilderPage = () => {
  return (
    <ThemeProvider>
      <div className="min-vh-100 bg-light d-flex flex-column align-items-center justify-content-center">
        <div className="container-fluid py-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <ChatInterfaceLanding />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default BuilderPage;
