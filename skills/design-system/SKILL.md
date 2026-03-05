````skill
---
name: design-system
description: Guía y plantillas para aplicar el sistema de diseño y arquitectura del proyecto NeuralForge en cualquier repo: usa Supabase o Firebase según el caso y aplica las convenciones (Tailwind, tokens, componentes modulares). Argumentos: `componente|auth|database|tema`.
argument-hint: "[componente|auth|database|tema]"
user-invocable: true
---

# Skill: Design System y Backend Auth (Supabase / Firebase)

## Propósito

Esta skill estandariza decisiones de diseño y arquitectura para proyectos que deban compartir el mismo lenguaje visual y patrones que NeuralForge AI Studio. Proporciona:
- Reglas para elegir entre Supabase o Firebase según el proyecto.
- Tokens, configuraciones y plantillas Tailwind para mantener el mismo look & feel.
- Plantillas de integración de autenticación y acceso con Supabase y Firebase.
- Componentes modulares (server/client), accesibles y escalables.

Usa esta skill cuando estés iniciando o adaptando un frontend que debe seguir el estilo y arquitectura de este repo.

## Cuándo usar Supabase vs Firebase

- Elige **Supabase** cuando:
  - Buscas SQL (PostgreSQL), relaciones complejas y facilidad para queries con Prisma.
  - Prefieres control total sobre esquemas y migraciones (migraciones SQL).
  - Requieres funciones server-side (Row Level Security, edge functions integradas).

- Elige **Firebase** cuando:
  - Necesitas sincronización en tiempo real y Realtime DB / Firestore con latencia muy baja.
  - Quieres autenticación y hosting integrado sin gestionar servidor de BD.
  - El equipo prefiere un modelo no-relacional y escalado automático simplificado.

Criterio rápido: si tu app necesita SQL y consultas analíticas → Supabase; si necesita realtime y baja administración → Firebase.

## Convenciones de diseño (aplicadas desde este repo)

- Tailwind con tokens globales en `tailwind.config.ts` y `src/globals.css`.
- Colores y gradientes: `from-cyan-500 to-blue-600` (dashboard), `from-purple-500 to-pink-600` (casos), `from-emerald-500 to-teal-600` (upload), `from-orange-500 to-red-600` (analysis).
- Componentes UI en `src/components/ui/` (botones, inputs, badges, dialogs). Reusar `cn()` desde `src/lib/utils.ts`.
- Server Components por defecto; usar `'use client'` solo en componentes interactivos.
- Accesibilidad: foco visible, roles ARIA en dialogs/inputs, contrastes mínimos.

## Tokens y theming (recomendado)

- Mantener variables en `css` : `:root { --color-primary: #06b6d4; }` y mapear en Tailwind con `theme.extend.colors`.
- Separar tokens en `design-tokens.json` (colores, espacios, tipografías) para exportar a otras plataformas.

## Patrones de componentes (modular y escalable)

- Componentes pequeños y composables (Atomic Design): `Button`, `Input`, `Card`, `Dialog`.
- `ui/` export index central: `export * from './button'` para imports consistentes.
- Dividir en `server/` y `client/` si es necesario (carpeta `components/ui/client` para componentes con estado).
- Documentar props y variantes con JSDoc o `README` en cada carpeta.

## Integración de Auth (plantillas)

- En proyectos Supabase usar `@supabase/supabase-js` en cliente y helpers server-side para verificaciones. Variables de entorno: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_KEY`.
- En proyectos Firebase usar `firebase/app` + `firebase/auth` y `firebase/firestore` según necesidad. Variables de entorno: `NEXT_PUBLIC_FIREBASE_API_KEY`, `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, etc.

## Ejemplos y plantillas incluidas
En la carpeta `./design-system/examples/` encontrarás:
- `design-tokens.md` → tokens recomendados y cómo mapearlos en `tailwind.config.ts`.
- `auth-supabase.md` → ejemplo de inicialización y hook `useSupabaseAuth`.
- `auth-firebase.md` → ejemplo de inicialización y hook `useFirebaseAuth`.
- `Button.template.tsx` → plantilla de `Button` reusable (server+client variants).

