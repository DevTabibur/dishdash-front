export interface FlashSaleItem {
  id: number;
  title: string;
  image: string;
  backgroundColor: string;
  backgroundImage: string;
  href: string;
  endDate: string;
}

export interface FlashSaleCardProps {
  item: FlashSaleItem;
}

export interface FlashSalesProps {
  items: FlashSaleItem[];
}

export interface CountdownProps {
  endDate: string;
}
