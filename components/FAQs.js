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
      title: "What services does Pixelways Solution offer?",
      body: "Pixelways Solution offers a comprehensive suite of digital solutions including custom software development, UI/UX design, cloud & infrastructure solutions, AI & data analytics, cybersecurity, consulting, e-commerce & CMS, maintenance & support, emerging technologies, and logistics tech solutions.",
    },
    {
      title: "How can Pixelways Solution help my business grow?",
      body: "We empower businesses by delivering innovative, scalable, and secure technology solutions tailored to your unique needs. Our expertise helps optimize operations, enhance efficiency, and drive digital transformation, enabling you to achieve your strategic goals.",
    },
    {
      title: "What is your approach to software development?",
      body: "We follow an agile and user-centered approach to software development, focusing on iterative progress, continuous feedback, and close collaboration with our clients to deliver high-quality, user-friendly, and scalable applications.",
    },
    {
      title: "Do you provide ongoing support and maintenance?",
      body: "Yes, we offer comprehensive post-launch maintenance and technical support services, including SLA-based software support, 24/7 monitoring, bug fixing, and legacy code modernization to ensure your systems run smoothly.",
    },
    {
      title: "How do you ensure the security of your solutions?",
      body: "Security is paramount in our solutions. We implement multi-layered cybersecurity measures, conduct regular security audits, and adhere to industry best practices and compliance standards (e.g., GDPR, HIPAA) to protect your data and infrastructure.",
    },
    {
      title: "Can you help with cloud migration and optimization?",
      body: "Absolutely. We provide strategic cloud adoption, migration, and optimization services across major platforms like AWS, Azure, and GCP, helping you leverage the cloud for scalability, efficiency, and cost-effectiveness.",
    },
    {
      title: "What industries do you serve?",
      body: "Pixelways Solution serves a diverse range of industries, providing tailored digital solutions to startups, small and medium-sized businesses, and large enterprises across various sectors.",
    },
    {
      title: "How do I get started with Pixelways Solution?",
      body: "Getting started is easy! Simply contact us through our website, email, or phone. We'll schedule an initial consultation to understand your needs and discuss how we can help you achieve your digital objectives.",
    },
    {
      title: "Do you offer custom IT consulting services?",
      body: "Yes, we offer strategic consulting and technical advisory services, including CTO-as-a-Service, system architecture consulting, technology stack evaluation, and digital transformation strategy to guide your business decisions.",
    },
    {
      title: "What makes Pixelways Solution different from other IT companies?",
      body: "Our commitment to innovation, client-centric approach, deep industry expertise, and focus on delivering measurable results set us apart. We build lasting partnerships by providing solutions that are not just technologically advanced but also strategically aligned with your business success.",
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