## Reglas de adopción

- Mantener `@/` imports para consistencia con este repo.
- Añadir tests visuales (snapshot) o Storybook si el proyecto lo soporta.
- Documentar cualquier variación del tema en `README.md` del proyecto.

## Cómo invocar esta skill
- Manual: en el chat de Copilot escribe `/design-system componente Button` o `/design-system auth supabase`.
- Automático: Copilot puede cargarla cuando detecte cambios en `tailwind.config.ts`, `src/components/ui`, o en preguntas sobre auth/infra.

---

Referencias internas (revisa en el repo):
- `tailwind.config.ts`
- `src/components/ui/`
- `src/lib/utils.ts`
- `src/globals.css`
 
## Detalles concretos de animaciones, transiciones y tokens (what's actually used aquí)

Basado en el código del repositorio (`src/app/globals.css`, `tailwind.config.ts`, y `src/components/ui/*`), la base visual y de motion incluye:

- Variables HSL en `:root` y `.dark` (ej.: `--primary`, `--primary-foreground`, `--chart-1`...)
- Animaciones y keyframes definidos en `src/app/globals.css`:
  - `fadeIn`, `fadeInUp`, `float`, `floatDelayed`, `pulseSlow`, `gradientX`, `gridFlow`, `shimmer`, `scanY`, `nexusGlow`, `nexusLetterGlow`, `techGlow`, `techShimmer`, `blob`, `accordion-*`, `techExpand/Collapse`.
  - Clases utilitarias: `.animate-fade-in`, `.animate-float`, `.animate-float-delayed`, `.animate-pulse-slow`, `.animate-gradient-x`, `.animate-grid-flow`, `.animate-shimmer`, `.animate-scan-y`, `.animate-spin-slow`.
  - Clases de efecto: `.mesh-gradient`, `.glass`, `.glass-strong`, `.glow-cyan|blue|purple`, `.text-glow`, `.nexus-glow`, `.nexus-letter`.
  - Reveal utilities (scroll reveal): `.reveal`, `.reveal-visible`, `.reveal-left`, `.reveal-right`, `.reveal-scale` con transiciones de ~0.65–0.75s y easing `cubic-bezier(0.16, 1, 0.3, 1)`.

- Uso consistente de utilidades Tailwind para motion y transiciones en componentes: `transition-all`, `transition-colors`, `transition-opacity`, `duration-200|300|700`, `ease-out`, `ease-in-out`, `transform` + `scale` para hover states.

Recomendaciones que añadiremos a la skill (implementación práctica):

1) Tokens de motion (añadir a `design-tokens.json` / CSS variables):
  - `--duration-fast: 120ms`
  - `--duration-medium: 300ms`
  - `--duration-slow: 700ms`
  - `--easing-default: cubic-bezier(0.16, 1, 0.3, 1)`

2) Naming y clases recomendadas (consistencia):
  - Animaciones globales: `animate-fade-in`, `animate-float`, `animate-shimmer` (ya existen).
  - Delays: `.animation-delay-100`, `.animation-delay-200`, `.animation-delay-400`, `.animation-delay-2000` (existentes).
  - Motion-safe: envolver animaciones largas con `motion-safe:` y respetar `prefers-reduced-motion` en JS al inicializar reveals.

3) Performance & accesibilidad:
  - Usar `transform` + `opacity` para animaciones (ya seguido en reveals y transitions).
  - Evitar `filter: blur`/`drop-shadow` animados en elementos grandes; mantenerlos estáticos o con bajo cost.
  - Proveer alternativa estática cuando `prefers-reduced-motion` es verdadero.

4) Estructura recomendada de archivos (para portar a otros proyectos):
```
src/
├── app/
│   └── globals.css           # variables, keyframes y utilidades globales (actual)
├── styles/
│   └── animations.css        # keyframes y utilidades exportables (opcional)
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── animations.ts     # small helpers (reveal init, prefers-reduced-motion wrapper)
└── lib/
   └── motion.ts             # helper JS para inicializar reveal observers y respetar motion prefs
```

