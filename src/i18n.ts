import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["es", "en", "hi"];

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale || "es";
  
  if (!locales.includes(currentLocale as string)) {
    notFound();
  }

  return {
    locale: currentLocale as string,
    messages: (
      await import(`./messages/${currentLocale}.json`)
    ).default,
  };
});
