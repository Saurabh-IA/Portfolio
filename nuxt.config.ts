import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false, 
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Web Developer Portfolio | Saurabh Singh",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "Personal Portfolio Website. Hi, I am Saurabh Singh.",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Saurabh Singh" },
        {
          name: "keywords",
          content:
            "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Saurabh Singh",
        },
        // social meta tags
        {
          property: "og:site_name",
          content: "Web Developer Portfolio | Saurabh Singh",
        },
        {
          property: "og:title",
          content: "Web Developer Portfolio | Saurabh Singh",
        },
        {
          property: "og:description",
          content:
            "Personal Portfolio Website. Hi, I am Saurabh Singh.",
        },
        
      ],
      link: [{ rel: "icon", href: "/favicon-bw.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
  nitro: {
    preset: 'static', // Ensure Nuxt uses static site generation
  },
  generate: {
    routes: [/* Add dynamic routes if needed */],
  },
  runtimeConfig: {
    public: {
      NUXT_GTM_ID: process.env.NUXT_GTM_ID,
    },
  },
});
