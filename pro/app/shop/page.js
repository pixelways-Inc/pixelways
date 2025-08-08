import PageBanner from "@/components/PageBanner";
import PriceRanger from "@/components/PriceRanger";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
const page = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Shop" title={"All Products"} />
      <section className="shop-area py-130 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="shop-sidebar rmb-75">
                <div
                  className="widget widget-search"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="widget-title">Search</h5>
                  <form action="#" className="default-search-form">
                    <input type="text" placeholder="Keywords" required />
                    <button
                      type="submit"
                      className="searchbutton far fa-search"
                    />
                  </form>
                </div>
                <div
                  className="widget widget-category"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="widget-title">Category</h5>
                  <ul>
                    <li>
                      <Link href="blog">
                        Digital Marketing <i className="far fa-arrow-right" />
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">
                        SEO optimization <i className="far fa-arrow-right" />
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">
                        Content Marketing <i className="far fa-arrow-right" />
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">
                        Keywords Research <i className="far fa-arrow-right" />
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">
                        Technical Adult <i className="far fa-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-filter"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="widget-title">Filter</h5>
                  <div className="price-filter-wrap">
                    <PriceRanger />
                  </div>
                </div>
                <div
                  className="widget widget-products"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="widget-title">Products</h5>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product1.jpg"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h6>
                          <Link href="product-details">Summer M T-Shirt</Link>
                        </h6>
                        <span className="price">$13.00</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product2.jpg"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h6>
                          <Link href="product-details">Boy Winter Shoe</Link>
                        </h6>
                        <span className="price">$25.00</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product3.jpg"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h6>
                          <Link href="product-details">Men Smart Watch</Link>
                        </h6>
                        <span className="price">$18.00</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-tag-cloud"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tag-clouds">
                    <Link href="shop">Shop</Link>
                    <Link href="shop">Men</Link>
                    <Link href="shop">Women</Link>
                    <Link href="shop">Watch</Link>
                    <Link href="shop">T-Shirt</Link>
                  </div>
                </div>
                <div
                  className="widget widget-cta"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h3>Boost your Digital Product marketing?</h3>
                  <Link href="contact" className="theme-btn style-two">
                    Shop Now <i className="far fa-arrow-right" />
                  </Link>
                  <div
                    className="bg bgs-cover"
                    style={{
                      backgroundImage: "url(assets/images/widgets/cta-bg.png)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="shop-page-wrap">
                <div className="shop-shorter rel z-3 mb-20">
                  <div
                    className="sort-text mb-20"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    Showing 1 - 12 of 30 Results
                  </div>
                  <div
                    className="products-dropdown mb-20"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <select>
                      <option value="default" selected>
                        Default sorting
                      </option>
                      <option value="new">Sort by Newness</option>
                      <option value="old">Sort by Oldest</option>
                      <option value="hight-to-low">High To Low</option>
                      <option value="low-to-high">Low To High</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item">
                      <div className="image">
                        <img
                          src="assets/images/products/product1.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="product-details">Summer M T-Shirt</Link>
                        </h5>
                        <span className="price">$13.00</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item">
                      <div className="image">
                        <img
                          src="assets/images/products/product2.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="product-details">Men Leather Shoe</Link>
                        </h5>
                        <span className="price">$13.00</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={150}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item">
                      <div className="image">
                        <img
                          src="assets/images/products/product3.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="product-details">Men Leather Shoe</Link>
                        </h5>
                        <span className="price">$13.00</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item">
                      <div className="image">
                        <img
                          src="assets/images/products/product4.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="product-details">Summer M T-Shirt</Link>
                        </h5>
                        <span className="price">$13.00</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item">
                      <div className="image">
                        <img
                          src="assets/images/products/product5.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="product-details">Modern smart watch</Link>
                        </h5>
                        <span className="price">$13.00</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={150}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item">
                      <div className="image">
                        <img
                          src="assets/images/products/product6.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="product-details">Women Leather Bag</Link>
                        </h5>
                        <span className="price">$13.00</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item">
                      <div className="image">
                        <img
                          src="assets/images/products/product7.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="product-details">Leather Black Belt</Link>
                        </h5>
                        <span className="price">$13.00</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item">
                      <div className="image">
                        <img
                          src="assets/images/products/product8.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="product-details">Women Leather Bag</Link>
                        </h5>
                        <span className="price">$13.00</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={150}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item">
                      <div className="image">
                        <img
                          src="assets/images/products/product9.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="product-details">Leather Black VR</Link>
                        </h5>
                        <span className="price">$13.00</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item">
                      <div className="image">
                        <img
                          src="assets/images/products/product10.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="product-details">Men Leather Shoe</Link>
                        </h5>
                        <span className="price">$13.00</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item">
                      <div className="image">
                        <img
                          src="assets/images/products/product11.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="product-details">Modern smart watch</Link>
                        </h5>
                        <span className="price">$13.00</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={150}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="product-item">
                      <div className="image">
                        <img
                          src="assets/images/products/product12.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link href="product-details">
                            Leather brown wallet
                          </Link>
                        </h5>
                        <span className="price">$13.00</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  className="pagination mt-10 flex-wrap"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <li className="page-item disabled">
                    <span className="page-link">
                      <i className="fas fa-angle-left" />
                    </span>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">
                      1<span className="sr-only">(current)</span>
                    </span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="fas fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};
export default page;
