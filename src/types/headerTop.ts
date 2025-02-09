export interface NavItem {
  label: string;
  href?: string;
  onClick?: () => void;
  items?: NavItem[];
}

export interface HeaderProps {
  navItems?: NavItem[];
}

export interface DropdownProps {
  items: NavItem[];
  trigger: React.ReactNode;
}
