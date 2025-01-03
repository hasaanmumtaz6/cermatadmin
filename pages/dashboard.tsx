import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./components/Layout";
import { AiFillProduct } from "react-icons/ai";
import { FaIndustry, FaNewspaper, FaPencilAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import Image from "next/image";
import { ImBin } from "react-icons/im";

interface Product {
  productBackground: string;
  productImage: string;
  productNameEng: string;
  productDescriptionEng: string;
  imageHeight: number;
  imageWidth: number;
}

const Dashboard = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [isError, setIsError] = useState<string>("");

  useEffect(() => {
    axios
      .get<Product[]>("/api/products")
      .then((res) => {
        setProduct(res?.data);
      })
      .catch((error:string) => {
        setIsError(`Error fetching product profits:${error}`);
      });
  });

  return (
    <Layout title="Home - Cermat Admin">
      <div className="Admin-detail-container">
        <div className="admin-detail-box mb-10">
          <div className="admin-detail-box-cards-container">
            <AiFillProduct />
            <span>
              <h3>90</h3>
              <p>Total Product</p>
            </span>
          </div>

          <div className="admin-detail-box-cards-container">
            <FaNewspaper />
            <span>
              <h3>190+</h3>
              <p>Total News Posts</p>
            </span>
          </div>

          <div className="admin-detail-box-cards-container">
            <MdOutlineWork />
            <span>
              <h3>6+</h3>
              <p>Total Careers Posts</p>
            </span>
          </div>

          <div className="admin-detail-box-cards-container">
            <FaIndustry />
            <span>
              <h3>16+</h3>
              <p>Total Private Labels</p>
            </span>
          </div>

          <div className="admin-detail-box-cards-container">
            <FaMessage />
            <span>
              <h3>9k+</h3>
              <p>Total Messages</p>
            </span>
          </div>
        </div>

        <h2 className="section-title">Product List</h2>
        {isError&&<p>{isError}</p>}
        <div className="product-List">
          {product.map((product:any, index:number) => (
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
                  <Image src={product?.productImage} alt={product?.productNameEng} height={product?.imageHeight} width={product?.imageWidth} />
                </div>
                <span className="product-content-box">
                  <h3>{product?.productNameEng}</h3>
                  <p>{product?.productDescriptionEng}</p>
                </span>
                <div className="editingbadges">
                  <FaPencilAlt />
                  <ImBin />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
