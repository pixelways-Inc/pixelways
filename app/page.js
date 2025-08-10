"use client";
import ClientLogo from "@/components/ClientLogo";
import Counter from "@/components/Counter";
import Team from "@/components/Team";
import Testimonials from "@/components/testimonials/Testimonials1";

import { WorkingProcess2 } from "@/components/WorkingProcess";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";

const page = () => {
  return (
    <TekprofLayout
      header={1}
      footer={1}
      rootElements={{
        "--tekprof-primary-color": "#FC5546",
        "--tekprof-heading-color": "#020626",
        "--tekprof-gray-color": "#FAF8F6",
      }}
    >
      {/*End Hidden Sidebar */}
      {/* Hero Section Start */}
      <section
        className="hero-area pt-100 rpt-70 pb-130 rpb-100 rel z-1"
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
                <span className="sub-title mb-15">Future-Ready Digital Solutions</span>
                <h1>Empowering Your Business with Innovative Digital Solutions</h1>
                <p>
                  Pixelways Solution is your trusted partner in navigating the complexities of the digital landscape. We deliver innovative, scalable, and secure technology solutions tailored to your unique business needs.
                </p>
                <Link href="services" className="theme-btn mt-15">
                  Explore Our Services
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
                <img src="https://api.a0.dev/assets/image?text=A bustling high-tech corporate campus at golden hour, with sleek glass office towers reflecting the warm sunlight. In the foreground, diverse teams of smiling young professionals collaborate outdoors—some gathered around laptops, others walking and discussing ideas while holding tablets and smartphones. Large interactive digital displays showcase the company’s cutting-edge software solutions, glowing with futuristic UI designs. The background features lush landscaped gardens, autonomous delivery robots, and transparent skybridges connecting the buildings. The atmosphere is innovative, welcoming, and inspiring, with cinematic lighting, ultra-sharp textures, and realistic details. 8K resolution, image size: 600x600px.&aspect=1:1&seed=123" alt="Hero" width={600} height={600} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Features Area start */}
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
                <span className="sub-title color-primary mb-10">
                  Our Core Expertise
                </span>
                <h2>
                  Transforming Challenges into Opportunities with Pixelways Solutions
                </h2>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <p>
                      At Pixelways Solution, we integrate cutting-edge technologies with
                      strategic planning to optimize your processes, drive innovation, and deliver
                      measurable results. Partner with our IT experts to unlock your business's full potential.
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
                    src="https://api.a0.dev/assets/image?text=An IT professional in a modern office, collaborating with colleagues over laptops and digital screens showing analytics and cloud icons. The environment is bright, innovative, and welcoming, with glass walls and greenery. Realistic, 8K, 400x400px.&aspect=1:1&seed=124" alt="IT Solutions" width={400} height={400} />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">IT Solutions</Link>
                  </h4>
                  <p>
                    Comprehensive IT solutions tailored to your business, from custom software development to system integration and optimization.
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
                    src="https://api.a0.dev/assets/image?text=A cybersecurity expert monitoring multiple screens with threat maps and security alerts, in a high-tech control room. Blue tones, secure, focused, 8K, 400x400px.&aspect=1:1&seed=125" alt="Cyber Security" width={400} height={400} />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Cyber Security</Link>
                  </h4>
                  <p>
                    Robust cybersecurity services to protect your digital assets, ensuring data integrity, privacy, and compliance against evolving threats.
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
                    src="https://api.a0.dev/assets/image?text=Cloud servers floating above a city skyline, with data streams connecting businesses below. Futuristic, clean, and optimistic, 8K, 400x400px.&aspect=1:1&seed=126" alt="Cloud Services" width={400} height={400} />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link href="service-details">Cloud Services</Link>
                  </h4>
                  <p>
                    Scalable cloud solutions (AWS, Azure, GCP) for seamless migration, optimized infrastructure, and enhanced operational efficiency.
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
                  <span className="sub-title mb-10">Why Pixelways Solution?</span>
                  <h2>
                    Your Partner in Digital Transformation: Solutions Beyond Technology, Success Beyond Boundaries
                  </h2>
                </div>
                <p>
                  Choose Pixelways Solution as your trusted partner for digital transformation. We provide not just technology, but comprehensive support and strategic guidance to help your business thrive in the digital age.
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
                  At Pixelways Solution, we are committed to empowering businesses to thrive in the digital era through innovative IT solutions and a relentless pursuit of excellence.
                </p>
                <Link href="about" className="theme-btn mt-20">
                  Request a Consultation
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
                    <Link href="blog-details">
                      Cybersecurity Essentials Protecting Business from Emerging
                      Threats
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Stay ahead of evolving cyber threats with our essential guide to protecting your business through robust security practices and proactive measures.
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
                    <Link href="blog-details">
                      The Ultimate Guide to Choosing the Right IT Solutions
                      Partner
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Navigate the complexities of selecting an IT partner with our comprehensive guide, ensuring you make an informed decision for your business's future.
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
                    <Link href="blog-details">
                      The Importance of Data Backup and Disaster Recovery Plans
                    </Link>
                  </h4>
                  <div className="inner-content">
                    <p>
                      Understand why robust data backup and disaster recovery plans are crucial for business continuity and protecting your valuable information from unforeseen events.
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
