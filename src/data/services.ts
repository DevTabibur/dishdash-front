import { FiShoppingBag, FiTruck, FiUsers, FiHeadphones } from 'react-icons/fi'
import type { Service } from '@/types/service'

export const services: Service[] = [
  {
    id: '1',
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platform with inventory management and payment processing.',
    icon: <FiShoppingBag className="w-6 h-6" />,
    features: [
      'Product management',
      'Inventory tracking',
      'Secure payments',
      'Order processing'
    ]
  },
  {
    id: '2',
    title: 'Delivery Management',
    description: 'Efficient delivery tracking and management system for your business.',
    icon: <FiTruck className="w-6 h-6" />,
    features: [
      'Real-time tracking',
      'Route optimization',
      'Delivery scheduling',
      'Status updates'
    ]
  },
  {
    id: '3',
    title: 'Vendor Management',
    description: 'Comprehensive vendor management system for multiple sellers.',
    icon: <FiUsers className="w-6 h-6" />,
    features: [
      'Vendor onboarding',
      'Performance tracking',
      'Payment management',
      'Analytics dashboard'
    ]
  },
  {
    id: '4',
    title: 'Customer Support',
    description: '24/7 customer support system with ticket management.',
    icon: <FiHeadphones className="w-6 h-6" />,
    features: [
      'Ticket system',
      'Live chat',
      'Knowledge base',
      'Support analytics'
    ]
  }
]

