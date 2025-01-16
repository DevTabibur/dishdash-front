export interface ContactFormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  href: Url;
  id: string;
  name: string;
  icon: React.ReactNode;
  placeholder: string;
  type: string;
}
