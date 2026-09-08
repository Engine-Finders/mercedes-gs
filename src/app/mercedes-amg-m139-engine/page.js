import HeroSec1 from "@/components/engine-family/HeroSec1";
import Sec2 from "@/components/engine-family/Sec2";
import Sec3 from "@/components/engine-family/Sec3";
import Sec4 from "@/components/engine-family/Sec4";
import Sec5 from "@/components/engine-family/Sec5";
import Sec6 from "@/components/engine-family/Sec6";
import Sec7 from "@/components/engine-family/Sec7";
import Sec8 from "@/components/engine-family/Sec8";
import Sec9 from "@/components/engine-family/Sec9";
import Sec9b from "@/components/engine-family/Sec9b";
import Sec9c from "@/components/engine-family/Sec9c";
import Sec10 from "@/components/engine-family/Sec10";
import Sec11 from "@/components/engine-family/Sec11";

import sec1 from "@/data/engine-family/m139Sec1.json";
import sec2 from "@/data/engine-family/m139Sec2.json";
import sec3 from "@/data/engine-family/m139Sec3.json";
import sec4 from "@/data/engine-family/m139Sec4.json";
import sec5 from "@/data/engine-family/m139Sec5.json";
import sec6 from "@/data/engine-family/m139Sec6.json";
import sec7 from "@/data/engine-family/m139Sec7.json";
import sec8 from "@/data/engine-family/m139Sec8.json";
import sec9 from "@/data/engine-family/m139Sec9.json";
import sec9b from "@/data/engine-family/m139Sec9b.json";
import sec9c from "@/data/engine-family/m139Sec9c.json";
import sec10 from "@/data/engine-family/m139Sec10.json";
import sec11 from "@/data/engine-family/m139Sec11.json";

export const metadata = {
  title: "Mercedes-AMG M139 Engine Rebuild & Replacement | From £3,600",
  description:
    "Mercedes-AMG M139 engine rebuild from £3,600. Fitted across 6 models — A-Class, CLA, GLA, C-Class, GLC & SL. 12-month warranty, nationwide recovery. Free quote in 30 mins.",
};

export default function MercedesAMGM139EnginePage() {
  return (
    <>
      <HeroSec1 data={sec1} />
      <Sec2 data={sec2} />
      <Sec3 data={sec3} />
      <Sec4 data={sec4} />
      <Sec5 data={sec5} />
      <Sec6 data={sec6} />
      <Sec7 data={sec7} />
      <Sec8 data={sec8} />
      <Sec9 data={sec9} />
      <Sec9b data={sec9b} />
      <Sec9c data={sec9c} />
      <Sec10 data={sec10} />
      <Sec11 data={sec11} />
    </>
  );
}
