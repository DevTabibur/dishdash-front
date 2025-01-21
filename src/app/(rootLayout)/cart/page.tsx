"use client";

import { useState } from "react";

import type { CartItem, CartTotals } from "@/types";
import { Breadcrumb, Cart } from "@/components";

const initialItems: CartItem[] = [
  {
    id: "1",
    name: "Taylor Farms Broccoli Florets Vegetables",
    image: "/placeholder.svg",
    price: 125.0,
    quantity: 1,
    rating: 4.8,
    reviews: 128,
    tags: ["Camera", "Videos"],
  },
  {
    id: "2",
    name: "Taylor Farms Broccoli Florets Vegetables 2",
    image: "/placeholder.svg",
    price: 125.0,
    quantity: 1,
    rating: 4.8,
    reviews: 128,
    tags: ["Camera", "Videos"],
  },
  {
    id: "3",
    name: "Taylor Farms Broccoli Florets Vegetables 3",
    image: "/placeholder.svg",
    price: 125.0,
    quantity: 1,
    rating: 4.8,
    reviews: 128,
    tags: ["Camera", "Videos"],
  },
];

const calculateTotals = (items: CartItem[]): CartTotals => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const taxes = 10.0;

  return {
    subtotal,
    delivery: "Free",
    taxes,
    total: subtotal + (typeof taxes === "number" ? taxes : 0),
  };
};

const page = () => {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const totals = calculateTotals(items);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const handleRemove = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
  };

  return (
    <>
      <Breadcrumb />
      <Cart
        items={items}
        totals={totals}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
    </>
  );
};

export default page;