5) Helpers JS recomendados (plantilla):
```ts
// src/lib/motion.ts
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function initReveal() {
  if (prefersReducedMotion()) return
  // IntersectionObserver para añadir clase .reveal-visible
}
```

6) Documentación de tema y colores (obligatorio en la skill):
  - Indicar variables principales y paletas: `--primary`, `--primary-foreground`, `--chart-*`, `--radius` y ejemplo de gradientes (dashboard/cases/upload/analysis).
  - Mapear a `tailwind.config.ts` tal y como está en este repo (HSL vars).

Con estos puntos la skill será prescriptiva y reproducible en otros proyectos: describe exactamente qué clases y utilidades existen, qué tokens añadir y cómo inicializar motion de forma accesible.

## Tarjetas (`Card`) — Estructura, variantes y uso

Esta skill incorpora la especificación de `Card` usada en este repo. Cuando Copilot detecte cambios en `src/components/ui/card.tsx` o referencias a `Card` en PRs, cargará estas reglas para dar recomendaciones consistentes.

- Archivo de referencia en este repo: `src/components/ui/card.tsx`
- Documentación de uso: `src/components/ui/README.md`
- Storybook de ejemplo: `src/components/ui/Card.stories.tsx`

API resumida:

- `Card` props:
  - `variant?: 'default' | 'glass' | 'gradient' | 'elevated'` — define apariencia base
  - `gradientFrom?: string` — clase Tailwind `from-...` para `gradient`
  - `gradientTo?: string` — clase Tailwind `to-...` para `gradient`

- Subcomponentes: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`.

Variantes y cuándo usarlas:

- `default`: tarjeta estándar con `shadow-sm` — uso general en listas y panels.
- `glass`: glassmorphism (transparencia + blur) — uso en overlays, widgets embebidos.
- `gradient`: fondo en gradiente, texto en blanco — heráldica para KPIs y secciones destacadas.
- `elevated`: mayor elevación y contraste — tarjetas críticas o modales compactos.

Ejemplo de implementación (uso recomendado en componentes):

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

<Card variant="gradient" gradientFrom="from-cyan-500" gradientTo="to-blue-600">
  <CardHeader>
    <CardTitle>KPIs</CardTitle>
    <CardDescription>Resumen diario</CardDescription>
  </CardHeader>
  <CardContent>Gráficos y métricas</CardContent>
  <CardFooter>Acciones</CardFooter>
</Card>
```

Checks relacionados que la skill sugiere automáticamente:

- ¿Usa `variant` en lugar de replicar clases de gradiente? (si no, sugerir refactor)
- ¿Incluye `CardTitle` y `CardDescription` para semántica adecuada?
- ¿Respetan las tarjetas `prefers-reduced-motion` cuando aplican animaciones? (si no, indicar fallback)
- ¿Se documentó la variante en `src/components/ui/README.md`? (si no, sugerir PR con doc)

Portabilidad: cuando generes una tarjeta en otro proyecto, la skill recomendará copiar `card.tsx` y `README.md` en `src/components/ui/` y mapear variables en `tailwind.config.ts`.

## Portabilidad y scaffold automático

La skill ahora incluye un flujo de scaffold que Copilot puede ejecutar bajo tu confirmación para aplicar el Design System en cualquier repo. Opciones disponibles:

- `--target <path>`: carpeta destino (por defecto `.`)
- `--auth <supabase|firebase|none>`: añade plantillas de auth
- `--tailwind <yes|no>`: si el proyecto usa Tailwind; si no, se instalan variables CSS

Qué crea el scaffold (listado resumido):

