import React from 'react';

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  whatsappMsg: string;
}

export interface Division {
  // Fixed: Added React import to resolve the namespace for ReactNode
  icon: React.ReactNode;
  id: number;
  title: string;
  description: string;
  details: string;
}
