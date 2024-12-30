"use client";
import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import Filter from "./FilterSidebar";

const products = [
    { id: 1, name: "Trendy Brown Coat", price: 75, image: "/images/coat1.jpg" },
    { id: 2, name: "Classy Light Coat", price: 165, image: "/images/coat2.jpg" },
    { id: 3, name: "Modern Brown Dress", price: 90, image: "/images/dress1.jpg" },
    { id: 4, name: "Light Brown Sweater", price: 63, image: "/images/sweater1.jpg" },
    { id: 5, name: "Classic White Shirt", price: 45, image: "/images/shirt1.jpg" },
    { id: 6, name: "Dark Yellow Shirt", price: 75, image: "/images/shirt2.jpg" },
    { id: 7, name: "Modern Black Dress", price: 100, image: "/images/dress2.jpg" },
    { id: 8, name: "Classic Black Shirt", price: 45, image: "/images/shirt3.jpg" },
    { id: 9, name: "Light Grey Sweater", price: 40, image: "/images/sweater2.jpg" },
    { id: 10, name: "Classic White Suit", price: 90, image: "/images/suit1.jpg" },
];

const MainPage = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleFilterChange = (filters) => {
        let filtered = products;

        if (filters.category) {
            filtered = filtered.filter((product) =>
                product.name.toLowerCase().includes(filters.category.toLowerCase())
            );
        }

        if (filters.size) {
            // Add filtering logic for size if applicable
        }

        if (filters.price) {
            filtered = filtered.filter(
                (product) =>
                    product.price >= filters.price[0] && product.price <= filters.price[1]
            );
        }

        setFilteredProducts(filtered);
    };

    return (
        <div className="grid grid-cols-5 gap-4 p-10 h-screen bg-green-600">
            <div className="filter bg-black col-span-1">
                <Filter onFilterChange={handleFilterChange} />
            </div>
            <div className="filter bg-red-900 col-span-4">
                <ProductGrid products={filteredProducts} />
            </div>
        </div>
    );
};

export default MainPage;