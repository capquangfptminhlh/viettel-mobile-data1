export interface CallBenefits {
  internal?: string; // e.g., "Miễn phí cuộc gọi nội mạng dưới 10 phút"
  external?: string; // e.g., "50 phút gọi ngoại mạng"
}

export type PackageCategory = 'hot' | 'data' | 'social' | 'combo' | 'long_term';

export interface TelecomPackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  dataLimit: string;
  dataPerDay: string;
  calls?: CallBenefits;
  social?: string[]; // e.g. ['youtube', 'tiktok', 'facebook']
  category: PackageCategory;
  description: string;
  benefits: string[];
  rules: string[];
  popular?: boolean;
}

export interface AgentConfig {
  agentCode: string; // The affiliate ID, e.g., "352525287" or "DA"
  supportPhone: string; // e.g., "0981.234.567"
  zaloLink: string; // e.g., "https://zalo.me/0981234567"
  agentName: string; // e.g., "Đại Lý Cước Viettel Online"
}

export interface FAQItem {
  question: string;
  answer: string;
}
