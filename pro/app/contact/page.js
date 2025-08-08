import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
const page = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Contact" />
      <section className="contact-form-area pt-130 rpt-100 pb-120 rpb-90">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6 col-md-9">
              <div
                className="contact-info-part rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-40">
                  <span className="sub-title mb-10">Get In Touch</span>
                  <h2>Ready to Transform? Get in Touch</h2>
                </div>
                <p>
                  Each of these titles is designed to be approachable and
                  encourage clients to take the first step in reaching
                  adjustments
                </p>
                <div className="contact-info-wrap mt-40">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-map-marker-alt" />
                    </div>
                    <div className="text">
                      <span className="title">Office Location</span>
                      <p>4030 Sheppard Ave E, Scarborough, ON, Canada</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="text">
                      <span className="title">Email Address</span>
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                      <br />
                      <a href="mailto:uintechservice.com">uintechservice.com</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-phone-volume" />
                    </div>
                    <div className="text">
                      <span className="title">Need Any Help</span>
                      <a href="tel:+14164071923">+1 (416) 407-1923</a>,
                      <a href="tel:+237679719353">+237 679 719 353</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-9">
              <div
                className="contact-page-form z-1 rel"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  action="assets/php/form-process.php"
                  method="post"
                >
                  <h4>What can we help you with?</h4>
                  <p>Your email address will not be published*</p>
                  <div className="row mt-20">
                    <div className="col-sm-12">
                      <div className="form-group mb-15">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name here"
                          required
                          data-error="Please enter your Name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-15">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          required
                          data-error="Please enter your Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-15">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                          required
                          data-error="Please enter your Subject"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-25">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="write message"
                          required
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn"
                          data-hover="Send Message"
                        >
                          <span>Send Us Message</span>
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            className="our-location mt-130 rmt-100"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96777.16150026117!2d-74.00840582560909!3d40.71171357405996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};
export default page;