- `design-tokens.json` o variables CSS en `:root`
- `src/styles/animations.css` (keyframes y utilidades)
- `src/lib/motion.ts` (helper initReveal + prefers-reduced-motion)
- `src/components/ui/card.tsx` y `src/components/ui/button.tsx` (componentes base)
- `scripts/check-tailwind-config.js` y `scripts/run-axe.js` (plantillas para CI)
- Opcional: `src/components/ui/README.md` y `src/components/ui/Card.stories.tsx`

Ejemplo de uso en el chat (Copilot te pedirá confirmación antes de escribir):

`/design-system scaffold --target . --auth supabase --tailwind yes`

La skill también detecta señales del repo (presencia de `tailwind.config.ts`, `prisma/schema.prisma`, dependencias `firebase` o `@supabase`) y sugerirá la configuración por defecto.

## Checks automáticos de diseño

Incluye una batería de comprobaciones recomendadas para validar que un repositorio sigue las reglas del Design System. Estas comprobaciones pueden ejecutarse localmente o en CI.

- Presencia de `tailwind.config.ts` y mapeo de tokens básicos (`primary`, `dashboard-from`, `dashboard-to`).
- Archivo `design-tokens.json` con colores/espaciados/radio.
- Reglas de accesibilidad (contrast ratio) mediante `axe-core` o `@axe-core/react` en pruebas.
- Linter de clases Tailwind (`eslint-plugin-tailwindcss`) para detectar clases no existentes o mal escritas.
- Verificación `motion-safe` y uso de `prefers-reduced-motion` para animaciones.
- Comprobación de que los componentes exportan variantes esperadas (`primary`, `ghost`, `outline`).

Ejemplos de NPM scripts recomendados (añadir a `package.json` del proyecto):

```json
{
  "scripts": {
    "check:tailwind": "node ./scripts/check-tailwind-config.js",
    "lint:css": "stylelint '**/*.{css,scss,tsx,ts}' --allow-empty-input",
    "lint:tailwind": "eslint --ext .ts,.tsx . --rule 'tailwindcss/classnames-order: warn'",
    "test:a11y": "node ./scripts/run-axe.js"
  }
}
```

Nota: los scripts `check-tailwind-config.js` y `run-axe.js` son plantillas pequeñas que pueden iterar archivos y devolver status non-zero si fallan — en `examples/` incluimos recomendaciones.

## Animaciones y motion-safe

- Restringe animaciones decorativas a `motion-safe` para respetar `prefers-reduced-motion`:

```tsx
<div className="motion-safe:animate-float">...</div>
```

- Evita animaciones con transformaciones 3D pesadas en elementos clave del layout.
- Prefiere transiciones `transform` + `opacity` para rendimiento.
- Define duración y easing estándar en tokens (ej. `--duration-fast: 120ms`, `--easing-default: cubic-bezier(...)`).

## Checklist de revisión visual (PR)

Antes de aprobar un PR que afecta UI:

- [ ] ¿Usa tokens en lugar de colores hex directos?
- [ ] ¿Cumple contraste mínimo WCAG AA en texto principal?
- [ ] ¿Las animaciones respetan `prefers-reduced-motion`?
- [ ] ¿Los componentes reutilizan `components/ui/*` o justifica creación nueva?
- [ ] ¿Hay tests visuales o capturas (story/Chromatic) para cambios significativos?
- [ ] ¿Se añadieron ejemplos de uso a `components/ui/README.md` si se creó un componente nuevo?

## Ejemplo de pipeline CI (snippet)

```yaml
name: Design System Checks
on: [pull_request]
jobs:
  design-checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install deps
        run: npm ci
      - name: Tailwind config check
        run: npm run check:tailwind
      - name: Lint Tailwind classes
        run: npm run lint:tailwind
      - name: Run accessibility checks
        run: npm run test:a11y
```

## Recursos en `examples/` añadidos

Revisa `./design-system/examples/check-design.md` para plantillas de scripts y acciones CI.

---

Referencias internas (revisa en el repo):
- `tailwind.config.ts`
- `src/components/ui/`
- `src/lib/utils.ts`
- `src/globals.css`
 
````

