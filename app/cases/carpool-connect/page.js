import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";

const CaseStudySlugPage = () => {
  const caseStudy = {
    title: "Carpool Connect",
    clientName: "Manjan enterprise Inc",
    commencementDate: "Feb 2023",
    endDate: "April 2023",
    liveProjectUrl: "https://carpool-connect.en.uptodown.com/android",
    developer: {
      name: "Hans Ade (Anye Happiness Ade)",
      profession: "Software Developer and AI Engineer",
      github: "Hansade2005",
    },
    techStack: [
      "React Native Expo",
      "Google Map API",
      "Stripe Integration",
      "Firebase DB",
      "Supabase storage for documents",
      "Supabase auth",
    ],
    features: [
      "Smart matching system for perfect carpool partners on your route",
      "Verified drivers and real-time tracking for safety",
      "Option to remove ads with Turbo",
      "Reduce costs and carbon footprint with every shared ride",
    ],
    impact: "Trusted by 100,000+ users worldwide",
    location: "Maryland, USA",
    imageUrl: "https://api.a0.dev/assets/image?text=Carpool+Connect+Ridesharing+App+Maryland&aspect=16:9&seed=1516",
    objective: `To develop a modern, efficient, and safe ridesharing platform, Carpool Connect, specifically tailored for users in Maryland, USA. The primary goal was to facilitate smart matching between riders and drivers, promote cost savings, reduce carbon footprint, and ensure a secure and reliable transportation solution.`,
    solution: `Carpool Connect was built using React Native Expo, enabling a cross-platform mobile application experience for both iOS and Android users. The integration of Google Map API provides precise location services, route optimization, and real-time tracking capabilities, ensuring efficient matching and navigation. Stripe Integration was implemented for secure and seamless payment processing within the app. Firebase DB serves as the robust backend database for managing user data, ride information, and matching algorithms, while Supabase storage handles document management, such as driver verification documents. Supabase auth ensures secure user authentication and authorization. The intelligent matching system was a core development focus, designed to connect riders and drivers based on optimal routes and preferences, enhancing the carpooling experience. Comprehensive safety measures, including driver verification and real-time tracking, were integrated to prioritize user security.`,
    results: `Carpool Connect successfully launched as a leading ridesharing platform in Maryland, USA, quickly gaining the trust of over 100,000 users worldwide. The smart matching system has significantly improved carpooling efficiency, leading to substantial cost reductions for users and a notable decrease in carbon emissions. The robust security features, including verified drivers and real-time tracking, have fostered a high level of user confidence and satisfaction. The platform's intuitive design and reliable performance have contributed to its rapid adoption and positive impact on urban transportation.`,
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
                          <Link href="/cases/ridesharing">Ridesharing</Link>,
                          <Link href="/cases/mobile-app">Mobile App</Link>,
                          <Link href="/cases/transportation">Transportation</Link>
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
                <h2>Solution & Tech Stack</h2>
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
                <h5 className="mt-40">Impact:</h5>
                <p>{caseStudy.impact}</p>
                {caseStudy.liveProjectUrl !== "N/A" && (
                  <h5 className="mt-40">View Live Project:</h5>
                )}
                {caseStudy.liveProjectUrl !== "N/A" && (
                  <p><a href={caseStudy.liveProjectUrl} target="_blank" rel="noopener noreferrer">{caseStudy.liveProjectUrl}</a></p>
                )}
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
