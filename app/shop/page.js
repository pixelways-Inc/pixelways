import PageBanner from "@/components/PageBanner";
import PriceRanger from "@/components/PriceRanger";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
import products from "@/data/products"; // Import product data

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
                      <Link href="/shop">
                        Electronics <i className="far fa-arrow-right" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop">
                        Devices <i className="far fa-arrow-right" />
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
                    {products.slice(0, 3).map((product) => (
                      <li key={product.slug}>
                        <div className="image">
                          <img src={product.image} alt={product.name} />
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
                            <Link href={`/shop/${product.slug}`}>
                              {product.name}
                            </Link>
                          </h6>
                          <span className="price">${product.currentMarketValue}.00</span>
                        </div>
                      </li>
                    ))}
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
                    <Link href="/shop">Electronics</Link>
                    <Link href="/shop">Devices</Link>
                    <Link href="/shop">Used</Link>
                    <Link href="/shop">Refurbished</Link>
                  </div>
                </div>
                <div
                  className="widget widget-cta"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h3>Looking for specific IT solutions?</h3>
                  <Link href="/contact" className="theme-btn style-two">
                    Contact Us <i className="far fa-arrow-right" />
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
                    Showing 1 - {products.length} of {products.length} Results
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
                  {products.map((product) => (
                    <div
                      key={product.slug}
                      className="col-xl-4 col-sm-6"
                      data-aos="fade-up"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="product-item">
                        <div className="image">
                          <img src={product.image} alt={product.name} />
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
                            <Link href={`/shop/${product.slug}`}>
                              {product.name}
                            </Link>
                          </h5>
                          <span className="price">${product.currentMarketValue}.00</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Removed pagination as there are only 6 products */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};
export default page;
