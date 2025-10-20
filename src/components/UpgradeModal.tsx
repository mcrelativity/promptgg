"use client";

import { useTranslations } from "next-intl";
import { X, Crown, Sparkles, Zap, Clock, Check } from "lucide-react";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  usedToday: number;
  dailyLimit: number;
}

export default function UpgradeModal({
  isOpen,
  onClose,
  usedToday,
  dailyLimit,
}: UpgradeModalProps) {
  const t = useTranslations();

  if (!isOpen) return null;

  const handleUpgrade = () => {
    // Redirigir a Lemonsqueezy Checkout
    window.open("https://namtaflabs.lemonsqueezy.com/buy/3aa997f9-b09e-429a-b1f4-8e866f79fb62?media=0&logo=0&discount=0", "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-800 transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="relative p-8">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600">
              <Crown size={32} className="text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            {t("premium.title")}
          </h2>

          {/* Subtitle */}
          <p className="text-center text-slate-400 mb-6">
            {t("premium.subtitle")}
          </p>

          {/* Usage bar */}
          <div className="mb-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">{t("premium.usageToday")}</span>
              <span className="text-sm font-semibold text-red-400">
                {usedToday}/{dailyLimit}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-500"
                style={{ width: `${(usedToday / dailyLimit) * 100}%` }}
              />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <Sparkles size={20} className="text-blue-400" />
              </div>
              <span className="text-slate-200">{t("premium.feature1")}</span>
              <Check size={20} className="ml-auto text-green-400" />
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Zap size={20} className="text-purple-400" />
              </div>
              <span className="text-slate-200">{t("premium.feature2")}</span>
              <Check size={20} className="ml-auto text-green-400" />
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/30">
              <div className="p-2 rounded-lg bg-pink-500/10">
                <Clock size={20} className="text-pink-400" />
              </div>
              <span className="text-slate-200">{t("premium.feature3")}</span>
              <Check size={20} className="ml-auto text-green-400" />
            </div>
          </div>

          {/* Price */}
          <div className="text-center mb-6">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 mb-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                $4.99
              </span>
              <span className="text-slate-400 ml-2">{t("premium.perMonth")}</span>
            </div>
            <p className="text-xs text-slate-500">{t("premium.cancelAnytime")}</p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleUpgrade}
              className="w-full px-6 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 hover:from-yellow-400 hover:via-orange-400 hover:to-pink-400 rounded-lg font-bold text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Crown size={20} />
              {t("premium.upgradeButton")}
            </button>

            <button
              onClick={onClose}
              className="w-full px-6 py-3 border border-slate-700 hover:bg-slate-800 rounded-lg font-semibold transition-all duration-300"
            >
              {t("premium.maybeLater")}
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-6 pt-6 border-t border-slate-800">
            <div className="flex items-center justify-center gap-6 text-xs text-slate-500">
              <span>🔒 {t("premium.securePayment")}</span>
              <span>✓ {t("premium.instantAccess")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
