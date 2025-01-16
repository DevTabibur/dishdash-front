interface PriceDisplayProps {
    originalPrice: number;
    discountPrice: number;
    showPerUnit?: boolean;
  }
  
  const PriceDisplay = ({
    originalPrice,
    discountPrice,
    showPerUnit = false
  }: PriceDisplayProps) => {
    const formatPrice = (price: number) => {
      return price.toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })
    }
  
    return (
      <div className="space-y-1">
        <div className="text-gray-500 line-through">
          ${formatPrice(originalPrice)}{showPerUnit && ' /pc'}
        </div>
        <div className="text-2xl font-bold text-[#ff0000]">
          ${formatPrice(discountPrice)}{showPerUnit && ' /pc'}
        </div>
      </div>
    )
  }
  
  export default PriceDisplay;
  
  