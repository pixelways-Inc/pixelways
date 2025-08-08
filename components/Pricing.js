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
                    <span className="sub-title mb-10">Pricing Package</span>
                    <h2>
                      Find the Right Solution for Your Budget Custom Plans for
                      Every Stage of Your Journey
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
                    <div
                      className="col-lg-4 col-md-6"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className={`pricing-item ${itemStyle}`}>
                        <h4 className="title">Starter Package</h4>
                        <div className="text">
                          Small businesses and startups
                        </div>
                        <span className="price">
                          $5,000<span className="after-text">/per month</span>
                        </span>
                        <h4 className="included">Included:</h4>
                        <ul className="list-style-one">
                          <li>
                            <i className="far fa-check" /> Custom software
                            development
                          </li>
                          <li>
                            <i className="far fa-check" /> Requirement analysis
                            &amp; planning
                          </li>
                          <li>
                            <i className="far fa-check" /> Support and
                            maintenance
                          </li>
                          <li>
                            <i className="far fa-check" /> Integration
                            third-party services
                          </li>
                          <li>
                            <i className="far fa-check" /> Data backups and
                            advanced
                          </li>
                          <li>
                            <i className="far fa-check" /> Analytics and
                            reporting features
                          </li>
                        </ul>
                        <Link
                          href="pricing"
                          className="theme-btn"
                          data-hover="Choose Package"
                        >
                          <span>Choose Package</span>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className={`pricing-item ${itemStyle}`}>
                        <span className="badge">popular</span>
                        <h4 className="title">Enterprise Package</h4>
                        <div className="text">
                          Large businesses and requirements
                        </div>
                        <span className="price">
                          $10,000<span className="after-text">/per month</span>
                        </span>
                        <h4 className="included">Included:</h4>
                        <ul className="list-style-one">
                          <li>
                            <i className="far fa-check" /> Custom software
                            development
                          </li>
                          <li>
                            <i className="far fa-check" /> Dedicated project
                            manager
                          </li>
                          <li>
                            <i className="far fa-check" /> Pro Support and
                            maintenance
                          </li>
                          <li>
                            <i className="far fa-check" /> Advanced
                            integrations,
                          </li>
                          <li>
                            <i className="far fa-check" /> Comprehensive data
                            security
                          </li>
                          <li>
                            <i className="far fa-check" /> Advanced analytics
                            and BI tools
                          </li>
                        </ul>
                        <Link
                          href="pricing"
                          className="theme-btn"
                          data-hover="Choose Package"
                        >
                          <span>Choose Package</span>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6"
                      data-aos="fade-up"
                      data-aos-delay={200}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className={`pricing-item ${itemStyle}`}>
                        <h4 className="title">Custom Package</h4>
                        <div className="text">
                          Businesses with unique, large-scale
                        </div>
                        <span className="price">
                          $23,000<span className="after-text">/per month</span>
                        </span>
                        <h4 className="included">Included:</h4>
                        <ul className="list-style-one">
                          <li>
                            <i className="far fa-check" /> Fully software
                            development
                          </li>
                          <li>
                            <i className="far fa-check" /> Management and team
                            allocation
                          </li>
                          <li>
                            <i className="far fa-check" /> Priority support and
                            maintenance
                          </li>
                          <li>
                            <i className="far fa-check" /> Custom integrations
                          </li>
                          <li>
                            <i className="far fa-check" /> High-level data
                            security
                          </li>
                          <li>
                            <i className="far fa-check" /> Ongoing analytics and
                            optimization
                          </li>
                        </ul>
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
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="yearly">
                  <div className="row no-gap justify-content-center">
                    <div
                      className="col-lg-4 col-md-6"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="pricing-item">
                        <h4 className="title">Starter Package</h4>
                        <div className="text">
                          Small businesses and startups
                        </div>
                        <span className="price">
                          $8,000<span className="after-text">/per month</span>
                        </span>
                        <h4 className="included">Included:</h4>
                        <ul className="list-style-one">
                          <li>
                            <i className="far fa-check" /> Custom software
                            development
                          </li>
                          <li>
                            <i className="far fa-check" /> Requirement analysis
                            &amp; planning
                          </li>
                          <li>
                            <i className="far fa-check" /> Support and
                            maintenance
                          </li>
                          <li>
                            <i className="far fa-check" /> Integration
                            third-party services
                          </li>
                          <li>
                            <i className="far fa-check" /> Data backups and
                            advanced
                          </li>
                          <li>
                            <i className="far fa-check" /> Analytics and
                            reporting features
                          </li>
                        </ul>
                        <Link
                          href="contact"
                          className="theme-btn"
                          data-hover="Choose Package"
                        >
                          <span>Choose Package</span>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                      data-aos-delay={50}
                    >
                      <div className="pricing-item">
                        <span className="badge">popular</span>
                        <h4 className="title">Enterprise Package</h4>
                        <div className="text">
                          Large businesses and requirements
                        </div>
                        <span className="price">
                          $30,000<span className="after-text">/per month</span>
                        </span>
                        <h4 className="included">Included:</h4>
                        <ul className="list-style-one">
                          <li>
                            <i className="far fa-check" /> Custom software
                            development
                          </li>
                          <li>
                            <i className="far fa-check" /> Dedicated project
                            manager
                          </li>
                          <li>
                            <i className="far fa-check" /> Pro Support and
                            maintenance
                          </li>
                          <li>
                            <i className="far fa-check" /> Advanced
                            integrations,
                          </li>
                          <li>
                            <i className="far fa-check" /> Comprehensive data
                            security
                          </li>
                          <li>
                            <i className="far fa-check" /> Advanced analytics
                            and BI tools
                          </li>
                        </ul>
                        <Link
                          href="contact"
                          className="theme-btn"
                          data-hover="Choose Package"
                        >
                          <span>Choose Package</span>
                        </Link>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                      data-aos-delay={100}
                    >
                      <div className="pricing-item">
                        <h4 className="title">Custom Package</h4>
                        <div className="text">
                          Businesses with unique, large-scale
                        </div>
                        <span className="price">
                          $75,000<span className="after-text">/per month</span>
                        </span>
                        <h4 className="included">Included:</h4>
                        <ul className="list-style-one">
                          <li>
                            <i className="far fa-check" /> Fully software
                            development
                          </li>
                          <li>
                            <i className="far fa-check" /> Management and team
                            allocation
                          </li>
                          <li>
                            <i className="far fa-check" /> Priority support and
                            maintenance
                          </li>
                          <li>
                            <i className="far fa-check" /> Custom integrations
                          </li>
                          <li>
                            <i className="far fa-check" /> High-level data
                            security
                          </li>
                          <li>
                            <i className="far fa-check" /> Ongoing analytics and
                            optimization
                          </li>
                        </ul>
                        <Link
                          href="contact"
                          className="theme-btn"
                          data-hover="Choose Package"
                        >
                          <span>Choose Package</span>
                        </Link>
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
                <span className="subtitle mt-10 mb-15">Pricing Package</span>
                <h2>Premium Web Design Services Without the Premium Price</h2>
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
                      Basic plan need service without added complexity expense
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
                      Standard plan to need services without complexity expense
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
                      Premium plan to need services added complexity expense
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
                      Basic plan need service without added complexity expense
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
                      Basic plan need service without added complexity expense
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
                      Standard plan to need services without complexity expense
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
                      Premium plan to need services added complexity expense
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
                      Basic plan need service without added complexity expense
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
