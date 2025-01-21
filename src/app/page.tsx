"use client";
import {
  CategoryMain,
  CategorySection,
  FlashSales,
  Hero,
  RecommendedProducts,
  HotDealsSection,
  VendorSection,
  DeliveryBanner,
  OrganicFood,
  ProductSections,
  BrandCarousel,
  ShippingSection,
  Newsletter,
} from "@/components";
import FlashDeal from "@/components/FlashDeal";
import FlashOffers from "@/components/FlashOffers";

import { HeaderTop } from "@/components/layout";
import { HeaderMain } from "@/components/layout";
import { HeaderMiddle } from "@/components/layout";
import HotDealsImage from "../../public/images/hot-deals/hot-deals-img.png";
import { VendorCard } from "@/components/ui";
import NewArrivalSections from "@/components/NewArrivalSections";

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

// const products = [
//   {
//     id: "1",
//     title: "Whole Grains and Seeds Organic Bread",
//     image: "/placeholder.svg",
//     currentPrice: 14.99,
//     originalPrice: 28.99,
//     rating: { value: 4.8, count: 17000 },
//     seller: { name: "Lucky Supermarket", id: "lucky-1" },
//     badge: "Best Sale",
//     href: "/product/organic-bread",
//   },
//   // Add more products...
// ];

const vendors = [
  {
    id: "1",
    name: "Organic Market",
    logo: {
      icon: "/placeholder.svg",
      text: "NATURE FOOD",
    },
    deliveryTime: "6:15am",
    promotion: {
      amount: 5,
      description: "Snack & Candy",
    },
    products: [
      { id: "1", image: "/placeholder.svg", alt: "Juice" },
      { id: "2", image: "/placeholder.svg", alt: "Snacks" },
      { id: "3", image: "/placeholder.svg", alt: "Oranges" },
      { id: "4", image: "/placeholder.svg", alt: "Fruits" },
      { id: "5", image: "/placeholder.svg", alt: "Juice" },
    ],
    backgroundColor: "#F9F8E7",
    href: "/vendors/organic-market",
  },
  {
    id: "2",
    name: "Safeway",
    logo: {
      icon: "/placeholder.svg",
      text: "NATURE FOOD",
    },
    deliveryTime: "6:15am",
    promotion: {
      amount: 5,
      description: "Snack & Candy",
    },
    products: [
      { id: "1", image: "/placeholder.svg", alt: "Juice" },
      { id: "2", image: "/placeholder.svg", alt: "Snacks" },
      { id: "3", image: "/placeholder.svg", alt: "Oranges" },
      { id: "4", image: "/placeholder.svg", alt: "Fruits" },
      { id: "5", image: "/placeholder.svg", alt: "Juice" },
    ],
    backgroundColor: "#E3F2FD",
    href: "/vendors/safeway",
  },
  // Add more vendors with different background colors...
];

// const products = [
//   {
//     id: "1",
//     title: "Taylor Farms Broccoli Florets Vegetables",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8ZIkSTYSj5AVf5UBKk1PAeHJgFByn3.png",
//     rating: {
//       value: 4.8,
//       count: 17000,
//     },
//     seller: {
//       name: "Lucky Supermarket",
//       icon: "/placeholder.svg",
//     },
//     price: {
//       original: 28.99,
//       current: 14.99,
//     },
//   },
//   {
//     id: "2",
//     title: "Taylor Farms Broccoli Florets Vegetables 2",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8ZIkSTYSj5AVf5UBKk1PAeHJgFByn3.png",
//     rating: {
//       value: 4.8,
//       count: 17000,
//     },
//     seller: {
//       name: "Lucky Supermarket",
//       icon: "/placeholder.svg",
//     },
//     price: {
//       original: 28.99,
//       current: 14.99,
//     },
//   },
//   {
//     id: "3",
//     title: "Taylor Farms Broccoli Florets Vegetables 3",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8ZIkSTYSj5AVf5UBKk1PAeHJgFByn3.png",
//     rating: {
//       value: 4.8,
//       count: 17000,
//     },
//     seller: {
//       name: "Lucky Supermarket",
//       icon: "/placeholder.svg",
//     },
//     price: {
//       original: 28.99,
//       current: 14.99,
//     },
//   },
//   {
//     id: "4",
//     title: "Taylor Farms Broccoli Florets Vegetables 4",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8ZIkSTYSj5AVf5UBKk1PAeHJgFByn3.png",
//     rating: {
//       value: 4.8,
//       count: 17000,
//     },
//     seller: {
//       name: "Lucky Supermarket",
//       icon: "/placeholder.svg",
//     },
//     price: {
//       original: 28.99,
//       current: 14.99,
//     },
//   },
//   {
//     id: "5",
//     title: "Taylor Farms Broccoli Florets Vegetables 5",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8ZIkSTYSj5AVf5UBKk1PAeHJgFByn3.png",
//     rating: {
//       value: 4.8,
//       count: 17000,
//     },
//     seller: {
//       name: "Lucky Supermarket",
//       icon: "/placeholder.svg",
//     },
//     price: {
//       original: 28.99,
//       current: 14.99,
//     },
//   },
//   {
//     id: "6",
//     title: "Taylor Farms Broccoli Florets Vegetables 6",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8ZIkSTYSj5AVf5UBKk1PAeHJgFByn3.png",
//     rating: {
//       value: 4.8,
//       count: 17000,
//     },
//     seller: {
//       name: "Lucky Supermarket",
//       icon: "/placeholder.svg",
//     },
//     price: {
//       original: 28.99,
//       current: 14.99,
//     },
//   },
//   {
//     id: "7",
//     title: "Taylor Farms Broccoli Florets Vegetables 7",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8ZIkSTYSj5AVf5UBKk1PAeHJgFByn3.png",
//     rating: {
//       value: 4.8,
//       count: 17000,
//     },
//     seller: {
//       name: "Lucky Supermarket",
//       icon: "/placeholder.svg",
//     },
//     price: {
//       original: 28.99,
//       current: 14.99,
//     },
//   },
//   {
//     id: "8",
//     title: "Taylor Farms Broccoli Florets Vegetables 8",
//     image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8ZIkSTYSj5AVf5UBKk1PAeHJgFByn3.png",
//     rating: {
//       value: 4.8,
//       count: 17000,
//     },
//     seller: {
//       name: "Lucky Supermarket",
//       icon: "/placeholder.svg",
//     },
//     price: {
//       original: 28.99,
//       current: 14.99,
//     },
//   },
// ]

