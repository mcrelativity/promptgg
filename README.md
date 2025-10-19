# PromptGG# PromptGG - Prompts Efectivos para IA



Generador de prompts efectivos para modelos de IA. Interfaz moderna con soporte multiidioma (ES, EN, HI).Una aplicación web moderna y hermosa para dominar el arte de crear prompts efectivos para los modelos de IA más populares. Construida con Next.js, TypeScript, Tailwind CSS y soporte multiidioma (Español, Inglés e Hindi).



## 🚀 Inicio Rápido## 🌟 Características



```bash- **Generador de Prompts Inteligente**: Crea prompts optimizados basados en tus necesidades

npm install- **Múltiples Modelos Soportados**: ChatGPT, Claude, Gemini, Grok, Llama, Mistral

npm run dev- **Multiidioma (i18n)**: Interfaz completamente disponible en:

```  - 🇪🇸 Español

  - 🇺🇸 Inglés

Accede a http://localhost:3000  - 🇮🇳 Hindi

- **Diseño Atractivo**: Interfaz moderna con gradientes, animaciones suaves y experiencia de usuario superior

## 📦 Stack- **Guía Completa**: Aprende técnicas probadas para escribir mejores prompts

- **Copy to Clipboard**: Copia fácilmente prompts generados

- Next.js 15 + TypeScript- **Guardado Local**: Guarda tus prompts favoritos en localStorage

- Tailwind CSS- **Responsive**: Funciona perfectamente en dispositivos móviles, tablets y escritorio

- next-intl (i18n)

- Lucide React Icons## 🚀 Stack Tecnológico



## 🌍 Idiomas- **Framework**: [Next.js 15](https://nextjs.org/)

- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)

- 🇪🇸 Español- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)

- 🇺🇸 English- **Iconos**: [Lucide React](https://lucide.dev/)

- 🇮🇳 हिन्दी- **i18n**: [next-intl](https://next-intl-docs.vercel.app/)

- **Package Manager**: npm

## ✨ Características

## 📋 Requisitos Previos

- Generador de prompts optimizados

- Soporte multiidioma- Node.js 18.0 o superior

- Guía de mejores prácticas- npm o yarn

- Copy to clipboard

- Guardado en localStorage## 🛠️ Instalación

- Responsive design

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

## 📦 Scripts Disponibles

### Desarrollo
```bash
npm run dev        # Inicia servidor de desarrollo
```

### Producción
```bash
npm run build      # Compila la aplicación
npm start          # Inicia servidor de producción
```

### Linting
```bash
npm run lint       # Ejecuta ESLint
```

## 🌍 Soporte de Idiomas

La aplicación está completamente traducida a tres idiomas. Para cambiar el idioma, usa el selector en la esquina superior derecha de la navegación.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── [locale]/              # Rutas dinámicas por idioma
│   │   ├── page.tsx          # Página principal
│   │   ├── layout.tsx        # Layout del locale
│   │   ├── generator/        # Generador de prompts
│   │   └── guide/            # Guía de mejores prácticas
│   ├── layout.tsx            # Layout global
│   └── globals.css           # Estilos globales
├── components/
│   ├── Header.tsx            # Navegación principal
│   ├── Footer.tsx            # Pie de página
│   ├── LanguageSwitcher.tsx  # Selector de idiomas
│   ├── ModelCard.tsx         # Tarjeta de modelo IA
│   └── HomeContent.tsx       # Contenido de página principal
├── messages/
│   ├── es.json              # Traducciones al español
│   ├── en.json              # Traducciones al inglés
│   └── hi.json              # Traducciones al hindi
├── i18n.ts                  # Configuración de i18n
└── middleware.ts            # Middleware para i18n
```

## 👨‍💻 Autor

Creado por [Emiliano Gómez](https://www.emilianogomez.dev)

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
