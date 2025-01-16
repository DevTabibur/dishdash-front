export interface MenuItem {
    label: string;
    href: string;
    isNew?: boolean;
    icon?: string;
    subItems?: MenuItem[];
  }
  
  export interface HeaderMainProps {
    phone?: string;
  }
  
  export interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    menuItems: MenuItem[];
  }
  
  export interface CategoryMenuProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  