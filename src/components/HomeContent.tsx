"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Sparkles, Brain, Zap, Check, Crown } from "lucide-react";
import ModelCard from "@/components/ModelCard";
import AdSenseSlot from "@/components/AdSenseSlot";
import { useState } from "react";
import UpgradeModal from "./UpgradeModal";
import { usePremium } from "@/hooks/usePremium";

const models = [
  { id: "chatgpt", company: "OpenAI" },
  { id: "claude", company: "Anthropic" },
  { id: "gemini", company: "Google" },
  { id: "grok", company: "xAI" },
  { id: "llama", company: "Meta" },
  { id: "mistral", company: "Mistral AI" },
  { id: "perplexity", company: "Perplexity AI" },
  { id: "deepseek", company: "DeepSeek" },
];

export default function HomeContent({ locale }: { locale: string }) {
  const t = useTranslations();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const { isPremium, usedToday, dailyLimit } = usePremium();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm text-blue-300">{t("hero.badge")}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t("hero.title")}
          </h1>

          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href={`/${locale}/generator`}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              {t("hero.cta")}
              <ArrowRight size={20} />
            </Link>
            <Link
              href={`/${locale}/guide`}
              className="px-8 py-4 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              {t("hero.secondary")}
            </Link>
          </div>

          {/* Floating cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <Brain size={32} className="mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">{t("hero.card1_title")}</h3>
              <p className="text-sm text-slate-400">{t("hero.card1_desc")}</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <Sparkles size={32} className="mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold mb-2">{t("hero.card2_title")}</h3>
              <p className="text-sm text-slate-400">{t("hero.card2_desc")}</p>
            </div>
            <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
              <Zap size={32} className="mx-auto mb-4 text-yellow-400" />
              <h3 className="font-semibold mb-2">{t("hero.card3_title")}</h3>
              <p className="text-sm text-slate-400">{t("hero.card3_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense - Banner intermedio */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <AdSenseSlot 
            slot="5555555555" 
            format="horizontal"
          />
        </div>
      </section>

      {/* Models Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("models.title")}
            </h2>
            <p className="text-slate-400">
              {t("models.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <ModelCard
                key={model.id}
                model={model}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("premium.pricing_title")}
            </h2>
            <p className="text-xl text-slate-400">
              {t("premium.pricing_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan Gratis */}
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition">
              <h3 className="text-2xl font-bold mb-2">{t("premium.free_title")}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">{t("premium.free_price")}</span>
                <span className="text-slate-400">{t("premium.perMonth")}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{t("premium.free_feature1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{t("premium.free_feature2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span>{t("premium.free_feature3")}</span>
                </li>
              </ul>

              <Link
                href={`/${locale}/generator`}
                className="block w-full py-3 px-6 text-center border border-slate-600 rounded-lg font-semibold hover:bg-slate-700 transition"
              >
                {t("premium.free_cta")}
              </Link>
            </div>

            {/* Plan Premium */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-600/10 border-2 border-purple-500 hover:border-purple-400 transition">
              {/* Badge Popular */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-bold">
                {t("premium.popular")}
              </div>

              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Crown className="text-yellow-400" size={24} />
                {t("premium.premium_title")}
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold">{t("premium.premium_price")}</span>
                <span className="text-slate-400">{t("premium.perMonth")}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{t("premium.premium_feature1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{t("premium.premium_feature2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{t("premium.premium_feature3")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{t("premium.premium_feature4")}</span>
                </li>
              </ul>

              {!isPremium ? (
                <button
                  onClick={() => setShowUpgradeModal(true)}
                  className="block w-full py-3 px-6 text-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-lg font-bold transition transform hover:scale-105"
                >
                  {t("premium.premium_cta")}
                </button>
              ) : (
                <div className="block w-full py-3 px-6 text-center bg-green-600 rounded-lg font-bold">
                  ✓ {t("premium.premiumBadge")}
                </div>
              )}
              
              <p className="text-xs text-slate-400 text-center mt-4">
                {t("premium.cancelAnytime")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("hero.cta_title")}
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            {t("hero.cta_desc")}
          </p>
          <Link
            href={`/${locale}/generator`}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105"
          >
            {t("hero.cta_button")}
          </Link>
        </div>
      </section>

      {/* Upgrade Modal */}
      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        usedToday={usedToday}
        dailyLimit={dailyLimit}
      />
    </>
  );
}
