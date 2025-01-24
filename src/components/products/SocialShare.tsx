import { FaEnvelope, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Button } from "../ui";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

interface SocialShareProps {
  url: string;
  title: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      icon: FaEnvelope,
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      color: "bg-[#EA4335] hover:bg-[#EA4335]/90",
    },
    {
      icon: FaXTwitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/90",
    },
    {
      icon: FaFacebookF,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "bg-[#1877F2] hover:bg-[#1877F2]/90",
    },
    {
      icon: FaLinkedinIn,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: "bg-[#0A66C2] hover:bg-[#0A66C2]/90",
    },
    {
      icon: IoLogoWhatsapp,
      href: `whatsapp://send?text=${encodedTitle}%20${encodedUrl}`,
      color: "bg-[#25D366] hover:bg-[#25D366]/90",
    },
  ];

  return (
    <div className="flex gap-2">
      {shareLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className={`${link.color} text-white`}
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
        );
      })}
    </div>
  );
}
