import ClientLogo from "@/components/ClientLogo";
import PageBanner from "@/components/PageBanner";
import Service from "@/components/Service";
import { Testimonials2 } from "@/components/testimonials/Testimonials2";
import PixelwaysAdModal from "@/components/PixelwaysAdModal";
import PixelwaysInlineAd from "@/components/PixelwaysInlineAd";
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
                    Why Pixelways Solutions?
                  </span>
                  <h2>Your Partner for Comprehensive Digital Solutions</h2>
                </div>
                <p>
                  At Pixelways Solutions, we specialize in crafting adaptable and scalable digital solutions that evolve with your business needs. Our team of experts is committed to leveraging cutting-edge technology to drive your success.
                </p>
                <a href="#agile-services" className="theme-btn mt-35 rmt-20">
                  Explore Our Services
                </a>
                <Link href="/client-intake" className="theme-btn mt-35 rmt-20 ml-15">
                  Start Your Project
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
                        We deliver highly customizable solutions precisely tailored to your unique business needs, ensuring optimal fit and maximum impact.
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
                        Our scalable and flexible solutions are designed to grow with your business, adapting seamlessly to evolving demands without costly overhauls.
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
                        We prioritize robust security and strict compliance with industry standards (e.g., GDPR, HIPAA), safeguarding your data and operations.
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
                        Intuitive and user-friendly interfaces, coupled with thoughtful design, ensure quick adaptation and effective utilization of our solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="agile-services">
        <Service style="style-two" />
      </div>
      
      {/* Strategic Inline Ads */}
      <section className="py-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <PixelwaysInlineAd 
                category="hosting" 
                priority="high" 
                style="card"
              />
            </div>
            <div className="col-lg-6">
              <PixelwaysInlineAd 
                category="development" 
                priority="medium" 
                style="card"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials2 bgClass="none" />
      <ClientLogo containerClass="client-logo-area style-two for-border-top" />
      
      {/* Pixelways Ad Modal */}
      <PixelwaysAdModal 
        currentPage="services" 
        showOnMount={true} 
        delay={20000}
        frequency={240000}
      />
    </TekprofLayout>
  );
};
export default page;
