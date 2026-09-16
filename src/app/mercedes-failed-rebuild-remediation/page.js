import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/mercedes-failed-rebuild-remediation.json";

const PATH = "/mercedes-failed-rebuild-remediation";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Mercedes-Benz Failed Engine Rebuild Remediation | Mercedes Garage",
  description: "Specialist assessment and correction for poorly rebuilt Mercedes-Benz engines. Full strip-down, measurement, re-machining and factory-spec reassembly.",
  alternates: { canonical: PATH },
};

export default function MercedesFailedRebuildRemediationPage() {
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
