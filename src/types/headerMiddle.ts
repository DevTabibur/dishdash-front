export interface HeaderMiddleProps {
    location: string;
    wishlistCount?: number;
    cartCount?: number;
  }
  
  export interface SearchBarProps {
    onSearch: (query: string) => void;
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
  }
  
  