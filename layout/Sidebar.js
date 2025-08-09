"use client";
import { tekprofUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect } from "react";
const Sidebar = () => {
  useEffect(() => {
    tekprofUtility.sidebar();
  }, []);

  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div className="form-back-drop" />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box">
          <div className="cross-icon">
            <span className="fa fa-times" />
          </div>
          {/*Search Box*/}
          <div
            className="widget widget-search"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <form action="#" className="default-search-form">
              <input type="text" placeholder="Search here" required />
              <button type="submit" className="searchbutton far fa-search" />
            </form>
          </div>
          {/*Recent Post*/}
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
                  <img src="https://api.a0.dev/assets/image?text=business+strategy+IT+company&aspect=1:1&seed=sidebar1" alt="Post" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="blog-details">
                      The Ultimate Guide to Choosing the Right IT Solutions Partner
                    </Link>
                  </h5>
                  <span className="date">15 October 2024</span>
                </div>
              </li>
              <li>
                <div className="image">
                  <img src="https://api.a0.dev/assets/image?text=cloud+guide+IT+enterprise&aspect=1:1&seed=sidebar2" alt="Post" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="blog-details">Cloud Migration: Best Practices for a Smooth Transition</Link>
                  </h5>
                  <span className="date">15 October 2024</span>
                </div>
              </li>
              <li>
                <div className="image">
                  <img src="https://api.a0.dev/assets/image?text=IT+consulting+cost+savings&aspect=1:1&seed=sidebar3" alt="Post" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="blog-details">Modern IT Consulting Trends for Growing Businesses</Link>
                  </h5>
                  <span className="date">15 October 2024</span>
                </div>
              </li>
            </ul>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Sidebar;
