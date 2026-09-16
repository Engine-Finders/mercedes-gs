import { Suspense } from "react";
import GetQuoteClient from "./GetQuoteClient";

export const metadata = {
  title: "Get Your Mercedes Engine Quote | Mercedes Garage",
  description: "Get a fast, no-obligation Mercedes engine rebuild quote. Compare prices from trusted Mercedes specialists.",
  robots: { index: false, follow: false },
};

export default function GetQuotePage() {
  return (
    <Suspense fallback={null}>
      <GetQuoteClient />
    </Suspense>
  );
}
