import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";

const PrivacyPolicyPage = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Privacy Policy" />
      <section className="privacy-policy-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="privacy-policy-content">
                <h2 className="mb-4">Our Commitment to Your Privacy</h2>
                <p>
                  At Pixelways Solution, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <h3 className="mt-5 mb-3">Information We Collect</h3>
                <p>
                  We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                </p>
                <h3 className="mt-5 mb-3">How We Use Your Information</h3>
                <p>
                  We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                </p>
                <h3 className="mt-5 mb-3">Security of Your Information</h3>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
                <h3 className="mt-5 mb-3">Contact Us</h3>
                <p>
                  If you have questions or comments about this Privacy Policy, you may contact us at [Your Contact Email/Phone].
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};

export default PrivacyPolicyPage;