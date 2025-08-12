import ClientLogo from "@/components/ClientLogo";
import Counter from "@/components/Counter";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Team from "@/components/Team";
import { Testimonials2 } from "@/components/testimonials/Testimonials2";
import TekprofLayout from "@/layout/TekprofLayout";
const page = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="About Company" />
      {/* About Page About Area Start */}
      <section className="about-page-about-area pt-130 rpt-100 pb-110 rpb-80">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-9">
              <div className="about-page-about-left-content">
                <div
                  className="section-title mb-70 rmb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title color-primary mb-10">
                    About Pixelways Solution
                  </span>
                  <h2>
                    Innovating for a Digital Future: Building Solutions for Today’s Challenges and Tomorrow’s Opportunities
                  </h2>
                </div>
                <div className="row gap-70">
                  <div
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                    data-aos-offset={50}
                  >
                    <p>
                      At Pixelways Solutions, we are dedicated to transforming businesses through
                      innovative, tailored digital solutions. With a team of highly skilled professionals and a commitment to cutting-edge technology, we specialize in creating scalable, user-friendly software and robust IT infrastructures.
                    </p>
                  </div>
                  <div
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={200}
                    data-aos-offset={50}
                  >
                    <p>
                      Our comprehensive services span custom software development, cloud solutions, cybersecurity, data analytics, and more. We empower organizations to streamline operations, enhance efficiency, and achieve their strategic goals in an ever-evolving digital landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* About Page About Area End */}
      {/* About Page Image Start */}
      <div className="about-page-image-area">
        <div className="container-fluid">
          <div className="about-page-wrap">
            <div
              className="about-page-image"
              data-aos="fade-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img
                src="https://api.a0.dev/assets/image?text=business+team+collaboration+Pixelways+Solution&aspect=1:1&seed=about1"
                alt="About Image"
              />
            </div>
            <div
              className="about-page-image"
              data-aos="fade-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img
                src="https://api.a0.dev/assets/image?text=software+development+workspace+Pixelways+Solution&aspect=1:1&seed=about2"
                alt="About Image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* About Page Image End */}
      {/* About Page Experience Start */}
      <section className="about-page-experience-area pt-130 rpt-100 pb-110 rpb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="about-page-experience-content"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Experience Excellence with Pixelways Solutions</h2>
                </div>
                <p>
                  At Pixelways Solutions, excellence is at the core of everything we
                  do. Our team of dedicated professionals combines deep industry
                  expertise with a passion for innovation to deliver
                  high-quality, tailored digital solutions that drive measurable results.
                  We pride ourselves on meticulous attention to detail, unwavering commitment to client satisfaction, and our ability to turn
                  complex challenges into impactful outcomes. When you partner
                  with us, you’re not just getting a service provider—you’re
                  gaining a trusted ally committed to helping your business succeed.
                  Discover what true excellence means with Pixelways Solutions by your
                  side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Page Experience End */}
      {/* Team Area start */}
      {/* CTA to Team Page */}
      <section className="about-team-cta py-60 text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="cta-content">
                <h3 className="mb-4">Meet Our Expert Team</h3>
                <p className="mb-4">Discover the professionals driving Pixelways Solution's success. Learn more about our team's expertise and commitment to your business growth.</p>
                <Team />
                <Link href="/team" className="theme-btn btn-large">
                  View Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area py-130 rpt-100 rpb-75  rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-50 rmb-0"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Why Choose Pixelways Solutions?
                </span>
                <h2>Your Strategic Partner for Advanced Digital Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6 border-right border-left for-border-bottom"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-lg-auto">
                <div className="icon">
                  <i className="flaticon-idea" />
                </div>
                <div className="content">
                  <h4>Customizable Solutions</h4>
                  <p>
                    We deliver highly customizable solutions precisely tailored to your unique business needs, ensuring optimal fit and maximum impact.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right for-border-bottom"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-sm-auto">
                <div className="icon">
                  <i className="flaticon-grow" />
                </div>
                <div className="content">
                  <h4>Scalability &amp; Flexibility</h4>
                  <p>
                    Our scalable and flexible solutions are designed to grow with your business, adapting seamlessly to evolving demands without costly overhauls.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right for-border-bottom"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-auto ms-lg-auto">
                <div className="icon">
                  <i className="flaticon-data-protection" />
                </div>
                <div className="content">
                  <h4>Security &amp; Compliance</h4>
                  <p>
                    We prioritize robust security and strict compliance with industry standards (e.g., GDPR, HIPAA), safeguarding your data and operations.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right border-left"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-sm-auto">
                <div className="icon">
                  <i className="flaticon-idea" />
                </div>
                <div className="content">
                  <h4>Customizable Solutions</h4>
                  <p>
                    We deliver highly customizable solutions precisely tailored to your unique business needs, ensuring optimal fit and maximum impact.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-lg-auto">
                <div className="icon">
                  <i className="flaticon-grow" />
                </div>
                <div className="content">
                  <h4>Scalability &amp; Flexibility</h4>
                  <p>
                    Our scalable and flexible solutions are designed to grow with your business, adapting seamlessly to evolving demands without costly overhauls.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 border-right"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="feature-item-three style-two me-lg-auto ms-md-auto">
                <div className="icon">
                  <i className="flaticon-data-protection" />
                </div>
                <div className="content">
                  <h4>Security &amp; Compliance</h4>
                  <p>
                    We prioritize robust security and strict compliance with industry standards (e.g., GDPR, HIPAA), safeguarding your data and operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Area end */}
      {/* Counter Area start */}
      <div className="counter-area rel z-1">
        <div className="container-fluid">
          <div className="counter-wrap pt-70 pb-50 bgc-primary">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-xl-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="counter-item-two style-two">
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
                    <span className="counter-title">
                      Projects
                      <br /> Completed
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
                  <div className="counter-item-two style-two">
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
                    <span className="counter-title">
                      Global
                      <br /> Clients
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
                  <div className="counter-item-two style-two">
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
                    <span className="counter-title">
                      Awards
                      <br /> Won
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
                  <div className="counter-item-two style-two">
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
                    <span className="counter-title">
                      Years of
                      <br /> Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Area end */}
      {/* Testimonial Area start */}
      <Testimonials2 bgClass="" />
      {/* Testimonial Area end */}
      {/* Client Logo Area start */}
      <ClientLogo containerClass="client-logo-area style-two for-border-top" />
    </TekprofLayout>
  );
};
export default page;
