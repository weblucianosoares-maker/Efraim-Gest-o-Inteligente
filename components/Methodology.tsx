
import React from 'react';

const Methodology: React.FC = () => {
  const pillars = [
    {
      title: 'Diagnóstico de Precisão',
      desc: 'Não trabalhamos com achismos. Realizamos uma auditoria profunda em seus processos e cultura para encontrar onde o lucro está sendo drenado.',
      step: '01'
    },
    {
      title: 'Estruturação de Processos',
      desc: 'Desenhamos fluxos de trabalho que funcionam sozinhos. Criamos o manual de operação da sua empresa para que ela não dependa da sua memória.',
      step: '02'
    },
    {
      title: 'RH Estratégico & Cultura',
      desc: 'Implementamos sistemas de gestão de pessoas que atraem e mantêm talentos, garantindo que a equipe execute com excelência mesmo sem supervisão.',
      step: '03'
    },
    {
      title: 'Escala e Liberdade',
      desc: 'Com a casa arrumada, o dono assume o papel de CEO. A empresa escala o faturamento enquanto você recupera seu tempo e qualidade de vida.',
      step: '04'
    }
  ];

  return (
    <section id="metodologia" className="py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <div className="inline-block px-4 py-2 mb-6 border border-white/20 rounded-full bg-white/5 text-blue-400 text-xs font-bold uppercase tracking-widest">
            A Engenharia do Sucesso
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
            Metodologia <span className="text-blue-500">Efraim</span>: Gestão Guiada por Resultados.
          </h2>
          <p className="text-2xl text-slate-400 font-light leading-relaxed">
            Eliminamos a complexidade inútil. Nossa metodologia foca na implementação prática de processos que geram previsibilidade e tempo livre para o empresário brasileiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.step} className="group p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden">
              <span className="text-8xl font-black text-white/5 absolute -top-4 -right-4 transition-colors group-hover:text-blue-500/10">
                {pillar.step}
              </span>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-light text-lg">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-blue-600 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-blue-500/20">
          <div className="md:w-2/3">
            <h3 className="text-3xl font-bold mb-4">Sua empresa merece ser um ativo, não um fardo.</h3>
            <p className="text-white/80 text-lg">Aplicamos ferramentas globais de gestão adaptadas para a realidade do CNPJ brasileiro.</p>
          </div>
          <a 
            href="#contato"
            className="whitespace-nowrap bg-slate-900 text-white px-10 py-6 rounded-2xl font-bold hover:bg-white hover:text-slate-900 transition-all shadow-xl"
          >
            Quero conhecer o plano
          </a>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
