
import React from 'react';
import { Banner, Division } from './types';

export const WHATSAPP_NUMBER = "5521972070247";

export const BANNERS: Banner[] = [
  {
    id: 1,
    title: "Pare de ser o funcionário mais caro da sua empresa.",
    subtitle: "Transforme sua operação caótica em uma Empresa Autogerenciável. Saia do 'modo sobrevivência' para dobrar seus lucros.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920", // Equipe diversa trabalhando em colaboração
    ctaText: "Quero Agendar um Diagnóstico Empresarial",
    whatsappMsg: "Olá, vi o banner sobre controle de crescimento e quero agendar um diagnóstico empresarial gratuito para minha empresa."
  },
  {
    id: 2,
    title: "Segurança Jurídica e Gestão de Pessoas de Alto Nível.",
    subtitle: "Blinde seu CNPJ contra multas e construa um time que veste a camisa. Gestão moderna focada na realidade brasileira.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1920", // Mulher executiva brasileira em ambiente profissional
    ctaText: "Agendar Reunião Estratégica",
    whatsappMsg: "Olá, tenho interesse na blindagem jurídica (NR1) e na gestão de cultura da Efraim."
  },
  {
    id: 3,
    title: "O Próximo Nível da sua Gestão Começa Aqui.",
    subtitle: "Consultoria executiva para pequenas e médias empresas brasileiras que buscam excelência, processos e liberdade para o dono.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1920", // Ambiente de escritório brasileiro moderno e dinâmico
    ctaText: "Quero Escalar Meu Negócio",
    whatsappMsg: "Olá, quero saber como a metodologia Efraim pode levar minha empresa para o próximo nível de escala."
  }
];

export const DIVISIONS: Division[] = [
  {
    id: 1,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "1. Efraim Consultoria Empresarial",
    description: "Organização da casa e lucro maximizado.",
    details: "Reestruturação de processos, organização financeira e gestão estratégica. Transforme o caos em um relógio suíço."
  },
  {
    id: 2,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "2. Efraim Gente & Cultura",
    description: "Um time que realmente veste a camisa.",
    details: "Implantação de Cultura Organizacional, recrutamento estratégico e redução de turnover. Pare de perder talentos."
  },
  {
    id: 3,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "3. Efraim NR1 & Compliance",
    description: "Durma tranquilo com seu CNPJ blindado.",
    details: "Diagnóstico de Riscos Psicossociais (DRSP) e adequação às novas normas 2026. Evite multas e passivos trabalhistas."
  },
  {
    id: 4,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "4. Efraim Academy",
    description: "Velocidade e treinamento in-company.",
    details: "Palestras e workshops de vendas e liderança. Injete ânimo e técnica na sua equipe imediatamente."
  }
];
