"use client";

import { useState } from "react";
import Link from "next/link";
import MercedesLogo from "@/components/reusable/MercedesLogo";
import Icon from "@/components/reusable/Icon";

export default function Navbar({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <MercedesLogo className="h-14 w-14 shrink-0 text-white" />
          <span>
            <span className="font-title block text-xl font-extrabold italic tracking-tight leading-none text-white sm:text-2xl">
              {data.brand}
            </span>
            <span className="block text-[11px] font-semibold tracking-[0.12em] text-[var(--color-mb-gold)] leading-none mt-1 sm:text-xs">
              {data.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide uppercase">
          {data.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 transition-colors hover:text-[var(--color-mb-gold)]"
            >
              {link.label}
              {link.label === "Engines" && <Icon name="chevron-down" className="h-3.5 w-3.5" />}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 px-4 pb-4 flex flex-col gap-1 text-sm font-bold uppercase tracking-wide">
          {data.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-1 py-2.5 border-b border-white/5"
            >
              {link.label}
              {link.label === "Engines" && <Icon name="chevron-down" className="h-3.5 w-3.5" />}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
