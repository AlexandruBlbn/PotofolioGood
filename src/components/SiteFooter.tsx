import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-line">
      <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-3 px-6 py-6 text-[13px] text-muted md:flex-row">
        <span>© 2026 Alexandru Balaban · Designed and built from scratch with Next.js</span>
        <Link href="#top" className="transition-colors hover:text-ink">Back to top ↑</Link>
      </div>
    </footer>
  );
}
