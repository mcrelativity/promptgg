import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    es: "Guía de Mejores Prácticas - PromptGG",
    en: "Best Practices Guide - PromptGG",
    hi: "सर्वोत्तम प्रथाओं की मार्गदर्शिका - PromptGG",
  };

  const descriptions = {
    es: "Aprende los 6 principios fundamentales para crear prompts efectivos. Ejemplos prácticos y consejos profesionales.",
    en: "Learn the 6 fundamental principles for creating effective prompts. Practical examples and professional tips.",
    hi: "प्रभावी प्रॉम्प्ट बनाने के लिए 6 मौलिक सिद्धांत सीखें। व्यावहारिक उदाहरण और पेशेवर सुझाव।",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.es,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.es,
  };
}

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
