"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CV } from "@/content/site";

const LEFT = [["Work", "/#work"], ["About", "/#about"]];
const RIGHT = [["Stack", "/#stack"], ["Contact", "/#contact"]];
const underline =
  "relative text-[15px] font-medium text-ink-60 transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>

      {/* Desktop: resume centered between the section links */}
      <div className="mx-auto hidden h-[72px] max-w-[820px] grid-cols-3 items-center px-6 md:grid">
        <nav aria-label="Sections" className="flex items-center justify-end gap-8">
          {LEFT.map(([label, href]) => <Link key={href} href={href} className={underline}>{label}</Link>)}
        </nav>
        <div className="flex justify-center px-6">
          <a href={CV} target="_blank" rel="noopener" className="inline-flex items-center gap-2 whitespace-nowrap bg-ink px-6 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-black">
            Resume <span aria-hidden className="text-[12px]">↗</span>
          </a>
        </div>
        <nav aria-label="More sections" className="flex items-center justify-start gap-8">
          {RIGHT.map(([label, href]) => <Link key={href} href={href} className={underline}>{label}</Link>)}
        </nav>
      </div>

      {/* Mobile: name, resume, menu */}
      <div className="flex h-[62px] items-center justify-between px-5 md:hidden">
        <Link href="/" className="mono text-[12px] font-semibold tracking-wider">Alexandru Balaban</Link>
        <div className="flex items-center gap-2.5">
          <a href={CV} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 whitespace-nowrap bg-ink px-3 py-1.5 text-[12px] font-medium text-white">
            Resume <span aria-hidden className="text-[10px]">↗</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-1 cursor-pointer p-2 transition-colors hover:text-accent"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Sections" className="flex flex-col border-t border-line bg-paper px-6 py-2 md:hidden">
          {[...LEFT, ...RIGHT].map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-line py-3.5 text-[15px] font-medium last:border-b-0 hover:text-accent">
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
