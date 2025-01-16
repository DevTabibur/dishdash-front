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

export interface HotDealProduct {
  id: string;
  title: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  rating: {
    value: number;
    count: number;
  };
  seller: {
    name: string;
    id: string;
  };
  badge?: "Best Sale" | "New" | "Sale 50%";
  href: string;
}

export interface HotDealsCardProps {
  deal: HotDeal;
}

export interface HotDealProductCardProps {
  product: HotDealProduct;
  onAddToCart: (productId: string) => void;
}

export interface HotDealsSectionProps {
  featuredDeal: HotDeal;
  products: HotDealProduct[];
}
