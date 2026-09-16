import AuthorityPage from "@/components/shared/AuthorityPage";
import JsonLd from "@/components/shared/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/authority/mercedes-engine-compatibility.json";

const PATH = "/mercedes-engine-compatibility";
const FAQ = (data.sections || []).filter((s) => s.kind === "faq").flatMap((s) => s.items || []);

export const metadata = {
  title: "Mercedes-Benz Engine Compatibility & Application Matching | Mercedes Garage",
  description: "Professional engine compatibility matching for Mercedes-Benz. VIN verification, physical fit, ECU coding & ancillary alignment. Ensure the correct engine for your vehicle.",
  alternates: { canonical: PATH },
};

export default function MercedesEngineCompatibilityPage() {
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
