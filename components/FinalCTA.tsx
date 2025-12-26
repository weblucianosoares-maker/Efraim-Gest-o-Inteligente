
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const FinalCTA: React.FC = () => {
  const steps = [
    { id: 1, title: 'Contato Inicial', desc: 'Nossa equipe realiza um contato breve para alinhamento inicial.' },
    { id: 2, title: 'Análise de Momento', desc: 'Identificação técnica dos gargalos que travam sua liberdade.' },
    { id: 3, title: 'Sessão Estratégica', desc: 'Apresentação de um plano de crescimento sob medida para seu negócio.' }
  ];

  return (
    <section id="contato" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            2026 será o ano da Escala ou da Sobrevivência?
          </h2>
          <p className="text-2xl text-slate-400 mb-16 font-light">
            Não aguarde a próxima crise operacional. Vamos estruturar o plano de liberdade da sua empresa ainda esta semana.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step) => (
              <div key={step.id} className="p-8 bg-white/5 border border-white/10 rounded-2xl text-left">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold mb-4">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white text-slate-900 p-10 md:p-16 rounded-[3rem] shadow-2xl transform hover:scale-[1.01] transition-all">
            <h3 className="text-3xl font-bold mb-6">Pronto para a transformação?</h3>
            <p className="text-lg text-slate-600 mb-10 font-light">
              Clique no botão abaixo e fale com um consultor sênior para agendar sua Sessão Estratégica Gratuita.
            </p>
            <button 
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero agendar minha sessão estratégica gratuita e transformar minha empresa em 2026.`, '_blank')}
              className="w-full md:w-auto bg-slate-900 text-white px-12 py-6 rounded-2xl text-lg font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center mx-auto group"
            >
              <span>AGENDAR SESSÃO ESTRATÉGICA</span>
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <p className="mt-6 text-sm text-slate-400 flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Conexão segura. Respeitamos a privacidade dos seus dados empresariais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
