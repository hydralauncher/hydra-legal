import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hydra",
  head: [["link", { rel: "icon", href: "/256x256.svg" }]],
  locales: {
    root: {
      lang: "en",
      title: "Hydra's Legal",
      description: "Hydra Launcher's legal documents index",
      label: "English",
      themeConfig: {
        sidebar: [
          {
            text: "Introduction",
            link: "/",
          },
          {
            text: "Documents",
            items: [
              {
                text: "Terms of Use",
                link: "/terms-of-use",
              },
              {
                text: "Privacy Policy",
                link: "/privacy-policy",
              },
              {
                text: "Subscription Terms",
                link: "/subscription-terms",
              },
            ],
          },
        ],
      },
    },
    "pt-BR": {
      lang: "pt-BR",
      title: "Setor Legal do Hydra",
      description: "Índice de documentos legais do Hydra Launcher",
      label: "Português",
      link: "/pt-BR/",
      themeConfig: {
        sidebar: [
          {
            text: "Indtrodução",
            link: "/pt-BR/",
          },
          {
            text: "Documentos",
            items: [
              {
                text: "Termos de Uso",
                link: "/pt-BR/terms-of-use",
              },
              {
                text: "Política de Privacidade",
                link: "/pt-BR/privacy-policy",
              },
              {
                text: "Condiçoẽs Contratuais",
                link: "/pt-BR/subscription-terms",
              },
            ],
          },
        ],
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/256x256.svg",

    socialLinks: [
      { icon: "github", link: "https://github.com/hydralauncher/hydra-legal" },
      { icon: "x", link: "https://x.com/hydralauncher" },
      { icon: "telegram", link: "https://t.me/hydralauncher" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path></svg>',
        },
        link: "mailto:legal@hydralauncher.gg",
      },
    ],
  },
});
