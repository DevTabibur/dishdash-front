import React from "react";

export interface IInformation {
  title: string;
  links: IInformationLinkItem[];
}

export interface IInformationLinkItem {
  label: string;
  href: string;
}

export interface ICompany {
  title: string;
  links: ICompanyLinkItem[];
}

export interface ICompanyLinkItem {
  label: string;
  href: string;
}

export interface ISocialLink {
  platform: string;
  href: string;
  icon: React.ComponentType; // Accepts React components
}

export interface IServicesLink {
  icon: React.ComponentType;
  title: string;
  description: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface IQuickLinks {
  title: string;
  links: IQuickLinkItem[];
}

export interface IQuickLinkItem {
  label: string;
  href: string;
}
export interface FooterSocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface FooterData {
  services: IServicesLink[];
  quickLinks: IQuickLinks;
  company: ICompany;
  information: IInformation;
  socialLinks: ISocialLink[];
  copyright: string;
}
