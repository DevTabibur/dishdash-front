import type React from "react";

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactSocialLink {
  icon: React.ReactNode;
  url: string;
  name: string;
}

export interface ContactInfoItem {
  icon: React.ReactNode;
  title: string;
  content: string;
}
