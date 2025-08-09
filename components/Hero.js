"use client";

import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const Hero = () => {
  return (
    <section
      id="home"
      className="slider-area bgs-cover pt-185 pb-160"
      style={{ backgroundImage: "url(https://api.a0.dev/assets/image?width=1920&height=1080&theme=technology)" }}
    >
      <div className="container">
        <Slider
          {...sliderProps.mainSliderActive}
          className="main-slider-active"
        >
          <div className="slider-item">
            <div className="slide-content text-white">
              <span className="sub-title">Pixelways Solution</span>
              <span className="h2">Innovating for Your Success</span>
              <h1>Leading Digital Solutions</h1>
              <Link href="about" className="theme-btn">
                Discover Our Services <i className="fas fa-long-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="slider-item">
            <div className="slide-content text-white">
              <span className="sub-title">Pixelways Solution</span>
              <span className="h2">Innovating for Your Success</span>
              <h1>Leading Digital Solutions</h1>
              <Link href="about" className="theme-btn">
                Discover Our Services <i className="fas fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Hero;
