import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";

const AboutSection2Form = () => {
  const [headingEnglish, setHeadingEnglish] = useState("");
  const [headingMacedonia, setHeadingMacedonia] = useState("");
  const [headingSerbian, setHeadingSerbian] = useState("");
  const [descriptionEnglish, setDescriptionEnglish] = useState("");
  const [descriptionMacedonia, setDescriptionMacedonia] = useState("");
  const [descriptionSerbian, setDescriptionSerbian] = useState("");
  const [titleEnglish, setTitleEnglish] = useState("");
  const [titleMacedonia, setTitleMacedonia] = useState("");
  const [titleSerbian, setTitleSerbian] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      headingEnglish,
      headingMacedonia,
      headingSerbian,
      descriptionEnglish,
      descriptionMacedonia,
      descriptionSerbian,
      titleEnglish,
      titleMacedonia,
      titleSerbian,
    };

    try {
      const response = await fetch("/api/aboutsection2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setTimeout(() => {
          setSuccessMessage("About Section 2 uploaded successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        setTitleEnglish("");
        setTitleMacedonia("");
        setTitleSerbian("");
        setDescriptionEnglish("");
        setDescriptionMacedonia("");
        setDescriptionSerbian("");
        setHeadingEnglish("");
        setHeadingMacedonia("");
        setHeadingSerbian("");
        console.error(data.error || "Something went wrong");
        setSuccessMessage("");
        setIsError("");
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
      } else {
        console.error(data.error || "Something went wrong");
      }
    } catch (error) {
      setIsError(`Error uploading About Section 2: ${error}`);
    }
  };

  return (
    <div className="about-section2-form-container">
      {successMessage && (
        <span className="success-message">
          <SiTicktick />
          <p>{successMessage}</p>
        </span>
      )}
      {isError && <p className="text-red-500 font-bold">{isError}</p>}

      <form className="about-section2-form" onSubmit={handleSubmit}>
        <span>
          <input
            type="text"
            value={headingEnglish}
            onChange={(e) => setHeadingEnglish(e.target.value)}
            placeholder="Heading English"
          />
          <input
            type="text"
            value={headingMacedonia}
            onChange={(e) => setHeadingMacedonia(e.target.value)}
            placeholder="Heading Macedonia"
          />
          <input
            type="text"
            value={headingSerbian}
            onChange={(e) => setHeadingSerbian(e.target.value)}
            placeholder="Heading Serbian"
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
            placeholder="Description Macedonia"
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
          <input
            type="text"
            value={titleEnglish}
            onChange={(e) => setTitleEnglish(e.target.value)}
            placeholder="title English"
          />
          <input
            type="text"
            value={titleMacedonia}
            onChange={(e) => setTitleMacedonia(e.target.value)}
            placeholder="title Macedonia"
          />
          <input
            type="text"
            value={titleSerbian}
            onChange={(e) => setTitleSerbian(e.target.value)}
            placeholder="title Serbian"
          />
        </span>
        <button type="submit">Upload Section 2</button>
      </form>
      <div className="about-section2-form-preview-container">
        <h2 className="about-section2-preview-heading">Preview</h2>
        <div className="about-section2-form-preview-box">
          <div className="about-section2-form-preview-card">
            <h2 className="about-section2-form-preview-card-heading">
              {headingEnglish}
            </h2>
            <div className="description-title-box-about-section-2">
              <p>{descriptionEnglish}</p>
              {titleEnglish && (
                <div className="title-box-about-section2">
                  <h2>{titleEnglish}</h2>
                  <span className="design-line-box">
                    <b className="designline1"></b>
                    <b className="designline2"></b>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2Form;
