"use client";

import { CartReview, CheckoutForm, StepIndicator } from "@/components/ui";
import { CartItem, OrderSummary, ShippingInfo } from "@/types";
import { CheckoutStep } from "@/types";
import { useState } from "react";

const steps: CheckoutStep[] = [
  { id: 1, label: "Cart", completed: true, current: false },
  { id: 2, label: "Review", completed: false, current: true },
  { id: 3, label: "Checkout", completed: false, current: false },
];

const sampleItems: CartItem[] = [
  {
    id: "1",
    name: "DuoComfort Sofa Premium",
    image: "/placeholder.svg",
    price: 20.0,
    quantity: 1,
  },
  {
    id: "2",
    name: "IronOne Desk",
    image: "/placeholder.svg",
    price: 25.0,
    quantity: 1,
  },
];

const initialSummary: OrderSummary = {
  subtotal: 45.0,
  shipping: 5.0,
  discount: 10.0,
  total: 40.0,
};

const page = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const [orderSummary, setOrderSummary] = useState(initialSummary);

  const handleShippingSubmit = (data: ShippingInfo) => {
    console.log("Shipping info:", data);
    setCurrentStep(3);
  };

  const handleApplyDiscount = (code: string) => {
    console.log("Applying discount:", code);
    // Implement discount logic
  };

  const handleProceedToPayment = () => {
    console.log("Proceeding to payment...");
    // Implement payment logic
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Step Indicator */}
      <StepIndicator steps={steps} />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Form */}
        <div>
          <CheckoutForm onSubmit={handleShippingSubmit} />
        </div>

        {/* Right Column - Cart Review */}
        <div>
          <CartReview
            items={sampleItems}
            summary={orderSummary}
            onApplyDiscount={handleApplyDiscount}
            onProceedToPayment={handleProceedToPayment}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
