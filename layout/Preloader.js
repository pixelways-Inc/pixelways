"use client";
import { useEffect, useState } from "react";
const Preloader = () => {
  const [load, setLoad] = useState(true);
  const [displayLoaded, setDisplayLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
    setTimeout(() => {
      setDisplayLoaded(false);
    }, 1500);
  }, []);
  return (
    <div
      className="preloader"
      style={{ display: displayLoaded ? "flex" : "none" }}
    >
      <div className="custom-loader" />
    </div>
  );
};
export default Preloader;
