import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import axios from "axios";
import Image from "next/image";
import { SiTicktick } from "react-icons/si";
import { ImBin } from "react-icons/im";

interface Careers {
  _id: string;
  careersTitleEnglish: string;
  careersTitleMacedonian: string;
  careersTitleSerbian: string;
  careersCategoryEnglish: string;
  careersCategoryMacedonian: string;
  careersCategorySerbian: string;
  careersDescriptionEnglish: string;
  careersDescriptionMacedonian: string;
  careersDescriptionSerbian: string;
  careersImage: string;
}

const CareersList = () => {
  const [careers, setCareers] = useState<Careers[]>([]);
  const [isError, setIsError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    axios
      .get<Careers[]>("/api/careers")
      .then((res) => {
        setCareers(res?.data);
      })
      .catch((error: string) => {
        setIsError(`Error fetching product profits: ${error}`);
      });
  }, []);

  const handleDelete = async (careersId: string) => {
    try {
      const response = await axios.delete(
        `/api/careers?careersId=${careersId}`
      );

      if (response.status === 200) {
        setTimeout(() => {
          setSuccessMessage("Careers Deleted successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
        setCareers(careers.filter((item) => item._id !== careersId));
      } else {
        alert("Failed to delete item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Layout title="Careers List - Cermat Admin">
      <div className="careers-list-container">
        <h2 className="careers-list-heading">Careers List</h2>

        {isError && <p>{isError}</p>}
        {successMessage && (
          <span className="success-message">
            <SiTicktick />
            <p>{successMessage}</p>
          </span>
        )}

        <div className="careers-list-box">
          {careers.map((Careers, index) => (
            <div className="careers-preview-card" key={index}>
              {Careers.careersImage && (
                <Image
                  src={Careers.careersImage}
                  alt={`${Careers.careersImage}`}
                  width={400}
                  height={400}
                  className="careers-image-preview-box"
                />
              )}
              <div className="careers-content-preview-box">
                <span onClick={() => handleDelete(Careers._id)}>
                  <ImBin className="bin-del-btn-careers" />
                </span>
                <h2>{Careers.careersTitleEnglish}</h2>
                <p>{Careers.careersDescriptionEnglish}</p>
                <h4>{Careers.careersCategoryEnglish}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CareersList;
