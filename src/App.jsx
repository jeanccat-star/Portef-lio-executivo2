import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Target, 
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
  Coins
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('perfil');

  const sections = [
    { id: 'perfil', label: 'Perfil', icon: <Briefcase size={18} /> },
    { id: 'kpis', label: 'Resultados', icon: <TrendingUp size={18} /> },
    { id: 'experiencia', label: 'Trajetória', icon: <BarChart3 size={18} /> },
    { id: 'expertise', label: 'Expertise', icon: <Target size={18} /> },
    { id: 'contato', label: 'Contacto', icon: <Mail size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] font-sans text-slate-200 selection:bg-emerald-500/30">
      {/* Barra de Navegação Flutuante */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-2xl z-50 flex gap-2 md:gap-6 overflow-x-auto max-w-[95%]">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveTab(s.id)}
            className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-xl transition-all duration-300 ${
              activeTab === s.id 
                ? 'bg-emerald-500 text-slate-900 scale-105 font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {s.icon}
            <span className="text-xs uppercase tracking-wider">{s.label}</span>
          </button>
        ))}
      </nav>

      {/* Header Premium */}
      <header className="relative pt-20 pb-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          {/* Foto com Brilho Emerald */}
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-emerald-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="w-56 h-56 rounded-full border-4 border-slate-800 overflow-hidden bg-slate-900 shadow-2xl relative">
               <img 
                 src="https://raw.githubusercontent.com/jeanmacaro/portfolio/main/img_1535.jpg" 
                 alt="Jean Ramos"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-emerald-500 p-3 rounded-full shadow-lg border-4 border-[#0a0f1a]">
              <ShieldCheck size={24} className="text-slate-900" />
            </div>
          </div>
          
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Jean Ramos
            </h1>
            <p className="text-emerald-400 text-xl md:text-2xl font-bold uppercase tracking-[0.2em]">
              Gestor Comercial & Performance
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-lg text-sm font-bold border border-white/10">14 ANOS EM GRANDES PLAYERS</span>
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-4 py-1.5 rounded-lg text-sm font-black uppercase tracking-wide">Especialista em Turnaround</span>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-5xl mx-auto px-6 -mt-24 pb-40 relative z-20">
        
        {/* Seção: Perfil */}
        {activeTab === 'perfil' && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-6">
            <div className="bg-slate-900/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-emerald-500/20 p-3 rounded-2xl text-emerald-400">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Business Strategy</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-xl mb-10 font-light">
                Executivo com foco em <strong className="text-emerald-400 font-bold">aceleração comercial</strong> e disciplina operacional. Especialista em converter desafios operacionais em resultados de alta performance, liderando equipas através do <strong className="text-white font-bold">desenvolvimento contínuo</strong> e gestão rigorosa de indicadores (KPIs).
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-emerald-500/50 transition-all duration-500 group">
                  <Rocket size={32} className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-black text-white text-lg mb-2 uppercase">Performance Sustentável</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Transformação de modelos transacionais em vendas consultivas de alto ticket e recorrência.</p>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:border-emerald-500/50 transition-all duration-500 group">
                  <Users size={32} className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-black text-white text-lg mb-2 uppercase">Cultura de Sucessão</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Formação de novas lideranças com 60% de taxa de promoção interna na última operação.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Seção: KPIs - Visual Impact */}
        {activeTab === 'kpis' && (
          <div className="animate-in zoom-in-95 duration-700 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Conversão em Vendas', value: '9.5%', sub: 'Salto de 4.2%', icon: <TrendingUp size={20}/> },
                { label: 'Promoção Interna', value: '60%', sub: 'Legado de Sucessão', icon: <Users size={20}/> },
                { label: 'Mix de Produtos', value: '+32%', sub: 'Aumento de Rentabilidade', icon: <Coins size={20}/> }
              ].map((kpi, idx) => (
                <div key={idx} className="bg-slate-900/80 p-8 rounded-3xl border-l-4 border-emerald-500 shadow-xl transition-all hover:bg-slate-800">
                  <div className="text-emerald-500 mb-4">{kpi.icon}</div>
                  <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-2">{kpi.label}</p>
                  <h3 className="text-5xl font-black text-white mb-2 tracking-tighter">{kpi.value}</h3>
                  <p className="text-emerald-400/80 text-sm font-bold uppercase">{kpi.sub}</p>
                </div>
              ))}
            </div>

            {/* Case Visual */}
            <div className="bg-gradient-to-br from-slate-900 to-[#0a0f1a] p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-emerald-500 font-black uppercase text-xs tracking-[0.3em] mb-3">Case: Votorantim Cimentos</h3>
                  <h2 className="text-4xl font-black text-white mb-6 leading-tight uppercase">Sales Force Effectiveness</h2>
                  <p className="text-slate-400 text-lg mb-8 font-light">Implementação de dashboards de produtividade e transição para modelos de vendas ativas (Outbound).</p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-200">
                      <CheckCircle2 className="text-emerald-500" size={20} /> Otimização de Mix: 1,86 → 2,46
                    </li>
                    <li className="flex items-center gap-3 text-slate-200">
                      <CheckCircle2 className="text-emerald-500" size={20} /> Gestão de 40 posições comerciais
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] rounded-full"></div>
                  <div className="bg-slate-800/50 backdrop-blur-md p-10 rounded-3xl border border-white/10 text-center relative z-10">
                    <div className="text-7xl font-black text-white mb-2">9.5%</div>
                    <div className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Taxa de Conversão Peak</div>
                    <div className="mt-8 h-3 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[95%] shadow-[0_0_15px_#10b981]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trajetória Timeline */}
        {activeTab === 'experiencia' && (
          <div className="animate-in slide-in-from-left-8 duration-700 space-y-12 pl-4">
            <div className="border-l-2 border-white/10 space-y-16">
              {[
                {
                  date: '2025 - PRESENTE',
                  title: 'Gestor Comercial & Performance',
                  company: 'Foco em Alta Performance',
                  desc: 'Gestão de metas e KPIs, planejamento comercial e formação de equipas de elite.',
                  tags: ['P&L Management', 'KPI Analytics', 'Liderança']
                },
                {
                  date: '2023 - 2025',
                  title: 'Coordenadoria de Vendas e Sucessão',
                  company: 'Votorantim Cimentos',
                  desc: 'Transição para vendas ativas, elevando o mix de produtos em +32% e gerindo 60% de promoções internas.',
                  tags: ['Mix de Produtos', 'Sales Outbound', 'Desenvolvimento']
                },
                {
                  date: '2014 - 2023',
                  title: 'Gerência Comercial & Turnaround',
                  company: 'Grupo Casas Bahia',
                  desc: 'Gestão de unidades com faturamento > R$ 1M/mês. Especialista em recuperação de rentabilidade e redução de turnover.',
                  tags: ['Turnaround', 'Market Expansion', 'Profitability']
                }
              ].map((exp, i) => (
                <div key={i} className="relative pl-12 group">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-slate-800 border-2 border-emerald-500 group-hover:scale-125 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                  <span className="text-emerald-500 font-black text-xs tracking-widest uppercase">{exp.date}</span>
                  <h3 className="text-2xl font-black text-white mt-2 group-hover:text-emerald-400 transition-colors">{exp.title}</h3>
                  <p className="text-slate-400 font-bold text-sm mb-4">{exp.company}</p>
                  <p className="text-slate-300 font-light text-lg mb-6 leading-relaxed max-w-2xl">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-black text-slate-400 uppercase border border-white/5 tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Expertise Grid */}
        {activeTab === 'expertise' && (
          <div className="animate-in fade-in duration-700 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900/60 p-10 rounded-[2.5rem] border border-white/10 shadow-xl">
                <h3 className="text-xl font-black text-white mb-8 uppercase flex items-center gap-3">
                  <PieChart className="text-emerald-500" /> Domínio Comercial
                </h3>
                <div className="space-y-10">
                  <SkillItem label="Estratégia de Vendas (GTM)" value={100} />
                  <SkillItem label="Sales Force Effectiveness" value={95} />
                  <SkillItem label="Gestão de P&L / DRE" value={92} />
                  <SkillItem label="Gestão de Carteira" value={90} />
                </div>
              </div>

              <div className="bg-white text-slate-900 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-black mb-8 uppercase flex items-center gap-3">
                    <Smartphone size={24} /> Sales Tech Stack
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">CRM & Analytics</p>
                      <p className="font-black text-lg">Salesforce, SAP, Power BI</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Performance</p>
                      <p className="font-black text-lg">Meta Ads, Funil Ativo, API Business</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Leadership</p>
                      <p className="font-black text-lg">Líder Coach (IGT), Disney CX</p>
                    </div>
                  </div>
                </div>
                <Zap size={180} className="absolute -bottom-10 -right-10 text-slate-100/50" />
              </div>
            </div>
          </div>
        )}

        {/* Contacto Section */}
        {activeTab === 'contato' && (
          <div className="animate-in zoom-in-95 duration-700 max-w-2xl mx-auto py-12 space-y-12">
            <div className="text-center">
              <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">Conecte-se</h2>
              <p className="text-slate-400 text-lg font-light">Disponível para impulsionar resultados em grandes organizações através de gestão de alta performance.</p>
            </div>
            
            <div className="space-y-4">
              <ContactCard 
                icon={<Smartphone size={28} />} 
                label="WhatsApp Comercial" 
                value="(41) 99729-3956" 
                href="tel:41997293956"
                primary
              />
              <ContactCard 
                icon={<Mail size={28} />} 
                label="E-mail Profissional" 
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

      <footer className="text-center py-24 text-slate-500 text-[10px] uppercase font-black tracking-[0.5em] opacity-40">
        Jean Ramos • Performance Comercial • 2026
      </footer>
    </div>
  );
};

const SkillItem = ({ label, value }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-3">
      <span className="text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-emerald-500 transition-colors">{label}</span>
      <span className="text-sm font-black text-white">{value}%</span>
    </div>
    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
      <div 
        className="h-full bg-emerald-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_#10b981]" 
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

const ContactCard = ({ icon, label, value, href, primary }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-6 p-8 rounded-[2rem] transition-all duration-500 group shadow-lg ${
      primary ? 'bg-emerald-500 text-slate-900 hover:scale-[1.02] shadow-emerald-500/20' : 'bg-slate-900 text-white border border-white/10 hover:border-emerald-500'
    }`}
  >
    <div className={`${primary ? 'bg-slate-900 text-emerald-500' : 'bg-emerald-500/10 text-emerald-500'} p-4 rounded-2xl group-hover:rotate-6 transition-transform`}>
      {icon}
    </div>
    <div className="text-left">
      <p className={`text-[10px] font-black uppercase tracking-widest opacity-60`}>{label}</p>
      <p className="text-xl font-black tracking-tight leading-tight">{value}</p>
    </div>
    <ChevronRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
  </a>
);

export default App;
