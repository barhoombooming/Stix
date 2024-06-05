import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
  lang: "en-US",
  description: "STIX",

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/": { base: "/", items: sidebarEn() },
      "/tr/": { base: "/tr/", items: sidebarTr() },
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [];
}

function sidebarEn(): DefaultTheme.SidebarItem[] {
  return [];
}

function sidebarTr(): DefaultTheme.SidebarItem[] {
  return [];
}
