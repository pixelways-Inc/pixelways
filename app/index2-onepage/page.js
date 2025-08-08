import Counter from "@/components/Counter";
import Pricing from "@/components/Pricing";
import Service from "@/components/Service";
import { Testimonials2 } from "@/components/testimonials/Testimonials2";
import { WorkingProcess2 } from "@/components/WorkingProcess";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
const page = () => {
  const singlePage = [
    { id: 1, title: "Home", link: "#home" },
    { id: 2, title: "Services", link: "#services" },
    { id: 3, title: "About", link: "#about" },
    { id: 4, title: "Pricing", link: "#pricing" },
    { id: 5, title: "Testimonials", link: "#testimonials" },
    { id: 6, title: "Blog", link: "#blog" },
  ];
  return (
    <TekprofLayout header={2} footer={2} singleMenu={singlePage}>
      {/* Hero Section Start */}
      <section id="home" className="hero-area-two pt-40 rpt-60 pb-70 rel z-1">
        <div className="container container-1520">
          <div className="row align-items-center">
            <div className="col-lg-6 align-self-center">
              <div
                className="hero-content style-two rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>Building the Future of Digital Experiences</h1>
                <p>
                  Let me know if any of these resonate or if you have a specific
                  focus area I should incorporate!
                </p>

                <Link href="services" className="theme-btn mt-15">
                  Explore UinTech IT Services
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hero-image-two"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/hero/hero2.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-two-shape">
          <div className="shape shape-one">
            <img
              src="assets/images/hero/hero-two-shape1.png"
              alt="Hero Shape"
            />
          </div>
          <div className="shape shape-two">
            <img
              src="assets/images/hero/hero-two-shape2.png"
              alt="Hero Shape"
            />
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Hero Bottom Image Start */}
      <div className="hero-bottom-image-area rel z-1">
        <div className="container-fluid">
          <img
            src="assets/images/hero/hero-bottom-image.jpg"
            alt="Hero Bottom Image"
          />
        </div>
      </div>
      {/* Hero Bottom Image End */}
      {/* Featuer Area start */}
      <section className="feature-area rpt-110 rpb-45 rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6 border-right"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three">
                <div className="icon">
                  <i className="flaticon-idea" />
                </div>
                <div className="content">
                  <h4>Customizable Solutions</h4>
                  <p>
                    Providing highly customizable solutions tailored to each
                    client’s unique needs can set you apart. Clients are
                    looking.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 border-right"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three me-lg-auto ms-sm-auto">
                <div className="icon">
                  <i className="flaticon-grow" />
                </div>
                <div className="content">
                  <h4>Scalability &amp; Flexibility</h4>
                  <p>
                    Scalable solutions allow companies to grow without needing
                    to overhaul their software infrastructure architecture .
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 border-right"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three me-auto ms-lg-auto">
                <div className="icon">
                  <i className="flaticon-data-protection" />
                </div>
                <div className="content">
                  <h4>Security &amp; Compliance</h4>
                  <p>
                    Prioritizing security ensures protection and compliance with
                    industry standards and regulations, safeguarding against.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three ms-sm-auto">
                <div className="icon">
                  <i className="flaticon-graphic-design" />
                </div>
                <div className="content">
                  <h4>User-Friendly Interface</h4>
                  <p>
                    Accessibility features, and thoughtful design help clients
                    and their teams adapt quickly and use the solution
                    effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featuer Area end */}
      {/* Service Area start */}
      <Service />
      {/* Service Area end */}
      {/* Counter Area start */}
      <div className="counter-area pt-85 pb-55 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="counter-item-two">
                <div className="counter-text-wrap">
                  <span className="count-text" data-speed={3000} data-stop={8}>
                    <Counter end={8} />
                  </span>
                  <span className="after">k+</span>
                </div>
                <span className="counter-title">
                  Project
                  <br /> Complete
                </span>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="counter-item-two">
                <div className="counter-text-wrap">
                  <span className="count-text" data-speed={3000} data-stop={5}>
                    <Counter end={5} />
                  </span>
                  <span className="after">k+</span>
                </div>
                <span className="counter-title">
                  We’ve Global
                  <br /> Trusted Clients
                </span>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="counter-item-two">
                <div className="counter-text-wrap">
                  <span className="count-text" data-speed={3000} data-stop={23}>
                    <Counter end={23} />
                  </span>
                  <span className="after">+</span>
                </div>
                <span className="counter-title">
                  Awards
                  <br /> Winning
                </span>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="counter-item-two">
                <div className="counter-text-wrap">
                  <span className="count-text" data-speed={3000} data-stop={20}>
                    <Counter end={20} />
                  </span>
                  <span className="after">+</span>
                </div>
                <span className="counter-title">
                  IT &amp; Tech
                  <br /> Services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Area end */}
      {/* Case Area start */}
      <section className="case-area rel z-1">
        <div className="row align-items-end">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="case-item hover-content active">
              <div
                className="image"
                style={{
                  backgroundImage: "url(assets/images/cases/case-area-bg1.jpg)",
                }}
              ></div>
              <div className="content">
                <div className="tag">
                  <Link href="cases">Software Development</Link>
                </div>
                <h3 className="title">
                  <Link href="case-details">
                    Transforming Retail with Custom Solution
                  </Link>
                </h3>
                <div className="inner-content">
                  <p>
                    These titles emphasize specific benefits and industries,
                    helping potential clients identify with successes achieved.
                  </p>

                  <Link href="case-details" className="theme-btn btn-small">
                    Case Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="case-item hover-content">
              <div
                className="image"
                style={{
                  backgroundImage: "url(assets/images/cases/case-area-bg2.jpg)",
                }}
              ></div>
              <div className="content">
                <div className="tag">
                  <Link href="cases">Cyber Security</Link>
                </div>
                <h3 className="title">
                  <Link href="case-details">
                    Optimizing Supply Chains with AI-Driven
                  </Link>
                </h3>
                <div className="inner-content">
                  <p>
                    These titles emphasize specific benefits and industries,
                    helping potential clients identify with successes achieved.
                  </p>

                  <Link href="case-details" className="theme-btn btn-small">
                    Case Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="case-item hover-content">
              <div
                className="image"
                style={{
                  backgroundImage: "url(assets/images/cases/case-area-bg3.jpg)",
                }}
              ></div>
              <div className="content">
                <div className="tag">
                  <Link href="cases">Software Development</Link>
                </div>
                <h3 className="title">
                  <Link href="case-details">
                    Reducing Operational Costs Intelligent
                  </Link>
                </h3>
                <div className="inner-content">
                  <p>
                    These titles emphasize specific benefits and industries,
                    helping potential clients identify with successes achieved.
                  </p>

                  <Link href="case-details" className="theme-btn btn-small">
                    Case Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="case-item hover-content">
              <div
                className="image"
                style={{
                  backgroundImage: "url(assets/images/cases/case-area-bg4.jpg)",
                }}
              ></div>
              <div className="content">
                <div className="tag">
                  <Link href="cases">Product Design</Link>
                </div>
                <h3 className="title">
                  <Link href="case-details">
                    Enabling Real-Time Decision-Making
                  </Link>
                </h3>
                <div className="inner-content">
                  <p>
                    These titles emphasize specific benefits and industries,
                    helping potential clients identify with successes achieved.
                  </p>

                  <Link href="case-details" className="theme-btn btn-small">
                    Case Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Case Area end */}
      {/* About Company Area start */}
      <section id="about" className="about-company-area pt-130 rpt-100 rel z-1">
        <div className="container-fluid">
          <div className="about-inner pb-100 rpb-70">
            <div className="container">
              <div className="row">
                <div className="col-lg-10">
                  <div
                    className="section-title mb-50 rmb-0"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <span className="sub-title mb-10">About Company</span>
                    <h2>
                      Building Future-Ready Solutions for Today’s Challenges
                      Shaping the Future of Business Through Digital
                      Transformation
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-7">
                  <div
                    className="about-images"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="left">
                      <img
                        src="assets/images/about/about1.jpg"
                        alt="About Image"
                      />
                    </div>
                    <div className="right">
                      <img
                        src="assets/images/about/about2.jpg"
                        alt="About Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div
                    className="about-content mb-30 rmt-20"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <p>
                      We are dedicated to transforming businesses through
                      innovative, tailored software solutions. With a team of
                      skilled professionals commitment cutting-edge technology,
                      we specialize creating scalable, user-friendly software
                      that meets the unique needs of every client.
                    </p>
                    <ul className="list-style-one mt-35">
                      <li>
                        <i className="far fa-check" /> Software Development
                        &amp; Integration
                      </li>
                      <li>
                        <i className="far fa-check" /> Help Desk &amp; Technical
                        Support
                      </li>
                      <li>
                        <i className="far fa-check" /> Business Continuity &amp;
                        Compliance
                      </li>
                    </ul>
                    <Link
                      href="about"
                      className="theme-btn style-three mt-55 rmt-40"
                    >
                      Learn More About Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Company Area end */}
      {/* Service Area start */}
      <section id="services" className="service-area rel z-1">
        <div className="container pt-130 rpt-100 pb-100 rpb-70">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-center mb-45"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  What We Provide
                </span>
                <h2>Growth Advanced IT Solutions</h2>
                <p>
                  IT services encompass a wide range of solutions designed to
                  support businesses in managing their technology
                  infrastructure, enhancing productivity, and achieving their
                  goals through innovative technology these services include
                  everything from system maintenance network.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="row">
                <div
                  className="col-md-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item-two">
                    <div className="icon">
                      <i className="flaticon-troubleshooting" />
                    </div>
                    <h5>
                      <Link href="service-details">Managed IT Solutions</Link>
                    </h5>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item-two">
                    <div className="icon">
                      <i className="flaticon-service" />
                    </div>
                    <h5>
                      <Link href="service-details">
                        IT Consulting Solutions
                      </Link>
                    </h5>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item-two">
                    <div className="icon">
                      <i className="flaticon-technical-support-2" />
                    </div>
                    <h5>
                      <Link href="service-details">
                        IT Support &amp; Helpdesk
                      </Link>
                    </h5>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item-two">
                    <div className="icon">
                      <i className="flaticon-cloud-network" />
                    </div>
                    <h5>
                      <Link href="service-details">
                        Hosting and Cloud Services
                      </Link>
                    </h5>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item-two">
                    <div className="icon">
                      <i className="flaticon-cyber-security" />
                    </div>
                    <h5>
                      <Link href="service-details">
                        Cyber Security Services
                      </Link>
                    </h5>
                  </div>
                </div>
                <div
                  className="col-md-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item-two">
                    <div className="icon">
                      <i className="flaticon-layer" />
                    </div>
                    <h5>
                      <Link href="service-details">Software Development</Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div
                className="service-video-part mb-30 rel"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/services/service-video.jpg"
                  alt="Image"
                />
                <div
                  className="content"
                  data-aos="fade-down"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="video-wrap">
                    <a
                      href="https://www.youtube.com/watch?v=TfU0qjuZkJ4"
                      className="mfp-iframe video-play"
                    >
                      <i className="fas fa-play" />
                    </a>{" "}
                    <span>How It Works</span>
                  </div>
                  <h5>Seamless IT Solutions for a Digital Future</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Area end */}
      {/* Working Process Area start */}
      <WorkingProcess2 containerClass="container-fluid" />
      {/* Working Process Area end */}
      {/* Pricing Area start */}
      <Pricing />
      {/* Pricing Area end */}
      {/* Testimonial Area start */}
      <Testimonials2 />
      {/* Testimonial Area end */}
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
              <div className="blog-item-two">
                <div className="image">
                  <img src="assets/images/blog/blog4.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog">Software</Link>
                    </li>
                    <li>
                      <Link href="blog">25 December 2024</Link>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="blog-details">
                      Future of Software Development Trends to Watch in 2024
                    </Link>
                  </h4>
                  <div className="admin-info">
                    <div className="image">
                      <img src="assets/images/blog/admin1.png" alt="Image" />
                    </div>
                    <div className="name">
                      Post by <Link href="blog">B. Holman</Link>
                    </div>
                  </div>
                  <p>
                    Cybersecurity is no longer just an IT concern fundamental
                    organizational resilience.
                  </p>

                  <Link className="read-more" href="blog-details">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
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
              <div className="blog-item-two">
                <div className="image">
                  <img src="assets/images/blog/blog5.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog">Software</Link>
                    </li>
                    <li>
                      <Link href="blog">25 December 2024</Link>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="blog-details">
                      Why Custom Software Solutions Are Worth the Investment
                    </Link>
                  </h4>
                  <div className="admin-info">
                    <div className="image">
                      <img src="assets/images/blog/admin2.png" alt="Image" />
                    </div>
                    <div className="name">
                      Post by <Link href="blog">B. Holman</Link>
                    </div>
                  </div>
                  <p>
                    Cybersecurity is no longer just an IT concern fundamental
                    organizational resilience.
                  </p>

                  <Link className="read-more" href="blog-details">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
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
              <div className="blog-item-two">
                <div className="image">
                  <img src="assets/images/blog/blog6.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <Link href="blog">Software</Link>
                    </li>
                    <li>
                      <Link href="blog">25 December 2024</Link>
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="blog-details">
                      Future of Software Development Trends to Watch in 2024
                    </Link>
                  </h4>
                  <div className="admin-info">
                    <div className="image">
                      <img src="assets/images/blog/admin3.png" alt="Image" />
                    </div>
                    <div className="name">
                      Post by <Link href="blog">B. Holman</Link>
                    </div>
                  </div>
                  <p>
                    Cybersecurity is no longer just an IT concern fundamental
                    organizational resilience.
                  </p>

                  <Link className="read-more" href="blog-details">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
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
