import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const ClientLogos = () => {
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

  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 50,
      once: true,
      disable: false, // Ensure AOS animations still work on mobile
    });
  }, []);

  return (
    <div className="relative w-full min-h-[80px] py-6 bg-white">
      <div className="marquee absolute left-0 top-0 h-full w-full flex items-center overflow-hidden">
        <div className="marquee-content flex items-center gap-8 animate-marquee">
          {logos.map((logo, idx) => (
            <div
              key={logo + idx}
              className="client-logo-item flex-shrink-0"
              data-aos="flip-up"
            >
              <Link href="/contact">
                <img
                  src={`assets/images/client-logos/${logo}`}
                  alt={`Client Logo ${idx + 1}`}
                  className="max-h-[48px] sm:max-h-[64px] w-auto transition duration-300 hover:brightness-0 hover:saturate-100 hover:text-red-500"
                />
              </Link>
            </div>
          ))}
          {/* Duplicate for seamless scrolling */}
          {logos.map((logo, idx) => (
            <div
              key={logo + "-dup-" + idx}
              className="client-logo-item flex-shrink-0"
              data-aos="flip-up"
            >
              <Link href="/contact">
                <img
                  src={`assets/images/client-logos/${logo}`}
                  alt={`Client Logo ${idx + 1}`}
                  className="max-h-[48px] sm:max-h-[64px] w-auto transition duration-300 hover:brightness-0 hover:saturate-100 hover:text-red-500"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
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

export default ClientLogos;