---
name: threejs-lighting
description: Three.js lighting - light types, shadows, environment lighting. Use when adding lights, configuring shadows, setting up IBL, or optimizing lighting performance.
---

# Three.js Lighting

## Quick Start

```javascript
import * as THREE from "three";

// Basic lighting setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);
```

## Light Types Overview

| Light            | Description            | Shadow Support | Cost     |
| ---------------- | ---------------------- | -------------- | -------- |
| AmbientLight     | Uniform everywhere     | No             | Very Low |
| HemisphereLight  | Sky/ground gradient    | No             | Very Low |
| DirectionalLight | Parallel rays (sun)    | Yes            | Low      |
| PointLight       | Omnidirectional (bulb) | Yes            | Medium   |
| SpotLight        | Cone-shaped            | Yes            | Medium   |
| RectAreaLight    | Area light (window)    | No\*           | High     |

\*RectAreaLight shadows require custom solutions

## AmbientLight

Illuminates all objects equally. No direction, no shadows.

```javascript
// AmbientLight(color, intensity)
const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

// Modify at runtime
ambient.color.set(0xffffcc);
ambient.intensity = 0.3;
```

## HemisphereLight

Gradient from sky to ground color. Good for outdoor scenes.

```javascript
// HemisphereLight(skyColor, groundColor, intensity)
const hemi = new THREE.HemisphereLight(0x87ceeb, 0x8b4513, 0.6);
hemi.position.set(0, 50, 0);
scene.add(hemi);

// Properties
hemi.color; // Sky color
hemi.groundColor; // Ground color
hemi.intensity;
```

## DirectionalLight

Parallel light rays. Simulates distant light source (sun).

```javascript
// DirectionalLight(color, intensity)
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 5);

// Light points at target (default: 0, 0, 0)
dirLight.target.position.set(0, 0, 0);
scene.add(dirLight.target);

scene.add(dirLight);
```

### DirectionalLight Shadows

```javascript
dirLight.castShadow = true;

// Shadow map size (higher = sharper, more expensive)
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

// Shadow camera (orthographic)
dirLight.shadow.camera.near = 0.5;
dirLight.shadow.camera.far = 50;
dirLight.shadow.camera.left = -10;
dirLight.shadow.camera.right = 10;
dirLight.shadow.camera.top = 10;
dirLight.shadow.camera.bottom = -10;

// Shadow softness
dirLight.shadow.radius = 4; // Blur radius (PCFSoftShadowMap only)

// Shadow bias (fixes shadow acne)
dirLight.shadow.bias = -0.0001;
dirLight.shadow.normalBias = 0.02;

// Helper to visualize shadow camera
const helper = new THREE.CameraHelper(dirLight.shadow.camera);
scene.add(helper);
```

## PointLight

Emits light in all directions from a point. Like a light bulb.

```javascript
// PointLight(color, intensity, distance, decay)
const pointLight = new THREE.PointLight(0xffffff, 1, 100, 2);
pointLight.position.set(0, 5, 0);
scene.add(pointLight);

// Properties
pointLight.distance; // Maximum range (0 = infinite)
pointLight.decay; // Light falloff (physically correct = 2)
```

### PointLight Shadows

```javascript
pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;

// Shadow camera (perspective - 6 directions for cube map)
pointLight.shadow.camera.near = 0.5;
pointLight.shadow.camera.far = 50;

pointLight.shadow.bias = -0.005;
```

## SpotLight

Cone-shaped light. Like a flashlight or stage light.

```javascript
// SpotLight(color, intensity, distance, angle, penumbra, decay)
const spotLight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 6, 0.5, 2);
spotLight.position.set(0, 10, 0);

// Target (light points at this)
spotLight.target.position.set(0, 0, 0);
scene.add(spotLight.target);

scene.add(spotLight);

// Properties
spotLight.angle; // Cone angle (radians, max Math.PI/2)
spotLight.penumbra; // Soft edge (0-1)
spotLight.distance; // Range
spotLight.decay; // Falloff
```

