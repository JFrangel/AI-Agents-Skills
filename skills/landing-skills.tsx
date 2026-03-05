import React, { useEffect, useState } from "react";
import Link from "next/link";

const skills = [
  {
    name: "plan",
    title: "Planificación y Arquitectura",
    description:
      "Skill para planificación detallada, arquitectura modular, ejecución de cambios y documentación constante. Úsala para estructurar ideas, planes de acción o refactorizar código de forma escalable.",
    link: "./plan/SKILL.md",
    highlights: [
      "Arquitectura modular Next.js/React",
      "Refactorización segura y documentada",
      "Impacto y validación de cambios",
      "Documentación constante (JSDoc)"
    ]
  },
  {
    name: "idea-to-startup",
    title: "De Idea a Startup",
    description:
      "Pipeline agnóstico y conceptual para transformar ideas en productos tecnológicos completos, arquitectura, modelo de negocio y roadmap sin atarse a frameworks específicos.",
    link: "./idea-to-startup/SKILL.md",
    highlights: [
      "Captura y definición del problema",
      "Diseño de producto y arquitectura",
      "Roadmap y tareas técnicas",
      "Modelo de negocio agnóstico"
    ]
  },
  {
    name: "find-skills",
    title: "Descubre Skills",
    description:
      "Ayuda a encontrar e instalar la skill adecuada para cada necesidad. Actúa como router inteligente y catálogo de capacidades.",
    link: "./find-skills/SKILL.md",
    highlights: [
      "Catálogo de skills disponibles",
      "Sugerencias inteligentes",
      "Enlace rápido a skills relevantes"
    ]
  },
  {
    name: "design-system",
    title: "Design System NeuralForge",
    description:
      "Guía y plantillas para aplicar el sistema de diseño y arquitectura del proyecto NeuralForge en cualquier repo. Incluye tokens, componentes, integración auth y convenciones Tailwind.",
    link: "./design-system/SKILL.md",
    highlights: [
      "Tokens y configuración Tailwind",
      "Componentes modulares y accesibles",
      "Integración Supabase/Firebase",
      "Checklist y scripts de validación"
    ]
  },
  {
    name: "ai-founder",
    title: "AI Founder & CTO",
    description:
      "Sistema avanzado para convertir ideas en startups estructuradas. Incluye producto, arquitectura, roadmap, estrategia de negocio y crecimiento.",
    link: "./ai-founder/SKILL.md",
    highlights: [
      "Transforma ideas en startups",
      "Roadmap y estrategia de crecimiento",
      "Arquitectura y modelo de negocio"
    ]
  },
  {
    name: "ai-cto",
    title: "AI CTO: Plan Técnico",
    description:
      "Actúa como CTO y Product Manager experto para transformar ideas vagas en planes de ejecución completos (Producto, Arquitectura, MVP, Roadmap).",
    link: "./ai-cto/SKILL.md",
    highlights: [
      "Definición de stack y arquitectura",
      "MVP técnico y roadmap",
      "Ejecución rápida para hackathons"
    ]
  }
];

export default function LandingSkills() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
        <span className="ml-4 text-lg font-semibold">Cargando catálogo de skills...</span>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Catálogo de Skills</h1>
      <p className="mb-8 text-lg">Explora cada skill y descubre cómo puede ayudarte a estructurar, planificar, diseñar o lanzar tu proyecto.</p>
      <div className="grid gap-8">
        {skills.map(skill => (
          <section key={skill.name} className="border rounded-lg p-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold mb-2">{skill.title}</h2>
            <p className="mb-2 text-gray-700">{skill.description}</p>
            <ul className="list-disc pl-6 mb-2">
              {skill.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <Link href={skill.link} className="text-blue-600 underline">Ver detalles</Link>
          </section>
        ))}
      </div>
      <footer className="mt-12 text-gray-500 text-sm">
        Cada skill está diseñada para acelerar y mejorar tu proceso de desarrollo, desde la idea hasta la ejecución técnica y visual.
      </footer>
    </main>
  );
}
