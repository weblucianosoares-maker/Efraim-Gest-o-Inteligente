
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const PainPoints: React.FC = () => {
  const painPoints = [
    {
      title: 'O "Empresário Bombeiro"',
      desc: 'Passa o dia resolvendo problemas operacionais e não sobra tempo para a estratégia.',
      icon: '🔥'
    },
    {
      title: 'Equipe Dependente',
      desc: 'Se você não estiver na empresa, as coisas não acontecem ou a qualidade cai drasticamente.',
      icon: '📉'
    },
    {
      title: 'Vendas no Acaso',
      desc: 'Você vende bem, mas não sabe exatamente por que ou como repetir o resultado mês que vem.',
      icon: '🎲'
    },
    {
      title: 'Medo do Risco',
      desc: 'Sente que uma multa trabalhista ou fiscal pode quebrar seu caixa a qualquer momento.',
      icon: '⚖️'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" 
                alt="Empresária brasileira focada e decidida"
                className="rounded-2xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-slate-900 rounded-2xl -z-0 hidden md:block" />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Sua empresa cresceu, mas sua liberdade diminuiu?
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              Você construiu um negócio do zero, mas sente que virou refém dele? Se você se identifica com os cenários abaixo, a Efraim foi feita para a sua realidade:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {painPoints.map((point) => (
                <div key={point.title} className="flex flex-col space-y-3 group">
                  <div className="text-4xl">{point.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-slate-50 border-l-4 border-slate-900 rounded-r-xl">
              <p className="text-lg italic text-slate-700">
                "A verdade é dura: O que te trouxe até aqui (esforço braçal) não é o que vai te levar para o próximo nível (gestão inteligente)."
              </p>
            </div>

            <button 
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, me identifiquei com os cenários de 'Empresário Bombeiro' e quero saber como a Efraim pode me devolver a liberdade.`, '_blank')}
              className="mt-10 bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-xl flex items-center"
            >
              Quero Recuperar Minha Liberdade
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
