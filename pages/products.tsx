import React from "react";
import Layout from "./components/Layout";
import ProductForm from "./components/ProductForm";

const Products = () => {
  return (
    <Layout title="Products - Cermat Admin">
      <div className="product-upload-container">
        <ProductForm />
      </div>
    </Layout>
  );
};

export default Products;
