import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SiTicktick } from "react-icons/si";
import axios from "axios";
interface Filters {
  _id: string;
  filter: string;
  filterCategory: string;
  subfilterCategory: string;
}

const ProductForm = () => {
  const [productNameEng, setProductNameEng] = useState("");
  const [productNameMK, setProductNameMk] = useState("");
  const [productNameRS, setProductNameRS] = useState("");
  const [privateLabelFilter, setPrivateLabelFilter] = useState("");
  const [brandLabelFilter, setBrandLabelFilter] = useState("");
  const [backgoundColor, setBackgoundColor] = useState("#ececec");
  const [productDescriptionEng, setProductDescriptionEng] = useState("");
  const [productDescriptionMK, setProductDescriptionMk] = useState("");
  const [productDescriptionRS, setProductDescriptionRS] = useState("");
  const [imageHeight, setImageHeight] = useState<number>(0);
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState("");
  const [filters, setFilters] = useState<Filters[]>([]);
  const [filter, setFilter] = useState("");
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
        setImageHeight(img.height);
        setImageWidth(img.width);
        setImageSrc(img.src);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      productNameEng,
      productNameMK,
      productNameRS,
      productDescriptionEng,
      productDescriptionMK,
      productDescriptionRS,
      imageHeight,
      imageWidth,
      filter,
      privateLabelFilter,
      brandLabelFilter,
      productBackground: backgoundColor,
      productImage: imageSrc,
    };

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setTimeout(() => {
          setSuccessMessage("Product uploaded successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        setProductNameEng("");
        setProductNameMk("");
        setProductNameRS("");
        setBackgoundColor("");
        setProductDescriptionEng("");
        setProductDescriptionMk("");
        setProductDescriptionRS("");
        setPrivateLabelFilter("");
        setBrandLabelFilter("");
        setImageHeight(0);
        setImageWidth(0);
        setImageSrc("");
        setSuccessMessage("");
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
      } else {
        console.error(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  const fetchFilters = () => {
    axios
      .get<Filters[]>("/api/filter")
      .then((res) => {
        setFilters(res?.data);
      })
      .catch((error: string) => {
        setIsError(`Error fetching filter data: ${error}`);
      });
  };

  useEffect(() => {
    fetchFilters();
  }, []);

  const groupedFilters = filters.reduce(
    (acc: Record<string, Record<string, string[]>>, filter) => {
      if (!acc[filter.filter]) {
        acc[filter.filter] = {};
      }
      if (!acc[filter.filter][filter.filterCategory]) {
        acc[filter.filter][filter.filterCategory] = [];
      }
      if (filter.subfilterCategory) {
        acc[filter.filter][filter.filterCategory].push(
          filter.subfilterCategory
        );
      }
      return acc;
    },
    {}
  );

  return (
    <div className="product-form-and-preview-container mb-[5rem]">
      {successMessage && (
        <span className="success-message">
          <SiTicktick />
          <p>{successMessage}</p>
        </span>
      )}
      <h2>Product Uploader</h2>
      {isError && <p className="text-red-500 font-bold">{isError}</p>}
      <div className="product-form-and-preview-box">
        <form className="product-form-container" onSubmit={handleSubmit}>
          <span className="product-name-color-picker">
            <input
              type="text"
              value={productNameEng}
              onChange={(e) => setProductNameEng(e.target.value)}
              placeholder="Product Name - English"
            />
            <input
              type="text"
              value={productNameMK}
              onChange={(e) => setProductNameMk(e.target.value)}
              placeholder="Product Name - Macedonian"
            />
            <input
              type="text"
              value={productNameRS}
              onChange={(e) => setProductNameRS(e.target.value)}
              placeholder="Product Name - Serbian"
            />
            <span className="background-color-picker">
              <label htmlFor="color-picker">Background Color</label>
              <input
                type="color"
                id="color-picker"
                value={backgoundColor}
                onChange={(e) => setBackgoundColor(e.target.value)}
              />
            </span>
          </span>
          <span className="filters-product-form">
            <span>
              <label htmlFor="brnads">Filter By Brand</label>
              <select
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                onChange={(e) => {
                  setBrandLabelFilter(e.target.value);
                  setFilter("brand");
                }}
              >
                <option value="">Select a Brand</option>
                {groupedFilters.brand &&
                  Object.keys(groupedFilters.brand).map((category) => (
                    <optgroup key={category} label={`${category}`}>
                      {groupedFilters.brand[category].map(
                        (subCategory, index) => (
                          <option key={index} value={subCategory}>
                            {subCategory}
                          </option>
                        )
                      )}
                    </optgroup>
                  ))}
              </select>
            </span>
            <span>
              <label htmlFor="plabels">Filter By Private Label</label>
              <select
                className="w-full border border-gray-300 rounded-md px-4 py-2"
                onChange={(e) => {
                  setPrivateLabelFilter(e.target.value);
                  setFilter("private-label");
                }}
              >
                <option value="">Select a Private Label</option>
                {groupedFilters.privateLabel &&
                  Object.keys(groupedFilters.privateLabel).map((category) => (
                    <optgroup key={category} label={`${category}`}>
                      {groupedFilters.privateLabel[category].map(
                        (subCategory, index) => (
                          <option key={index} value={subCategory}>
                            {subCategory}
                          </option>
                        )
                      )}
                    </optgroup>
                  ))}
              </select>
            </span>
          </span>

          <span>
            <textarea
              rows={5}
              cols={20}
              placeholder="Product Description - English"
              value={productDescriptionEng}
              onChange={(e) => setProductDescriptionEng(e.target.value)}
            ></textarea>
            <textarea
              rows={5}
              cols={20}
              placeholder="Product Description - Macedonian"
              value={productDescriptionMK}
              onChange={(e) => setProductDescriptionMk(e.target.value)}
            ></textarea>
            <textarea
              rows={5}
              cols={20}
              placeholder="Product Description - Serbian"
              value={productDescriptionRS}
              onChange={(e) => setProductDescriptionRS(e.target.value)}
            ></textarea>
          </span>
          <span className="product-image">
            <label htmlFor="images">Images</label>
            <input
              type="file"
              id="images"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </span>

          <button type="submit">Upload Product</button>
        </form>

        <div className="preview-box">
          <h2 className="mb-[10rem]">Preview {"</>"}</h2>

          <div className="flex flex-col gap-[1rem]">
            <div
              className="product-card-box mb-[20rem]"
              style={{ background: `${backgoundColor}` }}
            >
              <div className="product-content-container">
                <div
                  className={`product-pic-box product-${
                    imageHeight >= 380 ? "440" : "L440"
                  }-pic-box`}
                >
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt="Product Image"
                      width={300}
                      height={300}
                    />
                  )}
                </div>
                <span className="product-content-box">
                  <h3>{productNameEng}</h3>
                  <p>{productDescriptionEng}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] mt-[10rem]">
            <div
              className="product-card-box mb-[20rem]"
              style={{ background: `${backgoundColor}` }}
            >
              <div className="product-content-container">
                <div
                  className={`product-pic-box product-${
                    imageHeight >= 380 ? "440" : "L440"
                  }-pic-box`}
                >
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt="Product Image"
                      width={300}
                      height={300}
                    />
                  )}
                </div>
                <span className="product-content-box">
                  <h3>{productNameMK}</h3>
                  <p>{productDescriptionMK}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1rem] mt-[10rem]">
            <div
              className="product-card-box mb-[20rem]"
              style={{ background: `${backgoundColor}` }}
            >
              <div className="product-content-container">
                <div
                  className={`product-pic-box product-${
                    imageHeight >= 380 ? "440" : "L440"
                  }-pic-box`}
                >
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt="Product Image"
                      width={300}
                      height={300}
                    />
                  )}
                </div>
                <span className="product-content-box">
                  <h3>{productNameRS}</h3>
                  <p>{productDescriptionRS}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
