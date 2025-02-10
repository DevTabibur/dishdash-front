import type { ShippingCardProps } from "@/types";

const ShippingCard = ({ feature }: ShippingCardProps) => {
  return (
    <div className="bg-[#E8F5E9]/30 rounded-2xl p-6 flex items-center gap-4">
      {/* Icon */}
      <div className="w-12 h-12 rounded-full bg-[#27AE60] flex items-center justify-center flex-shrink-0">
        <div className="text-white w-6 h-6">{feature.icon}</div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-[#1A237E] font-bold text-lg mb-1">
          {feature.title}
        </h3>
        <p className="text-gray-600 text-sm">{feature.subtitle}</p>
      </div>
    </div>
  );
};

export default ShippingCard;
