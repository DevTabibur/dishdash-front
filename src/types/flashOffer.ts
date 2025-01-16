export interface FlashOfferProps {
  logo?: string;
  discount: {
    amount: number;
    currency?: string;
    description: string;
  };
  delivery: {
    time: string;
    expiryDate: string;
  };
  image: string;
  href: string;
  backgroundColor?: string;
}
