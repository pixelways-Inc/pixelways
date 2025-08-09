import PageBanner from "@/components/PageBanner";
import { ProgressBar3 } from "@/components/ProgressBar";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
const page = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Meet Our Expert Team" />
      <section className="team-page-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="team-page-left-content rmb-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    Our Vision: Solutions Beyond Technology, Success Beyond Boundaries
                  </h2>
                </div>
                <p>
                  At Pixelways Solution, we are dedicated to being your trusted partner in digital transformation. Our team provides the expertise, innovative technology, and unwavering support needed to help your business thrive.
                </p>
                <div className="row pt-35 rpt-25">
                  <div className="col-sm-6">
                    <div className="circle-progress-item-two">
                      <ProgressBar3 value={80} />
                      <h4>
                        Software
                        <br /> Development Expertise
                      </h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="circle-progress-item-two">
                      <ProgressBar3 value={90} />
                      <h4>
                        IT Consulting &amp;
                        <br /> Management
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="team-page-right-image mb-30"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/team/team-page-right.jpg" alt="Team" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-area pb-80 rpb-50 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-70 rmb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Our Dedicated Professionals
                </span>
                <h2>Meet Our Experienced Technical Team</h2>
              </div>
            </div>
          </div>
          <div className="row gap-70">
            <div className="col-lg-6">
              <div
                className="team-item-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member5.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h3 className="name">
                    <Link href="team-details">David R. Watkins</Link>
                  </h3>
                  <span className="designation">IT Consultant</span>
                  <div className="bottom-part">
                    <p>
                      As a seasoned IT consultant, David specializes in bridging the
                      gap between complex technology and practical business solutions, driving efficiency and innovation.
                    </p>
                    <Link className="details-btn" href="team-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                    <div className="social-style-five">
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
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="team-item-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member6.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h3 className="name">
                    <Link href="team-details">Robert S. Hummel</Link>
                  </h3>
                  <span className="designation">IT Consultant</span>
                  <div className="bottom-part">
                    <p>
                      Robert focuses on identifying opportunities for technological improvement within organizations, developing and implementing strategies that enhance operational effectiveness.
                    </p>
                    <Link className="details-btn" href="team-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                    <div className="social-style-five">
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
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="team-item-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member7.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h3 className="name">
                    <Link href="team-details">Eugene A. Howland</Link>
                  </h3>
                  <span className="designation">IT Consultant</span>
                  <div className="bottom-part">
                    <p>
                      Eugene excels at analyzing current IT infrastructures to pinpoint areas for optimization, ensuring robust and scalable solutions for our clients.
                    </p>
                    <Link className="details-btn" href="team-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                    <div className="social-style-five">
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
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="team-item-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member8.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h3 className="name">
                    <Link href="team-details">Paul G. Hundley</Link>
                  </h3>
                  <span className="designation">IT Consultant</span>
                  <div className="bottom-part">
                    <p>
                      Paul is dedicated to developing and implementing cutting-edge IT strategies that align with business objectives, fostering growth and competitive advantage.
                    </p>
                    <Link className="details-btn" href="team-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                    <div className="social-style-five">
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
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="team-item-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member9.jpg" alt="Team Member" />
                </div>
                <div className="content">
                  <h3 className="name">
                    <Link href="team-details">Danny J. Harrison</Link>
                  </h3>
                  <span className="designation">IT Consultant</span>
                  <div className="bottom-part">
                    <p>
                      Danny's expertise lies in transforming IT challenges into strategic opportunities, providing comprehensive solutions that streamline processes and boost productivity.
                    </p>
                    <Link className="details-btn" href="team-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                    <div className="social-style-five">
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
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="team-item-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/team/member10.jpg"
                    alt="Team Member"
                  />
                </div>
                <div className="content">
                  <h3 className="name">
                    <Link href="team-details">Nathan S. Barber</Link>
                  </h3>
                  <span className="designation">IT Consultant</span>
                  <div className="bottom-part">
                    <p>
                      Nathan is committed to helping clients leverage technology to its fullest potential, offering expert guidance on system optimization and digital transformation initiatives.
                    </p>
                    <Link className="details-btn" href="team-details">
                      <i className="far fa-arrow-right" />
                    </Link>
                    <div className="social-style-five">
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
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
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
