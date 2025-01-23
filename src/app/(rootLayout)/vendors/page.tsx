import { Breadcrumb } from "@/components";
import VendorList from "@/components/VendorList";
import { Vendor } from "@/types";

const sampleVendors: Vendor[] = [
  {
    id: "VEN001",
    name: "Fresh Foods Market",
    logo: "/placeholder.svg",
    rating: 4.8,
    totalReviews: 1250,
    location: "New York, USA",
    joinedDate: "2023-01-15",
    totalProducts: 156,
    isVerified: true,
  },
  {
    id: "VEN002",
    name: "Organic Valley",
    logo: "/placeholder.svg",
    rating: 4.6,
    totalReviews: 890,
    location: "Los Angeles, USA",
    joinedDate: "2023-03-22",
    totalProducts: 98,
    isVerified: true,
  },
  // Add more sample vendors as needed
];

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb title="Our Vendors" />
      <VendorList initialVendors={sampleVendors} totalResults={85} />
    </div>
  );
};

export default page;
