import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["es", "en", "hi"],
  defaultLocale: "es",
});

export const config = {
  matcher: ["/", "/(es|en|hi)/:path*"],
};
