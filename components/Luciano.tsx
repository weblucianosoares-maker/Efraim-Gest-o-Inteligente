
import React from 'react';

const Luciano: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            {/* Elemento decorativo de fundo para dar destaque à foto real */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-100 rounded-full blur-3xl -z-10" />
            
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1519085184628-66e73521743f?auto=format&fit=crop&q=80&w=800" 
                alt="Luciano Soares - Fundador da Efraim Gestão Inteligente"
                className="rounded-3xl shadow-[0_32px_64px_-15px_rgba(0,0,0,0.4)] w-full object-cover aspect-[3/4] transition-all duration-700 hover:scale-[1.02]"
              />
              {/* Badge de Experiência flutuante */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl hidden md:block border border-slate-700">
                <span className="block text-4xl font-black text-blue-400">+100</span>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">Empresas Transformadas</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Liderança e Estratégia</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Quem é Luciano Soares?
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Fundador da <span className="text-slate-900 font-semibold">Efraim Gestão Inteligente</span>, Luciano consolidou sua carreira como um dos estrategistas mais requisitados por empresários que buscam sair do caos operacional.
              </p>
              <p>
                Com um olhar clínico para processos e uma abordagem humanizada para cultura, ele transformou mais de <span className="text-slate-900 font-bold">100 operações</span> em negócios autogerenciáveis, permitindo que o dono volte a exercer seu papel de estrategista — ou simplesmente tenha tempo para sua família.
              </p>
              <p>
                Sua metodologia é baseada na <span className="text-slate-900 font-bold italic">Execução Implacável</span>. Para Luciano, não existe gestão sem dados, e não existe resultado sem processos claros.
              </p>
            </div>

            <div className="mt-12 p-8 border border-slate-200 rounded-[2rem] relative bg-slate-50/80 backdrop-blur-sm">
              <svg className="absolute -top-6 -left-4 w-12 h-12 text-blue-600 bg-white rounded-full p-2 shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.3137 20.3307 21 17.017 21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91243 16 3.017 16H6.017C6.56928 16 7.017 15.5523 7.017 15V9C7.017 8.44772 6.56928 8 6.017 8H3.017C1.91243 8 1.017 7.10457 1.017 6V5C1.017 3.89543 1.91243 3 3.017 3H6.017C8.22614 3 10.017 4.79086 10.017 7V15C10.017 18.3137 7.33072 21 4.017 21H1.017Z" />
              </svg>
              <p className="text-2xl font-bold text-slate-800 italic leading-snug">
                "Plano bom é plano executado. O resto é apenas uma alucinação cara que consome o seu tempo e o seu sono."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Luciano;
