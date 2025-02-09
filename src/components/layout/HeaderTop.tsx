"use client";
import Link from "next/link";
import { Dropdown } from "@/components/ui";
import type { HeaderProps, NavItem } from "@/types";
import { TiArrowSortedDown } from "react-icons/ti";
import { RiAccountPinCircleFill } from "react-icons/ri";
import toast from "react-hot-toast";

const defaultNavItems: NavItem[] = [
  { label: "Become A Seller", href: "/become-seller" },
  { label: "About us", href: "/about" },
  { label: "Free Delivery", href: "/delivery" },
  { label: "Returns Policy", href: "/returns" },
];

const helpCenterItems: NavItem[] = [
  {
    label: "Call Center",
    href: "/help/call",
    onClick: () => toast.success("Coming Soon!"),
  },
  {
    label: "Live Chat",
    href: "/help/chat",
    onClick: () => toast.success("Coming Soon!"),
  },
];

const HeaderTop = ({ navItems = defaultNavItems }: HeaderProps) => {
  return (
    <header className="bg-[#299e60] text-white">
      <div className="max-w-[90%] mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between lg:h-8 md:h-12 h-1.5 text-sm">
          <nav className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <div className="h-4 w-[1px] bg-white/30 mx-2" />}
                <Link
                  href={index === 0 ? (item.href ?? "#") : "#"} // Ensure it's always a string
                  className="hover:text-gray-200 transition-colors px-2"
                  onClick={(e) => {
                    if (index > 0) {
                      e.preventDefault(); // Prevent navigation
                      toast.success("Coming Soon!");
                    }
                  }}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Dropdown
                items={helpCenterItems}
                trigger={
                  <span className="hover:text-gray-200">Help Center</span>
                }
              />
              <TiArrowSortedDown />
              <div
                className="h-4 w-[1px] bg-white/30"
                style={{ marginInline: "8px" }}
              />
              <Dropdown
                items={[
                  {
                    label: "English",
                    href: "#",
                    onClick: () => toast.success("Coming Soon!"),
                  },
                  {
                    label: "Spanish",
                    href: "#",
                    onClick: () => toast.success("Coming Soon!"),
                  },
                  {
                    label: "French",
                    href: "#",
                    onClick: () => toast.success("Coming Soon!"),
                  },
                ]}
                trigger={<span className="hover:text-gray-200">Eng</span>}
              />
              <TiArrowSortedDown />
              <div
                className="h-4 w-[1px] bg-white/30"
                style={{ marginInline: "8px" }}
              />

              <Link
                href="/account"
                className="flex items-center gap-1 hover:text-gray-200"
              >
                <RiAccountPinCircleFill className="w-4 h-4" />
                <span>My Account</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Tablet and Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-12 text-sm">
          <div className="flex items-center space-x-4">
            <Dropdown
              items={helpCenterItems}
              trigger={
                <div className="flex items-center gap-0.5">
                  <span className="text-xs">Help Center</span>
                  <TiArrowSortedDown className="w-3 h-3" />
                </div>
              }
            />

            <Dropdown
              items={[
                { label: "English", href: "#" },
                { label: "Spanish", href: "#" },
                { label: "French", href: "#" },
              ]}
              trigger={
                <div className="flex items-center gap-0.5">
                  <span className="text-xs">Eng</span>
                  <TiArrowSortedDown className="w-3 h-3" />
                </div>
              }
            />
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/account" className="flex items-center gap-0.5">
              <RiAccountPinCircleFill className="w-3 h-3" />
              <span className="text-xs">My Account</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
