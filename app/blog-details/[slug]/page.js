"use client";
import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";

// Blog posts data - should match the data from components/Blog.js
const blogPosts = [
  {
    id: 1,
    slug: "ultimate-guide-choosing-right-it-solutions-partner",
    category: "Cyber Security",
    date: "25 December 2024",
    title: "The Ultimate Guide to Choosing the Right IT Solutions Partner",
    description: "Highlights clear problem-solution-result narrative, demonstrating agency's ability to provide.",
    image: "https://api.a0.dev/assets/image?text=IT+solutions+partner+business+meeting+technology+consulting&aspect=1:1&seed=701",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    author: "John Carter",
    content: `
      <p>In today's rapidly evolving digital landscape, choosing the right IT solutions partner is crucial for business success. This comprehensive guide will walk you through the essential factors to consider when selecting an IT partner that aligns with your business goals.</p>
      
      <h3>Understanding Your Business Needs</h3>
      <p>Before you begin your search for an IT solutions partner, it's essential to have a clear understanding of your current technology infrastructure and future business objectives. Conduct a thorough assessment of your existing systems, identify pain points, and define your technology goals.</p>
      
      <h3>Key Factors to Consider</h3>
      <ul>
        <li><strong>Expertise and Experience:</strong> Look for partners with proven experience in your industry and with the specific technologies you need.</li>
        <li><strong>Scalability:</strong> Ensure your partner can grow with your business and adapt to changing requirements.</li>
        <li><strong>Security Focus:</strong> In today's threat landscape, cybersecurity should be a top priority for any IT partner.</li>
        <li><strong>Support and Maintenance:</strong> 24/7 support and proactive maintenance are essential for business continuity.</li>
      </ul>
      
      <h3>Evaluating Potential Partners</h3>
      <p>When evaluating potential IT partners, request case studies, check references, and assess their technical certifications. A good partner should be transparent about their processes and willing to provide detailed proposals.</p>
      
      <h3>Building a Long-term Partnership</h3>
      <p>The best IT relationships are built on trust, communication, and shared goals. Look for a partner who takes the time to understand your business and provides strategic guidance beyond just technical implementation.</p>
    `
  },
  {
    id: 2,
    slug: "cybersecurity-unlocked-protecting-digital-world-2024",
    category: "Cloud Services",
    date: "25 December 2024",
    title: "Cybersecurity Unlocked Protecting Your Digital World in 2024",
    description: "Highlights clear problem-solution-result narrative, demonstrating agency's ability to provide.",
    image: "https://api.a0.dev/assets/image?text=cybersecurity+expert+protecting+digital+world+security+office&aspect=1:1&seed=702",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    author: "Emily Smith",
    content: `
      <p>As we navigate through 2024, cybersecurity threats continue to evolve at an unprecedented pace. Organizations must adopt a comprehensive approach to protect their digital assets and maintain customer trust.</p>
      
      <h3>Current Threat Landscape</h3>
      <p>The cybersecurity landscape in 2024 is characterized by sophisticated ransomware attacks, AI-powered threats, and increased targeting of cloud infrastructure. Understanding these threats is the first step in building effective defenses.</p>
      
      <h3>Essential Security Measures</h3>
      <ul>
        <li><strong>Zero Trust Architecture:</strong> Implement a "never trust, always verify" approach to network security.</li>
        <li><strong>Multi-Factor Authentication:</strong> Secure all access points with robust authentication mechanisms.</li>
        <li><strong>Regular Security Audits:</strong> Conduct frequent assessments to identify vulnerabilities.</li>
        <li><strong>Employee Training:</strong> Educate staff on security best practices and threat recognition.</li>
      </ul>
      
      <h3>Emerging Technologies in Cybersecurity</h3>
      <p>Artificial Intelligence and Machine Learning are revolutionizing cybersecurity, enabling faster threat detection and response. However, these same technologies are also being used by attackers, creating an ongoing arms race.</p>
      
      <h3>Building a Security Culture</h3>
      <p>Effective cybersecurity isn't just about technology—it's about creating a culture where security is everyone's responsibility. This requires ongoing training, clear policies, and regular communication about emerging threats.</p>
    `
  },
  {
    id: 3,
    slug: "essential-cybersecurity-practices-every-business-must-follow",
    category: "Cyber Security",
    date: "25 December 2024",
    title: "Essential Cybersecurity Practices Every Business Must Follow",
    description: "Learn the essential cybersecurity strategies and compliance requirements every IT software company should implement to protect digital assets and client data.",
    image: "https://api.a0.dev/assets/image?text=cybersecurity+best+practices+business+security+data+protection&aspect=1:1&seed=703",
    avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    author: "Michael Lee",
    content: `
      <p>Cybersecurity is no longer optional for businesses of any size. With cyber threats becoming more sophisticated and frequent, implementing robust security practices is essential for protecting your business, customers, and reputation.</p>
      
      <h3>Fundamental Security Practices</h3>
      <p>Every business should start with these fundamental security practices that form the foundation of a strong cybersecurity posture.</p>
      
      <h3>Access Control and Identity Management</h3>
      <ul>
        <li><strong>Strong Password Policies:</strong> Implement complex password requirements and regular updates.</li>
        <li><strong>Role-Based Access:</strong> Limit access to systems based on job requirements.</li>
        <li><strong>Regular Access Reviews:</strong> Periodically review and update user permissions.</li>
        <li><strong>Privileged Account Management:</strong> Secure and monitor administrative accounts.</li>
      </ul>
      
      <h3>Data Protection Strategies</h3>
      <p>Protecting sensitive data requires a multi-layered approach including encryption, backup strategies, and access controls. Regular data classification helps ensure appropriate protection levels.</p>
      
      <h3>Incident Response Planning</h3>
      <p>Having a well-defined incident response plan can significantly reduce the impact of a security breach. This includes preparation, detection, containment, eradication, and recovery phases.</p>
      
      <h3>Compliance and Regulations</h3>
      <p>Understanding and complying with relevant regulations such as GDPR, HIPAA, or industry-specific standards is crucial for avoiding penalties and maintaining customer trust.</p>
    `
  },
  {
    id: 4,
    slug: "modern-it-consulting-trends-growing-businesses",
    category: "IT Consulting",
    date: "25 December 2024",
    title: "Modern IT Consulting Trends for Growing Businesses",
    description: "Explore the latest trends in IT consulting and how they impact business growth in 2024.",
    image: "https://api.a0.dev/assets/image?text=modern+IT+consulting+trends+business+growth+technology+office&aspect=1:1&seed=704",
    avatar: "https://randomuser.me/api/portraits/women/41.jpg",
    author: "Sophia Turner",
    content: `
      <p>The IT consulting landscape is rapidly evolving, with new trends reshaping how businesses approach technology strategy and implementation. Understanding these trends is crucial for organizations looking to stay competitive.</p>
      
      <h3>Digital Transformation Acceleration</h3>
      <p>Digital transformation has moved from a nice-to-have to a business imperative. Companies are investing heavily in modernizing their technology infrastructure to improve efficiency and customer experience.</p>
      
      <h3>Cloud-First Strategies</h3>
      <ul>
        <li><strong>Multi-Cloud Adoption:</strong> Organizations are leveraging multiple cloud providers for flexibility and redundancy.</li>
        <li><strong>Hybrid Cloud Solutions:</strong> Combining on-premises and cloud resources for optimal performance.</li>
        <li><strong>Cloud-Native Development:</strong> Building applications specifically designed for cloud environments.</li>
        <li><strong>Serverless Computing:</strong> Reducing infrastructure management overhead.</li>
      </ul>
      
      <h3>AI and Automation Integration</h3>
      <p>Artificial Intelligence and automation are becoming integral parts of business operations, from customer service chatbots to automated data analysis and decision-making processes.</p>
      
      <h3>Sustainable IT Practices</h3>
      <p>Environmental consciousness is driving demand for sustainable IT solutions, including energy-efficient hardware, green data centers, and sustainable software development practices.</p>
      
      <h3>Strategic Partnership Approach</h3>
      <p>Modern IT consulting is moving away from traditional vendor relationships toward strategic partnerships that focus on long-term business outcomes and shared success metrics.</p>
    `
  },
  {
    id: 5,
    slug: "cloud-migration-best-practices-smooth-transition",
    category: "Cloud Services",
    date: "25 December 2024",
    title: "Cloud Migration: Best Practices for a Smooth Transition",
    description: "Learn how to migrate your business to the cloud with minimal disruption and maximum security.",
    image: "https://api.a0.dev/assets/image?text=cloud+migration+expert+business+team+smooth+transition+technology&aspect=1:1&seed=705",
    avatar: "https://randomuser.me/api/portraits/men/51.jpg",
    author: "David Kim",
    content: `
      <p>Cloud migration is a critical step for businesses looking to improve scalability, reduce costs, and enhance operational efficiency. However, successful migration requires careful planning and execution.</p>
      
      <h3>Pre-Migration Assessment</h3>
      <p>Before beginning your cloud migration journey, conduct a comprehensive assessment of your current infrastructure, applications, and data. This helps identify dependencies, security requirements, and potential challenges.</p>
      
      <h3>Migration Strategies</h3>
      <ul>
        <li><strong>Lift and Shift:</strong> Moving applications to the cloud with minimal changes.</li>
        <li><strong>Replatforming:</strong> Making minor optimizations during migration.</li>
        <li><strong>Refactoring:</strong> Redesigning applications to leverage cloud-native features.</li>
        <li><strong>Hybrid Approach:</strong> Keeping some systems on-premises while moving others to the cloud.</li>
        <li><strong>Cloud-Native Development:</strong> Building applications specifically designed for cloud environments.</li>
      </ul>
      
      <h3>Security and Compliance</h3>
      <p>Maintaining security and compliance during migration is paramount. This includes data encryption in transit and at rest, identity management, and ensuring regulatory compliance throughout the process.</p>
      
      <h3>Testing and Validation</h3>
      <p>Thorough testing is essential for successful migration. This includes performance testing, security validation, and user acceptance testing to ensure applications function correctly in the cloud environment.</p>
      
      <h3>Post-Migration Optimization</h3>
      <p>After migration, focus on optimizing cloud resources for cost and performance. This includes right-sizing instances, implementing auto-scaling, and continuously monitoring resource utilization.</p>
    `
  },
  {
    id: 6,
    slug: "data-recovery-solutions-small-businesses",
    category: "Data Recovery",
    date: "25 December 2024",
    title: "Data Recovery Solutions for Small Businesses",
    description: "Discover effective data recovery strategies tailored for small businesses in the digital age.",
    image: "https://api.a0.dev/assets/image?text=data+recovery+specialist+small+business+files+restoration+support&aspect=1:1&seed=706",
    avatar: "https://randomuser.me/api/portraits/women/61.jpg",
    author: "Olivia Brown",
    content: `
      <p>Data loss can be catastrophic for small businesses, potentially leading to significant financial losses and operational disruption. Implementing effective data recovery solutions is essential for business continuity.</p>
      
      <h3>Understanding Data Loss Risks</h3>
      <p>Small businesses face various data loss risks including hardware failures, cyberattacks, human error, and natural disasters. Understanding these risks helps in developing appropriate recovery strategies.</p>
      
      <h3>Backup Strategies</h3>
      <ul>
        <li><strong>3-2-1 Rule:</strong> Keep 3 copies of data, on 2 different media types, with 1 copy offsite.</li>
        <li><strong>Automated Backups:</strong> Implement automated backup solutions to ensure consistency.</li>
        <li><strong>Regular Testing:</strong> Regularly test backup systems to ensure data can be recovered.</li>
        <li><strong>Version Control:</strong> Maintain multiple versions of important files.</li>
      </ul>
      
      <h3>Recovery Time Objectives</h3>
      <p>Define clear recovery time objectives (RTO) and recovery point objectives (RPO) based on business needs. This helps in selecting appropriate backup and recovery solutions.</p>
      
      <h3>Cloud-Based Recovery Solutions</h3>
      <p>Cloud-based backup and recovery solutions offer scalability, cost-effectiveness, and geographic redundancy that traditional on-premises solutions may not provide.</p>
      
      <h3>Employee Training and Procedures</h3>
      <p>Ensure employees understand backup procedures and know how to respond to data loss incidents. Regular training and documented procedures are essential for effective data protection.</p>
    `
  }
];

