import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan?: string;
  bgImage?: string;
}

export interface RFQFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  budget: string;
  serviceInterest: string;
  message: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export enum BudgetRange {
  LOW = "Menos de 1M CLP",
  MEDIUM = "1M - 5M CLP",
  HIGH = "5M - 20M CLP",
  ENTERPRISE = "+20M CLP"
}

export enum ServiceType {
  MARKETING_AUTOMATION = "Marketing Automation",
  INFLUENCERS_IA = "Influencers IA & UGC",
  PERFORMANCE_ADS = "Performance Ads",
  CHATBOTS = "Chatbots con IA"
}