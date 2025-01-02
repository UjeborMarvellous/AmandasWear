"use client";
import React from "react";
import { IoIosStar } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart, faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
  return (
    <div className="relative bg-TextColor/80 shadow-2xl hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 mx-5 object-cover"
        />
        {/* Icons on hover */}
        <div className="absolute top-4 right-4 opacity-1 group-hover:opacity-100 transition-opacity duration-300">
          <div className="grid gap-4">
            <button className=" text-xl shadow-2xl px-4 py-3 text-BtnColor rounded-full bg-TextColor hover:text-BtnColor/80">
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
            <button className=" text-xl shadow-2xl px-4 py-3 text-BtnColor rounded-full bg-TextColor hover:text-BtnColor/80">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className=" text-xl shadow-2xl px-4 py-3 text-BtnColor rounded-full bg-TextColor hover:text-BtnColor/80">
              <FontAwesomeIcon icon={faSearchPlus} />
            </button>
          </div>
        </div>

      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-gray-800 text-lg truncate">{product.name}</h3>
          <p className=" text-yellow-400 my-auto font-bold flex gap-2"><IoIosStar className=" mt-1" /><span className=" text-black ">{product.rating} ( {product.ratio} )</span></p>
        </div>
        <p className="font-medium text-gray-800 text-sm truncate">{product.desc}</p>
        <p className="text-gray-600 font-bold mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;