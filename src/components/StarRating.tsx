import { FiStar } from 'react-icons/fi'

interface StarRatingProps {
  rating: number
  maxRating?: number
}

const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxRating }).map((_, index) => (
        <FiStar
          key={index}
          className={`w-5 h-5 ${
            index < rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

export default StarRating

