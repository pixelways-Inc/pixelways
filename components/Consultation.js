const Consultation = () => {
  return (
    <section className="service-get-consultaions-area pb-130 rpb-100 rel z-1">
      <div className="container">
        <div className="service-get-consultations-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="left-content rmb-50"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-105 rmb-40">
                  <span className="sub-title color-primary mb-10">
                    Schedule a Consultation
                  </span>
                  <h2>Ready to Transform Your Business?</h2>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <h5>Address Business</h5>
                    <p>4030 Sheppard Ave E, Scarborough, ON, Canada</p>
                  </div>
                  <div className="col-lg-6">
                    <h5>Contact Us</h5>
                    <a href="mailto:supportsaylo@gmail.com">
                      supportsaylo@gmail.com
                    </a>
                    <br />
                    <a href="tel:+14164071923">+1 (416) 407-1923</a>
                    <br />
                    <a href="tel:+237679719353">+237 679 719 353</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="get-consultations-form-area"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h4>Request a Free Consultation</h4>
                <form
                  className="get-consultations-form mt-30 z-1 rel"
                  name="contactForm"
                  action="#"
                  method="post"
                >
                  <div className="row gap-20">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="full_name"
                          name="full_name"
                          className="form-control"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-20">
                      <div className="form-group">
                        <select name="subject" id="subject">
                          <option value="">Select Subject</option>
                          <option value="general-inquiry">General Inquiry</option>
                          <option value="software-development">Software Development</option>
                          <option value="ui-ux-design">UI/UX Design</option>
                          <option value="cloud-solutions">Cloud Solutions</option>
                          <option value="ai-data-analytics">AI & Data Analytics</option>
                          <option value="cybersecurity">Cybersecurity</option>
                          <option value="consulting-advisory">Consulting & Advisory</option>
                          <option value="e-commerce-cms">E-commerce & CMS</option>
                          <option value="maintenance-support">Maintenance & Support</option>
                          <option value="emerging-technologies">Emerging Technologies</option>
                          <option value="logistics-supply-chain">Logistics & Supply Chain</option>
                          <option value="partnership-opportunity">Partnership Opportunity</option>
                          <option value="career-inquiry">Career Inquiry</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={3}
                          placeholder="Write Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn hover-primary w-100"
                          data-hover="Submit Request"
                        >
                          <span>Submit Request</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Consultation;
