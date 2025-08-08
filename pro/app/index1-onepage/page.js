import ClientLogo from "@/components/ClientLogo";
import Counter from "@/components/Counter";
import Team from "@/components/Team";
import Testimonials from "@/components/testimonials/Testimonials1";

import { WorkingProcess2 } from "@/components/WorkingProcess";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";

const page = () => {
  const singlePage = [
    { id: 1, title: "Home", link: "#home" },
    { id: 2, title: "Team", link: "#team" },
    { id: 3, title: "Services", link: "#services" },
    { id: 4, title: "Work Process", link: "#work-process" },
    { id: 5, title: "Testimonials", link: "#testimonials" },
    { id: 6, title: "Blog", link: "#blog" },
  ];
  return (
    <TekprofLayout
      header={1}
      footer={1}
      rootElements={{
        "--tekprof-primary-color": "#FC5546",
        "--tekprof-heading-color": "#020626",
        "--tekprof-gray-color": "#FAF8F6",
      }}
      singleMenu={singlePage}
    >
      {/*End Hidden Sidebar */}
      {/* Hero Section Start */}
      <section
        id="home"
        className="hero-area pt-100 rpt-70 pb-130 rpb-100 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-bg.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 align-self-center">
              <div
                className="hero-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-15">Modern IT Solutions</span>
                <h1>Empowering Businesses with IT Solutions</h1>
                <p>
                  An IT solution agency is your trusted partner in navigating
                  complexities landscape wide range of services such as
                  software.
                </p>
                <Link href="services" className="theme-btn mt-15">
                  Explore UinTech IT Services
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="hero-image radius-animation"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/hero/hero.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Features Area start */}
      <section className="features-area rel z-1">
        <div className="container features-bg pt-130 rpt-100 pb-100 rpb-70">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-center mb-35"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Modern IT Solutions
                </span>
                <h2>
                  Transforming Challenges Into Opportunities with Smart IT
                  Solutions
                </h2>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <p>
                      IT solutions integrate cutting-edge technologies with
                      strategic planning to optimize processes and deliver
                      measurable results partnering with IT experts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/features/feature1.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">IT Solutions</Link>
                  </h4>
                  <p>
                    IT solutions encompass a broad range of services and
                    technologies.
                  </p>
                  <div className="inner-content">
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/features/feature2.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Cyber Security</Link>
                  </h4>
                  <p>
                    Cybersecurity is the practice of protecting systems
                    networks.
                  </p>
                  <div className="inner-content">
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/features/feature3.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Cloud Services</Link>
                  </h4>
                  <p>
                    Cloud services are on-demand computing resources delivered.
                  </p>
                  <div className="inner-content">
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}
      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="why-choose-content rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-10">Why Choose Us</span>
                  <h2>
                    Solutions Beyond Technology – Success Beyond Boundaries
                  </h2>
                </div>
                <p>
                  Trust us to be your partner in digital transformation,
                  providing the technology and support.
                </p>
                <Link href="about" className="theme-btn mt-20 mb-50">
                  Learn More About Us
                </Link>
                <div
                  className="row"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="col-lg-6">
                    <div className="feature-item-two">
                      <div className="icon">
                        <i className="flaticon-experts" />
                      </div>
                      <h5>
                        <Link href="service-details">Dedicated Team</Link>
                      </h5>
                      <p>
                        This allowing scale resources as needed while
                        maintaining full control your project.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item-two">
                      <div className="icon">
                        <i className="flaticon-loyal-customer" />
                      </div>
                      <h5>
                        <Link href="service-details">Clients Satisfaction</Link>
                      </h5>
                      <p>
                        From quality design and timely delivery post-project
                        support focus is on building lasting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="why-choose-images">
                <div
                  className="left"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/about/why-choose1.jpg"
                    alt="Why Choose"
                  />
                  <img
                    src="assets/images/about/why-choose2.jpg"
                    alt="Why Choose"
                  />
                </div>
                <div
                  className="right"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/about/why-choose3.jpg"
                    alt="Why Choose"
                  />
                  <img
                    src="assets/images/about/why-choose4.jpg"
                    alt="Why Choose"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Services Area start */}
      <section
        id="services"
        className="services-area bgc-blue pt-130 rpt-100 rel z-1"
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-white text-center mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Modern IT Solutions
                </span>
                <h2>Empowering Businesses With Advanced IT Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xxl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/services/service1.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">
                      <i className="flaticon-it" /> Managed IT Services
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Comprehensive support for all aspects of your IT
                      infrastructure, including monitoring, maintenance, and
                      technical support.
                    </p>
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/services/service2.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">
                      <i className="flaticon-network-security" /> Cybersecurity
                      Services
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Comprehensive support for all aspects of your IT
                      infrastructure, including monitoring, maintenance, and
                      technical support.
                    </p>
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/services/service3.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">
                      <i className="flaticon-cloud" /> Cloud Solutions
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Comprehensive support for all aspects of your IT
                      infrastructure, including monitoring, maintenance, and
                      technical support.
                    </p>
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item hover-content">
                <div className="image">
                  <img
                    src="assets/images/services/service4.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">
                      <i className="flaticon-data-management" /> Data Backup
                      &amp; Recovery
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Comprehensive support for all aspects of your IT
                      infrastructure, including monitoring, maintenance, and
                      technical support.
                    </p>
                    <Link className="read-more" href="service-details">
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area end */}
      {/* Achievement Area start */}
      <section
        className="achievement-area bgc-blue bgs-cover pt-100 rpt-70 pb-130 rpb-130 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/achievement-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div
                className="achievement-content text-white rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <span className="sub-title mb-10">Great Achievement</span>
                  <h2>Modern Design Agency Blueprint Innovation</h2>
                </div>
                <p>
                  We empower businesses to thrive in the digital system with
                  best innovative IT solutions.
                </p>
                <Link href="about" className="theme-btn mt-20">
                  Get Consultation
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="achievement-counter bg-white"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row no-gap">
                  <div className="col-sm-6">
                    <div
                      className="counter-item"
                      data-aos="zoom-in"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="counter-text-wrap">
                        <span
                          className="count-text"
                          data-speed={3000}
                          data-stop={8}
                        >
                          <Counter end={8} />
                        </span>
                        <span className="after">k+</span>
                      </div>
                      <span className="counter-title">Project Complete</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="counter-item"
                      data-aos="zoom-in"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="counter-text-wrap">
                        <span
                          className="count-text"
                          data-speed={3000}
                          data-stop={5}
                        >
                          <Counter end={5} />
                        </span>
                        <span className="after">k+</span>
                      </div>
                      <span className="counter-title">Global Clients</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="counter-item"
                      data-aos="zoom-in"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="counter-text-wrap">
                        <span
                          className="count-text"
                          data-speed={3000}
                          data-stop={23}
                        >
                          <Counter end={23} />
                        </span>
                        <span className="after">+</span>
                      </div>
                      <span className="counter-title">Awards Winning</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="counter-item"
                      data-aos="zoom-in"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="counter-text-wrap">
                        <span
                          className="count-text"
                          data-speed={3000}
                          data-stop={20}
                        >
                          <Counter end={20} />
                        </span>
                        <span className="after">+</span>
                      </div>
                      <span className="counter-title">Expert Team Member</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Achievement Area end */}
      {/* Team Area start */}
      <section id="team" className="team-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Meet Our Team
                </span>
                <h2>Experience Technical Team</h2>
              </div>
            </div>
          </div>
          <Team />
        </div>
      </section>
      {/* Team Area end */}
      {/* Working Process Area start */}
      <WorkingProcess2 />
      {/* Working Process Area end */}
      {/* Features Area start */}
      <section className="features-area-two pt-130 rpt-100 rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div
              className="col-xxl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two hover-content">
                <div className="image">
                  <img
                    src="assets/images/features/feature-two1.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <div className="tags">
                    <Link href="blog">IT Service</Link>
                    <Link href="blog">Cyber Security</Link>
                  </div>
                  <h3 className="title">
                    <Link href="service-details">
                      Assessment and Strategy Development
                    </Link>
                  </h3>
                  <div className="inner-content">
                    <p>
                      We implemented multi-layered cybersecurity measures
                      including firewall protection, real-time threat
                    </p>
                    <Link className="details-btn" href="service-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two hover-content">
                <div className="image">
                  <img
                    src="assets/images/features/feature-two2.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <div className="tags">
                    <Link href="blog">IT Service</Link>
                    <Link href="blog">Cyber Security</Link>
                  </div>
                  <h3 className="title">
                    <Link href="service-details">
                      Enhanced Cybersecurity Protocols solutions
                    </Link>
                  </h3>
                  <div className="inner-content">
                    <p>
                      We implemented multi-layered cybersecurity measures
                      including firewall protection, real-time threat
                    </p>
                    <Link className="details-btn" href="service-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item style-two hover-content">
                <div className="image">
                  <img
                    src="assets/images/features/feature-two3.jpg"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <div className="tags">
                    <Link href="blog">IT Service</Link>
                    <Link href="blog">Cyber Security</Link>
                  </div>
                  <h3 className="title">
                    <Link href="service-details">
                      Cloud Migration and Optimization
                    </Link>
                  </h3>
                  <div className="inner-content">
                    <p>
                      We implemented multi-layered cybersecurity measures
                      including firewall protection, real-time threat
                    </p>
                    <Link className="details-btn" href="service-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area end */}
      {/* Testimonials Area start */}
      <Testimonials />
      {/* Testimonials Area end */}
      {/* Client Logo Area start */}
      <ClientLogo />
      {/* Client Logo Area end */}
      {/* Blog Area start */}
      <section
        id="blog"
        className="blog-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  News &amp; Blog
                </span>
                <h2>Latest Insight &amp; Articles</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="blog-item hover-content">
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <a href="#">IT Solutions</a>
                    </li>
                    <li>
                      <a href="#">25 December 2024</a>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="blog-details">
                      Cybersecurity Essentials Protecting Business from Emerging
                      Threats
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Highlights clear problem-solution-result narrative,
                      demonstrating agency’s ability to provide.
                    </p>
                    <Link className="theme-btn btn-small" href="blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="blog-item hover-content">
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog">IT Solutions</Link>
                    </li>
                    <li>
                      <Link href="blog">25 December 2024</Link>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="blog-details">
                      The Ultimate Guide to Choosing the Right IT Solutions
                      Partner
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Highlights clear problem-solution-result narrative,
                      demonstrating agency’s ability to provide.
                    </p>
                    <Link className="theme-btn btn-small" href="blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="blog-item hover-content">
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog">IT Solutions</Link>
                    </li>
                    <li>
                      <Link href="blog">25 December 2024</Link>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="blog-details">
                      The Importance of Data Backup and Disaster Recovery Plans"
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Highlights clear problem-solution-result narrative,
                      demonstrating agency’s ability to provide.
                    </p>
                    <Link className="theme-btn btn-small" href="blog-details">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Area end */}
    </TekprofLayout>
  );
};
export default page;
