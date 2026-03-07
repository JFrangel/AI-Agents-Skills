"use client";

import Link from "next/link";
import { Button } from "@/components/Button";

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30 relative overflow-hidden">
      {/* Dynamic Background Mesh */}
      <div className="fixed inset-0 z-0 bg-mesh-gradient opacity-40" />
      
      {/* Floating Animated Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] animate-float" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-24">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
              <svg className="w-4 h-4 text-slate-400 group-hover:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-tighter uppercase text-slate-400 group-hover:text-slate-200 transition-colors underline decoration-cyan-500/50">Volver a Skills</span>
          </Link>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500 bg-cyan-500/5 px-4 py-1 rounded-full border border-cyan-500/20">
            Internal Documentation
          </div>
        </nav>

        {/* Header */}
        <div className="mb-24">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 bg-linear-to-r from-white to-slate-500 bg-clip-text text-transparent">
            Design System <br />
            <span className="text-cyan-500">NeuralForge</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-2xl">
            Bienvenido al Design System modular. Un estándar visual diseñado para crear interfaces AI Studio consistentes, accesibles y estéticamente superiores.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid gap-8">
          <section className="glass border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-3xl hover:border-white/20 transition-all group">
            <h2 className="text-2xl font-black mb-6 text-white group-hover:text-cyan-400 transition-colors">¿Qué incluye este estándar?</h2>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-1">1</div>
                <div>
                  <h3 className="font-bold text-slate-200">Design Tokens</h3>
                  <p className="text-sm text-slate-400 mb-2">Colores, radios y animaciones base en un core JSON.</p>
                  <Link href="/skills/frontend/design-system/examples/design-tokens.json" className="text-xs font-black uppercase tracking-widest text-cyan-400 hover:text-white transition-colors">Ver JSON de Tokens →</Link>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-1">2</div>
                <div>
                  <h3 className="font-bold text-slate-200">Componentes Atómicos</h3>
                  <p className="text-sm text-slate-400 mb-2">Componentes puros como el Button con variantes premium.</p>
                  <Link href="/skills/frontend/design-system/components/Button.tsx" className="text-xs font-black uppercase tracking-widest text-purple-400 hover:text-white transition-colors">Explorar Componentes →</Link>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-1">3</div>
                <div>
                  <h3 className="font-bold text-slate-200">Validación y Accesibilidad</h3>
                  <p className="text-sm text-slate-400 mb-4">Scripts automatizados para garantizar la calidad del código y UX.</p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/skills/frontend/design-system/scripts/check-tailwind-config.js" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-400 hover:bg-white/10 transition-all uppercase tracking-widest">Tailwind Audit</Link>
                    <Link href="/skills/frontend/design-system/scripts/run-axe.js" className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-400 hover:bg-white/10 transition-all uppercase tracking-widest">Axe Accessibility</Link>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section className="glass border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-3xl hover:border-white/20 transition-all group">
            <h2 className="text-2xl font-black mb-6 text-white group-hover:text-cyan-400 transition-colors">Implementación</h2>
            <div className="space-y-4 text-slate-400 font-medium leading-relaxed">
              <p>El flujo de trabajo recomendado para cualquier desarrollador integrando este sistema es:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Sincronizar <span className="text-slate-200 underline decoration-cyan-500/30">Design Tokens</span> con la configuración de Tailwind v4.</li>
                <li>Utilizar componentes base de <code className="bg-white/5 px-2 py-0.5 rounded text-cyan-400 text-sm">@/components/ui</code>.</li>
                <li>Ejecutar auditorías de accesibilidad antes de promover a pre-producción.</li>
              </ul>
            </div>
            <div className="flex gap-4 mt-10">
              <Button variant="gradient" className="rounded-xl px-10 py-6 font-black uppercase tracking-widest">Ver Docs Completa</Button>
              <Button variant="outline" className="rounded-xl px-10 py-6 font-black uppercase tracking-widest border-white/10 hover:bg-white/5 text-slate-300">Explorar Ejemplos</Button>
            </div>
          </section>
        </div>

        <footer className="mt-24 pt-12 border-t border-white/5 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-600">
            Standard Secured by Security Guard | NeuralForge Ecosystem
          </p>
        </footer>
      </div>
    </main>
  );
}
