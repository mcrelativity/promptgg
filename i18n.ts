import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale || "es";
  return {
    locale: validLocale,
    messages: (await import(`./src/messages/${validLocale}.json`)).default,
  };
});
