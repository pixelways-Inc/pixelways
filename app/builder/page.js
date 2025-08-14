"use client";

import React from 'react';
import TopBadges from '@/components/TopBadges';
import HeroSection from '@/components/HeroSection';
import ChatInterfaceLanding from '@/components/ChatInterfaceLanding';
import ActionButtons from '@/components/ActionButtons';

const BuilderPage = () => {
  return (
    <div className="min-h-screen bg-[#0f0f23] text-white flex flex-col items-center justify-center p-4">
      <TopBadges />
      <HeroSection />
      <ChatInterfaceLanding />
      <ActionButtons />
    </div>
  );
};

export default BuilderPage;
