"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const ClientLogo = ({ containerClass = "client-logo-area" }) => {
  return (
    <div className={containerClass}>
      <div className="container-fluid">
        <Slider
          {...sliderProps.clientLogo}
          className="client-logo-active pt-70 pb-40"
        >
          <div
            className="client-logo-item"
            data-aos="flip-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Link href="contact">
              <img
                src="assets/images/client-logos/client-logo1.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div
            className="client-logo-item"
            data-aos="flip-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Link href="contact">
              <img
                src="assets/images/client-logos/client-logo2.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div
            className="client-logo-item"
            data-aos="flip-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Link href="contact">
              <img
                src="assets/images/client-logos/client-logo3.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div
            className="client-logo-item"
            data-aos="flip-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Link href="contact">
              <img
                src="assets/images/client-logos/client-logo4.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div
            className="client-logo-item"
            data-aos="flip-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Link href="contact">
              <img
                src="assets/images/client-logos/client-logo5.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div
            className="client-logo-item"
            data-aos="flip-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Link href="contact">
              <img
                src="assets/images/client-logos/client-logo6.png"
                alt="Client Logo"
              />
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default ClientLogo;
