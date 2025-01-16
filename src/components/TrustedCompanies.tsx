'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const companies = [
  { name: 'Coinbase', logo: '/images/partners/coinbase.png' },
  { name: 'Spotify', logo: '/images/partners/spotify.png' },
  { name: 'Slack', logo: '/images/partners/slack.png' },
  { name: 'Dropbox', logo: '/images/partners/dropbox.png' },
  { name: 'Webflow', logo: '/images/partners/webflow.png' },
  { name: 'Zoom', logo: '/images/partners/zoom.png' }
]

const TrustedCompanies = () => {
  return (
    <section className="py-12 border-t">
      <div className="container mx-auto px-4">
        <motion.p 
          className="text-center text-sm text-gray-500 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Trusted by 4,000+ companies
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {companies.map((company) => (
            <div key={company.name} className="w-24 md:w-32">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={120}
                height={30}
                className="w-full h-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedCompanies

