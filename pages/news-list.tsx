import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import axios from "axios";
import Image from "next/image";
import Slider from "react-slick";
import { ImBin } from "react-icons/im";
import { SiTicktick } from "react-icons/si";

interface News {
  _id: string;
  newsTitleEng: string;
  newsTitleMK: string;
  newsTitleRS: string;
  newsCategoryEng: string;
  newsCategoryMK: string;
  newsCategoryRS: string;
  newsDescriptionEng: string;
  newsDescriptionMK: string;
  newsDescriptionRS: string;
  newsDescription2Eng: string;
  newsDescription2MK: string;
  newsDescription2RS: string;
  newsDescription3Eng: string;
  newsDescription3MK: string;
  newsDescription3RS: string;
  imageSrc: string;
}

const NewsList = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isError, setIsError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    axios
      .get<News[]>("/api/news")
      .then((res) => {
        setNews(res?.data);
      })
      .catch((error: string) => {
        setIsError(`Error fetching product profits: ${error}`);
      });
  }, []);

  const handleDelete = async (newsId: string) => {
    try {
      const response = await axios.delete(`/api/news?newsId=${newsId}`);

      if (response.status === 200) {
        setTimeout(() => {
          setSuccessMessage("News Deleted successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
        setNews(news.filter((item) => item._id !== newsId));
      } else {
        alert("Failed to delete item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    waitForAnimate: false,
  };

  return (
    <Layout title="News List - Cermat Admin">
      <div className="news-list-container">
        <h3 className="news-list-heading">News List</h3>
        {isError && <p>{isError}</p>}
        {successMessage && (
          <span className="success-message">
            <SiTicktick />
            <p>{successMessage}</p>
          </span>
        )}
        <div className="news-list-card-container">
          {news.map((News, index) => (
            <div className="news-preview-card" key={index}>
              <div className="news-card-image-box relative">
                <Image
                  src={News.imageSrc}
                  alt="card-image"
                  className="news-image"
                  width={800}
                  height={900}
                />
                <ImBin
                  className="del-btn-news-list"
                  onClick={() => handleDelete(News._id)}
                />
              </div>
              <div className="news-card-content">
                <h4>{News.newsCategoryEng}</h4>
                <h3>{News.newsTitleEng}</h3>
                <div className="paragraph-slider">
                  {News.newsDescriptionEng && (
                    <Slider {...settings}>
                      {News.newsDescriptionEng && (
                        <p>{News.newsDescriptionEng.slice(0, 460)}</p>
                      )}
                      {News.newsDescription2Eng && (
                        <p>{News.newsDescription2Eng.slice(0, 460)}</p>
                      )}
                      {News.newsDescription3Eng && (
                        <p>{News.newsDescription3Eng.slice(0, 460)}</p>
                      )}
                    </Slider>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewsList;
