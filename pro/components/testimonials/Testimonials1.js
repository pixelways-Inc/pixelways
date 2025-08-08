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
                "url(assets/images/background/testimonials-bg.jpg)",
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
                    "Working with has completely transformed operations. Their
                    expertise in cloud migration helped us cut down on overhead
                    and improve system reliability!"
                  </div>
                  <div className="testi-author">
                    <img
                      src="assets/images/testimonials/testi-author1.jpg"
                      alt="Author"
                    />
                    <b>Robert S. Hummel </b> /CEO &amp; Founder
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
                    "Working with has completely transformed operations. Their
                    expertise in cloud migration helped us cut down on overhead
                    and improve system reliability!"
                  </div>
                  <div className="testi-author">
                    <img
                      src="assets/images/testimonials/testi-author2.jpg"
                      alt="Author"
                    />
                    <b>Leonard G. Trahan </b> /Web designer
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
                    "Working with has completely transformed operations. Their
                    expertise in cloud migration helped us cut down on overhead
                    and improve system reliability!"
                  </div>
                  <div className="testi-author">
                    <img
                      src="assets/images/testimonials/testi-author1.jpg"
                      alt="Author"
                    />
                    <b>Robert S. Hummel </b> /CEO &amp; Founder
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
                    "Working with has completely transformed operations. Their
                    expertise in cloud migration helped us cut down on overhead
                    and improve system reliability!"
                  </div>
                  <div className="testi-author">
                    <img
                      src="assets/images/testimonials/testi-author2.jpg"
                      alt="Author"
                    />
                    <b>Leonard G. Trahan </b> /Web designer
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
