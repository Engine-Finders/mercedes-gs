import LegalPage from "@/components/shared/LegalPage";
import JsonLd from "@/components/shared/JsonLd";
import { webPageSchema, breadcrumbSchema, graphDoc } from "@/lib/schema";
import data from "@/data/core/contact.json";

const PATH = "/contact";

export const metadata = {
  title: "Contact Mercedes Garage | Engine Rebuild & Repair Enquiries",
  description: "Contact Mercedes Garage in Billericay, Essex. Call 0203 488 4649, WhatsApp 07975 827 396, or complete our form for a free engine quote. Nationwide collection.",
  alternates: { canonical: PATH },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graphDoc([
          webPageSchema({ name: "Contact Mercedes Garage | Engine Rebuild & Repair Enquiries", description: "Contact Mercedes Garage in Billericay, Essex. Call 0203 488 4649, WhatsApp 07975 827 396, or complete our form for a free engine quote. Nationwide collection.", path: PATH, type: "ContactPage" }),
          breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact Mercedes Garage", path: PATH }], PATH),
        ])}
      />
      <LegalPage data={data} />
    </>
  );
}
