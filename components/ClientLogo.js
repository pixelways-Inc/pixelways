"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const clientLogos = [
  "client-logo1.png",
  "client-logo2.png",
  "client-logo3.png",
  "client-logo4.png",
  "client-logo5.png",
  "client-logo6.png",
];

const ClientLogo = ({
  containerClass = "client-logo-area",
}) => {
  // Ensure sliderProps.clientLogo has autoplay enabled
  const sliderSettings = {
    ...sliderProps.clientLogo,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={containerClass}>
      <div className="container-fluid">
        <Slider {...sliderSettings} className="client-logo-active pt-70 pb-40">
          {clientLogos.map((logo, idx) => (
            <div
              key={logo}
              className="client-logo-item"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Link href="/contact">
                <img
                  src={`assets/images/client-logos/${logo}`}
                  alt={`Client Logo ${idx + 1}`}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientLogo;
