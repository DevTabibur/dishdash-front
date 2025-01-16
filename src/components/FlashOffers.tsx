import { FlashOfferCard } from "./ui";
import FlashOffer1 from "../../public/images/flash-sale/flash-offer-1.png";
import FlashOffer2 from "../../public/images/flash-sale/flash-offer-2.png";
import FlashOfferBrand from "../../public/images/flash-sale/flash-offer-brand.png";

const FlashOffers = () => {
  return (
    <section className="py-12">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FlashOfferCard
            logo={FlashOfferBrand.src}
            discount={{
              amount: 5,
              currency: "$",
              description: "your first order",
            }}
            delivery={{
              time: "6:15am",
              expiryDate: "Aug 5",
            }}
            image={FlashOffer1.src}
            href="/shop"
            backgroundColor="#27AE60"
          />
          <FlashOfferCard
            logo={FlashOfferBrand.src}
            discount={{
              amount: 10,
              currency: "$",
              description: "orders over $50",
            }}
            delivery={{
              time: "8:30pm",
              expiryDate: "Aug 5",
            }}
            image={FlashOffer2.src}
            href="/shop"
            backgroundColor="#2980B9"
          />
        </div>
      </div>
    </section>
  );
};

export default FlashOffers;
