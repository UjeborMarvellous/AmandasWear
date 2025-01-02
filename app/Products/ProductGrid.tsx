"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  const itemsPerPage = 10;

  // State for current page
  const [currentPage, setCurrentPage] = useState(1);

  // Automatically calculate total pages based on products
  const [totalPages, setTotalPages] = useState(
    Math.ceil(products.length / itemsPerPage)
  );

  // Automatically adjust total pages when products increase
  useEffect(() => {
    const newTotalPages = Math.ceil(products.length / itemsPerPage);
    setTotalPages(newTotalPages);
  }, [products]); // Runs whenever products change

  // Handle page change
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  // Paginate products based on the current page
  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full md:w-full bg-white/50  p-10 rounded-2xl">
      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 border rounded-full ${
              currentPage === index + 1
                ? "bg-BWhite text-white shadow-2xl"
                : "bg-white text-BWhite"
            }`}
            onClick={() => handleChangePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
