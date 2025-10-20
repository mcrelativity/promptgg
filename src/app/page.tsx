import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function RootPage() {
  // Obtener el header Accept-Language del navegador
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";

  // Detectar el idioma preferido del usuario
  let locale = "es"; // default

  if (acceptLanguage.includes("en")) {
    locale = "en";
  } else if (acceptLanguage.includes("hi")) {
    locale = "hi";
  } else if (acceptLanguage.includes("es")) {
    locale = "es";
  }

  // Redirigir al idioma detectado
  redirect(`/${locale}`);
}
