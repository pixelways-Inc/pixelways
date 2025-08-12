import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";

const CaseStudySlugPage = () => {
  const caseStudy = {
    title: "FlexFi — Adaptive AI Finance Companion",
    clientName: "Pixelways Solutions (Internal Project)",
    commencementDate: "Upcoming",
    endDate: "N/A",
    liveProjectUrl: "", // Not provided
    developer: {
      name: "Hans Ade (Anye Happiness Ade)",
      profession: "Software Developer and AI Engineer",
      github: "Hansade2005",
    },
    techStack: [
      "Frontend: React Native (cross-platform mobile)",
      "Backend: Node.js + Supabase/PostgreSQL",
      "Banking Data: Plaid API / Flinks (for Canadian banks)",
      "AI Engine: OpenAI API / local LLM for budgeting insights",
      "Security: End-to-end encryption, SOC 2 compliance",
      "Hosting: Vercel (frontend), AWS/Supabase (backend)",
    ],
    servicesOffered: [
      "AI-driven Finance Management",
      "Real-Time Budgeting",
      "Dynamic Tax Optimization (Canadian-specific)",
      "Global Currency & Travel Mode",
      "Micro-Investment & Round-Up",
      "Crisis Mode Alerts",
      "AI Goal Coaching",
      "Personalized Financial Advice",
    ],
    additionalHighlights: [
      "Adapts to Canadian financial regulations, taxes, and cost-of-living indexes.",
      "Catters to global currency trends for international transactions.",
      "Personalizes advice based on lifestyle, goals, and risk tolerance.",
      "Includes TFSA/RRSP strategies and bilingual interface for Canada.",
      "Scalable for country-by-country rollout.",
      "Monetization through Freemium, Premium subscriptions, and Affiliate Revenue.",
    ],
    imageUrl: "https://api.a0.dev/assets/image?text=FlexFi+AI+Finance+Companion&aspect=16:9&seed=987654",
    objective: `To develop FlexFi, an intelligent and culturally-aware AI-driven finance management application that provides personalized financial guidance. The primary objective is to help users optimize their spending, saving, and investment strategies in real-time, with a particular focus on Canadian financial regulations and global currency trends, ultimately empowering them to achieve their financial goals.`,
    solution: `FlexFi is conceptualized as a cross-platform mobile application built with React Native for the frontend, ensuring a consistent user experience across devices. The backend will be powered by Node.js, utilizing Supabase or PostgreSQL for robust data management. Integration with banking data will be achieved through Plaid API or Flinks for Canadian banks, enabling real-time transaction monitoring. The core intelligence of FlexFi will be driven by an AI engine leveraging OpenAI API or a local LLM to provide insightful budgeting advice and simulate financial scenarios. Security is paramount, with end-to-end encryption and SOC 2 compliance. The application will be hosted on Vercel for the frontend and AWS/Supabase for the backend, ensuring scalability and reliability. Innovative features include smart real-time budgeting, dynamic Canadian tax optimization, global currency adjustment, micro-investment round-ups, and an AI goal coach. Monetization will be through a freemium model, premium subscriptions, and affiliate revenue.`,
    results: `As an upcoming project, FlexFi is poised to revolutionize personal finance management. Its adaptive AI capabilities and culturally-aware design will provide unparalleled personalized advice, helping users navigate complex financial landscapes. The focus on Canadian-specific regulations and global currency trends will make it highly relevant for its target audience. The planned monetization strategy ensures sustainability and growth. Upon launch, FlexFi is expected to empower users to make smarter financial decisions, optimize their wealth, and achieve their financial aspirations with confidence, setting a new standard for AI-driven financial companionship.`,
  };

  return (
    <TekprofLayout>
      <PageBanner pageName="Upcoming Project" title={caseStudy.title} />
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
                          <Link href="/cases/upcoming-project">Upcoming Project</Link>,
                          <Link href="/cases/fintech">Fintech</Link>,
                          <Link href="/cases/ai-finance">AI Finance</Link>
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