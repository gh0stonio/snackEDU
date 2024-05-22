// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  ssr: false,
  css: ["./assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@vite-pwa/nuxt"],

  pwa: {
    manifest: {
      name: "SnackEDU",
      short_name: "SnackEDU",
      description: "Datadog snack helper",
      lang: "en",
      scope: "/",
      display: "standalone",
      background_color: "#FFFFFF",
      theme_color: "#FFFFFF",
      orientation: "portrait",
      icons: [
        {
          src: "/icons/icon_64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "/icons/icon_144.png",
          type: "image/png",
          sizes: "144x144",
        },
        {
          src: "/icons/icon_192.png",
          type: "image/png",
          sizes: "192x192",
        },
        {
          src: "/icons/icon_512.png",
          type: "image/png",
          sizes: "512x512",
        },
      ],
    },
    workbox: { navigateFallback: "/index.html" },
    devOptions: { enabled: true, type: "module" },
  },
});
