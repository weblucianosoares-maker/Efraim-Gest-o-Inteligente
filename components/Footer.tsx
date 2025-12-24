
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 text-slate-400 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>
            <span className="font-bold text-white tracking-tighter">
              EFRAIM GESTÃO INTELIGENTE
            </span>
          </div>
          
          <div className="text-sm">
            © {new Date().getFullYear()} Efraim Gestão Inteligente. Todos os direitos reservados.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
