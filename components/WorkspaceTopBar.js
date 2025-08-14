"use client";

import React from 'react';
import { Monitor, RefreshCw, ExternalLink, Code, Share, ChevronDown, Menu } from 'lucide-react';

const WorkspaceTopBar = () => {
  return (
    <div className="h-16 bg-[#1a1a2e] border-b border-[#374151] flex items-center px-4 justify-between"> {/* topBar */}
      <div className="flex items-center gap-4"> {/* leftSection */}
        <div className="flex items-center gap-2 bg-[rgba(17,24,39,0.8)] border border-[#374151] rounded-md px-4 py-2"> {/* appViewer */}
          <Monitor size={16} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-200">App Viewer</span>
        </div>
        <div className="flex items-center gap-2 bg-[#3b82f6] rounded-md px-4 py-2"> {/* userTab */}
          <div className="w-6 h-6 rounded-full bg-[#60a5fa] flex items-center justify-center text-xs font-semibold text-white">
            JD
          </div>
          <span className="text-sm font-medium text-white">John Doe</span>
        </div>
      </div>

      <div className="flex items-center gap-4"> {/* rightSection */}
        <div className="flex items-center gap-2"> {/* controlButtons */}
          <button className="bg-transparent border border-[#374151] rounded-md p-2 text-gray-400 cursor-pointer hover:bg-[rgba(156,163,175,0.1)]"> {/* controlButton */}
            <RefreshCw size={16} />
          </button>
          <button className="bg-transparent border border-[#374151] rounded-md p-2 text-gray-400 cursor-pointer hover:bg-[rgba(156,163,175,0.1)]"> {/* controlButton */}
            <ExternalLink size={16} />
          </button>
          <button className="bg-transparent border border-[#374151] rounded-md p-2 text-gray-400 cursor-pointer hover:bg-[rgba(156,163,175,0.1)]"> {/* controlButton */}
            <Code size={16} />
          </button>
        </div>
        <button className="flex items-center gap-2 bg-[#4f46e5] rounded-md px-4 py-2 text-white text-sm font-medium cursor-pointer hover:bg-[#6366f1]"> {/* publishButton */}
          <Share size={16} />
          Publish
        </button>
        <button className="flex items-center gap-2 bg-[#4f46e5] rounded-md px-4 py-2 text-white text-sm font-medium cursor-pointer"> {/* shareButton */}
          Share <ChevronDown size={16} />
        </button>
        <button className="bg-transparent border-none text-gray-400 cursor-pointer p-2"> {/* menuButton */}
          <Menu size={20} />
        </button>
      </div>
    </div>
  );
};

export default WorkspaceTopBar;
