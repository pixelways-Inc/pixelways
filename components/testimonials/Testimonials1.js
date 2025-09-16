"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="testimonials-area rel z-1" id="testimonials">
        <div className="container-fluid">
          <div
            className="testimonials-inner pt-130 rpt-100 pb-100 rpb-70 bgs-cover"
            style={{
              backgroundImage:
                "url('https://api.a0.dev/assets/image?text=Abstract digital success background, dark theme, subtle tech patterns, 8x753px, realistic, 8K.&aspect=8:753&seed=501')",
            }}
          >
            <div className="container">
              <div className="row justify-content-between align-items-end pb-30">
                <div className="col-xl-6 col-lg-7">
                  <div
                    className="section-title text-white mb-25"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <span className="sub-title mb-10">
                      Clients Testimonials
                    </span>
                    <h2>Hear from Our Partners in Digital Success</h2>
                  </div>
                </div>
                <div
                  className="col-lg-4 mb-25 text-lg-end"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="testi-arrows mb-10">
                    <button
                      className="testi-arrow-left slick-arrow"
                      onClick={this.previous}
                    >
                      <i className="far fa-arrow-left" />
                    </button>
                    <button
                      className="testi-arrow-right slick-arrow"
                      onClick={this.next}
                    >
                      <i className="far fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
              <Slider
                ref={(c) => (this.slider = c)}
                className="testimonials-active"
                {...sliderProps.testimonialsActive}
              >
                <div className="testimonial-item">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="testi-text">
                    "Pixelways Solutions completely transformed our IT infrastructure. Their
                    expertise in cloud migration was exceptional, leading to significant cost
                    savings and improved system reliability. A truly invaluable partner!"
                  </div>
                  <div className="testi-author">
                    <img
                      src="https://api.a0.dev/assets/image?text=Professional+headshot+of+a+woman,+smiling,+corporate+background,+realistic,+8K&aspect=1:1&seed=101"
                      alt="Author"
                      width={60}
                      height={60}
                    />
                    Emily R. Chen / CTO, TechInnovate Inc.
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="testi-text">
                    "We struggled with cybersecurity for years until we partnered with Pixelways
                    Solutions. Their comprehensive security audit and implementation of robust
                    protocols have given us peace of mind. Highly recommend their proactive
                    approach!"
                  </div>
                  <div className="testi-author">
                    <img
                      src="https://api.a0.dev/assets/image?text=Professional+headshot+of+a+man,+serious+but+approachable,+modern+office+background,+realistic,+8K&aspect=1:1&seed=102"
                      alt="Author"
                      width={60}
                      height={60}
                    />
                    David L. Miller / CEO, SecureNet Systems
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="testi-text">
                    "The team at Pixelways Solutions delivered an outstanding e-commerce platform
                    for us. Their attention to detail, innovative design, and seamless
                    development process exceeded our expectations. Our online sales have
                    skyrocketed!"
                  </div>
                  <div className="testi-author">
                    <img
                      src="https://api.a0.dev/assets/image?text=Professional+headshot+of+a+woman,+creative+and+friendly,+studio+lighting,+realistic,+8K&aspect=1:1&seed=103"
                      alt="Author"
                      width={60}
                      height={60}
                    />
                    Sarah J. White / Marketing Director, Global Retail Co.
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="testi-text">
                    "Pixelways Solutions provided exceptional IT consultancy, guiding us through
                    a complex digital transformation. Their strategic insights and technical
                    prowess were instrumental in achieving our business objectives. A true
                    partner in success!"
                  </div>
                  <div className="testi-author">
                    <img
                      src="https://api.a0.dev/assets/image?text=Professional+headshot+of+a+man,+confident+and+experienced,+blurred+cityscape+background,+realistic,+8K&aspect=1:1&seed=104"
                      alt="Author"
                      width={60}
                      height={60}
                    />
                    Michael B. Davis / Founder, FutureTech Ventures
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
