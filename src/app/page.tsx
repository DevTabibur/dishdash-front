import { CategorySection, Hero } from "@/components";
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
    </main>
  );
}
