"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const Blog = () => {
  return (
    <section
      id="blog"
      className="blog-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div
              className="blog-three-left-content mb-70 rmb-50"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-40 rmb-25">
                <span className="sub-title color-primary mb-10">
                  News &amp; Blog
                </span>
                <h2>Read Our Latest Insight &amp; Articles</h2>
              </div>
              <p>
                In today's interconnected world, cybersecurity has become more
                critical than ever businesses relying heavily on digital
                platforms.
              </p>
              <Link href="blog" className="theme-btn mt-30 rmt-15">
                View More Blog
              </Link>
            </div>
          </div>
          <div
            className="col-xl-8"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Slider {...sliderProps.BlogActive} className="blog-three-active">
              <div className="blog-item-three">
                <div className="row gap-50 align-items-center">
                  <div className="col-lg-6">
                    <div className="image">
                      <img src="assets/images/blog/blog7.jpg" alt="Blog" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <ul className="blog-meta">
                        <li>
                          <Link href="blog">Cyber Security</Link>
                        </li>
                        <li>
                          <Link href="blog">25 December 2024</Link>
                        </li>
                      </ul>
                      <h4 className="title">
                        <Link href="blog-details">
                          The Ultimate Guide to Choosing the Right IT Solutions
                          Partner
                        </Link>
                      </h4>
                      <p>
                        Highlights clear problem-solution-result narrative,
                        demonstrating agency’s ability to provide.
                      </p>
                      <Link className="theme-btn btn-small" href="blog-details">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-item-three">
                <div className="row gap-50 align-items-center">
                  <div className="col-lg-6">
                    <div className="image">
                      <img src="assets/images/blog/blog8.jpg" alt="Blog" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <ul className="blog-meta">
                        <li>
                          <Link href="blog">Cloud Services</Link>
                        </li>
                        <li>
                          <Link href="blog">25 December 2024</Link>
                        </li>
                      </ul>
                      <h4 className="title">
                        <Link href="blog-details">
                          Cybersecurity Unlocked Protecting Your Digital World
                          in 2024
                        </Link>
                      </h4>
                      <p>
                        Highlights clear problem-solution-result narrative,
                        demonstrating agency’s ability to provide.
                      </p>
                      <Link className="theme-btn btn-small" href="blog-details">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-item-three">
                <div className="row gap-50 align-items-center">
                  <div className="col-lg-6">
                    <div className="image">
                      <img src="assets/images/blog/blog9.jpg" alt="Blog" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <ul className="blog-meta">
                        <li>
                          <Link href="blog">Cyber Security</Link>
                        </li>
                        <li>
                          <Link href="blog">25 December 2024</Link>
                        </li>
                      </ul>
                      <h4 className="title">
                        <Link href="blog-details">
                          Essential Cybersecurity Practices Every Business Must
                          Follow
                        </Link>
                      </h4>
                      <p>
                        Highlights clear problem-solution-result narrative,
                        demonstrating agency’s ability to provide.
                      </p>
                      <Link className="theme-btn btn-small" href="blog-details">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-item-three">
                <div className="row gap-50 align-items-center">
                  <div className="col-lg-6">
                    <div className="image">
                      <img src="assets/images/blog/blog7.jpg" alt="Blog" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <ul className="blog-meta">
                        <li>
                          <Link href="blog">Cyber Security</Link>
                        </li>
                        <li>
                          <Link href="blog">25 December 2024</Link>
                        </li>
                      </ul>
                      <h4 className="title">
                        <Link href="blog-details">
                          The Ultimate Guide to Choosing the Right IT Solutions
                          Partner
                        </Link>
                      </h4>
                      <p>
                        Highlights clear problem-solution-result narrative,
                        demonstrating agency’s ability to provide.
                      </p>
                      <Link className="theme-btn btn-small" href="blog-details">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-item-three">
                <div className="row gap-50 align-items-center">
                  <div className="col-lg-6">
                    <div className="image">
                      <img src="assets/images/blog/blog8.jpg" alt="Blog" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <ul className="blog-meta">
                        <li>
                          <Link href="blog">Cloud Services</Link>
                        </li>
                        <li>
                          <Link href="blog">25 December 2024</Link>
                        </li>
                      </ul>
                      <h4 className="title">
                        <Link href="blog-details">
                          Cybersecurity Unlocked Protecting Your Digital World
                          in 2024
                        </Link>
                      </h4>
                      <p>
                        Highlights clear problem-solution-result narrative,
                        demonstrating agency’s ability to provide.
                      </p>
                      <Link className="theme-btn btn-small" href="blog-details">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-item-three">
                <div className="row gap-50 align-items-center">
                  <div className="col-lg-6">
                    <div className="image">
                      <img src="assets/images/blog/blog9.jpg" alt="Blog" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <ul className="blog-meta">
                        <li>
                          <Link href="blog">Cyber Security</Link>
                        </li>
                        <li>
                          <Link href="blog">25 December 2024</Link>
                        </li>
                      </ul>
                      <h4 className="title">
                        <Link href="blog-details">
                          Essential Cybersecurity Practices Every Business Must
                          Follow
                        </Link>
                      </h4>
                      <p>
                        Highlights clear problem-solution-result narrative,
                        demonstrating agency’s ability to provide.
                      </p>
                      <Link className="theme-btn btn-small" href="blog-details">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
