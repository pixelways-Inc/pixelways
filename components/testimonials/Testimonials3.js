"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";

export class Testimonials3 extends Component {
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
      <section
        id="testimonials"
        className="testimonial-area-three bgc-blue py-130 rpy-100 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/bg-dot-shape.png)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9">
              <div
                className="section-title text-center text-white mb-70 rmb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-10">Our Testimonials</span>
                <h2>What Customer Say About Our Cyber Security Services</h2>
              </div>
            </div>
          </div>
          <div className="testimonials-wrap">
            <Slider
              ref={(c) => (this.slider = c)}
              {...sliderProps.testimonialsTwoActive}
              className="testimonials-three-active"
            >
              <div className="testimonial-item-two style-two">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="testi-text">
                  We approached for a complex software development project, and
                  they delivered with precision innovation expertise in tech
                  data."
                </div>
                <div className="testi-author">
                  <img
                    src="assets/images/testimonials/testi-author4.jpg"
                    alt="Author"
                  />
                  <span>
                    <b>Robert S. Hummel </b> /CEO &amp; Founder
                  </span>
                </div>
              </div>
              <div className="testimonial-item-two style-two">
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="testi-text">
                  We approached for a complex software development project, and
                  they delivered with precision innovation expertise in tech
                  data."
                </div>
                <div className="testi-author">
                  <img
                    src="assets/images/testimonials/testi-author2.jpg"
                    alt="Author"
                  />
                  <span>
                    <b>Leonard G. Trahan </b> /Web designer
                  </span>
                </div>
              </div>
            </Slider>
          </div>
          <div
            className="testi-arrows style-three mt-70 rmt-50"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
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
        <div className="testimonial-images">
          <div
            className="image image-one"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="assets/images/testimonials/testi-image1.png"
              alt="Testimonial Image"
            />
          </div>
          <div
            className="image image-two"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="assets/images/testimonials/testi-image2.png"
              alt="Testimonial Image"
            />
          </div>
          <div className="image image-three">
            <img
              src="assets/images/background/testimonials-bg-shape.png"
              alt="Testimonial Image"
            />
          </div>
        </div>
      </section>
    );
  }
}
