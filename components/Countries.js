"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

const Countries = () => {
  return (
    <section className="countries-area rel z-1 pt-125 rpt-95 pb-70 rpb-40">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11">
            <div
              className="section-title text-center mb-30"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h2>Trusted by Millions in 45+ countries.</h2>
            </div>
          </div>
        </div>
      </div>
      <Slider
        {...sliderProps.marqueeSliderRight}
        className="marquee-slider-right style-three iconic-slider-right"
      >
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag1.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">United States</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag2.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">South Africa</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag3.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Russia</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag4.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Brazil</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag5.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Australia</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag6.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">China</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag7.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Argentina</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag8.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Kazakhstan</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag9.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Algeria</h6>
            </div>
          </div>
        </div>
      </Slider>
      <Slider
        {...sliderProps.marqueeSliderLeft}
        className="marquee-slider-left style-three iconic-slider-left"
        dir="rtl"
      >
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag10.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Denmark</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag11.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Saudi Arabia</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag12.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Mexico</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag13.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Indonesia</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag14.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Sudan</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag15.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Mongolia</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag16.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Colombia</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="marquee-iconic-box">
            <div className="image">
              <img src="assets/images/marquee-box/flag17.png" alt="Flag" />
            </div>
            <div className="content">
              <h6 className="title">Ethiopia</h6>
            </div>
          </div>
        </div>
      </Slider>
      <div className="container">
        <div
          className="image mt-40 text-center"
          data-aos="zoom-in"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <img
            src="assets/images/background/map-locations.png"
            alt="Map Locations"
          />
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default Countries;
