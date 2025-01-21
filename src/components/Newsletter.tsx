"use client";

import { useState } from "react";
import Image from "next/image";
import { NewsletterForm } from "./ui";
import { NewsletterProps } from "@/types";

const Newsletter = ({ onSubscribe }: NewsletterProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (email: string) => {
    setIsLoading(true);
    try {
      await onSubscribe(email);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background with wave pattern */}
      <div
        className="absolute inset-0 bg-[#121535]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='1440' height='320' viewBox='0 0 1440 320' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 192L48 197.3C96 203 192 213 288 229.3C384 245 480 267 576 245.3C672 224 768 160 864 138.7C960 117 1056 139 1152 160C1248 181 1344 203 1392 213.3L1440 224V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0V192Z' fill='%232196F3' fill-opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Content */}
          <div className="relative text-white max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Don&apos;t Miss Out on Grocery Deals
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              SIGN UP FOR THE UPDATE NEWSLETTER
            </p>
            <NewsletterForm onSubmit={handleSubscribe} isLoading={isLoading} />
          </div>

          {/* Image */}
          <div className="relative w-full md:w-1/2 max-w-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pCoc9Xo7w5SIep3SM7hSlDHt9bll4i.png"
              alt="Grocery Basket"
              width={600}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
