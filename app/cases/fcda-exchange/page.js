import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";

const CaseStudySlugPage = () => {
  const caseStudy = {
    title: "FCDA Exchange – Digital Commodity Exchange Platform by FCDA Cameroon",
    clientName: "FCDA Cameroon",
    commencementDate: "January 14",
    endDate: "March 11 2025",
    liveProjectUrl: "https://market.fcdacameroon.org",
    developer: {
      name: "Hans Ade (Anye Happiness Ade)",
      profession: "Software Developer and AI Engineer",
      github: "Hansade2005",
    },
    techStack: [
      "PHP",
      "MySQL",
      "Apex (Charting Library)",
      "Datatables (for data presentation)",
      "Bootstrap (Frontend Framework)",
      "Mobile Money Gateway (MTN Mobile Money, Orange Money for Top-up and Withdrawal)",
    ],
    servicesOffered: [
      "Marketplace: A trading hub for agricultural commodities with verified participants and fair pricing. Users can place bids or offers for buying or selling items.",
      "Analytics: Real-time market data and price trends to empower informed trading decisions.",
      "Warehousing: Secure storage and logistics support, including inspection, grading of commodities, and issuance of warehouse receipts which can be used for trading or financing.",
      "Resources & Guides: Access to user resources like quality grading explanations (Grade A, B, C), storage booking instructions, platform FAQs, and support contact information.",
    ],
    imageUrl: "https://api.a0.dev/assets/image?text=FCDA+Exchange+Digital+Commodity+Marketplace+Agriculture&aspect=16:9&seed=2122",
    objective: `To establish FCDA Exchange as a transparent, inclusive, and secure digital marketplace for agricultural commodities in Cameroon. The primary objective was to connect farmers, traders, and investors, enabling efficient trading while providing access to real-time analytics and comprehensive logistical support.`,
    solution: `FCDA Exchange was developed as a robust web platform using PHP and MySQL to manage its complex marketplace functionalities. The frontend leverages Bootstrap for a responsive and user-friendly interface, while Datatables enhances data presentation and interaction for market listings. Apex charting library was integrated to provide real-time market data and price trends, empowering users with informed trading decisions. A critical feature is the secure mobile money gateway, enabling seamless top-ups and withdrawals via MTN Mobile Money and Orange Money, catering to the local financial ecosystem. The platform facilitates a transparent trading hub where verified participants can place bids and offers. Beyond trading, it offers comprehensive warehousing solutions, including inspection, grading, and issuance of tradable warehouse receipts. Extensive user resources and guides are also provided to ensure ease of use and understanding of commodity grading and platform operations.`,
    results: `FCDA Exchange has successfully transformed agricultural commodity trading in Cameroon by providing a centralized, transparent, and efficient digital marketplace. The platform has significantly improved market access for farmers, leading to fairer pricing and increased profitability. Real-time analytics have empowered stakeholders with crucial insights, optimizing their trading strategies. The integrated warehousing and logistics support have streamlined the supply chain, reducing post-harvest losses and ensuring commodity quality. The mobile money integration has democratized access to financial transactions for agricultural communities. FCDA Exchange has fostered a more resilient and equitable agricultural ecosystem, demonstrating a significant positive impact on local economies and farmer livelihoods.`,
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
                          <Link href="/cases/e-commerce">E-commerce</Link>,
                          <Link href="/cases/agriculture">Agriculture</Link>,
                          <Link href="/cases/digital-marketplace">Digital Marketplace</Link>,
                          <Link href="/cases/fintech">Fintech</Link>
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
