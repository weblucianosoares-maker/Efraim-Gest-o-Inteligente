
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const PainPoints: React.FC = () => {
  const painPoints = [
    {
      title: 'O "Empresário Bombeiro"',
      desc: 'Sua rotina é sequestrada por incêndios operacionais constantes. O pensamento estratégico é sufocado pela urgência do agora, impedindo sua empresa de escalar.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.98 7.98 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.879 16.121A3 3 0 1012.015 11L11 14l.879 2.121z" />
        </svg>
      )
    },
    {
      title: 'Dependência Operacional Total',
      desc: 'A empresa é um reflexo direto da sua presença física. Se você não está no comando direto, as engrenagens travam, a qualidade cai e o lucro escorre pelas mãos.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Vendas por Acaso',
      desc: 'Você fatura, mas não domina o processo. O crescimento é uma montanha-russa emocional sem previsibilidade, baseada mais em sorte do que em canais de tração escaláveis.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Risco Jurídico Invisível',
      desc: 'Processos trabalhistas mal geridos e falta de compliance (NR1) são ameaças silenciosas. Anos de esforço podem ser destruídos por uma única falha de gestão de pessoas.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-block px-4 py-2 mb-8 border border-slate-200 rounded-full bg-white text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
            O custo da inércia estratégica
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tighter">
            Sua empresa cresceu, mas sua <span className="text-blue-600">liberdade</span> diminuiu?
          </h2>
          <p className="text-2xl text-slate-500 leading-relaxed font-light">
            Não é o faturamento que define o sucesso, é a sua capacidade de gerir o negócio sem ser escravo dele. 
            Você construiu um império, mas agora ele exige cada segundo da sua vida.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {painPoints.map((point) => (
            <div key={point.title} className="bg-white p-12 rounded-[3rem] border border-slate-200 hover:border-blue-500 transition-all duration-700 group relative overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="flex flex-col space-y-8">
                <div className="w-20 h-20 bg-slate-900 text-white rounded-3xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500 shadow-lg">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-xl font-light">
                    {point.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 items-center gap-12 bg-white border border-slate-200 p-12 md:p-16 rounded-[4rem] shadow-xl">
            <div className="md:col-span-2">
              <h3 className="text-slate-900 text-3xl font-bold mb-4">A verdade é dura:</h3>
              <p className="text-2xl italic text-slate-500 leading-relaxed font-serif">
                "O que te trouxe até aqui (esforço braçal) não é o que vai te levar para o próximo nível (gestão inteligente)."
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <button 
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, me identifiquei com o cenário de 'Empresário Bombeiro' e quero saber como a Efraim pode me devolver a liberdade.`, '_blank')}
                className="group flex items-center space-x-4 bg-slate-900 text-white px-10 py-6 rounded-3xl font-bold hover:bg-blue-600 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
              >
                <span className="text-lg">Recuperar Liberdade</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
