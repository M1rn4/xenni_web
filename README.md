# xenni Frontend  zz

Frontend de `xenni`, enfocado hoy en una landing de captacion para presentar la propuesta del producto y convertir interesados hacia WhatsApp. El repo tambien conserva una base tecnica de autenticacion, dashboard protegido y modulo de eventos, pero esa parte todavia esta en estado de scaffolding y no representa el flujo principal actual del proyecto.

## Objetivo actual del proyecto

La prioridad visible del producto es la experiencia publica:

- Mostrar la propuesta de valor de `xenni` como capa operativa con equipos de agentes AI.
- Iterar y validar mensajes de marketing sobre la landing principal activa.
- Llevar los CTA de demo/contacto a WhatsApp con mensajes precargados segun el contexto.

La aplicacion no debe entenderse hoy como un SaaS completo ya cerrado, sino como una combinacion de:

- landing marketing activa,
- base tecnica reutilizable para auth/dashboard,
- experimentacion de producto y conversion.

## Rutas actuales

| Ruta | Estado | Descripcion |
| --- | --- | --- |
| `/` | activa | Landing principal actual (`HomeV2`). |
| `/version-2` | activa | Alias de la landing principal. |
| `/login` | base tecnica | Formulario de login. |
| `/register` | base tecnica | Formulario de registro. |
| `/recover-password` | base tecnica | Solicitud de recuperacion de password. |
| `/reset-password/:token` | base tecnica | Pantalla de reset. |
| `/dashboard` | protegido | Dashboard placeholder con widget de eventos. |

## Estado actual

### Lo que si esta alineado con el objetivo actual

- Landing principal en `HomeV2`.
- CTA conectados a WhatsApp.
- Router ya configurado para separar experiencia publica y experiencia autenticada.

### Lo que sigue en modo base / incompleto

- El dashboard sigue siendo un placeholder.
- El flujo de auth no esta listo como producto final.
- `src/lib/supabaseClient.ts` esta mockeado/deshabilitado.

## Stack real del repo

- React 19
- TypeScript 5
- Vite 6
- React Router DOM 6
- Zustand
- React Query
- React Hook Form
- React Hot Toast
- Tailwind CSS 4
- CSS custom para las landings

Nota importante: aunque Tailwind esta instalado y se usa en auth/dashboard, las landings principales estan construidas mayormente con CSS propio.

## Estructura relevante

```text
src/
├── pages/
│   ├── HomeV2.tsx           # Landing principal actual
│   └── Dashboard.tsx        # Dashboard base protegido
├── modules/
│   ├── auth/                # Formularios, hooks, store y servicios de auth
│   └── events/              # Widget y hooks de eventos para el dashboard
├── core/
│   ├── routes/              # ProtectedRoute
│   ├── constants/
│   └── types/
├── lib/
│   ├── http/                # apiClient
│   ├── supabaseClient.ts    # Stub actual
│   └── whatsapp.ts          # Helper de CTAs a WhatsApp
└── test/                    # Setup de testing
```

## Desarrollo local

### Requisitos

- Node.js 20+
- npm 10+

### Instalar dependencias

```bash
npm install
```

### Ejecutar el proyecto

```bash
npm run dev
```

Vite levanta la app localmente, normalmente en `http://localhost:5173`.

## Variables de entorno

Hoy la unica variable potencialmente usada en el frontend es:

```ini
VITE_API_URL=http://localhost:3000/api
```

Observaciones:

- `apiClient` usa `VITE_API_URL` como base para requests HTTP.
- En el estado actual del proyecto, `VITE_API_URL` es opcional.
- Si no se define, la landing publica no falla ni en build ni en runtime.
- El cliente de Supabase actual esta deshabilitado en `src/lib/supabaseClient.ts`, por lo que las variables de Supabase no son el punto critico hoy para la landing.

## Deploy en Vercel

El repo ya incluye `vercel.json` con la configuracion necesaria para este proyecto:

- `framework: vite`
- `buildCommand: npm run build`
- `outputDirectory: dist`
- fallback de SPA a `index.html` para que rutas como `/version-2`, `/login` o `/dashboard` no rompan al refrescar

En Vercel solo necesitas:

1. Importar el repositorio.
2. Confirmar que detecte Vite.
3. Definir `VITE_API_URL` solo si en el futuro vas a consumir un backend real.

Con la build actual, el proyecto compila correctamente para produccion.

## Scripts disponibles

| Script | Uso |
| --- | --- |
| `npm run dev` | Levanta Vite en desarrollo. |
| `npm run build` | Compila para produccion. |
| `npm run type-check` | Ejecuta chequeo de TypeScript sin emitir archivos. |
| `npm run lint` | Ejecuta ESLint. |
| `npm run test` | Corre Vitest. |
| `npm run test:watch` | Ejecuta Vitest en modo watch. |
| `npm run test:coverage` | Ejecuta tests con reporte de cobertura. |
| `npm run preview` | Sirve la build localmente. |

## Recomendaciones para seguir el proyecto

Si el foco sigue siendo marketing y conversion:

- iterar `HomeV2` como landing principal,
- mantener los CTAs conectados a WhatsApp y medir conversion.

Si el foco vuelve a ser producto autenticado:

- reforzar tipado y cobertura de casos en auth/http/events,
- definir un proveedor real de autenticacion,
- alinear store, servicios y `apiClient`,
- convertir el dashboard en una experiencia real de producto.

## Nota sobre documentacion interna

El archivo `AGENT.md` sigue siendo la referencia de trabajo para agentes/automatizaciones dentro del repo, pero este `README.md` describe el estado funcional del proyecto para desarrollo y despliegue.
