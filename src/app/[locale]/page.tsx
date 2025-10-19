import HomeContent from "@/components/HomeContent";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    es: "Inicio - PromptGG | Generador de Prompts para IA",
    en: "Home - PromptGG | AI Prompt Generator",
    hi: "होम - PromptGG | AI प्रॉम्प्ट जनरेटर",
  };

  const descriptions = {
    es: "Crea prompts efectivos para ChatGPT, Claude, Gemini y más modelos de IA. Herramienta gratuita con soporte multiidioma.",
    en: "Create effective prompts for ChatGPT, Claude, Gemini and more AI models. Free tool with multilingual support.",
    hi: "ChatGPT, Claude, Gemini और अधिक AI मॉडल के लिए प्रभावी प्रॉम्प्ट बनाएं। बहुभाषी समर्थन के साथ मुफ्त टूल।",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.es,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.es,
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <HomeContent locale={locale} />;
}
