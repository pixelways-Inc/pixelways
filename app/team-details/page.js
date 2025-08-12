import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
const page = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Team Member Profile" />
      <section className="team-detial-area pt-130 rpt-100 pb-110 rpb-80 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="team-detials-left-part rmb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="team-details-image">
                  <img
                    src="assets/images/team/team-details.jpg"
                    alt="Team Details"
                  />
                </div>
                <h3>Our Expert Team</h3>
                <p>Driving Digital Transformation</p>
                <hr className="mt-35 mb-40" />
                <div className="team-contact-info">
                  <h5 className="title">Connect With Us</h5>
                  <div className="team-info-item">
                    <span>Email Address</span>
                    <a href="mailto:hello@pixelways.co">hello@pixelways.co</a>
                  </div>
                  <div className="team-info-item">
                    <span>Need a Call</span>
                    <a href="tel:+237679719353">+237 679 719 353</a> / <a href="tel:+14164071923">+1 (416) 407-1923</a>
                  </div>
                  <div className="team-info-item">
                    <span>Location</span>
                    <p>4030 Sheppard Ave E, Scarborough, ON, Canada</p>
                  </div>
                </div>
                <hr className="my-40" />
                <div className="team-contact-info social-icons">
                  <h5 className="title">Follow Us</h5>
                  <div className="social-style-six">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="team-detials-right-part"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-20">
                  <h2>About Our Team's Expertise</h2>
                </div>
                <p>
                  At Pixelways Solutions, our team of dedicated IT and digital consultants provides expert guidance to help organizations navigate complex challenges, seize opportunities, and achieve their full potential. By analyzing current operations, identifying inefficiencies, and uncovering growth opportunities, we develop tailored strategies that drive success. We work closely with clients to deliver actionable solutions, from refining business processes and optimizing financial performance to implementing innovative technologies.
                </p>
                <div
                  className="qualification-wrap mt-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h3 className="mb-20">Our Collective Expertise & Qualifications</h3>
                  <p>
                    Our team's professional qualifications encompass a broad range of abilities and
                    expertise essential for success in the digital landscape.
                    This includes robust technical proficiency, advanced data analysis, strategic management, and critical soft skills such as communication, leadership, problem-solving
                    and adaptability.
                  </p>
                  <div className="qualification-item mt-40">
                    <div className="number">1</div>
                    <div className="content">
                      <h5>Technology Landscape Analysis &amp; Strategic Planning</h5>
                      <p>
                        We provide in-depth analysis of the current technology landscape and competitor strategies to identify opportunities and develop robust IT roadmaps.
                      </p>
                    </div>
                  </div>
                  <div className="qualification-item">
                    <div className="number">2</div>
                    <div className="content">
                      <h5>Digital Solution Architecture &amp; Design</h5>
                      <p>
                        Our experts design scalable and secure digital architectures, ensuring your solutions are built on a strong foundation for future growth.
                      </p>
                    </div>
                  </div>
                  <div className="qualification-item">
                    <div className="number">3</div>
                    <div className="content">
                      <h5>Implementation &amp; Optimization of Digital Solutions</h5>
                      <p>
                        We specialize in the seamless implementation of new technologies and continuous optimization to ensure maximum performance and ROI.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="progress-bar-wrap my-55"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="skillbar" data-percent={89}>
                    <span className="skillbar-title">IT Consulting</span>
                    <div className="skillbar-wrap">
                      <div className="skillbar-bar" />
                    </div>
                    <span className="skill-bar-percent" />
                  </div>
                  <div className="skillbar" data-percent={67}>
                    <span className="skillbar-title">Software Development</span>
                    <div className="skillbar-wrap">
                      <div className="skillbar-bar" />
                    </div>
                    <span className="skill-bar-percent" />
                  </div>
                  <div className="skillbar" data-percent={83}>
                    <span className="skillbar-title">UI/UX Design</span>
                    <div className="skillbar-wrap">
                      <div className="skillbar-bar" />
                    </div>
                    <span className="skill-bar-percent" />
                  </div>
                  <div className="skillbar" data-percent={70}>
                    <span className="skillbar-title">Cybersecurity</span>
                    <div className="skillbar-wrap">
                      <div className="skillbar-bar" />
                    </div>
                    <span className="skill-bar-percent" />
                  </div>
                </div>
                <h3 className="mb-15">Recognized for Excellence</h3>
                <p>
                  Our commitment to excellence, innovation, and client success has earned us recognition in the industry. These accolades reflect the quality of our work and the dedication of our team in delivering cutting-edge digital solutions that drive tangible results for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};
export default page;
