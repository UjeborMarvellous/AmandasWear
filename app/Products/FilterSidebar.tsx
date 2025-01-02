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

    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category); // Update the selected category
        handleFilterChange("category", category); // Pass it to your filter function
    };

    const [selectedSize, setSelectedSize] = useState(""); // State to track selected size

    const handleSizeChange = (size) => {
        setSelectedSize(size); // Update the selected size
        handleFilterChange("size", size); // Update the filter
    };


    return (
        <div className="w-full md:w-full bg-white/50 h-[80dvh] p-10 rounded-2xl shadow-md">
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
                        {['Men', 'Women', 'Kids'].map((category) => (
                            <label key={category} className="flex items-center">
                                <input
                                    type="checkbox" // Keep it as a checkbox
                                    name="category" // Same name for grouping
                                    value={category}
                                    className="mr-2"
                                    checked={selectedCategory === category} // Controls the checked state
                                    onChange={() => handleCategoryChange(category)} // Updates the selected category
                                />
                                {category}
                            </label>
                        ))}
                    </div>
                )}

            </div>

            {/* Price Filter */}
            <div className="my-10">
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
            <div>
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggle("size")}
                >
                    <h3 className="font-medium text-gray-800">Size</h3>
                    <FontAwesomeIcon icon={showSize ? faChevronUp : faChevronDown} />
                </div>

                {showSize && (
                    <div className="mt-2 space-y-2 grid fade-in">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <label key={size} className="flex items-center">
                                <input
                                    type="checkbox" // Still a checkbox
                                    name="size" // Same name for grouping behavior
                                    value={size}
                                    className="mr-2"
                                    checked={selectedSize === size} // Controls checked state
                                    onChange={() => handleSizeChange(size)} // Updates selected size
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