export interface SubMenuItem {
    id: string
    title: string
    href: string
  }
  
  export interface MenuItem {
    id: string
    title: string
    href?: string
    items?: SubMenuItem[]
  }
  
  export interface NavigationItem {
    id: string
    title: string
    href?: string
    items?: MenuItem[]
  }
  
  