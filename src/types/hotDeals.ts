import { RecommendedProduct } from "./recommendedProduct";

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface HotDeal {
  id: string;
  title: string;
  image: string;
  endDate: string;
  href: string;
  backgroundColor?: string;
}

export interface HotDealsCardProps {
  deal: HotDeal;
}

export interface HotDealsSectionProps {
  featuredDeal: HotDeal;
  products: RecommendedProduct[];
}
