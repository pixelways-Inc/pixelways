"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";
import allServices from '../data/services.json'


/**
 * 
 * @param {Object} param0 
 * @param {'list' | 'slide'} param0.mode - Determines how services should be rendered
 * @param {String} param0.containerClass - Preferred classnames to be passed to the main section
 * @param {Number | null } param0.limit - This is the number of services to be rendered
 * @returns {JSX.Element}
 */
const Services = ({
  containerClass = "py-5", mode, limit = null
}) => {
  
  const selectedServices = limit? allServices.slice(0,limit): allServices

  // Ensure sliderProps.Services has autoplay enabled
  const sliderSettings = {
    ...sliderProps.servicesSlider,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="features-area rel z-1">
        <div className="container features-bg pt-130 rpt-100 pb-100 rpb-70">

          <div className={containerClass}>
            {
              mode == 'slide' ?
            
            <div className="container-fluid">
              <Slider {...sliderSettings} className="row justify-content-center">
                {selectedServices.map((service, index) => (
                  
                    
                  <div

                    className="col-xl-4 col-md-6 p-1"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="feature-item hover-content">
                      <div className="image">
                        <img
                          src={service.image} alt="IT Solutions" width={400} height={400} />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <Link href={`/services?service=${index}`}>{service.title}</Link>
                        </h4>
                        <p>
                          {service.description}
                        </p>
                        <div className="inner-content-no">
                          <Link className="read-more" href={`/services?service=${index}`}>
                            Read More <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                ))}
              </Slider>
            </div>

              :

            <div className="container-fluid">
              <div className="row justify-content-center">
                {
                  selectedServices.map(service=>(

                    
                    
                <div
                  className="col-xl-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="feature-item hover-content">
                    <div className="image">
                      <img
                        src={service.image} alt="IT Solutions" width={400} height={400} />
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <Link href={`/services?service=${index}`}>{service.title}</Link>
                      </h4>
                      <p>
                        {service.description}
                      </p>
                      <div className="inner-content-no">
                        <Link className="read-more" href={`/services?service=${index}`}>
                          Read More <i className="far fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>


                  ))
                }
              </div>
              
            </div>
              
            }
          </div>

          <div className="text-center">
              { limit? 
              <>
                <Link href="/services" className="theme-btn mt-20 mb-50"> See all services </Link>
              </> 
              : 
                <></> 
              }
          </div>
        </div>
        </section>
  );
};

export default Services;