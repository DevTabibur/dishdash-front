export interface ProductCategorySidebar {
  id: string;
  name: string;
  count: number;
  slug: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface ProductCategorySidebarProps {
  categories: ProductCategorySidebar[];
  selectedCategory?: string;
  onCategorySelect: (category: string) => void;
}

export interface VendorDetailsProps {
  vendorId: string;
}
