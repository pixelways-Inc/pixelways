"use client";
import ClientLogo from "@/components/ClientLogo";
import Services from "@/components/services";
import Counter from "@/components/Counter";
import Team from "@/components/Team";
import Testimonials from "@/components/testimonials/Testimonials1";
import PixelwaysAdModal from "@/components/PixelwaysAdModal";
import ChatInterfaceLanding from "@/components/ChatInterfaceLanding";
import HeroSlider from "@/components/HeroSlider";

import { WorkingProcess2 } from "@/components/WorkingProcess";
import TekprofLayout from "@/layout/TekprofLayout";
import { ThemeProvider } from "@/context/ThemeContext";
import Link from "next/link";

const page = () => {
  return (
    <TekprofLayout
      header={2}
      footer={1}
      rootElements={{
        "--tekprof-primary-color": "#FC5546",
        "--tekprof-heading-color": "#020626",
        "--tekprof-gray-color": "#FAF8F6",
      }}
    >
      <HeroSlider />
      
      {/* Features Area start */}
      <section className="features-area rel z-1">
        <div className="container pt-130 rpt-100 pb-100 rpb-70">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="why-choose-content rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Our Core Expertise
                </span>
                <h2>
                  Transforming Challenges into Opportunities with Pixelways Solutions
                </h2>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <p>
                      At Pixelways Solutions, we integrate cutting-edge technologies with
                      strategic planning to optimize your processes, drive innovation, and deliver
                      measurable results. Partner with our IT experts to unlock your business's full potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Services limit={10} mode="slide" />
          
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
                  <span className="sub-title mb-10">Why Pixelways Solutionss?</span>
                  <h2>
                    Your Partner in Digital Transformation: Solutions Beyond Technology, Success Beyond Boundaries
                  </h2>
                </div>
                <p>
                  Choose Pixelways Solutions as your trusted partner for digital transformation. We provide not just technology, but comprehensive support and strategic guidance to help your business thrive in the digital age.
                </p>
                <Link href="about" className="theme-btn mt-20 mb-50">
                  Discover Our Story
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
                        Our dedicated team of experts ensures personalized attention and scalable resources, maintaining full control and transparency throughout your project.
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
                        We prioritize client satisfaction through quality design, timely delivery, and ongoing post-project support, building lasting partnerships.
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
                    src="https://api.a0.dev/assets/image?text=Business team celebrating a successful digital transformation, with charts and laptops on a conference table. Bright, energetic, 8K, 300x300px.&aspect=1:1&seed=127" alt="Why Choose" width={300} height={300} />
                  <img
                    src="https://api.a0.dev/assets/image?text=IT consultant shaking hands with a client in a modern office, symbolizing partnership and trust. Professional, warm, 8K, 300x300px.&aspect=1:1&seed=128" alt="Why Choose" width={300} height={300} />
                </div>
                <div
                  className="right"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="https://api.a0.dev/assets/image?text=Happy clients using a new business app on tablets, with a consultant guiding them. Friendly, collaborative, 8K, 300x300px.&aspect=1:1&seed=129" alt="Why Choose" width={300} height={300} />
                  <img
                    src="https://api.a0.dev/assets/image?text=Team of IT experts brainstorming around a whiteboard filled with diagrams and ideas. Creative, dynamic, 8K, 300x300px.&aspect=1:1&seed=130" alt="Why Choose" width={300} height={300} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Services Area start */}
      <section className="services-area bgc-blue pt-130 rpt-100 rel z-1">
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
                  Our Comprehensive Services
                </span>
                <h2>Empowering Your Business with Advanced Digital Solutions</h2>
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
                    src="https://api.a0.dev/assets/image?text=IT technician managing servers in a data center, surrounded by blinking lights and cables. Reliable, secure, 8K, 350x350px.&aspect=1:1&seed=131" alt="Managed IT Services" width={350} height={350} />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">
                      <i className="flaticon-it" /> Managed IT Services
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Proactive monitoring, maintenance, and technical support for your IT
                      infrastructure, ensuring optimal performance and reliability.
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
                    src="https://api.a0.dev/assets/image?text=Cybersecurity shield overlaying a network of computers, with digital locks and warning symbols. Blue, high-tech, 8K, 350x350px.&aspect=1:1&seed=132" alt="Cybersecurity Services" width={350} height={350} />
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
                      Advanced threat detection, prevention, and incident response to safeguard your critical data and systems from cyber threats.
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
                    src="https://api.a0.dev/assets/image?text=Cloud infrastructure with multiple devices syncing data, set against a bright sky. Modern, scalable, 8K, 350x350px.&aspect=1:1&seed=133" alt="Cloud Solutions" width={350} height={350} />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">
                      <i className="flaticon-cloud" /> Cloud Solutions
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Strategic cloud adoption, migration, and optimization services across AWS, Azure, and GCP for scalable and efficient operations.
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
                    src="https://api.a0.dev/assets/image?text=Data backup process visualized as files moving to a secure vault, with recovery icons and graphs. Trustworthy, clear, 8K, 350x350px.&aspect=1:1&seed=134" alt="Data Backup & Recovery" width={350} height={350} />
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
                      Robust data backup and disaster recovery plans to ensure business continuity and protect your valuable information.
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
          backgroundImage: "url('https://api.a0.dev/assets/image?text=Pixelways+Solution+Achievements+Innovation+Excellence&aspect=16:9&seed=42')",
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
                  <span className="sub-title mb-10">Our Achievements</span>
                  <h2>Driving Innovation and Delivering Excellence</h2>
                </div>
                <p>
                  At Pixelways Solutions, we are committed to empowering businesses to thrive in the digital era through innovative IT solutions and a relentless pursuit of excellence.
                </p>
                <Link href="about" className="theme-btn mt-20">
                  Request a Consultation
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="achievement-counter achievement-counter-dark"
                style={{
                  backgroundColor: '#0B0C0C !important',
                  color: 'white !important',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '30px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                }}
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
        <style jsx>{`
          .achievement-counter-dark {
            background-color: #0B0C0C !important;
            background: #0B0C0C !important;
            color: white !important;
          }
          .achievement-counter-dark .counter-item {
            background-color: #0B0C0C !important;
            background: #0B0C0C !important;
            color: white !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
          }
          .achievement-counter-dark .counter-text-wrap {
            color: white !important;
          }
          .achievement-counter-dark .count-text {
            color: white !important;
          }
          .achievement-counter-dark .after {
            color: #FC5546 !important;
          }
          .achievement-counter-dark .counter-title {
            color: #e0e0e0 !important;
          }
        `}</style>
      </section>
      {/* Achievement Area end */}

      {/* CTA Section Start */}
      <section className="call-to-action-area rel z-1 pt-130 rpt-100 pb-100 rpb-70">
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
                  Ready to Start Your Project?
                </span>
                <h2>Let's Build Something Amazing Together</h2>
                <p>
                  Tell us about your vision, and let our experts help you bring it to life. Fill out our client intake form to get started.
                </p>
                <Link href="/client-intake" className="theme-btn mt-20">
                  Start Your Project Intake
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section End */}

      {/* Team Area start */}
      <section className="team-area py-130 rpy-100 rel z-1">
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
                  Meet Our Experts
                </span>
                <h2>Our Experienced and Passionate Team</h2>
              </div>
            </div>
          </div>
          <Team mode="slide" standalone={false} />
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
                    src="https://api.a0.dev/assets/image?text=IT strategist presenting a roadmap on a digital screen, with team members discussing. Smart, strategic, 8K, 350x350px.&aspect=1:1&seed=135" alt="Assessment and Strategy Development" width={350} height={350} />
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
                      We provide in-depth assessment and strategic planning to align technology with your business goals, ensuring a clear roadmap for digital success.
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
                    src="https://api.a0.dev/assets/image?text=Cybersecurity protocol visualized as a digital fortress with firewalls and encrypted data streams. Secure, advanced, 8K, 350x350px.&aspect=1:1&seed=136" alt="Enhanced Cybersecurity Protocols" width={350} height={350} />
                </div>
                <div className="content">
                  <div className="tags">
                    <Link href="blog">IT Service</Link>
                    <Link href="blog">Cyber Security</Link>
                  </div>
                  <h3 className="title">
                    <Link href="service-details">
                      Enhanced Cybersecurity Protocols
                    </Link>
                  </h3>
                  <div className="inner-content">
                    <p>
                      Our multi-layered cybersecurity measures, including advanced firewall protection and real-time threat intelligence, secure your infrastructure.
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
                    src="https://api.a0.dev/assets/image?text=Cloud migration shown as data moving from on-premise servers to cloud platforms, with optimization graphs. Efficient, futuristic, 8K, 350x350px.&aspect=1:1&seed=137" alt="Cloud Migration and Optimization" width={350} height={350} />
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
                      Seamlessly migrate your operations to the cloud and optimize your existing cloud infrastructure for performance, cost-efficiency, and scalability.
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
      {/* Call to Action Area start */}
      <section className="cta-area bgc-primary py-80 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div
                className="cta-content text-white"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Ready to Transform Your Business with Digital Solutions?</h2>
                <p>Join hundreds of businesses that trust Pixelways Solutions for their digital transformation journey. Get started today!</p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div
                className="cta-buttons"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <Link href="/client-intake" className="theme-btn style-two mb-15">
                  Start Your Project
                </Link>
                <Link href="/hosting" className="theme-btn style-three">
                  View Hosting Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Area end */}
      {/* Client Logo Area start */}
      <ClientLogo />
      {/* Client Logo Area end */}
      {/* Blog Area start */}
      <section className="blog-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
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
                  Insights &amp; Resources
                </span>
                <h2>Latest Insights &amp; Expert Articles</h2>
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
                  <img src="https://api.a0.dev/assets/image?text=Cybersecurity expert presenting at a business conference, audience engaged, digital threat icons on screen, 8K, 300x300px.&aspect=1:1&seed=138" alt="Blog" width={300} height={300} />
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
                    <Link href="/blog/cybersecurity-essentials-protecting-business-from-emerging-threats">
                      Cybersecurity Essentials Protecting Business from Emerging
                      Threats
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Stay ahead of evolving cyber threats with our essential guide to protecting your business through robust security practices and proactive measures.
                    </p>
                    <Link className="theme-btn btn-small" href="/blog/cybersecurity-essentials-protecting-business-from-emerging-threats">
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
                  <img src="https://api.a0.dev/assets/image?text=IT consultant in a modern office, comparing solution options on a large interactive display, city skyline visible, 8K, 300x300px.&aspect=1:1&seed=139" alt="Blog" width={300} height={300} />
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
                    <Link href="/blog/ultimate-guide-choosing-right-it-solutions-partner">
                      The Ultimate Guide to Choosing the Right IT Solutions
                      Partner
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Navigate the complexities of selecting an IT partner with our comprehensive guide, ensuring you make an informed decision for your business's future.
                    </p>
                    <Link className="theme-btn btn-small" href="/blog/ultimate-guide-choosing-right-it-solutions-partner">
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
                  <img src="https://api.a0.dev/assets/image?text=IT manager overseeing a secure data backup operation, multiple screens showing recovery progress, office setting, 8K, 300x300px.&aspect=1:1&seed=140" alt="Blog" width={300} height={300} />
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
                    <Link href="/blog/importance-data-backup-disaster-recovery-plans">
                      The Importance of Data Backup and Disaster Recovery Plans
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Understand why robust data backup and disaster recovery plans are crucial for business continuity and protecting your valuable information from unforeseen events.
                    </p>
                    <Link className="theme-btn btn-small" href="/blog/importance-data-backup-disaster-recovery-plans">
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
      
      {/* Pixelways Ad Modal */}
      <PixelwaysAdModal 
        currentPage="home" 
        showOnMount={true} 
        delay={15000}
        frequency={300000}
      />
    </TekprofLayout>
  );
};
export default page;
