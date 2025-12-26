
import React, { useEffect } from 'react';
import { Article, WHATSAPP_NUMBER } from '../constants';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onDiagnosisClick: () => void;
}

const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack, onDiagnosisClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  const handleCTA = () => {
    const msg = `Olá, li o artigo "${article.title}" no site da Efraim e gostaria de agendar um Diagnóstico 360 para minha empresa.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <article className="pt-32 pb-24 bg-white min-h-screen animate-fadeIn">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-400 hover:text-slate-900 font-bold text-xs uppercase tracking-widest mb-12 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            <span>Voltar para publicações</span>
          </button>

          <header className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded">
                {article.category}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                {article.readTime} de leitura
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tighter mb-8">
              {article.title}
            </h1>
            <p className="text-2xl text-slate-500 font-light italic leading-relaxed">
              {article.excerpt}
            </p>
          </header>

          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-auto rounded-[3rem] shadow-2xl mb-16 grayscale-[30%]"
          />

          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Specialized Article CTA */}
          <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-center text-white shadow-2xl shadow-slate-900/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 -translate-y-16 translate-x-16 rounded-full blur-3xl"></div>
             <h3 className="text-3xl font-bold mb-4 relative z-10">Gostou deste conteúdo?</h3>
             <p className="text-slate-400 mb-10 relative z-10 max-w-xl mx-auto">
               A teoria é transformadora, mas a implementação é o que gera lucro. Fale com um especialista agora e descubra como aplicar esses conceitos no seu negócio através do nosso Diagnóstico 360.
             </p>
             <button 
               onClick={handleCTA}
               className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all relative z-10"
             >
               Agendar Diagnóstico 360 via WhatsApp
             </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleView;
