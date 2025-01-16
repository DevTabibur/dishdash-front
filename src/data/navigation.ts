import { NavigationItem } from "@/types";


export const mainNavItems: NavigationItem[] = [
  {
    id: 'shop',
    title: 'Shop By Department',
    items: [
      {
        id: 'electronic-devices',
        title: 'Electronic Devices',
        items: [
          { id: 'mobiles', title: 'Mobiles', href: '/shop/electronic-devices/mobiles' },
          { id: 'tablets', title: 'Tablets', href: '/shop/electronic-devices/tablets' },
          { id: 'laptops', title: 'Laptops', href: '/shop/electronic-devices/laptops' },
          { id: 'audio', title: 'Audio', href: '/shop/electronic-devices/audio' },
          { id: 'cameras', title: 'Cameras & Drones', href: '/shop/electronic-devices/cameras' },
          { id: 'monitors', title: 'Monitors', href: '/shop/electronic-devices/monitors' },
          { id: 'smartwatches', title: 'Smartwatches', href: '/shop/electronic-devices/smartwatches' },
          { id: 'gaming', title: 'Console Gaming', href: '/shop/electronic-devices/gaming' },
          { id: 'security', title: 'Security Cameras', href: '/shop/electronic-devices/security' },
          { id: 'camcorder', title: 'Action Camcorder', href: '/shop/electronic-devices/camcorder' },
          { id: 'video', title: 'Video & Camera', href: '/shop/electronic-devices/video' }
        ]
      },
      {
        id: 'electronic-accessories',
        title: 'Electronic Accessories',
        items: [
          { id: 'mobile-accessories', title: 'Mobile Accessories', href: '/shop/accessories/mobile' },
          { id: 'computer-accessories', title: 'Computer Accessories', href: '/shop/accessories/computer' }
        ]
      },
      {
        id: 'tv-appliances',
        title: 'TV & Home Appliances',
        items: [
          { id: 'tv', title: 'TV', href: '/shop/tv-appliances/tv' },
          { id: 'kitchen', title: 'Kitchen Appliances', href: '/shop/tv-appliances/kitchen' }
        ]
      },
      {
        id: 'health-beauty',
        title: 'Health & Beauty',
        href: '/shop/health-beauty'
      },
      {
        id: 'babies-toys',
        title: 'Babies & Toys',
        href: '/shop/babies-toys'
      },
      {
        id: 'groceries-pets',
        title: 'Groceries & Pets',
        href: '/shop/groceries-pets'
      },
      {
        id: 'home-lifestyle',
        title: 'Home & Lifestyle',
        href: '/shop/home-lifestyle'
      },
      {
        id: 'mens-fashion',
        title: 'Men\'s Fashion',
        href: '/shop/mens-fashion'
      },
      {
        id: 'womens-fashion',
        title: 'Women\'s Fashion',
        href: '/shop/womens-fashion'
      },
      {
        id: 'sports-travel',
        title: 'Sports & Travel',
        href: '/shop/sports-travel'
      },
      {
        id: 'fashion-accessories',
        title: 'Fashion Accessories',
        href: '/shop/fashion-accessories'
      }
    ]
  },
  {
    id: 'home',
    title: 'Home',
    href: '/'
  },
  {
    id: 'shop-page',
    title: 'Shop',
    href: '/shop'
  },
  {
    id: 'about',
    title: 'About',
    href: '/about'
  },
  {
    id: 'blog',
    title: 'Blog',
    href: '/blog'
  },
  {
    id: 'page',
    title: 'Page',
    href: '/page'
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '/contact'
  }
]

