export interface RecommendedProduct {
  id: string;
  title: string;
  image: string;
  seller: {
    name: string;
    id: string;
  };
  currentPrice: number;
  originalPrice: number;
  rating: {
    value: number;
    count: number;
  };
  saleType?: "Sale 50%" | "Best Sale" | null;
  category: string;
}

export interface RecommendedProductCardProps {
  product: RecommendedProduct;
  onAddToCart: (productId: string) => void;
}

export interface RecommendedProductsProps {
  products: RecommendedProduct[];
}

export type RecommendedCategory =
  | "All"
  | "Grocery"
  | "Fruits"
  | "Juices"
  | "Vegetables"
  | "Snacks"
  | "Organic Foods";
