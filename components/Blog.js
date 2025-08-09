"use client"
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const Blog = () => {
  // Blog posts data
  const posts = [
    {
      id: 1,
      slug: "ultimate-guide-choosing-right-it-solutions-partner",
      category: "Cyber Security",
      date: "25 December 2024",
      title: "The Ultimate Guide to Choosing the Right IT Solutions Partner",
      description: "Highlights clear problem-solution-result narrative, demonstrating agency’s ability to provide.",
      image: "https://api.a0.dev/assets/image?text=Business leader writing a cybersecurity article in a modern workspace, with digital threat icons in the background. Professional, informative, 8K, 300x200px.&aspect=3:2&seed=701",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      author: "John Carter",
      link: "blog-details"
    },
    {
      id: 2,
      slug: "cybersecurity-unlocked-protecting-digital-world-2024",
      category: "Cloud Services",
      date: "25 December 2024",
      title: "Cybersecurity Unlocked Protecting Your Digital World in 2024",
      description: "Highlights clear problem-solution-result narrative, demonstrating agency’s ability to provide.",
      image: "https://api.a0.dev/assets/image?text=IT consultant reviewing solution options on a tablet, with a cityscape visible through the window. Insightful, expert, 8K, 300x200px.&aspect=3:2&seed=702",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      author: "Emily Smith",
      link: "blog-details"
    },
    {
      id: 3,
      slug: "essential-cybersecurity-practices-every-business-must-follow",
      category: "Cyber Security",
      date: "25 December 2024",
      title: "Essential Cybersecurity Practices Every Business Must Follow",
      description: "Highlights clear problem-solution-result narrative, demonstrating agency’s ability to provide.",
      image: "https://api.a0.dev/assets/image?text=Data backup specialist restoring files on a computer, with disaster recovery plans on the wall. Secure, practical, 8K, 300x200px.&aspect=3:2&seed=703",
      avatar: "https://randomuser.me/api/portraits/men/31.jpg",
      author: "Michael Lee",
      link: "blog-details"
    },
    {
      id: 4,
      slug: "modern-it-consulting-trends-growing-businesses",
      category: "IT Consulting",
      date: "25 December 2024",
      title: "Modern IT Consulting Trends for Growing Businesses",
      description: "Explore the latest trends in IT consulting and how they impact business growth in 2024.",
      image: "https://api.a0.dev/assets/image?text=Modern IT consultant presenting growth strategies to a team in a high-tech office. Trendy, collaborative, 8K, 300x200px.&aspect=3:2&seed=704",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      author: "Sophia Turner",
      link: "blog-details"
    },
    {
      id: 5,
      slug: "cloud-migration-best-practices-smooth-transition",
      category: "Cloud Services",
      date: "25 December 2024",
      title: "Cloud Migration: Best Practices for a Smooth Transition",
      description: "Learn how to migrate your business to the cloud with minimal disruption and maximum security.",
      image: "https://api.a0.dev/assets/image?text=Cloud migration expert guiding a business team through a seamless transition. Efficient, secure, 8K, 300x200px.&aspect=3:2&seed=705",
      avatar: "https://randomuser.me/api/portraits/men/51.jpg",
      author: "David Kim",
      link: "blog-details"
    },
    {
      id: 6,
      slug: "data-recovery-solutions-small-businesses",
      category: "Data Recovery",
      date: "25 December 2024",
      title: "Data Recovery Solutions for Small Businesses",
      description: "Discover effective data recovery strategies tailored for small businesses in the digital age.",
      image: "https://api.a0.dev/assets/image?text=Data recovery specialist helping a small business restore lost files. Reliable, supportive, 8K, 300x200px.&aspect=3:2&seed=706",
      avatar: "https://randomuser.me/api/portraits/women/61.jpg",
      author: "Olivia Brown",
      link: "blog-details"
    }
  ];

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
              {posts.map(post => (
                <div className="blog-item-three" key={post.id}>
                  <div className="row gap-50 align-items-center">
                    <div className="col-lg-6">
                      <div className="image">
                        <img src={post.image} alt="Blog" width={300} height={200} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="content">
                        <ul className="blog-meta">
                          <li>
                            <Link href="blog">{post.category}</Link>
                          </li>
                          <li>
                            <Link href="blog">{post.date}</Link>
                          </li>
                        </ul>
                        <div className="blog-author flex items-center gap-2 mb-2">
                          <img src={post.avatar} alt={post.author} width={32} height={32} style={{borderRadius: '50%'}} />
                          <span className="text-sm font-medium">{post.author}</span>
                        </div>
                        <h4 className="title">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>
                        <p>{post.description}</p>
                        <Link className="theme-btn btn-small" href={`/blog/${post.slug}`}>
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
