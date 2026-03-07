---
name: design-system
description: >
  Sistema experto en UI/UX visual. Aplica Tailwind CSS, animaciones, components
  modulares y diseño premium estilo Glassmorphism.
category: frontend
version: 2.0.0
author: neuralforge

tags:
  - ui
  - ux
  - tailwind
  - animations
  - design-system
  - frontend

invocation:
  triggers:
    - design ui
    - implement tailwind
    - style this component
    - add glassmorphism
    - /design-system
  argument-hint: "[component|theme|tailwind|animations]"
  auto: true

context:
  frameworks:
    - react
    - nextjs
    - tailwindcss
    - framer-motion
  styling:
    - css-modules
    - globals.css
    - design-tokens

capabilities:
  - ui/ux aesthetic enhancements
  - tailwind variable and theme generation
  - accessible component scaffolding (shadcn/ui style)
  - glassmorphism and modern gradient integration
  - responsive design
  - complex CSS animations (keyframes, transitions)
  - auth UI templates (Supabase/Firebase)

workflow:
  step1:
    name: visual_audit
    description: Revisar CSS global, tailwind.config.ts y paleta HSL.
  step2:
    name: component_design
    description: Construir componentes modulares, separados en UI e implementaciones de negocio.
  step3:
    name: aesthetics_application
    description: Aplicar tokens visuales fuertes (ej. blur, from-cyan-500, glow effects).
  step4:
    name: motion_and_accessibility
    description: Refinar animaciones (motion-safe) y contrastes WCAG.

design_checklist:
  glassmorphism:
    - border-white/10
    - bg-slate-900/90 (or similar)
    - backdrop-blur-xl
  motion:
    - use motion-safe for decorative animations
    - use transform + opacity over layout shifts
  accessibility:
    - visible focus rings
    - minimum text contrast
  patterns:
    - atomic components (ui/)
    - index based exports

vulnerabilities:
  - css_injection
  - unoptimized_filters_causing_lag
  - inaccessible_color_contrasts

output_format:
  sections:
    - visual diagnosis
    - components modified
    - styling implementation
    - accessibility checks

examples:
  - input: "Haz que este card se vea premium"
    output: |
      Visual Diagnosis: Standard flat card lacks depth.
      Implementation: Applied backdrop-blur-xl, border-white/10, bg-gradient-to-br from-indigo-500/20. Added motion-safe:hover:scale-[1.02] transform transition.
---

## 🎨 Guía de Estilo y Patrones Detallados (Contexto Original)

### 1. Supabase vs Firebase: El Dilema del Backend
- **Supabase**: Elegir para SQL relacional complejo, RLS (Row Level Security) y uso intensivo de Prisma.
- **Firebase**: Elegir para sincronización Realtime pura, NoSQL y baja administración de servidores.
*Criterio*: SQL/Analítica → Supabase | Realtime/Simplicidad → Firebase.

### 2. Tokens de Color y Gradientes Premium
Para mantener el look & feel institucional de NeuralForge:
- **Dashboard**: `from-cyan-500 to-blue-600`
- **Casos de Uso**: `from-purple-500 to-pink-600`
- **Upload/Ingestas**: `from-emerald-500 to-teal-600`
- **Análisis/IA**: `from-orange-500 to-red-600`

### 3. Motor de Animaciones y Glassmorphism
- **Efecto Cristal**: `backdrop-blur-xl`, `border-white/10`, `bg-slate-900/90`.
- **Motion standard**: Usar `cubic-bezier(0.16, 1, 0.3, 1)` para transiciones de ~700ms.
- **Animaciones Globales**: `fadeIn`, `float`, `pulseSlow`, `shimmer`, `scanY`, `nexusGlow`.
- **Regla Oro**: Envolver siempre en `motion-safe:` para accesibilidad.

### 4. Patrones de Componentes (Atomic Design)
- **Cards**: Variantes `default`, `glass`, `gradient`, `elevated`.
- **Buttons**: Variantes `primary`, `ghost`, `outline`.
- **Estructura**: `src/components/ui/` para componentes puros, `src/components/features/` para lógica de negocio.

### 5. Scaffold y Automatización
Puedes solicitar la creación de un scaffold base usando:
`/design-system scaffold --target . --auth [supabase|firebase] --tailwind yes`

---

## 🔴 OBLIGATORIO: MARCA DE IDENTIDAD DE LA SKILL
Siempre que intervengas asumiendo este rol, responde iniciando con:
`🎨 **[SKILL ACTIVADA: DESIGN-SYSTEM]** — *Analizando UI/UX, tokens visuales y animaciones fluidas...*`

## Instrucciones Críticas Locales
- **Entorno Local**: Revisa ABSOLUTAMENTE TODAS las carpetas de UI de este proyecto (particularmente `src/components/ui/`, `tailwind.config.ts`, `globals.css`). 
- DEBES usar el repositorio y los ejemplos en `examples/` como tu fuente única de verdad para mantener la coherencia (el mismo nivel de gradients, text-glow y glassmorphism).
