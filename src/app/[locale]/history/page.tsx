"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { usePromptHistory } from "@/hooks/usePromptHistory";
import { Trash2, Copy, Crown, Sparkles } from "lucide-react";
import UpgradeModal from "@/components/UpgradeModal";

export default function HistoryPage() {
  const t = useTranslations();
  const { history, deletePrompt, clearHistory } = usePromptHistory();
  const [isPremium, setIsPremium] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  useEffect(() => {
    const license = localStorage.getItem("license");
    setIsPremium(license?.startsWith("LEMON-") || false);
  }, []);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  const handleDelete = (id: string) => {
    deletePrompt(id);
  };

  const handleClearAll = () => {
    clearHistory();
    setShowClearConfirm(false);
  };

  if (!isPremium) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="p-6 bg-gradient-to-br from-orange-500/20 to-purple-600/20 rounded-full">
                <Crown className="w-16 h-16 text-orange-500" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              {t("history.premium_required")}
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              {t("history.premium_description")}
            </p>
            <button
              onClick={() => setShowUpgradeModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30"
            >
              <Crown className="inline-block mr-2" size={20} />
              {t("upgrade_to_premium")}
            </button>
          </div>
        </div>
        {showUpgradeModal && (
          <UpgradeModal 
            isOpen={showUpgradeModal}
            onClose={() => setShowUpgradeModal(false)}
            usedToday={0}
            dailyLimit={10}
          />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-8 h-8 text-purple-500" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {t("history.title")}
              </h1>
            </div>
            <p className="text-slate-400 text-lg">
              {t("history.subtitle")}
            </p>
          </div>

          {/* Actions */}
          {history.length > 0 && (
            <div className="mb-6 flex justify-end">
              {!showClearConfirm ? (
                <button
                  onClick={() => setShowClearConfirm(true)}
                  className="px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Trash2 size={18} />
                  {t("history.clear_all")}
                </button>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">
                    {t("history.confirm_clear")}
                  </span>
                  <button
                    onClick={handleClearAll}
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                  >
                    {t("history.confirm_yes")}
                  </button>
                  <button
                    onClick={() => setShowClearConfirm(false)}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  >
                    {t("history.confirm_no")}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Prompts List */}
          {history.length === 0 ? (
            <div className="text-center py-16">
              <Sparkles className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-slate-400 mb-2">
                {t("history.empty_title")}
              </h2>
              <p className="text-slate-500">
                {t("history.empty_description")}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {history.map((prompt) => (
                <div
                  key={prompt.id}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm text-blue-400">
                          {prompt.model}
                        </span>
                        <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-400">
                          {prompt.tone}
                        </span>
                      </div>
                      <p className="text-slate-300 font-medium mb-2">
                        {prompt.task}
                      </p>
                      <p className="text-xs text-slate-500">
                        {new Date(prompt.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          handleCopy(prompt.generatedPrompt, prompt.id)
                        }
                        className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-slate-200"
                        title={t("copy_to_clipboard")}
                      >
                        <Copy size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(prompt.id)}
                        className="p-2 hover:bg-red-500/10 rounded-lg transition-colors text-red-400 hover:text-red-300"
                        title={t("history.delete")}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Generated Prompt */}
                  <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-4">
                    <p className="text-sm text-slate-300 whitespace-pre-wrap">
                      {prompt.generatedPrompt}
                    </p>
                  </div>

                  {/* Additional Info */}
                  {(prompt.context || prompt.constraints) && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      {prompt.context && (
                        <div>
                          <span className="text-slate-500 font-medium">
                            {t("generator.context")}:
                          </span>
                          <p className="text-slate-400 mt-1">
                            {prompt.context}
                          </p>
                        </div>
                      )}
                      {prompt.constraints && (
                        <div>
                          <span className="text-slate-500 font-medium">
                            {t("generator.constraints")}:
                          </span>
                          <p className="text-slate-400 mt-1">
                            {prompt.constraints}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Copy Feedback */}
                  {copiedId === prompt.id && (
                    <div className="mt-3 text-center">
                      <span className="text-green-400 text-sm">
                        ✓ {t("copied")}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
