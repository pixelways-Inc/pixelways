"use client";
import Link from "next/link";

const ClientLogo = ({ containerClass = "client-logo-area" }) => {
  const logos = [
    "client-logo1.png",
    "client-logo2.png",
    "client-logo3.png",
    "client-logo4.png",
    "client-logo5.png",
    "client-logo6.png",
    "client-logo1.png",
    "client-logo2.png",
    "client-logo3.png",
    "client-logo4.png",
    "client-logo5.png",
    "client-logo6.png",
  ];

  return (
    <div className={containerClass}>
      <div className="container-fluid overflow-hidden">
        <div className="relative w-full h-[140px] py-6">
          <div className="marquee flex items-center absolute left-0 top-0 h-full w-full">
            <div className="marquee-content flex items-center animate-marquee">
              
              {/* First set of logos */}
              {logos.map((logo, idx) => (
                <div
                  key={logo + idx}
                  className="client-logo-item flex items-center justify-center mx-8 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <Link href="contact">
                    <img
                      src={`assets/images/client-logos/${logo}`}
                      alt={`Client Logo ${idx + 1}`}
                      className="h-16 w-auto object-contain transition-all duration-300 hover:[filter:invert(21%)_sepia(93%)_saturate(5483%)_hue-rotate(354deg)_brightness(97%)_contrast(96%)]"
                    />
                  </Link>
                </div>
              ))}

              {/* Duplicate for seamless loop */}
              {logos.map((logo, idx) => (
                <div
                  key={logo + "-dup-" + idx}
                  className="client-logo-item flex items-center justify-center mx-8 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  data-aos="flip-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <Link href="contact">
                    <img
                      src={`assets/images/client-logos/${logo}`}
                      alt={`Client Logo ${idx + 1}`}
                      className="h-16 w-auto object-contain transition-all duration-300 hover:[filter:invert(21%)_sepia(93%)_saturate(5483%)_hue-rotate(354deg)_brightness(97%)_contrast(96%)]"
                    />
                  </Link>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          overflow: hidden;
        }
        .marquee-content {
          min-width: 200%;
          display: flex;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ClientLogo;
