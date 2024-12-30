"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart, faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {/* Icons on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center space-x-4 transition-opacity duration-300">
          <button className="text-white p-2 bg-gray-800 rounded-full hover:bg-gray-600">
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
          <button className="text-white p-2 bg-gray-800 rounded-full hover:bg-gray-600">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="text-white p-2 bg-gray-800 rounded-full hover:bg-gray-600">
            <FontAwesomeIcon icon={faSearchPlus} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg truncate">{product.name}</h3>
        <p className="text-gray-600 mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;