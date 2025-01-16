// import { Mail, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react'
// import { Button } from '@/components/ui/button'

interface SocialShareProps {
  url: string;
  title: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = [
    {
      icon: Mail,
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      color: 'bg-[#EA4335] hover:bg-[#EA4335]/90'
    },
    {
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'bg-[#1DA1F2] hover:bg-[#1DA1F2]/90'
    },
    {
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-[#1877F2] hover:bg-[#1877F2]/90'
    },
    {
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'bg-[#0A66C2] hover:bg-[#0A66C2]/90'
    },
    {
      icon: Share2,
      href: `whatsapp://send?text=${encodedTitle}%20${encodedUrl}`,
      color: 'bg-[#25D366] hover:bg-[#25D366]/90'
    }
  ]

  return (
    <div className="flex gap-2">
      {shareLinks.map((link, index) => {
        const Icon = link.icon
        return (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`${link.color} text-white`}
            asChild
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="size-8"
            >
              <Icon className="size-4" />
            </a>
          </Button>
        )
      })}
    </div>
  )
}

