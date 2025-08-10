"use client";
import ImageView from "@/components/ImageView";
import VideoPopup from "@/components/VideoPopup";
import { tekprofUtility } from "@/utility";
import { Fragment, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const TekprofLayout = ({
  children,
  header,
  footer,
  rootElements = {
    "--tekprof-base-font": "'Inter', serif",
    "--tekprof-heading-font": "'Hanken Grotesk', serif",
    "--tekprof-primary-color": "#FC5546",
    "--tekprof-heading-color": "#020626",
    "--tekprof-blue-color": "#021433",
    "--tekprof-gray-color": "#FAF8F6",
  },
  bodyClass = "",
  singleMenu = false,
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    tekprofUtility.animation();
    tekprofUtility.fixedHeader();
    Object.keys(rootElements).forEach((key) => {
      document.body.style.setProperty(key, rootElements[key]);
    });
    
    // Apply or remove dark theme based on state
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      {/* Dark Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 9999,
          backgroundColor: isDarkTheme ? '#FC5546' : '#021433',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          fontSize: '18px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease'
        }}
        title={isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      >
        {isDarkTheme ? '☀️' : '🌙'}
      </button>
      <div className={`page-wrapper ${bodyClass}`}>
        <Header header={header} singleMenu={singleMenu} />
        <Sidebar />
        {children}
        <Footer footer={footer} />
      </div>
    </Fragment>
  );
};
export default TekprofLayout;
