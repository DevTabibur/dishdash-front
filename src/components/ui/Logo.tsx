import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

import logo from "../../../public/images/salesghor.png"

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizes = {
    sm: { width: 50, height: 40 },
    md: { width: 153, height: 40 },
    lg: { width: 180, height: 71 }
  }

  return (
    <div className={`inline-block ${className}`}>
      <Image
        src={logo}
        alt="SALESGHOR"
        width={sizes[size].width}
        height={sizes[size].height}
        className="w-auto h-auto"
        priority
      />
    </div>
  )
}

export default Logo
