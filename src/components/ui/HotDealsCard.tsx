"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { HotDealsCardProps, CountdownTime } from "@/types";

const calculateTimeLeft = (endDate: string): CountdownTime => {
  const difference = +new Date(endDate) - +new Date();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const HotDealsCard = ({ deal }: HotDealsCardProps) => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(
    calculateTimeLeft(deal.endDate),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deal.endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [deal.endDate]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl h-full"
      style={{
        background:
          deal.backgroundColor ||
          "linear-gradient(135deg, #27AE60 0%, #1F8B4D 100%)",
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,25 C25,25 25,75 50,75 C75,75 75,25 100,25' stroke='%23FFFFFF' fill='none' stroke-width='3'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative p-8 flex flex-col">
        {/* Image */}
        <div className="relative h-32 mb-6">
          <Image
            src={deal.image || "/placeholder.svg"}
            alt={deal.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-white text-4xl font-bold mb-8">{deal.title}</h3>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-2">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className="bg-white rounded-lg px-4 py-2">
                <div className="text-xl font-bold text-[#1A237E]">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-600 capitalize">{key}</div>
              </div>
            ))}
          </div>

          {/* Shop Now Button */}
          <Link
            href={deal.href}
            className="inline-flex items-center gap-2 bg-[#FF5722] text-white px-8 py-3 rounded-full hover:bg-[#F4511E] transition-colors"
          >
            <span className="font-medium">Shop Now</span>
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotDealsCard;
