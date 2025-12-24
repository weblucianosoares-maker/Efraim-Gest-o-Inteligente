
import React from 'react';

const Luciano: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Liderança e Estratégia</span>
            <span className="h-px w-8 bg-blue-600"></span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Quem é Luciano Soares?
          </h2>
          
          <div className="space-y-6 text-xl text-slate-600 leading-relaxed text-left md:text-center">
            <p>
              Fundador da <span className="text-slate-900 font-semibold">Efraim Gestão Inteligente</span>, Luciano consolidou sua carreira como um dos estrategistas mais requisitados por empresários que buscam sair do caos operacional.
            </p>
            <p>
              Com um olhar clínico para processos e uma abordagem humanizada para cultura, ele transformou mais de <span className="text-slate-900 font-bold">100 operações</span> em negócios autogerenciáveis, permitindo que o dono volte a exercer seu papel de estrategista.
            </p>
            <p>
              Sua metodologia é baseada na <span className="text-slate-900 font-bold italic">Execução Implacável</span>. Para Luciano, não existe gestão sem dados, e não existe resultado sem processos claros e pessoas engajadas.
            </p>
          </div>

          <div className="mt-12 p-10 border border-slate-200 rounded-[3rem] relative bg-slate-50/80 backdrop-blur-sm max-w-2xl mx-auto">
            <svg className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 text-blue-600 bg-white rounded-full p-2 shadow-sm" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.3137 7.33072 21 4.017 21H1.017Z" />
            </svg>
            <p className="text-2xl md:text-3xl font-bold text-slate-800 italic leading-snug">
              "Plano bom é plano executado. O resto é apenas uma alucinação cara que consome o seu tempo e o seu sono."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Luciano;