### SpotLight Shadows

```javascript
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

// Shadow camera (perspective)
spotLight.shadow.camera.near = 0.5;
spotLight.shadow.camera.far = 50;
spotLight.shadow.camera.fov = 30;

spotLight.shadow.bias = -0.0001;

// Focus (affects shadow projection)
spotLight.shadow.focus = 1;
```

## RectAreaLight

Rectangular area light. Great for soft, realistic lighting.

```javascript
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

// Must initialize uniforms first
RectAreaLightUniformsLib.init();

// RectAreaLight(color, intensity, width, height)
const rectLight = new THREE.RectAreaLight(0xffffff, 5, 4, 2);
rectLight.position.set(0, 5, 0);
rectLight.lookAt(0, 0, 0);
scene.add(rectLight);

// Helper
const helper = new RectAreaLightHelper(rectLight);
rectLight.add(helper);

// Note: Only works with MeshStandardMaterial and MeshPhysicalMaterial
// Does not cast shadows natively
```

## Shadow Setup

### Enable Shadows

```javascript
// 1. Enable on renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Shadow map types:
// THREE.BasicShadowMap - fastest, low quality
// THREE.PCFShadowMap - default, filtered
// THREE.PCFSoftShadowMap - softer edges
// THREE.VSMShadowMap - variance shadow map

// 2. Enable on light
light.castShadow = true;

// 3. Enable on objects
mesh.castShadow = true;
mesh.receiveShadow = true;

// Ground plane
floor.receiveShadow = true;
floor.castShadow = false; // Usually false for floors
```

### Optimizing Shadows

```javascript
// Tight shadow camera frustum
const d = 10;
dirLight.shadow.camera.left = -d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = -d;
dirLight.shadow.camera.near = 0.5;
dirLight.shadow.camera.far = 30;

// Fix shadow acne
dirLight.shadow.bias = -0.0001; // Depth bias
dirLight.shadow.normalBias = 0.02; // Bias along normal

// Shadow map size (balance quality vs performance)
// 512 - low quality
// 1024 - medium quality
// 2048 - high quality
// 4096 - very high quality (expensive)
```

### Contact Shadows (Fake, Fast)

```javascript
import { ContactShadows } from "three/examples/jsm/objects/ContactShadows.js";

const contactShadows = new ContactShadows({
  resolution: 512,
  blur: 2,
  opacity: 0.5,
  scale: 10,
  position: [0, 0, 0],
});
scene.add(contactShadows);
```

## Light Helpers

```javascript
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

// DirectionalLight helper
const dirHelper = new THREE.DirectionalLightHelper(dirLight, 5);
scene.add(dirHelper);

// PointLight helper
const pointHelper = new THREE.PointLightHelper(pointLight, 1);
scene.add(pointHelper);

// SpotLight helper
const spotHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotHelper);

// Hemisphere helper
const hemiHelper = new THREE.HemisphereLightHelper(hemiLight, 5);
scene.add(hemiHelper);

// RectAreaLight helper
const rectHelper = new RectAreaLightHelper(rectLight);
rectLight.add(rectHelper);

// Update helpers when light changes
dirHelper.update();
spotHelper.update();
```

## Environment Lighting (IBL)

Image-Based Lighting using HDR environment maps.

```javascript
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const rgbeLoader = new RGBELoader();
rgbeLoader.load("environment.hdr", (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;

  // Set as scene environment (affects all PBR materials)
  scene.environment = texture;

  // Optional: also use as background
  scene.background = texture;
  scene.backgroundBlurriness = 0; // 0-1, blur the background
  scene.backgroundIntensity = 1;
});

// PMREMGenerator for better reflections
const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

rgbeLoader.load("environment.hdr", (texture) => {
  const envMap = pmremGenerator.fromEquirectangular(texture).texture;
  scene.environment = envMap;
  texture.dispose();
  pmremGenerator.dispose();
});
```

### Cube Texture Environment

