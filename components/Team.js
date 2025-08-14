"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
import teamMembers from "@/data/teamMembers";

const Team = () => {
  return (
    <Slider {...sliderProps.teamSlider} className="team-slider">
      {teamMembers.map((member, index) => (
        <div
          className="team-item style-two"
          data-aos="fade-up"
          data-aos-delay={100 * (index + 1)}
          data-aos-duration={1500}
          data-aos-offset={50}
          key={member.id}
        >
          <div className="image">
            <img src={member.image} alt={member.name} width={300} height={330} />
            <div className="icon">
              <i className="far fa-plus" />
              <div className="social-style-one">
                <a href={member.social.facebook}>
                  <i className="fab fa-facebook-f" />
                </a>
                <a href={member.social.twitter}>
                  <i className="fab fa-twitter" />
                </a>
                <a href={member.social.instagram}>
                  <i className="fab fa-instagram" />
                </a>
                {member.social.github && (
                  <a href={member.social.github}>
                    <i className="fab fa-github" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="content">
            <h5 className="name">
              <Link href={`/team/${member.id}`}>{member.name}</Link>
            </h5>
            <span className="designations">{member.position}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};
export default Team;
