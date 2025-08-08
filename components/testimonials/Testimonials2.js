"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Component } from "react";
import Slider from "react-slick";

export class Testimonials2 extends Component {
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
      <section id="testimonials" className="testimonial-area rel z-1">
        <div className="container-fluid">
          <div
            className={`testimonial-wrap  py-130 rpy-100 ${
              this.props.bgClass ? this.props.bgClass : "bgc-gray"
            }`}
          >
            <div className="container">
              <div className="testimonial-top-wrap pb-30 mb-60">
                <div className="row align-items-center justify-content-between">
                  <div className="col-xl-5 col-lg-6">
                    <div
                      className="section-title"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <span className="sub-title mb-10">
                        Clients Testimonials
                      </span>
                      <h2>Success Stories from Our Valued Clients</h2>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="trusted-clients-wrap"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <h5>10m+ Trusted Clients</h5>
                      <div className="trusted-clients mt-15">
                        <img
                          data-aos="fade-right"
                          data-aos-duration={1500}
                          data-aos-delay={50}
                          src="assets/images/testimonials/client1.jpg"
                          alt="Client"
                        />
                        <img
                          data-aos="fade-right"
                          data-aos-duration={1500}
                          data-aos-delay={100}
                          src="assets/images/testimonials/client2.jpg"
                          alt="Client"
                        />
                        <img
                          data-aos="fade-right"
                          data-aos-duration={1500}
                          data-aos-delay={150}
                          src="assets/images/testimonials/client3.jpg"
                          alt="Client"
                        />
                        <img
                          data-aos="fade-right"
                          data-aos-duration={1500}
                          data-aos-delay={200}
                          src="assets/images/testimonials/client4.jpg"
                          alt="Client"
                        />
                        <img
                          data-aos="fade-right"
                          data-aos-duration={1500}
                          data-aos-delay={250}
                          src="assets/images/testimonials/client5.jpg"
                          alt="Client"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-inner">
                <Slider
                  ref={(c) => (this.slider = c)}
                  {...sliderProps.testimonialsTwoActive}
                  className="testimonials-two-active"
                >
                  <div className="testimonial-item-two">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="testi-text">
                      We approached for a complex software development project,
                      and they delivered with precision and innovation. Their
                      expertise in data analytics and cloud solutions helped us
                      transform our business."
                    </div>
                    <div className="testi-author">
                      <img
                        src="assets/images/testimonials/testi-author3.jpg"
                        alt="Author"
                      />
                      <span>
                        <b>Robert S. Hummel </b> /CEO &amp; Founder
                      </span>
                    </div>
                  </div>
                  <div className="testimonial-item-two">
                    <div className="ratting">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="testi-text">
                      We approached for a complex software development project,
                      and they delivered with precision and innovation. Their
                      expertise in data analytics and cloud solutions helped us
                      transform our business."
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
                <div className="testi-arrows style-two mt-70 rmt-50">
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
          </div>
        </div>
      </section>
    );
  }
}
