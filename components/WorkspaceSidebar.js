"use client";

import React from 'react';
import { Menu, Wrench, ChevronDown } from 'lucide-react'; // Assuming lucide-react is installed

const WorkspaceSidebar = () => {
  return (
    <div className="w-70 bg-[#16213e] border-r border-[#374151] flex flex-col"> {/* sidebar */}
      {/* Sidebar Header */}
      <div className="p-4 border-b border-[#374151] flex items-center gap-3"> {/* sidebarHeader container */}
        <div className="flex items-center gap-2"> {/* logo */}
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-lg font-bold text-black">
            P
          </div>
          <span className="text-xl font-bold text-white">PixelAI</span>
          <span className="bg-[#f59e0b] text-white text-xs font-medium px-2 py-0.5 rounded-full ml-1">Beta</span> {/* betaBadge */}
        </div>
        <button className="ml-auto bg-transparent border border-[#374151] rounded-md p-1 text-gray-400 cursor-pointer hover:bg-[#1e2951]"> {/* toggleButton */}
          <Menu size={16} />
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 p-4 overflow-y-auto"> {/* sidebarContent container */}
        <ProjectExplorer />
      </div>

      {/* Sidebar Bottom */}
      <div className="p-4 border-t border-[#374151]"> {/* sidebarBottom container */}
        <div className="bg-[rgba(17,24,39,0.8)] border border-[#374151] rounded-md p-3 flex items-center gap-2 cursor-pointer hover:bg-[#1e2951]"> {/* chatPrompt */}
          <MessageSquare size={16} className="text-gray-400" />
          <span className="text-sm text-gray-400 italic">Ask a follow-up...</span>
        </div>
        <div className="flex items-center gap-2 mt-3 p-2 bg-[rgba(79,70,229,0.2)] border border-[#4f46e5] rounded-md"> {/* engineerTag */}
          <Wrench size={16} className="text-[#a5b4fc]" />
          <span className="text-sm font-medium text-[#a5b4fc]">Engineer</span>
        </div>
        <div className="flex items-center justify-between mt-2 p-2 bg-[rgba(17,24,39,0.6)] border border-[#374151] rounded-md cursor-pointer"> {/* modelSelector */}
          <span className="text-sm text-gray-200">Model: GPT-4o</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default WorkspaceSidebar;
