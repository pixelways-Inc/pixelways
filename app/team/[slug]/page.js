import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import allTeamMembers from "@/data/team.json";

export async function generateStaticParams() {
  return allTeamMembers.map((member) => ({
    slug: member.id,
  }));
}

const TeamDetails = ({ params }) => {
  const { slug } = params;
  const member = allTeamMembers.find((m) => m.id === slug);

  if (!member) {
    return <div>Team member not found</div>;
  }

  return (
    <TekprofLayout>
      <PageBanner pageName={member.name} />
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
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
                <hr className="mt-35 mb-40" />
                <div className="team-contact-info">
                  <h5 className="title">Connect With Us</h5>
                  <div className="team-info-item">
                    <span>Email Address</span>
                    <a className="team-info-item" href={`mailto:${member.contact.email}`}>{member.contact.email}</a>
                  </div>
                  <div className="team-info-item">
                    <span>Need a Call</span>
                    <a className="team-info-item" href={`tel:${member.contact.phone1}`}>{member.contact.phone1}</a> / <a className="team-info-item" href={`tel:${member.contact.phone2}`}>{member.contact.phone2}</a>
                  </div>
                  <div className="team-info-item">
                    <span >Location</span>
                    <p className="team-info-item">{member.contact.location}</p>
                  </div>
                </div>
                <hr className="my-40" />
                <div className="team-contact-info social-icons">
                  <h5 className="title">Follow Us</h5>
                  <div className="social-style-six">
                    <a className="title" href={member.social.facebook}>
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="title" href={member.social.twitter}>
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="title" href={member.social.linkedin}>
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="title" href={member.social.youtube}>
                      <i className="fab fa-youtube" />
                    </a>
                    {member.social.github && (
                      <a className="title" href={member.social.github}>
                        <i className="fab fa-github" />
                      </a>
                    )}
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
                  <h2>About {member.name}'s Expertise</h2>
                </div>
                {member.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
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
                  {member.qualifications.map((qualification) => (
                    <div className="qualification-item mt-40" key={qualification.number}>
                      <div className="number">{qualification.number}</div>
                      <div className="content">
                        <h5>{qualification.title}</h5>
                        <p>{qualification.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="progress-bar-wrap my-55"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  {member.skills.map((skill) => (
                    <div className="skillbar" data-percent={skill.percent} key={skill.name}>
                      <span className="skillbar-title">{skill.name}</span>
                      <div className="skillbar-wrap">
                        <div className="skillbar-bar" />
                      </div>
                      <span className="skill-bar-percent" />
                    </div>
                  ))}
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
export default TeamDetails;
