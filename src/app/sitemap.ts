import type { MetadataRoute } from "next";

const SITE = "https://alexandrublbn.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/vasojepa`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
