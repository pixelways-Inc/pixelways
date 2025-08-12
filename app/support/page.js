import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
import contactInfo from "@/utility/contactInfo";

const SupportPage = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Support" />
      <section className="support-area py-130 rpy-100 bgc-blue">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="support-content text-white">
                <h2 className="mb-4">How Can We Help You?</h2>
                <p>
                  Welcome to Pixelways Solutions Support. We are here to assist you with any questions, issues, or feedback you may have regarding our services and products. Our goal is to provide you with timely and effective support.
                </p>
                <h3 className="mt-5 mb-3">Frequently Asked Questions</h3>
                <p>
                  Before reaching out, please check our <Link href="/faqs">FAQs page</Link> where you might find answers to common questions.
                </p>
                <h3 className="mt-5 mb-3">Contact Our Support Team</h3>
                <p>
                  If you can't find what you're looking for, or need further assistance, please don't hesitate to contact us through one of the following methods:
                </p>
                <ul className="list-style-one mt-4">
                  <li><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
                  <li><strong>Support Tickets:</strong> <a href={`mailto:${contactInfo.supportEmail}`}>{contactInfo.supportEmail}</a></li>
                  <li><strong>Phone:</strong> <a href={`tel:${contactInfo.phone1}`}>{contactInfo.phone1}</a></li>
                  <li><strong>Live Chat:</strong> Available during business hours on our homepage.</li>
                </ul>
                <h3 className="mt-5 mb-3">Business Hours</h3>
                <p>
                  Our support team is available from Monday to Friday, 9:00 AM to 5:00 PM [Your Timezone].
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};

export default SupportPage;