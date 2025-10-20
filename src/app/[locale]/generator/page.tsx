"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Copy, Save, RefreshCw, Sparkles, Crown, Zap } from "lucide-react";
import { usePremium } from "@/hooks/usePremium";
import { usePromptHistory } from "@/hooks/usePromptHistory";
import UpgradeModal from "@/components/UpgradeModal";
import AdSenseSlot from "@/components/AdSenseSlot";

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

// Definición multiidioma de tonos
const tonesConfig = {
  es: ["Profesional", "Casual", "Académico", "Creativo", "Detallado"],
  en: ["Professional", "Casual", "Academic", "Creative", "Detailed"],
  hi: ["पेशेवर", "आकस्मिक", "शैक्षणिक", "रचनात्मक", "विस्तृत"],
};

const generatePrompt = (
  selectedModel: string,
  task: string,
  tone: string,
  context: string,
  constraints: string,
  locale: string
): string => {
  // Textos multiidioma
  const i18n = {
    es: {
      roles: {
        Profesional: "Actúa como un experto profesional altamente cualificado",
        Casual: "Responde de manera conversacional, amigable y accesible",
        Académico: "Actúa como un académico o investigador experto con rigor científico",
        Creativo: "Actúa como un creativo innovador con pensamiento lateral",
        Detallado: "Actúa como un analista exhaustivo y meticuloso que no omite ningún detalle",
      },
      task: "Tarea",
      contextLabel: "Contexto adicional",
      constraintsLabel: "Restricciones y requisitos",
      outputFormat: "Formato de respuesta esperado",
    },
    en: {
      roles: {
        Professional: "Act as a highly qualified professional expert",
        Casual: "Respond in a conversational, friendly and accessible manner",
        Academic: "Act as an academic or expert researcher with scientific rigor",
        Creative: "Act as an innovative creative with lateral thinking",
        Detailed: "Act as a thorough and meticulous analyst who omits no detail",
      },
      task: "Task",
      contextLabel: "Additional context",
      constraintsLabel: "Constraints and requirements",
      outputFormat: "Expected response format",
    },
    hi: {
      roles: {
        पेशेवर: "एक उच्च योग्य पेशेवर विशेषज्ञ के रूप में कार्य करें",
        आकस्मिक: "संवादात्मक, मैत्रीपूर्ण और सुलभ तरीके से जवाब दें",
        शैक्षणिक: "वैज्ञानिक कठोरता के साथ एक शैक्षणिक या विशेषज्ञ शोधकर्ता के रूप में कार्य करें",
        रचनात्मक: "पार्श्व सोच वाले एक अभिनव रचनात्मक के रूप में कार्य करें",
        विस्तृत: "एक गहन और सावधानीपूर्वक विश्लेषक के रूप में कार्य करें जो कोई विवरण नहीं छोड़ता",
      },
      task: "कार्य",
      contextLabel: "अतिरिक्त संदर्भ",
      constraintsLabel: "प्रतिबंध और आवश्यकताएँ",
      outputFormat: "अपेक्षित प्रतिक्रिया प्रारूप",
    },
  };

  type LocaleKey = keyof typeof i18n;
  const lang = i18n[locale as LocaleKey] || i18n.es;
  let prompt = "";

  // Helper para obtener el rol según tono
  const getRole = (tone: string) => {
    const roleKey = tone as keyof typeof lang.roles;
    return lang.roles[roleKey] || Object.values(lang.roles)[0];
  };

  // Técnicas específicas por modelo basadas en documentación oficial
  
  if (selectedModel === "chatgpt") {
    // OpenAI recomienda: Role, Task, Context, Format, Tone
    prompt += `${getRole(tone)}.\n\n`;
    prompt += `${lang.task}: ${task}\n\n`;
    if (context?.trim()) prompt += `${lang.contextLabel}: ${context}\n\n`;
    if (constraints?.trim()) prompt += `${lang.constraintsLabel}: ${constraints}\n\n`;
    prompt += locale === "es" ? "Proporciona una respuesta clara, estructurada y bien razonada." 
      : locale === "en" ? "Provide a clear, structured and well-reasoned response."
      : "स्पष्ट, संरचित और अच्छी तरह से तर्क किया गया जवाब प्रदान करें।";
  }
  
  else if (selectedModel === "claude") {
    // Anthropic recomienda: Usar XML tags, ser directo, pensar paso a paso
    prompt += `${getRole(tone)}.\n\n`;
    prompt += `<task>\n${task}\n</task>\n\n`;
    if (context?.trim()) prompt += `<context>\n${context}\n</context>\n\n`;
    if (constraints?.trim()) prompt += `<constraints>\n${constraints}\n</constraints>\n\n`;
    prompt += locale === "es" 
      ? "Piensa paso a paso y proporciona una respuesta reflexiva y bien fundamentada."
      : locale === "en" 
      ? "Think step by step and provide a thoughtful and well-founded response."
      : "चरण दर चरण सोचें और एक विचारशील और अच्छी तरह से स्थापित प्रतिक्रिया प्रदान करें।";
  }
  
  else if (selectedModel === "gemini") {
    // Google recomienda: Ser específico, usar ejemplos, multi-turn
    prompt += `${getRole(tone)}.\n\n`;
    prompt += `## ${lang.task}\n${task}\n\n`;
    if (context?.trim()) prompt += `## ${lang.contextLabel}\n${context}\n\n`;
    if (constraints?.trim()) prompt += `## ${lang.constraintsLabel}\n${constraints}\n\n`;
    prompt += locale === "es"
      ? "Proporciona una respuesta completa con ejemplos prácticos cuando sea relevante."
      : locale === "en"
      ? "Provide a comprehensive response with practical examples when relevant."
      : "प्रासंगिक होने पर व्यावहारिक उदाहरणों के साथ एक व्यापक प्रतिक्रिया प्रदान करें।";
  }
  
  else if (selectedModel === "grok") {
    // xAI (Grok) - directo, conciso, sin rodeos
    prompt += `${getRole(tone)}.\n\n`;
    prompt += `${task}\n\n`;
    if (context?.trim()) prompt += `Context: ${context}\n\n`;
    if (constraints?.trim()) prompt += `Requirements: ${constraints}\n\n`;
    prompt += locale === "es"
      ? "Sé directo y al grano. No uses palabras innecesarias."
      : locale === "en"
      ? "Be direct and to the point. Don't use unnecessary words."
      : "सीधे मुद्दे पर आएं। अनावश्यक शब्दों का प्रयोग न करें।";
  }
  
  else if (selectedModel === "llama" || selectedModel === "mistral") {
    // Meta/Mistral - formato conversacional con instrucciones claras
    prompt += `[INST] ${getRole(tone)}\n\n`;
    prompt += `${lang.task}: ${task}\n`;
    if (context?.trim()) prompt += `${lang.contextLabel}: ${context}\n`;
    if (constraints?.trim()) prompt += `${lang.constraintsLabel}: ${constraints}\n`;
    prompt += "[/INST]";
  }
  
  else if (selectedModel === "perplexity") {
    // Perplexity - enfoque en búsqueda y fuentes
    prompt += `${getRole(tone)}.\n\n`;
    prompt += `${task}\n\n`;
    if (context?.trim()) prompt += `${lang.contextLabel}: ${context}\n\n`;
    if (constraints?.trim()) prompt += `${lang.constraintsLabel}: ${constraints}\n\n`;
    prompt += locale === "es"
      ? "Proporciona una respuesta bien investigada citando fuentes relevantes cuando sea posible."
      : locale === "en"
      ? "Provide a well-researched response citing relevant sources when possible."
      : "जहां संभव हो प्रासंगिक स्रोतों का हवाला देते हुए एक अच्छी तरह से शोधित प्रतिक्रिया प्रदान करें।";
  }
  
  else if (selectedModel === "deepseek") {
    // DeepSeek - análisis profundo y razonamiento
    prompt += `${getRole(tone)}.\n\n`;
    prompt += `${lang.task}: ${task}\n\n`;
    if (context?.trim()) prompt += `${lang.contextLabel}: ${context}\n\n`;
    if (constraints?.trim()) prompt += `${lang.constraintsLabel}: ${constraints}\n\n`;
    prompt += locale === "es"
      ? "Proporciona un análisis profundo con razonamiento detallado y fundamentado."
      : locale === "en"
      ? "Provide a deep analysis with detailed and well-founded reasoning."
      : "विस्तृत और अच्छी तरह से स्थापित तर्क के साथ एक गहन विश्लेषण प्रदान करें।";
  }
  
  else if (selectedModel === "copilot" || selectedModel === "bard") {
    // Microsoft Copilot / Bard - práctico y orientado a soluciones
    prompt += `${getRole(tone)}.\n\n`;
    prompt += `${task}\n\n`;
    if (context?.trim()) prompt += `${lang.contextLabel}: ${context}\n\n`;
    if (constraints?.trim()) prompt += `${lang.constraintsLabel}: ${constraints}\n\n`;
    prompt += locale === "es"
      ? "Proporciona una respuesta práctica y orientada a soluciones."
      : locale === "en"
      ? "Provide a practical and solution-oriented response."
      : "एक व्यावहारिक और समाधान-उन्मुख प्रतिक्रिया प्रदान करें।";
  }

  return prompt.trim();
};

