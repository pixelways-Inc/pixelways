"use client";
import TekprofLayout from "@/layout/TekprofLayout";
import ProductDetailsContent from "@/components/ProductDetailsContent";
import products from "@/data/products"; // Import the product data
import { useState, useEffect } from "react";
import Link from "next/link";

const ProductPage = ({ params }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the current product by slug
    const currentProduct = products.find((p) => p.slug === params.slug);

    if (currentProduct) {
      setProduct(currentProduct);
    }

    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return (
      <TekprofLayout>
        <div className="container py-5">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </TekprofLayout>
    );
  }

  if (!product) {
    return (
      <TekprofLayout>
        <div className="container py-5">
          <div className="text-center">
            <h1>Product Not Found</h1>
            <p>The product you're looking for doesn't exist.</p>
            <Link href="/shop" className="theme-btn">
              Back to Shop
            </Link>
          </div>
        </div>
      </TekprofLayout>
    );
  }

  return (
    <TekprofLayout>
      <ProductDetailsContent product={product} />
      {/* Related products section can be added here if needed, similar to blog */}
    </TekprofLayout>
  );
};

export default ProductPage;
