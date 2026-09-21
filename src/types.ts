export type CampaignVertical = 
  | 'configuratori_3d' 
  | 'formazione_vr' 
  | 'esperienze_360_ar' 
  | 'fiere_eventi';

export interface CampaignData {
  id: CampaignVertical;
  name: string;
  tag: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  targetAudience: string;
  coreProblem: string;
  adPromise: string;
  primaryCta: string;
  secondaryCta: string;
  accentColor: string;
}

export interface DemoItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  thumbnail: string;
  iframeUrl?: string;
  videoUrl?: string;
  description: string;
  keyFeatures: string[];
  browserReady: boolean;
  noHeadsetRequired: boolean;
}

export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  problem: string;
  solution: string;
  technology: string;
  result: string;
  proofStat: string;
  image: string;
  fullQuote?: string;
  testimonialAuthor?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Costi & Tempi' | 'Tecnologia' | 'Processo';
}

export interface LeadFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  phoneNumber?: string;
  primaryObjective: string;
  customObjective?: string;
  projectTimeline?: string;
  estimatedBudget?: string;
  message?: string;
  selectedDate?: string;
  selectedTimeSlot?: string;
  consentPrivacy: boolean;
  consentMarketing?: boolean;
}

export interface TrackingEvent {
  id: string;
  eventName: string;
  timestamp: string;
  payload: Record<string, any>;
}

export interface UtmParameters {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid?: string;
}
