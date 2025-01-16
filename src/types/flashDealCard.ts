export interface FlashDealProductRating {
  value: number;
  count: number;
}

export interface FlashDealProductSeller {
  name: string;
  id: string;
}

export interface FlashDealProduct {
  id: string;
  title: string;
  image: string;
  originalPrice: number;
  currentPrice: number;
  rating: FlashDealProductRating;
  seller: FlashDealProductSeller;
  soldCount: number;
  totalStock: number;
  unit?: string;
}

export interface FlashDealProductCardProps {
  product: FlashDealProduct;
  onAddToCart?: (productId: string) => void;
}
