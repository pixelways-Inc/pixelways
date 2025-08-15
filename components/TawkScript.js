"use client";

import Script from "next/script";
import { useEffect } from "react";

const TawkScript = () => {
  useEffect(() => {
    const handleTawkWidget = () => {
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname;
        if (currentPath.includes('/builder') || currentPath.includes('/workspace')) {
          if (window.Tawk_API) {
            window.Tawk_API.hideWidget();
          } else {
            // If Tawk isn't loaded yet, listen for it
            const checkTawk = setInterval(() => {
              if (window.Tawk_API) {
                window.Tawk_API.hideWidget();
                clearInterval(checkTawk);
              }
            }, 100);
            // Clear interval after 5 seconds to prevent infinite checking
            setTimeout(() => clearInterval(checkTawk), 5000);
          }
        } else {
          // Show widget on other pages
          if (window.Tawk_API) {
            window.Tawk_API.showWidget();
          }
        }
      }
    };

    // Check on initial load
    handleTawkWidget();

    // Listen for route changes
    const handleRouteChange = () => {
      setTimeout(handleTawkWidget, 100);
    };

    // Listen for popstate (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <Script
      src="https://embed.tawk.to/689b8789e0fd9f192a11305d/1j2foite4"
      strategy="afterInteractive"
      onLoad={() => {
        // Handle initial widget visibility
        if (typeof window !== 'undefined') {
          const currentPath = window.location.pathname;
          if (currentPath.includes('/builder') || currentPath.includes('/workspace')) {
            if (window.Tawk_API) {
              window.Tawk_API.hideWidget();
            }
          }
        }
      }}
    />
  );
};

export default TawkScript;
