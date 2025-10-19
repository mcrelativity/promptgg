import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://promptgg.app"),
  title: {
    default: "PromptGG - Generador de Prompts Efectivos para IA",
    template: "%s | PromptGG",
  },
  description:
    "Crea prompts profesionales y efectivos para ChatGPT, Claude, Gemini, Grok y más. Generador inteligente con soporte multiidioma.",
  keywords: [
    "prompts",
    "IA",
    "ChatGPT",
    "Claude",
    "Gemini",
    "generador de prompts",
    "inteligencia artificial",
    "AI prompts",
    "prompt engineering",
  ],
  authors: [{ name: "PromptGG" }],
  creator: "PromptGG",
  publisher: "PromptGG",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US", "hi_IN"],
    url: "https://promptgg.app",
    title: "PromptGG - Generador de Prompts Efectivos para IA",
    description:
      "Crea prompts profesionales para ChatGPT, Claude, Gemini y más modelos de IA. Multiidioma y fácil de usar.",
    siteName: "PromptGG",
  },
  twitter: {
    card: "summary_large_image",
    title: "PromptGG - Generador de Prompts para IA",
    description:
      "Crea prompts efectivos para ChatGPT, Claude, Gemini y más. Gratis y multiidioma.",
    creator: "@promptgg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