// const featuredProducts = [
//   {
//     id: "1",
//     title: "Taylor Farms Broccoli Florets Vegetables",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Nj9SycrjrPY3v5NvgRZHx5YU9fHrkv.png",
//     rating: {
//       value: 4.8,
//       count: 17000,
//     },
//     price: {
//       current: 1500.0,
//       original: 1500.0,
//     },
//   },
// ];

// const products = [
//   {
//     id: "1",
//     title: "Taylor Farms Broccoli Florets Vegetables 1",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8tPdsKymkVKIKlVGGU7yspjpTOcjrH.png",
//     rating: {
//       value: 4.8,
//       count: 17000,
//     },
//     price: {
//       current: 1500.0,
//       original: 1500.0,
//     },
//   },
//   {
//     id: "2",
//     title: "Taylor Farms Broccoli Florets Vegetables 2",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8tPdsKymkVKIKlVGGU7yspjpTOcjrH.png",
//     rating: {
//       value: 4.8,
//       count: 17000,
//     },
//     price: {
//       current: 1500.0,
//       original: 1500.0,
//     },
//   },
//   {
//     id: "3",
//     title: "Taylor Farms Broccoli Florets Vegetables 3",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8tPdsKymkVKIKlVGGU7yspjpTOcjrH.png",
//     rating: {
//       value: 4.8,
//       count: 17000,
//     },
//     price: {
//       current: 1500.0,
//       original: 1500.0,
//     },
//   },
//   {
//     id: "4",
//     title: "Taylor Farms Broccoli Florets Vegetables 4",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8tPdsKymkVKIKlVGGU7yspjpTOcjrH.png",
//     rating: {
//       value: 4.8,
//       count: 17000,
//     },
//     price: {
//       current: 1500.0,
//       original: 1500.0,
//     },
//   },
//   // Add more products with different images
// ];

// const brands = [
//   {
//     id: "1",
//     name: "Organic Food 1",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j8J4VW0h0Rc0gHVM69ZhXXvTDR0Yms.png",
//     href: "/brands/organic-food",
//   },
//   {
//     id: "2",
//     name: "Organic Food 2",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j8J4VW0h0Rc0gHVM69ZhXXvTDR0Yms.png",
//     href: "/brands/organic-food",
//   },
//   {
//     id: "3",
//     name: "Organic Food3",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j8J4VW0h0Rc0gHVM69ZhXXvTDR0Yms.png",
//     href: "/brands/organic-food",
//   },
//   {
//     id: "4",
//     name: "Organic Food 4",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-j8J4VW0h0Rc0gHVM69ZhXXvTDR0Yms.png",
//     href: "/brands/organic-food",
//   },
// ];

// const products = [
//   {
//     id: "1",
//     title: "C-500 Antioxidant Protect Dietary Supplement",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jjvAhqrd1jIMzCEumjiRtl8KfYNqpo.png",
//     rating: {
//       value: 4.8,
//       count: 17000,
//     },
//     seller: {
//       name: "Lucky Supermarket",
//       id: "lucky-1",
//     },
//     price: {
//       current: 14.99,
//       original: 28.99,
//     },
//   },

// ];

import BodyBottomBgImage from "../../public/images/body-bottom-bg.png";
export default function Home() {
  const handleSubscribe = async (email: string) => {
    // Implement your newsletter subscription logic here
    console.log("Subscribing email:", email);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
  };
  return (
    <main className="min-h-screen flex flex-col">
      {/* <HeaderTop />
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
      <VendorSection vendors={vendors} /> */}
      {/* <DeliveryBanner />
      <OrganicFood products={products} /> */}

      {/* <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductSections title="Featured Products" products={products} />
          <ProductSections title="Top Selling Products" products={products} />
          <ProductSections title="On-sale Products" products={products} />
          <ProductSections title="Top Rated Products" products={products} />
        </div>
      </main> */}
      {/* <BrandCarousel
        brands={brands}
        itemsToShow={{
          mobile: 3,
          tablet: 5,
          desktop: 8,
        }}
      /> */}
      {/* <main>
        <NewArrivalSections
          products={products}
          itemsToShow={{
            mobile: 1,
            tablet: 3,
            desktop: 5,
          }}
        />
      </main> */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src={BodyBottomBgImage.src}
            alt="Shipping background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <ShippingSection />
          <Newsletter onSubscribe={handleSubscribe} />
        </div>
      </div>
    </main>
  );
}
