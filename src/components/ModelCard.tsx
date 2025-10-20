"use client";

import Link from "next/link";
import {
  ArrowRight,
  MessageSquare,
  Brain,
  Sparkles,
  Zap,
  Layers,
  Target,
  Search,
  Waves,
  Briefcase,
  Palette,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface ModelCardProps {
  model: {
    id: string;
    company: string;
  };
  locale: string;
}

export default function ModelCard({ model, locale }: ModelCardProps) {
  const t = useTranslations();

  const modelNames: Record<string, string> = {
    chatgpt: t("models.chatgpt"),
    claude: t("models.claude"),
    gemini: t("models.gemini"),
    grok: t("models.grok"),
    llama: t("models.llama"),
    mistral: t("models.mistral"),
    perplexity: "Perplexity",
    deepseek: "DeepSeek",
  };

  // Mapeo de íconos profesionales por modelo
  const modelIcons: Record<string, React.ReactNode> = {
    chatgpt: <MessageSquare className="w-10 h-10" />,
    claude: <Brain className="w-10 h-10" />,
    gemini: <Sparkles className="w-10 h-10" />,
    grok: <Zap className="w-10 h-10" />,
    llama: <Layers className="w-10 h-10" />,
    mistral: <Target className="w-10 h-10" />,
    perplexity: <Search className="w-10 h-10" />,
    deepseek: <Waves className="w-10 h-10" />,
    copilot: <Briefcase className="w-10 h-10" />,
    bard: <Palette className="w-10 h-10" />,
  };

  // Colores de gradiente por modelo
  const modelColors: Record<string, string> = {
    chatgpt: "from-green-500 to-emerald-600",
    claude: "from-orange-500 to-red-600",
    gemini: "from-blue-500 to-purple-600",
    grok: "from-yellow-500 to-orange-600",
    llama: "from-purple-500 to-pink-600",
    mistral: "from-cyan-500 to-blue-600",
    perplexity: "from-indigo-500 to-purple-600",
    deepseek: "from-teal-500 to-cyan-600",
    copilot: "from-blue-600 to-indigo-600",
    bard: "from-pink-500 to-rose-600",
  };

  return (
    <Link href={`/${locale}/generator?model=${model.id}`}>
      <div className="group relative p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 cursor-pointer overflow-hidden">
        {/* Efecto de brillo al hover */}
        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
          style={{
            backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
          }}
        />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-lg bg-gradient-to-br ${modelColors[model.id] || modelColors.chatgpt} text-white shadow-lg`}>
              {modelIcons[model.id] || modelIcons.chatgpt}
            </div>
            <ArrowRight
              size={20}
              className="text-slate-600 group-hover:text-blue-400 transition-all duration-300 transform group-hover:translate-x-1"
            />
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
            {modelNames[model.id] || model.id}
          </h3>
          <p className="text-sm text-slate-400 mb-3">{model.company}</p>

          <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
            {t("models.card_cta")}
          </p>
        </div>
      </div>
    </Link>
  );
}
