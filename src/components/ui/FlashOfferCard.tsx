"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { FlashOfferProps } from "@/types/flashOffer";

const FlashOfferCard = ({
  logo = "/placeholder.svg",
  discount,
  delivery,
  image,
  href,
  backgroundColor = "#27AE60",
}: FlashOfferProps) => {
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{
        background: `linear-gradient(135deg, ${backgroundColor} 0%, ${adjustColor(backgroundColor, -20)} 100%)`,
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,25 C25,25 25,75 50,75 C75,75 75,25 100,25' stroke='%23FFFFFF' fill='none' stroke-width='3'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative p-6 md:p-8">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            {/* Left side content */}
            <div className="flex gap-8">
              {/* Product Image */}
              <div className="relative w-40 h-32 md:w-48 md:h-40">
                <Image
                  src={image}
                  alt="Flash Offer"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 160px, 192px"
                  priority
                />
              </div>

              {/* Offer Content */}
              <div className="flex flex-col justify-between py-2">
                <div className="space-y-2">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full p-3 shadow-lg">
                    <Image
                      src={logo}
                      alt="Brand Logo"
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 64px, 80px"
                    />
                  </div>
                  <h3 className="text-white text-2xl md:text-4xl font-bold">
                    {discount.currency || "$"}
                    {discount.amount} off {discount.description}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base">
                    Delivery by {delivery.time}
                    <span className="text-orange-400 ml-2">
                      expired {delivery.expiryDate}
                    </span>
                  </p>
                </div>

                <Link
                  href={href}
                  className="inline-flex items-center gap-2 bg-white text-[#27AE60] px-6 py-2.5 rounded-full hover:bg-gray-100 transition-colors w-fit mt-4"
                >
                  <span className="font-medium">Shop Now</span>
                  <FaArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Utility function to adjust color brightness
const adjustColor = (color: string, amount: number): string => {
  const clamp = (num: number) => Math.min(255, Math.max(0, num));

  // Remove the leading '#' if present
  const hex = color.replace("#", "");

  // Parse the hex color
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Adjust each color component
  const adjustR = clamp(r + amount);
  const adjustG = clamp(g + amount);
  const adjustB = clamp(b + amount);

  // Convert back to hex
  const newHex =
    "#" +
    adjustR.toString(16).padStart(2, "0") +
    adjustG.toString(16).padStart(2, "0") +
    adjustB.toString(16).padStart(2, "0");

  return newHex;
};

export default FlashOfferCard;
