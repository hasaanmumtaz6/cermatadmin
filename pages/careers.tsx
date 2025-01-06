import React, { useState } from "react";
import Layout from "./components/Layout";
import { FaCloudUploadAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import Image from "next/image";

const Careers = () => {
  const [careersTitleEnglish, setCareersTitleEnglish] = useState("");
  const [careersTitleMacedonian, setCareersTitleMacedonian] = useState("");
  const [careersTitleSerbian, setCareersTitleSerbian] = useState("");
  const [careersCategoryEnglish, setCareersCategoryEnglish] = useState("");
  const [careersCategoryMacedonian, setCareersCategoryMacedonian] =
    useState("");
  const [careersCategorySerbian, setCareersCategorySerbian] = useState("");
  const [careersDescriptionEnglish, setCareersDescriptionEnglish] =
    useState("");
  const [careersDescriptionMacedonian, setCareersDescriptionMacedonian] =
    useState("");
  const [careersDescriptionSerbian, setCareersDescriptionSerbian] =
    useState("");
  const [careersImage, setCareersImage] = useState("");
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
        setCareersImage(img.src);
        console.log(file);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      careersTitleEnglish,
      careersTitleMacedonian,
      careersTitleSerbian,
      careersCategoryEnglish,
      careersCategoryMacedonian,
      careersCategorySerbian,
      careersDescriptionEnglish,
      careersDescriptionMacedonian,
      careersDescriptionSerbian,
      careersImage,
    };

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setTimeout(() => {
          setSuccessMessage("Careers uploaded successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        setCareersTitleEnglish("");
        setCareersTitleMacedonian("");
        setCareersTitleSerbian("");
        setCareersCategoryEnglish("");
        setCareersCategoryMacedonian("");
        setCareersCategorySerbian("");
        setCareersDescriptionEnglish("");
        setCareersDescriptionMacedonian("");
        setCareersDescriptionSerbian("");
        setCareersImage("");
        setSuccessMessage("");
        setIsError("");
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
      } else {
        console.error(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error uploading Careers:", error);
    }
  };

  return (
    <Layout title="Careers - Cermat Admin">
      <div className="careers-conatiner">
        <h2 className="Careers-uploader-heading">Careers Uploader</h2>

        {successMessage && (
          <span className="success-message">
            <SiTicktick />
            <p>{successMessage}</p>
          </span>
        )}
        {isError && <p className="text-red-500 font-bold">{isError}</p>}

        <div className="careers-box">
          <form
            className="careers-box-inner-box careers-uploading-form"
            onSubmit={handleSubmit}
          >
            <span className="careers-title-box">
              <input
                type="text"
                value={careersTitleEnglish}
                onChange={(e) => {
                  setCareersTitleEnglish(e.target.value);
                }}
                placeholder="Career Title English"
              />
              <input
                type="text"
                value={careersTitleMacedonian}
                onChange={(e) => {
                  setCareersTitleMacedonian(e.target.value);
                }}
                placeholder="Career Title Macedonian"
              />
              <input
                type="text"
                value={careersTitleSerbian}
                onChange={(e) => {
                  setCareersTitleSerbian(e.target.value);
                }}
                placeholder="Career Title Serbian"
              />
            </span>

            <span className="careers-category-box">
              <input
                type="text"
                value={careersCategoryEnglish}
                onChange={(e) => {
                  setCareersCategoryEnglish(e.target.value);
                }}
                placeholder="Career Category English"
              />
              <input
                type="text"
                value={careersCategoryMacedonian}
                onChange={(e) => {
                  setCareersCategoryMacedonian(e.target.value);
                }}
                placeholder="Career Category Macedonian"
              />
              <input
                type="text"
                value={careersCategorySerbian}
                onChange={(e) => {
                  setCareersCategorySerbian(e.target.value);
                }}
                placeholder="Career Category Serbian"
              />
            </span>

            <span className="careers-pic-selector-box">
              <label htmlFor="Careers-pic-selector">
                <FaCloudUploadAlt />
                <p>Upload Image {"(max-size: 12mb)"}</p>
                <Image
                  src={careersImage}
                  alt={`${careersImage}`}
                  width={64}
                  height={48}
                />
              </label>
              <input
                id="Careers-pic-selector"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </span>

            <span className="careers-description-box">
              <textarea
                rows={5}
                cols={20}
                placeholder="Description English"
                value={careersDescriptionEnglish}
                onChange={(e) => {
                  setCareersDescriptionEnglish(e.target.value);
                }}
              ></textarea>
              <textarea
                rows={5}
                cols={20}
                placeholder="Description Macedonian"
                value={careersDescriptionMacedonian}
                onChange={(e) => {
                  setCareersDescriptionMacedonian(e.target.value);
                }}
              ></textarea>
              <textarea
                rows={5}
                cols={20}
                placeholder="Description Serbian"
                value={careersDescriptionSerbian}
                onChange={(e) => {
                  setCareersDescriptionSerbian(e.target.value);
                }}
              ></textarea>
            </span>

            <button className="careers-upload-btn">Upload Careers</button>
          </form>
          <div className="careers-box-inner-box careers-preview-container">
            <h2 className="careers-preview-heading">Careers Preview</h2>
            <div className="careers-preview-box">
              <div className="careers-preview-card">
                {careersImage && (
                  <Image
                    src={careersImage}
                    alt={`${careersImage}`}
                    width={400}
                    height={400}
                    className="careers-image-preview-box"
                  />
                )}
                <div className="careers-content-preview-box">
                  <h2>{careersTitleEnglish}</h2>
                  <p>{careersDescriptionEnglish}</p>
                  <h4>{careersCategoryEnglish}</h4>
                </div>
              </div>

              <div className="careers-preview-card">
                {careersImage && (
                  <Image
                    src={careersImage}
                    alt={`${careersImage}`}
                    width={400}
                    height={400}
                    className="careers-image-preview-box"
                  />
                )}

                <div className="careers-content-preview-box">
                  <h2>{careersTitleMacedonian}</h2>
                  <p>{careersDescriptionMacedonian}</p>
                  <h4>{careersCategoryMacedonian}</h4>
                </div>
              </div>

              <div className="careers-preview-card">
                {careersImage && (
                  <Image
                    src={careersImage}
                    alt={`${careersImage}`}
                    width={400}
                    height={400}
                    className="careers-image-preview-box"
                  />
                )}

                <div className="careers-content-preview-box">
                  <h2>{careersTitleSerbian}</h2>
                  <p>{careersDescriptionSerbian}</p>
                  <h4>{careersCategorySerbian}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
