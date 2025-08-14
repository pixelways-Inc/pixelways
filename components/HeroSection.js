"use client";

import React from 'react';

const HeroSection = () => {
  const avatars = [
    { size: "2rem", background: "#8b5cf6" },
    { size: "2rem", background: "#a855f7" },
    { size: "2rem", background: "#c084fc" },
    { size: "2rem", background: "#ddd6fe" },
    { size: "2rem", background: "#ede9fe" }
  ];

  return (
    <section className="text-center mb-16"> {/* container */}
      <h1
        className="text-6xl font-bold leading-tight mb-4" // title
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Dream, Chat, Create
      </h1>
      <h2 className="text-4xl font-semibold text-[#a855f7] flex items-center justify-center gap-2"> {/* subtitle */}
        Your 24/7 AI Team
        <div className="flex justify-center -ml-2"> {/* avatars container */}
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{
                width: avatar.size,
                height: avatar.size,
                backgroundColor: avatar.background,
                marginLeft: index > 0 ? '-0.5rem' : '0', // Apply negative margin for overlap
                zIndex: avatars.length - index, // Ensure correct stacking order
              }}
            >
              {/* Avatar content, e.g., initials or image */}
            </div>
          ))}
        </div>
      </h2>
    </section>
  );
};

export default HeroSection;
