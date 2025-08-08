"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const Team = () => {
  return (
    <Slider {...sliderProps.teamSlider} className="team-slider">
      <div
        className="team-item style-two"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="https://api.a0.dev/assets/image?text=Confident IT consultant in a modern office, smiling, business attire, 300x330px, realistic, 8K.&aspect=10:11&seed=301" alt="Team Member" width={300} height={330} />
          <div className="icon">
            <i className="far fa-plus" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <h5 className="name">
            <Link href="team-details">David R. Watkins</Link>
          </h5>
          <span className="designations">IT Consultant</span>
        </div>
      </div>
      <div
        className="team-item style-two"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="https://api.a0.dev/assets/image?text=Creative UI designer at a desk with sketches and a laptop, friendly, 300x330px, realistic, 8K.&aspect=10:11&seed=302" alt="Team Member" width={300} height={330} />
          <div className="icon">
            <i className="far fa-plus" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <h5 className="name">
            <Link href="team-details">James K. Andrews</Link>
          </h5>
          <span className="designations">UI Designer</span>
        </div>
      </div>
      <div
        className="team-item style-two"
        data-aos="fade-up"
        data-aos-delay={300}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="https://api.a0.dev/assets/image?text=Professional IT support specialist helping a client, headset, modern workspace, 300x330px, realistic, 8K.&aspect=10:11&seed=303" alt="Team Member" width={300} height={330} />
          <div className="icon">
            <i className="far fa-plus" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <h5 className="name">
            <Link href="team-details">Kenneth B. Hebert</Link>
          </h5>
          <span className="designations">HR Support</span>
        </div>
      </div>
      <div
        className="team-item style-two"
        data-aos="fade-up"
        data-aos-delay={400}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="assets/images/team/member4.jpg" alt="Team Member" />
          <div className="icon">
            <i className="far fa-plus" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <h5 className="name">
            <Link href="team-details">Alexander M. Burris</Link>
          </h5>
          <span className="designations">Product Designer</span>
        </div>
      </div>
      <div
        className="team-item style-two"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="assets/images/team/member1.jpg" alt="Team Member" />
          <div className="icon">
            <i className="far fa-plus" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <h5 className="name">
            <Link href="team-details">David R. Watkins</Link>
          </h5>
          <span className="designations">IT Consultant</span>
        </div>
      </div>
      <div
        className="team-item style-two"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="assets/images/team/member2.jpg" alt="Team Member" />
          <div className="icon">
            <i className="far fa-plus" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <h5 className="name">
            <Link href="team-details">James K. Andrews</Link>
          </h5>
          <span className="designations">UI Designer</span>
        </div>
      </div>
      <div
        className="team-item style-two"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="assets/images/team/member3.jpg" alt="Team Member" />
          <div className="icon">
            <i className="far fa-plus" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <h5 className="name">
            <Link href="team-details">Kenneth B. Hebert</Link>
          </h5>
          <span className="designations">HR Support</span>
        </div>
      </div>
      <div
        className="team-item style-two"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img src="assets/images/team/member4.jpg" alt="Team Member" />
          <div className="icon">
            <i className="far fa-plus" />
            <div className="social-style-one">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <h5 className="name">
            <Link href="team-details">Alexander M. Burris</Link>
          </h5>
          <span className="designations">Product Designer</span>
        </div>
      </div>
    </Slider>
  );
};
export default Team;
