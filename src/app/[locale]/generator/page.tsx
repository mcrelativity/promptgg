"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Copy, Save, RefreshCw } from "lucide-react";

const models = [
  { id: "chatgpt", name: "ChatGPT (OpenAI)", emoji: "🤖" },
  { id: "claude", name: "Claude (Anthropic)", emoji: "🧠" },
  { id: "gemini", name: "Gemini (Google)", emoji: "✨" },
  { id: "grok", name: "Grok (xAI)", emoji: "⚡" },
  { id: "llama", name: "Llama (Meta)", emoji: "🦙" },
  { id: "mistral", name: "Mistral AI", emoji: "🎯" },
];

const tones = ["Profesional", "Casual", "Académico", "Creativo", "Detallado"];

const generatePrompt = (
  selectedModel: string,
  task: string,
  tone: string,
  context: string,
  constraints: string
): string => {
  const prompt = `You are an expert AI prompt engineer. Generate an effective prompt for ${selectedModel}.

Task: ${task}
Tone: ${tone}
${context ? `Context: ${context}` : ""}
${constraints ? `Constraints: ${constraints}` : ""}

Requirements:
- Be specific and clear
- Include context for better understanding
- Specify the desired output format
- Add any relevant constraints
- Use best practices for prompt engineering`;

  return prompt;
};

export default function Generator() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const modelFromUrl = searchParams.get("model");

  const [selectedModel, setSelectedModel] = useState<string>(
    modelFromUrl || "chatgpt"
  );
  const [task, setTask] = useState("");
  const [tone, setTone] = useState(tones[0]);
  const [context, setContext] = useState("");
  const [constraints, setConstraints] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [savedPrompts, setSavedPrompts] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState(false);

  // Load saved prompts from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("savedPrompts");
    if (saved) {
      setSavedPrompts(JSON.parse(saved));
    }
  }, []);

  const handleGenerate = () => {
    if (!task.trim()) {
      return;
    }

    const prompt = generatePrompt(
      selectedModel,
      task,
      tone,
      context,
      constraints
    );
    setGeneratedPrompt(prompt);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      console.error("Failed to copy");
    }
  };

  const handleSave = () => {
    if (generatedPrompt && !savedPrompts.includes(generatedPrompt)) {
      const updated = [...savedPrompts, generatedPrompt];
      setSavedPrompts(updated);
      localStorage.setItem("savedPrompts", JSON.stringify(updated));
    }
  };

  const handleClear = () => {
    setTask("");
    setContext("");
    setConstraints("");
    setGeneratedPrompt("");
    setTone(tones[0]);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t("generator.title")}</h1>
          <p className="text-slate-400">
            Crea prompts optimizados para obtener los mejores resultados
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            {/* Model Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                {t("generator.selectModel")}
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition"
              >
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.emoji} {model.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Task Input */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                {t("generator.task")} *
              </label>
              <textarea
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Ej: Escribe un artículo sobre inteligencia artificial..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition resize-none"
              />
            </div>

            {/* Tone Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                {t("generator.tone")}
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition"
              >
                {tones.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Context Input */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                {t("generator.context")}
              </label>
              <textarea
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="Proporciona contexto adicional..."
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition resize-none"
              />
            </div>

            {/* Constraints Input */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                {t("generator.constraints")}
              </label>
              <textarea
                value={constraints}
                onChange={(e) => setConstraints(e.target.value)}
                placeholder="Ej: Máximo 500 palabras, formato JSON..."
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleGenerate}
                disabled={!task.trim()}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t("generator.generate")}
              </button>
              <button
                onClick={handleClear}
                className="px-6 py-3 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition flex items-center gap-2"
              >
                <RefreshCw size={18} />
                Limpiar
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div>
            <div className="sticky top-24">
              <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
                <h2 className="text-xl font-semibold mb-4">Prompt Generado</h2>

                {generatedPrompt ? (
                  <>
                    <div className="mb-6 p-4 rounded-lg bg-slate-900 border border-slate-700 max-h-96 overflow-y-auto">
                      <p className="text-slate-300 whitespace-pre-wrap">
                        {generatedPrompt}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={handleCopy}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
                      >
                        <Copy size={18} />
                        {isCopied ? "¡Copiado!" : t("generator.copy")}
                      </button>
                      <button
                        onClick={handleSave}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-slate-600 hover:border-slate-500 rounded-lg font-semibold transition"
                      >
                        <Save size={18} />
                        {t("generator.save")}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="h-64 flex items-center justify-center text-slate-500">
                    <p className="text-center">
                      Completa el formulario y genera un prompt
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
