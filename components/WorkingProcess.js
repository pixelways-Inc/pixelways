"use client";
import { sliderProps } from "@/utility/sliderProps";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";

const WorkingProcess = () => {
  return (
    <section className="working-process-area pt-100 pb-100 rpb-70 rel z-1 bg-[#111] text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div
              className="section-title text-center mb-70 rmb-60"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title text-[#00C4FF] mb-10">
                Working Process
              </span>
              <h2 className="text-white">Building Resilience Our Cybersecurity Methodology</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div
            className="col-lg-5"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Slider
              {...sliderProps.workingProcessTwoActive}
              className="working-process-two-active"
            >
              <div className="working-process-two">
                <span className="step">Step 01</span>
                <h5 className="text-white">Risk Management Framework</h5>
                <p className="text-gray-300">
                  RMF is a structured approach to identify, assess, and mitigate
                  risks to information systems ensures
                </p>
              </div>
              <div className="working-process-two">
                <span className="step">Step 02</span>
                <h5 className="text-white">Defense in Depth (Layered Security)</h5>
                <p className="text-gray-300">
                  A multi-layered approach that implements security controls at
                  multiple levels (network, application
                </p>
              </div>
              <div className="working-process-two">
                <span className="step">Step 03</span>
                <h5 className="text-white">Incident Response Process</h5>
                <p className="text-gray-300">
                  A focused approach to detecting, responding to, and recovering
                  from cyber incidents, minimizing impact
                </p>
              </div>
              <div className="working-process-two">
                <span className="step">Step 04</span>
                <h5 className="text-white">Monitoring &amp; Detection</h5>
                <p className="text-gray-300">
                  24/7 Threat Monitoring: Use advanced tools like SIEM (Security
                  Information and Event Management)
                </p>
              </div>
              <div className="working-process-two">
                <span className="step">Step 01</span>
                <h5 className="text-white">Risk Management Framework</h5>
                <p className="text-gray-300">
                  RMF is a structured approach to identify, assess, and mitigate
                  risks to information systems ensures
                </p>
              </div>
              <div className="working-process-two">
                <span className="step">Step 02</span>
                <h5 className="text-white">Defense in Depth (Layered Security)</h5>
                <p className="text-gray-300">
                  A multi-layered approach that implements security controls at
                  multiple levels (network, application
                </p>
              </div>
              <div className="working-process-two">
                <span className="step">Step 03</span>
                <h5 className="text-white">Incident Response Process</h5>
                <p className="text-gray-300">
                  A focused approach to detecting, responding to, and recovering
                  from cyber incidents, minimizing impact
                </p>
                <img
                  src="https://api.a0.dev/assets/image?text=IT team collaborating on digital strategy, whiteboard, laptops, 410x250px, realistic, 8K.&aspect=1:1&seed=402"
                  alt="Working Process"
                  width={410}
                  height={250}
                />
                <h5 className="text-white">Monitoring &amp; Detection</h5>
                <p className="text-gray-300">
                  24/7 Threat Monitoring: Use advanced tools like SIEM (Security
                  Information and Event Management)
                </p>
              </div>
            </Slider>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="working-process-image-two ms-lg-auto mb-30 rmt-40">
              <img
                src="https://api.a0.dev/assets/image?text=IT team collaborating on digital strategy, whiteboard, laptops, 410x250px, realistic, 8K.&aspect=1:1&seed=402"
                alt="Working Process"
                width={410}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkingProcess;

export const WorkingProcess2 = ({ containerClass = "container" }) => {
  const [toggle, setToggle] = useState(1);

  const handleToggle = (eventKey) => {
    setToggle(toggle === eventKey ? 0 : eventKey);
  };

  return (
    <section className="working-process-area rel z-1 bg-[#111] text-white" id="work-process">
      <div
        className={`features-bg pt-130 rpt-100 pb-120 rpb-90 ${containerClass}`}
      >
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div
              className="section-title text-center mb-70"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title text-[#00C4FF] mb-10">
                Working Process
              </span>
              <h2 className="text-white">Guiding You Through Every Step of the IT Journey</h2>
            </div>
          </div>
        </div>
        <Accordion
          defaultActiveKey="collapseOne"
          className="accordion working-process"
          id="working-process"
          data-aos="fade-up"
          data-aos-delay={50}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="accordion-item">
            <div className="accordion-header">
              <Accordion.Toggle
                as={"button"}
                eventKey="collapseOne"
                className={`accordion-button ${
                  toggle === 1 ? "" : "collapsed"
                }`}
                onClick={() => handleToggle(1)}
              >
                <span className="step">Step 01</span>
                <span className="title">Discovery &amp; Assessment</span>
                <span className="icon">
                  <i className="far fa-arrow-right" />
                </span>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="collapseOne">
              <div className="accordion-body">
                <div className="row gap-120">
                  <div className="col-lg-6">
                    <div className="content rmb-30">
                      <p className="text-gray-300">
                        Digital era with innovative IT solutions tailored to
                        their unique needs. With a focus on reliability,
                        scalability, and security, our team delivers
                        cutting-edge technology companies.
                      </p>
                      <ul className="list-style-one mt-25">
                        <li className="text-gray-300">
                          <i className="far fa-check text-[#00C4FF]" /> Software Development
                          &amp; Integration
                        </li>
                        <li className="text-gray-300">
                          <i className="far fa-check text-[#00C4FF]" /> Help Desk &amp;
                          Technical Support
                        </li>
                        <li className="text-gray-300">
                          <i className="far fa-check text-[#00C4FF]" /> Business Continuity
                          &amp; Compliance
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="image">
                      <img
                        src="https://api.a0.dev/assets/image?text=IT team collaborating on digital strategy, whiteboard, laptops, 410x250px, realistic, 8K.&aspect=1:1&seed=402"
                        alt="Work Process"
                      />
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
                eventKey="collapseTwo"
                className={`accordion-button ${
                  toggle === 2 ? "" : "collapsed"
                }`}
                onClick={() => handleToggle(2)}
              >
                <span className="step">Step 02</span>
                <span className="title">Strategy &amp; Planning</span>
                <span className="icon">
                  <i className="far fa-arrow-right" />
                </span>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="collapseTwo">
              <div className="accordion-body">
                <div className="row gap-120">
                  <div className="col-lg-6">
                    <div className="content rmb-30">
                      <p className="text-gray-300">
                        Digital era with innovative IT solutions tailored to
                        their unique needs. With a focus on reliability,
                        scalability, and security, our team delivers
                        cutting-edge technology companies.
                      </p>
                      <ul className="list-style-one mt-25">
                        <li className="text-gray-300">
                          <i className="far fa-check text-[#00C4FF]" /> Software Development
                          &amp; Integration
                        </li>
                        <li className="text-gray-300">
                          <i className="far fa-check text-[#00C4FF]" /> Help Desk &amp;
                          Technical Support
                        </li>
                        <li className="text-gray-300">
                          <i className="far fa-check text-[#00C4FF]" /> Business Continuity
                          &amp; Compliance
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="image">
                      <img
                        src="https://api.a0.dev/assets/image?text=IT team collaborating on digital strategy, whiteboard, laptops, 410x250px, realistic, 8K.&aspect=1:1&seed=402"
                        alt="Work Process"
                      />
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
                eventKey="collapseThree"
                className={`accordion-button ${
                  toggle === 3 ? "" : "collapsed"
                }`}
                onClick={() => handleToggle(3)}
              >
                <span className="step">Step 03</span>
                <span className="title">Implementation &amp; Integration</span>
                <span className="icon">
                  <i className="far fa-arrow-right" />
                </span>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="collapseThree">
              <div className="accordion-body">
                <div className="row gap-120">
                  <div className="col-lg-6">
                    <div className="content rmb-30">
                      <p className="text-gray-300">
                        Digital era with innovative IT solutions tailored to
                        their unique needs. With a focus on reliability,
                        scalability, and security, our team delivers
                        cutting-edge technology companies.
                      </p>
                      <ul className="list-style-one mt-25">
                        <li className="text-gray-300">
                          <i className="far fa-check text-[#00C4FF]" /> Software Development
                          &amp; Integration
                        </li>
                        <li className="text-gray-300">
                          <i className="far fa-check text-[#00C4FF]" /> Help Desk &amp;
                          Technical Support
                        </li>
                        <li className="text-gray-300">
                          <i className="far fa-check text-[#00C4FF]" /> Business Continuity
                          &amp; Compliance
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="image">
                      <img
                        src="https://api.a0.dev/assets/image?text=IT team collaborating on digital strategy, whiteboard, laptops, 410x250px, realistic, 8K.&aspect=1:1&seed=402"
                        alt="Work Process"
                      />
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
                eventKey="collapseFour"
                className={`accordion-button ${
                  toggle === 4 ? "" : "collapsed"
                }`}
                onClick={() => handleToggle(4)}
              >
                <span className="step">Step 04</span>
                <span className="title">
                  Ongoing Support &amp; Optimization
                </span>
                <span className="icon">
                  <i className="far fa-arrow-right" />
                </span>
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="collapseFour">
              <div className="accordion-body">
                <div className="row gap-120">
                  <div className="col-lg-6">
                    <div className="content rmb-30">
                      <p className="text-gray-300">
                        Digital era with innovative IT solutions tailored to
                        their unique needs. With a focus on reliability,
                        scalability, and security, our team delivers
                        cutting-edge technology companies.
                      </p>
                      <ul className="list-style-one mt-25">
                        <li className="text-gray-300">
                          <i className="far fa-check text-[#00C4FF]" /> Software Development
                          &amp; Integration
                        </li>
                        <li className="text-gray-300">
                          <i className="far fa-check text-[#00C4FF]" /> Help Desk &amp;
                          Technical Support
                        </li>
                        <li className="text-gray-300">
                          <i className="far fa-check text-[#00C4FF]" /> Business Continuity
                          &amp; Compliance
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="image">
                      <img
                        src="https://api.a0.dev/assets/image?text=IT team collaborating on digital strategy, whiteboard, laptops, 410x250px, realistic, 8K.&aspect=1:1&seed=402"
                        alt="Work Process"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Collapse>
          </div>
        </Accordion>
      </div>
    </section>
  );
};
