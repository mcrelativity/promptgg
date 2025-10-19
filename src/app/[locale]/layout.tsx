"use client";

import { use } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
