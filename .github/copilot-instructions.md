<!-- Instrucciones personalizadas para Copilot en el proyecto PromptGG -->

# PromptGG - Instrucciones Personalizadas

## Visión General

PromptGG es una aplicación web moderna para ayudar a usuarios a crear prompts efectivos para modelos de IA populares. Está construida con Next.js 15, TypeScript, Tailwind CSS y soporte multiidioma completo (ES, EN, HI).

## Tecnología Stack

- **Framework**: Next.js 15.5.6 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v3
- **Internacionalización**: next-intl
- **Iconos**: Lucide React
- **Estado**: Client components con useState/localStorage
- **Middleware**: next-intl para ruteo de idiomas

## Estructura del Proyecto

```
src/
├── app/
│   ├── [locale]/                    # Rutas dinámicas por idioma
│   │   ├── page.tsx                # Página principal (Server Component)
│   │   ├── layout.tsx              # Layout con Header/Footer
│   │   ├── generator/
│   │   │   └── page.tsx            # Generador de prompts (Client)
│   │   └── guide/
│   │       └── page.tsx            # Guía de mejores prácticas (Client)
│   ├── layout.tsx                  # Layout raíz
│   └── globals.css                 # Estilos globales
├── components/
│   ├── Header.tsx                  # Navegación principal
│   ├── Footer.tsx                  # Pie de página
│   ├── LanguageSwitcher.tsx        # Selector de idiomas
│   ├── ModelCard.tsx               # Tarjeta de modelo IA
│   └── HomeContent.tsx             # Contenido home (Client)
├── messages/
│   ├── es.json                    # Traducciones español
│   ├── en.json                    # Traducciones inglés
│   └── hi.json                    # Traducciones hindi
├── i18n.ts                         # Configuración i18n
└── middleware.ts                   # Middleware para i18n

public/                             # Archivos estáticos
```

## Guías de Codificación

### Client vs Server Components

- **Server Components** (default): `page.tsx` en rutas principales
- **Client Components**: Componentes con interactividad, `useTranslations()`, `useState`, etc.
- Usar `"use client"` al inicio del archivo para Client Components

### Multiidioma (i18n)

```typescript
// Uso en Client Components
import { useTranslations } from "next-intl";

export default function Component() {
  const t = useTranslations();
  return <h1>{t("hero.title")}</h1>;
}

// Las claves están en src/messages/[locale].json
```

### Routing

- Todos los routes están bajo `[locale]/` (es, en, hi)
- Rutas: `/es`, `/es/generator`, `/es/guide`, etc.
- El middleware automáticamente redirige `/` a `/es` (idioma por defecto)

### Estilos

- Usar Tailwind CSS utilities
- Paleta de colores:
  - Fondo: `bg-slate-950` (casi negro)
  - Texto: `text-slate-50` (casi blanco)
  - Acentos: `from-blue-500 to-purple-600`
  - Bordes: `border-slate-800`

### Componentes Reutilizables

- `Header`: Navegación con selector de idiomas
- `Footer`: Pie de página con links y redes sociales
- `LanguageSwitcher`: Dropdown para cambiar idioma
- `ModelCard`: Card para mostrar modelos de IA

## Características Principales

### 1. Generador de Prompts
- Archivo: `src/app/[locale]/generator/page.tsx`
- Seleccionar modelo IA
- Ingresar tarea/descripción
- Seleccionar tono
- Agregar contexto (opcional)
- Agregar restricciones (opcional)
- Generar prompt optimizado
- Copiar al portapapeles
- Guardar en localStorage

### 2. Guía de Mejores Prácticas
- Archivo: `src/app/[locale]/guide/page.tsx`
- 6 principios clave para prompts efectivos
- Ejemplos prácticos (malo vs bueno)
- Consejos profesionales

### 3. Página Principal
- Archivo: `src/components/HomeContent.tsx`
- Hero section con CTA
- Grid de modelos soportados
- Sección de CTA final

## Próximas Características

- [ ] Historial de prompts generados
- [ ] Sincronización en la nube
- [ ] Integración con APIs de IA reales
- [ ] Sistema de templates de prompts
- [ ] Análisis de efectividad de prompts
- [ ] Colaboración en equipo
- [ ] Exportar prompts a diferentes formatos

## Configuración de Desarrollo

```bash
# Instalar
npm install

# Dev
npm run dev          # http://localhost:3000

# Build
npm run build

# Lint
npm run lint
```

## Comandos Útiles

```bash
# Verificar errores de compilación
npm run build

# Prueba local de producción
npm run build && npm start

# Linting
npm run lint

# Format (si están configurados)
npm run format
```

## Despliegue

- Plataforma: Vercel (recomendado)
- Dominio: promptgg.app
- Ver `DEPLOYMENT.md` para instrucciones completas

## Consideraciones Importantes

1. **i18n**: next-intl maneja todo automáticamente
2. **Params como Promise**: En Next.js 15, params en layouts/pages deben estar awaiteados
3. **use() hook**: Para convertir Promises en valores sincronos en Client Components
4. **localStorage**: Para guardar prompts favoritos (solo en navegador)
5. **TypeScript**: Mantener tipos strictos

## Patrones Comunes

### Obtener locale en Server Component
```typescript
export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <Component locale={locale} />;
}
```

### Usar traducciones en Client Component
```typescript
"use client";
import { useTranslations } from "next-intl";

export default function Component() {
  const t = useTranslations();
  return <h1>{t("key.nested")}</h1>;
}
```

## Testing

- [ ] Todos los idiomas funcionan correctamente
- [ ] Generador de prompts funciona
- [ ] Copy to clipboard funciona
- [ ] localStorage persiste datos
- [ ] Responsive en móvil
- [ ] No hay console errors

## Errores Comunes

| Error | Causa | Solución |
|-------|-------|----------|
| `Cannot find module '@/components/...'` | Archivo no existe o ruta incorrecta | Verificar nombres de archivo |
| `'useTranslations' cannot be called in an async function` | Intentar usar hook en Server Component | Mover a Client Component con `"use client"` |
| `params.locale is undefined` | No usando await en Server Component | Usar `const { locale } = await params` |

## Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [next-intl](https://next-intl-docs.vercel.app/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide Icons](https://lucide.dev/)

## Mantenimiento

- Revisar dependencias regularmente: `npm outdated`
- Actualizar Next.js cuando sea posible
- Mantener traducciónestabajo actualizado
- Monitorear performance en Vercel Analytics

---

Última actualización: Octubre 2025
