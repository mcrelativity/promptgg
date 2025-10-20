"use client";

import { useState } from "react";
import { Crown, Check, AlertCircle } from "lucide-react";
import { usePremium } from "@/hooks/usePremium";
import Link from "next/link";

export default function ActivatePage() {
  const { activatePremium, isPremium } = usePremium();
  const [licenseKey, setLicenseKey] = useState("");
  const [isActivating, setIsActivating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleActivate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsActivating(true);

    // Validar formato de licencia
    if (!licenseKey.trim()) {
      setError("Por favor ingresa tu clave de licencia");
      setIsActivating(false);
      return;
    }

    // Activar Premium
    try {
      activatePremium(licenseKey.toUpperCase().trim());
      setSuccess(true);
    } catch {
      setError("Error al activar. Verifica tu clave de licencia.");
    } finally {
      setIsActivating(false);
    }
  };

  if (isPremium && success) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-green-500/50 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-green-500/10">
                <Check size={48} className="text-green-400" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold mb-4 text-green-400">
              ¡Premium Activado!
            </h1>
            <p className="text-slate-300 mb-6">
              Tu cuenta Premium ha sido activada exitosamente.
            </p>
            
            <Link
              href="/es/generator"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Ir al Generador
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600">
              <Crown size={32} className="text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-center mb-2">
            Activar Premium
          </h1>
          <p className="text-center text-slate-400 mb-6">
            Ingresa tu clave de licencia de Lemonsqueezy
          </p>

          {/* Info box */}
          <div className="mb-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <div className="flex gap-3">
              <AlertCircle size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-slate-300">
                <p className="font-medium text-blue-400 mb-1">¿Dónde encuentro mi licencia?</p>
                <p>Revisa el correo de confirmación de Lemonsqueezy. Tu Order ID es tu licencia.</p>
                <p className="mt-2 text-xs text-slate-400">Formato: LEMON-XXXXXXXXXXXX</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleActivate} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Clave de Licencia
              </label>
              <input
                type="text"
                value={licenseKey}
                onChange={(e) => setLicenseKey(e.target.value)}
                placeholder="LEMON-XXXXXXXXXXXX"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 transition uppercase"
                disabled={isActivating}
              />
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isActivating}
              className="w-full py-3 px-6 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-lg font-bold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isActivating ? "Activando..." : "Activar Premium"}
            </button>
          </form>

          {/* Help text */}
          <p className="text-center text-sm text-slate-500 mt-6">
            ¿No recibiste tu licencia?{" "}
            <a href="mailto:gomez.emiliano762@gmail.com" className="text-blue-400 hover:underline">
              Contacta soporte
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
