import React from "react";
import Layout from "./components/Layout";
import AboutMatrixForm from "./components/AboutMatrixForm";

const AboutMatrix = () => {
  return (
    <Layout title="About Matrix - Cermat Admin">
      <div className="about-matrix-container">
        <h2 className="about-matrix-container-heading">About Matrix</h2>
        <div className="about-matrix-box">
          <AboutMatrixForm />
        </div>
      </div>
    </Layout>
  );
};

export default AboutMatrix;
