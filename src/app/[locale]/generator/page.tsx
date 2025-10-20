"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Copy, Save, RefreshCw, Sparkles } from "lucide-react";

const models = [
  { id: "chatgpt", name: "ChatGPT", company: "OpenAI" },
  { id: "claude", name: "Claude", company: "Anthropic" },
  { id: "gemini", name: "Gemini", company: "Google" },
  { id: "grok", name: "Grok", company: "xAI" },
  { id: "llama", name: "Llama", company: "Meta" },
  { id: "mistral", name: "Mistral AI", company: "Mistral" },
  { id: "perplexity", name: "Perplexity", company: "Perplexity AI" },
  { id: "deepseek", name: "DeepSeek", company: "DeepSeek" },
  { id: "copilot", name: "Copilot", company: "Microsoft" },
  { id: "bard", name: "Bard", company: "Google" },
];

const tones = ["Profesional", "Casual", "Académico", "Creativo", "Detallado"];

const generatePrompt = (
  selectedModel: string,
  task: string,
  tone: string,
  context: string,
  constraints: string
): string => {
  // Construir el prompt optimizado de forma inteligente
  let prompt = "";

  // Agregar rol según el tono
  const roles = {
    Profesional: "Actúa como un experto profesional",
    Casual: "Actúa de manera conversacional y amigable",
    Académico: "Actúa como un académico o investigador experto",
    Creativo: "Actúa como un creativo innovador",
    Detallado: "Actúa como un analista exhaustivo y meticuloso",
  };

  prompt += roles[tone as keyof typeof roles] || roles.Profesional;
  prompt += " y ayúdame con la siguiente tarea:\n\n";

  // Agregar la tarea principal
  prompt += `**Tarea:** ${task}\n\n`;

  // Agregar contexto si existe
  if (context && context.trim()) {
    prompt += `**Contexto adicional:**\n${context}\n\n`;
  }

  // Agregar restricciones si existen
  if (constraints && constraints.trim()) {
    prompt += `**Restricciones y requisitos:**\n${constraints}\n\n`;
  }

  // Agregar instrucciones finales según el modelo
  const modelInstructions: Record<string, string> = {
    chatgpt: "Por favor, proporciona una respuesta clara, bien estructurada y directa.",
    claude: "Por favor, proporciona una respuesta reflexiva y bien razonada.",
    gemini: "Por favor, proporciona una respuesta completa con ejemplos cuando sea relevante.",
    grok: "Por favor, sé directo y al grano en tu respuesta.",
    llama: "Por favor, proporciona una respuesta detallada y bien explicada.",
    mistral: "Por favor, proporciona una respuesta concisa pero completa.",
    perplexity: "Por favor, proporciona una respuesta bien investigada con fuentes cuando sea posible.",
    deepseek: "Por favor, proporciona un análisis profundo y fundamentado.",
    copilot: "Por favor, proporciona una respuesta práctica y orientada a soluciones.",
    bard: "Por favor, proporciona una respuesta creativa y bien articulada.",
  };

  prompt += modelInstructions[selectedModel] || modelInstructions.chatgpt;

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
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-sm text-blue-400 font-medium">Generador Inteligente</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t("generator.title")}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Crea prompts optimizados para obtener los mejores resultados de tu modelo de IA
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
                className="w-full px-4 py-3 rounded-lg bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              >
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name} · {model.company}
                  </option>
                ))}
              </select>
            </div>

            {/* Task Input */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-slate-300">
                {t("generator.task")} <span className="text-red-400">*</span>
              </label>
              <textarea
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Ej: Escribe un artículo sobre inteligencia artificial..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/80 backdrop-blur border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none hover:border-slate-600"
              />
            </div>

            {/* Tone Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-slate-300">
                {t("generator.tone")}
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/80 backdrop-blur border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all hover:border-slate-600"
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
              <label className="block text-sm font-semibold mb-3 text-slate-300">
                {t("generator.context")}
                <span className="ml-2 text-xs text-slate-500">(Opcional)</span>
              </label>
              <textarea
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="Proporciona contexto adicional..."
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/80 backdrop-blur border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none hover:border-slate-600"
              />
            </div>

            {/* Constraints Input */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-slate-300">
                {t("generator.constraints")}
                <span className="ml-2 text-xs text-slate-500">(Opcional)</span>
              </label>
              <textarea
                value={constraints}
                onChange={(e) => setConstraints(e.target.value)}
                placeholder="Ej: Máximo 500 palabras, formato JSON..."
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/80 backdrop-blur border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none hover:border-slate-600"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleGenerate}
                disabled={!task.trim()}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {t("generator.generate")}
              </button>
              <button
                onClick={handleClear}
                className="px-6 py-4 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <RefreshCw size={18} />
                Limpiar
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div>
            <div className="sticky top-24">
              <div className="p-8 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur border border-slate-700/50 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Prompt Generado
                  </h2>
                  {generatedPrompt && (
                    <span className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-full">
                      Listo
                    </span>
                  )}
                </div>

                {generatedPrompt ? (
                  <>
                    <div className="mb-6 p-5 rounded-lg bg-slate-950/50 border border-slate-700/50 max-h-96 overflow-y-auto custom-scrollbar">
                      <p className="text-slate-200 whitespace-pre-wrap leading-relaxed font-mono text-sm">
                        {generatedPrompt}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={handleCopy}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-0.5"
                      >
                        <Copy size={18} />
                        {isCopied ? "¡Copiado!" : t("generator.copy")}
                      </button>
                      <button
                        onClick={handleSave}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 border border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
                      >
                        <Save size={18} />
                        {t("generator.save")}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="h-80 flex flex-col items-center justify-center text-slate-500">
                    <Sparkles className="w-12 h-12 mb-4 text-slate-600" />
                    <p className="text-center text-lg font-medium mb-2">
                      Tu prompt aparecerá aquí
                    </p>
                    <p className="text-center text-sm text-slate-600">
                      Completa el formulario y haz clic en generar
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
