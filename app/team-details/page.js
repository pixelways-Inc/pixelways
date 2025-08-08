import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
const page = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Team Details" />
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
                <h3>Hans Ade</h3>
                <p>Business Consultant</p>
                <hr className="mt-35 mb-40" />
                <div className="team-contact-info">
                  <h5 className="title">Contact Me</h5>
                  <div className="team-info-item">
                    <span>Email Address</span>
                    <a href="mailto:supportsaylo@gmail@gmail.com
                    </a>
                  </div>
                  <div className="team-info-item">
                    <span>Need a Call</span>
                    <a href="tel:+14164071923">+1 (416) 407-1923</a>
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
                  <h2>Hello</h2>
                </div>
                <p>
                  IT consultant provides expert guidance to help organizations
                  navigate challenges, seize opportunities, and achieve their
                  full potential. By analyzing th company’s current operations,
                  identifying inefficiencies, and uncovering growth
                  opportunities, a business consultant develops tailored
                  strategies that drive success. Whether refining business
                  processes, optimizing financial performance implementing
                  innovative technologies, consultants work closely with clients
                  to deliver actionable solutions.
                </p>
                <div
                  className="qualification-wrap mt-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h3 className="mb-20">Professional Qualification</h3>
                  <p>
                    Professional skills encompass a broad range of abilities and
                    expertise that are essential for success in any career.
                    These include both hard skills, such as technical
                    proficiency, data analysis management, as well as soft
                    skills like communication, leadership, problem-solving
                    adaptability.
                  </p>
                  <div className="qualification-item mt-40">
                    <div className="number">1</div>
                    <div className="content">
                      <h5>Market Research &amp; Competitor Analysis</h5>
                      <p>
                        Gain a deeper understanding of your industry landscape
                        and target audience through in-depth market research. We
                        analyze competitor strategies, identify market gaps.
                      </p>
                    </div>
                  </div>
                  <div className="qualification-item">
                    <div className="number">2</div>
                    <div className="content">
                      <h5>Brand Strategy Development</h5>
                      <p>
                        We help you build or refine your brand identity to
                        ensure consistency and relevance. From defining your
                        brand’s mission and values to creating a compelling{" "}
                      </p>
                    </div>
                  </div>
                  <div className="qualification-item">
                    <div className="number">3</div>
                    <div className="content">
                      <h5>Digital Marketing Strategy</h5>
                      <p>
                        Reach your customers where they are. Our digital
                        marketing solutions cover SEO, social media marketing,
                        email marketing, and PPC (pay-per-click) campaigns.
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
                    <span className="skillbar-title">Software Solution</span>
                    <div className="skillbar-wrap">
                      <div className="skillbar-bar" />
                    </div>
                    <span className="skill-bar-percent" />
                  </div>
                  <div className="skillbar" data-percent={83}>
                    <span className="skillbar-title">Product Design</span>
                    <div className="skillbar-wrap">
                      <div className="skillbar-bar" />
                    </div>
                    <span className="skill-bar-percent" />
                  </div>
                  <div className="skillbar" data-percent={70}>
                    <span className="skillbar-title">Cyber Security</span>
                    <div className="skillbar-wrap">
                      <div className="skillbar-bar" />
                    </div>
                    <span className="skill-bar-percent" />
                  </div>
                </div>
                <h3 className="mb-15">Awards Winning</h3>
                <p>
                  Our award-winning services reflect our commitment to
                  excellence, innovation, and client success. Over the years,
                  we’ve been recognized for our outstanding performance in
                  various areas, from busing consulting and marketing strategy
                  to customer service and leadership. These accolades serve as a
                  testament to the quality of our work, the dedication of our
                  team.
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
