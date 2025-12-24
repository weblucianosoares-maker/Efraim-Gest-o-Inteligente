
import React, { useState, useEffect } from 'react';
import { BANNERS, WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const openWhatsapp = (msg: string) => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {BANNERS.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent z-10" />
          
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl space-y-8">
                <div className="inline-block py-1 px-3 bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30 text-sm font-semibold tracking-wider uppercase animate-pulse">
                  Consultoria de Alto Impacto
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1]">
                  {banner.title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                  {banner.subtitle}
                </p>
                <button
                  onClick={() => openWhatsapp(banner.whatsappMsg)}
                  className="bg-white text-slate-900 px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:bg-slate-200 transition-all transform hover:-translate-y-1 flex items-center group"
                >
                  👉 {banner.ctaText}
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-300 rounded-full ${index === currentSlide ? 'w-12 bg-white' : 'w-4 bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
