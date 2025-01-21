export interface SocialLink {
  platform: string;
  url: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface ContactInfo {
  address: string;
  phones: string[];
  email: string;
}

export interface FooterProps {
  description?: string;
  contactInfo?: ContactInfo;
  columns?: FooterColumn[];
  socialLinks?: SocialLink[];
  logo?: {
    src: string;
    alt: string;
  };
}
