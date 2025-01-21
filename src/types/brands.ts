export interface Brand {
  id: string;
  name: string;
  image: string;
  href: string;
}

export interface BrandCarouselProps {
  title?: string;
  brands: Brand[];
  autoPlayInterval?: number;
  itemsToShow?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

export interface BrandLogoProps {
  brand: Brand;
}
