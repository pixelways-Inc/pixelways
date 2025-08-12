import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";

const CaseStudySlugPage = () => {
  const caseStudy = {
    title: "CAM TRAV International Consulting – Travel Agency and Consultancy",
    clientName: "Cam Trav International",
    commencementDate: "September 14 2022",
    endDate: "June 2023", // Assuming June 2023 as end date, as June 2022 is before start date
    liveProjectUrl: "https://camtravinternational.cm",
    developer: {
      name: "Hans Ade (Anye Happiness Ade)",
      profession: "Software Developer and AI Engineer",
      github: "Hansade2005",
    },
    techStack: [
      "Web Development",
      "CRM (Client Relationship Management)",
      "Booking Systems Integration",
      "Financial Management Tools",
      "Document Management Systems",
    ],
    servicesOffered: [
      "Career Orientation & Development – guidance on choosing education or vocational paths for those planning to study or work abroad.",
      "Visa Assistance – comprehensive support including application preparation, embassy appointment facilitation, interview coaching, and processing for study, work, tourist, or conference visas.",
      "Financial Consultancy – budgeting and financial planning advice for travel, study, or relocation.",
      "Flight Ticket Booking & Sales – booking and reservation of affordable flight tickets worldwide.",
      "Hotel Reservations & Airport Pickup – arranging hotel stays and airport pickups tailored to client needs.",
      "Admission into Foreign Universities – assistance with securing admission and scholarships in countries like the USA, UK, Canada, Australia, Europe, etc.",
      "Documentation & Communication Services – ensuring accuracy and completeness of all documents and maintaining contractual records.",
      "Study & Work Abroad Consultancy – extended support covering admission procedures, employment contracts, residence permits, scholarship info, and placement services.",
      "Tourism in Cameroon – offering information on local attractions, tours, hiking, and guided experiences.",
    ],
    additionalHighlights: [
      "Registered in Cameroon with number RC/DLBB/2020/A/545 and NIU P039415129407D.",
      "Office situated beside Carrefour Sapeur Pompier, Bonaberi, Douala.",
      "Phone: +237 650 416 962 / 650 190 877",
      "Email: info@camtravinternational.cm",
      "Working Hours: Monday–Friday 8 AM–5 PM; Saturday until 2 PM",
      "Offers a free consultation in-office and advises caution against scams; only official transactions are conducted at their physical office.",
    ],
    imageUrl: "https://api.a0.dev/assets/image?text=CAM+TRAV+International+Consulting+Travel+Agency+Cameroon&aspect=16:9&seed=2324",
    objective: `To establish a comprehensive and reliable online presence for CAM TRAV International Consulting, a travel agency and consultancy based in Douala, Cameroon. The primary objective was to simplify the complex processes of living, studying, working, or traveling abroad for clients by providing expert guidance and professional handling of all necessary arrangements.`,
    solution: `The CAM TRAV International Consulting website was developed as a central platform to showcase and facilitate their extensive range of services. The site features detailed sections for career orientation, visa assistance (including application preparation and interview coaching), financial consultancy, and seamless flight and hotel booking capabilities. A robust backend system was implemented to manage client documentation, communication records, and contractual agreements, ensuring accuracy and compliance. The platform also provides comprehensive support for admissions into foreign universities, including scholarship information and placement services. Furthermore, it highlights their expertise in study and work abroad consultancy, covering everything from employment contracts to residence permits. The website is designed to be user-friendly, providing easy access to information on their services, contact details, and operational hours, reinforcing their commitment to transparency and client support.`,
    results: `CAM TRAV International Consulting has significantly expanded its reach and efficiency through its new digital platform. Clients now have streamlined access to a wide array of international travel and study services, leading to increased client satisfaction and a higher success rate in visa applications and university admissions. The organized management of documentation and communication has improved operational workflows and reduced administrative burdens. The platform's clear presentation of services and commitment to professional guidance has strengthened CAM TRAV's reputation as a trusted partner for international aspirations. The ability to offer free consultations online has also broadened their client base, solidifying their position as a leading travel and consultancy agency in Cameroon.`,
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
                          <Link href="/cases/travel-agency">Travel Agency</Link>,
                          <Link href="/cases/consultancy">Consultancy</Link>,
                          <Link href="/cases/international-services">International Services</Link>
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
                <h2>Solution & Services Offered</h2>
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
                <h5 className="mt-40">Key Services Offered:</h5>
                <ul className="list-style-two mt-20">
                  {caseStudy.servicesOffered.map((service, i) => (
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
                <h5 className="mt-40">Additional Highlights & Contact Info:</h5>
                <ul className="list-style-two mt-20">
                  {caseStudy.additionalHighlights.map((highlight, i) => (
                    <li key={i}>
                      <i className="far fa-check" /> {highlight}
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
