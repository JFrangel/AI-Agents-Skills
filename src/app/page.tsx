"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const skills = [
  {
    name: "plan",
    title: "Planificación & Arquitectura",
    description: "Sistemas modulares y refactorización de alta precisión.",
    link: "/skills/core/plan/SKILL.md",
    color: "from-blue-600/20 to-cyan-500/20",
    glow: "group-hover:shadow-blue-500/20",
    icon: "🏗️",
    highlights: ["Clean Architecture", "Module Mapping", "Refactor Flow"]
  },
  {
    name: "idea-to-startup",
    title: "Idea To Startup",
    description: "Pipeline agnóstico de producto y validación técnica.",
    link: "/skills/core/idea-to-startup/SKILL.md",
    color: "from-purple-600/20 to-pink-500/20",
    glow: "group-hover:shadow-pink-500/20",
    icon: "🚀",
    highlights: ["Market Analysis", "MVP Pipeline", "Product Logic"]
  },
  {
    name: "ai-founder",
    title: "Founder & Estrategy",
    description: "Definición de negocio, decks y modelos de monetización.",
    link: "/skills/ai/ai-founder/SKILL.md",
    color: "from-amber-500/20 to-orange-600/20",
    glow: "group-hover:shadow-orange-500/20",
    icon: "💼",
    highlights: ["Business Models", "Pitch Mastery", "Risk Audit"]
  },
  {
    name: "ai-cto",
    title: "Technical CTO",
    description: "Decisiones críticas de stack e infraestructura cloud.",
    link: "/skills/ai/ai-cto/SKILL.md",
    color: "from-emerald-500/20 to-teal-600/20",
    glow: "group-hover:shadow-emerald-500/20",
    icon: "🛡️",
    highlights: ["Infrastructure Design", "Scalability", "DevOps ROI"]
  },
  {
    name: "design-system",
    title: "Design System UI/UX",
    description: "Estética premium, tokens visuales y componentes accesibles.",
    link: "/skills/frontend/design-system/SKILL.md",
    color: "from-indigo-600/20 to-violet-500/20",
    glow: "group-hover:shadow-indigo-500/20",
    icon: "🎨",
    highlights: ["Glassmorphism", "Micro-animations", "Accessibility"]
  },
  {
    name: "security-guard",
    title: "Security Guard",
    description: "Auditoría estricta y blindaje de código vulnerable.",
    link: "/skills/devops/security-guard/SKILL.md",
    color: "from-red-600/20 to-rose-500/20",
    glow: "group-hover:shadow-red-500/20",
    icon: "⚔️",
    highlights: ["Threat Modeling", "Auth Guard", "Pen-testing"]
  },
  {
    name: "arquitectura-agentes",
    title: "Agent Architecture",
    description: "Agent Harness, Prompt Caching y orquestación masiva.",
    link: "/skills/ai/arquitectura-agentes/SKILL.md",
    color: "from-blue-700/20 to-indigo-600/20",
    glow: "group-hover:shadow-blue-700/20",
    icon: "🧬",
    highlights: ["Harness Design", "Context Control", "SDR System"]
  },
  {
    name: "documentation",
    title: "Tech Writer & Docs",
    description: "ADRs, Runbooks y estructuración de contexto experto.",
    link: "/skills/documentation/documentation/SKILL.md",
    color: "from-teal-600/20 to-emerald-500/20",
    glow: "group-hover:shadow-teal-500/20",
    icon: "📚",
    highlights: ["ADR Protocol", "Context Mapping", "Internal Wiki"]
  },
  {
    name: "chunk-scoring",
    title: "RAG & Chunking",
    description: "Fragmentación semántica y optimización de embeddings.",
    link: "/skills/ai/chunk-scoring/SKILL.md",
    color: "from-fuchsia-600/20 to-pink-500/20",
    glow: "group-hover:shadow-fuchsia-500/20",
    icon: "🧠",
    highlights: ["Vector Scoring", "Semantic Split", "RAG Golden Rules"]
  },
  {
    name: "crm",
    title: "CRM Architect",
    description: "Diseño de funnels y automatización de lead scoring.",
    link: "/skills/backend/crm/SKILL.md",
    color: "from-orange-600/20 to-red-500/20",
    glow: "group-hover:shadow-orange-600/20",
    icon: "📊",
    highlights: ["Lead Flow", "Sales Logic", "B2B Automation"]
  },
  {
    name: "best-practices",
    title: "QA & Best Practices",
    description: "Control de calidad y validación de estándares clean.",
    link: "/skills/testing/best-practices/SKILL.md",
    color: "from-yellow-500/20 to-amber-600/20",
    glow: "group-hover:shadow-yellow-500/20",
    icon: "✅",
    highlights: ["Clean Code", "Test Coverage", "Audit Scoring"]
  },
  {
    name: "find-skills",
    title: "Skill Router",
    description: "Navegación inteligente y descubrimiento de capacidades.",
    link: "/skills/core/find-skills/SKILL.md",
    color: "from-slate-600/20 to-gray-500/20",
    glow: "group-hover:shadow-slate-500/20",
    icon: "🧭",
    highlights: ["Catalog Discovery", "Multi-trigger", "Guided Path"]
  }
];

