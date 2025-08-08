"use client";
import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
const page = () => {
  return (
    <TekprofLayout>
      <PageBanner pageName="Product Details" />
      <section className="product-details pb-10 pt-130 rpt-100">
        <div className="container">
          <div className="row gap-110">
            <div className="col-lg-7">
              <div
                className="product-details-images rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <Tab.Container defaultActiveKey={"preview1"}>
                  <Tab.Content className="tab-content preview-images">
                    <Tab.Pane
                      className="tab-pane fade preview-item"
                      eventKey="preview1"
                    >
                      <img
                        src="assets/images/products/preview1.png"
                        alt="Perview"
                      />
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade preview-item"
                      eventKey="preview2"
                    >
                      <img
                        src="assets/images/products/preview1.png"
                        alt="Perview"
                      />
                    </Tab.Pane>
                    <Tab.Pane
                      className="tab-pane fade preview-item"
                      eventKey="preview3"
                    >
                      <img
                        src="assets/images/products/preview1.png"
                        alt="Perview"
                      />
                    </Tab.Pane>
                  </Tab.Content>
                  <Nav as={"div"} className="nav thumb-images rmb-20">
                    <Nav.Link
                      as={"a"}
                      eventKey={"preview1"}
                      href="#preview1"
                      className="thumb-item"
                    >
                      <img
                        src="assets/images/products/thumb1.png"
                        alt="Thumb"
                      />
                    </Nav.Link>
                    <Nav.Link
                      as={"a"}
                      eventKey={"preview2"}
                      href="#preview2"
                      className="thumb-item"
                    >
                      <img
                        src="assets/images/products/thumb2.png"
                        alt="Thumb"
                      />
                    </Nav.Link>
                    <Nav.Link
                      as={"a"}
                      eventKey={"preview3"}
                      href="#preview3"
                      className="thumb-item"
                    >
                      <img
                        src="assets/images/products/thumb3.png"
                        alt="Thumb"
                      />
                    </Nav.Link>
                  </Nav>
                </Tab.Container>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="product-details-content"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="ratting mb-10">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="section-title">
                  <h2>Summer M T-Shirt</h2>
                </div>
                <span className="price mb-30">$13.00</span>
                <p>
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae
                  abillo inventore veritatis quasi architecto beatae vitae dicta
                  sunt explicabo Nemo enim ipsam voluptatem quia to voluptas sit
                  aspernatur aut odit autfugite
                </p>
                <form action="#" className="add-to-cart pt-15">
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    max={20}
                    onchange="if(parseInt(this.value,10)<10)this.value='0'+this.value;"
                    required
                  />
                  <button type="submit" className="theme-btn">
                    Add to Cart <i className="far fa-arrow-right" />
                  </button>
                </form>
                <ul className="category-tags pt-45 rpt-20">
                  <li>
                    <h5>Categories : </h5>
                    <a href="#">T-Shirt</a>
                    <a href="#">Bag</a>
                    <a href="#">Shoe</a>
                  </li>
                  <li>
                    <h5>Popular Tags : </h5>
                    <div className="tag-clouds">
                      <a href="#">Shop</a>
                      <a href="#">Men</a>
                      <a href="#">Women</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"details"}>
            <Nav
              as="ul"
              className="nav nav advanced-tab style-two product-info-tab mt-90 mb-40"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Nav.Item as={"li"}>
                <Nav.Link as={"a"} eventKey={"details"} href="#details">
                  Descrptions <i className="far fa-arrow-right" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link as={"a"} eventKey={"reviews"} href="#reviews">
                  {" "}
                  Reviews <i className="far fa-arrow-right" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as={"li"}>
                <Nav.Link as={"a"} eventKey={"information"} href="#information">
                  Additional Information's <i className="far fa-arrow-right" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content
              className="tab-content pb-30"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Tab.Pane className="tab-pane fade" eventKey="details">
                <p>
                  Must explain to you how all this mistaken idea of denouncing
                  pleasure and praising pain was born and I will give you a
                  complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful. Nor again
                  is there anyone who loves or pursues or desires to obtain pain
                  of itself, because it is pain, but because occasionally
                </p>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam
                </p>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="reviews">
                <h5>2 Reviews</h5>
                <div className="comments">
                  <div className="comment-body">
                    <div className="author-thumb">
                      <img
                        src="assets/images/blog/comment-author1.png"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <ul className="comment-header">
                        <li>
                          <h6>William L. Jackson</h6>
                        </li>
                        <li>
                          <a href="#">Sep 25, 2023</a>
                        </li>
                      </ul>
                      <p>
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse molestiae consequatur qui dolorem
                        eum fugiat voluptas
                      </p>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                  <div className="comment-body">
                    <div className="author-thumb">
                      <img
                        src="assets/images/blog/comment-author2.png"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <ul className="comment-header">
                        <li>
                          <h6>James M. Stovall</h6>
                        </li>
                        <li>
                          <a href="#">February 25, 2024</a>
                        </li>
                      </ul>
                      <p>
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse molestiae consequatur qui dolorem
                        eum fugiat voluptas
                      </p>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="information">
                <h5>Additional information</h5>
                <p>
                  Circumstances occur in which toil and pain can procure him
                  some great pleasure. To take a trivial example, which of us
                  ever undertakes laborious physical exercise, except to obtain
                  some advantage from it? But who has any right to find fault
                  with a man who chooses
                </p>
                <ul className="list mt-20">
                  <li>T-Shirt</li>
                  <li>Leather Bag</li>
                  <li>Man Smart Watch</li>
                </ul>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      <section className="related-product-area py-80 rpy-50">
        <div className="container">
          <div
            className="section-title text-center mb-55"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <h2>Related Product</h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
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
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
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
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
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
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div
                className="product-item"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
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
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};
export default page;
