export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  rating: number;
  reviews: number;
  tags: string[];
}

export interface CartTotals {
  subtotal: number;
  delivery: number | "Free";
  taxes: number;
  total: number;
}

export interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export interface CartTotalsProps {
  totals: CartTotals;
  onCheckout: () => void;
}

export interface CartProps {
  items: CartItem[];
  totals: CartTotals;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}
