'use client'

// import { Button } from "@/components/ui/button"
import { TiMinus, TiPlus } from "react-icons/ti";


interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  max: number;
  min?: number;
}

const QuantitySelector = ({
  quantity,
  onChange,
  max,
  min = 1
}: QuantitySelectorProps) => {
  const decrease = () => {
    if (quantity > min) {
      onChange(quantity - 1)
    }
  }

  const increase = () => {
    if (quantity < max) {
      onChange(quantity + 1)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <button
        // variant="outline"
        // size="icon"
        onClick={decrease}
        disabled={quantity <= min}
        className="h-8 w-8"
      >
        <TiMinus className="h-4 w-4" />
      </button>
      
      <span className="w-12 text-center">{quantity}</span>
      
      <button
        // variant="outline"
        // size="icon"
        onClick={increase}
        disabled={quantity >= max}
        className="h-8 w-8"
      >
        <TiPlus className="h-4 w-4" />
      </button>
      
      <span className="text-sm text-gray-500">
        ({max} availability)
      </span>
    </div>
  )
}

export default QuantitySelector;
