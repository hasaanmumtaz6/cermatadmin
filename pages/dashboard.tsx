import React from "react";
import Layout from "./components/Layout";
import { AiFillProduct } from "react-icons/ai";
import { FaIndustry, FaNewspaper, FaPencilAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import Image from "next/image";
import { ImBin } from "react-icons/im";
import product1 from "@/public/images/image 15.png";
import product2 from "@/public/images/image 19.png";
import product3 from "@/public/images/image 20.png";

const Dashboard = () => {
  const Product = [
    {
      imgHeight: product1.height,
      imgURL: product1,
      backgound: "E8D2B4",
      productName: "Peanut Butter",
      productDescription:
        "For those who know. Creamy ice cream meets peanut butter perfection, topped with chocolate and a whole lot of crunch.",
    },
    {
      imgHeight: product2.height,
      imgURL: product2,
      backgound: "E37885",
      productName: "Sunny",
      productDescription:
        "Fun, playful, unforgettable. Three colors, three flavors, one sweet treat that never lets you down.",
    },
    {
      imgHeight: product3.height,
      imgURL: product3,
      backgound: "BA3434",
      productName: "Tropico Strawberry",
      productDescription:
        "Strawberry, but cooler. A vibrant burst of flavor frozen into the perfect summer escape. Refreshment? Delivered.",
    }
  ];

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
        <div className="product-List">
          {Product.map((product, index) => (
            <div key={index} className="product-card-box" style={{background: `#${product.backgound}`}}>
              <div className="product-content-container">
                <div
                  className={`product-pic-box product-${
                    product.imgHeight >= 380 ? "440" : "L440"
                  }-pic-box`}
                >
                  <Image src={product.imgURL} alt={product.productName} />
                </div>
                <span className="product-content-box">
                  <h3>{product.productName}</h3>
                  <p>{product.productDescription}</p>
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
