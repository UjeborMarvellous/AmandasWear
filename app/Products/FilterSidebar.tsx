"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Filter = ({ onFilterChange }) => {
  const [showCategory, setShowCategory] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showSize, setShowSize] = useState(true);
  const [filters, setFilters] = useState({
    category: "",
    price: [40, 1200],
    size: "",
  });

  const handleToggle = (section) => {
    if (section === "category") setShowCategory(!showCategory);
    else if (section === "price") setShowPrice(!showPrice);
    else if (section === "size") setShowSize(!showSize);
  };

  const handleFilterChange = (key, value) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onFilterChange && onFilterChange(updatedFilters);
  };

  return (
    <div className="w-full md:w-full bg-white p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
      {/* Category Filter */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => handleToggle("category")}
        >
          <h3 className="font-medium text-gray-800">Category</h3>
          <FontAwesomeIcon icon={showCategory ? faChevronUp : faChevronDown} />
        </div>
        {showCategory && (
          <div className="mt-2 space-y-2 grid fade-in">
            <label>
              <input
                type="radio"
                name="category"
                value="Men"
                onChange={(e) => handleFilterChange("category", e.target.value)}
              />
              Men
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="Women"
                onChange={(e) => handleFilterChange("category", e.target.value)}
              />
              Women
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="Kids"
                onChange={(e) => handleFilterChange("category", e.target.value)}
              />
              Kids
            </label>
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="mt-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => handleToggle("price")}
        >
          <h3 className="font-medium text-gray-800">Price</h3>
          <FontAwesomeIcon icon={showPrice ? faChevronUp : faChevronDown} />
        </div>
        {showPrice && (
          <div className="mt-2 fade-in">
            <input
              type="range"
              min="40"
              max="1200"
              value={filters.price[1]}
              onChange={(e) =>
                handleFilterChange("price", [filters.price[40], parseInt(e.target.value)])
              }
              className="w-full"
            />
            <p className="text-sm text-gray-600">${filters.price[0]} - ${filters.price[1]}</p>
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div className="mt-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => handleToggle("size")}
        >
          <h3 className="font-medium text-gray-800">Size</h3>
          <FontAwesomeIcon icon={showSize ? faChevronUp : faChevronDown} />
        </div>
        {showSize && (
          <div className="mt-2 fade-in space-y-2">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <label key={size}>
                <input
                  type="radio"
                  name="size"
                  value={size}
                  onChange={(e) => handleFilterChange("size", e.target.value)}
                />
                {size}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;