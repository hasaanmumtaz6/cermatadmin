import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import Image from "next/image";

const AboutSection3Form = () => {
  const [card1TitleEnglish, setCard1TitleEnglish] = useState("");
  const [card1TitleMacedonia, setCard1TitleMacedonia] = useState("");
  const [card1TitleSerbian, setCard1TitleSerbian] = useState("");
  const [card2TitleEnglish, setCard2TitleEnglish] = useState("");
  const [card2TitleMacedonia, setCard2TitleMacedonia] = useState("");
  const [card2TitleSerbian, setCard2TitleSerbian] = useState("");
  const [card1Description1English, setCard1Description1English] = useState("");
  const [card1Description1Macedonia, setCard1Description1Macedonia] =
    useState("");
  const [card1Description1Serbian, setCard1Description1Serbian] = useState("");
  const [card1Description2English, setCard1Description2English] = useState("");
  const [card1Description2Macedonia, setCard1Description2Macedonia] =
    useState("");
  const [card1Description2Serbian, setCard1Description2Serbian] = useState("");
  const [card2Description1English, setCard2Description1English] = useState("");
  const [card2Description1Macedonia, setCard2Description1Macedonia] =
    useState("");
  const [card2Description1Serbian, setCard2Description1Serbian] = useState("");
  const [card2Description2English, setCard2Description2English] = useState("");
  const [card2Description2Macedonia, setCard2Description2Macedonia] =
    useState("");
  const [card2Description2Serbian, setCard2Description2Serbian] = useState("");
  const [imageSrc1, setImageSrc1] = useState("");
  const [imageSrc2, setImageSrc2] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState("");

  const handleImage1Upload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target?.result) return;
      const img = new window.Image();
      img.src = e.target.result as string;
      img.onload = () => {
        setImageSrc1(img.src);
        console.log(file);
      };
    };
    reader.readAsDataURL(file);
  };
  const handleImage2Upload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target?.result) return;
      const img = new window.Image();
      img.src = e.target.result as string;
      img.onload = () => {
        setImageSrc2(img.src);
        console.log(file);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      card1TitleEnglish,
      card1TitleMacedonia,
      card1TitleSerbian,
      card2TitleEnglish,
      card2TitleMacedonia,
      card2TitleSerbian,
      card1Description1English,
      card1Description1Macedonia,
      card1Description1Serbian,
      card1Description2English,
      card1Description2Macedonia,
      card1Description2Serbian,
      card2Description1English,
      card2Description1Macedonia,
      card2Description1Serbian,
      card2Description2English,
      card2Description2Macedonia,
      card2Description2Serbian,
      imageSrc1,
      imageSrc2,
    };

    try {
      const response = await fetch("/api/aboutsection3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setTimeout(() => {
          setSuccessMessage("About Section 3 uploaded successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        setCard1TitleEnglish("");
        setCard1TitleMacedonia("");
        setCard1TitleSerbian("");
        setCard2TitleEnglish("");
        setCard2TitleMacedonia("");
        setCard2TitleSerbian("");
        setCard1Description1English("");
        setCard1Description1Macedonia("");
        setCard1Description1Serbian("");
        setCard1Description2English("");
        setCard1Description2Macedonia("");
        setCard1Description2Serbian("");
        setCard2Description1English("");
        setCard2Description1Macedonia("");
        setCard2Description1Serbian("");
        setCard2Description2English("");
        setCard2Description2Macedonia("");
        setCard2Description2Serbian("");
        setImageSrc1("");
        setImageSrc2("");
        console.error(data.error || "Something went wrong");
        setSuccessMessage("");
        setIsError("");
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
      } else {
        console.error(data.error || "Something went wrong");
      }
    } catch (error) {
      setIsError(`Error uploading About Section 3: ${error}`);
    }
  };

  return (
    <div className="about-section3-form-container">
      {successMessage && (
        <span className="success-message">
          <SiTicktick />
          <p>{successMessage}</p>
        </span>
      )}
      {isError && <p className="text-red-500 font-bold">{isError}</p>}

      <form className="about-section3-form" onSubmit={handleSubmit}>
        <span>
          <input
            type="text"
            value={card1TitleEnglish}
            onChange={(e) => setCard1TitleEnglish(e.target.value)}
            placeholder="Card 1 Title English"
          />
          <input
            type="text"
            value={card1TitleMacedonia}
            onChange={(e) => setCard1TitleMacedonia(e.target.value)}
            placeholder="Card 1 Title Macedonia"
          />
          <input
            type="text"
            value={card1TitleSerbian}
            onChange={(e) => setCard1TitleSerbian(e.target.value)}
            placeholder="Card 1 Title Serbian"
          />
        </span>
        <span>
          <textarea
            rows={5}
            cols={20}
            placeholder="Card 1 Description 1 English"
            value={card1Description1English}
            onChange={(e) => setCard1Description1English(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={20}
            placeholder="Card 1 Description 1 Macedonia"
            value={card1Description1Macedonia}
            onChange={(e) => setCard1Description1Macedonia(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={20}
            placeholder="Card 1 Description 1 Serbian"
            value={card1Description1Serbian}
            onChange={(e) => setCard1Description1Serbian(e.target.value)}
          ></textarea>
        </span>
        <span>
          <textarea
            rows={5}
            cols={20}
            placeholder="Card 1 Description 2 English"
            value={card1Description2English}
            onChange={(e) => setCard1Description2English(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={20}
            placeholder="Card 1 Description 2 Macedonia"
            value={card1Description2Macedonia}
            onChange={(e) => setCard1Description2Macedonia(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={20}
            placeholder="Card 1 Description 2 Serbian"
            value={card1Description2Serbian}
            onChange={(e) => setCard1Description2Serbian(e.target.value)}
          ></textarea>
        </span>
        <span>
          <label htmlFor="section3-about-pic1-uploader">
            <FaCloudUploadAlt />
            <p>Upload Card 1 Image {"(max-size: 12mb)"}</p>
            <Image
              src={imageSrc1}
              alt={`${imageSrc1}`}
              width={64}
              height={48}
            />
          </label>
          <input
            type="file"
            id="section3-about-pic1-uploader"
            accept="image/*"
            onChange={handleImage1Upload}
          />
        </span>

        {/* Card 2 */}
        <span>
          <input
            type="text"
            value={card2TitleEnglish}
            onChange={(e) => setCard2TitleEnglish(e.target.value)}
            placeholder="Card 2 Title English"
          />
          <input
            type="text"
            value={card2TitleMacedonia}
            onChange={(e) => setCard2TitleMacedonia(e.target.value)}
            placeholder="Card 2 Title Macedonia"
          />
          <input
            type="text"
            value={card2TitleSerbian}
            onChange={(e) => setCard2TitleSerbian(e.target.value)}
            placeholder="Card 2 Title Serbian"
          />
        </span>
        <span>
          <textarea
            rows={5}
            cols={20}
            placeholder="Card 2 Description 1 English"
            value={card2Description1English}
            onChange={(e) => setCard2Description1English(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={20}
            placeholder="Card 2 Description 1 Macedonia"
            value={card2Description1Macedonia}
            onChange={(e) => setCard2Description1Macedonia(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={20}
            placeholder="Card 2 Description 1 Serbian"
            value={card2Description1Serbian}
            onChange={(e) => setCard2Description1Serbian(e.target.value)}
          ></textarea>
        </span>
        <span>
          <textarea
            rows={5}
            cols={20}
            placeholder="Card 2 Description 2 English"
            value={card2Description2English}
            onChange={(e) => setCard2Description2English(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={20}
            placeholder="Card 2 Description 2 Macedonia"
            value={card2Description2Macedonia}
            onChange={(e) => setCard2Description2Macedonia(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={20}
            placeholder="Card 2 Description 2 Serbian"
            value={card2Description2Serbian}
            onChange={(e) => setCard2Description2Serbian(e.target.value)}
          ></textarea>
        </span>
        <span>
          <label htmlFor="section3-about-pic2-uploader">
            <FaCloudUploadAlt />
            <p>Upload Card 2 Image {"(max-size: 12mb)"}</p>
            <Image
              src={imageSrc2}
              alt={`${imageSrc2}`}
              width={64}
              height={48}
            />
          </label>
          <input
            type="file"
            id="section3-about-pic2-uploader"
            accept="image/*"
            onChange={handleImage2Upload}
          />
        </span>
        <button type="submit">Upload Section 3</button>
      </form>
      <div className="about-section3-form-preview-container">
        <h2 className="about-section3-form-preview-box-heading">Preview</h2>
        {card1TitleEnglish && (
          <div className="about-section3-form-preview-box">
            <div className="about-section3-card about-section3-card1">
              {card1TitleEnglish && (
                <div className="about-section3-content">
                  {card1TitleEnglish && (
                    <div className="title-box-about-section2">
                      <h2>{card1TitleEnglish}</h2>
                      <span className="design-line-box">
                        <b className="designline1"></b>
                        <b className="designline2"></b>
                      </span>
                    </div>
                  )}
                  <i className="divider"></i>
                  <p>{card1Description1English}</p>
                  <p>{card1Description2English}</p>
                </div>
              )}

              {imageSrc1 && (
                <div className="about-section3-image">
                  <Image
                    src={imageSrc1}
                    alt={`${imageSrc1}`}
                    width={505}
                    height={800}
                  />
                </div>
              )}
            </div>

            <div className="about-section3-card about-section3-card2">
              {card2TitleEnglish && (
                <div className="about-section3-content">
                  {card2TitleEnglish && (
                    <div className="title-box-about-section2">
                      <h2>{card2TitleEnglish}</h2>
                      <span className="design-line-box">
                        <b className="designline1"></b>
                        <b className="designline2"></b>
                      </span>
                    </div>
                  )}
                  <i className="divider"></i>
                  <p>{card2Description1English}</p>
                  <p>{card2Description2English}</p>
                </div>
              )}
              {imageSrc2 && (
                <div className="about-section3-image">
                  <Image
                    src={imageSrc2}
                    alt={`${imageSrc2}`}
                    width={505}
                    height={800}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutSection3Form;
