import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown, FaCloudUploadAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import Slider from "react-slick";

const NewsForm = () => {
  const [newsTitleEng, setTilteEng] = useState("");
  const [newsTitleMK, setTilteMK] = useState("");
  const [newsTitleRS, setTilteRS] = useState("");
  const [newsCategoryEng, setNewsCategoryEng] = useState("");
  const [newsCategoryMK, setNewsCategoryMK] = useState("");
  const [newsCategoryRS, setNewsCategoryRS] = useState("");
  const [newsDescriptionEng, setNewsDescriptionEng] = useState("");
  const [newsDescriptionMK, setNewsDescriptionMK] = useState("");
  const [newsDescriptionRS, setNewsDescriptionRS] = useState("");
  const [newsDescription2Eng, setNewsDescription2Eng] = useState("");
  const [newsDescription2MK, setNewsDescription2MK] = useState("");
  const [newsDescription2RS, setNewsDescription2RS] = useState("");
  const [newsDescription3Eng, setNewsDescription3Eng] = useState("");
  const [newsDescription3MK, setNewsDescription3MK] = useState("");
  const [newsDescription3RS, setNewsDescription3RS] = useState("");
  const [newsDescription4Eng, setNewsDescription4Eng] = useState("");
  const [newsDescription4MK, setNewsDescription4MK] = useState("");
  const [newsDescription4RS, setNewsDescription4RS] = useState("");
  const [newsDescription5Eng, setNewsDescription5Eng] = useState("");
  const [newsDescription5MK, setNewsDescription5MK] = useState("");
  const [newsDescription5RS, setNewsDescription5RS] = useState("");
  const [newsDescription6Eng, setNewsDescription6Eng] = useState("");
  const [newsDescription6MK, setNewsDescription6MK] = useState("");
  const [newsDescription6RS, setNewsDescription6RS] = useState("");
  const [imageSrc, setImageSrc] = useState<string>("");
  const [isDescriptio2, setIsDescription2] = useState(false);
  const [isDescriptio3, setIsDescription3] = useState(false);
  const [isDescriptio4, setIsDescription4] = useState(false);
  const [isDescriptio5, setIsDescription5] = useState(false);
  const [isDescriptio6, setIsDescription6] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target?.result) return;
      const img = new window.Image();
      img.src = e.target.result as string;
      img.onload = () => {
        setImageSrc(img.src);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      newsTitleEng,
      newsTitleMK,
      newsTitleRS,
      newsCategoryEng,
      newsCategoryMK,
      newsCategoryRS,
      newsDescriptionEng,
      newsDescriptionMK,
      newsDescriptionRS,
      newsDescription2Eng,
      newsDescription2MK,
      newsDescription2RS,
      newsDescription3Eng,
      newsDescription3MK,
      newsDescription3RS,
      newsDescription4Eng,
      newsDescription4MK,
      newsDescription4RS,
      newsDescription5Eng,
      newsDescription5MK,
      newsDescription5RS,
      newsDescription6Eng,
      newsDescription6MK,
      newsDescription6RS,
      imageSrc,
    };

    try {
      const response = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setTimeout(() => {
          setSuccessMessage("News uploaded successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        setTilteEng("");
        setTilteMK("");
        setTilteRS("");
        setNewsCategoryEng("");
        setNewsCategoryMK("");
        setNewsCategoryRS("");
        setNewsDescriptionEng("");
        setNewsDescriptionMK("");
        setNewsDescriptionRS("");
        setNewsDescription2Eng("");
        setNewsDescription2MK("");
        setNewsDescription2RS("");
        setNewsDescription3Eng("");
        setNewsDescription3MK("");
        setNewsDescription3RS("");
        setNewsDescription4Eng("");
        setNewsDescription4MK("");
        setNewsDescription4RS("");
        setNewsDescription5Eng("");
        setNewsDescription5MK("");
        setNewsDescription5RS("");
        setNewsDescription6Eng("");
        setNewsDescription6MK("");
        setNewsDescription6RS("");
        setImageSrc("");
        setSuccessMessage("");
        setIsError("");
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
      } else {
        console.error(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error uploading news:", error);
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
    <div className="News-form-container">
      {successMessage && (
        <span className="success-message">
          <SiTicktick />
          <p>{successMessage}</p>
        </span>
      )}

      {isError && <p className="text-red-500 font-bold">{isError}</p>}
      <form className="news-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newsTitleEng}
          onChange={(e) => setTilteEng(e.target.value)}
          placeholder="News Title English"
        />
        <input
          type="text"
          value={newsTitleMK}
          onChange={(e) => setTilteMK(e.target.value)}
          placeholder="News Title Macedonian"
        />
        <input
          type="text"
          value={newsTitleRS}
          onChange={(e) => setTilteRS(e.target.value)}
          placeholder="News Title Serbian"
        />
        <input
          type="text"
          value={newsCategoryEng}
          onChange={(e) => setNewsCategoryEng(e.target.value)}
          placeholder="News Category English"
        />
        <input
          type="text"
          value={newsCategoryMK}
          onChange={(e) => setNewsCategoryMK(e.target.value)}
          placeholder="News Category Macedonian"
        />
        <input
          type="text"
          value={newsCategoryRS}
          onChange={(e) => setNewsCategoryRS(e.target.value)}
          placeholder="News Category Macedonian"
        />

        <span className="description-box-header">
          <h3>Description:</h3>
        </span>
        <span className="description-box">
          <textarea
            cols={20}
            rows={5}
            placeholder="News Description English"
            value={newsDescriptionEng}
            onChange={(e) => setNewsDescriptionEng(e.target.value)}
          ></textarea>
          <textarea
            cols={20}
            rows={5}
            placeholder="News Description Macedonian"
            value={newsDescriptionMK}
            onChange={(e) => setNewsDescriptionMK(e.target.value)}
          ></textarea>
          <textarea
            cols={20}
            rows={5}
            placeholder="News Description Serbian"
            value={newsDescriptionRS}
            onChange={(e) => setNewsDescriptionRS(e.target.value)}
          ></textarea>
        </span>

        <span className="description-box-header">
          <h3>Description 2 {"(optional)"}:</h3>
          <FaAngleDown
            onClick={() => {
              setIsDescription2((current) => !current);
              setIsDescription3(false);
              setIsDescription4(false);
              setIsDescription5(false);
              setIsDescription6(false);
            }}
          />
        </span>
        {isDescriptio2 && (
          <span className="description-box">
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description English"
              value={newsDescription2Eng}
              onChange={(e) => setNewsDescription2Eng(e.target.value)}
            ></textarea>
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description Macedonian"
              value={newsDescription2MK}
              onChange={(e) => setNewsDescription2MK(e.target.value)}
            ></textarea>
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description Serbian"
              value={newsDescription2RS}
              onChange={(e) => setNewsDescription2RS(e.target.value)}
            ></textarea>
          </span>
        )}

        <span className="description-box-header">
          <h3>Description 3 {"(optional)"}:</h3>
          <FaAngleDown
            onClick={() => {
              setIsDescription2(false);
              setIsDescription3((current) => !current);
              setIsDescription4(false);
              setIsDescription5(false);
              setIsDescription6(false);
            }}
          />
        </span>
        {isDescriptio3 && (
          <span className="description-box">
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description English"
              value={newsDescription3Eng}
              onChange={(e) => setNewsDescription3Eng(e.target.value)}
            ></textarea>
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description Macedonian"
              value={newsDescription3MK}
              onChange={(e) => setNewsDescription3MK(e.target.value)}
            ></textarea>
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description Serbian"
              value={newsDescription3RS}
              onChange={(e) => setNewsDescription3RS(e.target.value)}
            ></textarea>
          </span>
        )}

        <span className="description-box-header">
          <h3>Description 4 {"(optional)"}:</h3>
          <FaAngleDown
            onClick={() => {
              setIsDescription2(false);
              setIsDescription3(false);
              setIsDescription5(false);
              setIsDescription6(false);
              setIsDescription4((current) => !current);
            }}
          />
        </span>
        {isDescriptio4 && (
          <span className="description-box">
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description English"
              value={newsDescription4Eng}
              onChange={(e) => setNewsDescription4Eng(e.target.value)}
            ></textarea>
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description Macedonian"
              value={newsDescription4MK}
              onChange={(e) => setNewsDescription4MK(e.target.value)}
            ></textarea>
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description Serbian"
              value={newsDescription4RS}
              onChange={(e) => setNewsDescription4RS(e.target.value)}
            ></textarea>
          </span>
        )}

        <span className="description-box-header">
          <h3>Description 5 {"(optional)"}:</h3>
          <FaAngleDown
            onClick={() => {
              setIsDescription2(false);
              setIsDescription3(false);
              setIsDescription4(false);
              setIsDescription5((current) => !current);
              setIsDescription6(false);
            }}
          />
        </span>
        {isDescriptio5 && (
          <span className="description-box">
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description English"
              value={newsDescription5Eng}
              onChange={(e) => setNewsDescription5Eng(e.target.value)}
            ></textarea>
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description Macedonian"
              value={newsDescription5MK}
              onChange={(e) => setNewsDescription5MK(e.target.value)}
            ></textarea>
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description Serbian"
              value={newsDescription5RS}
              onChange={(e) => setNewsDescription5RS(e.target.value)}
            ></textarea>
          </span>
        )}

        <span className="description-box-header">
          <h3>Description 6 {"(optional)"}:</h3>
          <FaAngleDown
            onClick={() => {
              setIsDescription2(false);
              setIsDescription3(false);
              setIsDescription4(false);
              setIsDescription5(false);
              setIsDescription6((current) => !current);
            }}
          />
        </span>
        {isDescriptio6 && (
          <span className="description-box">
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description English"
              value={newsDescription6Eng}
              onChange={(e) => setNewsDescription6Eng(e.target.value)}
            ></textarea>
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description Macedonian"
              value={newsDescription6MK}
              onChange={(e) => setNewsDescription6MK(e.target.value)}
            ></textarea>
            <textarea
              cols={20}
              rows={5}
              placeholder="News Description Serbian"
              value={newsDescription6RS}
              onChange={(e) => setNewsDescription6RS(e.target.value)}
            ></textarea>
          </span>
        )}

        <span className="image-upload-news-form-box">
          <label htmlFor="select-image">
            <FaCloudUploadAlt />
            <p>Upload Image</p>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            id="select-image"
          />
        </span>
        <span>
          <button type="submit">Upload News</button>
        </span>
      </form>

      <div className="news-form-preview-box">
        <h3 className="news-preview-header">Preview</h3>
        <div className="news-preview-card-container">
          <div className="news-preview-card">
            <div className="news-card-image-box">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt="card-image"
                  className="news-image"
                  width={800}
                  height={900}
                />
              )}
            </div>
            <div className="news-card-content">
              <h4>{newsCategoryEng}</h4>
              <h3>{newsTitleEng}</h3>
              <div className="paragraph-slider">
                {newsDescriptionEng && (
                  <Slider {...settings}>
                    {newsDescriptionEng && (
                      <p>{newsDescriptionEng.slice(0, 460)}</p>
                    )}
                    {newsDescription2Eng && (
                      <p>{newsDescription2Eng.slice(0, 460)}</p>
                    )}
                    {newsDescription3Eng && (
                      <p>{newsDescription3Eng.slice(0, 460)}</p>
                    )}
                  </Slider>
                )}
              </div>
            </div>
          </div>

          <div className="news-preview-card">
            <div className="news-card-image-box">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt="card-image"
                  className="news-image"
                  width={800}
                  height={900}
                />
              )}
            </div>
            <div className="news-card-content">
              <h4>{newsCategoryMK}</h4>
              <h3>{newsTitleMK}</h3>
              <div className="paragraph-slider">
                {newsDescriptionMK && (
                  <Slider {...settings}>
                    {newsDescriptionMK && (
                      <p>{newsDescriptionMK.slice(0, 460)}</p>
                    )}
                    {newsDescription2MK && (
                      <p>{newsDescription2MK.slice(0, 460)}</p>
                    )}
                    {newsDescription3MK && (
                      <p>{newsDescription3MK.slice(0, 460)}</p>
                    )}
                  </Slider>
                )}
              </div>
            </div>
          </div>

          <div className="news-preview-card">
            <div className="news-card-image-box">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt="card-image"
                  className="news-image"
                  width={800}
                  height={900}
                />
              )}
            </div>
            <div className="news-card-content">
              <h4>{newsCategoryRS}</h4>
              <h3>{newsTitleRS}</h3>
              <div className="paragraph-slider">
                {newsDescriptionEng && (
                  <Slider {...settings}>
                    {newsDescriptionRS && (
                      <p>{newsDescriptionRS.slice(0, 460)}</p>
                    )}
                    {newsDescription2RS && (
                      <p>{newsDescription2RS.slice(0, 460)}</p>
                    )}
                    {newsDescription3RS && (
                      <p>{newsDescription3RS.slice(0, 460)}</p>
                    )}
                  </Slider>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsForm;
