
import React from 'react';

const Luciano: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden relative">
      {/* Background decoration to fill visual space */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 opacity-50" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-slate-200 rounded-full blur-3xl -translate-y-1/2 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">A Liderança por trás da Efraim</span>
              <span className="h-px w-8 bg-blue-600"></span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Estratégia Guiada por Luciano Soares
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left">
                Fundador da <span className="text-slate-900 font-semibold">Efraim Gestão Inteligente</span>, Luciano Soares consolidou sua carreira como um dos estrategistas mais requisitados por empresários que buscam sair do caos operacional no Brasil.
              </p>
              <p>
                Com um olhar clínico para processos e uma abordagem focada em <span className="text-slate-900 font-bold italic">RH Estratégico</span>, ele transformou mais de 100 operações em negócios autogerenciáveis.
              </p>
            </div>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Sua metodologia é baseada na execução. Para Luciano, não existe gestão real sem dados, e não existe resultado sustentável sem processos claros e uma cultura de alto desempenho.
              </p>
              <p>
                A missão da Efraim sob sua liderança é clara: <span className="text-blue-600 font-bold">devolver a liberdade ao dono do negócio</span>, garantindo que o CNPJ esteja blindado e a equipe esteja alinhada.
              </p>
            </div>
          </div>

          <div className="mt-16 p-10 md:p-16 border-2 border-slate-900 rounded-[3rem] relative bg-white shadow-2xl group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-900 translate-x-16 -translate-y-16 rotate-45 group-hover:bg-blue-600 transition-colors duration-500" />
            
            <svg className="absolute -top-6 left-10 w-12 h-12 text-blue-600 bg-white rounded-full p-2 shadow-sm" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.3137 7.33072 21 4.017 21H1.017Z" />
            </svg>
            <p className="text-2xl md:text-4xl font-bold text-slate-800 italic leading-tight mb-4">
              "Plano bom é plano executado. O resto é apenas uma alucinação cara que consome o seu tempo e o seu sono."
            </p>
            <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">— Luciano Soares</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Luciano;
