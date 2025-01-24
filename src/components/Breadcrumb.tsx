"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { BreadcrumbProps, BreadcrumbItem } from "@/types";
import { IoHome } from "react-icons/io5";

const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const paths = pathname.split("/").filter(Boolean);

  return paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join("/")}`;
    const label =
      path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");
    return { label, href };
  });
};

const Breadcrumb = ({
  title,
  items: propItems,
  className = "",
}: BreadcrumbProps) => {
  const pathname = usePathname();
  const items = propItems || generateBreadcrumbs(pathname);
  const pageTitle =
    title || (items.length > 0 ? items[items.length - 1].label : "");
  console.log("pageTitle", pageTitle);

  return (
    <div className={`bg-[#FFF5F5] ${className}`}>
      <div className="max-w-[90%] mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 gap-2">
          {/* Page Title */}
          <h1 className="text-[#1A237E] text-xl font-semibold ">{pageTitle}</h1>

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm ">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#27AE60] transition-colors flex items-center gap-1"
            >
              <IoHome className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>

            {items.map((item, index) => (
              <div key={item.href} className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                {index === items.length - 1 ? (
                  <span className="text-[#27AE60]">{item.label}</span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-[#27AE60] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
