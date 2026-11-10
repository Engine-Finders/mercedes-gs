// src/lib/blog.config.js
/**
 * Site-specific configuration for Headless CMS Blog & Lead Quote integration.
 * Tailored for Mercedes Garage UK.
 */

export const blogConfig = {
  // 1. Site Identity
  siteName: "Mercedes Garage UK",
  siteSlug: process.env.CMS_SITE_SLUG || "mercedesgarage",
  siteDomain: "mercedesgarage.co.uk",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://mercedesgarage.co.uk").replace(/\/$/, ""),
  defaultAuthor: "Mercedes Master Technician",

  // 2. Headings & UI Copy
  copy: {
    metaTitle: "Mercedes Garage UK | Guides & Diagnostic Advice",
    metaDescription: "Specialist Mercedes-Benz servicing, transmission servicing, electrical troubleshooting, and garage advice.",
    blogTitlePrefix: "Mercedes Garage UK",
    blogTitleAccent: "Service Guides & Insights",
    blogSubtitle: "Specialist Mercedes-Benz servicing, transmission servicing, electrical troubleshooting, and garage advice.",
    emptyTitle: "No guides published yet",
    emptySubtitle: "Mercedes Garage UK technical articles and diagnostic guides published from the CMS will appear here.",
    readMoreText: "Read Guide",
    widgetTitle: "Instant Mercedes Service & Repair Quote",
    widgetSubtitle: "Enter your registration for fast pricing from approved Mercedes garage specialists.",
    widgetSubmitText: "Request Free Quote",
    widgetSuccessTitle: "Quote Request Received!",
    widgetSuccessSubtitle: "Our Mercedes Garage UK specialists will check stock and contact you shortly with the best pricing.",
    recentGuidesTitle: "Recent Guides",
    relatedGuidesTitle: "Related Guides",
    bottomCta: {
      enabled: true,
      badge: "Mercedes Garage Network",
      title: "Looking for an Approved Mercedes Garage?",
      subtitle: "Book professional diagnostics, servicing, or gearbox repairs with verified UK specialists.",
      buttonText: "Get Free Mercedes Garage Quote »",
      buttonHref: "#sidebar-reg-input",
    },
  },

  // 3. Theme Colors
  theme: {
    fontFamily: "Arial, Helvetica, sans-serif",
    primaryColor: "#ad875c",
    primaryHover: "#8f6e47",
    accentColor: "#ad875c",
    accentHover: "#8f6e47",
    widgetBg: "#1b1712",
    widgetBorder: "#2b251e",
    widgetButtonBg: "#ad875c",
    widgetButtonHover: "#8f6e47",
    ukBadgeBg: "#003399",
    fallbackThumbnail: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80",
  },
};
