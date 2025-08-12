import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";

const CaseStudySlugPage = () => {
  const caseStudy = {
    title: "DOTTSA Travels Agency",
    clientName: "Mr Genjang Samwell CEO of DOTTSA Travels",
    commencementDate: "July 13 2023",
    endDate: "August 2 2023",
    liveProjectUrl: "https://dottsa.com/",
    developer: {
      name: "Hans Ade (Anye Happiness Ade)",
      profession: "Software Developer and AI Engineer",
      github: "Hansade2005",
    },
    techStack: [
      "Custom Web Development",
      "Visa Facilitation Systems",
      "Booking Management",
      "Study Abroad Program Integration",
      "Sustainable Tourism Practices",
    ],
    servicesProvided: [
      "Tourist and work visa facilitation for destinations like Canada, UAE (Dubai), Russia, Australia, etc.",
      "Study visas and language study placements (\"Study Diverse Languages at DOTTSA\")",
      "Scholarship admissions (e.g., for Sweden)",
      "Flexible booking options with a \"Flexibility Promise\"",
      "Commitment to sustainable tourism",
    ],
    imageUrl: "https://api.a0.dev/assets/image?text=DOTTSA+Travels+Agency+Visa+Booking+Study+Abroad&aspect=16:9&seed=789",
    objective: `To establish a comprehensive online platform for DOTTSA Travels Agency, offering a wide array of travel-related solutions. The primary objective was to streamline processes for visa services, trip bookings, and arrangements for studying or working abroad, providing a user-friendly and reliable resource for international travelers and students.`,
    solution: `The DOTTSA Travels Agency website was developed as a robust and intuitive portal designed to cater to diverse travel needs. It features dedicated sections for various visa services, including tourist and work visas for popular destinations such as Canada, UAE (Dubai), Russia, and Australia. The platform also facilitates study visas and offers placements for language studies through its \"Study Diverse Languages at DOTTSA\" program. A key highlight is the integration of scholarship admission support, exemplified by successful placements in countries like Sweden. The website incorporates flexible booking options, backed by a \"Flexibility Promise\" to ensure customer peace of mind. Furthermore, the platform emphasizes sustainable tourism practices, reflecting DOTTSA's commitment to responsible travel. The development focused on creating a seamless user experience, from initial inquiry to final booking and visa approval.`,
    results: `The launch of the DOTTSA Travels Agency website has significantly enhanced the agency's operational efficiency and client reach. The streamlined online processes have reduced administrative overhead and improved response times for visa applications and booking inquiries. Clients now benefit from a transparent and accessible platform for exploring various travel and study opportunities. The \"Flexibility Promise\" has garnered positive feedback, building trust and loyalty among users. DOTTSA Travels Agency has successfully positioned itself as a reliable and comprehensive provider of international travel and education solutions, contributing to increased client satisfaction and business growth.`,
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
                          <Link href="/cases/travel-solutions">Travel Solutions</Link>,
                          <Link href="/cases/visa-services">Visa Services</Link>,
                          <Link href="/cases/study-abroad">Study Abroad</Link>
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
                <h5 className="mt-40">Key Services:</h5>
                <ul className="list-style-two mt-20">
                  {caseStudy.servicesProvided.map((service, i) => (
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
