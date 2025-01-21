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
    icon: string;
  };
  price: {
    original: number;
    current: number;
  };
}

export interface ProductCardProps {
  product: Product;
  onAddToCart: (id: string) => void;
}

export interface OrganicFoodProps {
  products: Product[];
}
