
import React from 'react';

interface DiagnosisCTAProps {
  onStartDiagnosis: () => void;
}

const DiagnosisCTA: React.FC<DiagnosisCTAProps> = ({ onStartDiagnosis }) => {
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/10" />
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Ferramenta Gratuita</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Sua empresa é um relógio suíço ou uma bomba relógio?
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Faça nosso <span className="font-bold text-slate-900">Diagnóstico Empresarial de Maturidade</span> e receba clareza imediata sobre processos, pessoas, finanças e riscos. Entenda onde está o gargalo que trava o seu lucro hoje.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500 mb-8">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Análise de Maturidade
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Mapeamento SWOT
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Identificação de Gargalos
              </span>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <button 
              onClick={onStartDiagnosis}
              className="bg-slate-900 text-white w-full md:w-auto px-10 py-8 rounded-3xl text-xl font-black shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 text-center flex flex-col items-center"
            >
              INICIAR DIAGNÓSTICO
              <span className="text-xs font-normal opacity-60 mt-2 uppercase tracking-widest italic">Leva apenas 3 minutos</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisCTA;
