import Image from "next/image";
import Link from "next/link";
import type { BrandLogoProps } from "@/types/brands";

const BrandLogo = ({ brand }: BrandLogoProps) => {
  return (
    <Link
      href={brand.href}
      className="block transition-transform hover:scale-105"
    >
      <div className="relative w-28 h-28 md:w-32 md:h-32">
        <Image
          src={brand.image || "/placeholder.svg"}
          alt={brand.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 112px, 128px"
        />
      </div>
    </Link>
  );
};

export default BrandLogo;
