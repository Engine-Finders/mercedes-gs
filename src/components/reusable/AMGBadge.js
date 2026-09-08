// Small "////AMG" performance-division wordmark badge — four narrowing
// skewed bars followed by the AMG wordmark. Pairs with MercedesLogo (the
// tri-star) wherever the reference UI shows both together above a headline.
export default function AMGBadge({ className = "h-4", barColorClass = "bg-hero-blue", textClassName = "text-hero-blue" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="inline-flex h-full items-stretch gap-[2px]" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`w-[3px] shrink-0 skew-x-[-20deg] ${barColorClass}`} style={{ opacity: 1 - i * 0.16 }} />
        ))}
      </span>
      <span className={`text-base font-extrabold italic leading-none tracking-tight ${textClassName}`}>AMG</span>
    </span>
  );
}
