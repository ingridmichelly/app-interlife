export interface User {
  id: string;
  email: string;
  name?: string;
  hasCompletedOnboarding: boolean;
  preferences?: UserPreferences;
}

export interface UserPreferences {
  country?: string;
  travelDate?: string;
  travelGoal?: string;
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  description: string;
  documentation: string[];
  visaTypes: VisaType[];
  costs: CountryCosts;
  schools: School[];
  accommodations: Accommodation[];
  flightInfo: string;
}

export interface VisaType {
  name: string;
  required: boolean;
  description: string;
  cost?: string;
}

export interface CountryCosts {
  initialCosts: string;
  monthlyLiving: string;
  currency: string;
}

export interface School {
  name: string;
  type: string;
  priceRange: string;
}

export interface Accommodation {
  type: string;
  priceRange: string;
  description: string;
}

export interface PremiumGuide {
  countryId: string;
  countryName: string;
  price: number;
  content: GuideContent;
}

export interface GuideContent {
  living: string[];
  shopping: ShoppingInfo[];
  transport: TransportInfo[];
  tourism: TourismInfo[];
  dailyServices: string[];
}

export interface ShoppingInfo {
  name: string;
  type: string;
  region: string;
  tips: string;
}

export interface TransportInfo {
  type: string;
  howToUse: string;
  tips: string[];
}

export interface TourismInfo {
  name: string;
  worthIt: boolean;
  description: string;
  estimatedCost?: string;
}

export interface QuizAnswer {
  duration: string;
  budget: string;
  preference: string;
  goal: string;
}

export interface QuizRecommendation {
  country: string;
  programType: string;
  estimatedCost: string;
  justification: string;
}

export interface ChatMessage {
  id: string;
  userId: string;
  userName: string;
  message: string;
  timestamp: Date;
  countryTopic?: string;
}
