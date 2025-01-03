import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import ProductForm from "./components/ProductForm";
import axios from "axios";
import Image from "next/image";
import { ImBin } from "react-icons/im";
import { SiTicktick } from "react-icons/si";

interface Product {
  _id: string;
  productBackground: string;
  productImage: string;
  productNameEng: string;
  productDescriptionEng: string;
  imageHeight: number;
  imageWidth: number;
}

const Products = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [isError, setIsError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    axios
      .get<Product[]>("/api/products")
      .then((res) => {
        setProduct(res?.data);
      })
      .catch((error: string) => {
        setIsError(`Error fetching product profits: ${error}`);
      });
  }, []);

  const handleDelete = async (productId: string) => {
    try {
      const response = await axios.delete(
        `/api/products?productId=${productId}`
      );

      if (response.status === 200) {
        setTimeout(() => {
          setSuccessMessage("Product Deleted successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
        setProduct(product.filter((item) => item._id !== productId));
      } else {
        alert("Failed to delete item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Layout title="Products - Cermat Admin">
      <div className="product-upload-container">
        <ProductForm />
        <h2 className="section-title">Product List</h2>
        {isError && <p>{isError}</p>}
        {successMessage && (
          <span className="success-message">
            <SiTicktick />
            <p>{successMessage}</p>
          </span>
        )}
        <div className="product-List">
          {product.map((product, index: number) => (
            <div
              key={index}
              className="product-card-box"
              style={{ background: `${product?.productBackground}` }}
            >
              <div className="product-content-container">
                <div
                  className={`product-pic-box product-${
                    product?.imageHeight >= 380 ? "440" : "L440"
                  }-pic-box`}
                >
                  <Image
                    src={product?.productImage}
                    alt={product?.productNameEng}
                    height={product?.imageHeight}
                    width={product?.imageWidth}
                  />
                </div>
                <span className="product-content-box">
                  <h3>{product?.productNameEng}</h3>
                  <p>{product?.productDescriptionEng}</p>
                </span>
                <div className="editingbadges">
                  {/* <FaPencilAlt /> */}
                  <ImBin onClick={() => handleDelete(product._id)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
