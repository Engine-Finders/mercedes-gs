import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/mercedes-4cyl-timing-chain-repair.json";

const PATH = "/mercedes-4cyl-timing-chain-repair";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Mercedes 4-Cylinder Timing Chain Repair (M270/M274) | Mercedes Garage",
  description: "Professional Mercedes 4-cylinder timing chain repair for M270/M274 engines. Full timing chain replacement, guides, tensioner, and camshaft adjusters at our Essex workshop. Get a quote.",
  alternates: { canonical: PATH },
};

export default function Mercedes4cylTimingChainRepairPage() {
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
