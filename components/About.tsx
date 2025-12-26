
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Luciano Soares - Fundador Efraim"
                className="w-full rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 object-cover h-[600px]"
              />
              <div className="absolute -bottom-10 -right-10 bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl hidden md:block max-w-xs">
                <p className="text-3xl font-bold text-blue-400 mb-2">+100</p>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Empresas Transformadas pela Metodologia Efraim</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 mb-8 border border-slate-200 rounded-full bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-widest">
              Nossa Identidade
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
              Efraim: Onde a <span className="text-blue-600">inteligência</span> encontra a execução.
            </h2>
            
            <div className="space-y-8 text-xl text-slate-500 font-light leading-relaxed">
              <p>
                A Efraim Gestão Inteligente nasceu de uma necessidade latente no mercado brasileiro: a falta de <span className="text-slate-900 font-semibold italic">gestão técnica e estratégica</span> em empresas que cresceram rápido demais.
              </p>
              <p>
                Sob a liderança de <span className="text-slate-900 font-bold">Luciano Soares</span>, estrategista com vasta experiência em reestruturação operacional e RH estratégico, nossa consultoria se tornou referência em blindar CNPJs e devolver a liberdade aos seus donos.
              </p>
              <p>
                Não somos apenas consultores; somos parceiros de trincheira. Nosso compromisso é com a sustentabilidade do seu negócio, garantindo que ele tenha cultura forte, processos blindados e lucro crescente.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Visão Executiva</h4>
                <p className="text-sm text-slate-500">Processos que rodam sozinhos e permitem a escala real.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Pilar Humano</h4>
                <p className="text-sm text-slate-500">Cultura de alta performance e compliance total (NR1).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
