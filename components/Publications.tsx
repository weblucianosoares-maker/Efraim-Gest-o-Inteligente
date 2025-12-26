
import React from 'react';
import { ARTICLES, Article, WHATSAPP_NUMBER } from '../constants';

interface PublicationsProps {
  onArticleClick: (article: Article) => void;
  onDiagnosisClick: () => void;
}

const Publications: React.FC<PublicationsProps> = ({ onArticleClick, onDiagnosisClick }) => {
  const openWhatsappCTA = () => {
    const msg = "Olá, acompanho as publicações da Efraim e gostaria de agendar um Diagnóstico 360 para minha empresa.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <header className="max-w-4xl mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter">
            Publicações <span className="text-slate-300">/</span>
          </h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
            Inteligência aplicada e visão estratégica para empresários que buscam a excelência na gestão de médias empresas.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {ARTICLES.map((article) => (
            <article 
              key={article.id} 
              className="group cursor-pointer border-b border-slate-100 pb-12 last:border-0"
              onClick={() => onArticleClick(article)}
            >
              <div className="overflow-hidden rounded-2xl mb-6 aspect-video bg-slate-100">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {article.readTime} de leitura
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                  {article.title}
                </h2>
                <p className="text-slate-500 line-clamp-3 text-base leading-relaxed font-light">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Diagonal CTA Pattern */}
        <section className="mt-32 p-12 md:p-20 bg-slate-50 rounded-[4rem] flex flex-col items-center text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Sua empresa está pronta para o próximo nível?</h3>
          <p className="text-xl text-slate-500 mb-10 max-w-2xl font-light">
            O conhecimento é o primeiro passo, o Diagnóstico 360 é o acelerador. Identifique agora os gargalos da sua operação.
          </p>
          <button 
            onClick={openWhatsappCTA}
            className="bg-slate-900 text-white px-12 py-6 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl"
          >
            AGENDAR DIAGNÓSTICO 360 VIA WHATSAPP
          </button>
        </section>
      </div>
    </main>
  );
};

export default Publications;
