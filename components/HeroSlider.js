
"use client";
import Slider from "react-slick";


const slides = [
  {
    title: "Introducing Pixel Pilot: Your AI-Driven IDE",
    description: "Experience the future of coding with Pixel Pilot, our intelligent development environment. Boost your productivity and streamline your workflow.",
    imageUrl: "https://api.a0.dev/assets/image?text=Pixel+Pilot+AI+Driven+IDE+Coding+Future&aspect=16:9&seed=4",
    ctaText: "Discover Pixel Pilot",
    ctaLink: "https://pipilot.dev",
  },
  {
    title: "Innovative IT Solutions for a Digital World",
    description: "Pixelways Solutions offers cutting-edge IT consultancy and digital solutions to transform your business.",
    imageUrl: "https://api.a0.dev/assets/image?text=Pixelways+Solution+IT+Consultancy+Digital+Solutions&aspect=16:9&seed=1",
    ctaText: "Explore Our Services",
    ctaLink: "/services",
  },
  {
    title: "Custom Web & Mobile App Development",
    description: "From concept to launch, we build bespoke web and mobile applications that drive user engagement.",
    imageUrl: "https://api.a0.dev/assets/image?text=Custom+Web+and+Mobile+App+Development&aspect=16:9&seed=2",
    ctaText: "View Our Portfolio",
    ctaLink: "/cases",
  },
  {
    title: "Cloud Solutions & DevOps",
    description: "Leverage the power of the cloud with our expert cloud and DevOps services for scalability and efficiency.",
    imageUrl: "https://api.a0.dev/assets/image?text=Cloud+Solutions+and+DevOps&aspect=16:9&seed=3",
    ctaText: "Learn More",
    ctaLink: "/services/service-details",
  },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="hero-slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slick-slide-item">
            <div
              className="slider-background"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="slider-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <a href={slide.ctaLink} className="cta-button">
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .hero-slider-container {
          height: 100vh;
          width: 100%;
        }
        .slick-slide-item {
          height: 100vh;
        }
        .slider-background {
          height: 100%;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }
        .slider-content {
          background-color: rgba(0, 0, 0, 0.5);
          padding: 2rem;
          border-radius: 0.5rem;
        }
        .cta-button {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.75rem 1.5rem;
          background-color: #FC5546;
          color: white;
          text-decoration: none;
          border-radius: 0.25rem;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .slider-content {
            padding: 1rem;
            width: 90%; /* Adjust width for better mobile fit */
          }

          .slider-content h1 {
            font-size: 1.8rem; /* Smaller font size for mobile headings */
          }

          .slider-content p {
            font-size: 0.9rem; /* Smaller font size for mobile paragraphs */
          }

          .cta-button {
            padding: 0.6rem 1.2rem; /* Smaller padding for mobile buttons */
            font-size: 0.9rem; /* Smaller font size for mobile buttons */
          }
        }

        @media (max-width: 480px) {
          .slider-content h1 {
            font-size: 1.5rem;
          }

          .slider-content p {
            font-size: 0.8rem;
          }

          .cta-button {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
