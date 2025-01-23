// import Image from "next/image";
// import Link from "next/link";

// import type { VendorCardProps } from "@/types/vendor";
// import { CircularLogo, VendorCurvedShape } from ".";

// const VendorCard = ({ vendor }: VendorCardProps) => {
//   return (
//     <Link href={vendor.href} className="block group">
//       <div
//         className="relative rounded-2xl overflow-hidden transition-transform duration-200 group-hover:scale-[1.02]"
//         style={{ backgroundColor: vendor.backgroundColor }}
//       >
//         {/* Top Shape with Logo */}
//         <div className="relative h-24">
//           <VendorCurvedShape />
//           <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 z-10">
//             {/* <CircularLogo icon={vendor.logo.icon} text={vendor.logo.text} /> */}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="px-6 pt-12 pb-6 text-center">
//           {/* Vendor Name */}
//           <h3 className="text-[#1A237E] text-2xl font-bold mb-1">
//             {vendor.name}
//           </h3>

//           {/* Delivery Time */}
//           <p className="text-gray-600 text-sm mb-3">
//             Delivery by {vendor.deliveryTime}
//           </p>

//           {/* Promotion Badge */}
//           <div className="inline-block bg-[#FF5722] text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
//             ${vendor.promotion.amount} off {vendor.promotion.description}
//           </div>

//           {/* Product Thumbnails */}
//           <div className="flex items-center justify-center gap-3">
//             {vendor.products.map((product) => (
//               <div
//                 key={product.id}
//                 className="relative w-12 h-12 bg-white rounded-full p-2 shadow-sm"
//               >
//                 <Image
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.alt}
//                   fill
//                   className="object-contain p-1.5"
//                   sizes="48px"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default VendorCard;

import Image from "next/image";
import Link from "next/link";
import {
  FaStar,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBox,
} from "react-icons/fa";
import { formatDate } from "@/utils/vendorUtils";
import type { VendorCardProps } from "@/types/vendorList";

const VendorCard = ({ vendor }: VendorCardProps) => {
  return (
    <Link
      href={`/vendors/${vendor.id}`}
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
    >
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
          <Image
            src={vendor.logo || "/placeholder.svg"}
            alt={vendor.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                {vendor.name}
                {vendor.isVerified && (
                  <FaCheckCircle className="w-4 h-4 text-[#27AE60]" />
                )}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>ID: {vendor.id}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <FaStar className="w-4 h-4 text-yellow-400" />
              <span className="font-medium">{vendor.rating.toFixed(1)}</span>
              <span className="text-sm text-gray-500">
                ({vendor.totalReviews})
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
              <span>{vendor.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaCalendarAlt className="w-4 h-4 text-gray-400" />
              <span>Joined {formatDate(vendor.joinedDate)}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaBox className="w-4 h-4 text-gray-400" />
              <span>{vendor.totalProducts} Products</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VendorCard;
