"use client";

import { Product } from "../types/product";

export default function ProductCard({ product }: { product: Product }) {
  const variant = product.variants?.[0]; // mặc định lấy variant đầu

  if (!variant) {
    return null; // Không hiển thị nếu không có variant
  }

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
    
      {/* Image */}
      <div className="relative">
        <img
          src={`http://localhost:3000/images/${variant.img}`}
          alt={product.name}
          className="w-full h-48 object-cover"
        />

        {/* HOT badge */}
        {product.hot === 1 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            HOT
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">

        {/* Category */}
        <p className="text-xs text-gray-500">
          {product.categoryId.name}
        </p>

        {/* Name */}
        <h3 className="font-semibold text-lg line-clamp-1">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Duration */}
        <p className="text-sm text-blue-500">
          {variant.duration}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-red-500 font-bold text-lg">
            {variant.sale.toLocaleString()}đ
          </span>
          <span className="text-gray-400 line-through text-sm">
            {variant.price.toLocaleString()}đ
          </span>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}