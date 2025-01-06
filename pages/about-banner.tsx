import React from "react";
import AboutBannerForm from "./components/AbouBannerForm";
import Layout from "./components/Layout";

const AboutBanner = () => {
  return (
    <Layout title="About Banner Uploader - Cermat Admin">
      <div className="about-banner-container">
        <h2 className="about-banner-heading">About Banner Uploader</h2>
        <AboutBannerForm />
      </div>
    </Layout>
  );
};

export default AboutBanner;
