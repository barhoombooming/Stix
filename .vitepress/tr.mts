import { defineConfig, type DefaultTheme } from "vitepress";

export const tr = defineConfig({
  lang: "tr-TR",
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
