"use client";
import ImageView from "@/components/ImageView";
import VideoPopup from "@/components/VideoPopup";
import { tekprofUtility } from "@/utility";
import { Fragment, useEffect } from "react";
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
  useEffect(() => {
    tekprofUtility.animation();
    tekprofUtility.fixedHeader();
    Object.keys(rootElements).forEach((key) => {
      document.body.style.setProperty(key, rootElements[key]);
    });
  }, []);
  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
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
