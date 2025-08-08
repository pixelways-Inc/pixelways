import ClientLogo from "@/components/ClientLogo";
import PageBanner from "@/components/PageBanner";
import Service from "@/components/Service";
import { Testimonials2 } from "@/components/testimonials/Testimonials2";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
const page = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Our Services" />
      <section className="why-choose-us-area py-130 rpt-100 rpb-75 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-8 col-sm-10">
              <div
                className="why-choose-left-content"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-50 rmb-30">
                  <span className="sub-title color-primary mb-10">
                    Modern IT Solutions
                  </span>
                  <h2>Empowering Businesses With Advanced Tech Solutions</h2>
                </div>
                <p>
                  We specialize crafting adaptable scalable software solutions
                  evolve business needs team of experts is committed to using
                </p>
                <Link href="/services" className="theme-btn mt-35 rmt-20">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div
                  className="col-sm-6 border-right border-left for-border-bottom"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="feature-item-three style-two me-lg-auto ms-lg-auto">
                    <div className="icon">
                      <i className="flaticon-idea" />
                    </div>
                    <div className="content">
                      <h4>Customizable Solutions</h4>
                      <p>
                        Providing highly customizable solutions tailored to each
                        client’s unique needs can set you apart. Clients are
                        looking.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 border-right for-border-bottom"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="feature-item-three style-two me-lg-auto ms-sm-auto">
                    <div className="icon">
                      <i className="flaticon-grow" />
                    </div>
                    <div className="content">
                      <h4>Scalability &amp; Flexibility</h4>
                      <p>
                        Scalable solutions allow companies to grow without
                        needing to overhaul their software infrastructure
                        architecture .
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 border-right border-left"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="feature-item-three style-two me-auto ms-lg-auto">
                    <div className="icon">
                      <i className="flaticon-data-protection" />
                    </div>
                    <div className="content">
                      <h4>Security &amp; Compliance</h4>
                      <p>
                        Prioritizing security ensures protection and compliance
                        with industry standards and regulations, safeguarding
                        against.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 border-right"
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="feature-item-three style-two me-lg-auto ms-sm-auto">
                    <div className="icon">
                      <i className="flaticon-graphic-design" />
                    </div>
                    <div className="content">
                      <h4>User-Friendly Interface</h4>
                      <p>
                        Accessibility features, and thoughtful design help
                        clients and their teams adapt quickly and use the
                        solution effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Service style="style-two" />
      <Testimonials2 bgClass="none" />
      <ClientLogo containerClass="client-logo-area style-two for-border-top" />
    </TekprofLayout>
  );
};
export default page;
