"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
import allTeamMembers from "@/data/team.json";

/**
 * 
 * @param {Object} param0 
 * @param {'list' | 'slide'} param0.mode - Determines how team members should be rendered
 * @param {String} param0.containerClass - Preferred classnames to be passed to the main section
 * @param {Number | null } param0.limit - This is the number of team members to be rendered
 * @param {String} param0.layout - Layout style: 'style-one' (default), 'style-two' (team page)
 * @param {Boolean} param0.standalone - Whether to render as standalone section with wrapper
 * @returns {JSX.Element}
 */
const Team = ({
  containerClass = "py-5", 
  mode = "slide", 
  limit = null,
  layout = "style-one",
  standalone = true
}) => {
  
  const selectedTeamMembers = limit ? allTeamMembers.slice(0, limit) : allTeamMembers;

  // Ensure sliderProps.teamSlider has proper horizontal settings
  const sliderSettings = {
    ...sliderProps.teamSlider,
    autoplay: true,
    autoplaySpeed: 5000,
    vertical: false, // Ensure horizontal sliding
    verticalSwiping: false, // Disable vertical swiping
  };

  const TeamCard = ({ member, index, isSlider = false }) => {
    if (layout === "style-two") {
      return (
        <div 
          className={isSlider ? "p-2" : "col-lg-6"}
          key={member.id}
        >
          <div
            className="team-item-two"
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="content">
              <h3 className="name">
                <Link href={`/team/${member.id}`}>{member.name}</Link>
              </h3>
              <span className="designation">{member.position}</span>
              <div className="bottom-part">
                <p>
                  {member.bio[0].substring(0, 150)}...
                </p>
                <Link className="details-btn" href={`/team/${member.id}`}>
                  <i className="far fa-arrow-right" />
                </Link>
                <div className="social-style-five">
                  <a href={member.social.facebook}>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href={member.social.twitter}>
                    <i className="fab fa-twitter" />
                  </a>
                  <a href={member.social.linkedin}>
                    <i className="fab fa-linkedin-in" />
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
          </div>
        </div>
      );
    }

    // Default style-one layout
    return (
      <div key={member.id} className={isSlider ? "p-2" : "col-xl-4 col-md-6"}>
        <div
          className="team-item style-two"
          data-aos="fade-up"
          data-aos-delay={100 * (index + 1)}
          data-aos-duration={1500}
          data-aos-offset={50}
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
      </div>
    );
  };

  return (
    <>
      {standalone ? (
        <section className="team-area rel z-1">
          <div className="container pt-130 rpt-100 pb-100 rpb-70">
            <div className={containerClass}>
              {mode === 'slide' ? (
                <Slider {...sliderSettings} className="team-slider">
                  {selectedTeamMembers.map((member, index) => (
                    <TeamCard 
                      key={member.id} 
                      member={member} 
                      index={index} 
                      isSlider={true} 
                    />
                  ))}
                </Slider>
              ) : (
                <div className={layout === "style-two" ? "row gap-70" : "row justify-content-center"}>
                  {selectedTeamMembers.map((member, index) => (
                    <TeamCard 
                      key={member.id} 
                      member={member} 
                      index={index} 
                      isSlider={false} 
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <>
          {mode === 'slide' ? (
            <Slider {...sliderSettings} className="team-slider">
              {selectedTeamMembers.map((member, index) => (
                <TeamCard 
                  key={member.id} 
                  member={member} 
                  index={index} 
                  isSlider={true} 
                />
              ))}
            </Slider>
          ) : (
            <div className={layout === "style-two" ? "row gap-70" : "row justify-content-center"}>
              {selectedTeamMembers.map((member, index) => (
                <TeamCard 
                  key={member.id} 
                  member={member} 
                  index={index} 
                  isSlider={false} 
                />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};
export default Team;
