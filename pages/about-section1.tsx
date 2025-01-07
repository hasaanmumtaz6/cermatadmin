import React from "react";
import AboutSection1Form from "./components/AboutSection1Form";
import Layout from "./components/Layout";

const AboutSection1 = () => {
  return (
    <Layout title="About Section 1 - Cermat Admin">
      <div className="about-section1-container">
        <h2 className="about-section1-heading">
          About {"("}Section 1{")"}
        </h2>
        <div className="about-section1-box">
          <AboutSection1Form />
        </div>
      </div>
    </Layout>
  );
};

export default AboutSection1;
