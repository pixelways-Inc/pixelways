import { FAQs2 } from "@/components/FAQs";
import PageBanner from "@/components/PageBanner";
import Pricing from "@/components/Pricing";
import PixelwaysAdModal from "@/components/PixelwaysAdModal";
import PixelwaysInlineAd from "@/components/PixelwaysInlineAd";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
import WebsiteCostCalculator from "@/components/WebsiteCostCalculator";
import AppCostCalculator from "@/components/AppCostCalculator";
import DesktopCostCalculator from "@/components/DesktopCostCalculator";

const page = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Pricing Plan" />
      <div className="container py-10">
        <div className="row no-gap justify-content-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <WebsiteCostCalculator />
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <AppCostCalculator />
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <DesktopCostCalculator />
          </div>
        </div>
      </div>
      
      {/* Strategic Hosting Ad Between Cost Calculators and Pricing */}
      <section className="py-60 bg-light">
        <div className="container">
          <PixelwaysInlineAd 
            category="hosting" 
            priority="high" 
            style="banner"
          />
        </div>
      </section>
      
      <Pricing
        containerClass="pricing-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
        pricingClass=""
        textColor=""
        style="style-two"
        itemStyle="style-three"
      />
      <section className="faqs-area pb-130 rpb-100 rel z-1">
        <div className="container-fluid">
          <div className="faqs-fluid-wrap py-130 rpy-100">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-5">
                  <div
                    className="faqs-left-content rmb-50"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="section-title mb-50">
                      <span className="sub-title mb-10">Have Questions?</span>
                      <h2>Frequently Asked Questions</h2>
                    </div>
                    <Link href="faqs" className="theme-btn">
                      Contact Us for a Custom Quote
                    </Link>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div
                    className="faqs-accordion-wrap"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <FAQs2 limit={5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pixelways Ad Modal */}
      <PixelwaysAdModal 
        currentPage="pricing" 
        showOnMount={true} 
        delay={12000}
        frequency={240000}
      />
    </TekprofLayout>
  );
};
export default page;
