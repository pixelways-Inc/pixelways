"use client";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";

const ProductDetailsContent = ({ product }) => {
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
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
                    <img src={product.image} alt={product.name} />
                  </Tab.Pane>
                  {/* You can add more preview images if available in product data */}
                </Tab.Content>
                {/* Removed thumb-images as we only have one image per product for now */}
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
                <h2>{product.name}</h2>
              </div>
              <span className="price mb-30">${product.currentMarketValue}.00</span>
              <p>
                Condition: {product.condition} <br />
                Components: {product.components} <br />
                Issue Description: {product.issueDescription} <br />
                Recommendation: {product.recommendation} <br />
                Status: {product.status} <br />
                Location: {product.location}
              </p>
              <form action="#" className="add-to-cart pt-15">
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  max={20}
                  onChange={(e) => {
                    if (parseInt(e.target.value, 10) < 10)
                      e.target.value = "0" + e.target.value;
                  }}
                  required
                />
                <button type="submit" className="theme-btn">
                  Add to Cart <i className="far fa-arrow-right" />
                </button>
              </form>
              <ul className="category-tags pt-45 rpt-20">
                <li>
                  <h5>Categories : </h5>
                  <a href="#">Electronics</a>
                  <a href="#">Devices</a>
                </li>
                <li>
                  <h5>Popular Tags : </h5>
                  <div className="tag-clouds">
                    <a href="#">{product.name.split(' ')[0]}</a>
                    <a href="#">{product.name.split(' ')[1] || 'Device'}</a>
                  </div>
                </li>
              </ul>
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
                Description <i className="far fa-arrow-right" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as={"li"}>
              <Nav.Link as={"a"} eventKey={"information"} href="#information">
                Additional Information <i className="far fa-arrow-right" />
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
                This product is a {product.condition} item. It has been
                thoroughly checked, and the following components were evaluated:{" "}
                {product.components}. {product.issueDescription !== "N/A" ? `There was an issue with: ${product.issueDescription}.` : ''}
                Our technician's recommendation is: {product.recommendation}.
              </p>
            </Tab.Pane>
            <Tab.Pane className="tab-pane fade" eventKey="information">
              <h5>Additional information</h5>
              <ul className="list mt-20">
                <li>Estimated Current Value: ${product.estimatedCurrentValue}</li>
                <li>Current Market Value: ${product.currentMarketValue}</li>
                <li>Minimum Sales Price: ${product.minimumSalesPrice}</li>
                <li>Status: {product.status}</li>
                <li>Location: {product.location}</li>
              </ul>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};

export default ProductDetailsContent;
