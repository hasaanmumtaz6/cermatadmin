import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Image from "next/image";
import { SiTicktick } from "react-icons/si";

const AboutSection1Form = () => {
  const [titleEnglish, setTitleEnglish] = useState("");
  const [titleMacedonia, setTitleMacedonia] = useState("");
  const [titleSerbian, setTitleSerbian] = useState("");
  const [descriptionEnglish, setDescriptionEnglish] = useState("");
  const [descriptionMacedonia, setDescriptionMacedonia] = useState("");
  const [descriptionSerbian, setDescriptionSerbian] = useState("");
  const [imageSrc, setImageSrc] = useState("");
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
        console.log(file);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      titleEnglish,
      titleMacedonia,
      titleSerbian,
      descriptionEnglish,
      descriptionMacedonia,
      descriptionSerbian,
      imageSrc,
    };

    try {
      const response = await fetch("/api/aboutsection1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setTimeout(() => {
          setSuccessMessage("About Section 1 uploaded successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        setTitleEnglish("");
        setTitleMacedonia("");
        setTitleSerbian("");
        setDescriptionEnglish("");
        setDescriptionMacedonia("");
        setDescriptionSerbian("");
        setImageSrc("");
        setSuccessMessage("");
        setIsError("");
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
      } else {
        console.error(data.error || "Something went wrong");
      }
    } catch (error) {
      setIsError(`Error uploading About Section 1: ${error}`);
    }
  };

  return (
    <div className="about-section1-form-container">
      {successMessage && (
        <span className="success-message">
          <SiTicktick />
          <p>{successMessage}</p>
        </span>
      )}
      {isError && <p className="text-red-500 font-bold">{isError}</p>}

      <form className="about-section1-form-box" onSubmit={handleSubmit}>
        <span>
          <input
            type="text"
            value={titleEnglish}
            onChange={(e) => setTitleEnglish(e.target.value)}
            placeholder="Title English"
          />
          <input
            type="text"
            value={titleMacedonia}
            onChange={(e) => setTitleMacedonia(e.target.value)}
            placeholder="Title Macedinia"
          />
          <input
            type="text"
            value={titleSerbian}
            onChange={(e) => setTitleSerbian(e.target.value)}
            placeholder="Title Serbian"
          />
        </span>

        <span>
          <textarea
            rows={5}
            cols={20}
            placeholder="Description English"
            value={descriptionEnglish}
            onChange={(e) => setDescriptionEnglish(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={20}
            placeholder="Description Macedinia"
            value={descriptionMacedonia}
            onChange={(e) => setDescriptionMacedonia(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={20}
            placeholder="Description Serbian"
            value={descriptionSerbian}
            onChange={(e) => setDescriptionSerbian(e.target.value)}
          ></textarea>
        </span>

        <span>
          <label htmlFor="section1-about-pic-uploader">
            <FaCloudUploadAlt />
            <p>Upload Image {"(max-size: 12mb)"}</p>
            <Image src={imageSrc} alt={`${imageSrc}`} width={64} height={48} />
          </label>
          <input
            type="file"
            id="section1-about-pic-uploader"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </span>

        <button type="submit">Upload Section{"-"}1</button>
      </form>
      <div className="about-section1-form-preview-container">
        <h2 className="about-section1-preview-heading">Preview</h2>
        <div className="about-section1-form-preview-box">
          {titleEnglish && (
            <div className="content-box-about-section1">
              <div className="title-box-about-section1">
                <h2>{titleEnglish}</h2>
                <span className="design-line-box">
                  <b className="designline1"></b>
                  <b className="designline2"></b>
                </span>
              </div>
              <p className="about-section1-description-box">
                {descriptionEnglish}
              </p>
            </div>
          )}
          {imageSrc && (
            <div className="image-box-about-section1">
              <Image
                src={imageSrc}
                alt="section-1-pic"
                width={100}
                height={100}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection1Form;
