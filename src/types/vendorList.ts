export interface Vendor {
  id: string;
  name: string;
  logo: string;
  rating: number;
  totalReviews: number;
  location: string;
  joinedDate: string;
  totalProducts: number;
  isVerified: boolean;
}

export interface VendorListProps {
  initialVendors: Vendor[];
  totalResults: number;
}

export interface VendorCardProps {
  vendor: Vendor;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
  initialValue?: string;
}

export interface SortOption {
  label: string;
  value: string;
}

export interface SortDropdownProps {
  options: SortOption[];
  value: string;
  onChange: (value: string) => void;
}

export type SortBy = "newest" | "oldest" | "rating" | "name";
