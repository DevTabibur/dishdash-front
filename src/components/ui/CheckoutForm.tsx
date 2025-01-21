"use client";

import { CheckoutFormProps, ShippingInfo } from "@/types";
import { useState } from "react";
import { FaTruck, FaStore, FaGlobe } from "react-icons/fa";

const CheckoutForm = ({ onSubmit, isLoading }: CheckoutFormProps) => {
  const [formData, setFormData] = useState<ShippingInfo>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
    deliveryMethod: "delivery",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>

        {/* Delivery Method */}
        <div className="flex gap-4 mb-6">
          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({ ...prev, deliveryMethod: "delivery" }))
            }
            className={`flex-1 flex items-center gap-2 p-4 rounded-lg border ${
              formData.deliveryMethod === "delivery"
                ? "border-[#4F46E5] bg-[#4F46E5]/5"
                : "border-gray-200"
            }`}
          >
            <FaTruck
              className={
                formData.deliveryMethod === "delivery"
                  ? "text-[#4F46E5]"
                  : "text-gray-400"
              }
            />
            <span>Delivery</span>
          </button>

          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({ ...prev, deliveryMethod: "pickup" }))
            }
            className={`flex-1 flex items-center gap-2 p-4 rounded-lg border ${
              formData.deliveryMethod === "pickup"
                ? "border-[#4F46E5] bg-[#4F46E5]/5"
                : "border-gray-200"
            }`}
          >
            <FaStore
              className={
                formData.deliveryMethod === "pickup"
                  ? "text-[#4F46E5]"
                  : "text-gray-400"
              }
            />
            <span>Pick up</span>
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone number <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                <FaGlobe className="text-gray-400" />
                <select className="bg-transparent border-0 text-gray-500 text-sm focus:ring-0">
                  <option>US</option>
                  <option>UK</option>
                  <option>CA</option>
                </select>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
              required
            >
              <option value="">Choose country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">ZIP Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
            />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="rounded text-[#4F46E5] focus:ring-[#4F46E5]"
              required
            />
            <span className="text-sm text-gray-600">
              I have read and agree to the Terms and Conditions
            </span>
          </label>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
