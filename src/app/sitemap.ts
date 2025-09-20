// app/sitemap.ts
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vizlabo.com";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/course`, changeFrequency: "weekly", priority: 0.8 },
    // 必要に応じて静的ページを追加
  ];
}
