import { FaTruck, FaShieldAlt, FaCreditCard, FaHeadset } from "react-icons/fa";
import type { ShippingFeaturesProps, ShippingFeature } from "@/types";
import { ShippingCard } from "./ui";

const defaultFeatures: ShippingFeature[] = [
  {
    id: "1",
    title: "Free Shipping",
    subtitle: "Free shipping all over the US",
    icon: <FaTruck />,
  },
  {
    id: "2",
    title: "100% Satisfaction",
    subtitle: "Free shipping all over the US",
    icon: <FaShieldAlt />,
  },
  {
    id: "3",
    title: "Secure Payments",
    subtitle: "Free shipping all over the US",
    icon: <FaCreditCard />,
  },
  {
    id: "4",
    title: "24/7 Support",
    subtitle: "Free shipping all over the US",
    icon: <FaHeadset />,
  },
];

const ShippingSection = ({
  features = defaultFeatures,
}: ShippingFeaturesProps) => {
  return (
    <section className="py-12">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <ShippingCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;
