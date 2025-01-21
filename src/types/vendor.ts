export interface VendorProduct {
  id: string;
  image: string;
  alt: string;
}

export interface Vendor {
  id: string;
  name: string;
  logo: string;
  deliveryTime: string;
  promotion: {
    amount: number;
    description: string;
  };
  products: VendorProduct[];
  backgroundColor: string;
  href: string;
}

export interface VendorCardProps {
  vendor: Vendor;
}

export interface VendorSectionProps {
  vendors: Vendor[];
}
