
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <span className={`font-bold text-xl tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            EFRAIM GESTÃO
          </span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          {['Sobre', 'Metodologia', 'Unidades', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-200 hover:text-white'}`}
            >
              {item}
            </a>
          ))}
          <a 
            href="https://wa.me/5521972070247?text=Olá, quero agendar um diagnóstico empresarial gratuito."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-slate-800 transition-all transform hover:scale-105"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
