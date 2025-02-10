import { CategorySection, Hero } from "@/components";
import { HeaderMain, HeaderMiddle, HeaderTop } from "@/components/layout";

export default function Home() {
  return (
    <main>
      <HeaderTop />
      <HeaderMiddle location="New York" />
      <HeaderMain />
      <Hero />
      <CategorySection />
      {/*
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
    </main>
  );
}
