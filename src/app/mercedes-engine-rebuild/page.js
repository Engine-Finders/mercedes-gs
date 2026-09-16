import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/mercedes-engine-rebuild.json";

const PATH = "/mercedes-engine-rebuild";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Mercedes-Benz Engine Rebuild Specialists | Mercedes Garage",
  description: "Professional Mercedes-Benz engine rebuild service by Mercedes Garage. Full strip-down, machining, reassembly, and testing. 12-month unlimited mileage warranty.",
  alternates: { canonical: PATH },
};

export default function MercedesEngineRebuildPage() {
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
