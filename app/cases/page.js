import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
const page = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Case Studies" />
      <section className="case-studies-area pt-130 rpt-100 pb-75 rpb-45 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div
                className="case-top-wrap text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-20">
                  <h2>We’ve 960+ Project Complete</h2>
                </div>
                <p>
                  Specific benefits and industries, helping potential clients
                  identify with the outcomes and successes achieved. Let me know
                  if you need titles tailored to a particular service or
                  industry!
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul
                className="case-nav mb-45"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <li data-filter="*" className="active">
                  Show All
                </li>
                <li data-filter=".consulting">Consulting</li>
                <li data-filter=".solutions">IT Solutions</li>
                <li data-filter=".security">Cyber Security</li>
                <li data-filter=".design">UX/UI Design</li>
                <li data-filter=".development">Development</li>
              </ul>
            </div>
          </div>
          <div className="row case-active">
            <div className="col-lg-4 col-md-6 item consulting security">
              <div className="case-item-two">
                <div className="image">
                  <img src="assets/images/cases/case2.jpg" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="case-details">Assessment and Strategy</Link>
                  </h4>
                  <span>IT Consulting Service</span>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 item security">
              <div className="case-item-two">
                <div className="image">
                  <img src="assets/images/cases/case1.jpg" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="case-details">
                      Assessment and Strategy Development
                    </Link>
                  </h4>
                  <span>IT Consulting Service</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item consulting development">
              <div className="case-item-two">
                <div className="image">
                  <img src="assets/images/cases/case3.jpg" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="case-details">Software Development</Link>
                  </h4>
                  <span>IT Consulting Service</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item solutions design">
              <div className="case-item-two">
                <div className="image">
                  <img src="assets/images/cases/case4.jpg" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="case-details">Cyber Security Solutions</Link>
                  </h4>
                  <span>IT Consulting Service</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item solutions design">
              <div className="case-item-two">
                <div className="image">
                  <img src="assets/images/cases/case5.jpg" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="case-details">Cloud Solutions Managed</Link>
                  </h4>
                  <span>IT Consulting Service</span>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 item consulting">
              <div className="case-item-two">
                <div className="image">
                  <img src="assets/images/cases/case7.jpg" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="case-details">
                      Software and Strategy Development
                    </Link>
                  </h4>
                  <span>IT Consulting Service</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item consulting development">
              <div className="case-item-two">
                <div className="image">
                  <img src="assets/images/cases/case6.jpg" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="case-details">Project Management</Link>
                  </h4>
                  <span>IT Consulting Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};
export default page;
