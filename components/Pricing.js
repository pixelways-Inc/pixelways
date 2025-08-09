"use client";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
const Pricing = ({
  containerClass = "pricing-area rel z-1",
  pricingClass = "pricing-wrap bgc-black pt-130 rpt-100 pb-100 rpb-70",
  textColor = "text-white",
  style = "style-one",
  itemStyle = "style-one",
}) => {
  return (
    <section id="pricing" className={containerClass}>
      <div className="container-fluid">
        <div className={pricingClass}>
          <div className="container">
            <Tab.Container defaultActiveKey={"monthly"}>
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-9">
                  <div
                    className={`section-title text-center ${textColor} mb-70 rmb-50`}
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <span className="sub-title mb-10">Flexible Pricing</span>
                    <h2>
                      Find the Right Digital Solution for Your Budget
                    </h2>
                  </div>
                </div>
                <div
                  className="col-lg-7 text-center"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <Nav
                    as={"ul"}
                    className={`nav pricing-tab mb-50 ${style}`}
                    role="tablist"
                  >
                    <Nav.Item as={"li"}>
                      <Nav.Link as={"button"} eventKey="monthly">
                        Monthly
                      </Nav.Link>
                    </Nav.Item>
                    <li>
                      <Nav.Link as={"button"} eventKey="yearly">
                        Yearly
                      </Nav.Link>
                    </li>
                  </Nav>
                </div>
              </div>
              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="monthly">
                  <div className="row no-gap justify-content-center">
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                      <div className={`pricing-item ${itemStyle}`}>
                        <h4 className="title">Starter Website</h4>
                        <div className="text">Perfect for startups and small businesses</div>
                        <span className="price">$500<span className="after-text">/one-time</span></span>
                        <h4 className="included">Included:</h4>
                        <ul className="list-style-one">
                          <li><i className="far fa-check" /> Up to 5 pages</li>
                          <li><i className="far fa-check" /> Responsive design</li>
                          <li><i className="far fa-check" /> Basic SEO setup</li>
                          <li><i className="far fa-check" /> Contact form</li>
                          <li><i className="far fa-check" /> 1 month free support</li>
                        </ul>
                        <Link href="/contact" className="theme-btn" data-hover="Choose Package"><span>Choose Package</span></Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100} data-aos-duration={1500} data-aos-offset={50}>
                      <div className={`pricing-item ${itemStyle}`}>
                        <span className="badge">popular</span>
                        <h4 className="title">Growth Website</h4>
                        <div className="text">For growing businesses needing more features</div>
                        <span className="price">$2,000<span className="after-text">/one-time</span></span>
                        <h4 className="included">Included:</h4>
                        <ul className="list-style-one">
                          <li><i className="far fa-check" /> Up to 15 pages</li>
                          <li><i className="far fa-check" /> Premium design</li>
                          <li><i className="far fa-check" /> Advanced SEO & analytics</li>
                          <li><i className="far fa-check" /> Blog & integrations</li>
                          <li><i className="far fa-check" /> 3 months free support</li>
                        </ul>
                        <Link href="/contact" className="theme-btn" data-hover="Choose Package"><span>Choose Package</span></Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200} data-aos-duration={1500} data-aos-offset={50}>
                      <div className={`pricing-item ${itemStyle}`}>
                        <h4 className="title">Pro Website & App</h4>
                        <div className="text">Web + Mobile app for ambitious brands</div>
                        <span className="price">$4,000<span className="after-text">/one-time</span></span>
                        <h4 className="included">Included:</h4>
                        <ul className="list-style-one">
                          <li><i className="far fa-check" /> Website + iOS/Android app</li>
                          <li><i className="far fa-check" /> Up to 25 pages/screens</li>
                          <li><i className="far fa-check" /> Custom integrations</li>
                          <li><i className="far fa-check" /> Cloud hosting setup</li>
                          <li><i className="far fa-check" /> 6 months free support</li>
                        </ul>
                        <Link href="/contact" className="theme-btn" data-hover="Choose Package"><span>Choose Package</span></Link>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="yearly">
                  <div className="row no-gap justify-content-center">
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                      <div className="pricing-item">
                        <h4 className="title">Starter Website</h4>
                        <div className="text">Perfect for startups and small businesses</div>
                        <span className="price">$1,200<span className="after-text">/year</span></span>
                        <h4 className="included">Included:</h4>
                        <ul className="list-style-one">
                          <li><i className="far fa-check" /> Up to 5 pages</li>
                          <li><i className="far fa-check" /> Responsive design</li>
                          <li><i className="far fa-check" /> Basic SEO setup</li>
                          <li><i className="far fa-check" /> Contact form</li>
                          <li><i className="far fa-check" /> 1 month free support</li>
                        </ul>
                        <Link href="/contact" className="theme-btn" data-hover="Choose Package"><span>Choose Package</span></Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50} data-aos-delay={50}>
                      <div className="pricing-item">
                        <span className="badge">popular</span>
                        <h4 className="title">Growth Website</h4>
                        <div className="text">For growing businesses needing more features</div>
                        <span className="price">$4,800<span className="after-text">/year</span></span>
                        <h4 className="included">Included:</h4>
                        <ul className="list-style-one">
                          <li><i className="far fa-check" /> Up to 15 pages</li>
                          <li><i className="far fa-check" /> Premium design</li>
                          <li><i className="far fa-check" /> Advanced SEO & analytics</li>
                          <li><i className="far fa-check" /> Blog & integrations</li>
                          <li><i className="far fa-check" /> 3 months free support</li>
                        </ul>
                        <Link href="/contact" className="theme-btn" data-hover="Choose Package"><span>Choose Package</span></Link>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50} data-aos-delay={100}>
                      <div className="pricing-item">
                        <h4 className="title">Pro Website & App</h4>
                        <div className="text">Web + Mobile app for ambitious brands</div>
                        <span className="price">$8,000<span className="after-text">/year</span></span>
                        <h4 className="included">Included:</h4>
                        <ul className="list-style-one">
                          <li><i className="far fa-check" /> Website + iOS/Android app</li>
                          <li><i className="far fa-check" /> Up to 25 pages/screens</li>
                          <li><i className="far fa-check" /> Custom integrations</li>
                          <li><i className="far fa-check" /> Cloud hosting setup</li>
                          <li><i className="far fa-check" /> 6 months free support</li>
                        </ul>
                        <Link href="/contact" className="theme-btn" data-hover="Choose Package"><span>Choose Package</span></Link>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;

