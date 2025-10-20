"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PG</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                PromptGG
              </span>
            </Link>
            <p className="text-slate-400 text-sm">
              {t("hero.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("nav.home")}</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href={`/${locale}`} className="hover:text-blue-400 transition">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/generator`} className="hover:text-blue-400 transition">
                  {t("nav.generator")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/guide`} className="hover:text-blue-400 transition">
                  {t("nav.guide")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="https://platform.openai.com/docs/guides/prompt-engineering" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  OpenAI Docs
                </a>
              </li>
              <li>
                <a href="https://www.anthropic.com/research" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  Anthropic
                </a>
              </li>
              <li>
                <a href="https://ai.google/discover/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  Google AI
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/mcrelativity"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-800 transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://x.com/namtaflabs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-800 transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:gomez.emiliano762@gmail.com"
                className="p-2 rounded-lg hover:bg-slate-800 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            {t("footer.rights")}
          </p>
          <p className="text-slate-400 text-sm mt-4 md:mt-0">
            {t("footer.made_by")} Emiliano Gómez
          </p>
        </div>
      </div>
    </footer>
  );
}
