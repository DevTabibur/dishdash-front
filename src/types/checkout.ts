export interface CheckoutStep {
  id: number;
  label: string;
  completed: boolean;
  current: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  rating?: number;
  reviews?: number;
  tags?: string[];
  quantity: number;
}

export interface ShippingInfo {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  deliveryMethod: "delivery" | "pickup";
}

export interface OrderSummary {
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
}

export interface CheckoutFormProps {
  onSubmit: (data: ShippingInfo) => void;
  isLoading?: boolean;
}

export interface CartReviewProps {
  items: CartItem[];
  summary: OrderSummary;
  onApplyDiscount: (code: string) => void;
  onProceedToPayment: () => void;
}

export interface StepIndicatorProps {
  steps: CheckoutStep[];
}
