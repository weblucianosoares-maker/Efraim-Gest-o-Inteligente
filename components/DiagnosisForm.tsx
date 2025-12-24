
import React, { useState } from 'react';

interface DiagnosisFormProps {
  onComplete: () => void;
}

const DiagnosisForm: React.FC<DiagnosisFormProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    email: '',
    faturamento: '',
    funcionarios: '',
    mercado: '',
    maturidadeProcessos: '',
    maiorGargalo: '',
    areaCritica: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Armazenamento em localStorage simulando banco de dados
    const existingLeads = JSON.parse(localStorage.getItem('efraim_leads') || '[]');
    const newLead = { 
      ...formData, 
      id: Date.now(), 
      createdAt: new Date().toISOString() 
    };
    localStorage.setItem('efraim_leads', JSON.stringify([...existingLeads, newLead]));
    onComplete();
  };

  const steps = [
    { title: 'Identificação', icon: '👤' },
    { title: 'Perfil do Negócio', icon: '🏢' },
    { title: 'Saúde Operacional', icon: '🩺' },
    { title: 'Diagnóstico Final', icon: '🎯' }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
      <div className="bg-slate-900 p-8 text-white flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Diagnóstico Efraim</h2>
          <p className="text-slate-400 text-sm">Passo {step} de 4: {steps[step-1].title}</p>
        </div>
        <div className="flex space-x-2">
          {steps.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 w-8 rounded-full transition-all duration-500 ${idx + 1 <= step ? 'bg-blue-500' : 'bg-white/10'}`} 
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8 md:p-12">
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Para quem estamos fazendo este diagnóstico?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Seu Nome</label>
                <input required type="text" name="nome" value={formData.nome} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Como devemos te chamar?" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Nome da Empresa</label>
                <input required type="text" name="empresa" value={formData.empresa} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Nome do seu CNPJ" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">WhatsApp</label>
                <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">E-mail Corporativo</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="contato@empresa.com.br" />
              </div>
            </div>
            <button type="button" onClick={nextStep} className="w-full mt-8 bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center space-x-2">
              <span>Continuar Diagnóstico</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Qual o tamanho do seu desafio hoje?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Faixa de Faturamento Anual</label>
                <select name="faturamento" value={formData.faturamento} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all">
                  <option value="">Selecione...</option>
                  <option value="até 500k">Até R$ 500k</option>
                  <option value="500k a 2M">R$ 500k a R$ 2M</option>
                  <option value="2M a 10M">R$ 2M a R$ 10M</option>
                  <option value="Acima de 10M">Acima de R$ 10M</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Quantidade de Funcionários</label>
                <select name="funcionarios" value={formData.funcionarios} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all">
                  <option value="">Selecione...</option>
                  <option value="1 a 5">1 a 5 colaboradores</option>
                  <option value="6 a 20">6 a 20 colaboradores</option>
                  <option value="21 a 50">21 a 50 colaboradores</option>
                  <option value="Mais de 50">Mais de 50 colaboradores</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Mercado / Nicho de Atuação</label>
                <input type="text" name="mercado" value={formData.mercado} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" placeholder="Ex: Indústria, Varejo, Tecnologia..." />
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
              <button type="button" onClick={prevStep} className="w-1/3 py-5 rounded-2xl font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-all">Voltar</button>
              <button type="button" onClick={nextStep} className="flex-1 bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg">Próxima Etapa</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Como está a saúde da sua operação?</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Nível de Processos e Organização</label>
                <select name="maturidadeProcessos" value={formData.maturidadeProcessos} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all">
                  <option value="">Selecione um nível...</option>
                  <option value="1">Nível 1: Tudo na cabeça do dono (Caótico)</option>
                  <option value="2">Nível 2: Processos existem mas ninguém segue</option>
                  <option value="3">Nível 3: Operação fluindo mas depende do dono</option>
                  <option value="4">Nível 4: Empresa autogerenciável e organizada</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Se você saísse de férias hoje por 30 dias, o que aconteceria?</label>
                <textarea name="maiorGargalo" value={formData.maiorGargalo} onChange={handleChange} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all h-32" placeholder="Seja honesto(a): a empresa para? O lucro cai? A equipe se perde?" />
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
              <button type="button" onClick={prevStep} className="w-1/3 py-5 rounded-2xl font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-all">Voltar</button>
              <button type="button" onClick={nextStep} className="flex-1 bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg">Penúltimo Passo</button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Qual área precisa de um "choque de gestão" imediato?</h3>
            <div className="grid grid-cols-1 gap-4">
              {['Vendas e Comercial', 'Gestão de Pessoas (Cultura)', 'Organização Financeira', 'Processos e Operação', 'Blindagem Jurídica/NR1'].map((area) => (
                <label key={area} className={`flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all ${formData.areaCritica === area ? 'border-blue-500 bg-blue-50' : 'border-slate-100 bg-slate-50 hover:border-slate-200'}`}>
                  <input type="radio" name="areaCritica" value={area} checked={formData.areaCritica === area} onChange={handleChange} className="hidden" />
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${formData.areaCritica === area ? 'border-blue-500 bg-blue-500' : 'border-slate-300'}`}>
                    {formData.areaCritica === area && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <span className={`font-bold ${formData.areaCritica === area ? 'text-blue-900' : 'text-slate-700'}`}>{area}</span>
                </label>
              ))}
            </div>
            <div className="flex space-x-4 mt-8">
              <button type="button" onClick={prevStep} className="w-1/3 py-5 rounded-2xl font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-all">Voltar</button>
              <button type="submit" className="flex-1 bg-green-600 text-white py-5 rounded-2xl font-bold hover:bg-green-700 transition-all shadow-lg flex items-center justify-center space-x-2">
                <span>GERAR MEU DIAGNÓSTICO</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default DiagnosisForm;
