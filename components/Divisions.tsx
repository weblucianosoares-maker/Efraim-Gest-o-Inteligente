
import React from 'react';
import { DIVISIONS, WHATSAPP_NUMBER } from '../constants';

const Divisions: React.FC = () => {
  return (
    <section id="unidades" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Um Ecossistema Completo para Blindar e Escalar seu Negócio
          </h2>
          <p className="text-xl text-slate-600">
            Não importa se sua dor é vendas, pessoas ou processos. Temos a unidade certa para resolver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIVISIONS.map((div) => (
            <div 
              key={div.id} 
              className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {div.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{div.title}</h3>
                <p className="text-blue-600 font-semibold mb-3">{div.description}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {div.details}
                </p>
              </div>
              
              <button 
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá, tenho interesse específico na unidade ${div.title}.`, '_blank')}
                className="w-full py-3 bg-slate-50 text-slate-900 font-bold rounded-xl group-hover:bg-slate-900 group-hover:text-white transition-colors"
              >
                Saber Mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Divisions;
