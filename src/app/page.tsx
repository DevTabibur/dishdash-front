import {
  CategoryMain,
  CategorySection,
  FlashSales,
  Hero,
  RecommendedProducts,
} from "@/components";
import FlashDeal from "@/components/FlashDeal";
import FlashOffers from "@/components/FlashOffers";

import { HeaderTop } from "@/components/layout";
import { HeaderMain } from "@/components/layout";
import { HeaderMiddle } from "@/components/layout";
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
    </main>
  );
}
