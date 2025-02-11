"use client";
import {
  CategoryMain,
  CategorySection,
  FlashDeal,
  FlashOffers,
  FlashSales,
  Hero,
  HotDealsSection,
  RecommendedProducts,
} from "@/components";
import { HeaderMain, HeaderMiddle, HeaderTop } from "@/components/layout";
import { HotDeal, RecommendedProduct } from "@/types";

const sampleProducts: RecommendedProduct[] = [
  {
    id: "1",
    title: "Organic Avocados",
    image: "/images/products/avocados.jpg", // Replace with actual image path
    seller: {
      name: "Green Valley Farms",
      id: "seller1",
    },
    currentPrice: 5.99,
    originalPrice: 6.99,
    rating: {
      value: 4.5,
      count: 120,
    },
    saleType: "Sale 50%",
    category: "Organic Foods",
  },
  {
    id: "2",
    title: "Fresh Bananas",
    image: "/images/products/bananas.jpg", // Replace with actual image path
    seller: {
      name: "Tropical Fruits Co.",
      id: "seller2",
    },
    currentPrice: 2.99,
    originalPrice: 3.99,
    rating: {
      value: 4.0,
      count: 150,
    },
    saleType: null,
    category: "Fruits",
  },
  {
    id: "3",
    title: "Carrot Sticks",
    image: "/images/products/carrot-sticks.jpg", // Replace with actual image path
    seller: {
      name: "Veggie Delights",
      id: "seller3",
    },
    currentPrice: 3.49,
    originalPrice: 4.49,
    rating: {
      value: 4.3,
      count: 80,
    },
    saleType: "Best Sale",
    category: "Vegetables",
  },
  {
    id: "4",
    title: "100% Orange Juice",
    image: "/images/products/orange-juice.jpg", // Replace with actual image path
    seller: {
      name: "Pure Juices Co.",
      id: "seller4",
    },
    currentPrice: 4.99,
    originalPrice: 5.99,
    rating: {
      value: 4.7,
      count: 200,
    },
    saleType: null,
    category: "Juices",
  },
  {
    id: "5",
    title: "Salted Potato Chips",
    image: "/images/products/potato-chips.jpg", // Replace with actual image path
    seller: {
      name: "Snack Time Inc.",
      id: "seller5",
    },
    currentPrice: 1.99,
    originalPrice: 2.49,
    rating: {
      value: 4.2,
      count: 300,
    },
    saleType: null,
    category: "Snacks",
  },
  {
    id: "6",
    title: "Whole Wheat Bread",
    image: "/images/products/whole-wheat-bread.jpg", // Replace with actual image path
    seller: {
      name: "Baker's Delight",
      id: "seller6",
    },
    currentPrice: 3.89,
    originalPrice: 4.99,
    rating: {
      value: 4.6,
      count: 180,
    },
    saleType: "Sale 50%",
    category: "Grocery",
  },
  {
    id: "7",
    title: "Organic Almonds",
    image: "/images/products/organic-almonds.jpg", // Replace with actual image path
    seller: {
      name: "Nutty Goodness",
      id: "seller7",
    },
    currentPrice: 8.99,
    originalPrice: 10.99,
    rating: {
      value: 4.8,
      count: 110,
    },
    saleType: null,
    category: "Organic Foods",
  },
  {
    id: "8",
    title: "Tomato Ketchup",
    image: "/images/products/tomato-ketchup.jpg", // Replace with actual image path
    seller: {
      name: "Ketchup King",
      id: "seller8",
    },
    currentPrice: 2.49,
    originalPrice: 2.99,
    rating: {
      value: 4.1,
      count: 230,
    },
    saleType: "Best Sale",
    category: "Grocery",
  },
  {
    id: "9",
    title: "Organic Spinach",
    image: "/images/products/spinach.jpg", // Replace with actual image path
    seller: {
      name: "Greens Galore",
      id: "seller9",
    },
    currentPrice: 4.49,
    originalPrice: 5.49,
    rating: {
      value: 4.3,
      count: 70,
    },
    saleType: null,
    category: "Vegetables",
  },
  {
    id: "10",
    title: "Mixed Fruit Juice",
    image: "/images/products/mixed-fruit-juice.jpg", // Replace with actual image path
    seller: {
      name: "Juicy Delights",
      id: "seller10",
    },
    currentPrice: 5.49,
    originalPrice: 6.49,
    rating: {
      value: 4.6,
      count: 160,
    },
    saleType: "Sale 50%",
    category: "Juices",
  },
];

const featuredDeal: HotDeal = {
  id: "deal-1",
  title: "Super Hot Winter Sale!",
  image: "/images/hot-deal-banner.jpg",
  endDate: "2025-03-01T23:59:59Z",
  href: "/deals/winter-sale",
  backgroundColor: "#FF5733", // Optional
};

const RootComponents = () => {
  return (
    <div>
      <HeaderTop />
      <HeaderMiddle location="New York" />
      <HeaderMain />
      <Hero />
      <CategorySection />
      <CategoryMain /> {/*<CategoryMain categories={[]} /> */}
      <FlashSales /> {/* <FlashSales items={[]} /> */}
      <FlashDeal />
      <FlashOffers />
      <RecommendedProducts products={sampleProducts} />
      <HotDealsSection featuredDeal={featuredDeal} products={sampleProducts} />
      {/*
      
      
      <VendorSection vendors={vendors} />
      <DeliveryBanner />
      <OrganicFood products={products} />

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductSections title="Featured Products" products={products} />
          <ProductSections title="Top Selling Products" products={products} />
          <ProductSections title="On-sale Products" products={products} />
          <ProductSections title="Top Rated Products" products={products} />
        </div>
      </main>
      <BrandCarousel
        brands={brands}
        itemsToShow={{
          mobile: 3,
          tablet: 5,
          desktop: 8,
        }}
      />
      <main>
        <NewArrivalSections
          products={products}
          itemsToShow={{
            mobile: 1,
            tablet: 3,
            desktop: 5,
          }}
        />
      </main>
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
          <Footer />
        </div>
      </div> */}
    </div>
  );
};

export default RootComponents;
