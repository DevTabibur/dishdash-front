import {
  CategoryMain,
  CategorySection,
  FlashSales,
  Hero,
  RecommendedProducts,
  HotDealsSection,
} from "@/components";
import FlashDeal from "@/components/FlashDeal";
import FlashOffers from "@/components/FlashOffers";

import { HeaderTop } from "@/components/layout";
import { HeaderMain } from "@/components/layout";
import { HeaderMiddle } from "@/components/layout";
import HotDealsImage from "../../public/images/hot-deals/hot-deals-img.png";
const sampleProducts = [
  {
    id: "1",
    title: "Marcel's Modern Pantry Almond Unsweetened",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HF1yHnY2alSAZ84Ohxm6OiRBr9EqoR.png",
    seller: {
      name: "Lucky Supermarket",
      id: "lucky-1",
    },
    currentPrice: 14.99,
    originalPrice: 28.99,
    rating: {
      value: 4.8,
      count: 17000,
    },
    saleType: "Sale 50%",
    category: "Grocery",
  },
  {
    id: "2",
    title: "Marcel's Modern Pantry Almond Unsweetened",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HF1yHnY2alSAZ84Ohxm6OiRBr9EqoR.png",
    seller: {
      name: "Lucky Supermarket",
      id: "lucky-1",
    },
    currentPrice: 14.99,
    originalPrice: 28.99,
    rating: {
      value: 4.8,
      count: 17000,
    },
    saleType: "Sale 50%",
    category: "Grocery",
  },
  {
    id: "3",
    title: "Marcel's Modern Pantry Almond Unsweetened",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HF1yHnY2alSAZ84Ohxm6OiRBr9EqoR.png",
    seller: {
      name: "Lucky Supermarket",
      id: "lucky-1",
    },
    currentPrice: 14.99,
    originalPrice: 28.99,
    rating: {
      value: 4.8,
      count: 17000,
    },
    saleType: "Sale 50%",
    category: "Grocery",
  },
  {
    id: "4",
    title: "Marcel's Modern Pantry Almond Unsweetened",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HF1yHnY2alSAZ84Ohxm6OiRBr9EqoR.png",
    seller: {
      name: "Lucky Supermarket",
      id: "lucky-1",
    },
    currentPrice: 14.99,
    originalPrice: 28.99,
    rating: {
      value: 4.8,
      count: 17000,
    },
    saleType: "Sale 50%",
    category: "Fruits",
  },
  {
    id: "5",
    title: "Marcel's Modern Pantry Almond Unsweetened",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HF1yHnY2alSAZ84Ohxm6OiRBr9EqoR.png",
    seller: {
      name: "Lucky Supermarket",
      id: "lucky-1",
    },
    currentPrice: 14.99,
    originalPrice: 28.99,
    rating: {
      value: 4.8,
      count: 17000,
    },
    saleType: "Sale 50%",
    category: "Grocery",
  },
  {
    id: "6",
    title: "Marcel's Modern Pantry Almond Unsweetened",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HF1yHnY2alSAZ84Ohxm6OiRBr9EqoR.png",
    seller: {
      name: "Lucky Supermarket",
      id: "lucky-1",
    },
    currentPrice: 14.99,
    originalPrice: 28.99,
    rating: {
      value: 4.8,
      count: 17000,
    },
    saleType: "Sale 50%",
    category: "Grocery",
  },
  // Add more products as needed
];

const featuredDeal = {
  id: "1",
  title: "Fresh Vegetables",
  image: HotDealsImage.src,
  endDate: "2024-02-01T00:00:00",
  href: "/deals/fresh-vegetables",
  backgroundColor: "linear-gradient(135deg, #27AE60 0%, #1F8B4D 100%)",
};

const products = [
  {
    id: "1",
    title: "Whole Grains and Seeds Organic Bread",
    image: "/placeholder.svg",
    currentPrice: 14.99,
    originalPrice: 28.99,
    rating: { value: 4.8, count: 17000 },
    seller: { name: "Lucky Supermarket", id: "lucky-1" },
    badge: "Best Sale",
    href: "/product/organic-bread",
  },
  // Add more products...
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeaderTop />
      <HeaderMiddle location="New York" />
      <HeaderMain />
      <Hero />
      <CategorySection />
      <CategoryMain />
      <FlashSales />
      <FlashDeal />
      <FlashOffers />
      <RecommendedProducts products={sampleProducts} />
      <HotDealsSection featuredDeal={featuredDeal} products={sampleProducts} />
    </main>
  );
}
