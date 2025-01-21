import Link from "next/link";

import type { VendorSectionProps } from "@/types/vendor";
import { VendorCard } from "./ui";

export const VendorSection = ({ vendors }: VendorSectionProps) => {
  return (
    <section className="py-12">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#1A237E] text-2xl md:text-3xl font-bold">
            Weekly Top Vendors
          </h2>
          <Link
            href="/vendors"
            className="text-gray-600 hover:text-[#27AE60] transition-colors"
          >
            All Vendors
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorSection;