export const Pricing2 = () => {
  return (
    <section
      id="pricing"
      className="latest-work-area radius-shape-top pt-130 rpt-100 pb-100 rpb-70 rel z-2"
      style={{
        backgroundImage: "url(assets/images/background/hero-five-bg.png)",
      }}
    >
      <div className="container container-1290">
        <Tab.Container defaultActiveKey="monthly">
          <div className="row justify-content-center text-white">
            <div
              className="col-xl-6 co-lg-8 col-md-10 text-center"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-50">
                <span className="subtitle mt-10 mb-15">Transparent Pricing</span>
                <h2>Tailored Web Design Services for Every Business</h2>
              </div>
            </div>
            <div
              className="col-lg-7 text-center"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Nav as="ul" className="nav pricing-tab-two mb-65" role="tablist">
                <Nav.Item as="li">
                  <Nav.Link as={"button"} eventKey="monthly">
                    Monthly
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link as={"button"} eventKey="yearly">
                    Yearly
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <span className="save-percent">Save 25%</span>
            </div>
          </div>
          <Tab.Content className="tab-content">
            <Tab.Pane className="tab-pane fade" eventKey="monthly">
              <div className="row justify-content-center">
                <div
                  className="col-xl-3 col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="pricing-two-item">
                    <h6 className="title">Regular</h6>
                    <div className="text">
                      Ideal for small businesses and startups seeking essential web presence without complexity.
                    </div>
                    <span className="price">
                      $15<span className="after-text">/monthly</span>
                    </span>
                    <Link
                      href="contact"
                      className="theme-btn style-two"
                      data-hover="Choose Package"
                    >
                      <span>Choose Package</span>
                    </Link>
                    <ul className="list-style-three small">
                      <li>Up to 5-7 pages design</li>
                      <li>1 GB storage per site</li>
                      <li className="hide">Standard theme customization</li>
                      <li className="hide">Social media integration</li>
                      <li className="hide">Basic SEO setup</li>
                      <li className="hide">1 round of revisions</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                  data-aos-delay={50}
                >
                  <div className="pricing-two-item">
                    <h6 className="title">Standard</h6>
                    <div className="text">
                      Comprehensive features for growing businesses, balancing functionality and cost-effectiveness.
                    </div>
                    <span className="price">
                      $29<span className="after-text">/monthly</span>
                    </span>
                    <Link
                      href="contact"
                      className="theme-btn style-two"
                      data-hover="Choose Package"
                    >
                      <span>Choose Package</span>
                    </Link>
                    <ul className="list-style-three small">
                      <li>Up to 5-7 pages design</li>
                      <li>1 GB storage per site</li>
                      <li>Standard theme customization</li>
                      <li className="hide">Social media integration</li>
                      <li className="hide">Basic SEO setup</li>
                      <li className="hide">1 round of revisions</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                  data-aos-delay={100}
                >
                  <div className="pricing-two-item">
                    <span className="badge">popular</span>
                    <h6 className="title">Premium</h6>
                    <div className="text">
                      Advanced solutions for established businesses requiring robust features and enhanced performance.
                    </div>
                    <span className="price">
                      $93<span className="after-text">/monthly</span>
                    </span>
                    <Link
                      href="contact"
                      className="theme-btn style-two"
                      data-hover="Choose Package"
                    >
                      <span>Choose Package</span>
                    </Link>
                    <ul className="list-style-three small">
                      <li>Up to 5-7 pages design</li>
                      <li>1 GB storage per site</li>
                      <li>Standard theme customization</li>
                      <li>Social media integration</li>
                      <li>Basic SEO setup</li>
                      <li className="hide">1 round of revisions</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                  data-aos-delay={150}
                >
                  <div className="pricing-two-item">
                    <h6 className="title">Diamond</h6>
                    <div className="text">
                      Elite-tier services for enterprises demanding custom, high-performance, and fully integrated web solutions.
                    </div>
                    <span className="price">
                      $107<span className="after-text">/monthly</span>
                    </span>
                    <Link
                      href="contact"
                      className="theme-btn style-two"
                      data-hover="Choose Package"
                    >
                      <span>Choose Package</span>
                    </Link>
                    <ul className="list-style-three small">
                      <li>Up to 5-7 pages design</li>
                      <li>1 GB storage per site</li>
                      <li>Standard theme customization</li>
                      <li>Social media integration</li>
                      <li>Basic SEO setup</li>
                      <li>1 round of revisions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane className="tab-pane fade" eventKey="yearly">
              <div className="row justify-content-center">
                <div
                  className="col-xl-3 col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="pricing-two-item">
                    <h6 className="title">Regular</h6>
                    <div className="text">
                      Ideal for small businesses and startups seeking essential web presence without complexity.
                    </div>
                    <span className="price">
                      $15<span className="after-text">/yearly</span>
                    </span>
                    <Link
                      href="contact"
                      className="theme-btn style-two"
                      data-hover="Choose Package"
                    >
                      <span>Choose Package</span>
                    </Link>
                    <ul className="list-style-three small">
                      <li>Up to 5-7 pages design</li>
                      <li>1 GB storage per site</li>
                      <li className="hide">Standard theme customization</li>
                      <li className="hide">Social media integration</li>
                      <li className="hide">Basic SEO setup</li>
                      <li className="hide">1 round of revisions</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                  data-aos-delay={50}
                >
                  <div className="pricing-two-item">
                    <h6 className="title">Standard</h6>
                    <div className="text">
                      Comprehensive features for growing businesses, balancing functionality and cost-effectiveness.
                    </div>
                    <span className="price">
                      $29<span className="after-text">/yearly</span>
                    </span>
                    <Link
                      href="contact"
                      className="theme-btn style-two"
                      data-hover="Choose Package"
                    >
                      <span>Choose Package</span>
                    </Link>
                    <ul className="list-style-three small">
                      <li>Up to 5-7 pages design</li>
                      <li>1 GB storage per site</li>
                      <li>Standard theme customization</li>
                      <li className="hide">Social media integration</li>
                      <li className="hide">Basic SEO setup</li>
                      <li className="hide">1 round of revisions</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                  data-aos-delay={100}
                >
                  <div className="pricing-two-item">
                    <span className="badge">popular</span>
                    <h6 className="title">Premium</h6>
                    <div className="text">
                      Advanced solutions for established businesses requiring robust features and enhanced performance.
                    </div>
                    <span className="price">
                      $93<span className="after-text">/yearly</span>
                    </span>
                    <Link
                      href="contact"
                      className="theme-btn style-two"
                      data-hover="Choose Package"
                    >
                      <span>Choose Package</span>
                    </Link>
                    <ul className="list-style-three small">
                      <li>Up to 5-7 pages design</li>
                      <li>1 GB storage per site</li>
                      <li>Standard theme customization</li>
                      <li>Social media integration</li>
                      <li>Basic SEO setup</li>
                      <li className="hide">1 round of revisions</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                  data-aos-delay={150}
                >
                  <div className="pricing-two-item">
                    <h6 className="title">Diamond</h6>
                    <div className="text">
                      Elite-tier services for enterprises demanding custom, high-performance, and fully integrated web solutions.
                    </div>
                    <span className="price">
                      $107<span className="after-text">/yearly</span>
                    </span>
                    <Link
                      href="contact"
                      className="theme-btn style-two"
                      data-hover="Choose Package"
                    >
                      <span>Choose Package</span>
                    </Link>
                    <ul className="list-style-three small">
                      <li>Up to 5-7 pages design</li>
                      <li>1 GB storage per site</li>
                      <li>Standard theme customization</li>
                      <li>Social media integration</li>
                      <li>Basic SEO setup</li>
                      <li>1 round of revisions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};
