import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";

const CaseStudySlugPage = () => {
  const caseStudy = {
    title: "TweetChat",
    clientName: "Pixelways Solution (Owned Product)",
    commencementDate: "N/A", // Not provided
    endDate: "N/A", // Not provided
    liveProjectUrl: "https://tweetchat.me",
    developer: {
      name: "Hans Ade (Anye Happiness Ade)",
      profession: "Software Developer and AI Engineer",
      github: "Hansade2005",
    },
    techStack: [
      "PHP",
      "MySQL",
      "Pusher (for real-time features)",
      "AI integration for post and blog article generation",
      "AI integration for image generation (cover photos, etc.)",
      "Mobile Responsive Design",
    ],
    features: [
      "User Accounts & Login (username or social login)",
      "Sharing & Discovering content (personal moments, trending topics like #bet9ja, #hollywoodbets, #olabet)",
      "100% Privacy (never shares personal data with third parties)",
      "Monetization Options (content packages/tiers, chat audio/video configurations, live streams)",
      "Multilingual Support (English, Arabic, Spanish, French, and many more)",
      "Create Pages, Groups, Forums",
      "Request for Funding",
      "Find Nearby Friends",
      "Send and Receive Money In-App",
      "Top-up via Local and Global Payment Methods",
      "Audio and Video Call",
      "Watch Movies",
      "Play Games",
      "Chat",
    ],
    imageUrl: "https://api.a0.dev/assets/image?text=TweetChat+Social+Network+AI+Monetization&aspect=16:9&seed=1011",
    objective: `To develop and launch TweetChat, a comprehensive social networking platform designed to offer a rich and secure environment for users to connect, share, and interact. The primary objective was to integrate advanced features, including AI-driven content generation and diverse monetization options, while ensuring user privacy and a seamless mobile-responsive experience.`,
    solution: `TweetChat was developed as a robust social networking platform leveraging PHP and MySQL for its backend infrastructure, ensuring scalability and efficient data management. Pusher was integrated to facilitate real-time features, enhancing user interaction through instant notifications and live updates. A key innovation is the extensive AI integration, enabling automated generation of posts and blog articles, as well as dynamic image generation for cover photos and other visual content. The platform offers a wide array of social functionalities, including the creation of pages, groups, and forums, fostering diverse communities. Monetization is built-in through content packages and live streaming options, providing creators with avenues to generate revenue. Financial features like in-app money transfers and top-ups via local and global payment methods enhance user convenience. Furthermore, TweetChat supports rich communication with audio and video calls, and provides entertainment options such as watching movies and playing games, all within a mobile-responsive design and multilingual support.`,
    results: `TweetChat successfully launched as a feature-rich social networking platform, attracting users with its innovative AI-powered content tools and comprehensive communication features. The emphasis on 100% privacy has resonated well with the user base, building trust and encouraging active participation. The diverse monetization options have empowered content creators, fostering a vibrant ecosystem. The platform's mobile responsiveness and multilingual support have ensured broad accessibility and a positive user experience across various devices and regions. TweetChat has established itself as a dynamic and secure social hub, offering a unique blend of social interaction, entertainment, and financial utility.`,
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
                          <Link href="/cases/social-media">Social Media</Link>,
                          <Link href="/cases/ai-integration">AI Integration</Link>,
                          <Link href="/cases/monetization">Monetization</Link>
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
                <h2>Solution & Features</h2>
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
                <h5 className="mt-40">Key Features:</h5>
                <ul className="list-style-two mt-20">
                  {caseStudy.features.map((feature, i) => (
                    <li key={i}>
                      <i className="far fa-check" /> {feature}
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
