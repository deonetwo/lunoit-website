export type ThemeMode = 'light' | 'dark';
export type Language = 'id' | 'en';

export interface AppFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface AppDownload {
  label: string;
  url: string;
  platform: string;
  primary?: boolean;
  notes?: string;
}

export interface AppFAQ {
  question: string;
  answer: string;
}

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  scopes?: { scope: string; purpose: string }[];
  highlight?: { title: string; text: string; link?: { label: string; url: string } };
}

export interface LegalDocument {
  lastUpdated: string;
  effectiveDate?: string;
  summary: string;
  sections: LegalSection[];
}

export interface AppAccent {
  brand: string;
  pill: string;
  badge: string;
  bgButton: string;
  bgButtonHover: string;
  textAccent: string;
  borderAccent: string;
  subtleGlow: string;
}

export interface AppScreenshot {
  id: string;
  title: string;
  shortLabel: string;
  tag?: string;
  src: string;
  caption: string;
}

export interface AppConfig {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  shortName: string;
  headline: string;
  tagline: string;
  description: string;
  badge: string;
  version: string;
  status: 'active' | 'in-development' | 'prototype';
  platforms: string[];
  techStack: string[];
  iconUrl: string;
  mockupImageUrl?: string;
  screenshots?: AppScreenshot[];
  mockupPlaceholder?: {
    title: string;
    caption: string;
    tags: string[];
  };
  accent: AppAccent;
  repoUrl: string;
  releasesUrl: string;
  subdomainUrl?: string;
  downloads: AppDownload[];
  features: AppFeature[];
  faqs: AppFAQ[];
  privacyPolicy: LegalDocument;
  termsOfService: LegalDocument;
}

export interface LabApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'active' | 'in-development' | 'prototype' | 'rfc';
  badge: string;
  version?: string;
  techStack: string[];
  features: string[];
  iconUrl?: string;
  subdomainUrl?: string;
  repoUrl?: string;
  releasesUrl?: string;
  primaryAction: {
    label: string;
    action: 'download' | 'explore' | 'roadmap' | 'notify' | 'external';
    url?: string;
  };
}

export interface PlatformRelease {
  platform: 'windows';
  name: string;
  architecture: string;
  format: string;
  fileName: string;
  fileSize: string;
  commandSnippet?: string;
  notes: string;
}
