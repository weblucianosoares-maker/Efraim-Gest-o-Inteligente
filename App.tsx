
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Divisions from './components/Divisions';
import Luciano from './components/Luciano';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DiagnosisCTA from './components/DiagnosisCTA';
import DiagnosisForm from './components/DiagnosisForm';
import AdminDashboard from './components/AdminDashboard';

type View = 'home' | 'diagnosis' | 'admin' | 'success';

function App() {
  const [view, setView] = useState<View>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'diagnosis':
        return (
          <div className="min-h-screen bg-slate-50 py-32 px-6">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <button onClick={() => setView('home')} className="text-slate-400 hover:text-slate-900 flex items-center mx-auto mb-8 font-bold transition-all">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  VOLTAR PARA O SITE
                </button>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Mapeamento Estratégico</h1>
                <p className="text-xl text-slate-500">Responda as perguntas abaixo para receber sua análise de maturidade.</p>
              </div>
              <DiagnosisForm onComplete={() => setView('success')} />
            </div>
          </div>
        );
      case 'success':
        return (
          <div className="min-h-screen bg-white flex items-center justify-center py-32 px-6">
            <div className="max-w-2xl w-full text-center space-y-8 animate-fadeIn">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h1 className="text-5xl font-bold text-slate-900">Diagnóstico Enviado!</h1>
              <p className="text-2xl text-slate-600 font-light leading-relaxed">
                Excelente escolha. Nossa equipe de especialistas já recebeu seus dados e está processando sua <span className="font-bold text-slate-900">Análise de Maturidade Empresarial</span>.
              </p>
              <p className="text-slate-500">Em até 24h entraremos em contato via WhatsApp para agendar sua devolutiva gratuita.</p>
              <button 
                onClick={() => setView('home')}
                className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl"
              >
                Voltar ao Início
              </button>
            </div>
          </div>
        );
      case 'admin':
        return <AdminDashboard />;
      default:
        return (
          <div className="min-h-screen bg-white">
            <Hero />
            <PainPoints />
            <DiagnosisCTA onStartDiagnosis={() => setView('diagnosis')} />
            <Solution />
            <Divisions />
            <Luciano />
            <FinalCTA />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar 
        onAdminClick={() => setView('admin')} 
        onHomeClick={() => setView('home')} 
        onDiagnosisClick={() => setView('diagnosis')}
      />
      
      {renderContent()}

      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/5521972070247?text=Olá, quero falar com um consultor da Efraim."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-90"
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
