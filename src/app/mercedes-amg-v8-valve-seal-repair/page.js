import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/mercedes-amg-v8-valve-seal-repair.json";

const PATH = "/mercedes-amg-v8-valve-seal-repair";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Mercedes AMG V8 Valve Seal & Coolant Repair | Mercedes Garage",
  description: "Specialist Mercedes AMG V8 valve seal and coolant system repair. M156, M157, M177, M159, M178 engines. Fixed-price rebuilds from £6,500.",
  alternates: { canonical: PATH },
};

export default function MercedesAmgV8ValveSealRepairPage() {
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
