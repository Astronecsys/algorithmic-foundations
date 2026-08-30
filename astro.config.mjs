import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { parts } from "./src/content/book.ts";

const site = process.env.SITE_URL ?? "http://localhost:4321";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [
    starlight({
      title: "现代生活的算法基座",
      description: "从古代计算术到现代科学工程，一部可以亲手运行的算法文明史。",
      locales: {
        root: { label: "简体中文", lang: "zh-CN" },
      },
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/Astronecsys/algorithmic-foundations" },
      ],
      editLink: {
        baseUrl: "https://github.com/Astronecsys/algorithmic-foundations/edit/main/src/content/docs/",
      },
      customCss: ["./src/styles/starlight.css"],
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      sidebar: [
        {
          label: "开始阅读",
          items: [
            { label: "书籍首页", link: "/" },
            { slug: "guide", label: "全书导言" },
            { slug: "contents", label: "全书目录" },
          ],
        },
        ...parts.map((part) => ({
          label: `卷 ${String(part.number).padStart(2, "0")} · ${part.title}`,
          collapsed: part.number !== 1,
          items: part.chapters.map((chapter) => ({
            slug: `chapters/${chapter.slug}`,
            label: `${String(chapter.number).padStart(2, "0")} · ${chapter.title}`,
            ...(chapter.status === "sample" ? { badge: { text: "样板", variant: "success" } } : {}),
          })),
        })),
      ],
    }),
    react(),
  ],
});
