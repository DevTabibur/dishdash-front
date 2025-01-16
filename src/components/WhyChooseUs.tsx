import { FiCheckCircle, FiMessageCircle, FiThumbsUp, FiHelpCircle } from 'react-icons/fi'
import type { Feature } from '@/types/feature'
import FeatureCard from './FeatureCard'

const features: Feature[] = [
  {
    id: '1',
    title: 'Quality',
    description: 'Follow a hashtag growth total posts, videos and images. more revitions',
    icon: <FiCheckCircle className="w-8 h-8 text-white" />,
    color: {
      from: '#FF5757',
      to: '#FF3D3D',
      shadow: 'rgba(255, 61, 61, 0.3)'
    }
  },
  {
    id: '2',
    title: 'Communication',
    description: 'Follow a hashtag growth total posts, videos and images. more revitions',
    icon: <FiMessageCircle className="w-8 h-8 text-white" />,
    color: {
      from: '#FFB840',
      to: '#FFA726',
      shadow: 'rgba(255, 167, 38, 0.3)'
    }
  },
  {
    id: '3',
    title: 'Reliability',
    description: 'Follow a hashtag growth total posts, videos and images. more revitions',
    icon: <FiThumbsUp className="w-8 h-8 text-white" />,
    color: {
      from: '#3B82F6',
      to: '#2563EB',
      shadow: 'rgba(37, 99, 235, 0.3)'
    }
  },
  {
    id: '4',
    title: 'Support',
    description: 'Follow a hashtag growth total posts, videos and images. more revitions',
    icon: <FiHelpCircle className="w-8 h-8 text-white" />,
    color: {
      from: '#22C55E',
      to: '#16A34A',
      shadow: 'rgba(22, 163, 74, 0.3)'
    }
  }
]

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              isLast={index === features.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

