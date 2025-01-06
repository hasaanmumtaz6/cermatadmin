import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Image from "next/image";
import { SiTicktick } from "react-icons/si";

const AboutBannerForm = () => {
  const [bannerTitleEnglish, setBannerTitleEnglish] = useState("");
  const [bannerTitleMacedonia, setBannerTitleMacedonia] = useState("");
  const [bannerTitleSerbian, setBannerTitleSerbian] = useState("");
  const [bannerDescription1English, setBannerDescription1English] =
    useState("");
  const [bannerDescription1Macedonia, setBannerDescription1Macedonia] =
    useState("");
  const [bannerDescription1Serbian, setBannerDescription1Serbian] =
    useState("");
  const [bannerDescription2English, setBannerDescription2English] =
    useState("");
  const [bannerDescription2Macedonia, setBannerDescription2Macedonia] =
    useState("");
  const [bannerDescription2Serbian, setBannerDescription2Serbian] =
    useState("");
  const [bannerImage, setBannerImage] = useState("");
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
        setBannerImage(img.src);
        console.log(file);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      bannerTitleEnglish,
      bannerTitleMacedonia,
      bannerTitleSerbian,
      bannerDescription1English,
      bannerDescription1Macedonia,
      bannerDescription1Serbian,
      bannerDescription2English,
      bannerDescription2Macedonia,
      bannerDescription2Serbian,
      bannerImage,
    };

    try {
      const response = await fetch("/api/aboutbanner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setTimeout(() => {
          setSuccessMessage("About Banner uploaded successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        setBannerTitleEnglish("");
        setBannerTitleMacedonia("");
        setBannerTitleSerbian("");
        setBannerDescription1English("");
        setBannerDescription1Macedonia("");
        setBannerDescription1Serbian("");
        setBannerDescription2English("");
        setBannerDescription2Macedonia("");
        setBannerDescription2Serbian("");
        setBannerImage("");
        setSuccessMessage("");
        setIsError("");
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
      } else {
        console.error(data.error || "Something went wrong");
      }
    } catch (error) {
      setIsError(`Error uploading About Banner: ${error}`);
    }
  };

  return (
    <div className="about-banner-form-container">
      {successMessage && (
        <span className="success-message">
          <SiTicktick />
          <p>{successMessage}</p>
        </span>
      )}
      {isError && <p className="text-red-500 font-bold">{isError}</p>}

      <form className="about-banner-form" onSubmit={handleSubmit}>
        <span>
          <input
            type="text"
            value={bannerTitleEnglish}
            onChange={(e) => setBannerTitleEnglish(e.target.value)}
            placeholder="Hero Banner Title English"
          />
          <input
            type="text"
            value={bannerTitleMacedonia}
            onChange={(e) => setBannerTitleMacedonia(e.target.value)}
            placeholder="Hero Banner Title Macedonia"
          />
          <input
            type="text"
            value={bannerTitleSerbian}
            onChange={(e) => setBannerTitleSerbian(e.target.value)}
            placeholder="Hero Banner Title Serbian"
          />
        </span>

        <span>
          <textarea
            rows={5}
            cols={20}
            placeholder="Hero Banner Description 1 English"
            value={bannerDescription1English}
            onChange={(e) => {
              setBannerDescription1English(e.target.value);
            }}
          />
          <textarea
            rows={5}
            cols={20}
            placeholder="Hero Banner Description 1 Macedonia"
            value={bannerDescription1Macedonia}
            onChange={(e) => {
              setBannerDescription1Macedonia(e.target.value);
            }}
          />
          <textarea
            rows={5}
            cols={20}
            placeholder="Hero Banner Description 1 Serbian"
            value={bannerDescription1Serbian}
            onChange={(e) => {
              setBannerDescription1Serbian(e.target.value);
            }}
          />
        </span>

        <span>
          <textarea
            rows={5}
            cols={20}
            placeholder="Hero Banner Description 2 English"
            value={bannerDescription2English}
            onChange={(e) => {
              setBannerDescription2English(e.target.value);
            }}
          />
          <textarea
            rows={5}
            cols={20}
            placeholder="Hero Banner Description 2 Macedonia"
            value={bannerDescription2Macedonia}
            onChange={(e) => {
              setBannerDescription2Macedonia(e.target.value);
            }}
          />
          <textarea
            rows={5}
            cols={20}
            placeholder="Hero Banner Description 2 Serbian"
            value={bannerDescription2Serbian}
            onChange={(e) => {
              setBannerDescription2Serbian(e.target.value);
            }}
          />
        </span>

        <span>
          <label htmlFor="herro-banner-pic-selector">
            <FaCloudUploadAlt />
            <p>Upload Image {"(max-size: 12mb)"}</p>
            <Image
              src={bannerImage}
              alt={`${bannerImage}`}
              width={64}
              height={48}
            />
          </label>
          <input
            id="herro-banner-pic-selector"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </span>

        <button>Upload Hero Banner</button>
      </form>

      <div className="about-banner-form-preview-container">
        <h2 className="about-banner-form-preview-heading">Preview</h2>
        <div className="about-banner-form-preview-box">
          <div className="hero-banner-about-card-preview-box">
            {bannerTitleEnglish && <div className="image-title-box-about-banner">
              <Image
                src={bannerImage}
                alt={bannerImage}
                width={100}
                height={100}
              />
              <h2 className="about-banner-title">{bannerTitleEnglish}</h2>
            </div>}
            <div className="description-container-about-banner">
              {bannerDescription1English && (
                <div className="description-box-about-banner">
                  <div>
                    <b className="linedesign"></b>
                    <p>{bannerDescription1English}</p>
                  </div>
                  <div>
                    <b className="linedesign"></b>
                    <p>{bannerDescription2English}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBannerForm;
