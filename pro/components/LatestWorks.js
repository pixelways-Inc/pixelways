"use client";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const LatestWorks = () => {
  const [toggle, setToggle] = useState(1);
  const handleToggle = (eventKey) => {
    setToggle(toggle === eventKey ? 0 : eventKey);
  };
  return (
    <section
      id="projects"
      className="latest-work-area radius-shape-top bgc-lighter py-130 rpy-100 rel z-2"
    >
      <div className="container container-1290">
        <div className="row justify-content-center">
          <div
            className="col-xl-9 co-lg-11 text-center"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title mb-70">
              <span className="subtitle color-primary mt-10 mb-15">
                Latest Works
              </span>
              <h2>
                We Have Work 3850+ Global Projects created by our team let’s
                Explore our works
              </h2>
            </div>
          </div>
        </div>
        <Accordion defaultActiveKey="1">
          <div className="latest-work-wrap">
            <div className={`latest-work-item ${toggle == 1 ? "active" : ""}`}>
              <div className="content-wrap">
                <Accordion.Toggle
                  as={"div"}
                  eventKey="1"
                  className={`letast-work-item-toggle ${
                    toggle == 1 ? "letast-work-item-active" : ""
                  }`}
                  onClick={() => handleToggle(1)}
                >
                  <div className="normal-area">
                    <span className="category-wrap">
                      <span className="category">WordPress</span>
                    </span>
                    <span className="title h1">WordPress</span>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <div className="active-area">
                    <div className="image">
                      <img
                        src="assets/images/projects/letest-work1.jpg"
                        alt="Letest Work"
                      />
                    </div>
                    <div className="content">
                      <span className="title h2">WordPress</span>
                      <p>
                        Transform your static HTML website into a dynamic,
                        feature-rich WordPress theme with our expert conversion
                        services. Our team specializes in converting HTML
                        templates functional
                      </p>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              <Link href="project-details" className="detail-btn">
                <i className="fal fa-arrow-right" />
              </Link>
            </div>
            <div className={`latest-work-item ${toggle == 2 ? "active" : ""}`}>
              <div className="content-wrap">
                <Accordion.Toggle
                  as={"div"}
                  eventKey="2"
                  className={`letast-work-item-toggle ${
                    toggle == 2 ? "letast-work-item-active" : ""
                  }`}
                  onClick={() => handleToggle(2)}
                >
                  <div className="normal-area">
                    <span className="category-wrap">
                      <span className="category">HTML</span>
                    </span>
                    <span className="title h1">HTML</span>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <div className="active-area">
                    <div className="image">
                      <img
                        src="assets/images/projects/letest-work1.jpg"
                        alt="Letest Work"
                      />
                    </div>
                    <div className="content">
                      <span className="title h2">HTML</span>
                      <p>
                        Transform your static HTML website into a dynamic,
                        feature-rich WordPress theme with our expert conversion
                        services. Our team specializes in converting HTML
                        templates functional
                      </p>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              <Link href="project-details" className="detail-btn">
                <i className="fal fa-arrow-right" />
              </Link>
            </div>
            <div className={`latest-work-item ${toggle == 3 ? "active" : ""}`}>
              <div className="content-wrap">
                <Accordion.Toggle
                  as={"div"}
                  eventKey="3"
                  className={`letast-work-item-toggle ${
                    toggle == 3 ? "letast-work-item-active" : ""
                  }`}
                  onClick={() => handleToggle(3)}
                >
                  <div className="normal-area">
                    <span className="category-wrap">
                      <span className="category">React</span>
                    </span>
                    <span className="title h1">React</span>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <div className="active-area">
                    <div className="image">
                      <img
                        src="assets/images/projects/letest-work1.jpg"
                        alt="Letest Work"
                      />
                    </div>
                    <div className="content">
                      <span className="title h2">React</span>
                      <p>
                        Transform your static HTML website into a dynamic,
                        feature-rich WordPress theme with our expert conversion
                        services. Our team specializes in converting HTML
                        templates functional
                      </p>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              <Link href="project-details" className="detail-btn">
                <i className="fal fa-arrow-right" />
              </Link>
            </div>
            <div className={`latest-work-item ${toggle == 4 ? "active" : ""}`}>
              <div className="content-wrap">
                <Accordion.Toggle
                  as={"div"}
                  eventKey="4"
                  className={`letast-work-item-toggle ${
                    toggle == 4 ? "letast-work-item-active" : ""
                  }`}
                  onClick={() => handleToggle(4)}
                >
                  <div className="normal-area">
                    <span className="category-wrap">
                      <span className="category">Angular</span>
                    </span>
                    <span className="title h1">Angular</span>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <div className="active-area">
                    <div className="image">
                      <img
                        src="assets/images/projects/letest-work1.jpg"
                        alt="Letest Work"
                      />
                    </div>
                    <div className="content">
                      <span className="title h2">Angular</span>
                      <p>
                        Transform your static HTML website into a dynamic,
                        feature-rich WordPress theme with our expert conversion
                        services. Our team specializes in converting HTML
                        templates functional
                      </p>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              <Link href="project-details" className="detail-btn">
                <i className="fal fa-arrow-right" />
              </Link>
            </div>
            <div className={`latest-work-item ${toggle == 5 ? "active" : ""}`}>
              <div className="content-wrap">
                <Accordion.Toggle
                  as={"div"}
                  eventKey="5"
                  className={`letast-work-item-toggle ${
                    toggle == 5 ? "letast-work-item-active" : ""
                  }`}
                  onClick={() => handleToggle(5)}
                >
                  <div className="normal-area">
                    <span className="category-wrap">
                      <span className="category">Sass</span>
                    </span>
                    <span className="title h1">Sass</span>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                  <div className="active-area">
                    <div className="image">
                      <img
                        src="assets/images/projects/letest-work1.jpg"
                        alt="Letest Work"
                      />
                    </div>
                    <div className="content">
                      <span className="title h2">HTML</span>
                      <p>
                        Transform your static HTML website into a dynamic,
                        feature-rich WordPress theme with our expert conversion
                        services. Our team specializes in converting HTML
                        templates functional
                      </p>
                    </div>
                  </div>
                </Accordion.Collapse>
              </div>
              <Link href="project-details" className="detail-btn">
                <i className="fal fa-arrow-right" />
              </Link>
            </div>
          </div>
        </Accordion>
      </div>
    </section>
  );
};
export default LatestWorks;
