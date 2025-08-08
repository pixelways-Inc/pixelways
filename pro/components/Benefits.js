"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { ProgressBar2 } from "./ProgressBar";

const Benefits = () => {
  const [toggle, setToggle] = useState(1);
  return (
    <section
      className="benefits-area bgc-blue pt-130 rpt-100 pb-100 rpb-70 rel z-1"
      style={{
        backgroundImage: "url(assets/images/background/bg-dot-shape.png)",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-9">
            <div
              className="benefits-image-area mb-30"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img
                src="assets/images/benefits/benefits-left-image.jpg"
                alt="Benefits Image"
              />
              <div
                className="benefit-achievement"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="circle-progress-achievement one">
                  <i className="far fa-arrow-right" />
                  <ProgressBar2 />
                  <div className="achievement-content">
                    <h6>Awards Winning</h6>
                  </div>
                </div>
                <div className="circle-progress-achievement two">
                  <i className="far fa-arrow-right" />
                  <ProgressBar2 value={50} />
                  <div className="achievement-content">
                    <h6>Customer review</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-8">
            <div
              className="benefits-faq-area mb-30"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title text-white mb-25">
                <span className="sub-title mb-10">How to Benefits</span>
                <h2>
                  Hacking the Hackers Strategic Interventions in Cybersecurity
                </h2>
              </div>
              <Accordion
                defaultActiveKey="collapseBfOne"
                className="accordion-one mt-50 mb-30 rmb-0"
                id="benefits-accordion"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="accordion-item-three">
                  <h6 className="accordion-header">
                    <Accordion.Toggle
                      as={"button"}
                      className={`accordion-button ${
                        toggle == 1 ? "" : "collapsed"
                      }`}
                      onClick={() => setToggle(toggle == 1 ? 0 : 1)}
                      eventKey="collapseBfOne"
                    >
                      <span className="title">
                        Network Security &amp; Protection
                      </span>
                      <span className="icon">
                        <i className="far fa-angle-down" />
                      </span>
                    </Accordion.Toggle>
                  </h6>
                  <Accordion.Collapse eventKey="collapseBfOne">
                    <div className="accordion-body">
                      <p>
                        Accelerate innovation with world-class tech teams We’ll
                        match you to an entire remote team .
                      </p>
                    </div>
                  </Accordion.Collapse>
                </div>
                <div className="accordion-item-three">
                  <h6 className="accordion-header">
                    <Accordion.Toggle
                      as={"button"}
                      className={`accordion-button ${
                        toggle == 2 ? "" : "collapsed"
                      }`}
                      onClick={() => setToggle(toggle == 2 ? 0 : 2)}
                      eventKey="collapseBfTwo"
                    >
                      <span className="title">
                        Browser Safety &amp; Farewell
                      </span>
                      <span className="icon">
                        <i className="far fa-angle-down" />
                      </span>
                    </Accordion.Toggle>
                  </h6>
                  <Accordion.Collapse eventKey="collapseBfTwo">
                    <div className="accordion-body">
                      <p>
                        Accelerate innovation with world-class tech teams We’ll
                        match you to an entire remote team .
                      </p>
                    </div>
                  </Accordion.Collapse>
                </div>
                <div className="accordion-item-three">
                  <h6 className="accordion-header">
                    <Accordion.Toggle
                      as={"button"}
                      className={`accordion-button ${
                        toggle == 3 ? "" : "collapsed"
                      }`}
                      onClick={() => setToggle(toggle == 3 ? 0 : 3)}
                      eventKey="collapseBfThree"
                    >
                      <span className="title">Infrastructure Technology</span>
                      <span className="icon">
                        <i className="far fa-angle-down" />
                      </span>
                    </Accordion.Toggle>
                  </h6>
                  <Accordion.Collapse eventKey="collapseBfThree">
                    <div className="accordion-body">
                      <p>
                        Accelerate innovation with world-class tech teams We’ll
                        match you to an entire remote team .
                      </p>
                    </div>
                  </Accordion.Collapse>
                </div>
                <div className="accordion-item-three">
                  <h6 className="accordion-header">
                    <Accordion.Toggle
                      as={"button"}
                      className={`accordion-button ${
                        toggle == 4 ? "" : "collapsed"
                      }`}
                      onClick={() => setToggle(toggle == 4 ? 0 : 4)}
                      eventKey="collapseBfFour"
                    >
                      <span className="title">
                        Management &amp; Support Services
                      </span>
                      <span className="icon">
                        <i className="far fa-angle-down" />
                      </span>
                    </Accordion.Toggle>
                  </h6>
                  <Accordion.Collapse eventKey="collapseBfFour">
                    <div className="accordion-body">
                      <p>
                        Accelerate innovation with world-class tech teams We’ll
                        match you to an entire remote team .
                      </p>
                    </div>
                  </Accordion.Collapse>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Benefits;
