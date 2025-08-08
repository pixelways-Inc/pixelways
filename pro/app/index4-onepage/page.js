import Counter from "@/components/Counter";
import Countries from "@/components/Countries";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
const page = () => {
  const singlePage = [
    { id: 1, title: "Home", link: "#home" },
    { id: 2, title: "AI", link: "#AI" },
    { id: 3, title: "Counter", link: "#counter" },
    { id: 4, title: "Work Step", link: "#work-step" },
    { id: 5, title: "Pricing", link: "#pricing" },
  ];
  return (
    <TekprofLayout
      header={4}
      footer={4}
      rootElements={{
        "--tekprof-heading-font": "'Work Sans', sans-serif",
        "--tekprof-primary-color": "#464EE2",
        "--tekprof-lighter-color": "#FFFCEF",
        "--tekprof-navyblue-color": "#151F39",
      }}
      singleMenu={singlePage}
      bodyClass="home-4"
    >
      {/* Hero area start */}
      <section
        id="home"
        className="hero-area-four bgc-primary pt-215 rpt-150 pb-100 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <div
                className="hero-content style-four text-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span
                  className="subtitle-one mb-20"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <i className="fas fa-rocket-launch" /> Awards Winning Agency
                </span>
                <h1
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Work Faster, Smarter, and more productive by <span>AI</span>
                </h1>
                <div
                  className="row justify-content-center pt-5 rpt-0 pb-25"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="col-xl-7 col-lg-9">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium aperiae
                    </p>
                  </div>
                </div>
                <Link href="contact" className="theme-btn">
                  Sign Up For Free <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bg-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/tooltip-shape1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tooltip-shape3.png" alt="Shape" />
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Hero area End */}
      {/* Hero Image Part End */}
      <div
        className="hero-image-area style-two text-center bgp-bottom rel z-1"
        style={{
          backgroundImage: "url(assets/images/backgrounds/hero-bg-four.png)",
        }}
      >
        <div
          className="container container-1370"
          data-aos="zoom-in-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <img src="assets/images/hero/hero-four.png" alt="Hero" />
        </div>
      </div>
      {/* Hero Image Part End */}
      {/* Tooltip Area Start */}
      <section className="tooltip-area-one bgc-navyblue rel z-1 pt-130 rpt-100">
        <div className="container">
          <div
            className="section-title text-white text-center mb-115"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <h4>We’ve 1253+ Global Clients &amp; lot’s of Project Complete</h4>
          </div>
          <div
            className="tooltip-style-two"
            data-aos="zoom-in-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <img
                  src="assets/images/tooltips/tooltip-icon8.png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="tooltip-text">Dropbox</div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <img
                  src="assets/images/tooltips/tooltip-icon2.png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="tooltip-text">LinkedIn</div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <img
                  src="assets/images/tooltips/tooltip-icon3.png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="tooltip-text">Skack</div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <img
                  src="assets/images/tooltips/tooltip-icon4.png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="tooltip-text">Symbol</div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <img
                  src="assets/images/tooltips/tooltip-icon5.png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="tooltip-text">Shopify</div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <img
                  src="assets/images/tooltips/tooltip-icon9.png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="tooltip-text">Notion</div>
              </div>
            </div>
            <div className="tooltip-item">
              <div className="tooltip-btn">
                <img
                  src="assets/images/tooltips/tooltip-icon10.png"
                  alt="Icon"
                />
              </div>
              <div className="tooltip-content">
                <div className="tooltip-text">Twitch</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tooltip-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/tooltip-shape1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tooltip-shape2.png" alt="Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/tooltip-shape3.png" alt="Shape" />
          </div>
          <div className="shape four">
            <img src="assets/images/shapes/tooltip-shape4.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Tooltip Area End */}
      {/* Numbered box Area Start */}
      <section className="numbered-box-area rel pt-130 rpt-100 rel z-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-60"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Meet your new Powerful intelligent AI Assistant</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste sit voluptatem accusantium
                  doloremque laudantium rem aperiam eaqups quae ab illo
                  inventore veritatis et quasi architecto
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="numbered-box style-three">
                <div className="number">01</div>
                <div className="content">
                  <h4>
                    <Link href="service-details">Live Text Editor</Link>
                  </h4>
                  <p>
                    A live text editor is dynamic &amp; interactive software
                    tool that allows users to create edit, manipulate text-based
                  </p>
                  <Link href="service-details" className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                  <img
                    src="assets/images/services/number-box1.png"
                    alt="Number Box"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="numbered-box style-three bg-two">
                <div className="number">02</div>
                <div className="content">
                  <h4>
                    <Link href="service-details">Track Analytics</Link>
                  </h4>
                  <p>
                    Track analytics refers to the process of collecting and
                    analyzing data related to the performance and usage
                  </p>
                  <Link href="service-details" className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                  <img
                    src="assets/images/services/number-box2.png"
                    alt="Number Box"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="numbered-box style-three bg-three">
                <div className="number">03</div>
                <div className="content">
                  <h4>
                    <Link href="service-details">
                      Security &amp; Compliance
                    </Link>
                  </h4>
                  <p>
                    Security and compliance are essentials pillars of any
                    organization's strat protect its data, assets, and
                    reputation
                  </p>
                  <Link href="service-details" className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </Link>
                  <img
                    src="assets/images/services/number-box3.png"
                    alt="Number Box"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Numbered box Area End */}
      {/* Generative AI Area Start */}
      <section id="AI" className="generative-ai-area pt-100 rpt-65 rel z-1">
        <div className="container">
          <div className="row justify-content-between mb-45 rmb-90">
            <div
              className="col-xl-5 col-lg-7 col-md-8"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-40">
                <h2>Power Generative AI With Your Data</h2>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-5 text-lg-end"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Link href="about" className="theme-btn">
                Get Started Now <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-ten">
                <div className="icon">
                  <i className="flaticon-it" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">AI Powered Results</Link>
                  </h5>
                  <p>
                    AI-powered results leverage advanced artificial intelligence
                    algorithms to provide highly accurate
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-ten">
                <div className="icon">
                  <i className="flaticon-network-security" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Payment Gateways</Link>
                  </h5>
                  <p>
                    Payment gateways are secure online platforms that facilitate
                    the transfer of funds customers
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-ten">
                <div className="icon">
                  <i className="flaticon-cloud" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Multilingual</Link>
                  </h5>
                  <p>
                    Multilingual refers to the capability of a system, software,
                    or individual to operate and communicate
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-ten">
                <div className="icon">
                  <i className="flaticon-data-management" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Support Platform</Link>
                  </h5>
                  <p>
                    A support platform is a software or service that enables
                    organizations to manage customer inquiries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Generative AI Area End */}
      {/* Artificial Intelligenc Area Start */}
      <section className="artificial-intelligence-area rel pt-50 rpt-20 pb-130 rpb-100 z-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Scale Generative artificial intelligence Platform</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste sit voluptatem accusantium
                  doloremque laudantium rem aperiam eaqups quae ab illo
                  inventore veritatis et quasi architecto
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-1070">
          <div className="row pb-30 rpb-65 gap-100 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div
                className="ai-image"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/artificial/artificial1.png"
                  alt="Artificial"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="ai-content mb-40 rmb-0"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle">Custom LLM</span>
                <h3>Customize Large Language Models</h3>
                <p>
                  Customizing large language models involves fine-tuning their
                  pre-trained parameters to adapt them to specific tasks or
                  domains, enhancing their performance relevance in specialized
                  applications. This process enables organizations to leverage
                </p>
                <Link href="about" className="theme-btn style-two mt-25">
                  Read More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row gap-100 align-items-center">
            <div className="col-lg-6">
              <div
                className="ai-image rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/artificial/artificial2.png"
                  alt="Artificial"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="ai-content"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle">Edit &amp; Customizations</span>
                <h3>Data Curation &amp; Customizations</h3>
                <p>
                  Data curation involves the careful selection, organization,
                  and maintenance of data to ensure its quality, relevance
                </p>
                <ul className="icon-list style-two mt-25 mb-20">
                  <li>
                    <i className="fas fa-check" /> Connect with leads with zero
                    hassle.
                  </li>
                  <li>
                    <i className="fas fa-check" /> Take quick payments direct
                    from meetings
                  </li>
                </ul>
                <Link href="about" className="theme-btn style-three mt-25">
                  Read More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Artificial Intelligenc Area End */}
      {/* Counter Area Start */}
      <section
        id="counter"
        className="counter-area-four bgc-primary rel z-2 pt-130 rpt-100"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-11">
              <div
                className="section-title text-center text-white mb-60"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>
                  200,000+ Growing startups use Slate as their single source of
                  truth.
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center gap-70">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="counter-item style-three counter-text-wrap"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span
                  className="count-text k-plus"
                  data-speed={3000}
                  data-stop={25}
                >
                  <Counter end={25} />
                </span>
                <hr />
                <span className="counter-title">100% Satisficed Clients</span>
                <div className="bg" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="counter-item style-three counter-text-wrap"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span
                  className="count-text percent"
                  data-speed={3000}
                  data-stop={83}
                >
                  <Counter end={83} />
                </span>
                <hr />
                <span className="counter-title">
                  83% Lead Collection From Global Clients
                </span>
                <div className="bg" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="counter-item style-three counter-text-wrap"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span
                  className="count-text m-plus"
                  data-speed={3000}
                  data-stop={25}
                >
                  <Counter end={25} />
                </span>
                <hr />
                <span className="counter-title">
                  20m+ Data Collection From Various Email
                </span>
                <div className="bg" />
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="counter-item style-three counter-text-wrap"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span
                  className="count-text k-plus"
                  data-speed={3000}
                  data-stop={50}
                >
                  <Counter end={50} />
                </span>
                <hr />
                <span className="counter-title">
                  Task Complete For Global Clients
                </span>
                <div className="bg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter Area End */}
      {/* Work Process Area Start */}
      <section
        id="work-step"
        className="work-process-area rel z-1 text-white bgc-primary pt-90 rpt-60 pb-80 rpb-50"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>
                  Improve your writing with artificial intelligence Platform
                </h2>
              </div>
            </div>
          </div>
          <div
            className="row no-gap justify-content-center"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="col-lg-4 col-sm-6">
              <div className="work-process-item">
                <span className="number">1</span>
                <h5>Sing Up Or Create your account Full Free</h5>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="work-process-item with-arrow">
                <span className="number">2</span>
                <h5>Write what your want? or write something you want</h5>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="work-process-item">
                <span className="number">3</span>
                <h5>Get Output or results</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="work-process-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/work-process1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/work-process2.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Work Process Area End */}
      {/* Work Process Image Area Start */}
      <div className="work-process-image-area rel z-1 text-center bgc-primary">
        <div className="container">
          <div
            className="image ms-5"
            data-aos="zoom-in-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <img
              src="assets/images/counter/work-process.png"
              alt="Work Process"
            />
          </div>
        </div>
        <div className="work-process-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/work-process3.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/work-process4.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Work Process Image Area End */}
      {/* Pricing Area Start */}
      <section
        id="pricing"
        className="pricing-area-four bgc-lighter overflow-hidden rel z-1 pt-125 rpt-95 pb-100 rpb-70"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Easy to Start, Easy to Scale Website Builder Plans</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-md-6 col-sm-10"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="pricing-item style-four">
                <div className="title-price">
                  <h5 className="title">Regular</h5>
                  <div className="price">
                    <span className="prev">$</span>15.
                    <span className="next">/m</span>
                  </div>
                </div>
                <hr />
                <div className="text">
                  Data curation involve the careful election organization, and
                  maintenance
                </div>
                <ul className="icon-list">
                  <li>
                    <i className="fal fa-check" /> 2 Limited sites available
                  </li>
                  <li>
                    <i className="fal fa-check" /> 1 GB storage per site
                  </li>
                  <li>
                    <i className="fal fa-check" /> Up to 5 pages per site
                  </li>
                  <li className="hide">
                    <i className="fal fa-check" /> Free SSL for custom domain
                  </li>
                  <li className="hide">
                    <i className="fal fa-check" /> Connect custom domain
                  </li>
                </ul>
                <a href="#" className="theme-btn style-two">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
                <div className="footer-text">No credit card required</div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="pricing-item style-four">
                <div className="title-price">
                  <h5 className="title color-two">Standard</h5>
                  <div className="price">
                    <span className="prev">$</span>35.
                    <span className="next">/m</span>
                  </div>
                </div>
                <hr />
                <div className="text">
                  Data curation involve the careful election organization, and
                  maintenance
                </div>
                <ul className="icon-list">
                  <li>
                    <i className="fal fa-check" /> 2 Limited sites available
                  </li>
                  <li>
                    <i className="fal fa-check" /> 1 GB storage per site
                  </li>
                  <li>
                    <i className="fal fa-check" /> Up to 5 pages per site
                  </li>
                  <li>
                    <i className="fal fa-check" /> Free SSL for custom domain
                  </li>
                  <li className="hide">
                    <i className="fal fa-check" /> Connect custom domain
                  </li>
                </ul>
                <a href="#" className="theme-btn style-two">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
                <div className="footer-text">No credit card required</div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6 col-sm-10"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="pricing-item style-four">
                <div className="title-price">
                  <h5 className="title color-four">Diamond</h5>
                  <div className="price">
                    <span className="prev">$</span>98.
                    <span className="next">/m</span>
                  </div>
                </div>
                <hr />
                <div className="text">
                  Data curation involve the careful election organization, and
                  maintenance
                </div>
                <ul className="icon-list">
                  <li>
                    <i className="fal fa-check" /> 2 Limited sites available
                  </li>
                  <li>
                    <i className="fal fa-check" /> 1 GB storage per site
                  </li>
                  <li>
                    <i className="fal fa-check" /> Up to 5 pages per site
                  </li>
                  <li>
                    <i className="fal fa-check" /> Free SSL for custom domain
                  </li>
                  <li>
                    <i className="fal fa-check" /> Connect custom domain
                  </li>
                </ul>
                <a href="#" className="theme-btn style-two">
                  Choose Package <i className="far fa-arrow-right" />
                </a>
                <div className="footer-text">No credit card required</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-circle-shapes">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Pricing Area End */}
      {/* Countries Area Start */}
      <Countries />
      {/* Countries Area End */}
    </TekprofLayout>
  );
};
export default page;
