import siteRoutes from "@/data/shared/siteRoutes.json";

const SITE_URL = "https://mercedesgarage.uk";

export default function sitemap() {
  const staticRoutes = [{ url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];

  const generatedRoutes = siteRoutes.map(({ slug }) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...generatedRoutes];
}