const BlogDetailsPage = ({ params }) => {
  const { slug } = params;
  
  // Find the blog post by slug
  const post = blogPosts.find(p => p.slug === slug);
  
  // If post not found, show 404-like content
  if (!post) {
    return (
      <TekprofLayout>
        <PageBanner pageName="Blog Post Not Found" />
        <section className="blog-details-page py-130 rpy-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center">
                  <h2>Blog Post Not Found</h2>
                  <p>The blog post you're looking for doesn't exist.</p>
                  <Link href="/blog" className="theme-btn">
                    Back to Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </TekprofLayout>
    );
  }

  return (
    <TekprofLayout>
      <style jsx>{`
        .recent-posts-list {
          list-style: none;
          padding: 0;
        }
        .recent-post-item {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        .recent-post-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }
        .recent-post-item img {
          flex-shrink: 0;
        }
        .categories-list {
          list-style: none;
          padding: 0;
        }
        .categories-list li {
          margin-bottom: 8px;
          padding: 8px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        .categories-list li:last-child {
          border-bottom: none;
        }
      `}</style>
      <PageBanner pageName={post.title} />
      <section className="blog-details-page py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-content">
                <div className="blog-header mb-4">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-100 mb-4"
                    style={{ borderRadius: '8px' }}
                  />
                  
                  <div className="blog-meta-info mb-4">
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                      <div className="d-flex align-items-center gap-2">
                        <img 
                          src={post.avatar} 
                          alt={post.author}
                          width={40}
                          height={40}
                          style={{ borderRadius: '50%' }}
                        />
                        <span className="fw-semibold">{post.author}</span>
                      </div>
                      <span className="text-muted">|</span>
                      <span className="badge bg-primary">{post.category}</span>
                      <span className="text-muted">|</span>
                      <span className="text-muted">
                        <i className="far fa-calendar-alt me-1"></i>
                        {post.date}
                      </span>
                    </div>
                  </div>
                  
                  <h1 className="blog-title mb-4">{post.title}</h1>
                  <p className="lead mb-4">{post.description}</p>
                </div>
                
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                <div className="blog-navigation mt-5 pt-4 border-top">
                  <div className="row">
                    <div className="col-md-6">
                      <Link href="/blog" className="theme-btn">
                        <i className="far fa-arrow-left me-2"></i>
                        Back to Blog
                      </Link>
                    </div>
                    <div className="col-md-6 text-md-end">
                      <div className="share-buttons">
                        <span className="me-3">Share:</span>
                        <a href="#" className="btn btn-sm btn-outline-primary me-2">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="btn btn-sm btn-outline-primary me-2">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="btn btn-sm btn-outline-primary">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="blog-sidebar ms-lg-4">
                <div className="widget widget-recent-posts">
                  <h4 className="widget-title">Recent Posts</h4>
                  <ul className="recent-posts-list">
                    {blogPosts.filter(p => p.slug !== slug).slice(0, 3).map(recentPost => (
                      <li key={recentPost.id} className="recent-post-item">
                        <div className="d-flex gap-3">
                          <img 
                            src={recentPost.image} 
                            alt={recentPost.title}
                            width={80}
                            height={80}
                            style={{ borderRadius: '4px', objectFit: 'cover' }}
                          />
                          <div>
                            <h6>
                              <Link href={`/blog/${recentPost.slug}`}>
                                {recentPost.title.length > 50 
                                  ? recentPost.title.substring(0, 50) + '...'
                                  : recentPost.title
                                }
                              </Link>
                            </h6>
                            <small className="text-muted">{recentPost.date}</small>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="widget widget-categories">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="categories-list">
                    <li><Link href="/blog">Cyber Security <span>(3)</span></Link></li>
                    <li><Link href="/blog">Cloud Services <span>(2)</span></Link></li>
                    <li><Link href="/blog">IT Consulting <span>(1)</span></Link></li>
                    <li><Link href="/blog">Data Recovery <span>(1)</span></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};

export default BlogDetailsPage;