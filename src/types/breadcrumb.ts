export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbProps {
  title?: string;
  items?: BreadcrumbItem[];
  className?: string;
}
