"use client";

import { useState } from "react";
import Image from "next/image";
import { FaLock } from "react-icons/fa";
import type { CartReviewProps } from "@/types";

const CartReview = ({
  items,
  summary,
  onApplyDiscount,
  onProceedToPayment,
}: CartReviewProps) => {
  const [discountCode, setDiscountCode] = useState("");

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-6">Review your cart</h2>

      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <div className="relative w-16 h-16 bg-white rounded-lg overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.quantity}x</p>
            </div>
            <span className="font-medium">${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Discount Code */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder="Discount code"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
        />
        <button
          onClick={() => onApplyDiscount(discountCode)}
          className="px-4 py-2 text-[#4F46E5] font-medium hover:bg-[#4F46E5]/5 rounded-lg transition-colors"
        >
          Apply
        </button>
      </div>

      {/* Order Summary */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${summary.subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>${summary.shipping.toFixed(2)}</span>
        </div>
        {summary.discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-${summary.discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between font-medium text-lg pt-3 border-t">
          <span>Total</span>
          <span>${summary.total.toFixed(2)}</span>
        </div>
      </div>

      {/* Pay Now Button */}
      <button
        onClick={onProceedToPayment}
        className="w-full bg-[#4F46E5] text-white py-3 rounded-lg hover:bg-[#4338CA] transition-colors mb-4"
      >
        Pay Now
      </button>

      {/* Secure Checkout */}
      <div className="flex items-center gap-2 text-sm text-gray-500 justify-center">
        <FaLock className="w-4 h-4" />
        <span>Secure Checkout - SSL Encrypted</span>
      </div>
    </div>
  );
};

export default CartReview;
