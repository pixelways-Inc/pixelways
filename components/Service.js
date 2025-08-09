"use client";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const Service = ({ style }) => {
  const [toggle, setToggle] = useState(1);
  return (
    <section className="service-area rel z-1">
      <div className="container-fluid">
        <div className={`services-wrap bgc-gray py-130 rpy-100 ${style}`}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div
                  className="section-title text-center mb-65"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h2>Our Comprehensive Digital Solutions</h2>
                </div>
              </div>
            </div>
            <Accordion
              defaultActiveKey="serviceCollapseOne"
              className="accordion service-accordion"
              id="service-accordion"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              {/* Service Category Accordions - Auto-generated from README */}
              {/* 1. Software Development Services */}
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    eventKey="serviceCollapseOne"
                    className={`accordion-button ${toggle == 1 ? "" : "collapsed"}`}
                    onClick={() => setToggle(toggle == 1 ? 0 : 1)}
                  >
                    <span className="step">01</span>
                    <span className="title">Software Development Services</span>
                    <span className="icon first"><i className="far fa-arrow-right" /></span>
                    <span className="icon second"><i className="far fa-times-circle" /></span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="serviceCollapseOne" data-bs-parent="#service-accordion">
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img src="https://api.a0.dev/assets/image?text=custom+software+development+Pixelways+Solution&aspect=1:1&seed=service1" alt="Service" />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <ul>
                            <li>Custom Software Development (Web, Mobile, Desktop)</li>
                            <li>API Development & System Integration</li>
                            <li>SaaS Product Development (Subscription-based platforms)</li>
                            <li>MVP Development for Startups</li>
                            <li>Code Auditing & Optimization</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              {/* 2. UI/UX Design & Frontend Development */}
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    eventKey="serviceCollapseTwo"
                    className={`accordion-button ${toggle == 2 ? "" : "collapsed"}`}
                    onClick={() => setToggle(toggle == 2 ? 0 : 2)}
                  >
                    <span className="step">02</span>
                    <span className="title">UI/UX Design & Frontend Development</span>
                    <span className="icon first"><i className="far fa-arrow-right" /></span>
                    <span className="icon second"><i className="far fa-times-circle" /></span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="serviceCollapseTwo">
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img src="https://api.a0.dev/assets/image?text=UI+UX+design+Pixelways+Solution&aspect=1:1&seed=service2" alt="Service" />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <ul>
                            <li>UI/UX Wireframing & Prototyping (Figma, Adobe XD)</li>
                            <li>Responsive Web Design</li>
                            <li>Frontend Framework Development (React, Vue, Next.js)</li>
                            <li>Accessibility Compliance (WCAG)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              {/* 3. Cloud & Infrastructure Solutions */}
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    eventKey="serviceCollapseThree"
                    className={`accordion-button ${toggle == 3 ? "" : "collapsed"}`}
                    onClick={() => setToggle(toggle == 3 ? 0 : 3)}
                  >
                    <span className="step">03</span>
                    <span className="title">Cloud & Infrastructure Solutions</span>
                    <span className="icon first"><i className="far fa-arrow-right" /></span>
                    <span className="icon second"><i className="far fa-times-circle" /></span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="serviceCollapseThree" data-bs-parent="#service-accordion">
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img src="https://api.a0.dev/assets/image?text=cloud+infrastructure+Pixelways+Solution&aspect=1:1&seed=service3" alt="Service" />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <ul>
                            <li>Cloud Setup (AWS, Azure, GCP)</li>
                            <li>Cloud Migration & Optimization</li>
                            <li>Serverless Architecture (Lambda, Cloud Functions)</li>
                            <li>DevOps & CI/CD Pipeline Automation</li>
                            <li>Kubernetes & Dockerized Deployments</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              {/* 4. AI, Data & Analytics */}
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    eventKey="serviceCollapseFour"
                    className={`accordion-button ${toggle == 4 ? "" : "collapsed"}`}
                    onClick={() => setToggle(toggle == 4 ? 0 : 4)}
                  >
                    <span className="step">04</span>
                    <span className="title">AI, Data & Analytics</span>
                    <span className="icon first"><i className="far fa-arrow-right" /></span>
                    <span className="icon second"><i className="far fa-times-circle" /></span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="serviceCollapseFour" data-bs-parent="#service-accordion">
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img src="https://api.a0.dev/assets/image?text=AI+data+analytics+Pixelways+Solution&aspect=1:1&seed=service4" alt="Service" />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <ul>
                            <li>Data Engineering (ETL Pipelines, Warehousing)</li>
                            <li>AI/ML Integration (Chatbots, Predictive Analytics)</li>
                            <li>Business Intelligence Dashboards (Tableau, Power BI)</li>
                            <li>Natural Language Processing (NLP)</li>
                            <li>Data Visualization & Reporting</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              {/* 5. Security & Compliance */}
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    eventKey="serviceCollapseFive"
                    className={`accordion-button ${toggle == 5 ? "" : "collapsed"}`}
                    onClick={() => setToggle(toggle == 5 ? 0 : 5)}
                  >
                    <span className="step">05</span>
                    <span className="title">Security & Compliance</span>
                    <span className="icon first"><i className="far fa-arrow-right" /></span>
                    <span className="icon second"><i className="far fa-times-circle" /></span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="serviceCollapseFive" data-bs-parent="#service-accordion">
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img src="https://api.a0.dev/assets/image?text=security+compliance+Pixelways+Solution&aspect=1:1&seed=service5" alt="Service" />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <ul>
                            <li>Application Penetration Testing</li>
                            <li>Data Encryption & Secure Storage</li>
                            <li>Security Audits (OWASP, ISO27001 readiness)</li>
                            <li>GDPR / HIPAA Compliance Implementation</li>
                            <li>Secure DevOps Integration (DevSecOps)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              {/* 6. Consulting & Technical Advisory */}
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    eventKey="serviceCollapseSix"
                    className={`accordion-button ${toggle == 6 ? "" : "collapsed"}`}
                    onClick={() => setToggle(toggle == 6 ? 0 : 6)}
                  >
                    <span className="step">06</span>
                    <span className="title">Consulting & Technical Advisory</span>
                    <span className="icon first"><i className="far fa-arrow-right" /></span>
                    <span className="icon second"><i className="far fa-times-circle" /></span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="serviceCollapseSix" data-bs-parent="#service-accordion">
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img src="https://api.a0.dev/assets/image?text=consulting+advisory+Pixelways+Solution&aspect=1:1&seed=service6" alt="Service" />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <ul>
                            <li>CTO-as-a-Service</li>
                            <li>System Architecture Consulting</li>
                            <li>Technology Stack Evaluation</li>
                            <li>Product Roadmap Planning</li>
                            <li>Digital Transformation Strategy</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              {/* 7. E-commerce & CMS Solutions */}
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    eventKey="serviceCollapseSeven"
                    className={`accordion-button ${toggle == 7 ? "" : "collapsed"}`}
                    onClick={() => setToggle(toggle == 7 ? 0 : 7)}
                  >
                    <span className="step">07</span>
                    <span className="title">E-commerce & CMS Solutions</span>
                    <span className="icon first"><i className="far fa-arrow-right" /></span>
                    <span className="icon second"><i className="far fa-times-circle" /></span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="serviceCollapseSeven" data-bs-parent="#service-accordion">
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img src="https://api.a0.dev/assets/image?text=ecommerce+cms+Pixelways+Solution&aspect=1:1&seed=service7" alt="Service" />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <ul>
                            <li>Shopify / WooCommerce Store Development</li>
                            <li>Headless E-commerce (Commerce.js, Medusa)</li>
                            <li>Payment Gateway Integration (Stripe, PayPal, Square)</li>
                            <li>CMS Development (WordPress, Webflow, Strapi)</li>
                            <li>Performance & SEO Optimization</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              {/* 8. Maintenance & Technical Support */}
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    eventKey="serviceCollapseEight"
                    className={`accordion-button ${toggle == 8 ? "" : "collapsed"}`}
                    onClick={() => setToggle(toggle == 8 ? 0 : 8)}
                  >
                    <span className="step">08</span>
                    <span className="title">Maintenance & Technical Support</span>
                    <span className="icon first"><i className="far fa-arrow-right" /></span>
                    <span className="icon second"><i className="far fa-times-circle" /></span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="serviceCollapseEight" data-bs-parent="#service-accordion">
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img src="https://api.a0.dev/assets/image?text=maintenance+support+Pixelways+Solution&aspect=1:1&seed=service8" alt="Service" />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <ul>
                            <li>SLA-based Software Support</li>
                            <li>Ongoing System Maintenance</li>
                            <li>Legacy Code Modernization</li>
                            <li>24/7 Monitoring & Bug Fixing</li>
                            <li>Documentation & Training Manuals</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              {/* 9. Emerging Technologies & R&D */}
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    eventKey="serviceCollapseNine"
                    className={`accordion-button ${toggle == 9 ? "" : "collapsed"}`}
                    onClick={() => setToggle(toggle == 9 ? 0 : 9)}
                  >
                    <span className="step">09</span>
                    <span className="title">Emerging Technologies & R&D</span>
                    <span className="icon first"><i className="far fa-arrow-right" /></span>
                    <span className="icon second"><i className="far fa-times-circle" /></span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="serviceCollapseNine" data-bs-parent="#service-accordion">
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img src="https://api.a0.dev/assets/image?text=emerging+tech+R&D+Pixelways+Solution&aspect=1:1&seed=service9" alt="Service" />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <ul>
                            <li>Blockchain & Smart Contract Development</li>
                            <li>IoT Applications & Dashboards</li>
                            <li>AR/VR Development (Unity, Unreal)</li>
                            <li>Web3 Integration</li>
                            <li>Voice Interface Development (Alexa, Google Assistant)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              {/* 10. Logistics & Supply Chain Tech Solutions */}
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    eventKey="serviceCollapseTen"
                    className={`accordion-button ${toggle == 10 ? "" : "collapsed"}`}
                    onClick={() => setToggle(toggle == 10 ? 0 : 10)}
                  >
                    <span className="step">10</span>
                    <span className="title">Logistics & Supply Chain Tech Solutions</span>
                    <span className="icon first"><i className="far fa-arrow-right" /></span>
                    <span className="icon second"><i className="far fa-times-circle" /></span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="serviceCollapseTen" data-bs-parent="#service-accordion">
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img src="https://api.a0.dev/assets/image?text=logistics+supply+chain+Pixelways+Solution&aspect=1:1&seed=service10" alt="Service" />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <ul>
                            <li>Parcel Tracking System Development</li>
                            <li>Fleet & Vehicle Management Software</li>
                            <li>Warehouse Management Systems (WMS)</li>
                            <li>Order Fulfillment & Delivery Apps</li>
                            <li>Logistics Automation</li>
                            <li>Supply Chain Visibility Dashboards</li>
                            <li>Last-Mile Delivery Optimization</li>
                            <li>Custom Courier Service Platforms</li>
                            <li>E-commerce Shipping Integration</li>
                            <li>Cold Chain Monitoring (IoT)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
            </Accordion>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
