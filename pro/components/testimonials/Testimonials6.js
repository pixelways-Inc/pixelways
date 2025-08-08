"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

export const Testimonials6 = () => {
  return (
    <section
      id="testimonials"
      className="testimonials-three-area py-130 rpy-100"
    >
      <div className="container">
        <div className="row gap-80 align-items-center">
          <div className="col-xl-7 col-lg-6">
            <div className="testimonials-three-image rmb-55 wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/testimonials/testimonials-three.png"
                alt="Testimonials"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="testimonials-three-wrap wow fadeInRight delay-0-2s">
              <div className="section-title mb-45">
                <span className="sub-title mb-10">Our Testimonials</span>
                <h2>What Our Clients Say About Solutions</h2>
              </div>
              <Slider
                {...sliderProps.testimonialFiveSlider}
                className="testimonial-five-slider"
              >
                <div className="testimonial-item-four">
                  <div className="content">
                    <div className="testi-header">
                      <h4>Excellent Works</h4>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                    <div className="testi-text">
                      Sed ut perspiciatis unde omnis iste natus voluptatem accus
                      antiume dolorem queauy antium totam aperiam eaque quaey
                      veritatis vitaec
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="fal fa-quote-right" />
                      </div>
                      <div className="title">
                        <h4>Andrew D. Bricker</h4>
                        <span className="designation">CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item-four">
                  <div className="content">
                    <div className="testi-header">
                      <h4>Excellent Works</h4>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                    <div className="testi-text">
                      On the other hand denounce righteous indignations and
                      dislike men who beguiled and demoralized by the charms of
                      pleasure moment blinded foresee
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="fal fa-quote-right" />
                      </div>
                      <div className="title">
                        <h4>Jose T. McMichael</h4>
                        <span className="designation">Senior Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
