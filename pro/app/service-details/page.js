import ClientLogo from "@/components/ClientLogo";
import Consultation from "@/components/Consultation";
import { FAQs2 } from "@/components/FAQs";
import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
const page = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Services Details" title={"Software Development"} />
      <section className="service-details-content-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="section-title mb-50 rmb-40"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Modern IT Solutions
                </span>
                <h2>Custom-Built Software Solutions to Drive Your Success</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="image"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={100}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/services/service-details1.jpg"
                  alt="Service"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-40 rmt-30">
            <div className="col-lg-6">
              <div
                className="image rmb-40"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/services/service-details2.jpg"
                  alt="Service"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="content"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay={100}
                data-aos-offset={50}
              >
                <p>
                  Offering cloud solutions and scalable architecture lets
                  clients expand their software capabilities as their business
                  grows, supporting cost-effective scaling without technical
                  limitations.
                </p>
                <ul className="list-style-two mt-30">
                  <li>
                    <i className="far fa-check" /> Custom software development
                  </li>
                  <li>
                    <i className="far fa-check" /> Requirement analysis &amp;
                    planning
                  </li>
                  <li>
                    <i className="far fa-check" /> Support and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="modern-it-solutions-area rel z-1">
        <div className="container-fluid">
          <div className="row gap-10">
            <div className="col-xl-4 col-lg-8">
              <div
                className="image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/services/modern-it-solutions.jpg"
                  alt="Service"
                />
              </div>
            </div>
            <div className="col-xl-8">
              <div className="it-solutions-right-content bgc-black">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div
                      className="left-content rmb-50"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="section-title mb-50 rmb-40">
                        <span className="sub-title color-primary mb-10">
                          Modern IT Solutions
                        </span>
                        <h2>
                          Transforming Ideas into Powerful, Scalable Software
                        </h2>
                      </div>
                      <p>
                        A reliable support team for ongoing assistance, updates,
                        and troubleshooting ensures clients can rely on the
                        company for long-term success and stability.
                      </p>
                      <Link href="about" className="theme-btn mt-35 rmt-20">
                        Get Started
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="it-solutions-wrap"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="it-solution-item">
                        <h5>User-Centric Design</h5>
                        <p>
                          Prioritizing user experience and intuitive interfaces
                          makes the software easy to navigate.
                        </p>
                      </div>
                      <div className="it-solution-item">
                        <h5>Rigorous Quality Assurance</h5>
                        <p>
                          Comprehensive testin quality assurance processes
                          ensure that the software is free of bugs,.
                        </p>
                      </div>
                      <div className="it-solution-item">
                        <h5>Post-Launch Support and Maintenance</h5>
                        <p>
                          Prioritizing user experience and intuitive interfaces
                          makes the software easy to navigate.
                        </p>
                      </div>
                      <div className="it-solution-item">
                        <h5>Experienced and Multidisciplinary</h5>
                        <p>
                          Offering ongoing support, updates an maintenance
                          ensures that clients have a long-term partner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="working-process-area pt-130 rpt-100 pb-80 rpb-50 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div
                className="section-title text-center mb-70 rmb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Working Process
                </span>
                <h2>Guiding You Through Every Step of the IT Journey</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="working-process-three"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="step">Step 01</div>
                <h5 className="title">Discovery &amp; Assessment</h5>
                <p>
                  Gathering information defining the project scope, and creating
                  roadmap ensures alignment.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="working-process-three"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="step">Step 02</div>
                <h5 className="title">Design &amp; Prototyping</h5>
                <p>
                  Based on the requirements, the design team to wireframes, user
                  interfaces prototypes.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="working-process-three"
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="step">Step 03</div>
                <h5 className="title">Development &amp; Testing</h5>
                <p>
                  Development team builds the solution by writing integrating
                  systems, and implementing.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="working-process-three"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="step">Step 04</div>
                <h5 className="title">Deployment &amp; Support</h5>
                <p>
                  Once tested and approved the software develop environment or
                  hosted on the cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-details-content-area rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="solution-beyond-content rmb-50"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    Solutions Beyond Technology – Success Beyond Boundaries
                  </h2>
                </div>
                <p>
                  Trust us to be your partner in digital transformation,
                  providing the technology and support.
                </p>
                <ul className="list-style-two mt-40">
                  <li>
                    <i className="far fa-check" /> Reliable Support &amp;
                    Maintenance Services
                  </li>
                  <li>
                    <i className="far fa-check" /> Data-Driven Insights for
                    Smarter Decisions
                  </li>
                  <li>
                    <i className="far fa-check" /> Tailored Software Development
                    for Every Need
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="image"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/services/service-details3.jpg"
                  alt="Service"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-details-content-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-7">
              <div
                className="service-accordion-left-content rmb-50"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-50">
                  <h2>
                    Delivering Visionary IT Solutions for Modern Challenges
                  </h2>
                </div>
                <img
                  src="assets/images/services/service-accordion-left.jpg"
                  alt="Service"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="service-details-accordion-wrap"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <FAQs2 limit={5} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Consultation />

      <ClientLogo containerClass="client-logo-area style-two for-border-top" />
    </TekprofLayout>
  );
};
export default page;
