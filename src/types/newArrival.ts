export interface Product {
  id: string;
  title: string;
  image: string;
  rating: {
    value: number;
    count: number;
  };
  seller: {
    name: string;
    id: string;
  };
  price: {
    current: number;
    original: number;
  };
}

export interface NewArrivalsProps {
  products: Product[];
  autoPlayInterval?: number;
  itemsToShow?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}
