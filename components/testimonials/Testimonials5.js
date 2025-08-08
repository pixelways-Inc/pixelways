"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

export const Testimonials5 = () => {
  return (
    <section
      id="testimonials"
      className="testimonials-area-five pt-130 rpt-100 pb-75 rpb-45"
    >
      <div className="container container-1290">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div
              className="section-title mb-50 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle color-primary mt-10 mb-15">
                Our Testimonials
              </span>
              <h2>We Have More Then 1580+ Customer Say About Us</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6">
            <div
              className="testimonials-content-five mb-55"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Slider
                {...sliderProps.testimonialsFourActive}
                className="testimonials-four-active"
              >
                <div className="testimonial-item style-two">
                  <div className="author-logo">
                    <div className="quote">
                      <i className="fas fa-quote-left" />
                    </div>
                  </div>
                  <div className="text">
                    " Working with Tekprof has been game-changer for our social
                    media presence heir strategic to approach and attention too
                    detail have help heights"
                  </div>
                  <div className="quote-title">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author1.jpg"
                        alt="Author"
                      />
                    </div>
                    <h6>Randall J. Ferguson</h6>
                    <span className="designation">/CEO &amp; Founder</span>
                  </div>
                </div>
                <div className="testimonial-item style-two">
                  <div className="author-logo">
                    <div className="quote">
                      <i className="fas fa-quote-left" />
                    </div>
                  </div>
                  <div className="text">
                    " Working with Tekprof has been game-changer for our social
                    media presence heir strategic to approach and attention too
                    detail have help heights"
                  </div>
                  <div className="quote-title">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author2.jpg"
                        alt="Author"
                      />
                    </div>
                    <h6>Randall J. Ferguson</h6>
                    <span className="designation">/CEO &amp; Founder</span>
                  </div>
                </div>
                <div className="testimonial-item style-two">
                  <div className="author-logo">
                    <div className="quote">
                      <i className="fas fa-quote-left" />
                    </div>
                  </div>
                  <div className="text">
                    " Working with Tekprof has been game-changer for our social
                    media presence heir strategic to approach and attention too
                    detail have help heights"
                  </div>
                  <div className="quote-title">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author1.jpg"
                        alt="Author"
                      />
                    </div>
                    <h6>Randall J. Ferguson</h6>
                    <span className="designation">/CEO &amp; Founder</span>
                  </div>
                </div>
                <div className="testimonial-item style-two">
                  <div className="author-logo">
                    <div className="quote">
                      <i className="fas fa-quote-left" />
                    </div>
                  </div>
                  <div className="text">
                    " Working with Tekprof has been game-changer for our social
                    media presence heir strategic to approach and attention too
                    detail have help heights"
                  </div>
                  <div className="quote-title">
                    <div className="author">
                      <img
                        src="assets/images/testimonials/author2.jpg"
                        alt="Author"
                      />
                    </div>
                    <h6>Randall J. Ferguson</h6>
                    <span className="designation">/CEO &amp; Founder</span>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="testimonials-image-and-customers mb-55"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img
                src="assets/images/testimonials/testimonials-five.jpg"
                alt="Testimonials"
              />
              <div className="trusted-client-part text-center text-white">
                <h4>Trusted By 25,880+ Worldwide Brand &amp; Customers</h4>
                <hr className="mt-30 mb-40" />
                <div className="trusted-clients">
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={50}
                    src="assets/images/hero/author1.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                    src="assets/images/hero/author2.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={150}
                    src="assets/images/hero/author3.jpg"
                    alt="Author"
                  />
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={200}
                    src="assets/images/hero/author4.jpg"
                    alt="Author"
                  />
                  <i
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay={250}
                    className="far fa-plus"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
