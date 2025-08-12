import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";

const CaseStudySlugPage = () => {
  const caseStudy = {
    title: "Optima AI Chat Platform: A Unified Interface to Call Any Model Provider",
    clientName: "Optima AI Inc",
    commencementDate: "March 04 2025",
    endDate: "June 28 2025",
    liveProjectUrl: "https://chat.optimaai.cc",
    developer: {
      name: "Hans Ade (Anye Happiness Ade)",
      profession: "Software Developer and AI Engineer",
      github: "Hansade2005",
    },
    techStack: [
      "Nuxt",
      "Supabase DB",
      "Supabase Auth",
      "Supabase Edge Functions",
      "AI SDK for model providers",
    ],
    servicesOffered: [
      "Unified AI Model Interface",
      "Chatbot Development (ChatGPT Clone)",
      "Artifact Tool Integration (Claude AI)",
      "Internal Deep Research & Analysis",
      "Fullstack Project Scaffolding",
      "External Tool Integration",
      "Easy Layout Switching",
      "Memory Management",
    ],
    additionalHighlights: [
      "Unified interface to call any model provider.",
      "Combines features of ChatGPT and Claude AI's artifact tool.",
      "Extensible with external tools.",
      "Focus on internal deep research and analysis.",
      "Streamlined fullstack project scaffolding.",
      "User-friendly layout switching and memory management.",
    ],
    imageUrl: "/optimachat.png",
    objective: `To develop a comprehensive and unified AI chat platform that allows users to interact with various AI model providers through a single interface, enhancing capabilities with advanced features like artifact tools and robust memory management.`,
    solution: `The Optima AI Chat Platform was built using Nuxt for a powerful and flexible frontend and backend framework. Supabase was chosen as the core backend solution, leveraging Supabase DB for data storage, Supabase Auth for secure user authentication, and Supabase Edge Functions for scalable, serverless logic. An AI SDK was integrated to provide seamless connectivity with diverse AI model providers, enabling the platform to act as a universal interface. Key features include a ChatGPT-like conversational interface merged with Claude AI's artifact tool for enhanced interaction and content generation. The platform also incorporates functionalities for internal deep research and analysis, fullstack project scaffolding, and the ability to connect to external tools, significantly extending the models' capabilities. Emphasis was placed on user experience with easy layout switching and efficient memory management to ensure smooth and responsive interactions.`,
    results: `The Optima AI Chat Platform successfully delivers a highly versatile and user-friendly environment for AI model interaction. Its unified interface simplifies access to multiple model providers, while the integration of advanced tools like Claude AI's artifact feature enriches the conversational experience. The platform's robust architecture, built on Nuxt and Supabase, ensures scalability and reliability. Users benefit from streamlined workflows for research, project scaffolding, and external tool integration, significantly boosting productivity. The intuitive design, coupled with efficient memory management, provides a seamless and responsive user experience, making the Optima AI Chat Platform a powerful tool for AI exploration and application.`,
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
                          <Link href="/cases/ai-platform">AI Platform</Link>,
                          <Link href="/cases/chatbot">Chatbot</Link>,
                          <Link href="/cases/unified-interface">Unified Interface</Link>
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
