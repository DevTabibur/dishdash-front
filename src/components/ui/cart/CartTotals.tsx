import { CartTotalsProps } from "@/types";

const CartTotals = ({ totals, onCheckout }: CartTotalsProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-6">Cart Totals</h2>

      <div className="space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${totals.subtotal.toFixed(2)}</span>
        </div>

        {/* Estimated Delivery */}
        <div className="flex justify-between">
          <span className="text-gray-600">Estimated Delivery</span>
          <span className="font-medium text-green-600">
            {typeof totals.delivery === "number"
              ? `$${totals.delivery.toFixed(2)}`
              : totals.delivery}
          </span>
        </div>

        {/* Estimated Taxes */}
        <div className="flex justify-between">
          <span className="text-gray-600">Estimated Taxes</span>
          <span className="font-medium">USD {totals.taxes.toFixed(2)}</span>
        </div>

        {/* Divider */}
        <div className="border-t my-4"></div>

        {/* Total */}
        <div className="flex justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">${totals.total.toFixed(2)}</span>
        </div>

        {/* Checkout Button */}
        <button
          onClick={onCheckout}
          className="w-full bg-[#FF5722] text-white py-3 rounded-lg hover:bg-[#F4511E] transition-colors mt-6"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotals;
