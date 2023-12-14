import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/demo/",
  {
    text: "文档",
    icon: "lightbulb",
    prefix: "/docs/",
    children: [
      {
        text:"",
        icon: "lightbulb",
        children: ["intro","staff","mappool"],
      },
    ],
  },
  "/memory/",
  {
    text: "Yumu Site",
    icon: "robot",
    link: "https://bot.365246692.xyz",
  },
  {
    text: "Yumu Docs",
    icon: "book",
    link: "https://docs.365246692.xyz",
  },
]);