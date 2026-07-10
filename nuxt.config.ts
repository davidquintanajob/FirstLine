// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

// -------- DATOS DE LA EMPRESA --------
const siteUrl = "https://firstlineelectricenergy.com"; // Cambia por tu dominio real
const siteName = "FIRSTLINE ELECTRIC & ENERGY";
const siteDescription =
  "Professional electrical services in Manatee County, FL – licensed electricians for residential and commercial installations, repairs, generators, panel upgrades, and 24/7 emergency service.";
const defaultLocale = "en";
const locales = [
  { code: "en", iso: "en-US", name: "English" },
  { code: "es", iso: "es-ES", name: "Español" },
];

export default defineNuxtConfig({
  compatibilityDate: "2026-01-01",

  // Puedes cambiar a `true` si quieres SSR para mejorar SEO (requiere adaptar componentes)
  ssr: false,

  devtools: {
    enabled: false,
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "nuxt-og-image",
    "@nuxt/image",
  ],

  // -------- METADATOS GLOBALES --------
  app: {
    head: {
      htmlAttrs: {
        lang: defaultLocale,
      },

      title: siteName,
      titleTemplate: `%s | ${siteName}`,

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: siteDescription },
        {
          name: "keywords",
          content:
            "electrician, electrical services, Manatee County, Bradenton, generator installation, wiring, panel upgrade, pool electrical, commercial electrician, residential electrician, emergency electrician, licensed electrician, 24/7 electrical repair",
        },
        { name: "author", content: siteName },
        { name: "robots", content: "index,follow,max-image-preview:large" },
        { name: "theme-color", content: "#0B3B5C" }, // Azul oscuro de la marca
        { name: "msapplication-TileColor", content: "#0B3B5C" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },

        // ----- Open Graph -----
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: siteName },
        { property: "og:title", content: siteName },
        { property: "og:description", content: siteDescription },
        { property: "og:url", content: siteUrl },
        { property: "og:locale", content: "en_US" },
        {
          property: "og:image",
          content: `${siteUrl}/social-preview.jpg`, // Asegúrate de tener esta imagen en /public
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:alt", content: siteName },

        // ----- Twitter -----
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: siteName },
        { name: "twitter:description", content: siteDescription },
        { name: "twitter:image", content: `${siteUrl}/social-preview.jpg` },
        { name: "twitter:image:alt", content: siteName },
      ],

      link: [
        { rel: "canonical", href: siteUrl },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "64x64",
          href: "/favicon.png",
        },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },

        // Preconexiones para fuentes y CDN
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
      ],
    },
  },

  // -------- SITEMAP CON ALTERNATAS DE IDIOMA --------
  sitemap: {
    autoLastmod: true,
    discoverImages: true,
    // Se generarán automáticamente las URLs para cada idioma gracias al módulo i18n
  },

  // -------- ROBOTS.TXT --------
  robots: {
    robotsTxt: true, // Activa la generación automática
    sitemap: `${siteUrl}/sitemap.xml`,
  },

  // -------- COMPRESIÓN --------
  nitro: {
    compressPublicAssets: true,
  },

  // -------- RUNTIME CONFIG (opcional) --------
  runtimeConfig: {
    public: {
      siteUrl,
      siteName,
      siteDescription,
    },
  },
});