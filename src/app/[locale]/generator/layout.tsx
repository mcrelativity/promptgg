import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    es: "Generador de Prompts - PromptGG",
    en: "Prompt Generator - PromptGG",
    hi: "प्रॉम्प्ट जनरेटर - PromptGG",
  };

  const descriptions = {
    es: "Genera prompts optimizados para ChatGPT, Claude, Gemini y más. Personaliza tono, contexto y restricciones.",
    en: "Generate optimized prompts for ChatGPT, Claude, Gemini and more. Customize tone, context and constraints.",
    hi: "ChatGPT, Claude, Gemini और अधिक के लिए अनुकूलित प्रॉम्प्ट उत्पन्न करें। टोन, संदर्भ और बाधाओं को अनुकूलित करें।",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.es,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.es,
  };
}

export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
