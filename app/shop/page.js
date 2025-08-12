"use client";
import PageBanner from "@/components/PageBanner";
import PriceRanger from "@/components/PriceRanger";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
import products from "@/data/products"; // Import product data
import { useState, useMemo } from "react";

const page = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("default");

  // Filter and sort products based on state
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                           product.condition.toLowerCase().includes(searchKeyword.toLowerCase());
      const matchesCategory = selectedCategory === "all" || 
                             product.name.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesPrice = product.currentMarketValue >= priceRange[0] && 
                          product.currentMarketValue <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case "new":
        return filtered.reverse();
      case "old":
        return filtered;
      case "hight-to-low":
        return filtered.sort((a, b) => b.currentMarketValue - a.currentMarketValue);
      case "low-to-high":
        return filtered.sort((a, b) => a.currentMarketValue - b.currentMarketValue);
      default:
        return filtered;
    }
  }, [searchKeyword, selectedCategory, priceRange, sortBy]);
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
                  <h5 className="widget-title" style={{color: 'white'}}>Search</h5>
                  <form action="#" className="default-search-form" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="text" 
                      placeholder="Keywords" 
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      style={{color: 'white'}}
                    />
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
                  <h5 className="widget-title" style={{color: 'white'}}>Category</h5>
                  <ul>
                    <li>
                      <Link href="#" onClick={(e) => {e.preventDefault(); setSelectedCategory("electronics")}} style={{color: 'white'}}>
                        Electronics <i className="far fa-arrow-right" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={(e) => {e.preventDefault(); setSelectedCategory("devices")}} style={{color: 'white'}}>
                        Devices <i className="far fa-arrow-right" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={(e) => {e.preventDefault(); setSelectedCategory("all")}} style={{color: 'white'}}>
                        All Categories <i className="far fa-arrow-right" />
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
                  <h5 className="widget-title" style={{color: 'white'}}>Filter</h5>
                  <div className="price-filter-wrap">
                    <div style={{color: 'white', marginBottom: '10px'}}>
                      Price Range: ${priceRange[0]} - ${priceRange[1]}
                    </div>
                    <div style={{marginBottom: '10px'}}>
                      <input 
                        type="range" 
                        min="0" 
                        max="1000" 
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        style={{width: '100%', marginBottom: '5px'}}
                      />
                      <input 
                        type="range" 
                        min="0" 
                        max="1000" 
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        style={{width: '100%'}}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="widget widget-products"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h5 className="widget-title" style={{color: 'white'}}>Products</h5>
                  <ul>
                    {filteredProducts.slice(0, 3).map((product) => (
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
                          <h6 style={{color: 'white'}}>
                            <Link href={`/shop/${product.slug}`}>
                              {product.name}
                            </Link>
                          </h6>
                          <span className="price" style={{color: 'white'}}>${product.currentMarketValue}.00</span>
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
                  <h4 className="widget-title" style={{color: 'white'}}>Popular Tags</h4>
                  <div className="tag-clouds">
                    <Link href="#" onClick={(e) => {e.preventDefault(); setSearchKeyword("electronics")}} style={{color: 'white'}}>Electronics</Link>
                    <Link href="#" onClick={(e) => {e.preventDefault(); setSearchKeyword("devices")}} style={{color: 'white'}}>Devices</Link>
                    <Link href="#" onClick={(e) => {e.preventDefault(); setSearchKeyword("used")}} style={{color: 'white'}}>Used</Link>
                    <Link href="#" onClick={(e) => {e.preventDefault(); setSearchKeyword("refurbished")}} style={{color: 'white'}}>Refurbished</Link>
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
                    style={{color: 'white'}}
                  >
                    Showing 1 - {filteredProducts.length} of {filteredProducts.length} Results
                  </div>
                  <div
                    className="products-dropdown mb-20"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      style={{color: 'white', backgroundColor: '#333'}}
                    >
                      <option value="default">
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
                  {filteredProducts.map((product) => (
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
                          <h5 style={{color: 'white'}}>
                            <Link href={`/shop/${product.slug}`}>
                              {product.name}
                            </Link>
                          </h5>
                          <span className="price" style={{color: 'white'}}>${product.currentMarketValue}.00</span>
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