```javascript
const cubeLoader = new THREE.CubeTextureLoader();
const envMap = cubeLoader.load([
  "px.jpg",
  "nx.jpg",
  "py.jpg",
  "ny.jpg",
  "pz.jpg",
  "nz.jpg",
]);

scene.environment = envMap;
scene.background = envMap;
```

## Light Probes (Advanced)

Capture lighting from a point in space for ambient lighting.

```javascript
import { LightProbeGenerator } from "three/examples/jsm/lights/LightProbeGenerator.js";

// Generate from cube texture
const lightProbe = new THREE.LightProbe();
scene.add(lightProbe);

lightProbe.copy(LightProbeGenerator.fromCubeTexture(cubeTexture));

// Or from render target
const cubeCamera = new THREE.CubeCamera(
  0.1,
  100,
  new THREE.WebGLCubeRenderTarget(256),
);
cubeCamera.update(renderer, scene);
lightProbe.copy(
  LightProbeGenerator.fromCubeRenderTarget(renderer, cubeCamera.renderTarget),
);
```

## Common Lighting Setups

### Three-Point Lighting

```javascript
// Key light (main light)
const keyLight = new THREE.DirectionalLight(0xffffff, 1);
keyLight.position.set(5, 5, 5);
scene.add(keyLight);

// Fill light (softer, opposite side)
const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
fillLight.position.set(-5, 3, 5);
scene.add(fillLight);

// Back light (rim lighting)
const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
backLight.position.set(0, 5, -5);
scene.add(backLight);

// Ambient fill
const ambient = new THREE.AmbientLight(0x404040, 0.3);
scene.add(ambient);
```

### Outdoor Daylight

```javascript
// Sun
const sun = new THREE.DirectionalLight(0xffffcc, 1.5);
sun.position.set(50, 100, 50);
sun.castShadow = true;
scene.add(sun);

// Sky ambient
const hemi = new THREE.HemisphereLight(0x87ceeb, 0x8b4513, 0.6);
scene.add(hemi);
```

### Indoor Studio

```javascript
// Multiple area lights
RectAreaLightUniformsLib.init();

const light1 = new THREE.RectAreaLight(0xffffff, 5, 2, 2);
light1.position.set(3, 3, 3);
light1.lookAt(0, 0, 0);
scene.add(light1);

const light2 = new THREE.RectAreaLight(0xffffff, 3, 2, 2);
light2.position.set(-3, 3, 3);
light2.lookAt(0, 0, 0);
scene.add(light2);

// Ambient fill
const ambient = new THREE.AmbientLight(0x404040, 0.2);
scene.add(ambient);
```

## Light Animation

```javascript
const clock = new THREE.Clock();

function animate() {
  const time = clock.getElapsedTime();

  // Orbit light around scene
  light.position.x = Math.cos(time) * 5;
  light.position.z = Math.sin(time) * 5;

  // Pulsing intensity
  light.intensity = 1 + Math.sin(time * 2) * 0.5;

  // Color cycling
  light.color.setHSL((time * 0.1) % 1, 1, 0.5);

  // Update helpers if using
  lightHelper.update();
}
```

## Performance Tips

1. **Limit light count**: Each light adds shader complexity
2. **Use baked lighting**: For static scenes, bake to textures
3. **Smaller shadow maps**: 512-1024 often sufficient
4. **Tight shadow frustums**: Only cover needed area
5. **Disable unused shadows**: Not all lights need shadows
6. **Use light layers**: Exclude objects from certain lights

```javascript
// Light layers
light.layers.set(1); // Light only affects layer 1
mesh.layers.enable(1); // Mesh is on layer 1
otherMesh.layers.disable(1); // Other mesh not affected

// Selective shadows
mesh.castShadow = true;
mesh.receiveShadow = true;
decorMesh.castShadow = false; // Small objects often don't need to cast
```

## See Also

- `threejs-materials` - Material light response
- `threejs-textures` - Lightmaps and environment maps
- `threejs-postprocessing` - Bloom and other light effects
