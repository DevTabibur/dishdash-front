export interface NavItem {
    label: string;
    href?: string;
    items?: NavItem[];
  }
  
  export interface HeaderProps {
    navItems?: NavItem[];
  }
  
  export interface DropdownProps {
    items: NavItem[];
    trigger: React.ReactNode;
  }
  
  