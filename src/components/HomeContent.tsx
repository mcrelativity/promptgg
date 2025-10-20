"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Sparkles, Brain, Zap } from "lucide-react";
import ModelCard from "@/components/ModelCard";

const models = [
  { id: "chatgpt", company: "OpenAI" },
  { id: "claude", company: "Anthropic" },
  { id: "gemini", company: "Google" },
  { id: "grok", company: "xAI" },
  { id: "llama", company: "Meta" },
  { id: "mistral", company: "Mistral AI" },
  { id: "perplexity", company: "Perplexity AI" },
  { id: "deepseek", company: "DeepSeek" },
];

export default function HomeContent({ locale }: { locale: string }) {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm text-blue-300">AI Prompt Engineering</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t("hero.title")}
          </h1>

          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href={`/${locale}/generator`}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              {t("hero.cta")}
              <ArrowRight size={20} />
            </Link>
            <Link
              href={`/${locale}/guide`}
              className="px-8 py-4 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              {t("hero.secondary")}
            </Link>
          </div>

          {/* Floating cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <Brain size={32} className="mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">Específico</h3>
              <p className="text-sm text-slate-400">Resultados precisos y relevantes</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <Sparkles size={32} className="mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold mb-2">Inteligente</h3>
              <p className="text-sm text-slate-400">Optimizado para cada modelo</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <Zap size={32} className="mx-auto mb-4 text-yellow-400" />
              <h3 className="font-semibold mb-2">Rápido</h3>
              <p className="text-sm text-slate-400">Prompts efectivos al instante</p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("models.title")}
            </h2>
            <p className="text-slate-400">
              {t("models.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <ModelCard
                key={model.id}
                model={model}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para mejorar tus prompts?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Comienza ahora y descubre cómo escribir prompts que realmente funcionen
          </p>
          <Link
            href={`/${locale}/generator`}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105"
          >
            Abrir Generador
          </Link>
        </div>
      </section>
    </>
  );
}
