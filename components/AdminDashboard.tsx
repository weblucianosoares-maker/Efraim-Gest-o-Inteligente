
import React, { useState, useEffect } from 'react';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'users'>('leads');
  const [leads, setLeads] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [selectedLead, setSelectedLead] = useState<any>(null);
  
  // States for new user
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [userMsg, setUserMsg] = useState('');

  useEffect(() => {
    const storedLeads = JSON.parse(localStorage.getItem('efraim_leads') || '[]');
    setLeads(storedLeads.sort((a: any, b: any) => b.id - a.id));

    const storedUsers = JSON.parse(localStorage.getItem('efraim_admin_users') || '[]');
    setUsers(storedUsers);
  }, []);

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (users.some(u => u.username === newUsername)) {
      setUserMsg('Usuário já existe!');
      return;
    }
    const updatedUsers = [...users, { username: newUsername, password: newPassword, role: 'admin' }];
    localStorage.setItem('efraim_admin_users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setNewUsername('');
    setNewPassword('');
    setUserMsg('Usuário criado com sucesso!');
    setTimeout(() => setUserMsg(''), 3000);
  };

  const deleteUser = (username: string) => {
    if (username === 'Masterefraim') {
      alert('Não é possível excluir o usuário mestre.');
      return;
    }
    const updatedUsers = users.filter(u => u.username !== username);
    localStorage.setItem('efraim_admin_users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const exportLeads = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(leads));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `efraim_leads_${new Date().toISOString()}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const maturidadeLabels: Record<string, string> = {
    "1": "Nível 1: Caótico",
    "2": "Nível 2: Processos Parciais",
    "3": "Nível 3: Estruturado (Dep. Dono)",
    "4": "Nível 4: Autogerenciável"
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 pt-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Painel Executivo</h1>
            <p className="text-slate-500 font-light">Controle de Inteligência e Gestão de Usuários.</p>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={exportLeads}
              className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all text-sm uppercase tracking-widest"
            >
              Exportar Leads
            </button>
            <button 
              onClick={onLogout}
              className="bg-red-50 text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-100 transition-all text-sm uppercase tracking-widest"
            >
              Sair
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-slate-200/50 p-1.5 rounded-2xl w-fit">
          <button 
            onClick={() => setActiveTab('leads')}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all uppercase tracking-widest ${activeTab === 'leads' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Diagnósticos ({leads.length})
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all uppercase tracking-widest ${activeTab === 'users' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Usuários do Sistema
          </button>
        </div>

        {activeTab === 'leads' ? (
          <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-6 font-bold uppercase tracking-wider text-xs">Empresa / Lead</th>
                    <th className="p-6 font-bold uppercase tracking-wider text-xs">Maturidade</th>
                    <th className="p-6 font-bold uppercase tracking-wider text-xs">Área Crítica</th>
                    <th className="p-6 font-bold uppercase tracking-wider text-xs">Data</th>
                    <th className="p-6 font-bold uppercase tracking-wider text-xs">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-20 text-center text-slate-400 font-medium italic">
                        Nenhum diagnóstico registrado.
                      </td>
                    </tr>
                  ) : (
                    leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-50 transition-colors group">
                        <td className="p-6">
                          <div className="font-bold text-slate-900">{lead.empresa}</div>
                          <div className="text-xs text-slate-500 uppercase tracking-tight">{lead.nome}</div>
                        </td>
                        <td className="p-6">
                          <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${lead.maturidadeProcessos === '4' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                            {maturidadeLabels[lead.maturidadeProcessos] || lead.maturidadeProcessos}
                          </span>
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
                        <td className="p-6">
                          <button 
                            onClick={() => setSelectedLead(lead)}
                            className="text-blue-600 font-bold text-xs uppercase hover:underline"
                          >
                            Ver Detalhes
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            {/* Create User Form */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-200 h-fit">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Novo Acesso Admin</h3>
              <form onSubmit={handleAddUser} className="space-y-6">
                {userMsg && (
                  <div className={`p-4 rounded-xl text-sm font-bold text-center ${userMsg.includes('sucesso') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                    {userMsg}
                  </div>
                )}
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Nome de Usuário</label>
                  <input 
                    type="text" 
                    required 
                    value={newUsername} 
                    onChange={(e) => setNewUsername(e.target.value)}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Senha Provisória</label>
                  <input 
                    type="password" 
                    required 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all"
                >
                  Cadastrar Usuário
                </button>
              </form>
            </div>

            {/* Users List */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Acessos Cadastrados</h3>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.username} className="flex justify-between items-center p-5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <p className="font-bold text-slate-900">{user.username}</p>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400">{user.role || 'admin'}</p>
                    </div>
                    {user.username !== 'Masterefraim' && (
                      <button 
                        onClick={() => deleteUser(user.username)}
                        className="text-red-500 hover:text-red-700 p-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Lead Detail Modal */}
        {selectedLead && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-sm">
            <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl animate-fadeIn">
              <div className="sticky top-0 bg-white border-b border-slate-100 p-8 flex justify-between items-center">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Detalhes do Lead</h2>
                  <p className="text-slate-500 text-sm font-light italic">Mapeamento enviado em {new Date(selectedLead.createdAt).toLocaleString('pt-BR')}</p>
                </div>
                <button onClick={() => setSelectedLead(null)} className="p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors">
                  <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              
              <div className="p-10 space-y-12">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600">Contato</h4>
                    <p className="text-slate-900 font-bold text-xl">{selectedLead.nome}</p>
                    <p className="text-slate-500"><strong>WhatsApp:</strong> {selectedLead.whatsapp}</p>
                    <p className="text-slate-500"><strong>E-mail:</strong> {selectedLead.email}</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600">Empresa</h4>
                    <p className="text-slate-900 font-bold text-xl">{selectedLead.empresa}</p>
                    <p className="text-slate-500"><strong>Setor:</strong> {selectedLead.mercado}</p>
                    <p className="text-slate-500"><strong>Porte:</strong> {selectedLead.funcionarios} funcionários / {selectedLead.faturamento}</p>
                  </div>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="space-y-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600">Diagnóstico de Maturidade</h4>
                  <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                    <p className="text-slate-500 mb-2 uppercase text-[10px] font-bold tracking-widest">Nível de Processos</p>
                    <p className="text-xl font-bold text-slate-900 mb-6">{maturidadeLabels[selectedLead.maturidadeProcessos]}</p>
                    
                    <p className="text-slate-500 mb-2 uppercase text-[10px] font-bold tracking-widest">Gargalo de Ausência (30 dias)</p>
                    <p className="text-slate-900 leading-relaxed font-light mb-6 italic">"{selectedLead.maiorGargalo}"</p>
                    
                    <p className="text-slate-500 mb-2 uppercase text-[10px] font-bold tracking-widest">Intervenção Imediata Solicitada</p>
                    <p className="text-red-600 font-bold text-lg">{selectedLead.areaCritica}</p>
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <button 
                    onClick={() => window.open(`https://wa.me/${selectedLead.whatsapp.replace(/\D/g,'')}`, '_blank')}
                    className="bg-green-500 text-white px-10 py-5 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-xl shadow-green-500/20"
                  >
                    Iniciar Devolutiva no WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
