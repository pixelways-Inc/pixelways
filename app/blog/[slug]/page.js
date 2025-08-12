"use client";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
import { useState, useEffect } from "react";

const BlogPostPage = ({ params }) => {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Blog posts data (in a real app, this would come from an API or CMS)
  const blogPosts = [
    {
      slug: "ultimate-guide-it-solutions-partner",
      title: "The Ultimate Guide to Choosing the Right IT Solutions Partner",
      category: "Cyber Security",
      date: "25 December 2024",
      author: "John Carter",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      image: "https://api.a0.dev/assets/image?text=AI+transformation+business+operations+modern+workspace+digital+technology&aspect=1:1&seed=blog1",
      excerpt: "Discover how to select the perfect IT solutions partner for your business with our comprehensive guide.",
      content: `
        <p>In today's fast-paced business world, optimizing efficiency and reducing costs are essential to staying competitive. IT consulting can provide the strategic insights and technical solutions that streamline operations, eliminate inefficiencies, and enhance productivity.</p>
        
        <h4>Why Choose the Right IT Partner?</h4>
        <p>Selecting the right IT solutions partner is crucial for business success. The right partner can help you navigate complex technology landscapes, implement robust security measures, and scale your operations effectively.</p>
        
        <h4>Key Factors to Consider</h4>
        <p>When evaluating potential IT partners, consider their expertise, industry experience, security protocols, and ability to scale with your business needs. Look for partners who understand your specific industry challenges and can provide tailored solutions.</p>
        
        <h5>Technical Expertise</h5>
        <p>Ensure your IT partner has deep technical knowledge across multiple domains including cybersecurity, cloud services, data management, and emerging technologies like AI and machine learning.</p>
        
        <h4>Implementing Best Practices</h4>
        <p>A reliable IT partner will help you implement industry best practices, maintain compliance with regulations, and establish robust security frameworks that protect your business assets.</p>
      `,
      tags: ["IT Consulting", "Business Strategy", "Technology"],
      readTime: "8 min read"
    },
    {
      slug: "cybersecurity-protecting-digital-world-2024",
      title: "Cybersecurity Unlocked: Protecting Your Digital World in 2024",
      category: "Cyber Security",
      date: "25 December 2024",
      author: "Emily Smith",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      image: "https://api.a0.dev/assets/image?text=cybersecurity+expert+protecting+digital+world+modern+office+security+shields&aspect=1:1&seed=blog2",
      excerpt: "Learn the latest cybersecurity strategies to protect your business from evolving digital threats.",
      content: `
        <p>Cybersecurity has evolved dramatically in 2024, with new threats emerging daily and traditional security measures becoming insufficient. Businesses must adopt a proactive, multi-layered approach to protect their digital assets.</p>
        
        <h4>The Current Threat Landscape</h4>
        <p>Modern cyber threats include ransomware, phishing attacks, supply chain vulnerabilities, and AI-powered attacks. Understanding these threats is the first step in building effective defenses.</p>
        
        <h4>Essential Security Measures</h4>
        <p>Implement zero-trust architecture, multi-factor authentication, regular security audits, employee training programs, and advanced threat detection systems to create a robust security posture.</p>
        
        <h5>Zero-Trust Implementation</h5>
        <p>Zero-trust security models verify every user and device before granting access to systems, reducing the risk of unauthorized access and data breaches.</p>
        
        <h4>Future-Proofing Your Security</h4>
        <p>Stay ahead of threats by implementing AI-powered security tools, conducting regular penetration testing, and maintaining an incident response plan that can adapt to new attack vectors.</p>
      `,
      tags: ["Cybersecurity", "Data Protection", "Risk Management"],
      readTime: "10 min read"
    },
    {
      slug: "essential-cybersecurity-practices-business",
      title: "Essential Cybersecurity Practices Every Business Must Follow",
      category: "Cyber Security",
      date: "25 December 2024",
      author: "Michael Lee",
      avatar: "https://randomuser.me/api/portraits/men/31.jpg",
      image: "https://api.a0.dev/assets/image?text=cybersecurity+best+practices+business+security+consultant+reviewing+data&aspect=1:1&seed=blog3",
      excerpt: "Discover the fundamental cybersecurity practices that every business should implement immediately.",
      content: `
        <p>Every business, regardless of size, faces cybersecurity threats. Implementing essential security practices can significantly reduce your risk of data breaches and cyber attacks.</p>
        
        <h4>Foundation Security Practices</h4>
        <p>Start with basic security hygiene: regular software updates, strong password policies, secure network configurations, and employee security awareness training.</p>
        
        <h4>Access Control and Authentication</h4>
        <p>Implement role-based access controls, multi-factor authentication, and regular access reviews to ensure only authorized personnel can access sensitive systems and data.</p>
        
        <h5>Password Management</h5>
        <p>Deploy enterprise password managers and enforce strong password policies to prevent credential-based attacks, which account for over 80% of security breaches.</p>
        
        <h4>Data Protection Strategies</h4>
        <p>Encrypt sensitive data both in transit and at rest, implement regular backup procedures, and establish clear data handling policies for all employees.</p>
      `,
      tags: ["Security Practices", "Data Protection", "Compliance"],
      readTime: "7 min read"
    },
    {
      slug: "modern-it-consulting-trends-growing-businesses",
      title: "Modern IT Consulting Trends for Growing Businesses",
      category: "IT Consulting",
      date: "25 December 2024",
      author: "Sophia Turner",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      image: "https://api.a0.dev/assets/image?text=modern+IT+consultant+presenting+business+growth+strategies+tech+office&aspect=1:1&seed=blog4",
      excerpt: "Explore the latest trends in IT consulting and how they impact business growth in 2024.",
      content: `
        <p>The IT consulting landscape is rapidly evolving, with new technologies and methodologies reshaping how businesses approach digital transformation and growth strategies.</p>
        
        <h4>Emerging Consulting Trends</h4>
        <p>AI-driven consulting, sustainable IT practices, hybrid cloud strategies, and outcome-based consulting models are transforming the industry.</p>
        
        <h4>Digital Transformation 2.0</h4>
        <p>Modern digital transformation goes beyond basic digitization, focusing on creating intelligent, adaptive systems that can evolve with business needs.</p>
        
        <h5>AI and Machine Learning Integration</h5>
        <p>Consultants are increasingly leveraging AI tools to provide more accurate insights, automate routine tasks, and deliver predictive analytics for strategic decision-making.</p>
        
        <h4>Sustainable IT Consulting</h4>
        <p>Green IT practices, energy-efficient systems, and sustainable technology choices are becoming central to modern consulting approaches.</p>
      `,
      tags: ["IT Consulting", "Digital Transformation", "Business Growth"],
      readTime: "9 min read"
    },
    {
      slug: "cloud-migration-best-practices-smooth-transition",
      title: "Cloud Migration: Best Practices for a Smooth Transition",
      category: "Cloud Services",
      date: "25 December 2024",
      author: "David Kim",
      avatar: "https://randomuser.me/api/portraits/men/51.jpg",
      image: "https://api.a0.dev/assets/image?text=cloud+migration+expert+guiding+business+team+smooth+transition&aspect=1:1&seed=blog5",
      excerpt: "Learn how to migrate your business to the cloud with minimal disruption and maximum security.",
      content: `
        <p>Cloud migration is a critical step for modern businesses seeking scalability, cost efficiency, and enhanced security. However, successful migration requires careful planning and execution.</p>
        
        <h4>Migration Planning Phase</h4>
        <p>Conduct thorough assessments of current infrastructure, define migration goals, create detailed timelines, and establish security protocols before beginning the migration process.</p>
        
        <h4>Choosing the Right Cloud Strategy</h4>
        <p>Evaluate public, private, and hybrid cloud options based on your security requirements, compliance needs, scalability demands, and budget constraints.</p>
        
        <h5>Security Considerations</h5>
        <p>Implement robust security measures including data encryption, access controls, network security, and compliance monitoring throughout the migration process.</p>
        
        <h4>Post-Migration Optimization</h4>
        <p>Continuously monitor performance, optimize costs, implement backup strategies, and train staff on new cloud-based workflows to maximize ROI.</p>
      `,
      tags: ["Cloud Migration", "Infrastructure", "Digital Transformation"],
      readTime: "12 min read"
    },
    {
      slug: "data-recovery-solutions-small-businesses",
      title: "Data Recovery Solutions for Small Businesses",
      category: "Data Recovery",
      date: "25 December 2024",
      author: "Olivia Brown",
      avatar: "https://randomuser.me/api/portraits/women/61.jpg",
      image: "https://api.a0.dev/assets/image?text=data+recovery+specialist+helping+small+business+restore+files&aspect=1:1&seed=blog6",
      excerpt: "Discover effective data recovery strategies tailored for small businesses in the digital age.",
      content: `
        <p>Data loss can be devastating for small businesses, potentially resulting in significant financial losses and operational disruptions. Having robust data recovery solutions is essential for business continuity.</p>
        
        <h4>Understanding Data Loss Risks</h4>
        <p>Common causes of data loss include hardware failures, human errors, cyber attacks, natural disasters, and software corruption. Small businesses are particularly vulnerable due to limited IT resources.</p>
        
        <h4>Backup Strategies</h4>
        <p>Implement the 3-2-1 backup rule: maintain three copies of critical data, store them on two different media types, and keep one copy offsite for disaster recovery.</p>
        
        <h5>Automated Backup Solutions</h5>
        <p>Deploy automated backup systems that regularly save critical business data to cloud storage or external devices, reducing the risk of human error in backup processes.</p>
        
        <h4>Recovery Planning</h4>
        <p>Develop comprehensive disaster recovery plans that outline step-by-step procedures for data restoration, communication protocols, and business continuity measures.</p>
      `,
      tags: ["Data Recovery", "Backup Solutions", "Business Continuity"],
      readTime: "8 min read"
    }
  ];

  useEffect(() => {
    // Find the current post by slug
    const currentPost = blogPosts.find(p => p.slug === params.slug);
    
    if (currentPost) {
      setPost(currentPost);
      // Get related posts (same category, excluding current post)
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.slug !== currentPost.slug)
        .slice(0, 3);
      setRelatedPosts(related);
    }
    
    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return (
      <TekprofLayout>
        <div className="container py-5">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </TekprofLayout>
    );
  }

  if (!post) {
    return (
      <TekprofLayout>
        <div className="container py-5">
          <div className="text-center">
            <h1>Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="theme-btn">
              Back to Blog
            </Link>
          </div>
        </div>
      </TekprofLayout>
    );
  }

  return (
    <TekprofLayout>
      {/* Page Banner */}
      <section className="page-banner-area blog-banner pt-30 rel z-1">
        <div className="container-fluid">
          <div
            className="banner-wrap bgs-cover py-80"
            style={{
              backgroundImage: `url(${post.image})`,
            }}
          >
            <div className="banner-overlay"></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-9">
                  <div className="banner-inner blog-style">
                    <nav aria-label="breadcrumb">
                      <ol
                        className="breadcrumb"
                        data-aos="fade-up"
                        data-aos-duration={1500}
                        data-aos-offset={50}
                      >
                        <li className="breadcrumb-item">
                          <Link href="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li className="breadcrumb-item active">{post.category}</li>
                      </ol>
                    </nav>
                    <h1
                      className="page-title mt-25 rmt-15"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      {post.title}
                    </h1>
                    <ul
                      className="blog-meta-two mt-35 rmt-25"
                      data-aos="fade-up"
                      data-aos-delay={200}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <li>
                        <img 
                          src={post.avatar} 
                          alt={post.author} 
                          style={{width: '24px', height: '24px', borderRadius: '50%', marginRight: '8px'}}
                        />
                        <Link href="/blog">{post.author}</Link>
                      </li>
                      <li>
                        <i className="far fa-calendar-alt" /> {post.date}
                      </li>
                      <li>
                        <i className="far fa-clock" /> {post.readTime}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Details Content */}
      <section className="blog-details-page pt-130 rpy-100 pb-110 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-content">
                <div
                  className="image mb-40 rmb-30"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{width: '100%', height: 'auto', borderRadius: '8px'}}
                  />
                </div>
                
                {/* Author Info */}
                <div className="author-info mb-30" style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px'}}>
                  <img 
                    src={post.avatar} 
                    alt={post.author}
                    style={{width: '48px', height: '48px', borderRadius: '50%'}}
                  />
                  <div>
                    <h6 style={{margin: '0', fontWeight: '600'}}>{post.author}</h6>
                    <span style={{color: '#666', fontSize: '14px'}}>{post.category} Expert</span>
                  </div>
                </div>

                <div className="blog-content">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <hr className="mt-50" />
              </div>

              {/* Tags and Share */}
              <div className="tag-share pt-30 mb-20">
                <div
                  className="item"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <b>Tags : </b>
                  {post.tags.map((tag, index) => (
                    <span key={index}>
                      <Link href="/blog">{tag}</Link>
                      {index < post.tags.length - 1 && ", "}
                    </span>
                  ))}
                </div>
                <div
                  className="item"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <b>Share : </b>
                  <div className="social-style-four">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="related-posts mt-70">
                  <h4 className="mb-40">Related Posts</h4>
                  <div className="row">
                    {relatedPosts.map((relatedPost, index) => (
                      <div key={index} className="col-md-4 mb-30">
                        <div className="blog-item">
                          <div className="image">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title}
                              style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px'}}
                            />
                          </div>
                          <div className="content pt-20">
                            <span className="category">{relatedPost.category}</span>
                            <h6>
                              <Link href={`/blog/${relatedPost.slug}`}>
                                {relatedPost.title}
                              </Link>
                            </h6>
                            <p>{relatedPost.excerpt}</p>
                            <Link href={`/blog/${relatedPost.slug}`} className="read-more">
                              Read More <i className="fas fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="blog-sidebar">
                {/* Search Widget */}
                <div className="widget search-widget" data-aos="fade-up" data-aos-duration={1500} data-aos-offset={50}>
                  <form onSubmit={(e) => e.preventDefault()} className="search-form">
                    <input type="text" placeholder="Search here..." required />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>

                {/* Categories Widget */}
                <div className="widget category-widget" data-aos="fade-up" data-aos-delay={50} data-aos-duration={1500} data-aos-offset={50}>
                  <h4 className="widget-title">Categories</h4>
                  <ul>
                    <li><Link href="/blog">Cyber Security <span>(12)</span></Link></li>
                    <li><Link href="/blog">Cloud Services <span>(8)</span></Link></li>
                    <li><Link href="/blog">IT Consulting <span>(15)</span></Link></li>
                    <li><Link href="/blog">Data Recovery <span>(6)</span></Link></li>
                    <li><Link href="/blog">Digital Transformation <span>(10)</span></Link></li>
                  </ul>
                </div>

                {/* Recent Posts Widget */}
                <div className="widget recent-news-widget" data-aos="fade-up" data-aos-delay={100} data-aos-duration={1500} data-aos-offset={50}>
                  <h4 className="widget-title">Recent Posts</h4>
                  {blogPosts.slice(0, 3).map((recentPost, index) => (
                    <div key={index} className="recent-news-item">
                      <div className="image">
                        <img 
                          src={recentPost.image} 
                          alt={recentPost.title}
                          style={{width: '70px', height: '70px', objectFit: 'cover', borderRadius: '4px'}}
                        />
                      </div>
                      <div className="content">
                        <span className="date">
                          <i className="far fa-calendar-alt" /> {recentPost.date}
                        </span>
                        <h6>
                          <Link href={`/blog/${recentPost.slug}`}>
                            {recentPost.title.substring(0, 50)}...
                          </Link>
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Newsletter Widget */}
                <div className="widget newsletter-widget" data-aos="fade-up" data-aos-delay={150} data-aos-duration={1500} data-aos-offset={50}>
                  <div className="newsletter-content" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    padding: '30px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    color: 'white'
                  }}>
                    <h4 style={{color: 'white', marginBottom: '15px'}}>Subscribe Newsletter</h4>
                    <p style={{color: 'rgba(255,255,255,0.9)', marginBottom: '20px'}}>
                      Get latest updates and insights delivered to your inbox.
                    </p>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        style={{
                          width: '100%',
                          padding: '12px',
                          marginBottom: '15px',
                          border: 'none',
                          borderRadius: '6px',
                          outline: 'none'
                        }}
                        required 
                      />
                      <button 
                        type="submit" 
                        className="theme-btn"
                        style={{
                          width: '100%',
                          padding: '12px',
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          color: 'white',
                          borderRadius: '6px',
                          cursor: 'pointer'
                        }}
                      >
                        Subscribe Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }
        
        .banner-inner {
          position: relative;
          z-index: 2;
        }
        
        .blog-content h4 {
          color: #2c3e50;
          margin: 30px 0 15px 0;
          font-weight: 600;
        }
        
        .blog-content h5 {
          color: #34495e;
          margin: 25px 0 12px 0;
          font-weight: 500;
        }
        
        .blog-content p {
          margin-bottom: 20px;
          line-height: 1.7;
          color: #555;
        }
        
        .widget {
          background: #f8f9fa;
          padding: 25px;
          border-radius: 8px;
          margin-bottom: 30px;
        }
        
        .widget-title {
          color: #2c3e50;
          margin-bottom: 20px;
          font-weight: 600;
        }
        
        .category-widget ul {
          list-style: none;
          padding: 0;
        }
        
        .category-widget li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        
        .category-widget li:last-child {
          border-bottom: none;
        }
        
        .recent-news-item {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .recent-news-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        
        .recent-news-item .date {
          font-size: 12px;
          color: #666;
          margin-bottom: 5px;
          display: block;
        }
        
        .search-form {
          position: relative;
        }
        
        .search-form input {
          width: 100%;
          padding: 12px 50px 12px 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
          outline: none;
        }
        
        .search-form button {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #666;
          cursor: pointer;
        }
        
        .related-posts .blog-item {
          background: #f8f9fa;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        
        .related-posts .blog-item:hover {
          transform: translateY(-5px);
        }
        
        .related-posts .category {
          color: #667eea;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }
        
        .related-posts .read-more {
          color: #667eea;
          font-weight: 500;
          text-decoration: none;
          font-size: 14px;
        }
        
        .related-posts .read-more:hover {
          color: #764ba2;
        }
      `}</style>
    </TekprofLayout>
  );
};

export default BlogPostPage;
