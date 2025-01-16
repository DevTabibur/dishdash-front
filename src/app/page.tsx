import { CategoryMain, CategorySection, FlashSales, Hero } from "@/components";
import FlashDeal from "@/components/FlashDeal";
import FlashOffers from "@/components/FlashOffers";

import { HeaderTop } from "@/components/layout";
import { HeaderMain } from "@/components/layout";
import { HeaderMiddle } from "@/components/layout";

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
    </main>
  );
}
