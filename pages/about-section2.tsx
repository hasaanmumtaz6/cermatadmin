import React from "react";
import Layout from "./components/Layout";
import AboutSection2Form from "./components/AboutSection2Form";

const AboutSection2 = () => {
  return (
    <Layout title="About Section 2 - Cermat Admin">
      <div className="about-section2-container">
        <h2 className="about-section2-heading">About Section 2</h2>
        <div className="about-section2-box">
          <AboutSection2Form />
        </div>
      </div>
    </Layout>
  );
};

export default AboutSection2;
