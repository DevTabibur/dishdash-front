import { Feature } from '@/types/feature'

interface FeatureCardProps {
  feature: Feature
  isLast?: boolean
}

const FeatureCard = ({ feature, isLast = false }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center relative">
      {/* Icon Container */}
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 relative
          bg-gradient-to-br shadow-lg`}
        style={{
          backgroundImage: `linear-gradient(to bottom right, ${feature.color.from}, ${feature.color.to})`,
          boxShadow: `0 4px 14px ${feature.color.shadow}`
        }}
      >
        {feature.icon}
      </div>

      {/* Connecting Arrow */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[calc(100%_-_32px)] w-[calc(100%_-_32px)] h-0.5">
          <div className="w-full h-full border-t-2 border-dashed border-gray-300" />
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 transform rotate-45 border-t-2 border-r-2 border-gray-300"
          />
        </div>
      )}

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-gray-500 text-center max-w-[250px]">
        {feature.description}
      </p>
    </div>
  )
}

export default FeatureCard

