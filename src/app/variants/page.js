import DirectoryPage from "@/components/shared/DirectoryPage";
import JsonLd from "@/components/shared/JsonLd";
import { webPageSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/core/variants.json";

const PATH = "/variants";

export const metadata = {
  title: "Mercedes Variants | Mercedes Garage",
  description: "Every individual Mercedes-Benz variant we cover, grouped by model line.",
  alternates: { canonical: PATH },
};

export default function VariantsPage() {
  return (
    <>
      <JsonLd
        data={graphDoc([
          webPageSchema({ name: "Mercedes Variants | Mercedes Garage", description: "Every individual Mercedes-Benz variant we cover, grouped by model line.", path: PATH, type: "CollectionPage" }),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Mercedes Variants", path: PATH }], PATH),
        ])}
      />
      <DirectoryPage data={data} />
    </>
  );
}
