import { FiTruck, FiRefreshCw, FiMessageCircle } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import type { FooterData } from "@/types";
const currentYear = new Date().getFullYear();

export const footerData: FooterData = {
  services: [
    {
      icon: FiTruck,
      title: "Free Delivery",
      description: "For orders above $100.",
    },
    {
      icon: FiRefreshCw,
      title: "90 Days Return",
      description: "If goods have problems",
    },
    {
      icon: FiMessageCircle,
      title: "24/7 supports",
      description: "Dedicate support",
    },
  ],
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "New Products", href: "/products/new" },
      { label: "Top Sellers", href: "/products/top-sellers" },
      { label: "Our Blog", href: "/blog" },
      { label: "About Our Shop", href: "/about" },
      { label: "Secure Shopping", href: "/security" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "New Products", href: "/products/new" },
      { label: "Top Sellers", href: "/products/top-sellers" },
      { label: "Our Blog", href: "/blog" },
      { label: "About Our Shop", href: "/about" },
      { label: "Secure Shopping", href: "/security" },
    ],
  },
  information: {
    title: "Information",
    links: [
      { label: "New Products", href: "/products/new" },
      { label: "Top Sellers", href: "/products/top-sellers" },
      { label: "Our Blog", href: "/blog" },
      { label: "About Our Shop", href: "/about" },
      { label: "Secure Shopping", href: "/security" },
    ],
  },
  socialLinks: [
    {
      platform: "Facebook",
      icon: FaFacebookF,
      href: "https://facebook.com",
    },
    {
      platform: "Twitter",
      icon: FaTwitter,
      href: "https://twitter.com",
    },
    {
      platform: "Dribbble",
      icon: FaDribbble,
      href: "https://dribbble.com",
    },
    {
      platform: "Instagram",
      icon: FaInstagram,
      href: "https://instagram.com",
    },
    {
      platform: "LinkedIn",
      icon: FaLinkedinIn,
      href: "https://linkedin.com",
    },
  ],
  copyright: `© Copyright ${currentYear} powered by DevTabibur Rahman`,
};
