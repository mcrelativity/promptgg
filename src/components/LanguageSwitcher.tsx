"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const languages = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
];

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const currentLanguage = languages.find((lang) => lang.code === locale);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getNewPathname = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 transition"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-slate-900 border border-slate-800 rounded-lg shadow-lg overflow-hidden">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={getNewPathname(lang.code)}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 hover:bg-slate-800 transition ${
                locale === lang.code ? "bg-slate-800" : ""
              }`}
            >
              <span className="text-lg mr-2">{lang.flag}</span>
              {lang.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
