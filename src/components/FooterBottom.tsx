import Image from "next/image";
import type { FooterBottomProps } from "@/types";

import PaymentMethod1 from "../../public/images/payment_methods/payment-method (1).png";

const FooterBottom = ({
  copyright = `DishDash © ${new Date().getFullYear()}. All Rights Reserved`,
}: FooterBottomProps) => {
  return (
    <div className="border-t bg-[#f3faf2]">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">{copyright}</p>

          {/* Payment Methods */}
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">We Are Accepting</span>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Image
                  src={PaymentMethod1.src}
                  alt={"payment method"}
                  width={250}
                  height={250}
                  // className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
