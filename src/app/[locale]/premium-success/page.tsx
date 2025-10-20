"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Crown, Check, Sparkles, ArrowRight } from "lucide-react";
import { usePremium } from "@/hooks/usePremium";

interface PremiumSuccessProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ order_id?: string }>;
}

export default function PremiumSuccess({ params, searchParams }: PremiumSuccessProps) {
  const { activatePremium } = usePremium();
  const [locale, setLocale] = useState("es");

  useEffect(() => {
    const activateFromLemonsqueezy = async () => {
      const resolvedSearchParams = await searchParams;
      const orderId = resolvedSearchParams.order_id;
      
      if (orderId) {
        // Generar una licencia basada en el order_id de Lemonsqueezy
        const license = `LEMON-${orderId.substring(0, 16).toUpperCase()}`;
        activatePremium(license);
      }
    };
    
    activateFromLemonsqueezy();
  }, [searchParams, activatePremium]);

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setLocale(resolvedParams.locale);
    };
    
    resolveParams();
  }, [params]);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 shadow-2xl overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-pink-500/10 pointer-events-none" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 animate-pulse">
                <Crown size={48} className="text-white" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              ¡Bienvenido a Premium!
            </h1>

            {/* Description */}
            <p className="text-center text-slate-300 text-lg mb-8">
              Tu cuenta ha sido actualizada exitosamente. Ahora tienes acceso a todas las funciones premium.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Check size={20} className="text-green-400" />
                </div>
                <span className="text-slate-200">Prompts ilimitados por día</span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Check size={20} className="text-green-400" />
                </div>
                <span className="text-slate-200">Sin anuncios publicitarios</span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Check size={20} className="text-green-400" />
                </div>
                <span className="text-slate-200">Historial de prompts guardados</span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Sparkles size={20} className="text-green-400" />
                </div>
                <span className="text-slate-200">Acceso anticipado a nuevas funciones</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href={`/${locale}/generator`}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 hover:from-yellow-400 hover:via-orange-400 hover:to-pink-400 rounded-lg font-bold text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Comenzar a crear prompts
              <ArrowRight size={20} />
            </Link>

            {/* Support */}
            <p className="text-center text-sm text-slate-500 mt-6">
              ¿Necesitas ayuda? Contáctanos en{" "}
              <a href="mailto:support@promptgg.app" className="text-blue-400 hover:underline">
                support@promptgg.app
              </a>
            </p>
          </div>
        </div>

        {/* Thank you note */}
        <div className="mt-8 text-center">
          <p className="text-slate-400">
            💙 Gracias por apoyar a PromptGG
          </p>
        </div>
      </div>
    </div>
  );
}
