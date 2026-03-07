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
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
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
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">AI Intelligence.</span>
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
                className={`group relative flex flex-col cursor-pointer transition-all duration-500 ease-out rounded-3xl h-[420px] overflow-hidden border glass glass-hover ${
                  isSelected 
                    ? 'border-cyan-500/50 bg-slate-900/60 shadow-[0_0_30px_rgba(6,182,212,0.2)] scale-[1.02]' 
                    : 'border-white/5 bg-white/5 hover:border-white/10 hover:bg-white/[0.07] hover:scale-[1.01]'
                } backdrop-blur-xl ${skill.glow}`}
              >
                {/* Background Decor */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.color} blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />
                
                <div className="p-8 flex flex-col h-full relative z-10">
                  {/* Skill Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isSelected ? 'bg-cyan-500 border-cyan-400 text-white shadow-lg shadow-cyan-500/50' : 'border-slate-700 bg-slate-800 text-transparent'
                    }`}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold tracking-tight mb-2 transition-colors ${isSelected ? 'text-cyan-400' : 'text-slate-100'}`}>
                    {skill.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed font-medium mb-8">
                    {skill.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mt-auto">
                    {skill.highlights.map((h, i) => (
                      <div key={i} className="flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">
                        <div className={`h-1 w-1 rounded-full mr-2 bg-gradient-to-r ${skill.color} opacity-40 group-hover:opacity-100`} />
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
              {copied ? 'Copied to Clipboard' : 'Execute Sequence'}
              {!copied && <svg className="w-4 h-4 ml-2 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>}
            </span>
          </button>
        </div>
      </div>

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
