import Link from "next/link";
import servicesData from '../data/services.json';
import contactInfo from '../utility/contactInfo';

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    case 5:
      return <Footer5 />;
    case 6:
      return <Footer6 />;
    default:
      return <Footer2 />;
  }
};
export default Footer;
const Footer1 = () => {
  return (
    <footer className="main-footer bgc-blue mt-120 rel z-1">
      <div className="container container-1500">
        <div
          className="footer-top pt-70 pb-40 rpt-60 px-4 bgs-cover"
          style={{
            backgroundImage:
              "url('https://api.a0.dev/assets/image?text=Modern IT consultation scene, business team meeting in a bright office, digital screens, friendly atmosphere, 1200x400px, realistic, 8K.&aspect=3:1&seed=601')",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div
                  className="section-title text-white mb-20"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title mb-5">Get Consultations</span>
                  <h2>Ready to Get IT Consultations ?</h2>
                </div>
              </div>
              <div
                className="col-lg-5"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="cta-right-content">
                  <Link href="contact" className="theme-btn style-two mb-20">
                    Get Consultation
                  </Link>
                  <div className="mail-info mb-20">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                                        Email Address <br />
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row pb-25 justify-content-between">
          <div className="col-xl-3 col-sm-6">
            <div
              className="footer-widget footer-info"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-logo mb-30 text-start">
               <div className="logo text-start">
                <Link href="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
                  <img
                    src="/logo.png"
                    alt="Logo"
                    title="Logo"
                    style={{ maxWidth: '140px' }}
                  />
                   <span style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
                    Pixelways
                    <span
                      style={{
                        position: 'absolute',
                        top: '-0.35em',
                        right: '-1.1em',
                        width: '1.1em',
                        height: '1.1em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #2563eb 80%, #3b82f6 100%)',
                        borderRadius: '50%',
                        boxShadow: '0 0 0.15em #2563eb, 0 0 0.3em #3b82f6',
                        zIndex: 2,
                      }}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        fill="none"
                        style={{ display: 'block' }}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          {/* Sun rays */}
                          {[...Array(8)].map((_, i) => {
                            const angle = (i * 45) * (Math.PI / 180);
                            const x1 = 16 + Math.cos(angle) * 13;
                            const y1 = 16 + Math.sin(angle) * 13;
                            const x2 = 16 + Math.cos(angle) * 15.5;
                            const y2 = 16 + Math.sin(angle) * 15.5;
                            return (
                              <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="#2563eb"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            );
                          })}
                          {/* Badge circle */}
                          <circle cx="16" cy="16" r="10" fill="#2563eb" stroke="#fff" strokeWidth="2" />
                          {/* Tick */}
                          <polyline
                            points="12,17 15,20 21,13"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </span>
                  </span>
                </Link>
               
                
              </div>
              </div>
              <div className="text mb-25">
                <p>
                  Our IT solutions are designed to empower businesses with the
                  tools technology they need today.
                </p>
              </div>
              <div className="info-item">
                <div className="icon">
                  <i className="far fa-phone-rotary" />
                </div>
                <div className="content">
                  Phone: <a href={`tel:${contactInfo.phone1}`}>{contactInfo.phone1}</a> / <a href={`tel:${contactInfo.phone2}`}>{contactInfo.phone2}</a>
                </div>
              </div>
              <div className="info-item">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <div className="content">
                  Office Location: {contactInfo.officeLocation}
                </div>
              </div>
              <div className="info-item">
                <div className="icon">
                  <i className="far fa-envelope" />
                </div>
                <div className="content">
                  Email Address: <a href="mailto:hello@pixelways.co">hello@pixelways.co</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-3 col-6">
            <div
              className="footer-widget footer-links ps-xl-5"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h5 className="footer-title">Quick Link</h5>
              <ul>
                <li>
                  <Link href="about">
                    <i className="far fa-angle-right" /> About Company
                  </Link>
                </li>
                <li>
                  <Link href="services">
                    <i className="far fa-angle-right" /> Our Services
                  </Link>
                </li>
                <li>
                  <Link href="services">
                    <i className="far fa-angle-right" /> Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="blog">
                    <i className="far fa-angle-right" /> Blog &amp; News
                  </Link>
                </li>
                <li>
                  <Link href="contact">
                    <i className="far fa-angle-right" /> Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-md-3 col-6">
            <div
              className="footer-widget footer-links ps-xl-5"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h5 className="footer-title">Services</h5>
              <ul>
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link href={`/services?service=${service.id}`} scroll={false}>
                      <i className="far fa-angle-right" /> {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div
              className="footer-widget newsletter-widget"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h5 className="footer-title">Newsletter</h5>
              <p>
                We deliver fresh content straight to your inbox join our
                community.
              </p>
              <form className="newsletter-form mt-30" action="#">
                <input type="email" placeholder="Email here" required />
                <button type="submit">
                  <i className="far fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom pt-30 pb-15">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>
                  Made with ❤️ by Hans Ade FT Pixelways Team
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <p>Copyright © 2025 All Rights Reserved</p>
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="about">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="about">Terms and Conditions</Link>
                </li>
                <li>
                  <Link href="about">Support</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="far fa-arrow-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};
const Footer2 = () => {
  return (
    <footer className="main-footer bgc-blue rel z-1">
      <div className="container">
        <div className="support-join-area mb-80">
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-top-item">
                <div className="content text-white">
                  <h3>Need Any Support ?</h3>
                  <p>
                    We're here to help! Whether you have questions about our
                    services, need assistance?
                  </p>
                </div>
                <Link href="contact" className="icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-top-item ms-lg-auto">
                <div className="content text-white">
                  <h3>Join Our Team</h3>
                  <p>
                    Are you passionate about innovation and eager to make an
                    impact? we’re always looking.
                  </p>
                </div>
                <Link href="contact" className="icon">
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-25 justify-content-between">
          <div className="col-xl-3 col-sm-6">
            <div
              className="footer-widget footer-info"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-logo mb-30 text-start">
                 <div className="logo text-start">
                <Link href="/">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    title="Logo"
                    style={{ maxWidth: '140px' }}
                  /> <span style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
                    Pixelways
                    <span
                      style={{
                        position: 'absolute',
                        top: '-0.35em',
                        right: '-1.1em',
                        width: '1.1em',
                        height: '1.1em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #2563eb 80%, #3b82f6 100%)',
                        borderRadius: '50%',
                        boxShadow: '0 0 0.15em #2563eb, 0 0 0.3em #3b82f6',
                        zIndex: 2,
                      }}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        fill="none"
                        style={{ display: 'block' }}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          {/* Sun rays */}
                          {[...Array(8)].map((_, i) => {
                            const angle = (i * 45) * (Math.PI / 180);
                            const x1 = 16 + Math.cos(angle) * 13;
                            const y1 = 16 + Math.sin(angle) * 13;
                            const x2 = 16 + Math.cos(angle) * 15.5;
                            const y2 = 16 + Math.sin(angle) * 15.5;
                            return (
                              <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="#2563eb"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            );
                          })}
                          {/* Badge circle */}
                          <circle cx="16" cy="16" r="10" fill="#2563eb" stroke="#fff" strokeWidth="2" />
                          {/* Tick */}
                          <polyline
                            points="12,17 15,20 21,13"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </span>
                  </span>
                </Link>
                
                
              </div>
              </div>
              <div className="text mb-25">
                <p>
                  Our IT solutions are designed to empower businesses with the
                  tools technology they need today.
                </p>
              </div>
              <div className="info-item">
                <div className="icon">
                  <i className="far fa-phone-rotary" />
                </div>
                <div className="content">
                  Phone: <a href={`tel:${contactInfo.phone1}`}>{contactInfo.phone1}</a> / <a href={`tel:${contactInfo.phone2}`}>{contactInfo.phone2}</a>
                </div>
              </div>
              <div className="info-item">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <div className="content">
                  Office Location: {contactInfo.officeLocation}
                </div>
              </div>
              <div className="info-item">
                <div className="icon">
                  <i className="far fa-envelope" />
                </div>
                <div className="content">
                  Email Address: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-3 col-6">
            <div
              className="footer-widget footer-links ps-xl-5"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h5 className="footer-title">Quick Link</h5>
              <ul>
                <li>
                  <Link href="about">
                    <i className="far fa-angle-right" /> About Company
                  </Link>
                </li>
                <li>
                  <Link href="services">
                    <i className="far fa-angle-right" /> Our Services
                  </Link>
                </li>
                <li>
                  <Link href="services">
                    <i className="far fa-angle-right" /> Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="blog">
                    <i className="far fa-angle-right" /> Blog &amp; News
                  </Link>
                </li>
                <li>
                  <Link href="contact">
                    <i className="far fa-angle-right" /> Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-md-3 col-6">
            <div
              className="footer-widget footer-links ps-xl-5"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h5 className="footer-title">Services</h5>
              <ul>
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link href={`/services?service=${service.id}`} scroll={false}>
                      <i className="far fa-angle-right" /> {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div
              className="footer-widget newsletter-widget"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h5 className="footer-title">Newsletter</h5>
              <p>
                We deliver fresh content straight to your inbox join our
                community.
              </p>
              <form className="newsletter-form mt-30" action="#">
                <input type="email" placeholder="Email here" required />
                <button type="submit">
                  <i className="far fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom pt-30 pb-15">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>
                  Made with ❤️ by Hans Ade FT Pixelways Team
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <p>Copyright © 2025 All Rights Reserved</p>
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="about">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="about">Terms and Conditions</Link>
                </li>
                <li>
                  <Link href="about">Support</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="far fa-arrow-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const Footer3 = () => {
  return (
    <footer className="main-footer bgc-blue pt-80 rel z-1">
      <div className="container">
        <div className="row pb-15 justify-content-between">
          <div className="col-xl-3 col-sm-6">
            <div
              className="footer-widget footer-info"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-logo mb-30 text-start">
                 <div className="logo text-start">
                <Link href="/">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    title="Logo"
                    style={{ maxWidth: '140px' }}
                  /> <span style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
                    Pixelways
                    <span
                      style={{
                        position: 'absolute',
                        top: '-0.35em',
                        right: '-1.1em',
                        width: '1.1em',
                        height: '1.1em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #2563eb 80%, #3b82f6 100%)',
                        borderRadius: '50%',
                        boxShadow: '0 0 0.15em #2563eb, 0 0 0.3em #3b82f6',
                        zIndex: 2,
                      }}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        fill="none"
                        style={{ display: 'block' }}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          {/* Sun rays */}
                          {[...Array(8)].map((_, i) => {
                            const angle = (i * 45) * (Math.PI / 180);
                            const x1 = 16 + Math.cos(angle) * 13;
                            const y1 = 16 + Math.sin(angle) * 13;
                            const x2 = 16 + Math.cos(angle) * 15.5;
                            const y2 = 16 + Math.sin(angle) * 15.5;
                            return (
                              <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="#2563eb"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            );
                          })}
                          {/* Badge circle */}
                          <circle cx="16" cy="16" r="10" fill="#2563eb" stroke="#fff" strokeWidth="2" />
                          {/* Tick */}
                          <polyline
                            points="12,17 15,20 21,13"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </span>
                  </span>
                </Link>
                
                 
                
              </div>
              </div>
              <div className="text mb-25">
                <p>
                  Our IT solutions are designed to empower businesses with the
                  tools technology they need today.
                </p>
              </div>
              <div className="info-item">
                <div className="icon">
                  <i className="far fa-phone-rotary" />
                </div>
                <div className="content">
                  Phone: <a href={`tel:${contactInfo.phone1}`}>{contactInfo.phone1}</a> / <a href={`tel:${contactInfo.phone2}`}>{contactInfo.phone2}</a>
                </div>
              </div>
              <div className="info-item">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <div className="content">
                  Office Location: {contactInfo.officeLocation}
                </div>
              </div>
              <div className="info-item">
                <div className="icon">
                  <i className="far fa-envelope" />
                </div>
                <div className="content">
                  Email Address: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-3 col-6">
            <div
              className="footer-widget footer-links ps-xl-5"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h5 className="footer-title">Quick Link</h5>
              <ul>
                <li>
                  <Link href="about">
                    <i className="far fa-angle-right" /> About Company
                  </Link>
                </li>
                <li>
                  <Link href="services">
                    <i className="far fa-angle-right" /> Our Services
                  </Link>
                </li>
                <li>
                  <Link href="services">
                    <i className="far fa-angle-right" /> Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="blog">
                    <i className="far fa-angle-right" /> Blog &amp; News
                  </Link>
                </li>
                <li>
                  <Link href="contact">
                    <i className="far fa-angle-right" /> Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-md-3 col-6">
            <div
              className="footer-widget footer-links ps-xl-5"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h5 className="footer-title">Services</h5>
              <ul>
                {servicesData.map((service) => (
                  <li key={service.id}>
                    <Link href={`/services?service=${service.id}`} scroll={false}>
                      <i className="far fa-angle-right" /> {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6">
            <div
              className="footer-widget newsletter-widget"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h5 className="footer-title">Newsletter</h5>
              <p>
                We deliver fresh content straight to your inbox join our
                community.
              </p>
              <form className="newsletter-form mt-30" action="#">
                <input type="email" placeholder="Email here" required />
                <button type="submit">
                  <i className="far fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom style-two pb-60">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>
                  Made with ❤️ by Hans Ade FT Pixelways Team
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <p>Copyright © 2025 All Rights Reserved</p>
              <ul className="footer-bottom-nav">
                <li>
                  <Link href="about">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="about">Terms and Conditions</Link>
                </li>
                <li>
                  <Link href="about">Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
const Footer4 = () => {
  return (
    <footer className="main-footer footer-one rel z-1 mt-100">
      <div className="container">
        <div className="footer-newsletter text-white">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div
                className="section-title pt-30 rpt-0 rpb-10"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Get started today with 7 days free credits ?</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="form-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <form className="newsletter-form" action="#">
                  <input type="email" placeholder="Email Address" required />
                  <button type="submit">
                    <b>
                      Sign Up <i className="far fa-arrow-right" />
                    </b>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="footer-widget widget-about"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">About Company</h6>
              <p>
                Doloremque laudantium tota aperiam eaque abillo inventore
                architect beatae vitae dicta sunt explicabos
              </p>
              <div className="social-style-two mt-10">
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 order-xl-2">
            <div
              className="footer-widget widget-contact"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">Contact</h6>
              <ul>
                <li>
                  <i className="fal fa-map-marker-alt" /> {contactInfo.officeLocation}
                </li>
                <li>
                  <i className="fal fa-envelope" /> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </li>
                <li>
                  <i className="fal fa-phone" /> <a href={`tel:${contactInfo.phone1}`}>{contactInfo.phone1}</a> / <a href={`tel:${contactInfo.phone2}`}>{contactInfo.phone2}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Resources</h6>
                  <ul>
                    <li>
                      <Link href="shop">Product</Link>
                    </li>
                    <li>
                      <Link href="services">Services</Link>
                    </li>
                    <li>
                      <Link href="about">About Us</Link>
                    </li>
                    <li>
                      <Link href="services">Benefits</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Quick Link</h6>
                  <ul>
                    <li>
                      <Link href="services">Features</Link>
                    </li>
                    <li>
                      <Link href="pricing">Pricing Plan</Link>
                    </li>
                    <li>
                      <Link href="about">Best Program</Link>
                    </li>
                    <li>
                      <Link href="contact">Press Kit</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={150}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Company</h6>
                  <ul>
                    <li>
                      <Link href="about">About</Link>
                    </li>
                    <li>
                      <Link href="team">Team Member</Link>
                    </li>
                    <li>
                      <Link href="about">Reviews</Link>
                    </li>
                    <li>
                      <Link href="blog">Latest News</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-30 py-15">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div
                className="copyright-text pt-10 text-lg-start text-center"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <p>
                  Made with ❤️ by Hans Ade FT Pixelways Team
                </p>
              </div>
            </div>
            <p>Copyright © 2025 All Rights Reserved</p>
            <div className="col-xl-8 col-lg-6">
              <div
                className="footer-bottom-menu text-lg-end text-center"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <ul>
                  <li>
                    <Link href="faqs">Faqs</Link>
                  </li>
                  <li>
                    <Link href="about">Setting</Link>
                  </li>
                  <li>
                    <Link href="about">Privacy</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer5 = () => {
  return (
    <footer
      className="main-footer style-two bgc-black text-white bgp-bottom pt-250 rel z-1"
      style={{
        backgroundImage: "url(assets/images/background/footer-two.png)",
      }}
    >
      <div className="container container-1290 pb-50">
        <div className="row gap-140 justify-content-between">
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="footer-widget footer-text">
              <span className="h1">Let’s Develop Your New Website</span>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-6"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="footer-widget footer-contact">
              <p>Get in touch with our team</p>
              <div className="section-title">
                <h2>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </h2>
              </div>
              <div className="info-item">
                <div className="icon">
                  <i className="far fa-phone-rotary" />
                </div>
                <div className="content">
                  Phone: <a href={`tel:${contactInfo.phone1}`}>{contactInfo.phone1}</a> / <a href={`tel:${contactInfo.phone2}`}>{contactInfo.phone2}</a>
                </div>
              </div>
              <div className="info-item">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <div className="content">
                  Office Location: {contactInfo.officeLocation}
                </div>
              </div>
              <div className="social-style-two mt-10">
                <Link href="contact">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link href="contact">
                  <i className="fab fa-instagram" />
                </Link>
                <Link href="contact">
                  <i className="fab fa-dribbble" />
                </Link>
                <Link href="contact">
                  <i className="fab fa-behance" />
                </Link>
                <Link href="contact">
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-1290">
        <div className="footer-bottom bordered-top pt-30 pb-10">
          <div className="row">
            <div className="col-md-3">
              <div className="logo mb-15 text-start">
                <img src="/logo.png" alt="Logo" /> <span style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
                    Pixelways
                    <span
                      style={{
                        position: 'absolute',
                        top: '-0.35em',
                        right: '-1.1em',
                        width: '1.1em',
                        height: '1.1em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #2563eb 80%, #3b82f6 100%)',
                        borderRadius: '50%',
                        boxShadow: '0 0 0.15em #2563eb, 0 0 0.3em #3b82f6',
                        zIndex: 2,
                      }}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        fill="none"
                        style={{ display: 'block' }}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          {/* Sun rays */}
                          {[...Array(8)].map((_, i) => {
                            const angle = (i * 45) * (Math.PI / 180);
                            const x1 = 16 + Math.cos(angle) * 13;
                            const y1 = 16 + Math.sin(angle) * 13;
                            const x2 = 16 + Math.cos(angle) * 15.5;
                            const y2 = 16 + Math.sin(angle) * 15.5;
                            return (
                              <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="#2563eb"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            );
                          })}
                          {/* Badge circle */}
                          <circle cx="16" cy="16" r="10" fill="#2563eb" stroke="#fff" strokeWidth="2" />
                          {/* Tick */}
                          <polyline
                            points="12,17 15,20 21,13"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </span>
                  </span>
              </div>
            </div>
            <div className="col-md-9 text-center text-lg-end">
              <div className="copyright-text text-center text-md-end">
                <p>
                  Made with ❤️ by Hans Ade FT Pixelways Team
                </p>
              </div>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <i className="far fa-arrow-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const Footer6 = () => {
  return (
    <footer className="main-footer bgc-gray home-6 footer-white rel z-1 mt-80">
      <div className="footer-cta-wrap">
        <div className="container">
          <div
            className="footer-cta-inner bgs-cover"
            style={{
              backgroundImage: "url(assets/images/footer/footer-cta-bg.jpg)",
            }}
          >
            <div className="section-title wow fadeInLeft delay-0-2s">
              <span className="sub-title">Need Any Consultations ?</span>
              <h2>We’re Ready to Growth IT Business</h2>
            </div>
            <Link
              href="contact"
              className="theme-btn style-three wow fadeInRight delay-0-2s"
            >
              Get Free Quote <i className="fas fa-long-arrow-right" />
            </Link>
              <div className="hotline wow fadeInRight delay-0-2s">
                <i className="fas fa-phone" />
                <div className="content">
                  <span>Hotline</span>
                  <br />
                  <a href={`tel:${contactInfo.phone1}`}>{contactInfo.phone1}</a> / <a href={`tel:${contactInfo.phone2}`}>{contactInfo.phone2}</a>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row medium-gap">
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget widget_about wow fadeInUp delay-0-2s">
              <div className="footer-square-logo mb-30 text-start">
                <Link href="/">
                  <img
                    src="/logo.png"
                    alt="Logo"
                  /> <span style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
                    Pixelways
                    <span
                      style={{
                        position: 'absolute',
                        top: '-0.35em',
                        right: '-1.1em',
                        width: '1.1em',
                        height: '1.1em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #2563eb 80%, #3b82f6 100%)',
                        borderRadius: '50%',
                        boxShadow: '0 0 0.15em #2563eb, 0 0 0.3em #3b82f6',
                        zIndex: 2,
                      }}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 32 32"
                        fill="none"
                        style={{ display: 'block' }}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          {/* Sun rays */}
                          {[...Array(8)].map((_, i) => {
                            const angle = (i * 45) * (Math.PI / 180);
                            const x1 = 16 + Math.cos(angle) * 13;
                            const y1 = 16 + Math.sin(angle) * 13;
                            const x2 = 16 + Math.cos(angle) * 15.5;
                            const y2 = 16 + Math.sin(angle) * 15.5;
                            return (
                              <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="#2563eb"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            );
                          })}
                          {/* Badge circle */}
                          <circle cx="16" cy="16" r="10" fill="#2563eb" stroke="#fff" strokeWidth="2" />
                          {/* Tick */}
                          <polyline
                            points="12,17 15,20 21,13"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
              <p>
                Sed perspiciatis unde omnste natus error voluptatem accusanti
                doloreue audantium totamrem aeriam.
              </p>
              <div className="info-item">
                <div className="icon">
                  <i className="far fa-phone-rotary" />
                </div>
                <div className="content">
                  Phone: <a href={`tel:${contactInfo.phone1}`}>{contactInfo.phone1}</a> / <a href={`tel:${contactInfo.phone2}`}>{contactInfo.phone2}</a>
                </div>
              </div>
              <div className="info-item">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <div className="content">
                  Office Location: {contactInfo.officeLocation}
                </div>
              </div>
              <div className="info-item">
                <div className="icon">
                  <i className="far fa-envelope" />
                </div>
                <div className="content">
                  Email Address: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </div>
              <Link href="about" className="read-more">
                Learn More Us <i className="fas fa-long-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 order-xl-2">
            <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
              <h4 className="footer-title">Newsletter</h4>
              <p>
                Sed perspiciatis unde omnste natus error voluptatem accusante.
              </p>
              <form action="#">
                <label htmlFor="email">
                  <i className="far fa-envelope" />
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="hello@pixelways.co"
                  required
                />
                <button>Sign Up</button>
              </form>
              <h5 className="text-white">Follow Us</h5>
              <div className="social-style-one">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-3s">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="list-style-four">
                    <li>
                      <Link href="about">Company History</Link>
                    </li>
                    <li>
                      <Link href="about">About Company</Link>
                    </li>
                    <li>
                      <Link href="services">Latest Services</Link>
                    </li>
                    <li>
                      <Link href="project-grid">Popular Works</Link>
                    </li>
                    <li>
                      <Link href="faqs">Asked Questions</Link>
                    </li>
                    <li>
                      <Link href="blog">Blog &amp; News</Link>
                    </li>
                    <li>
                      <Link href="contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                  <h4 className="footer-title">Services</h4>
                  <ul className="list-style-four">
                    {servicesData.map((service) => (
                      <li key={service.id}>
                        <Link href={`/services?service=${service.id}`} scroll={false}>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-5s">
                  <h4 className="footer-title">Support</h4>
                  <ul className="list-style-four">
                    <li>
                      <Link href="contact">Start Here</Link>
                    </li>
                    <li>
                      <Link href="about">Style guide</Link>
                    </li>
                    <li>
                      <Link href="404">404 Not Found</Link>
                    </li>
                    <li>
                      <Link href="contact">Password Protected</Link>
                    </li>
                    <li>
                      <Link href="contact">Licenses</Link>
                    </li>
                    <li>
                      <Link href="contact">Changelog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bgc-black mt-20 pt-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="footer-bottom-menu mb-10 wow fadeInRight delay-0-2s">
                <ul>
                  <li>
                    <a href="#">Buy Template</a>
                  </li>
                  <li>
                    <a href="#">Version 1.2</a>
                  </li>
                  <li>
                    <a href="#">Image Licenses</a>
                  </li>
                  <li>
                    <a href="#">Instructions</a>
                  </li>
                  <li>
                    <a href="#">Visit My Templates</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="copyright-text text-lg-end wow fadeInLeft delay-0-2s">
                <p>Made with ❤️ by Hans Ade FT Pixelways Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shapes">
        <img
          className="shape one"
          src="assets/images/footer/footer-bg-weve-shape.png"
          alt="Shape"
        />
        <img
          className="shape two"
          src="assets/images/footer/footer-bg-line-shape.png"
          alt="Shape"
        />
        <img
          className="shape three wow fadeInRight delay-0-8s"
          src="assets/images/footer/footer-right.png"
          alt="Shape"
        />
      </div>
    </footer>
  );
};
