"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMinus, FiPlus, FiStar } from "react-icons/fi";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string, quantity: number) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prev) => {
      const newQuantity = increment ? prev + 1 : prev - 1;
      return Math.max(0, newQuantity); // Prevent negative quantities
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-gray-900">{product.name}</h3>
          <span className="text-[#FF6B98]">$ {product.price.toFixed(1)}</span>
        </div>

        <div className="flex items-center gap-1 mb-4">
          <FiStar className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => onAddToCart(product.id, quantity)}
            className="bg-[#FF6B98] text-white px-4 py-1 rounded text-sm hover:bg-[#ff5288] transition-colors"
          >
            Buy Now
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleQuantityChange(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiMinus size={16} />
            </button>
            <span className="text-gray-600 w-4 text-center">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(true)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiPlus size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
