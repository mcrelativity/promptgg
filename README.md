# PromptGG - Generador de Prompts Efectivos para IA

<div align="center">

🎯 **Domina el arte de los prompts efectivos para IA**

Una aplicación web moderna para crear prompts optimizados para ChatGPT, Claude, Gemini y más.

[🌐 Visitar Sitio](https://promptgg.app) • [📖 Guía](https://promptgg.app/es/guide) • [🚀 Generador](https://promptgg.app/es/generator)

</div>

---

## 🌟 Características

✨ **Generador Inteligente**: Crea prompts optimizados con configuración personalizada de tono, contexto y restricciones

🤖 **10+ Modelos Soportados**:
- ChatGPT (OpenAI)
- Claude (Anthropic)
- Gemini (Google)
- Grok (xAI)
- Llama (Meta)
- Mistral AI
- Perplexity AI
- DeepSeek
- Microsoft Copilot
- Google Bard

🌍 **Multiidioma (i18n)**:
- 🇪🇸 Español
- 🇺🇸 English
- 🇮🇳 हिन्दी (Hindi)

🎨 **Diseño Moderno**: Interfaz oscura con gradientes azul-púrpura y animaciones suaves

📱 **Responsive**: Optimizado para móvil, tablet y escritorio

� **Guardado Local**: Guarda tus prompts favoritos en el navegador

📋 **Copy to Clipboard**: Copia prompts con un solo clic

📚 **Guía Completa**: 6 principios fundamentales para prompts efectivos

---

## 🚀 Stack Tecnológico

- **Framework**: Next.js 15.5.6 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v3
- **Internacionalización**: next-intl
- **Iconos**: Lucide React
- **Hosting**: Vercel (recomendado)

---

## 📦 Instalación y Desarrollo


### 📋 Requisitos Previos

- Node.js 18.0 o superior
- npm o yarn

### 🛠️ Instalación

1. **Clonar el repositorio**:
```bash
git clone https://github.com/mcrelativity/promptgg.git
cd promptgg
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Iniciar servidor de desarrollo**:
```bash
npm run dev
```

4. **Abrir en navegador**:
```
http://localhost:3000
```

### 📦 Scripts Disponibles

```bash
npm run dev        # Servidor de desarrollo (localhost:3000)
npm run build      # Compilar para producción
npm start          # Servidor de producción
npm run lint       # Ejecutar ESLint
```

---

## 🌍 Multiidioma

La aplicación está completamente traducida a tres idiomas:

- **Español** (es) - Idioma por defecto
- **English** (en)
- **हिन्दी** (hi)

**Cambiar idioma**: Usa el selector en la esquina superior derecha de la navegación.

**Rutas por idioma**:
- `/es` - Español
- `/en` - English
- `/hi` - Hindi

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── [locale]/              # Rutas dinámicas por idioma
│   │   ├── page.tsx          # Página principal
│   │   ├── layout.tsx        # Layout con i18n
│   │   ├── generator/        # Generador de prompts
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   └── guide/            # Guía de mejores prácticas
│   │       ├── page.tsx
│   │       └── layout.tsx
│   ├── layout.tsx            # Layout raíz
│   ├── globals.css           # Estilos globales
│   ├── sitemap.ts            # Sitemap para SEO
│   ├── robots.ts             # Robots.txt
│   └── manifest.ts           # PWA Manifest
├── components/
│   ├── Header.tsx            # Navegación principal
│   ├── Footer.tsx            # Pie de página
│   ├── LanguageSwitcher.tsx  # Selector de idiomas
│   ├── ModelCard.tsx         # Tarjeta de modelo IA
│   └── HomeContent.tsx       # Contenido home
├── messages/
│   ├── es.json              # Traducciones español
│   ├── en.json              # Traducciones inglés
│   └── hi.json              # Traducciones hindi
├── i18n/
│   └── request.ts           # Configuración next-intl
├── i18n.ts                  # (Legado)
└── middleware.ts            # Middleware i18n
```

---

## 🎨 Paleta de Colores

- **Fondo**: `bg-slate-950` (casi negro)
- **Texto**: `text-slate-50` (casi blanco)
- **Acentos**: Gradiente `from-blue-500 to-purple-600`
- **Bordes**: `border-slate-800`
- **Hover**: `hover:bg-slate-800`

---

## � Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente Next.js
3. Deploy automático en cada push a main

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mcrelativity/promptgg)

### Variables de Entorno

No se requieren variables de entorno para el funcionamiento básico.

---

## 📈 SEO y Performance

✅ **Metadata completa**: Títulos, descripciones y Open Graph tags
✅ **Sitemap.xml**: Generado automáticamente
✅ **Robots.txt**: Configurado para SEO
✅ **PWA Ready**: Manifest.json incluido
✅ **Responsive**: Mobile-first design
✅ **Fast**: Optimizado con Next.js 15

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: Amazing Feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

## 👨‍💻 Autor

Creado con ❤️ por [Emiliano Gómez](https://www.emilianogomez.dev)

- GitHub: [@mcrelativity](https://github.com/mcrelativity)
- Web: [emilianogomez.dev](https://www.emilianogomez.dev)

---

## 📞 Contacto

¿Preguntas o sugerencias? Abre un [issue](https://github.com/mcrelativity/promptgg/issues) en GitHub.

---

<div align="center">

**⭐ Si te gusta este proyecto, dale una estrella en GitHub ⭐**

[promptgg.app](https://promptgg.app)

</div>
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
