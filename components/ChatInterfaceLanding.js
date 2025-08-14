"use client";

import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Plus, Wrench, ChevronDown } from 'lucide-react';

const ChatInterfaceLanding = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#1e1e3f] to-[#2d2d5a] border border-[#4338ca] rounded-xl p-8 mb-8 overflow-hidden w-full max-w-3xl"> {/* container */}
      {/* Background Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
        }}
      ></div>

      <div className="relative z-10"> {/* inputSection */}
        <label htmlFor="chat-input" className="block text-lg font-medium text-gray-200 mb-6"> {/* label */}
          Tell the MGX team what you want to do
        </label>

        <div className="relative mb-6"> {/* inputContainer */}
          <TextareaAutosize
            id="chat-input"
            minRows={4}
            placeholder="Describe your project, ask questions, or request help..."
            className="w-full bg-[rgba(17,24,39,0.6)] border border-[#374151] rounded-lg p-4 text-base text-white placeholder-gray-500 resize-y backdrop-blur-md transition-all duration-200 focus:outline-none focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5]" // textarea
          />
          <button className="absolute bottom-4 left-4 bg-transparent border-none text-gray-400 cursor-pointer p-1 rounded-md hover:bg-[rgba(156,163,175,0.1)]"> {/* addButton */}
            <Plus size={20} />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div className="inline-flex items-center gap-2 bg-[rgba(79,70,229,0.2)] border border-[#4f46e5] rounded-full px-4 py-2 text-sm font-medium text-[#a5b4fc]"> {/* engineerTag */}
            <Wrench size={16} />
            Engineer
          </div>

          <div className="flex items-center gap-2 bg-[rgba(17,24,39,0.8)] border border-[#374151] rounded-md px-4 py-2 text-sm text-gray-400 backdrop-blur-md cursor-pointer"> {/* modelSelector */}
            <span>Model: GPT-4o</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterfaceLanding;
