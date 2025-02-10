"use client";

import { FlashDealCard } from "./ui";
import type { FlashDealProduct } from "@/types";
import FlashDeal1 from "../../public/images/flash-sale/flash-deal-1.png";
import FlashDeal2 from "../../public/images/flash-sale/flash-deal-2.png";
import FlashDeal3 from "../../public/images/flash-sale/flash-deal-3.png";
import FlashDeal4 from "../../public/images/flash-sale/flash-deal-4.png";
import FlashDeal5 from "../../public/images/flash-sale/flash-deal-5.png";

const sampleProducts: FlashDealProduct[] = [
  {
    id: "1",
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: FlashDeal1.src,
    originalPrice: 28.99,
    currentPrice: 14.99,
    rating: {
      value: 4.8,
      count: 17,
    },
    seller: {
      name: "Lucky Supermarket",
      id: "lucky-1",
    },
    soldCount: 18,
    totalStock: 35,
  },
  {
    id: "2",
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: FlashDeal2.src,
    originalPrice: 28.99,
    currentPrice: 14.99,
    rating: {
      value: 4.8,
      count: 17,
    },
    seller: {
      name: "Lucky Supermarket",
      id: "lucky-1",
    },
    soldCount: 18,
    totalStock: 35,
  },
  {
    id: "3",
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: FlashDeal3.src,
    originalPrice: 28.99,
    currentPrice: 14.99,
    rating: {
      value: 4.8,
      count: 17,
    },
    seller: {
      name: "Lucky Supermarket",
      id: "lucky-1",
    },
    soldCount: 18,
    totalStock: 35,
  },
  {
    id: "4",
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: FlashDeal4.src,
    originalPrice: 28.99,
    currentPrice: 14.99,
    rating: {
      value: 4.8,
      count: 17,
    },
    seller: {
      name: "Lucky Supermarket",
      id: "lucky-1",
    },
    soldCount: 18,
    totalStock: 35,
  },
  {
    id: "5",
    title: "Taylor Farms Broccoli Florets Vegetables",
    image: FlashDeal5.src,
    originalPrice: 28.99,
    currentPrice: 14.99,
    rating: {
      value: 4.8,
      count: 17,
    },
    seller: {
      name: "Lucky Supermarket",
      id: "lucky-1",
    },
    soldCount: 18,
    totalStock: 35,
  },
];

const FlashDeal = () => {
  const handleAddToCart = (productId: string) => {
    console.log("Adding to cart:", productId);
  };

  return (
    <div className="max-w-[90%] mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {sampleProducts.map((product) => (
          <FlashDealCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashDeal;
