"use client";
import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import Filter from "./FilterSidebar";

const products = [
    { 
        id: 1,
        desc: "Product type",
        name: "Trendy Brown Coat", 
        price: 75, 
        image: "Model.png",
        rating: 4.65,
        ratio: 44,
    },
    { 
        id: 2,
        desc: "Product type", 
        name: "Classy Light Coat", 
        price: 165, 
        image: "Model.png",
        rating: 3.50,
        ratio: 24,
    },
    { 
        id: 3,
        desc: "Product type", 
        name: "Modern Brown Dress", 
        price: 90, 
        image: "Model.png",
        rating: 4.56,
        ratio: 49,
    },
    { 
        id: 4,
        desc: "Product type", 
        name: "Light Brown Sweater", 
        price: 63, 
        image: "Model.png",
        rating: 4.57,
        ratio: 64,
    },
    { 
        id: 5,
        desc: "Product type", 
        name: "Classic White Shirt", 
        price: 45, 
        image: "Model.png",
        rating: 4.20,
        ratio: 74,
    },
    { 
        id: 6,
        desc: "Product type", 
        name: "Dark Yellow Shirt", 
        price: 75, 
        image: "Model.png",
        rating: 4.10,
        ratio: 68,
    },
    { 
        id: 7,
        desc: "Product type", 
        name: "Modern Black Dress", 
        price: 100, 
        image: "Model.png",
        rating: 4.90,
        ratio: 72,
    },
    { 
        id: 8,
        desc: "Product type", 
        name: "Classic Black Shirt", 
        price: 45, 
        image: "Model.png",
        rating: 4.30,
        ratio: 84,
    },
    { 
        id: 9,
        desc: "Product type", 
        name: "Light Grey Sweater", 
        price: 40, 
        image: "Model.png",
        rating: 2.52,
        ratio: 47,
    },
    { 
        id: 10,
        desc: "Product type", 
        name: "Classic White Suit", 
        price: 90, 
        image: "Model.png",
        rating: 4.56,
        ratio: 89,
    },
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
        <div className="grid grid-cols-5 pt-[9%] px-10 shadow-2xl gap-4 h-[99.6dvh]">
            {/* Filter Section */}
            <div className="filter col-span-1 h-full overflow-y-auto">
                <Filter onFilterChange={handleFilterChange} />
            </div>

            {/* Product Section */}
            <div className="filter  col-span-4 mb-5 shadow-2xl overflow-y-auto scrollbar-hidden">
                <ProductGrid products={filteredProducts} />
            </div>
        </div>

    );
};

export default MainPage;