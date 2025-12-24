
import React from 'react';

const Solution: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnosticar',
      desc: 'Encontramos a real raiz do problema através de uma análise profunda de dados e processos.'
    },
    {
      number: '02',
      title: 'Planejar',
      desc: 'Desenhamos soluções viáveis para a realidade brasileira, com baixa complexidade e alta execução.'
    },
    {
      number: '03',
      title: 'Implementar',
      desc: 'Entramos na trincheira com você. Não apenas dizemos o que fazer, fazemos acontecer ao lado da sua equipe.'
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Consultoria sem "teoria de palco". <br/>
            <span className="text-blue-400 italic">Aqui é execução guiada.</span>
          </h2>
          <p className="text-xl text-slate-400 font-light">
            Na Efraim, não acreditamos em relatórios complexos que vão parar na gaveta. Nossa metodologia foi desenhada para a realidade da empresa brasileira.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
              <span className="text-6xl font-black text-white/5 absolute -top-4 -left-4 select-none group-hover:text-blue-500/10 transition-colors">
                {step.number}
              </span>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xl font-medium">Baixa Complexidade</span>
          </div>
          <div className="hidden md:block w-16 h-px bg-white/20" />
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-medium">Alta Execução</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
