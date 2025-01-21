import type { CartProps } from "@/types";
import { CartItem, CartTotals } from "./ui/cart";

const Cart = ({
  items,
  totals,
  onUpdateQuantity,
  onRemove,
  onCheckout,
}: CartProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          {/* Table Headers - Desktop */}
          <div className="hidden sm:grid grid-cols-[80px_1fr_100px_120px_100px] gap-4 pb-4 border-b">
            <div className="text-gray-500">Delete</div>
            <div className="text-gray-500">Product Name</div>
            <div className="text-gray-500 text-right">Price</div>
            <div className="text-gray-500 text-center">Quantity</div>
            <div className="text-gray-500 text-right">Subtotal</div>
          </div>

          {/* Cart Items */}
          <div className="divide-y">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))}
          </div>
        </div>

        {/* Cart Totals */}
        <div className="lg:w-80">
          <CartTotals totals={totals} onCheckout={onCheckout} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
