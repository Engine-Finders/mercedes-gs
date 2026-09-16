import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/mercedes-engine-rebuild-process.json";

const PATH = "/mercedes-engine-rebuild-process";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Mercedes-Benz Engine Rebuild Process | Mercedes Garage",
  description: "Our complete 10-step engine rebuild process for Mercedes-Benz: from vehicle arrival and diagnosis to strip-down, machining, reassembly, testing, and road test.",
  alternates: { canonical: PATH },
};

export default function MercedesEngineRebuildProcessPage() {
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
