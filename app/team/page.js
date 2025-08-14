import PageBanner from "@/components/PageBanner";
import { ProgressBar3 } from "@/components/ProgressBar";
import TekprofLayout from "@/layout/TekprofLayout";
import Team from "@/components/Team";
import Link from "next/link";
const page = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Meet Our Expert Team" />
      <section className="team-page-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="team-page-left-content rmb-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    Our Vision: Solutions Beyond Technology, Success Beyond Boundaries
                  </h2>
                </div>
                <p>
                  At Pixelways Solutions, we are dedicated to being your trusted partner in digital transformation. Our team provides the expertise, innovative technology, and unwavering support needed to help your business thrive.
                </p>
                <div className="row pt-35 rpt-25">
                  <div className="col-sm-6">
                    <div className="circle-progress-item-two">
                      <ProgressBar3 value={80} />
                      <h4>
                        Software
                        <br /> Development Expertise
                      </h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="circle-progress-item-two">
                      <ProgressBar3 value={90} />
                      <h4>
                        IT Consulting &amp;
                        <br /> Management
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="team-page-right-image mb-30"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="https://api.a0.dev/assets/image?text=Diverse+team+of+IT+professionals+collaborating+in+a+modern+office+setting+with+digital+screens+and+charts.+The+atmosphere+is+innovative+and+dynamic.+8K+resolution,+image+size:+740x510px.&aspect=16:9&seed=team_page_right" alt="Team" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-area pb-80 rpb-50 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-70 rmb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Our Dedicated Professionals
                </span>
                <h2>Meet Our Experienced Technical Team</h2>
              </div>
            </div>
          </div>
          <Team mode="list" layout="style-two" />
        </div>
      </section>
    </TekprofLayout>
  );
};
export default page;
