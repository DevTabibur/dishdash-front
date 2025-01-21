"use client";

import Image from "next/image";
import Link from "next/link";
import type { FooterProps } from "@/types/footer";
import {
  FaFacebookF,
  FaLocationDot,
  FaPhoneVolume,
  FaSquareInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FooterBottom } from ".";

const defaultColumns = [
  {
    title: "Information",
    links: [
      { label: "Become a Vendor", href: "/become-vendor" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Our Suppliers", href: "/suppliers" },
      { label: "Extended Plan", href: "/plan" },
      { label: "Community", href: "/community" },
    ],
  },
  {
    title: "Customer Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "Report Abuse", href: "/report" },
      { label: "Submit and Dispute", href: "/dispute" },
      { label: "Policies & Rules", href: "/policies" },
      { label: "Online Shopping", href: "/shopping" },
    ],
  },
  {
    title: "My Account",
    links: [
      { label: "My Account", href: "/account" },
      { label: "Order History", href: "/orders" },
      { label: "Shopping Cart", href: "/cart" },
      { label: "Compare", href: "/compare" },
      { label: "Help Ticket", href: "/tickets" },
      { label: "Wishlist", href: "/wishlist" },
    ],
  },
  {
    title: "Daily Groceries",
    links: [
      { label: "Dairy & Eggs", href: "/category/dairy-eggs" },
      { label: "Meat & Seafood", href: "/category/meat-seafood" },
      { label: "Breakfast Food", href: "/category/breakfast" },
      { label: "Household Supplies", href: "/category/household" },
      { label: "Bread & Bakery", href: "/category/bakery" },
      { label: "Pantry Staples", href: "/category/pantry" },
    ],
  },
];

const defaultContactInfo = {
  address: "789 Inner Lane, Biyes park, California, USA",
  phones: ["+00 123 456 789", "+00 987 654 012"],
  email: "support24@marketpro.com",
};

const Footer = ({
  description = "We're Grocery Shop, an innovative team of food suppliers.",
  contactInfo = defaultContactInfo,
  columns = defaultColumns,
  logo = {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Vr6VyemSmYCBWpQcYkEBv2aB6O4iyr.png",
    alt: "Marketpro",
  },
}: FooterProps) => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo and Contact Info */}
          <div className="md:col-span-3 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-block mb-4">
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={180}
                height={48}
                className="h-12 w-auto"
              />
            </Link>

            {/* Description */}
            <p className="text-gray-600 mb-6 text-sm">{description}</p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaLocationDot className="w-5 h-5 text-[#27AE60] mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  {contactInfo.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneVolume className="w-5 h-5 text-[#27AE60] flex-shrink-0" />
                <div className="text-sm text-gray-600">
                  {contactInfo.phones.map((phone, index) => (
                    <span key={phone}>
                      {phone}
                      {index < contactInfo.phones.length - 1 && (
                        <span className="mx-2 text-gray-400">or</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <IoMdMail className="w-5 h-5 text-[#27AE60] flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-gray-600 hover:text-[#27AE60] transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Footer Columns */}
          {columns.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-[#1A237E] font-semibold text-base">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#27AE60] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Shop on The Go */}
          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-[#1A237E] font-semibold text-base mb-4">
              Shop on The Go
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Marketpro App is available. Get it now
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <Link href="#" className="inline-block w-36">
                <Image
                  src="/placeholder.svg"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </Link>
              <Link href="#" className="inline-block w-36">
                <Image
                  src="/placeholder.svg"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaXTwitter, href: "#" },
                { icon: FaSquareInstagram, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center hover:bg-[#27AE60] transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-[#27AE60] group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};
export default Footer;
