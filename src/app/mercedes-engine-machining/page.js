import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/mercedes-engine-machining.json";

const PATH = "/mercedes-engine-machining";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Mercedes Engine Machining & Rebuild Preparation | Mercedes Garage",
  description: "Precision engine machining for Mercedes-Benz: cylinder boring, honing, crank grinding, deck surfacing and align honing. In-house facility with manufacturer-grade equipment.",
  alternates: { canonical: PATH },
};

export default function MercedesEngineMachiningPage() {
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
