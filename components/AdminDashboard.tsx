
import React, { useState, useEffect } from 'react';

const AdminDashboard: React.FC = () => {
  const [leads, setLeads] = useState<any[]>([]);

  useEffect(() => {
    const storedLeads = JSON.parse(localStorage.getItem('efraim_leads') || '[]');
    setLeads(storedLeads.sort((a: any, b: any) => b.id - a.id));
  }, []);

  const exportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(leads));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "efraim_leads.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Leads & Diagnósticos</h1>
            <p className="text-slate-500">Gestão de contatos qualificados pela plataforma Efraim.</p>
          </div>
          <button 
            onClick={exportData}
            className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all"
          >
            Exportar JSON
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-6 font-bold uppercase tracking-wider text-xs">Lead / Empresa</th>
                  <th className="p-6 font-bold uppercase tracking-wider text-xs">WhatsApp / E-mail</th>
                  <th className="p-6 font-bold uppercase tracking-wider text-xs">Perfil (Fat/Colabs)</th>
                  <th className="p-6 font-bold uppercase tracking-wider text-xs">Área Crítica</th>
                  <th className="p-6 font-bold uppercase tracking-wider text-xs">Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-20 text-center text-slate-400 font-medium">
                      Nenhum lead capturado ainda.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-6">
                        <div className="font-bold text-slate-900">{lead.nome}</div>
                        <div className="text-xs text-slate-500 uppercase tracking-tight">{lead.empresa}</div>
                      </td>
                      <td className="p-6">
                        <div className="text-slate-700 font-medium">{lead.whatsapp}</div>
                        <div className="text-xs text-slate-400">{lead.email}</div>
                      </td>
                      <td className="p-6">
                        <div className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded inline-block mb-1">
                          {lead.faturamento}
                        </div>
                        <div className="text-xs text-slate-500">
                          {lead.funcionarios} colabs
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="text-sm font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                          {lead.areaCritica}
                        </span>
                      </td>
                      <td className="p-6">
                        <div className="text-xs text-slate-400">
                          {new Date(lead.createdAt).toLocaleDateString('pt-BR')}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
