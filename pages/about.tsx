import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import axios from "axios";
import Image from "next/image";
import { SiTicktick } from "react-icons/si";
import { ImBin } from "react-icons/im";

interface Banner {
  _id: string;
  bannerTitleEnglish: string;
  bannerTitleMacedonia: string;
  bannerTitleSerbian: string;
  bannerDescription1English: string;
  bannerDescription1Macedonia: string;
  bannerDescription1Serbian: string;
  bannerDescription2English: string;
  bannerDescription2Macedonia: string;
  bannerDescription2Serbian: string;
  bannerImage: string;
}

interface Section1 {
  _id: string;
  titleEnglish: string;
  titleMacedonia: string;
  titleSerbian: string;
  descriptionEnglish: string;
  descriptionMacedonia: string;
  descriptionSerbian: string;
  imageSrc: string;
}

interface Section2 {
  _id: string;
  headingEnglish: string;
  headingMacedonia: string;
  headingSerbian: string;
  descriptionEnglish: string;
  descriptionMacedonia: string;
  descriptionSerbian: string;
  titleEnglish: string;
  titleMacedonia: string;
  titleSerbian: string;
}

interface Section3 {
  _id: string;
  card1TitleEnglish: string;
  card1TitleMacedonia: string;
  card1TitleSerbian: string;
  card2TitleEnglish: string;
  card2TitleMacedonia: string;
  card2TitleSerbian: string;
  card1Description1English: string;
  card1Description1Macedonia: string;
  card1Description1Serbian: string;
  card1Description2English: string;
  card1Description2Macedonia: string;
  card1Description2Serbian: string;
  card2Description1English: string;
  card2Description1Macedonia: string;
  card2Description1Serbian: string;
  card2Description2English: string;
  card2Description2Macedonia: string;
  card2Description2Serbian: string;
  imageSrc1: string;
  imageSrc2: string;
}

interface Matrix {
  _id: string;
  headingEnglish: string;
  headingMacedonia: string;
  headingSerbian: string;
  matrixNumber1: number;
  matrixNumber2: number;
  matrixNumber3: number;
  description1English: string;
  description1Macedonia: string;
  description1Serbian: string;
  description2English: string;
  description2Macedonia: string;
  description2Serbian: string;
  description3English: string;
  description3Macedonia: string;
  description3Serbian: string;
}

