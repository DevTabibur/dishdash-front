export interface Product {
  id: string;
  title: string;
  image: string;
  rating: {
    value: number;
    count: number;
  };
  price: {
    current: number;
    original: number;
  };
}

export interface ProductSectionProps {
  title: string;
  products: Product[];
}

export interface ProductCardProps {
  product: Product;
}
