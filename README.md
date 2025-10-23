# PromptGG - AI Prompt Generator# PromptGG - Generador de Prompts Efectivos para IA



**Master the art of effective AI prompts**<div align="center">



A modern web application for creating optimized prompts for ChatGPT, Claude, Gemini, and more AI models.🎯 **Domina el arte de los prompts efectivos para IA**



**Live Site**: [https://promptgg.app](https://promptgg.app)Una aplicación web moderna para crear prompts optimizados para ChatGPT, Claude, Gemini y más.



---[🌐 Visitar Sitio](https://promptgg.app) • [📖 Guía](https://promptgg.app/es/guide) • [🚀 Generador](https://promptgg.app/es/generator)



## Table of Contents</div>



- [English Documentation](#english-documentation)---

- [Documentación en Español](#documentación-en-español)

## 🌟 Características

---

✨ **Generador Inteligente**: Crea prompts optimizados con configuración personalizada de tono, contexto y restricciones

# English Documentation

🤖 **10+ Modelos Soportados**:

## Overview- ChatGPT (OpenAI)

- Claude (Anthropic)

PromptGG is a comprehensive web application designed to help users create effective, optimized prompts for various AI language models. It provides intelligent prompt generation, best practices guides, and a premium history system for power users.- Gemini (Google)

- Grok (xAI)

## Features- Llama (Meta)

- Mistral AI

### Core Features- Perplexity AI

- DeepSeek

- **Intelligent Prompt Generator**: Create optimized prompts with customizable tone, context, and constraints- Microsoft Copilot

- **Multi-Model Support**: Specialized prompt optimization for 10+ AI models including ChatGPT, Claude, Gemini, Grok, Llama, Mistral AI, Perplexity, DeepSeek, Microsoft Copilot, and Google Bard- Google Bard

- **Multilingual Interface**: Full support for Spanish, English, and Hindi

- **Best Practices Guide**: Comprehensive guide with 6 fundamental principles for effective prompts🌍 **Multiidioma (i18n)**:

- **Copy to Clipboard**: One-click copying of generated prompts- 🇪🇸 Español

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices- 🇺🇸 English

- 🇮🇳 हिन्दी (Hindi)

### Premium Features

🎨 **Diseño Moderno**: Interfaz oscura con gradientes azul-púrpura y animaciones suaves

- **Unlimited Prompt Generation**: No daily limits for premium users (free users: 10 prompts/day)

- **Prompt History**: Save and access your favorite prompts anytime📱 **Responsive**: Optimizado para móvil, tablet y escritorio

- **Ad-Free Experience**: Clean interface without advertisements

- **Persistent Storage**: All saved prompts persist across browser sessions using localStorage� **Guardado Local**: Guarda tus prompts favoritos en el navegador



### Monetization📋 **Copy to Clipboard**: Copia prompts con un solo clic



- **Freemium Model**: 10 free prompts per day📚 **Guía Completa**: 6 principios fundamentales para prompts efectivos

- **Premium Subscription**: $4.99/month via Lemonsqueezy

- **Google AdSense Integration**: 3 ad slots for free users (home page, generator top/bottom)---

- **Manual Activation**: Premium users can activate their subscription using order ID from email

## 🚀 Stack Tecnológico

## Technology Stack

- **Framework**: Next.js 15.5.6 (App Router)

### Frontend- **Lenguaje**: TypeScript

- **Estilos**: Tailwind CSS v3

- **Framework**: Next.js 15.5.6 with App Router- **Internacionalización**: next-intl

- **Language**: TypeScript- **Iconos**: Lucide React

- **Styling**: Tailwind CSS v4- **Hosting**: Vercel (recomendado)

- **Icons**: Lucide React

- **State Management**: React hooks (useState, useEffect, custom hooks)---

- **Internationalization**: next-intl for multi-language support

## 📦 Instalación y Desarrollo

### Backend & Infrastructure



- **Deployment**: Vercel (automatic deployment from main branch)### 📋 Requisitos Previos

- **Domain**: promptgg.app

- **Payment Processing**: Lemonsqueezy- Node.js 18.0 o superior

- **Advertising**: Google AdSense (Client ID: ca-pub-3949583827065267)- npm o yarn

- **Storage**: Browser localStorage for license keys and prompt history

### 🛠️ Instalación

### Key Dependencies

1. **Clonar el repositorio**:

```json```bash

{git clone https://github.com/mcrelativity/promptgg.git

  "next": "15.5.6",cd promptgg

  "react": "19.1.0",```

  "next-intl": "^4.3.12",

  "lucide-react": "^0.546.0",2. **Instalar dependencias**:

  "tailwindcss": "^4",```bash

  "typescript": "^5"npm install

}```

```

3. **Iniciar servidor de desarrollo**:

## Project Structure```bash

npm run dev

``````

src/

├── app/4. **Abrir en navegador**:

│   ├── [locale]/                    # Dynamic locale routes```

│   │   ├── page.tsx                # Home page (Server Component)http://localhost:3000

│   │   ├── layout.tsx              # Layout with Header/Footer```

│   │   ├── generator/

│   │   │   └── page.tsx            # Prompt generator (Client Component)### 📦 Scripts Disponibles

│   │   ├── guide/

│   │   │   └── page.tsx            # Best practices guide```bash

│   │   ├── history/npm run dev        # Servidor de desarrollo (localhost:3000)

│   │   │   └── page.tsx            # Saved prompts history (Premium only)npm run build      # Compilar para producción

│   │   ├── activate/npm start          # Servidor de producción

│   │   │   └── page.tsx            # Premium activation pagenpm run lint       # Ejecutar ESLint

│   │   └── premium-success/```

│   │       └── page.tsx            # Post-purchase success page

│   ├── layout.tsx                  # Root layout---

│   ├── page.tsx                    # Language detection and redirect

│   └── globals.css                 # Global styles## 🌍 Multiidioma

├── components/

│   ├── Header.tsx                  # Main navigationLa aplicación está completamente traducida a tres idiomas:

│   ├── Footer.tsx                  # Footer with links

│   ├── LanguageSwitcher.tsx        # Language selector dropdown- **Español** (es) - Idioma por defecto

│   ├── ModelCard.tsx               # AI model display card- **English** (en)

│   ├── HomeContent.tsx             # Home page content (Client)- **हिन्दी** (hi)

│   ├── UpgradeModal.tsx            # Premium upgrade modal

│   └── AdSenseSlot.tsx             # Google AdSense component**Cambiar idioma**: Usa el selector en la esquina superior derecha de la navegación.

├── hooks/

│   ├── usePremium.ts               # Premium status and daily limits**Rutas por idioma**:

│   └── usePromptHistory.ts         # Prompt history management- `/es` - Español

├── messages/- `/en` - English

│   ├── es.json                     # Spanish translations- `/hi` - Hindi

│   ├── en.json                     # English translations

│   └── hi.json                     # Hindi translations---

├── i18n.ts                         # i18n configuration

└── middleware.ts                   # Locale detection middleware## 📁 Estructura del Proyecto



public/                             # Static assets```

├── icon.svg                        # PWA icon (512x512)src/

└── apple-icon.svg                  # Apple touch icon (180x180)├── app/

```│   ├── [locale]/              # Rutas dinámicas por idioma

│   │   ├── page.tsx          # Página principal

## Installation & Development│   │   ├── layout.tsx        # Layout con i18n

│   │   ├── generator/        # Generador de prompts

### Prerequisites│   │   │   ├── page.tsx

│   │   │   └── layout.tsx

- Node.js 20 or higher│   │   └── guide/            # Guía de mejores prácticas

- npm or yarn│   │       ├── page.tsx

│   │       └── layout.tsx

### Setup│   ├── layout.tsx            # Layout raíz

│   ├── globals.css           # Estilos globales

```bash│   ├── sitemap.ts            # Sitemap para SEO

# Clone the repository│   ├── robots.ts             # Robots.txt

git clone https://github.com/mcrelativity/promptgg.git│   └── manifest.ts           # PWA Manifest

cd promptgg├── components/

│   ├── Header.tsx            # Navegación principal

# Install dependencies│   ├── Footer.tsx            # Pie de página

npm install│   ├── LanguageSwitcher.tsx  # Selector de idiomas

│   ├── ModelCard.tsx         # Tarjeta de modelo IA

# Run development server│   └── HomeContent.tsx       # Contenido home

npm run dev├── messages/

```│   ├── es.json              # Traducciones español

│   ├── en.json              # Traducciones inglés

The application will be available at `http://localhost:3000`│   └── hi.json              # Traducciones hindi

├── i18n/

### Build for Production│   └── request.ts           # Configuración next-intl

├── i18n.ts                  # (Legado)

```bash└── middleware.ts            # Middleware i18n

# Create optimized production build```

npm run build

---

# Start production server

npm start## 🎨 Paleta de Colores

```

- **Fondo**: `bg-slate-950` (casi negro)

### Linting- **Texto**: `text-slate-50` (casi blanco)

- **Acentos**: Gradiente `from-blue-500 to-purple-600`

```bash- **Bordes**: `border-slate-800`

npm run lint- **Hover**: `hover:bg-slate-800`

```

---

## Environment & Configuration

## � Despliegue

### Locale Support

### Vercel (Recomendado)

- Default locale: Spanish (es)

- Supported locales: es, en, hi1. Conecta tu repositorio de GitHub a Vercel

- Language detection via Accept-Language header2. Vercel detectará automáticamente Next.js

- Manual language switching via dropdown in header3. Deploy automático en cada push a main



### Middleware[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mcrelativity/promptgg)



The middleware handles automatic locale detection and routing:### Variables de Entorno

- Parses Accept-Language header with quality values

- Redirects root path to appropriate localeNo se requieren variables de entorno para el funcionamiento básico.

- Excludes static files and API routes

---

### Storage Keys

## 📈 SEO y Performance

- `license`: Premium license key (format: LEMON-{ORDER_ID})

- `promptgg_history`: Array of saved prompts (max 50 items)✅ **Metadata completa**: Títulos, descripciones y Open Graph tags

- `promptgg_usage`: Daily usage counter with date✅ **Sitemap.xml**: Generado automáticamente

✅ **Robots.txt**: Configurado para SEO

## Features in Detail✅ **PWA Ready**: Manifest.json incluido

✅ **Responsive**: Mobile-first design

### Prompt Generator✅ **Fast**: Optimizado con Next.js 15



The generator creates optimized prompts based on:---

- **Selected Model**: Tailored prompt structure for each AI model

- **Task Description**: Main objective or question## 🤝 Contribuciones

- **Tone**: Professional, Casual, Academic, Creative, or Detailed

- **Context** (optional): Additional background informationLas contribuciones son bienvenidas. Por favor:

- **Constraints** (optional): Specific requirements or limitations

1. Fork el proyecto

Different AI models receive different prompt structures:2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)

- **ChatGPT**: Role-based with clear task breakdown3. Commit tus cambios (`git commit -m 'Add: Amazing Feature'`)

- **Claude**: Analytical and structured approach4. Push a la rama (`git push origin feature/AmazingFeature`)

- **Gemini**: Practical and solution-oriented5. Abre un Pull Request

- **Grok**: Direct and concise

- **Llama**: Step-by-step with examples---

- And more specialized formats for other models

## 📄 Licencia

### Premium System

Este proyecto está bajo la Licencia MIT.

**Free Tier:**

- 10 prompts per day---

- Cannot save prompt history

- Ads displayed## 👨‍💻 Autor



**Premium Tier ($4.99/month):**Creado con ❤️ por [Emiliano Gómez](https://www.emilianogomez.dev)

- Unlimited prompt generation

- Save up to 50 prompts in history- GitHub: [@mcrelativity](https://github.com/mcrelativity)

- No advertisements- Web: [emilianogomez.dev](https://www.emilianogomez.dev)

- Access to history page with full CRUD operations

---

**Activation Flow:**

1. User clicks "Upgrade to Premium" button## 📞 Contacto

2. Redirects to Lemonsqueezy checkout

3. After payment, user receives order ID via email¿Preguntas o sugerencias? Abre un [issue](https://github.com/mcrelativity/promptgg/issues) en GitHub.

4. User enters order ID on /activate page

5. License stored in localStorage---

6. Premium features unlocked immediately

<div align="center">

### Prompt History

**⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐**

Premium users can:

- Save prompts from generator with all metadata[promptgg.app](https://promptgg.app)

- View saved prompts in /history page

- Copy prompts to clipboard</div>

- Delete individual prompts- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- Clear entire history (with confirmation)

- Filter and search through historyYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!



History includes:## Deploy on Vercel

- Model used

- Original task descriptionThe easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

- Selected tone

- Context and constraintsCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

- Generated prompt
- Timestamp

## Deployment

The application is deployed on Vercel with automatic deployments:

1. Push to main branch
2. Vercel automatically builds and deploys
3. Live at promptgg.app within 2-3 minutes

### Vercel Configuration

- Build command: `npm run build`
- Output directory: `.next`
- Install command: `npm install`
- Framework preset: Next.js

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## Performance

- Lighthouse scores: 90+ across all metrics
- First Load JS: ~102 kB (shared chunks)
- Static pages prerendered for optimal performance
- Dynamic pages server-rendered on demand

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

Private repository. All rights reserved.

## Contact

- Website: [https://promptgg.app](https://promptgg.app)
- Repository: [https://github.com/mcrelativity/promptgg](https://github.com/mcrelativity/promptgg)

---

# Documentación en Español

## Resumen

PromptGG es una aplicación web completa diseñada para ayudar a los usuarios a crear prompts efectivos y optimizados para varios modelos de lenguaje de IA. Proporciona generación inteligente de prompts, guías de mejores prácticas y un sistema de historial premium para usuarios avanzados.

## Características

### Características Principales

- **Generador Inteligente de Prompts**: Crea prompts optimizados con tono, contexto y restricciones personalizables
- **Soporte Multi-Modelo**: Optimización de prompts especializada para más de 10 modelos de IA incluyendo ChatGPT, Claude, Gemini, Grok, Llama, Mistral AI, Perplexity, DeepSeek, Microsoft Copilot y Google Bard
- **Interfaz Multiidioma**: Soporte completo para español, inglés e hindi
- **Guía de Mejores Prácticas**: Guía completa con 6 principios fundamentales para prompts efectivos
- **Copiar al Portapapeles**: Copia de prompts generados con un solo clic
- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y escritorio

### Características Premium

- **Generación Ilimitada de Prompts**: Sin límites diarios para usuarios premium (usuarios gratuitos: 10 prompts/día)
- **Historial de Prompts**: Guarda y accede a tus prompts favoritos en cualquier momento
- **Experiencia Sin Anuncios**: Interfaz limpia sin publicidad
- **Almacenamiento Persistente**: Todos los prompts guardados persisten entre sesiones del navegador usando localStorage

### Monetización

- **Modelo Freemium**: 10 prompts gratuitos por día
- **Suscripción Premium**: $4.99/mes vía Lemonsqueezy
- **Integración Google AdSense**: 3 espacios publicitarios para usuarios gratuitos (página principal, generador arriba/abajo)
- **Activación Manual**: Los usuarios premium pueden activar su suscripción usando el ID de orden del email

## Stack Tecnológico

### Frontend

- **Framework**: Next.js 15.5.6 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Iconos**: Lucide React
- **Gestión de Estado**: React hooks (useState, useEffect, hooks personalizados)
- **Internacionalización**: next-intl para soporte multiidioma

### Backend e Infraestructura

- **Despliegue**: Vercel (despliegue automático desde rama main)
- **Dominio**: promptgg.app
- **Procesamiento de Pagos**: Lemonsqueezy
- **Publicidad**: Google AdSense (ID de cliente: ca-pub-3949583827065267)
- **Almacenamiento**: localStorage del navegador para claves de licencia e historial de prompts

### Dependencias Clave

```json
{
  "next": "15.5.6",
  "react": "19.1.0",
  "next-intl": "^4.3.12",
  "lucide-react": "^0.546.0",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── [locale]/                    # Rutas dinámicas por idioma
│   │   ├── page.tsx                # Página principal (Server Component)
│   │   ├── layout.tsx              # Layout con Header/Footer
│   │   ├── generator/
│   │   │   └── page.tsx            # Generador de prompts (Client Component)
│   │   ├── guide/
│   │   │   └── page.tsx            # Guía de mejores prácticas
│   │   ├── history/
│   │   │   └── page.tsx            # Historial de prompts guardados (Solo Premium)
│   │   ├── activate/
│   │   │   └── page.tsx            # Página de activación Premium
│   │   └── premium-success/
│   │       └── page.tsx            # Página de éxito post-compra
│   ├── layout.tsx                  # Layout raíz
│   ├── page.tsx                    # Detección de idioma y redirección
│   └── globals.css                 # Estilos globales
├── components/
│   ├── Header.tsx                  # Navegación principal
│   ├── Footer.tsx                  # Pie de página con enlaces
│   ├── LanguageSwitcher.tsx        # Selector de idioma dropdown
│   ├── ModelCard.tsx               # Tarjeta de modelo de IA
│   ├── HomeContent.tsx             # Contenido de página principal (Client)
│   ├── UpgradeModal.tsx            # Modal de actualización Premium
│   └── AdSenseSlot.tsx             # Componente Google AdSense
├── hooks/
│   ├── usePremium.ts               # Estado Premium y límites diarios
│   └── usePromptHistory.ts         # Gestión del historial de prompts
├── messages/
│   ├── es.json                     # Traducciones en español
│   ├── en.json                     # Traducciones en inglés
│   └── hi.json                     # Traducciones en hindi
├── i18n.ts                         # Configuración i18n
└── middleware.ts                   # Middleware de detección de idioma

public/                             # Recursos estáticos
├── icon.svg                        # Icono PWA (512x512)
└── apple-icon.svg                  # Icono táctil Apple (180x180)
```

## Instalación y Desarrollo

### Prerrequisitos

- Node.js 20 o superior
- npm o yarn

### Configuración

```bash
# Clonar el repositorio
git clone https://github.com/mcrelativity/promptgg.git
cd promptgg

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Compilar para Producción

```bash
# Crear build de producción optimizado
npm run build

# Iniciar servidor de producción
npm start
```

### Linting

```bash
npm run lint
```

## Entorno y Configuración

### Soporte de Idiomas

- Idioma predeterminado: Español (es)
- Idiomas soportados: es, en, hi
- Detección de idioma vía header Accept-Language
- Cambio manual de idioma vía dropdown en header

### Middleware

El middleware maneja la detección automática de idioma y enrutamiento:
- Parsea el header Accept-Language con valores de calidad
- Redirige la ruta raíz al idioma apropiado
- Excluye archivos estáticos y rutas de API

### Claves de Almacenamiento

- `license`: Clave de licencia Premium (formato: LEMON-{ORDER_ID})
- `promptgg_history`: Array de prompts guardados (máximo 50 elementos)
- `promptgg_usage`: Contador de uso diario con fecha

## Características en Detalle

### Generador de Prompts

El generador crea prompts optimizados basándose en:
- **Modelo Seleccionado**: Estructura de prompt adaptada para cada modelo de IA
- **Descripción de Tarea**: Objetivo principal o pregunta
- **Tono**: Profesional, Casual, Académico, Creativo o Detallado
- **Contexto** (opcional): Información adicional de contexto
- **Restricciones** (opcional): Requisitos o limitaciones específicas

Diferentes modelos de IA reciben diferentes estructuras de prompt:
- **ChatGPT**: Basado en roles con desglose claro de tareas
- **Claude**: Enfoque analítico y estructurado
- **Gemini**: Práctico y orientado a soluciones
- **Grok**: Directo y conciso
- **Llama**: Paso a paso con ejemplos
- Y más formatos especializados para otros modelos

### Sistema Premium

**Nivel Gratuito:**
- 10 prompts por día
- No puede guardar historial de prompts
- Anuncios mostrados

**Nivel Premium ($4.99/mes):**
- Generación ilimitada de prompts
- Guardar hasta 50 prompts en historial
- Sin anuncios
- Acceso a página de historial con operaciones CRUD completas

**Flujo de Activación:**
1. Usuario hace clic en botón "Actualizar a Premium"
2. Redirige a checkout de Lemonsqueezy
3. Después del pago, usuario recibe ID de orden vía email
4. Usuario ingresa ID de orden en página /activate
5. Licencia almacenada en localStorage
6. Características premium desbloqueadas inmediatamente

### Historial de Prompts

Los usuarios premium pueden:
- Guardar prompts desde el generador con todos los metadatos
- Ver prompts guardados en página /history
- Copiar prompts al portapapeles
- Eliminar prompts individuales
- Limpiar historial completo (con confirmación)
- Filtrar y buscar en el historial

El historial incluye:
- Modelo usado
- Descripción de tarea original
- Tono seleccionado
- Contexto y restricciones
- Prompt generado
- Marca de tiempo

## Despliegue

La aplicación está desplegada en Vercel con despliegues automáticos:

1. Push a rama main
2. Vercel automáticamente compila y despliega
3. En vivo en promptgg.app en 2-3 minutos

### Configuración de Vercel

- Comando de build: `npm run build`
- Directorio de salida: `.next`
- Comando de instalación: `npm install`
- Preset de framework: Next.js

## Compatibilidad de Navegadores

- Chrome/Edge: Soporte completo
- Firefox: Soporte completo
- Safari: Soporte completo
- Navegadores móviles: Soporte completo

## Rendimiento

- Puntuaciones Lighthouse: 90+ en todas las métricas
- First Load JS: ~102 kB (chunks compartidos)
- Páginas estáticas prerenderizadas para rendimiento óptimo
- Páginas dinámicas renderizadas en servidor bajo demanda

## Contribuciones

Las contribuciones son bienvenidas. Por favor, siéntete libre de enviar issues o pull requests.

## Licencia

Repositorio privado. Todos los derechos reservados.

## Contacto

- Sitio web: [https://promptgg.app](https://promptgg.app)
- Repositorio: [https://github.com/mcrelativity/promptgg](https://github.com/mcrelativity/promptgg)
