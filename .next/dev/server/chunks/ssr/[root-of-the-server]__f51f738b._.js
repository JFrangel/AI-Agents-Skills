module.exports = [
"[project]/skills/landing-skills.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingSkills
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
;
;
;
const skills = [
    {
        name: "plan",
        title: "Planificación y Arquitectura",
        description: "Skill para planificación detallada, arquitectura modular, ejecución de cambios y documentación constante. Úsala para estructurar ideas, planes de acción o refactorizar código de forma escalable.",
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
        description: "Pipeline agnóstico y conceptual para transformar ideas en productos tecnológicos completos, arquitectura, modelo de negocio y roadmap sin atarse a frameworks específicos.",
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
        description: "Ayuda a encontrar e instalar la skill adecuada para cada necesidad. Actúa como router inteligente y catálogo de capacidades.",
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
        description: "Guía y plantillas para aplicar el sistema de diseño y arquitectura del proyecto NeuralForge en cualquier repo. Incluye tokens, componentes, integración auth y convenciones Tailwind.",
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
        description: "Sistema avanzado para convertir ideas en startups estructuradas. Incluye producto, arquitectura, roadmap, estrategia de negocio y crecimiento.",
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
        description: "Actúa como CTO y Product Manager experto para transformar ideas vagas en planes de ejecución completos (Producto, Arquitectura, MVP, Roadmap).",
        link: "./ai-cto/SKILL.md",
        highlights: [
            "Definición de stack y arquitectura",
            "MVP técnico y roadmap",
            "Ejecución rápida para hackathons"
        ]
    }
];
function LandingSkills() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setLoading(false), 1200);
        return ()=>clearTimeout(timer);
    }, []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
            className: "flex items-center justify-center h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-16 w-16 border-t-4 border-primary"
                }, void 0, false, {
                    fileName: "[project]/skills/landing-skills.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    className: "ml-4 text-lg font-semibold",
                    children: "Cargando catálogo de skills..."
                }, void 0, false, {
                    fileName: "[project]/skills/landing-skills.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/skills/landing-skills.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: "max-w-3xl mx-auto py-12 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-8",
                children: "Catálogo de Skills"
            }, void 0, false, {
                fileName: "[project]/skills/landing-skills.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "mb-8 text-lg",
                children: "Explora cada skill y descubre cómo puede ayudarte a estructurar, planificar, diseñar o lanzar tu proyecto."
            }, void 0, false, {
                fileName: "[project]/skills/landing-skills.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid gap-8",
                children: skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "border rounded-lg p-6 shadow-sm bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-2",
                                children: skill.title
                            }, void 0, false, {
                                fileName: "[project]/skills/landing-skills.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-gray-700",
                                children: skill.description
                            }, void 0, false, {
                                fileName: "[project]/skills/landing-skills.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: "list-disc pl-6 mb-2",
                                children: skill.highlights.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        children: h
                                    }, i, false, {
                                        fileName: "[project]/skills/landing-skills.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/skills/landing-skills.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: skill.link,
                                className: "text-blue-600 underline",
                                children: "Ver detalles"
                            }, void 0, false, {
                                fileName: "[project]/skills/landing-skills.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, skill.name, true, {
                        fileName: "[project]/skills/landing-skills.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/skills/landing-skills.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
                className: "mt-12 text-gray-500 text-sm",
                children: "Cada skill está diseñada para acelerar y mejorar tu proceso de desarrollo, desde la idea hasta la ejecución técnica y visual."
            }, void 0, false, {
                fileName: "[project]/skills/landing-skills.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/skills/landing-skills.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
}),
"[project]/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$skills$2f$landing$2d$skills$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skills/landing-skills.tsx [ssr] (ecmascript)");
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$skills$2f$landing$2d$skills$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/pages/index.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f51f738b._.js.map