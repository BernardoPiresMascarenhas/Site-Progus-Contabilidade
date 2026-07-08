import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  featured?: boolean;
}

export interface Stat {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  companyType: string;
  message: string;
}

export type FormStatus = "idle" | "submitting" | "success" | "error";
