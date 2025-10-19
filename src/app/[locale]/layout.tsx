import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let messages = {};
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
    messages = (await import(`@/messages/es.json`)).default;
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Header locale={locale} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer locale={locale} />
    </NextIntlClientProvider>
  );
}
