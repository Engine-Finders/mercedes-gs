import Image from "next/image";
import PhotoStripes from "@/components/reusable/PhotoStripes";
import Icon from "@/components/reusable/Icon";
import MercedesStripe from "@/components/reusable/MercedesStripe";

export default function ModelSec11({ data }) {
  const [line1, line2] = data.h2.split("|");

  return (
    <section className="theme-light relative overflow-hidden">
      {/* ===== mobile ===== */}
      <div className="relative md:hidden">
        <div className="relative px-4 pb-4 pt-10">
          <MercedesStripe className="h-3 w-6" />
          <h2 className="h2 origin-left scale-y-110 scale-x-90 mt-2 uppercase">
            <span className="block text-[#1a1a1a]">{line1}</span>
            <span className="block text-hero-blue">{line2}</span>
          </h2>
          <span className="mt-3 block h-px w-16 bg-hero-blue/50" />
        </div>

        {/* 16:9 photo (the desktop frame is already 16:9, so it is shown whole instead of a tall portrait crop),
            zoomed in from the right because the left part of that frame is plain light panel, and faded into
            the page colour above and below */}
        <div className="relative aspect-video w-full overflow-hidden">
          <div className="absolute inset-0" style={{ transform: "scale(1.35)", transformOrigin: "88% 15%" }}>
            <Image src={data.image} alt="Mercedes technician rebuilding an engine block" fill className="object-cover" sizes="100vw" />
            <PhotoStripes preset="sec11" className="object-cover" />
          </div>
          <div className="absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-(--color-light-surface) to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-(--color-light-surface) to-transparent" />
        </div>

        <div className="border-t border-black/10 pb-8" style={{ background: "var(--theme-light-bg)" }}>
          {data.checklist.map((item, i) => (
            <div key={item} className={`flex items-center gap-3 px-4 py-4 ${i % 2 ? "bg-black/[0.07]" : "bg-black/[0.02]"}`}>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hero-blue/70">
                <Icon name="check" className="h-4 w-4 text-hero-blue" />
              </span>
              <p className="text-sm text-[#1a1a1a]">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== desktop ===== */}
      <div className="relative hidden px-4 py-6 sm:px-6 md:block lg:px-8">
      <div className="absolute inset-0">
        <Image src={data.image} alt="Mercedes technician rebuilding an engine block" fill className="object-cover" sizes="100vw" />
        <PhotoStripes preset="sec11" className="object-cover" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-[60%]">
          <MercedesStripe className="h-6 w-11 shrink-0" />
          <div role="heading" aria-level="2" className="h2 origin-left scale-y-110 scale-x-90 mt-2 uppercase">
            <span className="block whitespace-nowrap text-[#1a1a1a]">{line1}</span>
          </div>
          <div role="heading" aria-level="2" className="h2 origin-left scale-y-110 scale-x-90 uppercase">
            <span className="block text-hero-blue">{line2}</span>
          </div>

          <div className="mt-3 w-fit divide-y divide-black/10">
            {data.checklist.map((item) => (
              <div key={item} className="flex items-center gap-2.5 py-2 pr-8">
                <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full border border-hero-blue/60 bg-hero-blue/10">
                  <Icon name="check" className="h-3 w-3 text-hero-blue" />
                </span>
                <p className="text-sm text-[#1a1a1a]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