export default function Generator() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const modelFromUrl = searchParams.get("model");
  
  // Detectar el idioma actual desde la URL
  const currentLocale = typeof window !== 'undefined' 
    ? window.location.pathname.split('/')[1] || 'es'
    : 'es';
  
  // Obtener los tonos según el idioma
  const tones = tonesConfig[currentLocale as keyof typeof tonesConfig] || tonesConfig.es;

  // Premium hook
  const { 
    isPremium, 
    usedToday, 
    dailyLimit, 
    remainingToday, 
    canGenerate, 
    incrementUsage 
  } = usePremium();

  // History hook
  const { savePrompt } = usePromptHistory();

  const [selectedModel, setSelectedModel] = useState<string>(
    modelFromUrl || "chatgpt"
  );
  const [task, setTask] = useState("");
  const [tone, setTone] = useState(tones[0]);
  const [context, setContext] = useState("");
  const [constraints, setConstraints] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  // Actualizar el tono cuando cambia el idioma
  useEffect(() => {
    setTone(tones[0]);
  }, [currentLocale, tones]);

  const handleGenerate = () => {
    if (!task.trim()) {
      return;
    }

    // Verificar límite
    if (!canGenerate) {
      setShowUpgradeModal(true);
      return;
    }

    const prompt = generatePrompt(
      selectedModel,
      task,
      tone,
      context,
      constraints,
      currentLocale
    );
    setGeneratedPrompt(prompt);
    
    // Incrementar contador de uso
    incrementUsage();
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
    if (!generatedPrompt) return;
    
    // Solo usuarios premium pueden guardar
    if (!isPremium) {
      setShowUpgradeModal(true);
      return;
    }

    savePrompt({
      model: selectedModel,
      task,
      tone,
      context,
      constraints,
      generatedPrompt,
    });

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-sm text-blue-400 font-medium">{t("generator.badge")}</span>
            </div>
            
            {/* Premium badge o contador */}
            {isPremium ? (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                <Crown size={16} className="text-yellow-400" />
                <span className="text-sm text-yellow-400 font-medium">{t("premium.premiumBadge")}</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700">
                <Zap size={16} className="text-blue-400" />
                <span className="text-sm text-slate-300">
                  {remainingToday === 0 ? (
                    <span className="text-red-400">{t("premium.limitReached")}</span>
                  ) : (
                    t("premium.remaining").replace("{count}", remainingToday.toString())
                  )}
                </span>
              </div>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t("generator.title")}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t("generator.description")}
          </p>
        </div>

        {/* AdSense - Banner superior (solo usuarios gratuitos) */}
        <div className="mb-8">
          <AdSenseSlot 
            slot="1234567890" 
            format="horizontal"
            className="max-w-4xl mx-auto"
          />
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
                placeholder={t("generator.taskPlaceholder")}
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
              </label>
              <textarea
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder={t("generator.contextPlaceholder")}
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/80 backdrop-blur border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none hover:border-slate-600"
              />
            </div>

            {/* Constraints Input */}
            <div>
              <label className="block text-sm font-semibold mb-3 text-slate-300">
                {t("generator.constraints")}
              </label>
              <textarea
                value={constraints}
                onChange={(e) => setConstraints(e.target.value)}
                placeholder={t("generator.constraintsPlaceholder")}
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
                {t("generator.clear")}
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div>
            <div className="sticky top-24">
              <div className="p-8 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur border border-slate-700/50 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {t("generator.outputTitle")}
                  </h2>
                  {generatedPrompt && (
                    <span className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-full">
                      {t("generator.outputReady")}
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
                        {isCopied ? t("generator.copied") : t("generator.copy")}
                      </button>
                      <button
                        onClick={handleSave}
                        className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 ${
                          isSaved
                            ? "bg-green-600 hover:bg-green-500"
                            : "border border-slate-600 hover:border-slate-500 hover:bg-slate-800/50"
                        } rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5`}
                      >
                        <Save size={18} />
                        {isSaved ? t("generator.saved") : t("generator.save")}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="h-80 flex flex-col items-center justify-center text-slate-500">
                    <Sparkles className="w-12 h-12 mb-4 text-slate-600" />
                    <p className="text-center text-lg font-medium mb-2">
                      {t("generator.emptyTitle")}
                    </p>
                    <p className="text-center text-sm text-slate-600">
                      {t("generator.emptyDescription")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AdSense - Banner inferior (solo usuarios gratuitos) */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <AdSenseSlot 
          slot="9876543210" 
          format="horizontal"
          className="max-w-4xl mx-auto"
        />
      </div>

      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        usedToday={usedToday}
        dailyLimit={dailyLimit}
      />
    </div>
  );
}
