import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
const page = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Case Details" title="Software Development" />
      <section className="case-details-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-5">
              <div
                className="section-title mb-40"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Inventory Tech Management with Custom Software Solution</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div
                className="case-details-info"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="row gap-90">
                  <div className="col-sm-6">
                    <div className="case-info-item">
                      <h4 className="title">Case Category</h4>
                      <div className="content">
                        <div className="category">
                          <Link href="case-details">IT Solutions</Link>,
                          <Link href="case-details">Software Development</Link>,
                          <Link href="case-details">Cyber Security</Link>
                        </div>
                      </div>
                    </div>
                    <div className="case-info-item">
                      <h4 className="title">Clients</h4>
                      <div className="content">
                        <span className="client-name">ABC Retail Inc.,</span>
                        <p>a leading regional IT Agency.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="case-info-item">
                      <h4 className="title">Case Date</h4>
                      <div className="content">
                        <div className="row">
                          <div className="col-6">
                            <p>
                              Start On
                              <br /> 20 Aug 2024
                            </p>
                          </div>
                          <div className="col-6">
                            <p>
                              End On
                              <br /> 30 Sep 2024
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="case-info-item">
                      <h4 className="title">Location</h4>
                      <div className="content">
                        <p>4030 Sheppard Ave E, Scarborough, ON, Canada</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="case-details-image mt-25"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/cases/case-details.jpg"
                  alt="Case Details"
                />
              </div>
            </div>
          </div>
          <div className="row mt-80">
            <div className="col-lg-6">
              <div
                className="section-title mb-40"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Objective</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="case-details-cotnent"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <p>
                  ABC Retail Inc. was experiencing inefficiencies outdated
                  inventory management system. The manual processes involved in
                  stock tracking, order management, and reporting led to errors,
                  stockouts, and increased costs. The company soug custom
                  software solution to streamline inventory management, reduce
                  operational costs, and improve customer satisfaction.
                </p>
                <ul className="list-style-two mt-40">
                  <li>
                    <i className="far fa-check" /> Automate inventory tracking
                    and ordering processes
                  </li>
                  <li>
                    <i className="far fa-check" /> Provide real-time visibility
                    into stock levels across multiple locations
                  </li>
                  <li>
                    <i className="far fa-check" /> Generate insightful reports
                    to inform purchasing and inventory decisions
                  </li>
                  <li>
                    <i className="far fa-check" /> Integrate seamlessly with the
                    company’s existing Point of Sale
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="mt-70 mb-75" />
          <div className="row">
            <div className="col-lg-6">
              <div
                className="section-title mb-40"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Solution</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="case-details-cotnent"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <p>
                  Our team proposed a modular inventory management system with
                  the following key features ase study layout provides potential
                  clients with a clear understanding of the project’s goals,
                  approach, and measurable outcomes.
                </p>
                <h5 className="mt-40">Automated Stock Tracking</h5>
                <p>
                  RFID integration to automatically track stock as it moves
                  through the supply chain.
                </p>
                <h5>Smart Reordering:</h5>
                <p>
                  AI-powered reorder level recommendations based on historical
                  sales and demand forecasting.
                </p>
                <h5>Real-Time Inventory Dashboard:</h5>
                <p>
                  A centralized dashboard for monitoring stock levels, order
                  status, and inventory turnover in real time.
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-50 mb-75" />
          <div className="row">
            <div className="col-lg-6">
              <div
                className="section-title mb-40"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Results</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="case-details-cotnent"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <p>
                  ABC Retail Inc. praised the new system for its user-friendly
                  interface and the measurable improvements in inventory
                  management. The noted significant positive impact on their
                  bottom line and planned to expand the solution
                </p>
                <p>
                  50% Reduction in Stockouts: The automated reordering system
                  reduced stockouts, resulting in higher customer satisfaction.
                  The time spent on inventory management was cut by 40%,
                  allowing staff to focus on other critical areas.
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-55" />
        </div>
      </section>
      <section className="related-case-area pt-115 rpt-85 pb-80 rpb-50 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Related Cases</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="case-item-two"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/cases/related-case1.jpg"
                    alt="Related Case"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link href="case-details">Assessment and Strategy</Link>
                  </h4>
                  <span>IT Consulting Service</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="case-item-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/cases/related-case2.jpg"
                    alt="Related Case"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link href="case-details">Software Development</Link>
                  </h4>
                  <span>IT Consulting Service</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="case-item-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/cases/related-case3.jpg"
                    alt="Related Case"
                  />
                </div>
                <div className="content">
                  <h4>
                    <Link href="case-details">Cyber Security Solutions</Link>
                  </h4>
                  <span>IT Consulting Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};
export default page;
