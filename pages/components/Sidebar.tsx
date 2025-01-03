import Image from "next/image";
import React from "react";
import person from "@/public/images/person1.png";
import Link from "next/link";
import { IoHome, IoSettings } from "react-icons/io5";
import { FaCube, FaFilter, FaIndustry, FaInfo, FaNewspaper } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineWork } from "react-icons/md";

const Sidebar = () => {
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
          <Link href={"/about"} className="tab-link">
            <FaInfo />
            <b>About</b>
          </Link>
          <Link href={"/metropoli"} className="tab-link">
            <FaCube />
            <b>Metropoli</b>
          </Link>
          <Link href={"/filters"} className="tab-link">
            <FaFilter />
            <b>Filters</b>
          </Link>
          <Link href={"/products"} className="tab-link">
            <AiFillProduct />
            <b>Products</b>
          </Link>
          <Link href={"/private-labels"} className="tab-link">
            <FaIndustry />
            <b>Private Labels</b>
          </Link>
          <Link href={"/news"} className="tab-link">
            <FaNewspaper />
            <b>News</b>
          </Link>
          <Link href={"/careers"} className="tab-link">
            <MdOutlineWork />
            <b>Careers</b>
          </Link>
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