const About = () => {
  const [banner, setBanner] = useState<Banner[]>([]);
  const [section1, setSection1] = useState<Section1[]>([]);
  const [section2, setSection2] = useState<Section2[]>([]);
  const [section3, setSection3] = useState<Section3[]>([]);
  const [matrix, setMatrix] = useState<Matrix[]>([]);
  const [isError, setIsError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    axios
      .get<Banner[]>("/api/aboutbanner")
      .then((res) => {
        setBanner(res?.data);
      })
      .catch((error: string) => {
        setIsError(`Error fetching product profits: ${error}`);
      });

    axios
      .get<Section1[]>("/api/aboutsection1")
      .then((res) => {
        setSection1(res?.data);
      })
      .catch((error: string) => {
        setIsError(`Error fetching product profits: ${error}`);
      });

    axios
      .get<Section2[]>("/api/aboutsection2")
      .then((res) => {
        setSection2(res?.data);
      })
      .catch((error: string) => {
        setIsError(`Error fetching product profits: ${error}`);
      });

    axios
      .get<Section3[]>("/api/aboutsection3")
      .then((res) => {
        setSection3(res?.data);
      })
      .catch((error: string) => {
        setIsError(`Error fetching product profits: ${error}`);
      });

    axios
      .get<Matrix[]>("/api/aboutmatrix")
      .then((res) => {
        setMatrix(res?.data);
      })
      .catch((error: string) => {
        setIsError(`Error fetching product profits: ${error}`);
      });
  }, [banner, section1, section2, section3, matrix]);

  const handleBannerDelete = async (aboutbannerId: string) => {
    try {
      const response = await axios.delete(
        `/api/aboutbanner?aboutbannerId=${aboutbannerId}`
      );

      if (response.status === 200) {
        setTimeout(() => {
          setSuccessMessage("About Banner Deleted successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
        setBanner(banner.filter((item) => item._id !== aboutbannerId));
      } else {
        alert("Failed to delete item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred. Please try again.");
    }
  };
  const handleSection1Delete = async (aboutsection1Id: string) => {
    try {
      const response = await axios.delete(
        `/api/aboutsection1?aboutsection1Id=${aboutsection1Id}`
      );

      if (response.status === 200) {
        setTimeout(() => {
          setSuccessMessage("About Section 1 Deleted successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
        setSection1(section1.filter((item) => item._id !== aboutsection1Id));
      } else {
        alert("Failed to delete item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred. Please try again.");
    }
  };
  const handleSection2Delete = async (aboutsection2Id: string) => {
    try {
      const response = await axios.delete(
        `/api/aboutsection2?aboutsection2Id=${aboutsection2Id}`
      );

      if (response.status === 200) {
        setTimeout(() => {
          setSuccessMessage("About Section 2 Deleted successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
        setSection2(section2.filter((item) => item._id !== aboutsection2Id));
      } else {
        alert("Failed to delete item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred. Please try again.");
    }
  };
  const handleSection3Delete = async (aboutsection3Id: string) => {
    try {
      const response = await axios.delete(
        `/api/aboutsection3?aboutsection3Id=${aboutsection3Id}`
      );

      if (response.status === 200) {
        setTimeout(() => {
          setSuccessMessage("About Section 3 Deleted successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
        setSection3(section3.filter((item) => item._id !== aboutsection3Id));
      } else {
        alert("Failed to delete item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred. Please try again.");
    }
  };
  const handleMatrixDelete = async (aboutmatrixId: string) => {
    try {
      const response = await axios.delete(
        `/api/aboutmatrix?aboutmatrixId=${aboutmatrixId}`
      );

      if (response.status === 200) {
        setTimeout(() => {
          setSuccessMessage("About Matrix Deleted successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
        setMatrix(matrix.filter((item) => item._id !== aboutmatrixId));
      } else {
        alert("Failed to delete item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Layout title="About - Cermat Admin">
      <div className="About-container">
        <h2 className="careers-list-heading">About Page</h2>

        {isError && <p>{isError}</p>}
        {successMessage && (
          <span className="success-message">
            <SiTicktick />
            <p>{successMessage}</p>
          </span>
        )}

        <div className="about-box">
          {banner.map((Banner, index) => (
            <div
              className="hero-banner-about-card-preview-box relative"
              key={index + Banner._id}
            >
              {Banner.bannerTitleEnglish && (
                <div className="image-title-box-about-banner relative">
                  <Image
                    src={Banner.bannerImage}
                    alt={Banner.bannerImage}
                    width={100}
                    height={100}
                  />
                  <div className="dl-btn">
                    <ImBin onClick={() => handleBannerDelete(Banner._id)} />
                  </div>
                  <h2 className="about-banner-title">
                    {Banner.bannerTitleEnglish}
                  </h2>
                </div>
              )}
              <div className="description-container-about-banner">
                {Banner.bannerDescription1English && (
                  <div className="description-box-about-banner">
                    <div>
                      <b className="linedesign"></b>
                      <p>{Banner.bannerDescription1English}</p>
                    </div>
                    <div>
                      <b className="linedesign"></b>
                      <p>{Banner.bannerDescription2English}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {section1.map((Section1, index) => (
            <div
              className="about-section1-form-preview-box relative"
              key={index + Section1._id}
            >
              <div className="dl-btn">
                <ImBin onClick={() => handleSection1Delete(Section1._id)} />
              </div>
              {Section1.titleEnglish && (
                <div className="content-box-about-section1">
                  <div className="title-box-about-section1">
                    <h2>{Section1.titleEnglish}</h2>
                    <span className="design-line-box">
                      <b className="designline1"></b>
                      <b className="designline2"></b>
                    </span>
                  </div>
                  <p className="about-section1-description-box">
                    {Section1.descriptionEnglish}
                  </p>
                </div>
              )}
              {Section1.imageSrc && (
                <div className="image-box-about-section1">
                  <Image
                    src={Section1.imageSrc}
                    alt="section-1-pic"
                    width={100}
                    height={100}
                  />
                </div>
              )}
            </div>
          ))}

          {section2.map((Section2, index) => (
            <div
              className="about-section2-form-preview-card relative"
              key={index + Section2._id}
            >
              <div className="dl-btn">
                <ImBin onClick={() => handleSection2Delete(Section2._id)} />
              </div>
              <h2 className="about-section2-form-preview-card-heading">
                {Section2.headingEnglish}
              </h2>
              <div className="description-title-box-about-section-2">
                <p>{Section2.descriptionEnglish}</p>
                {Section2.titleEnglish && (
                  <div className="title-box-about-section2">
                    <h2>{Section2.titleEnglish}</h2>
                    <span className="design-line-box">
                      <b className="designline1"></b>
                      <b className="designline2"></b>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {section3.map((Section3, index) => (
            <div key={index + Section3._id} className="relative">
              <div className="dl-btn">
                <ImBin onClick={() => handleSection3Delete(Section3._id)} />
              </div>
              {Section3.card1TitleEnglish && (
                <div className="about-section3-form-preview-box">
                  <div className="about-section3-card about-section3-card1">
                    {Section3.card1TitleEnglish && (
                      <div className="about-section3-content">
                        {Section3.card1TitleEnglish && (
                          <div className="title-box-about-section2">
                            <h2>{Section3.card1TitleEnglish}</h2>
                            <span className="design-line-box">
                              <b className="designline1"></b>
                              <b className="designline2"></b>
                            </span>
                          </div>
                        )}
                        <i className="divider"></i>
                        <p>{Section3.card1Description1English}</p>
                        <p>{Section3.card1Description2English}</p>
                      </div>
                    )}

                    {Section3.imageSrc1 && (
                      <div className="about-section3-image">
                        <Image
                          src={Section3.imageSrc1}
                          alt={`${Section3.imageSrc1}`}
                          width={505}
                          height={800}
                        />
                      </div>
                    )}
                  </div>

                  <div className="about-section3-card about-section3-card2">
                    {Section3.card2TitleEnglish && (
                      <div className="about-section3-content">
                        {Section3.card2TitleEnglish && (
                          <div className="title-box-about-section2">
                            <h2>{Section3.card2TitleEnglish}</h2>
                            <span className="design-line-box">
                              <b className="designline1"></b>
                              <b className="designline2"></b>
                            </span>
                          </div>
                        )}
                        <i className="divider"></i>
                        <p>{Section3.card2Description1English}</p>
                        <p>{Section3.card2Description2English}</p>
                      </div>
                    )}
                    {Section3.imageSrc2 && (
                      <div className="about-section3-image">
                        <Image
                          src={Section3.imageSrc2}
                          alt={`${Section3.imageSrc2}`}
                          width={505}
                          height={800}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {matrix.map((Matrix, index) => (
            <div
              className="about-matrix-form-preview-box relative"
              key={index + Matrix._id}
            >
              <div className="dl-btn">
                <ImBin onClick={() => handleMatrixDelete(Matrix._id)} />
              </div>
              <h2>{Matrix.headingEnglish}</h2>
              <div className="matrix-container">
                <span>
                  {Matrix.matrixNumber1 && <h4>{Matrix.matrixNumber1}K</h4>}
                  <p>{Matrix.description1English}</p>
                </span>
                <span>
                  {Matrix.matrixNumber2 && <h4>{Matrix.matrixNumber2}</h4>}
                  <p>{Matrix.description2English}</p>
                </span>
                <span>
                  {Matrix.matrixNumber3 && <h4>{Matrix.matrixNumber3}K</h4>}
                  <p>{Matrix.description3English}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
