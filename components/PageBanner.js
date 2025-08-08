import Link from "next/link";

const PageBanner = ({ title, pageName = "About Company" }) => {
  return (
    <section className="page-banner-area pt-30 rel z-1">
      <div className="container-fluid">
        <div
          className="banner-wrap bgs-cover py-80"
          style={{
            backgroundImage: "url(assets/images/background/banner-bg.jpg)",
          }}
        >
          <div className="container">
            <div className="banner-inner">
              <h1
                className="page-title mb-20"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                {title ? title : pageName}
              </h1>
              <nav aria-label="breadcrumb">
                <ol
                  className="breadcrumb"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">{pageName}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
