import React from "react";
import Layout from "./components/Layout";
import AboutSection3Form from "./components/AboutSection3Form";

const AboutSection3 = () => {
  return (
    <Layout title="About Section 3 - Cermat Admin">
      <div className="about-section3-container">
        <h2 className="about-section3-heading">About Section 3</h2>
        <div className="about-section3-box">
          <AboutSection3Form />
        </div>
      </div>
    </Layout>
  );
};

export default AboutSection3;