export default function LandingSkills() {
  const [loading, setLoading] = useState(true);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const [showOrchestration, setShowOrchestration] = useState(false);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setShowPalette(true);
      }
      if (e.key === "Escape") setShowPalette(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleSkill = (skillName: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillName) 
        ? prev.filter(s => s !== skillName)
        : [...prev, skillName]
    );
  };

  const copyCommand = () => {
    const commands = selectedSkills.map(s => `/${s}`).join(' ');
    navigator.clipboard.writeText(`${commands} `);
    setCopied(true);
    setShowOrchestration(true); // Show the orchestration example modal
    setTimeout(() => setCopied(false), 1500);
  };

  if (loading) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-slate-100 font-sans">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-2 border-l-2 border-cyan-400 animate-spin" />
          <div className="absolute inset-0 h-24 w-24 rounded-full border-b-2 border-r-2 border-purple-500 animate-spin-reverse opacity-50" />
        </div>
        <h2 className="mt-8 text-xs font-bold tracking-[0.4em] uppercase text-cyan-500/50 animate-pulse">Initializing NeuralForge</h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30 relative">
      {/* Dynamic Background Mesh */}
      {/* Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0 bg-mesh-gradient opacity-40 shrink-0" />
      
      {/* Floating Animated Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[10%] right-[5%] w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[150px] animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:px-8">
        {/* Navigation / Top Bar */}
        <nav className="flex justify-between items-center mb-24">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="text-white font-black text-xs">NF</span>
            </div>
            <span className="text-sm font-bold tracking-tighter uppercase text-slate-200">NeuralForge <span className="text-cyan-500">Skills</span></span>
          </div>
          <div className="flex space-x-6 text-xs font-medium text-slate-500 uppercase tracking-widest">
            <Link href="/design-system" className="hover:text-cyan-400 transition-colors">Design System</Link>
            <a href="/docs/agent_harness_masterclass.md" className="hover:text-cyan-400 transition-colors">Framework</a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-32 space-y-8">
          <div className="inline-flex items-center space-x-2 rounded-full border border-white/5 bg-white/5 px-4 py-1 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100/70">Agent Harness v3.0 Active</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
            Scale your <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">AI Intelligence.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
            Una orquesta de 12 agentes especializados diseñados bajo el estándar <span className="text-slate-200">Agent Harness</span>. Selecciona y combina para ejecutar misiones complejas.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-40">
          {skills.map((skill) => {
            const isSelected = selectedSkills.includes(skill.name);
            return (
              <div 
                key={skill.name} 
                onClick={() => toggleSkill(skill.name)}
                className={`group relative flex flex-col cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-[2.5rem] h-[450px] overflow-hidden border glass glass-hover ${
                  isSelected 
                    ? 'border-cyan-500/50 bg-slate-900/80 shadow-[0_0_50px_rgba(6,182,212,0.3)] -translate-y-2' 
                    : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8 hover:-translate-y-1'
                } backdrop-blur-3xl ${skill.glow}`}
              >
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Background Decor */}
                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-linear-to-br ${skill.color} blur-[100px] opacity-0 group-hover:opacity-50 transition-all duration-1000 group-hover:scale-150`} />
                
                <div className="p-8 flex flex-col h-full relative z-10">
                  {/* Skill Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      isSelected ? 'bg-cyan-500 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]' : 'border-white/10 bg-white/5 text-transparent'
                    }`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  <h3 className={`text-2xl font-black tracking-tight mb-2 transition-colors ${isSelected ? 'text-cyan-400' : 'text-slate-100'}`}>
                    {skill.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed font-medium mb-8">
                    {skill.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mt-auto">
                    {skill.highlights.map((h, i) => (
                      <div key={i} className="flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
                        <div className={`h-1 w-1 rounded-full mr-2 bg-linear-to-r ${skill.color} opacity-40 group-hover:opacity-100`} />
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* Footer Link */}
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <div onClick={(e) => e.stopPropagation()} className="inline-block w-full">
                      <Link href={skill.link} className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-all">
                        <span>Manifesto Protocol</span>
                        <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Futuristic Command Bar */}
      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-2xl z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        selectedSkills.length > 0 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-32 opacity-0 scale-90'
      }`}>
        <div className="bg-slate-900/80 backdrop-blur-3xl border border-cyan-500/20 rounded-3xl p-2 pl-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] flex items-center justify-between pointer-events-auto">
          <div className="flex flex-col flex-1 min-w-0 pr-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 mb-1">Combined Sequence ({selectedSkills.length})</span>
            <div className="flex items-center space-x-1 overflow-hidden">
               {selectedSkills.map(s => (
                 <span key={s} className="shrink-0 px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 text-[10px] font-bold border border-cyan-500/20">/{s}</span>
               ))}
               <span className="text-slate-600 font-mono text-xs animate-pulse ml-2">_</span>
            </div>
          </div>
          <button 
            onClick={copyCommand}
            className={`group relative overflow-hidden px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
              copied ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-500/20' : 'bg-white text-slate-950 hover:bg-cyan-400 shadow-xl shadow-white/5'
            }`}
          >
            <span className="relative z-10 flex items-center">
              {copied ? 'Comando Copiado' : 'Ejecutar Secuencia'}
              {!copied && <svg className="w-4 h-4 ml-2 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>}
            </span>
          </button>
        </div>
      </div>

      {/* Orchestration Preview Modal */}
      {showOrchestration && (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-4 backdrop-blur-xl bg-slate-950/60 animate-in zoom-in duration-300">
          <div className="w-full max-w-2xl bg-slate-900/90 border border-cyan-500/30 rounded-[2.5rem] shadow-2xl overflow-hidden glass p-10 relative">
            <button 
              onClick={() => setShowOrchestration(false)}
              className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1 mb-8">
              <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Boxed Handshake System</span>
            </div>
            
            {/* Report Header */}
            <div className="mb-8">
              <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em] mb-4">REPORTE DE EJECUCIÓN</h2>
              <p className="text-slate-100 text-xl font-bold leading-relaxed">
                Para el ajuste de <span className="text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">Branding Técnico</span> solicitado se activaron las habilidades:
              </p>
            </div>
            
            <div className="bg-slate-950/90 rounded-3xl p-8 font-mono text-[13px] border border-white/10 shadow-3xl relative overflow-hidden group ring-1 ring-cyan-500/20">
              {/* Terminal Header Decor */}
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                </div>
                <span className="text-[10px] text-slate-600 uppercase tracking-widest font-black">Secure_Orchestrator_Trace.v3</span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-slate-600 text-[10px] uppercase tracking-[0.2em] font-black mb-2 italic flex items-center">
                    <span className="text-cyan-500 mr-2 text-base">⌬</span> SKILLS ACTIVADAS
                  </div>
                  <div className="text-cyan-400 font-bold text-xl tracking-tight">
                    {selectedSkills.map(s => s.toUpperCase()).join(' · ')}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black mb-2 opacity-50">Applied</div>
                  <div className="space-y-2 border-l-2 border-cyan-500/20 pl-6 ml-1">
                    {selectedSkills.map(s => (
                      <div key={s} className="flex items-center space-x-4 text-[12px]">
                        <span className="text-slate-400 font-bold min-w-[90px]">{s.toUpperCase()}</span>
                        <span className="text-cyan-500/30">→</span>
                        <span className="text-slate-300">Implementando {skills.find(sk => sk.name === s)?.title.toLowerCase()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                   <div className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-black mb-3">STATUS</div>
                   <div className="space-y-2">
                     <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-200 text-xs">
                        <span className="flex items-center"><span className="text-cyan-500 mr-2 text-lg">🛡</span> SECURITY ACTIVE</span>
                        <span className="flex items-center"><span className="text-purple-500 mr-2 text-lg">⚗</span> ENV: DEV</span>
                        <span className="flex items-center"><span className="text-amber-500 mr-2 text-lg">⟳</span> MODE: SYSTEM</span>
                     </div>
                     <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-500 text-[11px]">
                        <span className="flex items-center text-emerald-500/80"><span className="mr-2">◉</span> Router 0.98 confidence</span>
                        <span className="flex items-center"><span className="mr-2">▣</span> Task TSK-1042</span>
                     </div>
                   </div>
                </div>
              </div>

              {/* Scanline effect */}
              <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-white/2 to-transparent bg-size-[100%_4px] animate-scanline" />
            </div>
            
            <button 
              onClick={() => setShowOrchestration(false)}
              className="mt-8 w-full bg-white text-slate-950 font-black py-4 rounded-xl shadow-lg hover:bg-cyan-400 transition-all uppercase tracking-widest text-xs"
            >
              Cerrar Ejecución
            </button>
          </div>
        </div>
      )}

      {/* Command Palette Modal */}
      {showPalette && (
        <div className="fixed inset-0 z-100 flex items-start justify-center pt-[15vh] px-4 backdrop-blur-md bg-slate-950/40 animate-in fade-in duration-300">
          <div 
            className="w-full max-w-xl bg-slate-900/90 border border-white/10 rounded-3xl shadow-2xl overflow-hidden glass shadow-cyan-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-white/5 flex items-center">
              <span className="text-cyan-500 font-mono text-xl mr-4">/</span>
              <input 
                autoFocus
                type="text" 
                placeholder="Search skills or commands..."
                className="bg-transparent border-none outline-none text-slate-100 text-lg w-full placeholder:text-slate-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
              {skills
                .filter(s => s.title.toLowerCase().includes(search.toLowerCase()) || s.name.toLowerCase().includes(search.toLowerCase()))
                .map(skill => (
                  <div 
                    key={skill.name}
                    onClick={() => {
                      toggleSkill(skill.name);
                      setShowPalette(false);
                    }}
                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{skill.icon}</span>
                      <div>
                        <div className="text-slate-100 font-bold">{skill.title}</div>
                        <div className="text-slate-500 text-xs">{skill.description}</div>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-cyan-500/50 group-hover:text-cyan-400">/{skill.name}</div>
                  </div>
                ))}
            </div>
            <div className="p-4 bg-slate-950/50 border-t border-white/5 flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
              <span>{skills.length} Skills Found</span>
              <div className="flex space-x-4">
                <span><kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-slate-400">ESC</kbd> to close</span>
                <span><kbd className="px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-slate-400">↵</kbd> to select</span>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 -z-10" onClick={() => setShowPalette(false)} />
        </div>
      )}

      <style jsx global>{`
        @keyframes spin-reverse {
          to { transform: rotate(-360deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
