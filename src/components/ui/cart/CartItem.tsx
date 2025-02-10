import Image from "next/image";
import { FaStar, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import type { CartItemProps } from "@/types";

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-6 border-b">
      {/* Delete/Remove */}
      <div className="flex sm:hidden justify-between w-full">
        <h3 className="font-medium">{item.name}</h3>
        <button
          onClick={() => onRemove(item.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Remove item"
        >
          <FaTimes className="w-5 h-5" />
        </button>
      </div>

      {/* Remove button - Desktop */}
      <div className="hidden sm:block w-20">
        <button
          onClick={() => onRemove(item.id)}
          className="text-gray-500 hover:text-red-500 transition-colors flex items-center gap-2"
        >
          <FaTimes className="w-4 h-4" />
          <span className="text-sm">Remove</span>
        </button>
      </div>

      {/* Product Info */}
      <div className="flex items-start gap-4 flex-1">
        {/* Product Image */}
        <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h3 className="hidden sm:block font-medium mb-2">{item.name}</h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <FaStar className="w-4 h-4 text-yellow-400" />
              <span className="font-medium">{item.rating}</span>
            </div>
            <span className="text-gray-500 text-sm">
              {item.reviews} Reviews
            </span>
          </div>

          {/* Tags */}
          <div className="flex gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="w-24 text-right">
        <span className="font-medium">${item.price.toFixed(2)}</span>
      </div>

      {/* Quantity */}
      <div className="flex items-center border rounded-lg">
        <button
          onClick={() =>
            onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))
          }
          className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Decrease quantity"
        >
          <FaMinus className="w-3 h-3" />
        </button>
        <span className="w-12 text-center">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Increase quantity"
        >
          <FaPlus className="w-3 h-3" />
        </button>
      </div>

      {/* Subtotal */}
      <div className="w-24 text-right">
        <span className="font-medium">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
