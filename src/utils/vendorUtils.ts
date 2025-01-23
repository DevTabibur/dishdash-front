import type { Vendor, SortBy } from "@/types/vendorList";

export const sortVendors = (vendors: Vendor[], sortBy: SortBy): Vendor[] => {
  return [...vendors].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime()
        );
      case "oldest":
        return (
          new Date(a.joinedDate).getTime() - new Date(b.joinedDate).getTime()
        );
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });
};

export const filterVendors = (
  vendors: Vendor[],
  searchQuery: string,
): Vendor[] => {
  const query = searchQuery.toLowerCase().trim();
  return vendors.filter(
    (vendor) =>
      vendor.name.toLowerCase().includes(query) ||
      vendor.id.toLowerCase().includes(query),
  );
};

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
