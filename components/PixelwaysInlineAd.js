"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import advertisements from "@/data/advertisements.json";

const PixelwaysInlineAd = ({ 
  category = "hosting", 
  priority = "high",
  className = "",
  style = "banner" // banner, card, minimal
}) => {
  const [currentAd, setCurrentAd] = useState(null);

  // Filter ads based on category and priority
  const getRelevantAd = () => {
    const relevantAds = advertisements.filter(ad => 
      ad.category === category && ad.priority === priority
    );
    
    if (relevantAds.length > 0) {
      const randomIndex = Math.floor(Math.random() * relevantAds.length);
      return relevantAds[randomIndex];
    }
    
    // Fallback to any ad in the category
    const fallbackAds = advertisements.filter(ad => ad.category === category);
    if (fallbackAds.length > 0) {
      const randomIndex = Math.floor(Math.random() * fallbackAds.length);
      return fallbackAds[randomIndex];
    }
    
    return null;
  };

  useEffect(() => {
    const ad = getRelevantAd();
    setCurrentAd(ad);
  }, [category, priority]);

  if (!currentAd) return null;

  const handleClick = () => {
    console.log(`Inline ad clicked: ${currentAd.id}`);
  };

  if (style === "banner") {
    return (
      <div className={`pixelways-inline-ad banner ${className}`}>
        <div className="ad-banner-content">
          <div className="ad-banner-image">
            <img src={currentAd.image} alt={currentAd.title} />
          </div>
          <div className="ad-banner-text">
            <div className="ad-badge">Sponsored by Pixelways</div>
            <h4>{currentAd.title}</h4>
            <p>{currentAd.description}</p>
             <div className="ad-badge">
            <Link 
              href={currentAd.ctaLink} 
              className="ad-cta-btn"
              onClick={handleClick}
            >
              {currentAd.ctaText}
              <i className="far fa-arrow-right"></i>
            </Link> </div>
          </div>
        </div>

        <style jsx>{`
          .pixelways-inline-ad.banner {
            background: linear-gradient(135deg, #f8f9ff 0%, #e8f0ff 100%);
            border: 1px solid #e0e7ff;
            border-radius: 12px;
            overflow: hidden;
            margin: 40px 0;
            transition: all 0.3s ease;
          }

          .pixelways-inline-ad.banner:hover {
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
          }

          .ad-banner-content {
            display: flex;
            align-items: center;
            padding: 20px;
          }

          .ad-banner-image {
            width: 140px;
            height: 100px;
            border-radius: 8px;
            overflow: hidden;
            margin-right: 20px;
            flex-shrink: 0;
          }

          .ad-banner-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .ad-banner-text {
            flex: 1;
          }

          .ad-badge {
            background: #FC5546;
            color: white;
            font-size: 10px;
            font-weight: 600;
            text-transform: uppercase;
            padding: 4px 8px;
            border-radius: 4px;
            display: inline-block;
            margin-bottom: 8px;
            letter-spacing: 0.5px;
          }

          .ad-banner-text h4 {
            color: #020626;
            font-size: 18px;
            font-weight: 700;
            margin: 0 0 8px 0;
            line-height: 1.3;
          }

          .ad-banner-text p {
            color: #666;
            font-size: 14px;
            line-height: 1.4;
            margin: 0 0 15px 0;
          }

          .ad-cta-btn {
            background: linear-gradient(135deg, #FC5546 0%, #ff6b5b 100%);
            color: white !important;
            text-decoration: none !important;
            padding: 12px 18px;
            border-radius: 6px;
            font-weight: 700;
            font-size: 14px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
             transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(252, 85, 70, 0.4);
            text-transform: uppercase;
            letter-spacing: 0.5px;
            min-width: 120px;
            justify-content: center;
          }

          .ad-cta-btn:hover {
            background: linear-gradient(135deg, #e94435 0%, #FC5546 100%);
            color: white !important;
            text-decoration: none !important;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(252, 85, 70, 0.4);
          }

          .ad-cta-btn:focus {
            outline: none;
            box-shadow: 0 3px 10px rgba(252, 85, 70, 0.3), 0 0 0 3px rgba(252, 85, 70, 0.2);
            color: white !important;
          }

          .ad-cta-btn:visited {
            color: white !important;
          }

          @media (max-width: 768px) {
            .ad-banner-content {
              flex-direction: column;
              text-align: center;
            }

            .ad-banner-image {
              margin-right: 0;
              margin-bottom: 15px;
              width: 100%;
              max-width: 200px;
            }
          }
        `}</style>
      </div>
    );
  }

  if (style === "card") {
    return (
      <div className={`pixelways-inline-ad card ${className}`}>
        <div className="ad-card-image">
          <img src={currentAd.image} alt={currentAd.title} />
          <div className="ad-badge">Pixelways</div>
        </div>
        <div className="ad-card-content">
          <h5>{currentAd.title}</h5>
          <p>{currentAd.description}</p>
          <Link 
            href={currentAd.ctaLink} 
            className="ad-cta-btn"
            onClick={handleClick}
          >
            {currentAd.ctaText}
          </Link>
        </div>

        <style jsx>{`
          .pixelways-inline-ad.card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            margin: 20px 0;
          }

          .pixelways-inline-ad.card:hover {
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
            transform: translateY(-4px);
          }

          .ad-card-image {
            position: relative;
            height: 160px;
            overflow: hidden;
          }

          .ad-card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .ad-badge {
            position: absolute;
            top: 12px;
            right: 12px;
            background: rgba(252, 85, 70, 0.9);
            color: white;
            font-size: 11px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .ad-card-content {
            padding: 20px;
          }

          .ad-card-content h5 {
            color: #020626;
            font-size: 16px;
            font-weight: 700;
            margin: 0 0 8px 0;
            line-height: 1.3;
          }

          .ad-card-content p {
            color: #666;
            font-size: 13px;
            line-height: 1.4;
            margin: 0 0 15px 0;
          }

          .ad-cta-btn {
            background: linear-gradient(135deg, #FC5546 0%, #ff6b5b 100%);
            color: white !important;
            text-decoration: none !important;
            padding: 10px 18px;
            border-radius: 6px;
            font-weight: 700;
            font-size: 13px;
            display: inline-block;
            transition: all 0.2s ease;
            text-align: center;
            width: 100%;
            box-shadow: 0 3px 10px rgba(252, 85, 70, 0.3);
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .ad-cta-btn:hover {
            background: linear-gradient(135deg, #e94435 0%, #FC5546 100%);
            color: white !important;
            text-decoration: none !important;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(252, 85, 70, 0.4);
          }

          .ad-cta-btn:focus {
            outline: none;
            box-shadow: 0 3px 10px rgba(252, 85, 70, 0.3), 0 0 0 3px rgba(252, 85, 70, 0.2);
            color: white !important;
          }

          .ad-cta-btn:visited {
            color: white !important;
          }
        `}</style>
      </div>
    );
  }

  // Minimal style
  return (
    <div className={`pixelways-inline-ad minimal ${className}`}>
      <div className="ad-minimal-content">
        <div className="ad-minimal-text">
          <span className="ad-badge">Pixelways</span>
          <strong>{currentAd.title}</strong> - {currentAd.description}
        </div>
        <Link 
          href={currentAd.ctaLink} 
          className="ad-minimal-btn"
          onClick={handleClick}
        >
          {currentAd.ctaText}
        </Link>
      </div>

      <style jsx>{`
        .pixelways-inline-ad.minimal {
          background: #f8f9ff;
          border: 1px solid #e0e7ff;
          border-radius: 8px;
          padding: 16px;
          margin: 20px 0;
        }

        .ad-minimal-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .ad-minimal-text {
          flex: 1;
          font-size: 14px;
          color: #555;
        }

        .ad-badge {
          background: #FC5546;
          color: white;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          padding: 2px 6px;
          border-radius: 3px;
          margin-right: 8px;
        }

        .ad-minimal-btn {
          background: linear-gradient(135deg, #FC5546 0%, #ff6b5b 100%);
          color: white !important;
          text-decoration: none !important;
          padding: 10px 18px;
          border-radius: 5px;
          font-weight: 700;
          font-size: 13px;
          white-space: nowrap;
          transition: all 0.2s ease;
          box-shadow: 0 3px 10px rgba(252, 85, 70, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .ad-minimal-btn:hover {
          background: linear-gradient(135deg, #e94435 0%, #FC5546 100%);
          color: white !important;
          text-decoration: none !important;
          transform: translateY(-1px);
          box-shadow: 0 5px 15px rgba(252, 85, 70, 0.4);
        }

        .ad-minimal-btn:focus {
          outline: none;
          box-shadow: 0 3px 10px rgba(252, 85, 70, 0.3), 0 0 0 3px rgba(252, 85, 70, 0.2);
          color: white !important;
        }

        .ad-minimal-btn:visited {
          color: white !important;
        }

        @media (max-width: 768px) {
          .ad-minimal-content {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }

          .ad-minimal-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PixelwaysInlineAd;
