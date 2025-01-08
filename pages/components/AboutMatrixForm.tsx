import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";

const AboutMatrixForm = () => {
  const [headingEnglish, setHeadingEnglish] = useState("");
  const [headingMacedonia, setHeadingMacedonia] = useState("");
  const [headingSerbian, setHeadingSerbian] = useState("");
  const [matrixNumber1, setMatrixNumber1] = useState<number>();
  const [matrixNumber2, setMatrixNumber2] = useState<number>();
  const [matrixNumber3, setMatrixNumber3] = useState<number>();
  const [description1English, setDescription1English] = useState("");
  const [description1Macedonia, setDescription1Macedonia] = useState("");
  const [description1Serbian, setDescription1Serbian] = useState("");
  const [description2English, setDescription2English] = useState("");
  const [description2Macedonia, setDescription2Macedonia] = useState("");
  const [description2Serbian, setDescription2Serbian] = useState("");
  const [description3English, setDescription3English] = useState("");
  const [description3Macedonia, setDescription3Macedonia] = useState("");
  const [description3Serbian, setDescription3Serbian] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      headingEnglish,
      headingMacedonia,
      headingSerbian,
      matrixNumber1,
      matrixNumber2,
      matrixNumber3,
      description1English,
      description1Macedonia,
      description1Serbian,
      description2English,
      description2Macedonia,
      description2Serbian,
      description3English,
      description3Macedonia,
      description3Serbian,
    };

    try {
      const response = await fetch("/api/aboutmatrix", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setTimeout(() => {
          setSuccessMessage("About Matrix uploaded successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        setHeadingEnglish("");
        setHeadingMacedonia("");
        setHeadingSerbian("");
        setMatrixNumber1(0);
        setMatrixNumber2(0);
        setMatrixNumber3(0);
        setDescription1English("");
        setDescription1Macedonia("");
        setDescription1Serbian("");
        setDescription2English("");
        setDescription2Macedonia("");
        setDescription2Serbian("");
        setDescription3English("");
        setDescription3Macedonia("");
        setDescription3Serbian("");
        console.error(data.error || "Something went wrong");
        setSuccessMessage("");
        setIsError("");
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
      } else {
        console.error(data.error || "Something went wrong");
      }
    } catch (error) {
      setIsError(`Error uploading About Matrix: ${error}`);
    }
  };

  return (
    <div className="about-matrix-form-container">
      {successMessage && (
        <span className="success-message">
          <SiTicktick />
          <p>{successMessage}</p>
        </span>
      )}
      {isError && <p className="text-red-500 font-bold">{isError}</p>}

      <form className="about-matrix-form" onSubmit={handleSubmit}>
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

        <input
          type="number"
          className="matrix-number-input"
          placeholder="Matrix Number"
          value={matrixNumber1}
          onChange={(e) => setMatrixNumber1(Number(e.target.value))}
        />
        <span>
          <textarea
            rows={5}
            cols={5}
            placeholder="Description English 1st Matrix"
            value={description1English}
            onChange={(e) => setDescription1English(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={5}
            placeholder="Description Macedonia 1st Matrix"
            value={description1Macedonia}
            onChange={(e) => setDescription1Macedonia(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={5}
            placeholder="Description Serbian 1st Matrix"
            value={description1Serbian}
            onChange={(e) => setDescription1Serbian(e.target.value)}
          ></textarea>
        </span>

        <input
          type="number"
          className="matrix-number-input"
          placeholder="Matrix Number"
          value={matrixNumber2}
          onChange={(e) => setMatrixNumber2(Number(e.target.value))}
        />
        <span>
          <textarea
            rows={5}
            cols={5}
            placeholder="Description English 2nd Matrix"
            value={description2English}
            onChange={(e) => setDescription2English(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={5}
            placeholder="Description Macedonia 2nd Matrix"
            value={description2Macedonia}
            onChange={(e) => setDescription2Macedonia(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={5}
            placeholder="Description Serbian 2nd Matrix"
            value={description2Serbian}
            onChange={(e) => setDescription2Serbian(e.target.value)}
          ></textarea>
        </span>
        <input
          type="number"
          className="matrix-number-input"
          placeholder="Matrix Number"
          value={matrixNumber3}
          onChange={(e) => setMatrixNumber3(Number(e.target.value))}
        />
        <span>
          <textarea
            rows={5}
            cols={5}
            placeholder="Description English 3rd Matrix"
            value={description3English}
            onChange={(e) => setDescription3English(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={5}
            placeholder="Description Macedonia 3rd Matrix"
            value={description3Macedonia}
            onChange={(e) => setDescription3Macedonia(e.target.value)}
          ></textarea>
          <textarea
            rows={5}
            cols={5}
            placeholder="Description Serbian 3rd Matrix"
            value={description3Serbian}
            onChange={(e) => setDescription3Serbian(e.target.value)}
          ></textarea>
        </span>

        <button>Upload Matrix</button>
      </form>
      <div className="about-matrix-form-preview-container">
        <h2 className="about-matrix-form-preview-heading">Preview</h2>
        <div className="about-matrix-form-preview-box">
          <h2>{headingEnglish}</h2>
          <div className="matrix-container">
            <span>
              {matrixNumber1 && <h4>{matrixNumber1}K</h4>}
              <p>{description1English}</p>
            </span>
            <span>
              {matrixNumber2 && <h4>{matrixNumber2}</h4>}
              <p>{description2English}</p>
            </span>
            <span>
              {matrixNumber3 && <h4>{matrixNumber3}K</h4>}
              <p>{description3English}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMatrixForm;
