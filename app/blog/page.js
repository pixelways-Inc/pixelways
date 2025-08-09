"use client"
import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
const page = () => {
  return (
    <TekprofLayout>
      <style jsx>{`
        .blog-standard-item.h-100 {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .blog-standard-item.h-100 .content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .blog-standard-item.h-100 .content p {
          flex: 1;
        }
        .blog-standard-item.h-100 .blog-read-more {
          margin-top: auto;
        }
        @media (max-width: 1199.98px) {
          .row.g-4 .col-xl-6 {
            margin-bottom: 1.5rem;
          }
        }
        .widget-news ul li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          gap: 12px;
        }
        .widget-news .image img {
          border-radius: 4px;
          object-fit: cover;
        }
        .widget-news .content {
          flex: 1;
        }
      `}</style>
      <PageBanner pageName="Our Blog & Insights" />
      <section className="blog-standard-page py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Curated Blog Posts for IT Software Company - Grid Layout */}
              <div className="row g-4">
                <div className="col-xl-6 col-lg-12 col-md-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                  <div className="blog-standard-item h-100">
                    <div className="image">
                      <img src="https://api.a0.dev/assets/image?text=AI+transformation+business+operations+modern+workspace+digital+technology&aspect=1:1&seed=blog1" alt="Blog" />
                    </div>
                    <div className="content">
                      <ul className="blog-meta-two">
                        <li>
                          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Author" style={{width:'24px',borderRadius:'50%',marginRight:'6px'}} />
                          <Link href="blog">Alex Johnson</Link>
                        </li>
                        <li><i className="far fa-calendar-alt" /> 12 August 2025</li>
                        <li><i className="far fa-comments" /> Comments (12)</li>
                      </ul>
                      <h3><Link href="/blog/ultimate-guide-it-solutions-partner">The Ultimate Guide to Choosing the Right IT Solutions Partner</Link></h3>
                      <p>Discover how to select the perfect IT solutions partner for your business with our comprehensive guide covering expertise, security, and scalability.</p>
                      <Link href="/blog/ultimate-guide-it-solutions-partner" className="blog-read-more" data-hover="Read More"><span>Read More</span></Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                  <div className="blog-standard-item h-100">
                    <div className="image">
                      <img src="https://api.a0.dev/assets/image?text=cybersecurity+expert+protecting+digital+world+modern+office+security+shields&aspect=1:1&seed=blog2" alt="Blog" />
                    </div>
                    <div className="content">
                      <ul className="blog-meta-two">
                        <li>
                          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Author" style={{width:'24px',borderRadius:'50%',marginRight:'6px'}} />
                          <Link href="blog">Maria Chen</Link>
                        </li>
                        <li><i className="far fa-calendar-alt" /> 10 August 2025</li>
                        <li><i className="far fa-comments" /> Comments (8)</li>
                      </ul>
                      <h3><Link href="/blog/cybersecurity-protecting-digital-world-2024">Cybersecurity Unlocked: Protecting Your Digital World in 2024</Link></h3>
                      <p>Learn the latest cybersecurity strategies to protect your business from evolving digital threats and secure your digital infrastructure.</p>
                      <Link href="/blog/cybersecurity-protecting-digital-world-2024" className="blog-read-more" data-hover="Read More"><span>Read More</span></Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                  <div className="blog-standard-item h-100">
                    <div className="image">
                      <img src="https://api.a0.dev/assets/image?text=cybersecurity+best+practices+business+security+consultant+reviewing+data&aspect=1:1&seed=blog3" alt="Blog" />
                    </div>
                    <div className="content">
                      <ul className="blog-meta-two">
                        <li>
                          <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Author" style={{width:'24px',borderRadius:'50%',marginRight:'6px'}} />
                          <Link href="blog">Robert S. Hummel</Link>
                        </li>
                        <li><i className="far fa-calendar-alt" /> 8 August 2025</li>
                        <li><i className="far fa-comments" /> Comments (15)</li>
                      </ul>
                      <h3><Link href="/blog/essential-cybersecurity-practices-business">Essential Cybersecurity Practices Every Business Must Follow</Link></h3>
                      <p>Discover the fundamental cybersecurity practices that every business should implement immediately to protect against cyber threats.</p>
                      <Link href="/blog/essential-cybersecurity-practices-business" className="blog-read-more" data-hover="Read More"><span>Read More</span></Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                  <div className="blog-standard-item h-100">
                    <div className="image">
                      <img src="https://api.a0.dev/assets/image?text=modern+IT+consultant+presenting+business+growth+strategies+tech+office&aspect=1:1&seed=blog4" alt="Blog" />
                    </div>
                    <div className="content">
                      <ul className="blog-meta-two">
                        <li>
                          <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Author" style={{width:'24px',borderRadius:'50%',marginRight:'6px'}} />
                          <Link href="blog">Leonard G. Trahan</Link>
                        </li>
                        <li><i className="far fa-calendar-alt" /> 5 August 2025</li>
                        <li><i className="far fa-comments" /> Comments (10)</li>
                      </ul>
                      <h3><Link href="/blog/modern-it-consulting-trends-growing-businesses">Modern IT Consulting Trends for Growing Businesses</Link></h3>
                      <p>Explore the latest trends in IT consulting and how they impact business growth in 2024, including AI-driven consulting and sustainable IT practices.</p>
                      <Link href="/blog/modern-it-consulting-trends-growing-businesses" className="blog-read-more" data-hover="Read More"><span>Read More</span></Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                  <div className="blog-standard-item h-100">
                    <div className="image">
                      <img src="https://api.a0.dev/assets/image?text=cloud+migration+expert+guiding+business+team+smooth+transition&aspect=1:1&seed=blog5" alt="Blog" />
                    </div>
                    <div className="content">
                      <ul className="blog-meta-two">
                        <li>
                          <img src="https://randomuser.me/api/portraits/men/17.jpg" alt="Author" style={{width:'24px',borderRadius:'50%',marginRight:'6px'}} />
                          <Link href="blog">Hans Ade</Link>
                        </li>
                        <li><i className="far fa-calendar-alt" /> 2 August 2025</li>
                        <li><i className="far fa-comments" /> Comments (7)</li>
                      </ul>
                      <h3><Link href="/blog/cloud-migration-best-practices-smooth-transition">Cloud Migration: Best Practices for a Smooth Transition</Link></h3>
                      <p>Learn how to migrate your business to the cloud with minimal disruption and maximum security, with real-world examples and expert guidance.</p>
                      <Link href="/blog/cloud-migration-best-practices-smooth-transition" className="blog-read-more" data-hover="Read More"><span>Read More</span></Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-6" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                  <div className="blog-standard-item h-100">
                    <div className="image">
                      <img src="https://api.a0.dev/assets/image?text=data+recovery+specialist+helping+small+business+restore+files&aspect=1:1&seed=blog6" alt="Blog" />
                    </div>
                    <div className="content">
                      <ul className="blog-meta-two">
                        <li>
                          <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="Author" style={{width:'24px',borderRadius:'50%',marginRight:'6px'}} />
                          <Link href="blog">Sarah Mitchell</Link>
                        </li>
                        <li><i className="far fa-calendar-alt" /> 1 August 2025</li>
                        <li><i className="far fa-comments" /> Comments (9)</li>
                      </ul>
                      <h3><Link href="/blog/data-recovery-solutions-small-businesses">Data Recovery Solutions for Small Businesses</Link></h3>
                      <p>Discover effective data recovery strategies tailored for small businesses in the digital age, including backup solutions and disaster recovery planning.</p>
                      <Link href="/blog/data-recovery-solutions-small-businesses" className="blog-read-more" data-hover="Read More"><span>Read More</span></Link>
                    </div>
                  </div>
                </div>
              </div>
             
              </div>
            <div className="col-lg-4 col-md-8 col-sm-10 rmt-65">
              <div className="blog-sidebar ms-lg-auto">
                <div
                  className="widget widget-search"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <form action="#" className="default-search-form">
                    <input type="text" placeholder="Search here" required />
                    <button
                      type="submit"
                      className="searchbutton far fa-search"
                    />
                  </form>
                </div>
                <div
                  className="widget widget-category"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Category</h4>
                  <ul>
                    <li>
                      <Link href="blog">IT Consulting</Link> <span>(1)</span>
                    </li>
                    <li>
                      <Link href="blog">Software Development</Link>
                      <span>(5)</span>
                    </li>
                    <li>
                      <Link href="blog">Cyber Security</Link>
                      <span>(8)</span>
                    </li>
                    <li>
                      <Link href="blog">Cloud Services</Link>
                      <span>(3)</span>
                    </li>
                    <li>
                      <Link href="blog">Product Design</Link>
                      <span>(4)</span>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-news"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Recent Post</h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img src="https://api.a0.dev/assets/image?text=cloud+guide+IT+enterprise&aspect=1:1&seed=sidebar2" alt="Post" width={80} height={80} />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="/blog/ultimate-guide-choosing-right-it-solutions-partner">The Ultimate Guide to Choosing the Right IT Solutions Partner</Link>
                        </h5>
                        <span className="date">15 October 2024</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="https://api.a0.dev/assets/image?text=cloud+guide+IT+enterprise&aspect=1:1&seed=sidebar2" alt="Post" width={80} height={80} />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="/blog/cloud-migration-best-practices-smooth-transition">Cloud Migration: Best Practices for a Smooth Transition</Link>
                        </h5>
                        <span className="date">15 October 2024</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="https://api.a0.dev/assets/image?text=IT+consulting+cost+savings&aspect=1:1&seed=sidebar3" alt="Post" width={80} height={80} />
                      </div>
                      <div className="content">
                        <h5>
                          <Link href="/blog/modern-it-consulting-trends-growing-businesses">Modern IT Consulting Trends for Growing Businesses</Link>
                        </h5>
                        <span className="date">15 October 2024</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img src="https://api.a0.dev/assets/image?text=IT+consulting+myths+debunked&aspect=1:1&seed=sidebar4" alt="Post" width={80} height={80} />
                      </div>
                      <div className="content">
                        <h5>
                          <h5>
                          <Link href="/blog/essential-cybersecurity-practices-business">Essential Cybersecurity Practices Every Business Must Follow</Link>
                        </h5>
                        </h5>
                        <span className="date">15 October 2024</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-tags"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Tags</h4>
                  <div className="tag-clouds">
                    <Link href="blog">IT Consulting</Link>
                    <Link href="blog">Software</Link>
                    <Link href="blog">Development</Link>
                    <Link href="blog">Cyber</Link>
                    <Link href="blog">UX/UI</Link>
                    <Link href="blog">Cloud Service</Link>
                  </div>
                </div>
                <div
                  className="widget widget-cta"
                  style={{
                    backgroundImage:
                      "url(https://api.a0.dev/assets/image?text=IT+Consulting+Services+Pixelways+Solution&aspect=1:1&seed=cta)",
                  }}
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h3>
                    Need Expert Digital Solutions?
                  </h3>
                  <Link href="contact" className="theme-btn btn-small">
                    Contact Us Today
                  </Link>
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
