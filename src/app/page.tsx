import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function RootPage() {
  // Obtener el header Accept-Language del navegador
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";

  // Detectar el idioma preferido del usuario
  let locale = "es"; // default

  // Parsear correctamente el Accept-Language header
  // Formato: "es-ES,es;q=0.9,en-US;q=0.8,en;q=0.7"
  const languages = acceptLanguage
    .split(",")
    .map(lang => {
      const [code, qValue] = lang.trim().split(";");
      const q = qValue ? parseFloat(qValue.replace("q=", "")) : 1.0;
      return { code: code.split("-")[0].toLowerCase(), q };
    })
    .sort((a, b) => b.q - a.q); // Ordenar por calidad (q)

  // Buscar el primer idioma soportado
  const supportedLocales = ["es", "en", "hi"];
  const detectedLocale = languages.find(lang => supportedLocales.includes(lang.code));
  
  if (detectedLocale) {
    locale = detectedLocale.code;
  }

  // Redirigir al idioma detectado
  redirect(`/${locale}`);
}
