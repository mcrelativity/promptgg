"use client";

import { useTranslations } from "next-intl";
import { CheckCircle, Target, MessageCircle, FileText, Lightbulb, RefreshCw } from "lucide-react";

const GuideSection = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="p-8 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-blue-500/10">
        <Icon size={24} className="text-blue-400" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  </div>
);

export default function Guide() {
  const t = useTranslations();

  const sections = [
    {
      icon: Target,
      title: t("guide.be_specific"),
      description: t("guide.be_specific_desc"),
    },
    {
      icon: MessageCircle,
      title: t("guide.context_matters"),
      description: t("guide.context_matters_desc"),
    },
    {
      icon: CheckCircle,
      title: t("guide.role_assignment"),
      description: t("guide.role_assignment_desc"),
    },
    {
      icon: FileText,
      title: t("guide.format_output"),
      description: t("guide.format_output_desc"),
    },
    {
      icon: Lightbulb,
      title: t("guide.examples"),
      description: t("guide.examples_desc"),
    },
    {
      icon: RefreshCw,
      title: t("guide.iterate"),
      description: t("guide.iterate_desc"),
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">{t("guide.title")}</h1>
          <p className="text-xl text-slate-400">
            Aprende las mejores prácticas para escribir prompts efectivos
          </p>
        </div>

        {/* Guide Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {sections.map((section, index) => (
            <GuideSection key={index} {...section} />
          ))}
        </div>

        {/* Examples Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Ejemplos Prácticos</h2>

          <div className="space-y-8">
            {/* Example 1 */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-400">
                ❌ Prompt Malo:
              </h3>
              <div className="p-4 rounded-lg bg-slate-900 border border-red-500/30">
                <p className="text-slate-300">
                  &quot;Escribe un artículo sobre IA&quot;
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-400">
                ✅ Prompt Efectivo:
              </h3>
              <div className="p-4 rounded-lg bg-slate-900 border border-green-500/30">
                <p className="text-slate-300">
                  &quot;Actúa como un experto en tecnología. Escribe un artículo de 1500 palabras sobre cómo la inteligencia artificial está transformando el mercado laboral en 2025. Incluye: 1) Introducción, 2) Tres casos de uso reales, 3) Impacto económico, 4) Conclusión. Tono: profesional pero accesible. Formato: Markdown con títulos y viñetas.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">💡 Consejos Pro</h2>

          <ul className="space-y-4 text-slate-300">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">1.</span>
              <span>
                Usa el generador de PromptGG para ahorrar tiempo y obtener prompts optimizados
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">2.</span>
              <span>
                Siempre proporciona contexto: ¿Para quién? ¿Por qué? ¿Cuándo?
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">3.</span>
              <span>
                Especifica el formato deseado (JSON, tabla, lista, pasos numerados)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">4.</span>
              <span>
                Asigna un rol a la IA: &quot;Actúa como un...&quot;, &quot;Eres un experto en...&quot;
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">5.</span>
              <span>
                Proporciona ejemplos del resultado deseado cuando sea posible
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">6.</span>
              <span>
                Itera: Si el resultado no es perfecto, ajusta el prompt y prueba de nuevo
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
