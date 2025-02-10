"use client";

import { useState } from "react";
import type { ProductDetails } from "@/types";
import ImageGallery from "./ImageGallery";
import PriceDisplay from "./PriceDisplay";
import QuantitySelector from "./QuantitySelector";
import SocialShare from "./SocialShare";

// This would normally come from an API
const mockProduct: ProductDetails = {
  id: "1",
  name: "Philips Rice Cooker 0.6L",
  images: [
    {
      id: "1",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zoy5EPzTbwiScOUPqu9aD4QnRD5qjU.png",
      alt: "Philips Rice Cooker front view",
    },
    {
      id: "2",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zoy5EPzTbwiScOUPqu9aD4QnRD5qjU.png",
      alt: "Philips Rice Cooker top view",
    },
    {
      id: "3",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zoy5EPzTbwiScOUPqu9aD4QnRD5qjU.png",
      alt: "Philips Rice Cooker side view",
    },
  ],
  rating: 0,
  reviews: 0,
  seller: {
    id: "1",
    name: "Lavish Look",
    rating: 4.5,
  },
  originalPrice: 68950,
  discountPrice: 64750,
  clubPoints: 325,
  availability: 500,
  description: "High-quality rice cooker with 0.6L capacity",
  isBrandOfficial: true,
};

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log("Adding to cart:", { productId: mockProduct.id, quantity });
  };

  const handleBuyNow = () => {
    console.log("Buying now:", { productId: mockProduct.id, quantity });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Image Gallery */}
        <ImageGallery images={mockProduct.images} />

        {/* Right Column - Product Details */}
        <div className="space-y-6">
          {/* Title and Rating */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{mockProduct.name}</h1>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < mockProduct.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-500">
                ({mockProduct.reviews} reviews)
              </span>
            </div>
          </div>

          {/* Seller Info */}
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Soldby:</span>
            <span className="font-medium">{mockProduct.seller.name}</span>
            <button
              //   variant="secondary"
              className="bg-pink-100 hover:bg-pink-200 text-gray-700"
            >
              Message Seller
            </button>
            {mockProduct.isBrandOfficial && (
              <button
                // variant="secondary"
                className="bg-pink-100 hover:bg-pink-200 text-gray-700"
              >
                Brand
              </button>
            )}
          </div>

          {/* Price */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Price:</span>
              <PriceDisplay
                originalPrice={mockProduct.originalPrice}
                discountPrice={mockProduct.discountPrice}
                showPerUnit
              />
            </div>

            {/* Club Points */}
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Club Point:</span>
              <span className="bg-pink-100 px-3 py-1 rounded text-sm">
                {mockProduct.clubPoints}
              </span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Quantity:</span>
            <QuantitySelector
              quantity={quantity}
              onChange={setQuantity}
              max={mockProduct.availability}
            />
          </div>

          {/* Total Price */}
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Total Price:</span>
            <span className="text-2xl font-bold text-[#ff0000]">
              ${(mockProduct.discountPrice * quantity).toLocaleString()}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              className="flex-1 bg-pink-100 hover:bg-pink-200 text-gray-700"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
            <button
              className="flex-1 bg-[#ff0000] hover:bg-[#ff0000]/90 text-white"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>

          {/* Wishlist and Compare */}
          <div className="flex gap-4 text-sm">
            <button className="text-[#ff0000] hover:underline">
              Add to wishlist
            </button>
            <button className="text-[#ff0000] hover:underline">
              Add to compare
            </button>
          </div>

          {/* Refund Policy */}
          <div className="flex items-center gap-2 text-sm">
            <Shield className="h-5 w-5 text-green-500" />
            <span>Active eCommerce Refund Protection</span>
            <button className="text-[#ff0000] hover:underline">
              View Policy
            </button>
          </div>

          {/* Share */}
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Share:</span>
            <SocialShare
              url={`https://example.com/products/${mockProduct.id}`}
              title={mockProduct.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
