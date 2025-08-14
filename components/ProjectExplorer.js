"use client";

import React from 'react';
import { Folder, FileText } from 'lucide-react';

const ProjectExplorer = () => {
  const projectItems = [
    { type: "folder", name: "Project Folder 1", icon: Folder, expanded: false, color: "#9ca3af" },
    { type: "folder", name: "Project Folder 2", icon: Folder, expanded: false, color: "#9ca3af" },
    { type: "file", name: "file1.js", icon: FileText, color: "#60a5fa" },
    { type: "file", name: "file2.css", icon: FileText, color: "#60a5fa" }
  ];

  return (
    <div className="px-4 mb-6"> {/* projectSection */}
      <h3 className="text-gray-400 text-sm font-semibold mb-2">PROJECTS</h3>
      {projectItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-2 rounded-md cursor-pointer text-sm text-gray-400 hover:bg-[#1e2951]" // itemStyle
        >
          <item.icon size={16} className={item.color === "#60a5fa" ? "text-[#60a5fa]" : "text-gray-400"} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ProjectExplorer;
