"use client";

import { useState } from "react";
import { Accordion } from "react-bootstrap";

const FAQs = () => {
  const [toggle, setToggle] = useState(1);
  const handleToggle = (eventKey) => {
    setToggle(toggle === eventKey ? 0 : eventKey);
  };
  return (
    <Accordion
      className="accordion-one mt-25 mb-30 rmb-0"
      data-aos="fade-left"
      data-aos-duration={1500}
      data-aos-offset={50}
      defaultActiveKey="collapseOne"
    >
      <div className="accordion-item-two">
        <h6 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className={`accordion-button ${toggle == 1 ? "" : "collapsed"}`}
            onClick={() => handleToggle(1)}
            eventKey="collapseOne"
          >
            <span className="title">
              1. What is cybersecurity, and it important?
            </span>
            <span className="icon">
              <i className="far fa-arrow-right" />
            </span>
          </Accordion.Toggle>
        </h6>
        <Accordion.Collapse eventKey="collapseOne">
          <div className="accordion-body">
            <p>
              Use strong, unique passwords and enable multi-factor
              authentication update software and systems Educate employees about
              cybersecurity best practices
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="accordion-item-two">
        <h6 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className={`accordion-button ${toggle == 2 ? "" : "collapsed"}`}
            onClick={() => handleToggle(2)}
            eventKey="collapseTwo"
          >
            <span className="title">2. How can I protect my organization?</span>
            <span className="icon">
              <i className="far fa-arrow-right" />
            </span>
          </Accordion.Toggle>
        </h6>
        <Accordion.Collapse eventKey="collapseTwo">
          <div className="accordion-body">
            <p>
              Use strong, unique passwords and enable multi-factor
              authentication update software and systems Educate employees about
              cybersecurity best practices
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="accordion-item-two">
        <h6 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className={`accordion-button ${toggle == 3 ? "" : "collapsed"}`}
            onClick={() => handleToggle(3)}
            eventKey="collapseThree"
          >
            <span className="title">
              3. What is phishing, and how can I avoid it?
            </span>
            <span className="icon">
              <i className="far fa-arrow-right" />
            </span>
          </Accordion.Toggle>
        </h6>
        <Accordion.Collapse eventKey="collapseThree">
          <div className="accordion-body">
            <p>
              Use strong, unique passwords and enable multi-factor
              authentication update software and systems Educate employees about
              cybersecurity best practices
            </p>
          </div>
        </Accordion.Collapse>
      </div>
      <div className="accordion-item-two">
        <h6 className="accordion-header">
          <Accordion.Toggle
            as={"button"}
            className={`accordion-button ${toggle == 4 ? "" : "collapsed"}`}
            onClick={() => handleToggle(4)}
            eventKey="collapseFour"
          >
            <span className="title">
              4. How often should I conduct cybersecurity?
            </span>
            <span className="icon">
              <i className="far fa-arrow-right" />
            </span>
          </Accordion.Toggle>
        </h6>
        <Accordion.Collapse eventKey="collapseFour">
          <div className="accordion-body">
            <p>
              Use strong, unique passwords and enable multi-factor
              authentication update software and systems Educate employees about
              cybersecurity best practices
            </p>
          </div>
        </Accordion.Collapse>
      </div>
    </Accordion>
  );
};
export default FAQs;

export const FAQs2 = ({ limit = 100 }) => {
  const [toggle, setToggle] = useState(1);
  const faqs = [
    {
      title: "Who Can Benefit from Services?",
      body: "Cybersecurity is at the core of our solutions. We layered monitoring, and threat detection to protect. From custom development and cloud solutions to cybersecurity and data analytics.",
    },
    {
      title: "Approach Cybersecurity?",
      body: "Cybersecurity is at the core of our solutions. We layered monitoring, and threat detection to protect. From custom development and cloud solutions to cybersecurity and data analytics.",
    },
    {
      title: "Provide Custom IT Solutions?",
      body: "Cybersecurity is at the core of our solutions. We layered monitoring, and threat detection to protect. From custom development and cloud solutions to cybersecurity and data analytics.",
    },
    {
      title: "Process for Working?",
      body: "Cybersecurity is at the core of our solutions. We layered monitoring, and threat detection to protect. From custom development and cloud solutions to cybersecurity and data analytics.",
    },
    {
      title: "Help with Cloud Solutions?",
      body: "Cybersecurity is at the core of our solutions. We layered monitoring, and threat detection to protect. From custom development and cloud solutions to cybersecurity and data analytics.",
    },
    {
      title: "What industries do you specialize in?",
      body: "Cybersecurity is at the core of our solutions. We layered monitoring, and threat detection to protect. From custom development and cloud solutions to cybersecurity and data analytics.",
    },
    {
      title: "What size companies do you work with?",
      body: "Cybersecurity is at the core of our solutions. We layered monitoring, and threat detection to protect. From custom development and cloud solutions to cybersecurity and data analytics.",
    },
    {
      title: "How does the consulting process work?",
      body: "Cybersecurity is at the core of our solutions. We layered monitoring, and threat detection to protect. From custom development and cloud solutions to cybersecurity and data analytics.",
    },
    {
      title: "How secure are your solutions?",
      body: "Cybersecurity is at the core of our solutions. We layered monitoring, and threat detection to protect. From custom development and cloud solutions to cybersecurity and data analytics.",
    },
    {
      title: "How much do your services cost?",
      body: "Cybersecurity is at the core of our solutions. We layered monitoring, and threat detection to protect. From custom development and cloud solutions to cybersecurity and data analytics.",
    },
    {
      title: "How do I get started?",
      body: "Cybersecurity is at the core of our solutions. We layered monitoring, and threat detection to protect. From custom development and cloud solutions to cybersecurity and data analytics.",
    },
  ];
  const handleToggle = (eventKey) => {
    setToggle(toggle === eventKey ? 0 : eventKey);
  };
  return (
    <Accordion
      defaultActiveKey="collapse1"
      className="accordion-one"
      id="service-details-accordion"
    >
      {faqs.map(
        (faq, index) =>
          index < limit && (
            <div key={index} className="accordion-item-four style-two">
              <h6 className="accordion-header">
                <Accordion.Toggle
                  as={"button"}
                  className={`accordion-button ${
                    toggle == index + 1 ? "" : "collapsed"
                  }`}
                  onClick={() => handleToggle(index + 1)}
                  eventKey={`collapse${index + 1}`}
                >
                  <span className="title">{faq.title}</span>
                  <span className="icon first">
                    <i className="fas fa-plus" />
                  </span>
                  <span className="icon second">
                    <i className="fas fa-minus" />
                  </span>
                </Accordion.Toggle>
              </h6>
              <Accordion.Collapse eventKey={`collapse${index + 1}`}>
                <div className="accordion-body">
                  <p>{faq.body}</p>
                </div>
              </Accordion.Collapse>
            </div>
          )
      )}
    </Accordion>
  );
};
