import { defineConfig } from "vitepress";

export const shared = defineConfig({
  title: " ",
  description: "STIX",

  cleanUrls: true,

  /* prettier-ignore */
  head: [
    
  ],

  themeConfig: {
    logo: { light: "/logo.png", dark: "/logo2.png" },

    /* socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "algolia",
      options: {
        appId: "8J64VVRP8K",
        apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
        indexName: "vitepress",
        locales: { ...zhSearch, ...ptSearch, ...ruSearch },
      },
    }, */
  },
});
