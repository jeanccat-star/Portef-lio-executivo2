import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Target, 
  Award, 
  Briefcase, 
  BarChart3, 
  GraduationCap, 
  Smartphone, 
  Mail, 
  Linkedin, 
  CheckCircle2,
  ChevronRight,
  PieChart,
  Zap,
  ShieldCheck,
  Rocket,
  Globe,
  Coins,
  Search
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('perfil');

  // Sistema de Cores Executivo: Navy (#0f172a), Slate (#475569), Emerald (#10b981)
  
  const sections = [
    { id: 'perfil', label: 'Perfil', icon: <Briefcase size={18} /> },
    { id: 'kpis', label: 'Resultados', icon: <TrendingUp size={18} /> },
    { id: 'experiencia', label: 'Trajetória', icon: <BarChart3 size={18} /> },
    { id: 'expertise', label: 'Expertise', icon: <Target size={18} /> },
    { id: 'contato', label: 'Contato', icon: <Mail size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-100">
      {/* Navigation - Floating UI */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-lg border border-slate-200 px-6 py-4 rounded-3xl shadow-2xl z-50 flex gap-4 md:gap-10 overflow-x-auto max-w-[95%]">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveTab(s.id)}
            className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-2xl transition-all duration-300 ${
              activeTab === s.id 
                ? 'bg-[#0f172a] text-white scale-105 shadow-lg' 
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {s.icon}
            <span className="text-xs font-bold uppercase tracking-wider">{s.label}</span>
          </button>
        ))}
      </nav>

      {/* Hero Section - Professional Branding */}
      <header className="bg-[#0f172a] text-white pt-16 pb-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-emerald-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="w-56 h-56 rounded-full border-4 border-slate-800 overflow-hidden bg-slate-800 shadow-2xl relative">
               <img 
                 src="https://raw.githubusercontent.com/jeanmacaro/portfolio/main/img_1535.jpg" 
                 alt="Jean Ramos"
                 className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                 onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.nextSibling.style.display = 'flex';
                 }}
               />
               <div className="hidden w-full h-full bg-slate-800 items-center justify-center text-emerald-500 uppercase font-black text-4xl">
                 JR
               </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-emerald-500 p-3 rounded-full shadow-lg border-4 border-[#0f172a]">
              <ShieldCheck size={24} className="text-white" />
            </div>
          </div>
          
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight uppercase leading-none">Jean Ramos</h1>
            <p className="text-emerald-400 text-xl md:text-2xl font-semibold uppercase tracking-[0.2em]">
              Gestor Comercial & Performance
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="bg-slate-800/80 backdrop-blur px-4 py-1.5 rounded-lg text-sm font-bold border border-slate-700">14 ANOS EM GRANDES ORGANIZAÇÕES</span>
              <span className="bg-emerald-500 text-slate-900 px-4 py-1.5 rounded-lg text-sm font-black tracking-wide uppercase">Especialista em Turnaround</span>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 -mt-16 pb-40">
        
        {/* Tab: Perfil - Foco em Liderança e Disciplina */}
        {activeTab === 'perfil' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-6">
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-200">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Trajetória e DNA Comercial</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-xl mb-8 font-light">
                Executivo com mais de <strong className="text-slate-900 font-bold text-emerald-600">14 anos de trajetória</strong> em organizações de grande porte, focado em gestão de metas, performance de equipe e crescimento sustentável. Minha marca registrada é a entrega de resultados através do <strong className="text-slate-900 font-bold">desenvolvimento de pessoas e disciplina operacional</strong>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
                  <h3 className="font-black text-slate-900 text-lg mb-2 uppercase flex items-center gap-2">
                    <Rocket size={20} className="text-emerald-500" /> Resultados de Performance
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Especialista em transformar desafios operacionais em resultados através de planejamento estratégico e KPIs.</p>
                </div>
                <div className="group p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
                  <h3 className="font-black text-slate-900 text-lg mb-2 uppercase flex items-center gap-2">
                    <Users size={20} className="text-emerald-500" /> Legado de Liderança
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Foco em formação de sucessores e retenção de talentos (60% de promoções internas).</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: KPIs - O Coração da Performance */}
        {activeTab === 'kpis' && (
          <div className="animate-in slide-in-from-right-4 duration-700 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-emerald-500 transition-transform hover:-translate-y-2">
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-4 text-center">Conversão em Vendas</p>
                <div className="flex items-end justify-center gap-2 mb-2">
                  <h3 className="text-6xl font-black text-slate-900">9.5%</h3>
                  <span className="text-emerald-500 font-bold text-sm mb-2">Salto de 4.2%</span>
                </div>
                <p className="text-slate-500 text-sm font-medium text-center">Otimização de Funil e CRM</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-emerald-500 transition-transform hover:-translate-y-2">
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-4 text-center">Promoção Interna</p>
                <h3 className="text-6xl font-black text-slate-900 mb-2 text-center">60%</h3>
                <p className="text-slate-500 text-sm font-medium text-center">Legado de Liderança e Sucessão</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-emerald-500 transition-transform hover:-translate-y-2">
                <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-4 text-center">Mix de Produtos</p>
                <h3 className="text-6xl font-black text-slate-900 mb-2 text-center">+32%</h3>
                <p className="text-slate-500 text-sm font-medium text-center">Aumento no Ticket Médio</p>
              </div>
            </div>

            {/* Visual Case */}
            <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-emerald-400 font-black uppercase text-xs tracking-[0.3em] mb-3">Case: Votorantim Cimentos</h3>
                  <h2 className="text-3xl font-bold text-white mb-6 leading-tight">Implementação de Vendas Ativas e Dashboarding</h2>
                  <p className="text-slate-300 text-sm mb-6">Liderança na transição para modelos de vendas ativas e implementação de dashboards de produtividade que otimizaram a conversão regional.</p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="text-emerald-500" size={18} /> Otimização de Mix: 1,86 → 2,46
                    </li>
                    <li className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="text-emerald-500" size={18} /> Gestão de 40 posições comerciais
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-inner">
                   <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2">Conversão Atual</div>
                        <div className="h-4 w-full bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      <div className="flex justify-around pt-4 border-t border-slate-700">
                        <div className="text-center">
                          <p className="text-2xl font-black text-white">+32%</p>
                          <p className="text-[10px] text-slate-400 uppercase">Rentabilidade</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-black text-white">60%</p>
                          <p className="text-[10px] text-slate-400 uppercase">Sucessão</p>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Trajetória - 100% Alinhada ao Descritivo */}
        {activeTab === 'experiencia' && (
          <div className="animate-in fade-in duration-700 space-y-12">
            <div className="space-y-12">
              
              <div className="relative pl-10 border-l-4 border-emerald-500">
                <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-emerald-500 shadow-lg border-4 border-white"></div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 uppercase">Gestor Comercial & Performance</h3>
                      <p className="text-emerald-600 font-bold text-sm tracking-widest italic">GESTÃO DE ALTA PERFORMANCE</p>
                    </div>
                    <span className="bg-slate-200 text-slate-600 px-4 py-1 rounded-full text-xs font-black uppercase">2025 - PRESENTE</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                      <Zap className="text-emerald-500 shrink-0" size={20} />
                      <span className="text-sm font-semibold text-slate-700">Gestão de Metas e KPIs</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                      <Zap className="text-emerald-500 shrink-0" size={20} />
                      <span className="text-sm font-semibold text-slate-700">Planejamento Comercial</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                      <Zap className="text-emerald-500 shrink-0" size={20} />
                      <span className="text-sm font-semibold text-slate-700">Aumento de Ticket Médio</span>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                      <Zap className="text-emerald-500 shrink-0" size={20} />
                      <span className="text-sm font-semibold text-slate-700">Desenvolvimento de Equipes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative pl-10 border-l-4 border-slate-300">
                <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-slate-300 shadow-md border-4 border-white"></div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-800">Votorantim Cimentos</h3>
                    <span className="text-slate-400 font-black text-xs">2023 - 2025</span>
                  </div>
                  <p className="text-slate-500 font-bold mb-4 text-sm uppercase">Coordenadoria de Vendas e Sucessão</p>
                  <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-emerald-100 pl-4 py-1">
                    Liderança da transição para modelos de vendas ativas, elevando o mix de produtos em <strong className="text-slate-900 font-bold">+32%</strong> e estabelecendo 60% de promoções internas.
                  </p>
                </div>
              </div>

              <div className="relative pl-10 border-l-4 border-slate-300">
                <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-slate-300 shadow-md border-4 border-white"></div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-800">Grupo Casas Bahia</h3>
                    <span className="text-slate-400 font-black text-xs">2014 - 2023</span>
                  </div>
                  <p className="text-slate-500 font-bold mb-4 text-sm uppercase">Gerência Comercial & Turnaround</p>
                  <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                    <h4 className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em] mb-2">Expertise em Turnaround</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Gestão de unidades com faturamento superior a <strong className="text-slate-900">R$ 1 milhão/mês</strong>. Foco em recuperação de margem, rentabilidade e redução drástica de turnover.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab: Expertise - Competências-Chave */}
        {activeTab === 'expertise' && (
          <div className="animate-in fade-in duration-700 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-200">
                <h3 className="text-xl font-black text-slate-900 mb-8 uppercase flex items-center gap-3">
                  <PieChart className="text-emerald-500" /> Competências-Chave
                </h3>
                <div className="space-y-6">
                  <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-emerald-500">
                    <p className="font-bold text-slate-800">Gestão de Metas e KPIs</p>
                    <p className="text-xs text-slate-500">Disciplina operacional e métricas de performance.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-slate-300">
                    <p className="font-bold text-slate-800">Negociação Consultiva</p>
                    <p className="text-xs text-slate-500">Aumento de Ticket Médio e Valor Percebido.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-slate-300">
                    <p className="font-bold text-slate-800">Gestão de Portfólio & Mix</p>
                    <p className="text-xs text-slate-500">Maximização da rentabilidade por categoria.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0f172a] p-10 rounded-3xl shadow-xl text-white">
                <h3 className="text-xl font-black mb-8 uppercase flex items-center gap-3">
                  <Smartphone className="text-emerald-400" /> Toolkit & Digital
                </h3>
                <div className="space-y-6">
                  <div className="border-b border-slate-800 pb-4">
                    <p className="text-emerald-400 text-[10px] font-black uppercase mb-1">CRM & Analytics</p>
                    <p className="font-bold">Salesforce, Power BI (Dashboards de Produtividade)</p>
                  </div>
                  <div className="border-b border-slate-800 pb-4">
                    <p className="text-emerald-400 text-[10px] font-black uppercase mb-1">Marketing Digital</p>
                    <p className="font-bold">Estratégia Meta Ads & Funil Ativo</p>
                  </div>
                  <div className="pb-4">
                    <p className="text-emerald-400 text-[10px] font-black uppercase mb-1">Leadership</p>
                    <p className="font-bold">Líder Coach (I.G.T.), Metodologia Disney</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-200">
              <h3 className="text-xl font-black text-slate-900 mb-8 uppercase flex items-center gap-3">
                <GraduationCap className="text-emerald-500" /> Acadêmico
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="group">
                    <p className="text-emerald-600 text-[10px] font-black uppercase mb-1">Pós-Graduação</p>
                    <h4 className="font-bold text-slate-900 text-lg">Gestão Estratégica do Varejo</h4>
                    <p className="text-sm text-slate-500 font-medium">UniCesumar</p>
                  </div>
                </div>
                <div className="space-y-6 border-l md:border-slate-100 md:pl-10">
                  <div className="group">
                    <p className="text-emerald-600 text-[10px] font-black uppercase mb-1">Graduação</p>
                    <h4 className="font-bold text-slate-900 text-lg">Gestão Comercial</h4>
                    <p className="text-sm text-slate-500 font-medium">UniCesumar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Contato */}
        {activeTab === 'contato' && (
          <div className="animate-in zoom-in-95 duration-700 max-w-2xl mx-auto py-10 space-y-12">
            <div className="text-center">
              <h2 className="text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Conecte-se</h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Pronto para impulsionar os resultados comerciais da sua organização através de gestão de alta performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <ContactCard 
                icon={<Smartphone size={28} />} 
                label="WhatsApp Executivo" 
                value="(41) 99729-3956" 
                href="tel:41997293956"
                primary
              />
              <ContactCard 
                icon={<Mail size={28} />} 
                label="Email Profissional" 
                value="jean.macaro@yahoo.com" 
                href="mailto:jean.macaro@yahoo.com"
              />
              <ContactCard 
                icon={<Linkedin size={28} />} 
                label="LinkedIn Network" 
                value="/in/JeanRamos" 
                href="https://linkedin.com/in/jeanramosespecialista/"
              />
            </div>
          </div>
        )}

      </main>

      <footer className="text-center py-20 text-slate-300 text-[10px] uppercase font-black tracking-[0.5em] opacity-50">
        Jean Ramos • Performance Comercial • 2026
      </footer>
    </div>
  );
};

const SkillItem = ({ label, value }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-2">
      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{label}</span>
      <span className="text-sm font-black text-slate-900">{value}%</span>
    </div>
    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
      <div className="h-full bg-[#0f172a] transition-all duration-1000" style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

const ContactCard = ({ icon, label, value, href, primary }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-6 p-6 rounded-3xl transition-all duration-500 group shadow-sm hover:shadow-xl ${
      primary ? 'bg-[#0f172a] text-white hover:bg-[#1a263a]' : 'bg-white text-slate-900 border border-slate-100 hover:border-emerald-500'
    }`}
  >
    <div className={`${primary ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500'} p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <div className="text-left">
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</p>
      <p className="text-xl font-black tracking-tight">{value}</p>
    </div>
    <ChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500" />
  </a>
);


export default App;
