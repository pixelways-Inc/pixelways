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
                  <h2>Agile Development for Fast and Scalable Solutions</h2>
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
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    eventKey="serviceCollapseOne"
                    className={`accordion-button ${
                      toggle == 1 ? "" : "collapsed"
                    }`}
                    onClick={() => setToggle(toggle == 1 ? 0 : 1)}
                  >
                    <span className="step">01</span>
                    <span className="title">Software Development</span>
                    <span className="icon first">
                      <i className="far fa-arrow-right" />
                    </span>
                    <span className="icon second">
                      <i className="far fa-times-circle" />
                    </span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse
                  eventKey="serviceCollapseOne"
                  data-bs-parent="#service-accordion"
                >
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img
                            src="assets/images/services/service-accordion1.jpg"
                            alt="Service"
                          />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <p>
                            Tailored software development that addresses
                            specific client needs is highly valued. From
                            business automation tools enterprise-level systems
                            custom.
                          </p>
                          <Link className="read-more" href="service-details">
                            Read More <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    className={`accordion-button ${
                      toggle == 2 ? "" : "collapsed"
                    }`}
                    onClick={() => setToggle(toggle == 2 ? 0 : 2)}
                    eventKey="serviceCollapseTwo"
                  >
                    <span className="step">02</span>
                    <span className="title">Cloud Solutions and Migration</span>
                    <span className="icon first">
                      <i className="far fa-arrow-right" />
                    </span>
                    <span className="icon second">
                      <i className="far fa-times-circle" />
                    </span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="serviceCollapseTwo">
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img
                            src="assets/images/services/service-accordion1.jpg"
                            alt="Service"
                          />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <p>
                            Tailored software development that addresses
                            specific client needs is highly valued. From
                            business automation tools enterprise-level systems
                            custom.
                          </p>
                          <Link className="read-more" href="service-details">
                            Read More <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    className={`accordion-button ${
                      toggle == 3 ? "" : "collapsed"
                    }`}
                    onClick={() => setToggle(toggle == 3 ? 0 : 3)}
                    eventKey="serviceCollapseThree"
                  >
                    <span className="step">03</span>
                    <span className="title">IT Consulting and Strategy</span>
                    <span className="icon first">
                      <i className="far fa-arrow-right" />
                    </span>
                    <span className="icon second">
                      <i className="far fa-times-circle" />
                    </span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse
                  eventKey="serviceCollapseThree"
                  data-bs-parent="#service-accordion"
                >
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img
                            src="assets/images/services/service-accordion1.jpg"
                            alt="Service"
                          />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <p>
                            Tailored software development that addresses
                            specific client needs is highly valued. From
                            business automation tools enterprise-level systems
                            custom.
                          </p>
                          <Link className="read-more" href="service-details">
                            Read More <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    className={`accordion-button ${
                      toggle == 4 ? "" : "collapsed"
                    }`}
                    onClick={() => setToggle(toggle == 4 ? 0 : 4)}
                    eventKey="serviceCollapseFour"
                  >
                    <span className="step">04</span>
                    <span className="title">Cybersecurity Services</span>
                    <span className="icon first">
                      <i className="far fa-arrow-right" />
                    </span>
                    <span className="icon second">
                      <i className="far fa-times-circle" />
                    </span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse
                  eventKey="serviceCollapseFour"
                  data-bs-parent="#service-accordion"
                >
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img
                            src="assets/images/services/service-accordion1.jpg"
                            alt="Service"
                          />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <p>
                            Tailored software development that addresses
                            specific client needs is highly valued. From
                            business automation tools enterprise-level systems
                            custom.
                          </p>
                          <Link className="read-more" href="service-details">
                            Read More <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              <div className="accordion-item">
                <div className="accordion-header">
                  <Accordion.Toggle
                    as={"button"}
                    className={`accordion-button ${
                      toggle == 5 ? "" : "collapsed"
                    }`}
                    onClick={() => setToggle(toggle == 5 ? 0 : 5)}
                    eventKey="serviceCollapseFive"
                  >
                    <span className="step">05</span>
                    <span className="title">
                      Data Analytics and Business Intelligence
                    </span>
                    <span className="icon first">
                      <i className="far fa-arrow-right" />
                    </span>
                    <span className="icon second">
                      <i className="far fa-times-circle" />
                    </span>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse
                  eventKey="serviceCollapseFive"
                  data-bs-parent="#service-accordion"
                >
                  <div className="accordion-body">
                    <div className="row gap-50 align-items-center">
                      <div className="col-xl-4 col-lg-2" />
                      <div className="col-xl-4 col-lg-5">
                        <div className="image">
                          <img
                            src="assets/images/services/service-accordion1.jpg"
                            alt="Service"
                          />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-5">
                        <div className="content">
                          <p>
                            Tailored software development that addresses
                            specific client needs is highly valued. From
                            business automation tools enterprise-level systems
                            custom.
                          </p>
                          <Link className="read-more" href="service-details">
                            Read More <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
            </Accordion>
            <div className="service-accordion-btn text-center">
              <Link href="services" className="theme-btn mt-70">
                View More Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
