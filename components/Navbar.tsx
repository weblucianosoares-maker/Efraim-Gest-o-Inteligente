
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onAdminClick: () => void;
  onHomeClick: () => void;
  onDiagnosisClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAdminClick, onHomeClick, onDiagnosisClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => { onHomeClick(); setIsMobileMenuOpen(false); }}>
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <span className={`font-bold text-xl tracking-tighter transition-colors ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}>
            EFRAIM GESTÃO
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <button 
            onClick={onAdminClick}
            className={`flex items-center space-x-1 font-bold transition-colors ${isScrolled ? 'text-slate-400 hover:text-slate-900' : 'text-slate-400 hover:text-white'}`}
            title="Área Administrativa"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs tracking-widest uppercase">Full</span>
          </button>
          
          <button 
            onClick={onDiagnosisClick}
            className={`font-bold transition-colors ${isScrolled ? 'text-blue-600 hover:text-blue-800' : 'text-blue-400 hover:text-white'}`}
          >
            Diagnóstico
          </button>

          {['Sobre', 'Metodologia'].map((item) => (
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

        {/* Hamburger Button */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''} ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}></span>
            <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'} ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}></span>
            <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''} ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-8 flex flex-col space-y-6">
          <button 
            onClick={() => { onDiagnosisClick(); setIsMobileMenuOpen(false); }}
            className="text-2xl font-bold text-blue-600 text-left"
          >
            Diagnóstico Empresarial
          </button>
          <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-slate-700">Sobre</a>
          <a href="#metodologia" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-slate-700">Metodologia</a>
          <div className="h-px bg-slate-100 w-full"></div>
          <button 
            onClick={() => { onAdminClick(); setIsMobileMenuOpen(false); }}
            className="text-slate-400 flex items-center space-x-2 font-bold uppercase tracking-widest text-xs"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            <span>Acesso Restrito Full</span>
          </button>
          <a 
            href="https://wa.me/5521972070247?text=Olá, quero agendar um diagnóstico empresarial gratuito."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 text-white w-full py-4 rounded-xl font-bold text-center"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
