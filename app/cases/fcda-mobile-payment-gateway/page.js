import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";

const CaseStudySlugPage = () => {
  const caseStudy = {
    title: "FCDA Mobile Payment Gateway",
    clientName: "FCDA Cameroon",
    commencementDate: "April 03 2025",
    endDate: "April 21 2025",
    liveProjectUrl: "https://market.fcdacameroon.org/api/documentation.php",
    developer: {
      name: "Hans Ade (Anye Happiness Ade)",
      profession: "Software Developer and AI Engineer",
      github: "Hansade2005",
    },
    techStack: [
      "PHP 8.2",
      "MySQL 5",
      "Tankstack Query",
      "Pusher",
    ],
    servicesOffered: [
      "Mobile Money Payment Integration (MTN & Orange)",
      "Payment Collection",
      "Payouts to Mobile Money Accounts",
      "Real-time Transaction Status Check",
      "Webhook Notifications",
      "API Documentation & Testing",
    ],
    additionalHighlights: [
      "Easy integration of mobile money payments.",
      "Supports MTN and Orange mobile money services in Cameroon.",
      "Provides a built-in test suite for API validation.",
      "Handles phone numbers starting with 67, 65, 68 for MTN Mobile Money.",
      "Handles phone numbers starting with 69, 66 for Orange Money.",
    ],
    imageUrl: "https://api.a0.dev/assets/image?text=FCDA+Mobile+Payment+Gateway+Cameroon&aspect=16:9&seed=789012",
    objective: `To provide a robust and easy-to-integrate mobile money payment gateway for applications in Cameroon, supporting both MTN and Orange mobile money services. The primary goal was to simplify payment collection and payouts, enable real-time transaction tracking, and offer comprehensive API documentation for developers.`,
    solution: `The FCDA Mobile Payment Gateway was developed as a comprehensive API solution built on PHP 8.2 and MySQL 5 for efficient backend processing and data management. Tankstack Query was utilized for optimized data retrieval and manipulation, ensuring high performance. Pusher was integrated to facilitate real-time webhook notifications for transaction updates, providing instant feedback to integrated applications. The API offers functionalities for collecting payments, sending payouts, and checking transaction statuses. Extensive documentation and a built-in test suite were developed to ensure ease of integration and validation for developers.`,
    results: `The FCDA Mobile Payment Gateway has successfully streamlined mobile money transactions for applications operating in Cameroon. Developers can now easily integrate MTN and Orange mobile money services, significantly reducing the complexity of payment processing. The real-time transaction status updates and webhook notifications have improved operational efficiency and user experience. The comprehensive documentation and test suite have empowered developers to quickly and reliably integrate the API, leading to wider adoption and more efficient financial operations for businesses and individuals.`,
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
                          <Link href="/cases/payment-gateway">Payment Gateway</Link>,
                          <Link href="/cases/mobile-money">Mobile Money</Link>,
                          <Link href="/cases/api-development">API Development</Link>
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
