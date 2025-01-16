export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

export interface Seller {
  name: string;
  id: string;
  rating: number;
  totalSales?: number;
}

export interface ProductDetails {
  id: string;
  name: string;
  images: ProductImage[];
  rating: number;
  reviews: number;
  seller: Seller;
  originalPrice: number;
  discountPrice: number;
  clubPoints: number;
  availability: number;
  description: string;
  isBrandOfficial?: boolean;
}

