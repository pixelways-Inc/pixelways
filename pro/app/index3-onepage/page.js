import Benefits from "@/components/Benefits";
import Blog from "@/components/Blog";
import ClientLogo from "@/components/ClientLogo";
import FAQs from "@/components/FAQs";
import ProgressBar from "@/components/ProgressBar";
import { Testimonials3 } from "@/components/testimonials/Testimonials3";
import WorkingProcess from "@/components/WorkingProcess";
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
    <TekprofLayout
      footer={3}
      header={3}
      rootElements={{
        "--tekprof-primary-color": "#002FF5",
        "--tekprof-heading-color": "#18185E",
        "--tekprof-blue-color": "#18185E",
        "--tekprof-gray-color": "#EDF0FE",
      }}
      singleMenu={singlePage}
    >
      {/* Hero Section Start */}
      <section
        id="home"
        className="hero-area style-three bgc-blue rpy-100 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/bg-dot-shape.png)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 align-self-center">
              <div
                className="hero-content text-white py-160 rpy-0"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-15">
                  Cyber Security Solutions Agency
                </span>
                <h1>Ultimate Defense Digital Threats</h1>
                <p>
                  Cybersecurity is more critical than ever with the increasing
                  reliance on technology and the internet businesses.
                </p>
                <Link href="services" className="theme-btn mt-15">
                  Explore UinTech IT Services
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-image-three">
                <div className="image one">
                  <img
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    src="assets/images/hero/hero-three1.png"
                    alt="Hero"
                  />
                </div>
                <div className="image two">
                  <img
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    src="assets/images/hero/hero-three2.png"
                    alt="Hero"
                  />
                </div>
                <div className="image three">
                  <img
                    data-aos="zoom-in"
                    data-aos-delay={200}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    src="assets/images/hero/hero-three3.png"
                    alt="Hero"
                  />
                </div>
                <div className="image four">
                  <img
                    data-aos="fade-down"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                    src="assets/images/hero/hero-three4.png"
                    alt="Hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      <ClientLogo containerClass="client-logo-area style-two bgc-blue" />
      {/* Client Logo Area end */}
      {/* Service Area start */}
      <section
        id="services"
        className="service-area bgc-blue pt-130 rpt-100 pb-100 rpb-70 rel z-1"
      >
        <div className="container">
          <div className="row align-items-end text-white mb-50">
            <div className="col-xl-6 col-lg-7">
              <div
                className="section-title rmb-30"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  What We Provide
                </span>
                <h2>Tailored Security Services to Safeguard Your Business</h2>
              </div>
            </div>
            <div className="col-xl6 col-lg-5">
              <div
                className="service-section-text ms-lg-auto"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <p>
                  Cybersecurity is the practice of protecting systems, networks,
                  and data from malicious attacks, unauthorized access, an
                  digital threats In today’s interconnected world, businesses
                  face.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item-three">
                <div className="icon yellow">
                  <i className="flaticon-cloud-1" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Data Protection</Link>
                  </h4>
                  <p>
                    Data protection is the practice of safeguarding sensitive
                    they information unauthorized
                  </p>
                  <Link className="read-more" href="service-details">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item-three">
                <div className="icon skyblue">
                  <i className="flaticon-cyber-security-1" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Cyber Security</Link>
                  </h4>
                  <p>
                    Cybersecurity refers to the practice of protecting digital
                    systems networks sensitive
                  </p>
                  <Link className="read-more" href="service-details">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item-three">
                <div className="icon pink">
                  <i className="flaticon-cloud-computing" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Cloud Services</Link>
                  </h4>
                  <p>
                    Cloud services refer delivery computing resource including
                    storage, processing power
                  </p>
                  <Link className="read-more" href="service-details">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-item-three">
                <div className="icon blue">
                  <i className="flaticon-data" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Data Storage</Link>
                  </h4>
                  <p>
                    Data Storage refers a process of saving digital information
                    in a physical or virtual medium
                  </p>
                  <Link className="read-more" href="service-details">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Area end */}
      {/* About Us Area start */}
      <section id="about" className="about-us-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row gap-40 align-items-center">
            <div className="col-xl-6 col-lg-10">
              <div className="about-three-left-image">
                <img
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                  src="assets/images/about/about-three-image1.jpg"
                  alt="About Us"
                />
                <div
                  className="clients-satisfied"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <i className="flaticon-experience" />
                  <h4>99% Clients Satisfied</h4>
                </div>
                <div
                  className="bottom-image"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/about/about-three-image2.jpg"
                    alt="About Us"
                  />
                </div>
                <div
                  className="years-experience"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <i className="flaticon-quality" />
                  <h4>15+ Years of experience</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div
                className="about-three-right-content"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-40">
                  <span className="sub-title mb-10">Learn About Us</span>
                  <h2>Protecting Businesses with Cutting-Edge Cybersecurity</h2>
                </div>
                <p>
                  Cybersecurity solutions provide the tools and strategies to
                  safeguard sensitive information, ensure the integrity of
                  digital assets, and maintain business continuity implementing
                  robust firewalls and encryption to proactive monitoring.
                </p>
                <div
                  className="about-featured-wrap mt-40"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="about-featured-item">
                        <div className="icon">
                          <i className="flaticon-cyber-security-2" />
                        </div>
                        <h5>
                          <Link href="service-details">
                            Comprehensive Threat Assessment
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-featured-item">
                        <div className="icon">
                          <i className="flaticon-recovery" />
                        </div>
                        <h5>
                          <Link href="service-details">
                            Incident Response and Recovery
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-featured-item">
                        <div className="icon">
                          <i className="flaticon-protection" />
                        </div>
                        <h5>
                          <Link href="service-details">
                            Data Encryption and Protection
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-featured-item">
                        <div className="icon">
                          <i className="flaticon-protection-1" />
                        </div>
                        <h5>
                          <Link href="service-details">
                            Employee Training and Awareness
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="about-bottom-trusted-area mt-20"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="left-button">
                    <Link href="about" className="theme-btn">
                      Learn More Us
                    </Link>
                  </div>
                  <div className="trusted-clients-wrap">
                    <h6>10m+ Trusted Clients</h6>
                    <div className="trusted-clients">
                      <img
                        src="assets/images/testimonials/client1.jpg"
                        alt="Client"
                      />
                      <img
                        src="assets/images/testimonials/client2.jpg"
                        alt="Client"
                      />
                      <img
                        src="assets/images/testimonials/client3.jpg"
                        alt="Client"
                      />
                      <img
                        src="assets/images/testimonials/client4.jpg"
                        alt="Client"
                      />
                      <img
                        src="assets/images/testimonials/client5.jpg"
                        alt="Client"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area rel z-1">
        <div className="container container-1600">
          <div className="why-choose-us-inner bgc-gray px-sm-4 py-130 rpy-100">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7">
                  <div
                    className="why-choose-three-content"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="section-title mb-30">
                      <span className="sub-title mb-10">Why Choose Us</span>
                      <h2>Unmatched Protection for a Safer Digital Future</h2>
                    </div>
                    <p>
                      Cybersecurity solutions provide the tools and strategies
                      to safeguard sensitive information, ensure the integrity
                      of digital assets, and maintain business continuity
                      implementing robust firewalls and encryption to proactive
                      monitoring.
                    </p>
                    <div
                      className="row gap-50 pt-35"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="col-md-6">
                        <div className="circle-progress-item">
                          <ProgressBar
                            value={89}
                            counterEnd="%"
                            counterValue={89}
                          />
                          <h4>Satisfied Our Trusted Clients</h4>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="circle-progress-item">
                          <ProgressBar
                            value={90}
                            counterEnd="k+"
                            counterValue={5}
                          />
                          <h4>World Projects Complete</h4>
                        </div>
                      </div>
                    </div>
                    <div
                      className="proven-area pt-50 rpt-40 mt-35 rmt-15"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <h4>Proven Expertise in Safeguarding Your Data</h4>
                      <p>
                        A cybersecurity agency is dedicated to protecting
                        individuals, businesses, and organizations from the
                        ever-evolving threats of the digital world.
                      </p>
                      <ul className="list-style-one mt-20">
                        <li>
                          <i className="far fa-check" /> Software Development
                          &amp; Integration
                        </li>
                        <li>
                          <i className="far fa-check" /> Help Desk &amp;
                          Technical Support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-md-10">
                  <div
                    className="why-choose-three-image"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/about/why-choose-three-right.jpg"
                      alt="Why Choose"
                    />
                    <div
                      className="team-member"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <i className="flaticon-experts" />
                      <h4>25+ Expert Team Member</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Case Studies Area start */}
      <section className="case-studies-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
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
                  Case Studies
                </span>
                <h2>
                  Defense in Depth A Real-World Cybersecurity Transformation
                </h2>
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
              <div className="case-study-item">
                <div className="image">
                  <img
                    src="assets/images/cases/case-study1.jpg"
                    alt="Case Study"
                  />
                </div>
                <div className="content">
                  <Link href="cases" className="tag">
                    Cyber Security
                  </Link>
                  <h4 className="title">
                    <Link href="case-details">
                      Preventing the Unthinkable A Cybersecurity Agency in
                      Action
                    </Link>
                  </h4>
                  <p>
                    Cybersecurity is a critical aspect of the digital age,
                    ensuring the safety.
                  </p>
                  <Link href="case-details" className="theme-btn mt-15">
                    Read More
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
              <div className="case-study-item">
                <div className="image">
                  <img
                    src="assets/images/cases/case-study2.jpg"
                    alt="Case Study"
                  />
                </div>
                <div className="content">
                  <Link href="cases" className="tag">
                    Cloud Services
                  </Link>
                  <h4 className="title">
                    <Link href="case-details">
                      Breaking the Breach How We Secured Vulnerable Systems
                    </Link>
                  </h4>
                  <p>
                    With the increasing reliance technology, businesses
                    governments individuals
                  </p>
                  <Link href="case-details" className="theme-btn mt-15">
                    Read More
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
              <div className="case-study-item">
                <div className="image">
                  <img
                    src="assets/images/cases/case-study3.jpg"
                    alt="Case Study"
                  />
                </div>
                <div className="content">
                  <Link href="cases" className="tag">
                    Data Recovery
                  </Link>
                  <h4 className="title">
                    <Link href="case-details">
                      The Anatomy of a Cyberattack Lessons from Real Incidents
                    </Link>
                  </h4>
                  <p>
                    Effective cybersecurity strategies include implementing
                    robust encryption
                  </p>
                  <Link href="case-details" className="theme-btn mt-15">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Case Studies Area end */}
      {/* Benefits Area start */}
      <Benefits />
      {/* Benefits Area end */}
      {/* Pricing Area start */}
      <section
        id="pricing"
        className="pricing-area-two bgs-cover pt-130 rpt-100 pb-100 rpb-70 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/pricing-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center text-white mb-70 rmb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-10">Pricing Package</span>
                <h2>
                  Find the Right Solution for Your Budget Custom Plans for Every
                  Stage of Your Journey
                </h2>
              </div>
            </div>
          </div>
          <div className="pricing-items">
            <div className="pricing-item style-two">
              <div
                className="row align-items-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="col-xl-3 col-lg-8">
                  <h4 className="title">Basic Package</h4>
                  <div className="text">Small businesses and startups</div>
                  <span className="price">
                    $99<span className="after-text">/per month</span>
                  </span>
                </div>
                <div className="col-xl-3 col-md-6">
                  <ul className="list-style-one">
                    <li>
                      <i className="far fa-check" /> Network assessment
                    </li>
                    <li>
                      <i className="far fa-check" /> Antivirus &amp; firewall
                      setup
                    </li>
                    <li>
                      <i className="far fa-check" /> Monthly threat reports
                    </li>
                  </ul>
                </div>
                <div className="col-xl-3 col-md-6">
                  <ul className="list-style-one">
                    <li>
                      <i className="far fa-check" /> Email security
                      (anti-phishing)
                    </li>
                    <li>
                      <i className="far fa-check" /> Data backups and advanced
                    </li>
                    <li>
                      <i className="far fa-check" /> Basic incident response
                    </li>
                  </ul>
                </div>
                <div className="col-xl-3 col-lg-4">
                  <Link
                    href="pricing"
                    className="theme-btn"
                    data-hover="Choose Package"
                  >
                    <span>Choose Package</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="pricing-item style-two">
              <div
                className="row align-items-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="col-xl-3 col-lg-8">
                  <h4 className="title">Standard Package</h4>
                  <div className="text">Small businesses and startups</div>
                  <span className="price">
                    $399<span className="after-text">/per month</span>
                  </span>
                </div>
                <div className="col-xl-3 col-md-6">
                  <ul className="list-style-one">
                    <li>
                      <i className="far fa-check" /> Network assessment
                    </li>
                    <li>
                      <i className="far fa-check" /> Antivirus &amp; firewall
                      setup
                    </li>
                    <li>
                      <i className="far fa-check" /> Monthly threat reports
                    </li>
                  </ul>
                </div>
                <div className="col-xl-3 col-md-6">
                  <ul className="list-style-one">
                    <li>
                      <i className="far fa-check" /> Email security
                      (anti-phishing)
                    </li>
                    <li>
                      <i className="far fa-check" /> Data backups and advanced
                    </li>
                    <li>
                      <i className="far fa-check" /> Basic incident response
                    </li>
                  </ul>
                </div>
                <div className="col-xl-3 col-lg-4">
                  <Link
                    href="pricing"
                    className="theme-btn"
                    data-hover="Choose Package"
                  >
                    <span>Choose Package</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="pricing-item style-two">
              <div
                className="row align-items-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="col-xl-3 col-lg-8">
                  <h4 className="title">Premium Package</h4>
                  <div className="text">Small businesses and startups</div>
                  <span className="price">
                    $899<span className="after-text">/per month</span>
                  </span>
                </div>
                <div className="col-xl-3 col-md-6">
                  <ul className="list-style-one">
                    <li>
                      <i className="far fa-check" /> Network assessment
                    </li>
                    <li>
                      <i className="far fa-check" /> Antivirus &amp; firewall
                      setup
                    </li>
                    <li>
                      <i className="far fa-check" /> Monthly threat reports
                    </li>
                  </ul>
                </div>
                <div className="col-xl-3 col-md-6">
                  <ul className="list-style-one">
                    <li>
                      <i className="far fa-check" /> Email security
                      (anti-phishing)
                    </li>
                    <li>
                      <i className="far fa-check" /> Data backups and advanced
                    </li>
                    <li>
                      <i className="far fa-check" /> Basic incident response
                    </li>
                  </ul>
                </div>
                <div className="col-xl-3 col-lg-4">
                  <Link
                    href="pricing"
                    className="theme-btn"
                    data-hover="Choose Package"
                  >
                    <span>Choose Package</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Area end */}
      {/* FAQs Area start */}
      <section className="faqs-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="faqs-images">
                <div
                  className="left"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img src="assets/images/faqs/faq1.jpg" alt="FAQs" />
                  <img src="assets/images/faqs/faq2.jpg" alt="FAQs" />
                </div>
                <div
                  className="right"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img src="assets/images/faqs/faq3.jpg" alt="FAQs" />
                  <img src="assets/images/faqs/faq4.jpg" alt="FAQs" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="faqs-content rmt-30"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <span className="sub-title mb-10">FAQs</span>
                  <h2>Frequently Asked Questions</h2>
                </div>
                <p>
                  Cybersecurity is the practice of protecting systems, networks,
                  and data from cyber threats such as hacking, malware, and
                  phishing.
                </p>
                <FAQs />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs Area end */}
      {/* Working Process Area start */}
      <WorkingProcess />
      {/* Working Process Area end */}
      {/* Testimonial Area start */}
      <Testimonials3 />
      {/* Testimonial Area end */}
      {/* Blog Area start */}
      <Blog />
      {/* Blog Area end */}
      {/* Get Consultations Area start */}
      <section
        className="get-consultations-area bgs-cover pt-130 rpt-100 pb-100 rel z-1"
        style={{
          backgroundImage:
            "url(assets/images/background/get-consultation-bg2.jpg)",
        }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8">
              <div
                className="get-consultation-content text-white rmb-25"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-10">Get Consultations</span>
                  <h2>Ready To Get IT Consultations ?</h2>
                </div>
                <p>
                  Cybersecurity is the practice of protecting systems, networks,
                  and data from cyber threats such as hacking, malware, and
                  phishing.
                </p>
                <div className="consultation-bottom-content mt-30">
                  <Link href="contact" className="theme-btn mb-30">
                    Get Consultation
                  </Link>
                  <div className="email-box mb-30">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <span>Email Address</span>
                      <a href="mailto:techinfo@gmail.com">techinfo@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="techmax-logo ms-lg-auto"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/logos/techmax-logo.png"
                  alt="Techmax Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Get Consultations Area end */}
    </TekprofLayout>
  );
};
export default page;
