import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";

const CaseStudySlugPage = () => {
  const caseStudy = {
    title: "SOBA Ontario – Saint Joseph’s College Sasse Alumni Association",
    clientName: "SOBA Ontario",
    commencementDate: "June 10 2025",
    endDate: "June 17 2025",
    liveProjectUrl: "https://sobaontario.org",
    developer: {
      name: "Hans Ade (Anye Happiness Ade)",
      profession: "Software Developer and AI Engineer",
      github: "Hansade2005",
    },
    techStack: [
      "Web Development",
      "Content Management System (CMS)",
      "Community Platform Features",
      "Secure Member Portal",
      "Donation & Event Management Integration",
    ],
    servicesAndInitiatives: [
      "Member Support & Integration: Assists new alumni in adapting to life in Canada, offering mentorship and guidance.",
      "Financial & Emergency Aid: Offers financial assistance, death benefits, and emergency support to members.",
      "Professional Networking: Builds connections for career opportunities and partnerships among alumni.",
      "Educational Support: Provides scholarships, bursaries, mentorship, and educational resources to members and students.",
      "Community Outreach: Runs programs focused on education, healthcare, community development (such as water projects, solar installations), and youth empowerment both in Ontario and Cameroon.",
      "Cultural & Social Events: Organizes gatherings like Community Day, St Joseph Feast Day celebrations, and networking events to strengthen bonds within the community.",
      "Membership Benefits: Includes access to emergency aid, networking events, educational programs, and community integration services for an annual fee of $100; the association has over 30 active members and supports more than 50 students.",
    ],
    impact: [
      "Over 50 students supported yearly",
      "More than $100K raised",
      "10+ completed projects",
      "5+ communities reached",
    ],
    imageUrl: "https://api.a0.dev/assets/image?text=SOBA+Ontario+Alumni+Association+Community+Service&aspect=16:9&seed=1718",
    objective: `To create a robust online presence for SOBA Ontario, a not-for-profit alumni association, to effectively foster brotherhood, facilitate integration, and promote community service among its members. The primary objective was to build a platform that supports graduates of Saint Joseph’s College, Sasse, residing in Ontario, Canada, by centralizing resources for member support, financial aid, networking, educational initiatives, and community outreach.`,
    solution: `The SOBA Ontario website was developed as a comprehensive digital hub designed to meet the diverse needs of its alumni community. Leveraging a user-friendly Content Management System (CMS), the platform allows for easy updates and management of various programs and initiatives. A secure member portal was implemented to provide exclusive access to resources, mentorship programs, and financial aid applications. The site integrates event management functionalities for cultural and social gatherings, enhancing community engagement. Furthermore, the platform highlights SOBA Ontario's extensive community outreach efforts, showcasing projects in education, healthcare, and sustainable development both locally and internationally. The website serves as a central point for professional networking, educational support, and transparent communication regarding membership benefits and financial contributions.`,
    results: `The SOBA Ontario website has significantly amplified the association's reach and impact, enabling it to better serve its growing community. The streamlined online processes have improved member engagement and facilitated easier access to support services. The platform's clear presentation of initiatives has contributed to successful fundraising efforts, with over $100,000 raised and more than 10 projects completed, benefiting over 5 communities. The ability to support over 50 students yearly through scholarships and mentorship programs has strengthened the association's educational mission. Overall, the website has solidified SOBA Ontario's position as a vital pillar of support and community development for Sobans in Canada and beyond.`,
  };

  return (
    <TekprofLayout>
      <PageBanner pageName="Case Study" title={caseStudy.title} />
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
                <h2>{caseStudy.title}</h2>
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
                          <Link href="/cases/non-profit">Non-Profit</Link>,
                          <Link href="/cases/community">Community</Link>,
                          <Link href="/cases/alumni-association">Alumni Association</Link>
                        </div>
                      </div>
                    </div>
                    <div className="case-info-item">
                      <h4 className="title">Client</h4>
                      <div className="content">
                        <span className="title">{caseStudy.clientName}</span>
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
                              <br /> {caseStudy.commencementDate}
                            </p>
                          </div>
                          <div className="col-6">
                            <p>
                              End On
                              <br /> {caseStudy.endDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="case-info-item">
                      <h4 className="title">Developer</h4>
                      <div className="content">
                        <p>{caseStudy.developer.name}</p>
                        <p>{caseStudy.developer.profession}</p>
                        <p>GitHub: <a href={`https://github.com/${caseStudy.developer.github}`} target="_blank" rel="noopener noreferrer">{caseStudy.developer.github}</a></p>
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
                  src={caseStudy.imageUrl}
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
                <p>{caseStudy.objective}</p>
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
                <h2>Solution & Services Provided</h2>
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
                <p>{caseStudy.solution}</p>
                <h5 className="mt-40">Key Services & Initiatives:</h5>
                <ul className="list-style-two mt-20">
                  {caseStudy.servicesAndInitiatives.map((service, i) => (
                    <li key={i}>
                      <i className="far fa-check" /> {service}
                    </li>
                  ))}
                </ul>
                <h5 className="mt-40">Tech Stack Used:</h5>
                <ul className="list-style-two mt-20">
                  {caseStudy.techStack.map((tech, i) => (
                    <li key={i}>
                      <i className="far fa-check" /> {tech}
                    </li>
                  ))}
                </ul>
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
                <p>{caseStudy.results}</p>
                <h5 className="mt-40">Impact Metrics:</h5>
                <ul className="list-style-two mt-20">
                  {caseStudy.impact.map((metric, i) => (
                    <li key={i}>
                      <i className="far fa-check" /> {metric}
                    </li>
                  ))}
                </ul>
                <h5 className="mt-40">View Live Project:</h5>
                <p><a href={caseStudy.liveProjectUrl} target="_blank" rel="noopener noreferrer">{caseStudy.liveProjectUrl}</a></p>
              </div>
            </div>
          </div>
          <hr className="mt-55" />
        </div>
      </section>
    </TekprofLayout>
  );
};

export default CaseStudySlugPage;
