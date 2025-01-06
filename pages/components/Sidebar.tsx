import Image from "next/image";
import React, { useState } from "react";
import person from "@/public/images/person1.png";
import Link from "next/link";
import { IoHome, IoSettings } from "react-icons/io5";
import {
  FaCube,
  FaFilter,
  FaIndustry,
  FaInfo,
  FaNewspaper,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";

const Sidebar = () => {
  const [aboutShow, setAboutShow] = useState(false);
  const [productShow, setProductShow] = useState(false);
  const [newsShow, setNewsShow] = useState(false);
  const [careerShow, setCareerShow] = useState(false);

  return (
    <nav className="sidebar">
      <div className="profile-tabs-box">
        <div className="profile-box">
          <div className="profile-pic-box">
            <Image src={person} alt="logo-pic" />
          </div>
          <div className="profile-user-about">
            <h2>Hasaan M.</h2>
            <p>FS Developer</p>
          </div>
        </div>
        <div className="tabs-sidebar-admin">
          <Link href={"/dashboard"} className="tab-link active">
            <IoHome />
            <b>Home</b>
          </Link>

          <div
            className="news-links"
            onClick={() => {
              setAboutShow((current) => !current);
            }}
          >
            <FaInfo />
            <h2>About</h2>
          </div>
          {aboutShow && (
            <span className="products-tabs">
              <Link href={"/about-banner"} className="tab-link">
                About Herro banner
              </Link>
              <Link href={"/about-section1"} className="tab-link">
                About Section 1
              </Link>
              <Link href={"/about-section2"} className="tab-link">
                About Section 2
              </Link>
              <Link href={"/about-section3"} className="tab-link">
                About Section 3
              </Link>
              <Link href={"/about-matrix"} className="tab-link">
                About Matrix
              </Link>
              <Link href={"/about"} className="tab-link">
                About Page View
              </Link>
            </span>
          )}
          <Link href={"/metropoli"} className="tab-link">
            <FaCube />
            <b>Metropoli</b>
          </Link>
          <Link href={"/filters"} className="tab-link">
            <FaFilter />
            <b>Filters</b>
          </Link>

          <div
            className="news-links"
            onClick={() => {
              setProductShow((current) => !current);
            }}
          >
            <AiFillProduct />
            <h2>Products</h2>
          </div>
          {productShow && (
            <span className="products-tabs">
              <Link href={"/products"} className="tab-link">
                Products Uploader
              </Link>
              <Link href={"/products-list"} className="tab-link">
                Products List
              </Link>
            </span>
          )}

          <Link href={"/private-labels"} className="tab-link">
            <FaIndustry />
            <b>Private Labels</b>
          </Link>

          <div
            className="news-links"
            onClick={() => {
              setNewsShow((current) => !current);
            }}
          >
            <FaNewspaper />
            <h2>News</h2>
          </div>
          {newsShow && (
            <span className="news-tabs">
              <Link href={"/news"} className="tab-link">
                <b>News Uploader</b>
              </Link>
              <Link href={"/news-list"} className="tab-link">
                <b>News List</b>
              </Link>
            </span>
          )}

          <div
            className="news-links"
            onClick={() => {
              setCareerShow((current) => !current);
            }}
          >
            <MdOutlineWork />
            <h2>Careers</h2>
          </div>
          {careerShow && (
            <span className="news-tabs">
              <Link href={"/careers"} className="tab-link">
                <b>Career Uploader</b>
              </Link>
              <Link href={"/careers-list"} className="tab-link">
                <b>Career List</b>
              </Link>
            </span>
          )}

          <Link href={"/contact"} className="tab-link">
            <FaMessage />
            <b>Contact</b>
          </Link>
        </div>
      </div>
      <Link href={"/setting"} className="go-to-setting">
        <IoSettings />
        <b>Setting</b>
      </Link>
    </nav>
  );
};

export default Sidebar;
