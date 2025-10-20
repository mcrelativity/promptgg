import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // El middleware de next-intl maneja automáticamente la redirección
  // basándose en el idioma del navegador del usuario
};

export default withNextIntl(nextConfig);
