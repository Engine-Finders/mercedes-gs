"use client";

import { useState } from "react";

export default function RegLookupForm({
  buttonLabel = "Find My Mercedes",
  left = null,
  compact = false,
  row = false,
  stacked = false,
  large = false,
  compactButton = false,
  hideArrow = false,
  hideButton = false,
  darkButton = false,
  whiteBorder = false,
  matchHeight = false,
  bigButtonText = false,
  short = false,
  darkField = false,
}) {
  const [reg, setReg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Live DVLA/VIN API integration — dev to wire up, per locked decision.
  }

  const buttonHeight = matchHeight ? "h-14" : row ? (short ? "h-11" : "h-14") : stacked ? "h-9" : "h-12";
  const fieldHeight = matchHeight ? "h-14" : row ? (short ? "h-11" : "h-14") : stacked ? "h-16" : "h-28";
  const fieldBorder = whiteBorder ? "border-white/70" : "border-[var(--color-hero-gold)]";

  return (
    <form
      onSubmit={handleSubmit}
      className={
        row
          ? "flex w-full items-center gap-2 text-left"
          : stacked
            ? "flex w-full flex-col items-start gap-3 text-left"
            : "flex w-full flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left"
      }
    >
      {left}

      <div
        className={`flex ${fieldHeight} w-full min-w-0 ${row ? "flex-1" : "shrink-0"} overflow-hidden rounded-sm border-2 ${fieldBorder} shadow-sm ${
          row || stacked ? "" : "sm:flex-1 sm:w-auto"
        }`}
      >
        <span className={`flex w-11 shrink-0 flex-col items-center justify-center gap-1.5 text-[var(--color-hero-gold)] ${darkField ? "bg-[#232323]" : "bg-[#1a1a1a]"}`}>
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[var(--color-hero-gold)] text-[10px] leading-none">
            ★
          </span>
          <span className="text-[11px] font-extrabold tracking-wide">GB</span>
        </span>
        <input
          type="text"
          value={reg}
          onChange={(e) => setReg(e.target.value.toUpperCase())}
          placeholder="AB12 CDE"
          maxLength={8}
          className={`min-w-0 flex-1 px-2 text-center font-black leading-none tracking-widest outline-none ${
            darkField
              ? "bg-[#232323] text-white placeholder:italic placeholder:text-white/40"
              : "bg-[#e4e8ec] text-black placeholder:italic placeholder:text-black"
          } ${
            row
              ? compact
                ? "text-sm sm:text-base"
                : "text-lg sm:text-xl"
              : stacked
                ? compact
                  ? "text-lg"
                  : "text-2xl"
                : large
                  ? "text-5xl sm:text-6xl"
                  : compact
                    ? "text-lg sm:text-xl"
                    : "text-4xl sm:text-5xl"
          }`}
        />
      </div>

      {!hideButton && (
        <button
          type="submit"
          className={`${buttonHeight} flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-sm border-2 border-[var(--color-hero-gold)] font-bold transition-colors ${
            darkButton ? "italic" : ""
          } ${
            darkButton
              ? "bg-[#1a1a1a] text-white hover:bg-transparent hover:text-[var(--color-hero-gold)]"
              : "bg-[var(--color-hero-gold)] text-white hover:bg-transparent hover:text-[var(--color-hero-gold)]"
          } ${compactButton ? "px-2 text-[10px] gap-1 sm:px-2.5 sm:text-xs sm:gap-1.5" : bigButtonText ? "px-6 text-base sm:text-lg" : "px-6 text-sm"} ${
            stacked ? "w-full" : row ? "" : "w-full sm:w-auto"
          }`}
        >
          {buttonLabel} {!hideArrow && "→"}
        </button>
      )}
    </form>
  );
}
