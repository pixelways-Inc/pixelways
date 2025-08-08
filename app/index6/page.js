import Counter from "@/components/Counter";
import Hero from "@/components/Hero";
import { Testimonials6 } from "@/components/testimonials/Testimonials6";
import WhatWeProvide from "@/components/WhatWeProvide";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
const page = () => {
  return (
    <TekprofLayout
      header={6}
      footer={6}
      rootElements={{
        "--tekprof-base-font": ' "Roboto", sans-serif',
        "--tekprof-heading-font": '"Poppins", sans-serif',
        "--tekprof-primary-color": "#30f0b6",
        "--tekprof-secondary-color": "#674df3",
      }}
      bodyClass="home-6"
    >
      {/* Slider Section Start */}
      <Hero />
      {/* Slider Section End */}
      {/* Feature Area Start */}
      <section className="feature-area-two rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three mt-25 wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-cloud-1" />
                </div>
                <h4>
                  <Link href="service-details">Trusted Partner</Link>
                </h4>
                <p>With over 20 year of experience 850+ employees flexion</p>
                <Link className="more-btn" href="service-details">
                  <i className="far fa-angle-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three wow fadeInDown delay-0-2s">
                <div className="icon">
                  <i className="flaticon-technical-support" />
                </div>
                <h4>
                  <Link href="service-details">Technical Support</Link>
                </h4>
                <p>With over 20 year of experience 850+ employees flexion</p>
                <Link className="more-btn" href="service-details">
                  <i className="far fa-angle-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three mt-45 wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-data" />
                </div>
                <h4>
                  <Link href="service-details">Digital Marketing</Link>
                </h4>
                <p>With over 20 year of experience 850+ employees flexion</p>
                <Link className="more-btn" href="service-details">
                  <i className="far fa-angle-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="feature-item style-three mt-25 wow fadeInDown delay-0-2s">
                <div className="icon">
                  <i className="flaticon-cyber-security-1" />
                </div>
                <h4>
                  <Link href="service-details">IT Consulting</Link>
                </h4>
                <p>With over 20 year of experience 850+ employees flexion</p>
                <Link className="more-btn" href="service-details">
                  <i className="far fa-angle-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Area End */}
      {/* About Area start */}
      <section className="about-area-three pt-25 rpt-0 pb-100 rpb-65 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-6">
              <div className="about-three-image rel z-1 mb-30 rmb-65 wow fadeInRight delay-0-2s">
                <img src="assets/images/about/about-three.jpg" alt="About" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>
                    Best talent, Competitive Cost, Incredible IT Service
                    Infrastructure
                  </h2>
                </div>
                <div className="row gap-40">
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-cloud-1" />
                      </div>
                      <h4>
                        <Link href="service-details">
                          Awards Winning Company
                        </Link>
                      </h4>
                      <p>
                        Sed ut perspiciat unde omnis este natus error sit
                        voluptatem accusantium doloremque
                      </p>
                      <Link href="service-details" className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-cyber-security-1" />
                      </div>
                      <h4>
                        <Link href="service-details">
                          Startup IT Solution &amp; Business Dev
                        </Link>
                      </h4>
                      <p>
                        Sed ut perspiciat unde omnis este natus error sit
                        voluptatem accusantium doloremque
                      </p>
                      <Link href="service-details" className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-bg-shape">
          <img src="assets/images/background/about-bg-shape.png" alt="About" />
        </div>
      </section>
      {/* About Area end */}
      {/* What We Provide Area Start */}
      <WhatWeProvide />
      {/* What We Provide Area End */}
      {/* Consultations Area start */}
      <section className="consultations-area pt-75 rpt-45 rel z-1">
        <div className="container container-1440">
          <div className="row no-gap align-items-end">
            <div className="col-xl-6">
              <div className="consultations-content mt-55 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">
                    Need Any Consultations ?
                  </span>
                  <h2>We’re Ready to Growth IT Business</h2>
                </div>
                <div
                  className="consultations-bottom bgc-secondary text-white bgs-cover p-80 py-40"
                  style={{
                    backgroundImage:
                      "url(assets/images/about/consultations-bg.png)",
                  }}
                >
                  <ul className="list-style-three mb-15">
                    <li>Bringing new IT solutions to the market</li>
                    <li>
                      To be included the list of the best 100 IT companies
                    </li>
                  </ul>
                  <div className="about-btns">
                    <Link href="about" className="theme-btn mt-15">
                      Get Free Quote <i className="fas fa-long-arrow-right" />
                    </Link>
                    <div className="hotline mt-15">
                      <i className="fas fa-phone" />
                      <div className="content">
                        <span>Hotline</span>
                        <br />
                        <a href="tel:+14164071923">+1 (416) 407-1923</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="consultations-video mt-55 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/consultations.jpg"
                  alt="Consultations"
                />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Consultations Area end */}
      {/* Statistics Area start */}
      <section className="statistics-area-three pt-130 rpt-100 pb-100 rpb-80 text-white bgc-gray home-6">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="row rmb-35">
                <div className="col-xl-4 col-sm-6">
                  <div className="counter-item-three counter-text-wrap wow fadeInDown delay-0-3s">
                    <i className="flaticon-protection-1" />
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={2563}
                    >
                      <Counter end={2563} />
                    </span>
                    <span className="counter-title">Project Complate</span>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="counter-item-three counter-text-wrap mt-20 wow fadeInUp delay-0-3s">
                    <i className="flaticon-recovery" />
                    <span
                      className="count-text percent"
                      data-speed={3000}
                      data-stop="98.9"
                    >
                      <Counter end={98.9} decimals={1} />
                    </span>
                    <span className="counter-title">Clinets Happy</span>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6">
                  <div className="counter-item-three counter-text-wrap wow fadeInDown delay-0-3s">
                    <i className="flaticon-cyber-security-2" />
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop="35.6"
                    >
                      <Counter end={35.6} decimals={1} />
                    </span>
                    <span className="counter-title">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="statistics-two-content mb-30 rmb-0 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <h3>
                    Adventz Is Partnered With 10k+ Fastest Growing Companies
                    From 2010
                  </h3>
                </div>
                <p>
                  Egestas dictum lectus diam commodo. Et tristique nunc faucibus
                  sit tortor commodo aliquet commodo quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}
      {/* Project Area Two Start */}
      <section className="project-area-three rel z-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="project-item-two wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/projects/project-two1.jpg"
                  alt="Projects"
                />
                <div className="content">
                  <a
                    className="plus"
                    href="assets/images/projects/project-two1.jpg"
                  >
                    <i className="fal fa-plus" />
                  </a>
                  <h4>
                    <Link href="service-details">
                      Mobile Application Development
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="project-item-two wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/projects/project-two2.jpg"
                  alt="Projects"
                />
                <div className="content">
                  <a
                    className="plus"
                    href="assets/images/projects/project-two2.jpg"
                  >
                    <i className="fal fa-plus" />
                  </a>
                  <h4>
                    <Link href="service-details">
                      Mobile Application Development
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="project-item-two wow fadeInUp delay-0-6s">
                <img
                  src="assets/images/projects/project-two3.jpg"
                  alt="Projects"
                />
                <div className="content">
                  <a
                    className="plus"
                    href="assets/images/projects/project-two3.jpg"
                  >
                    <i className="fal fa-plus" />
                  </a>
                  <h4>
                    <Link href="service-details">
                      Mobile Application Development
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="project-item-two wow fadeInUp delay-0-8s">
                <img
                  src="assets/images/projects/project-two4.jpg"
                  alt="Projects"
                />
                <div className="content">
                  <a
                    className="plus"
                    href="assets/images/projects/project-two4.jpg"
                  >
                    <i className="fal fa-plus" />
                  </a>
                  <h4>
                    <Link href="service-details">
                      Mobile Application Development
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Area Two End */}
      {/* Services Area Three start */}
      <section className="services-area-three py-100 rpy-70 rel z-1">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-5">
              <div className="services-content-three mb-30 rmb-65 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Amazing Services</span>
                  <h2>We Provide Best IT Services to Growth you Business</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium totam rem aperiame aque ipsa
                  quae abillo inventore veritatis etuas
                </p>
                <ul className="list-style-one pt-5">
                  <li>
                    <i className="far fa-check-circle" /> Comprehensive UI/UX
                    Assessment
                  </li>
                  <li>
                    <i className="far fa-check-circle" /> Deep Contextual
                    Research and 360° Planning
                  </li>
                  <li>
                    <i className="far fa-check-circle" /> Wireframing &amp;
                    Prototyping
                  </li>
                </ul>
                <Link href="services" className="theme-btn mt-45">
                  View All Services <i className="fas fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="service-item-five wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-idea" />
                    </div>
                    <h4>
                      <Link href="service-details">Digital Consulting</Link>
                    </h4>
                    <p>
                      On the other hand denounce withteous indignations dislike
                      beguilede demoralized
                    </p>
                  </div>
                  <div className="service-item-five wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-grow" />
                    </div>
                    <h4>
                      <Link href="service-details">Apps Solutions</Link>
                    </h4>
                    <p>
                      On the other hand denounce withteous indignations dislike
                      beguilede demoralized
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-item-five mt-60 wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="flaticon-data-protection" />
                    </div>
                    <h4>
                      <Link href="service-details">UX/UI Strategy</Link>
                    </h4>
                    <p>
                      On the other hand denounce withteous indignations dislike
                      beguilede demoralized
                    </p>
                  </div>
                  <div className="service-item-five wow fadeInUp delay-0-4s">
                    <div className="icon">
                      <i className="flaticon-graphic-design" />
                    </div>
                    <h4>
                      <Link href="service-details">Cyber Security</Link>
                    </h4>
                    <p>
                      On the other hand denounce withteous indignations dislike
                      beguilede demoralized
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servcies-bg-shape">
          <img src="assets/images/shapes/services-bg-shape.png" alt="Shape" />
        </div>
      </section>
      {/* Services Area Three end */}
      {/* Contact Form Section Start */}
      <section
        className="contact-form-area py-130 rpy-100 bgs-cover"
        style={{
          backgroundImage: "url(assets/images/background/contact-form-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="contact-form-two bg-white p-80 rmb-55 wow fadeInRight delay-0-2s">
                <div className="section-title mb-30">
                  <h3>Get In Touch With Us</h3>
                </div>
                <form
                  className="form-style-one"
                  action="#"
                  name="contact-form"
                  method="post"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue
                          placeholder="Full name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="form-control"
                          defaultValue
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          id="emailid"
                          name="email"
                          className="form-control"
                          defaultValue
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={3}
                          placeholder="Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn mt-15 w-100">
                          send message <i className="far fa-long-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-info-wrap wow fadeInLeft delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-10">Need Consultations ?</span>
                  <h2>Have A Project? We Would Love To Hear From You.</h2>
                </div>
                <div className="contact-info-part-two">
                  <div className="contact-info-item-two">
                    <div className="icon">
                      <i className="far fa-map-marked-alt" />
                    </div>
                    <div className="content">
                      <span>Location</span>
                      <h5>4030 Sheppard Ave E, Scarborough, ON, Canada</h5>
                    </div>
                  </div>
                  <div className="contact-info-item-two">
                    <div className="icon">
                      <i className="far fa-envelope-open-text" />
                    </div>
                    <div className="content">
                      <span>Email Us</span>
                      <h5>
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                      </h5>
                    </div>
                  </div>
                  <div className="contact-info-item-two">
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="content">
                      <span>Hotline</span>
                      <h5>
                        <a href="tel:+14164071923">+1 (416) 407-1923</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Section End */}
      {/* Testimonials Area Three Start */}
      <Testimonials6 />
      {/* Testimonials Area Three End */}
      {/* Blog Area Two start */}
      <section className="blog-area-three pb-70 rpb-40 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">Our Blog &amp; News</span>
            <h2>Latest Blog, New &amp; Articles</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="blog-item-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog-three1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Jule 26, 2022</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (25)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link href="blog-details">
                      Voice Usabilit Consideration Partially Visually Hidden
                    </Link>
                  </h4>
                  <div className="author-more">
                    <span className="author">
                      By <a href="#">Luis J. Hill</a>
                    </span>
                    <Link href="blog-details" className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item-five wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog-three2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Jule 26, 2022</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (25)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link href="blog-details">
                      How Create Van JavaScript Gant Chart Adding Task
                    </Link>
                  </h4>
                  <div className="author-more">
                    <span className="author">
                      By <a href="#">C. Hamilton</a>
                    </span>
                    <Link href="blog-details" className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item-five wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog-three3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Jule 26, 2022</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (25)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link href="blog-details">
                      Smashing Podcast Episode 47 Soueidan Accessibility{" "}
                    </Link>
                  </h4>
                  <div className="author-more">
                    <span className="author">
                      By <a href="#">Luis J. Hill</a>
                    </span>
                    <Link href="blog-details" className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item-five wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog-three4.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Jule 26, 2022</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (25)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link href="blog-details">
                      DevFest For Ukraine Charity Conference The Future
                    </Link>
                  </h4>
                  <div className="author-more">
                    <span className="author">
                      By <a href="#">Adam M.</a>
                    </span>
                    <Link href="blog-details" className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Area Two end */}
    </TekprofLayout>
  );
};
export default page;
