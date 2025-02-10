/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import type { NewsletterFormProps } from "@/types";

const NewsletterForm = ({ onSubmit, isLoading }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      await onSubmit(email);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-xl">
      <div className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address..."
          className="w-full px-6 py-4 rounded-l-full bg-white/10 text-white placeholder-white/60 border-2 border-white/20 focus:outline-none focus:border-white/40 transition-colors"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-8 py-4 bg-[#FF5722] text-white rounded-r-full font-medium hover:bg-[#F4511E] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {error && (
        <p className="absolute -bottom-6 left-0 text-red-400 text-sm">
          {error}
        </p>
      )}
    </form>
  );
};

export default NewsletterForm;
