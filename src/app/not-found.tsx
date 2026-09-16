import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main" className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center px-6 py-24">
        <p className="mono text-[11px] text-muted">404</p>
        <h1 className="display mt-4 text-[56px] md:text-[80px]">
          This page folded itself away<span className="text-accent">.</span>
        </h1>
        <Link href="/" className="mt-10 inline-flex w-fit items-center gap-2 bg-ink px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.06em] text-white transition-colors hover:bg-black">
          ← Back home
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
