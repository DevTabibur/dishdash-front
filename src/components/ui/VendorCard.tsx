import Image from "next/image";
import Link from "next/link";

import type { VendorCardProps } from "@/types/vendor";
import { CircularLogo, VendorCurvedShape } from ".";

const VendorCard = ({ vendor }: VendorCardProps) => {
  return (
    <Link href={vendor.href} className="block group">
      <div
        className="relative rounded-2xl overflow-hidden transition-transform duration-200 group-hover:scale-[1.02]"
        style={{ backgroundColor: vendor.backgroundColor }}
      >
        {/* Top Shape with Logo */}
        <div className="relative h-24">
          <VendorCurvedShape />
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 z-10">
            {/* <CircularLogo icon={vendor.logo.icon} text={vendor.logo.text} /> */}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pt-12 pb-6 text-center">
          {/* Vendor Name */}
          <h3 className="text-[#1A237E] text-2xl font-bold mb-1">
            {vendor.name}
          </h3>

          {/* Delivery Time */}
          <p className="text-gray-600 text-sm mb-3">
            Delivery by {vendor.deliveryTime}
          </p>

          {/* Promotion Badge */}
          <div className="inline-block bg-[#FF5722] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            ${vendor.promotion.amount} off {vendor.promotion.description}
          </div>

          {/* Product Thumbnails */}
          <div className="flex items-center justify-center gap-3">
            {vendor.products.map((product) => (
              <div
                key={product.id}
                className="relative w-12 h-12 bg-white rounded-full p-2 shadow-sm"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.alt}
                  fill
                  className="object-contain p-1.5"
                  sizes="48px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VendorCard;
