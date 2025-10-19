"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface ModelCardProps {
  model: {
    id: string;
    icon: string;
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
  };

  return (
    <Link href={`/${locale}/generator?model=${model.id}`}>
      <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition cursor-pointer group">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{model.icon}</div>
          <ArrowRight
            size={20}
            className="text-slate-600 group-hover:text-blue-400 transition transform group-hover:translate-x-1"
          />
        </div>

        <h3 className="text-xl font-semibold mb-1">
          {modelNames[model.id] || model.id}
        </h3>
        <p className="text-sm text-slate-400 mb-4">{model.company}</p>

        <p className="text-sm text-slate-500">
          Guías especializadas y mejores prácticas
        </p>
      </div>
    </Link>
  );
}
