import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";

const TermsAndConditionsPage = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Terms and Conditions" />
      <section className="terms-conditions-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="terms-conditions-content">
                <h2 className="mb-4">Agreement to Our Terms</h2>
                <p>
                  These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Pixelways Solutions ("we," "us" or "our"), concerning your access to and use of the [Your Website Name] website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                </p>
                <h3 className="mt-5 mb-3">Intellectual Property Rights</h3>
                <p>
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.
                </p>
                <h3 className="mt-5 mb-3">User Representations</h3>
                <p>
                  By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
                </p>
                <h3 className="mt-5 mb-3">Governing Law</h3>
                <p>
                  These Terms and Conditions and your use of the Site are governed by and construed in accordance with the laws of [Your Country/State] applicable to agreements made and to be entirely performed within [Your Country/State], without regard to its conflict of law principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};

export default TermsAndConditionsPage;