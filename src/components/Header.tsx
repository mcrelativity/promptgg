"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PG</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            PromptGG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href={`/${locale}`} className="hover:text-blue-400 transition">
            {t("nav.home")}
          </Link>
          <Link href={`/${locale}/generator`} className="hover:text-blue-400 transition">
            {t("nav.generator")}
          </Link>
          <Link href={`/${locale}/guide`} className="hover:text-blue-400 transition">
            {t("nav.guide")}
          </Link>
        </div>

        {/* Language Switcher & Mobile Menu */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 p-4">
          <div className="flex flex-col gap-4">
            <Link
              href={`/${locale}`}
              className="hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href={`/${locale}/generator`}
              className="hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.generator")}
            </Link>
            <Link
              href={`/${locale}/guide`}
              className="hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.guide")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
