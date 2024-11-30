import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://lectra.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://lectra.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://lectra.vercel.app/contact",
      lastModified: new Date(),
    },
    {
      url: "https://lectra.vercel.app/instructors",
      lastModified: new Date(),
    },
  ];
}
