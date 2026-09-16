import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/mercedes-amg-performance-engine-rebuild.json";

const PATH = "/mercedes-amg-performance-engine-rebuild";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Mercedes-AMG Performance Engine Rebuild | Mercedes Garage",
  description: "Specialist performance engine rebuild for Mercedes-AMG V8 and 4-cylinder engines. Hand-built precision, tighter tolerances, dyno testing, and AMG-specific expertise.",
  alternates: { canonical: PATH },
};

export default function MercedesAmgPerformanceEngineRebuildPage() {
  return (
    <>
      <JsonLd
        data={graphDoc([
          serviceSchema({ name: data.h1, description: data.metaDescription, path: PATH }),
          faqSchema(FAQ, PATH),
          breadcrumbSchema(
            [{ name: "Home", path: "/" }, { name: "Guides", path: "/mercedes-engine-rebuild" }, { name: data.h1, path: PATH }],
            PATH
          ),
        ])}
      />
      <AuthorityPage data={data} />
    </>
  );
}
