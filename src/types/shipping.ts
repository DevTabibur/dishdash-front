export interface ShippingFeature {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export interface ShippingFeaturesProps {
  features?: ShippingFeature[];
}

export interface ShippingCardProps {
  feature: ShippingFeature;
}
