"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import advertisements from "@/data/advertisements.json";

const PixelwaysAdModal = ({ 
  currentPage = "all", 
  showOnMount = false, 
  delay = 10000, // 10 seconds default delay
  frequency = 300000 // Show every 5 minutes by default
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentAd, setCurrentAd] = useState(null);
  const [hasShown, setHasShown] = useState(false);

  // Filter ads based on current page and priority
  const getRelevantAds = () => {
    return advertisements.filter(ad => 
      ad.targetPages.includes("all") || 
      ad.targetPages.includes(currentPage)
    ).sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  };

  // Select random ad from relevant ads
  const selectRandomAd = () => {
    const relevantAds = getRelevantAds();
    if (relevantAds.length > 0) {
      const randomIndex = Math.floor(Math.random() * relevantAds.length);
      return relevantAds[randomIndex];
    }
    return null;
  };

  // Check if modal should be shown (respect frequency)
  const shouldShowModal = () => {
    const lastShown = localStorage.getItem('pixelways-ad-last-shown');
    const now = Date.now();
    
    if (!lastShown) return true;
    
    const timeSinceLastShown = now - parseInt(lastShown);
    return timeSinceLastShown >= frequency;
  };

  // Show modal with delay
  useEffect(() => {
    if (showOnMount && !hasShown && shouldShowModal()) {
      const timer = setTimeout(() => {
        const ad = selectRandomAd();
        if (ad) {
          setCurrentAd(ad);
          setIsVisible(true);
          setHasShown(true);
          localStorage.setItem('pixelways-ad-last-shown', Date.now().toString());
        }
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [showOnMount, delay, frequency, hasShown]);

  // Handle close modal
  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setCurrentAd(null), 300); // Wait for animation
  };

  // Handle CTA click
  const handleCtaClick = () => {
    // Track click if needed
    console.log(`Ad clicked: ${currentAd?.id}`);
    closeModal();
  };

  // Don't render if no ad or not visible
  if (!currentAd || !isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`pixelways-ad-backdrop ${isVisible ? 'show' : ''}`}
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className={`pixelways-ad-modal ${isVisible ? 'show' : ''}`}>
        <div className="pixelways-ad-content">
          {/* Close Button */}
          <button 
            className="pixelways-ad-close"
            onClick={closeModal}
            aria-label="Close advertisement"
          >
            <i className="far fa-times"></i>
          </button>

          {/* Ad Image */}
          <div className="pixelways-ad-image">
            <img 
              src={currentAd.image} 
              alt={currentAd.title}
              loading="lazy"
            />
            <div className="pixelways-ad-badge">
              <span>Pixelways Solutions</span>
            </div>
          </div>

          {/* Ad Content */}
          <div className="pixelways-ad-body">
            <h3 className="pixelways-ad-title">{currentAd.title}</h3>
            <p className="pixelways-ad-description">{currentAd.description}</p>
            
            <div className="pixelways-ad-actions">
              <Link 
                href={currentAd.ctaLink}
                className="pixelways-ad-dismiss"
                onClick={handleCtaClick}
              >
                {currentAd.ctaText}
                <i className="far fa-arrow-right ml-2"></i>
              </Link>
              <button 
                className="pixelways-ad-dismiss"
                onClick={closeModal}
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .pixelways-ad-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 9999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .pixelways-ad-backdrop.show {
          opacity: 1;
          visibility: visible;
        }

        .pixelways-ad-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.9);
          z-index: 10000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          max-width: 90vw;
          max-height: 90vh;
        }

        .pixelways-ad-modal.show {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, -50%) scale(1);
        }

        .pixelways-ad-content {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          width: 480px;
          max-width: 100%;
          position: relative;
          animation: slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .pixelways-ad-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
          color: #666;
        }

        .pixelways-ad-close:hover {
          background: white;
          color: #333;
          transform: scale(1.1);
        }

        .pixelways-ad-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .pixelways-ad-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .pixelways-ad-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: linear-gradient(135deg, #FC5546 0%, #ff6b5b 100%);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .pixelways-ad-body {
          padding: 24px;
        }

        .pixelways-ad-title {
          font-size: 20px;
          font-weight: 700;
          color: #020626;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        .pixelways-ad-description {
          color: #666;
          font-size: 14px;
          line-height: 1.5;
          margin: 0 0 20px 0;
        }

        .pixelways-ad-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .pixelways-ad-cta {
          background: linear-gradient(135deg, #FC5546 0%, #ff6b5b 100%);
          color: white !important;
          text-decoration: none !important;
          padding: 14px 24px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 15px;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          box-shadow: 0 4px 15px rgba(252, 85, 70, 0.4);
          border: 2px solid transparent;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          min-width: 140px;
          justify-content: center;
        }

        .pixelways-ad-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(252, 85, 70, 0.5);
          color: white !important;
          text-decoration: none !important;
          background: linear-gradient(135deg, #ff6b5b 0%, #FC5546 100%);
        }

        .pixelways-ad-cta:focus {
          outline: none;
          box-shadow: 0 4px 15px rgba(252, 85, 70, 0.4), 0 0 0 3px rgba(252, 85, 70, 0.2);
          color: white !important;
        }

        .pixelways-ad-cta:visited {
          color: white !important;
        }

        .pixelways-ad-dismiss {
          background: rgba(255, 255, 255, 0.1);
          color: #666;
          border: 2px solid #e1e5e9;
          padding: 12px 20px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: 8px;
          font-weight: 500;
          min-width: 100px;
        }

        .pixelways-ad-dismiss:hover {
          color: #333;
          background: rgba(255, 255, 255, 0.2);
          border-color: #ccc;
        }

        .ml-2 {
          margin-left: 8px;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .pixelways-ad-content {
            width: 350px;
            margin: 20px;
          }

          .pixelways-ad-image {
            height: 160px;
          }

          .pixelways-ad-body {
            padding: 20px;
          }

          .pixelways-ad-title {
            font-size: 18px;
          }

          .pixelways-ad-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .pixelways-ad-cta {
            justify-content: center;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .pixelways-ad-content {
            background: #1a1a1a;
          }

          .pixelways-ad-title {
            color: white;
          }

          .pixelways-ad-description {
            color: #ccc;
          }

          .pixelways-ad-close {
            background: rgba(0, 0, 0, 0.8);
            color: white;
          }

          .pixelways-ad-close:hover {
            background: rgba(0, 0, 0, 0.9);
          }
        }
      `}</style>
    </>
  );
};

export default PixelwaysAdModal;
