"use client";

import { useState } from "react";
import Image from "next/image";
// import { cn } from '@/lib/utils'
import type { ProductImage } from "@/types";

interface ImageGalleryProps {
  images: ProductImage[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(index)}
            // className={cn(
            //   "relative w-16 h-16 border-2 rounded overflow-hidden",
            //   selectedImage === index ? "border-[#fe759c]" : "border-gray-200"
            // )}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 aspect-square">
        <Image
          src={images[selectedImage].url}
          alt={images[selectedImage].alt}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default ImageGallery;
