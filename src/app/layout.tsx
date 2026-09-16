import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "latin-ext"] });
const instrument = Instrument_Serif({ weight: "400", variable: "--font-instrument", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://alexandrublbn.vercel.app"),
  title: {
    default: "Alexandru Balaban · Machine learning for medical imaging",
    template: "%s · Alexandru Balaban",
  },
  description:
    "Alexandru Balaban, an EECS student in Brașov, builds machine learning for medical imaging: self-supervised pre-training for coronary angiography, stenosis segmentation, prostate MRI, and embedded medical devices.",
  openGraph: { type: "website", siteName: "Alexandru Balaban", locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#F5F3EF" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
