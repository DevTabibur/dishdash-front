export interface CategoryItem {
  id: number;
  prefix: string;
  title: string;
  image: string;
  backgroundColor: string;
  href?: string; // Make href optional
}

export interface CategoryCardProps {
  item: CategoryItem;
}

export interface CategoryMainProps {
  categories: CategoryItem[];
}
