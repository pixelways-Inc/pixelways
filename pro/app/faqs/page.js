import Consultation from "@/components/Consultation";
import { FAQs2 } from "@/components/FAQs";
import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
const page = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="FAQ" />
      <section className="faqs-area py-130 rpy-100 rel z-1">
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
                  <span className="sub-title mb-10">FAQs</span>
                  <h2>Frequently Asked Questions</h2>
                </div>
                <Link href="faqs" className="theme-btn">
                  Get A Quote
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
                <FAQs2 />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Consultation />
    </TekprofLayout>
  );
};
export default page;
