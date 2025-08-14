"use client";

import React from 'react';
import { Check, Crown } from 'lucide-react'; // Assuming lucide-react is installed

const TopBadges = () => {
  const badges = [
    { icon: Check, text: "Product Hunt", subtext: "#630" },
    { icon: Crown, text: "#1 Product of the Week" }
  ];

  return (
    <div className="flex justify-center gap-4 mb-12"> {/* container */}
      {badges.map((badge, index) => (
        <div
          key={index}
          className="bg-[rgba(17,24,39,0.8)] border border-[#374151] rounded-full px-4 py-2 flex items-center gap-2 backdrop-blur-md" // badge
        >
          <badge.icon size={16} color="#10b981" /> {/* icon */}
          <span className="text-sm font-medium text-white"> {/* text */}
            {badge.text}
            {badge.subtext && <span className="text-gray-400 ml-1">{badge.subtext}</span>}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TopBadges;
