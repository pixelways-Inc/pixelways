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
            <div className="col-lg-4 col-md-6 item solutions development">
              <div className="case-item-two">
                <div className="image">
                  <img src="/trioagent.png" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/cases/trio-agent">Trio Agent: Build Anything by Chatting with AI</Link>
                  </h4>
                  <span>AI Development, No-Code, App Development</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item solutions development">
              <div className="case-item-two">
                <div className="image">
                  <img src="/retrobuilder.png" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/cases/retrobuilder">Retrobuilder - AI Frontend Developer</Link>
                  </h4>
                  <span>AI Development, Frontend Development, Web Design</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item solutions development">
              <div className="case-item-two">
                <div className="image">
                  <img src="https://api.a0.dev/assets/image?text=Veela+Store+E-commerce+Modern+Online+Shop&aspect=16:9&seed=123" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/cases/modern-ecommerce-store">Veela Store Wigs E-commerce Store</Link>
                  </h4>
                  <span>E-commerce Development</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item consulting solutions">
              <div className="case-item-two">
                <div className="image">
                  <img src="https://api.a0.dev/assets/image?text=Mannor+Janitorial+Enterprise+Cleaning+Solutions&aspect=16:9&seed=456" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/cases/mannor-janitorial-enterprise">Mannor Janitorial Enterprise, Inc.</Link>
                  </h4>
                  <span>Cleaning Solutions, Facility Management</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item solutions design">
              <div className="case-item-two">
                <div className="image">
                  <img src="https://api.a0.dev/assets/image?text=DOTTSA+Travels+Agency+Visa+Booking+Study+Abroad&aspect=16:9&seed=789" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/cases/dottsa-travels-agency">DOTTSA Travels Agency</Link>
                  </h4>
                  <span>Travel Solutions, Visa Services, Study Abroad</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item consulting development">
              <div className="case-item-two">
                <div className="image">
                  <img src="https://api.a0.dev/assets/image?text=TweetChat+Social+Network+AI+Monetization&aspect=16:9&seed=1011" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/cases/tweetchat">TweetChat</Link>
                  </h4>
                  <span>Social Media, AI Integration, Monetization</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item solutions security">
              <div className="case-item-two">
                <div className="image">
                  <img src="https://api.a0.dev/assets/image?text=Optima+AI+Artificial+Intelligence+Business+Solutions&aspect=16:9&seed=1234" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/cases/optima-ai-inc">Optima AI Inc.</Link>
                  </h4>
                  <span>AI Solutions, Business Transformation, Innovation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item consulting development">
              <div className="case-item-two">
                <div className="image">
                  <img src="https://api.a0.dev/assets/image?text=Carpool+Connect+Ridesharing+App+Maryland&aspect=16:9&seed=1516" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/cases/carpool-connect">Carpool Connect</Link>
                  </h4>
                  <span>Ridesharing, Mobile App, Transportation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item solutions design">
              <div className="case-item-two">
                <div className="image">
                  <img src="https://api.a0.dev/assets/image?text=SOBA+Ontario+Alumni+Association+Community+Service&aspect=16:9&seed=1718" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/cases/soba-ontario">SOBA Ontario</Link>
                  </h4>
                  <span>Non-Profit, Community, Alumni Association</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item solutions development">
              <div className="case-item-two">
                <div className="image">
                  <img src="https://api.a0.dev/assets/image?text=FCDA+Cameroon+Agriculture+Community+Development+Digital+Innovation&aspect=16:9&seed=1920" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/cases/fcda-cameroon">FCDA Cameroon</Link>
                  </h4>
                  <span>Non-Profit, Agriculture, Community Development, Digital Innovation</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item solutions design">
              <div className="case-item-two">
                <div className="image">
                  <img src="https://api.a0.dev/assets/image?text=FCDA+Exchange+Digital+Commodity+Marketplace+Agriculture&aspect=16:9&seed=2122" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/cases/fcda-exchange">FCDA Exchange</Link>
                  </h4>
                  <span>E-commerce, Agriculture, Digital Marketplace, Fintech</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item consulting solutions">
              <div className="case-item-two">
                <div className="image">
                  <img src="https://api.a0.dev/assets/image?text=CAM+TRAV+International+Consulting+Travel+Agency+Cameroon&aspect=16:9&seed=2324" alt="Case Image" />
                </div>
                <div className="content">
                  <h4>
                    <Link href="/cases/cam-trav-international">CAM TRAV International Consulting</Link>
                  </h4>
                  <span>Travel Agency, Consultancy, International Services</span>
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
