import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PromptGG - Generador de Prompts para IA",
    short_name: "PromptGG",
    description:
      "Crea prompts efectivos para ChatGPT, Claude, Gemini y más modelos de IA",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
