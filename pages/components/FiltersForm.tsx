import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImBin } from "react-icons/im";
import { SiTicktick } from "react-icons/si";

interface Filters {
  _id: string;
  filter: string;
  filterCategory: string;
  subfilterCategory: string;
}

const FiltersForm = () => {
  const [filter, setFilter] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [subfilterCategory, setSubFilterCategory] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [filters, setFilters] = useState<Filters[]>([]);
  const [isError, setIsError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      filter,
      filterCategory,
      subfilterCategory,
    };

    try {
      const response = await fetch("/api/filter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage("Filter Category Added successfully!");
        setTimeout(() => setSuccessMessage(""), 5000);
        setSubFilterCategory("");
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
        fetchFilters();
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
        acc[filter.filter][filter.filterCategory].push(filter.subfilterCategory);
      }
      return acc;
    },
    {}
  );

  const handleDelete = async (filterId:string) => {
    try {
      const response = await axios.delete(
        `/api/filter?filterId=${filterId}`
      );

      if (response.status === 200) {
        setTimeout(() => {
          setSuccessMessage("Filter Category Deleted successfully!");
          setTimeout(() => setSuccessMessage(""), 5000);
        }, 1000);
        const audio = new Audio("/audio/notification.mp3");
        audio.play();
        setFilters(filters.filter((item) => item._id !== filterId));
      } else {
        alert("Failed to delete item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="FiltersForm-container">
      {successMessage && (
        <span className="success-message">
          <SiTicktick />
          <p>{successMessage}</p>
        </span>
      )}
      <h3 className="filterform-header">ADD Filter Categories for Products</h3>
      <div className="filter-form-box">
        <form className="filter-form" onSubmit={handleSubmit}>
          <select
            className="select-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">Select Filter</option>
            <option value="brand">Filter by Brands</option>
            <option value="privateLabel">Filter by Private Labels</option>
          </select>
          <input
            type="text"
            placeholder="Add Sub filter (optional)"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Category for Filter*"
            value={subfilterCategory}
            onChange={(e) => setSubFilterCategory(e.target.value)}
          />
          <button type="submit">Add Filter Category</button>
        </form>

        <div className="preview-container-filter">
          <h3 className="preview-filter-form">Total Filter Categories</h3>
          {isError && <p className="text-red-500 font-bold">{isError}</p>}
          <div className="preview-box-filter">
            {Object.keys(groupedFilters).map((filterType) => (
              <div key={filterType} className="filter-group">
                <h4 className="filter-type-header text-2xl font-bold pb-[1rem]">{`Filter by ${
                  filterType === "brand" ? "Brands" : "Private Labels"
                }`}</h4>
                {Object.keys(groupedFilters[filterType]).map((category) => (
                  <div key={category} className="filter-category">
                    <h5 className="text-gray-500 text-xl py-[0.5rem]">
                      <strong>{category}</strong>
                    </h5>
                    <span className="subcategory-list flex flex-col items-start justify-start w-full gap-[1rem]">
                      {groupedFilters[filterType][category].map((subCategory, index) => {
                        const filterItem = filters?.find(
                          (f) =>
                            f.subfilterCategory === subCategory &&
                            f.filterCategory === category
                        );

                        return (
                          <span
                            key={index}
                            className="flex items-center justify-between gap-[2rem] w-full border-[1px] border-gray-200 px-[1rem] py-[0.5rem] rounded-[0.5rem] ml-[1rem]"
                          >
                            <p className="subcategory-item text-[0.75rem]">
                              {subCategory}
                            </p>
                            <ImBin className="text-2xl" onClick={() =>filterItem?._id && handleDelete(filterItem._id)} />
                          </span>
                        );
                      })}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersForm;
