import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/mercedes-om654-coolant-repair.json";

const PATH = "/mercedes-om654-coolant-repair";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Mercedes OM654 Coolant System Repair | Mercedes Garage",
  description: "Specialist coolant system repair for Mercedes OM654 diesel engines. Recall-related work, vacuum pump replacement, and full system testing. Fixed-price quotes.",
  alternates: { canonical: PATH },
};

export default function MercedesOm654CoolantRepairPage() {
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
