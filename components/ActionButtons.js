"use client";

import React from 'react';
import { Globe, Presentation, FileText, BookOpen, BarChart3, Link, CreditCard, FolderOpen } from 'lucide-react';

const ActionButtons = () => {
  const buttons = [
    { icon: Globe, text: "Web", category: "primary" },
    { icon: Presentation, text: "Slidev", category: "primary" },
    { icon: FileText, text: "Doc", category: "primary" },
    { icon: BookOpen, text: "Blog", category: "primary" },
    { icon: BarChart3, text: "Dashboard", category: "primary" },
    { icon: Link, text: "Link Hub", category: "primary" },
    { icon: CreditCard, text: "Business Card", category: "secondary" },
    { icon: FolderOpen, text: "Fold", category: "secondary" }
  ];

  const primaryButtons = buttons.filter(btn => btn.category === 'primary');
  const secondaryButtons = buttons.filter(btn => btn.category === 'secondary');

  return (
    <div className="w-full max-w-3xl mb-8"> {/* container */}
      <div className="flex flex-wrap gap-4 mb-4 justify-center"> {/* primaryRow */}
        {primaryButtons.map((button, index) => (
          <button
            key={index}
            className="bg-[rgba(17,24,39,0.8)] border border-[#374151] rounded-xl p-4 flex items-center gap-3 text-sm font-medium text-gray-200 cursor-pointer transition-all duration-200 backdrop-blur-md min-w-[140px] hover:bg-[rgba(17,24,39,0.9)] hover:border-[#4f46e5] hover:-translate-y-px" // button
          >
            <button.icon size={20} className="opacity-80" /> {/* icon */}
            {button.text}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 justify-center"> {/* secondaryRow */}
        {secondaryButtons.map((button, index) => (
          <button
            key={index}
            className="bg-[rgba(17,24,39,0.8)] border border-[#374151] rounded-xl p-4 flex items-center gap-3 text-sm font-medium text-gray-200 cursor-pointer transition-all duration-200 backdrop-blur-md min-w-[140px] hover:bg-[rgba(17,24,39,0.9)] hover:border-[#4f46e5] hover:-translate-y-px" // button
          >
            <button.icon size={20} className="opacity-80" /> {/* icon */}
            {button.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActionButtons;
