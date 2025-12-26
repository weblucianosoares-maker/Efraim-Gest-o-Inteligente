
import React from 'react';

interface FooterProps {
  onNavigate: (anchor: string) => void;
  onPublicationsClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onPublicationsClick }) => {
  const handleLinkClick = (e: React.MouseEvent, anchor: string) => {
    e.preventDefault();
    onNavigate(anchor);
  };

  return (
    <footer className="py-20 bg-slate-950 text-slate-400 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-12">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shadow-inner">
              <span className="text-white font-black text-2xl">E</span>
            </div>
            <div className="text-left">
              <span className="font-black text-white text-xl tracking-tighter block leading-none">
                EFRAIM GESTÃO
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-bold">
                Inteligente
              </span>
            </div>
          </div>

          {/* Inline Navigation Menu */}
          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <button onClick={(e) => handleLinkClick(e, '')} className="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">Início</button>
            <button onClick={(e) => handleLinkClick(e, 'metodologia')} className="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">Metodologia</button>
            <button onClick={(e) => handleLinkClick(e, 'sobre')} className="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">Quem Somos</button>
            <button onClick={onPublicationsClick} className="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">Publicações</button>
            <button onClick={(e) => handleLinkClick(e, 'contato')} className="text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">Diagnóstico</button>
          </nav>

          <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Contact & Location Details */}
          <div className="grid md:grid-cols-3 gap-12 w-full max-w-4xl text-sm">
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs opacity-50">Localização</h4>
              <p className="text-lg font-medium">Centro-Niterói / RJ</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs opacity-50">Contato Direto</h4>
              <p className="text-lg font-medium">+55 21 97207-0247</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs opacity-50">E-mail Corporativo</h4>
              <p className="text-lg font-medium">contato@efraimgestao.com.br</p>
            </div>
          </div>

          {/* Legal / Bottom Bar */}
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center w-full max-w-6xl text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">
            <p>© 2004 EFRAIM GESTÃO INTELIGENTE</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <p>Niterói, Rio de Janeiro, Brasil</p>
              <p>Consultoria Executiva de Alto Impacto</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
