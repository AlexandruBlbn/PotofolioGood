import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import FigureToggle from "@/components/FigureToggle";
import { CV, EMAIL, GITHUB, LINKEDIN } from "@/content/site";
import { CORPUS, signed, stenosis, vessels } from "@/content/vasojepa";

const P = "/content/projects";

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="mono mt-4 flex flex-wrap gap-1.5 text-[11px]">
      {items.map((t, i) => (
        <li key={t} className={`border border-line px-2 py-1 ${i === 0 ? "bg-paper-warm" : ""}`}>{t}</li>
      ))}
    </ul>
  );
}

function Stats({ items }: { items: [string, string, string?][] }) {
  return (
    <dl className="mt-5 grid gap-2" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
      {items.map(([value, label, tone]) => (
        <div key={label} className="flex flex-col-reverse border border-line bg-paper-warm px-1.5 py-2.5 text-center">
          <dt className="mono mt-1 text-[10px] leading-[1.35] text-muted">{label}</dt>
          <dd className={`text-[19px] font-semibold tabular-nums ${tone ?? ""}`}>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

const Eyebrow = ({ n, children }: { n: string; children: React.ReactNode }) => (
  <p className="mono text-[11px] text-muted"><span className="text-accent-ink">{n}</span> · {children}</p>
);

const RepoLink = ({ href }: { href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="mono mt-auto inline-flex w-fit pt-6 text-[11px] underline underline-offset-4 transition-colors hover:text-accent-ink">
    View repo ↗
  </a>
);

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      <SiteHeader />
      <main id="main">
        {/* Hero: full-bleed animated paper texture, type on the left, the origami heart on the right */}
        <section className="relative flex items-center overflow-hidden md:min-h-[calc(100svh-72px)]">
          <div aria-hidden className="hero-bg pointer-events-none absolute inset-0" />
          <div aria-hidden className="hero-topo" />
          <div aria-hidden className="hero-topo hero-topo--2" />
          <div aria-hidden className="hero-grain" />

          <div className="relative mx-auto w-full max-w-[1280px] px-6 pb-16 pt-10 md:py-16">
            <div className="grid items-center gap-10 lg:grid-cols-12 xl:gap-14">
              <div className="lg:col-span-7">
                <p className="mono hero-rise text-[11px] tracking-[0.18em] text-muted">Alexandru Balaban</p>
                <h1 className="display hero-rise mt-5 text-[52px] font-[900] text-balance sm:text-[68px] lg:text-[88px]" style={{ animationDelay: "80ms" }}>
                  I teach machines<br />
                  <span className="font-normal text-muted-soft">to see clearly</span><span className="text-accent">.</span>
                </h1>
                <p className="hero-rise mt-7 max-w-[52ch] text-[17px] leading-[1.7] text-ink-60 text-pretty md:text-[19px]" style={{ animationDelay: "160ms" }}>
                  Hi, I&apos;m Alexandru — a CS & Engineering student who develops machine learning applications for
                  medical imaging. I like building things that actually work and solve problems.
                </p>
                <div className="hero-rise mt-9 flex flex-wrap items-center gap-5" style={{ animationDelay: "240ms" }}>
                  <Link href="#work" className="inline-flex items-center gap-2.5 bg-ink px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.06em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-black">
                    See my work <span aria-hidden className="text-[15px]">→</span>
                  </Link>
                  <Link href="#contact" className="inline-flex items-center gap-2 border-b-2 border-accent px-2 py-3.5 text-[13px] font-medium uppercase tracking-[0.06em] transition-opacity hover:opacity-70">
                    Get in touch
                  </Link>
                </div>
              </div>

              {/* The paper heart: a crumpled ball that unfolds into a heart and folds back, on a loop */}
              <div aria-hidden className="hero-rise relative flex items-center justify-center lg:col-span-5" style={{ animationDelay: "200ms" }}>
                <div className="pointer-events-none relative flex aspect-[16/10] w-full max-w-[580px] items-center justify-center sm:aspect-[4/3] lg:max-w-[640px]">
                  <video
                    src="/images/hero-video.mp4"
                    poster="/images/origami-heart.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full origin-center scale-[1.12] select-none object-contain sm:scale-[1.35] lg:scale-[1.5]"
                    style={{
                      filter: "brightness(1.08) saturate(0.7) contrast(1.03)",
                      maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 25%, transparent 70%)",
                      WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 25%, transparent 70%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <Link href="#work" aria-label="Scroll to work" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-ink md:flex">
            <span className="mono text-[10px] tracking-[0.2em]">Scroll</span>
            <span className="block h-8 w-px overflow-hidden bg-line-strong">
              <span className="animate-scrollhint block h-3 w-px bg-ink" />
            </span>
          </Link>
        </section>

        {/* Work */}
        <section id="work" className="mx-auto max-w-[1280px] border-t border-line px-6 py-14 md:py-20">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h2 className="display text-[36px] md:text-[44px]">Selected work</h2>
            <p className="mono text-[11px] text-muted">
              5 projects · 2023–2026 ·{" "}
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ink">github.com/AlexandruBlbn</a>
            </p>
          </div>

          {/* 01 VasoJEPA */}
          <article className="reveal mb-6 grid overflow-hidden border border-ink bg-surface md:grid-cols-12">
            <figure className="flex flex-col justify-center border-b border-line bg-paper-warm p-5 sm:p-8 md:col-span-7 md:border-b-0 md:border-r">
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  ["card-angiogram.png", "Angiogram", "ARCADE test angiogram with coronary arteries", ""],
                  ["card-f0.png", "f0 · 64 × 64", "Stage-0 encoder features shown as colour, where the vessel tree stands out", "[image-rendering:pixelated]"],
                  ["card-f1.png", "f1 · 32 × 32", "Stage-1 encoder features shown as colour, with the main vessels in pink", "[image-rendering:pixelated]"],
                ].map(([file, label, alt, extra]) => (
                  <div key={file}>
                    <Image src={`${P}/vasojepa/${file}`} width={284} height={284} alt={alt} unoptimized className={`h-auto w-full ${extra}`} />
                    <p className="mono mt-2 text-[10px] normal-case text-muted">{label}</p>
                  </div>
                ))}
              </div>
              <figcaption className="mt-4 text-[13px] leading-[1.55] text-ink-60 text-pretty">
                What the pre-trained encoder sees in an ARCADE test image, a dataset it never trained on: its features,
                reduced to three principal components and shown as colour, trace the vessel tree before any fine-tuning.
              </figcaption>
            </figure>
            <div className="flex flex-col p-6 sm:p-7 md:col-span-5">
              <Eyebrow n="01">Self-supervised learning · Bachelor’s thesis</Eyebrow>
              <h3 className="mt-3 text-[22px] font-semibold leading-tight text-balance">
                VasoJEPA: pre&#8209;training for coronary angiography without labels
              </h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink-60 text-pretty">
                A SwinV2-S encoder learns from {CORPUS.toLocaleString("en-US")} unlabeled angiograms by predicting the
                features of hidden image blocks, placed over the vessels. Fine-tuned on the ARCADE benchmark, it beats the
                same network trained from scratch at both vessel and stenosis segmentation.
              </p>
              <Stats items={[
                [signed(vessels.gain), "Dice, vessels", "text-accent-ink"],
                [signed(stenosis.gain), "Dice, stenosis", "text-accent-ink"],
                ["250", "labels match 1,000"],
              ]} />
              <Tags items={["JEPA", "SwinV2-S", "Self-supervised", "PyTorch"]} />
              <Link href="/vasojepa" className="mt-auto inline-flex w-fit items-center gap-2 pt-7 text-[14px] font-medium underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent-ink">
                Read the case study <span aria-hidden>→</span>
              </Link>
            </div>
          </article>

          {/* 02 Stenosis */}
          <article className="reveal mb-6 grid overflow-hidden border border-ink bg-surface md:grid-cols-12">
            <div className="relative h-[300px] border-b border-line bg-black sm:h-[380px] md:col-span-7 md:h-auto md:min-h-[420px] md:border-b-0 md:border-r">
              <FigureToggle views={[
                {
                  label: "Result",
                  content: (
                    <>
                      <Image src={`${P}/stenosis-segmentation-hd.jpg`} alt="Coronary angiogram with the segmented arteries in yellow and a stenosis in red" fill
                        sizes="(min-width: 768px) 58vw, 100vw" className="object-cover" />
                      <p className="mono absolute bottom-3 left-3 border border-white/20 bg-black/80 px-2.5 py-1 text-[10px] text-white">
                        <span className="text-yellow-400">● Arteries</span> · <span className="text-red-400">● Stenosis</span>
                      </p>
                    </>
                  ),
                },
                {
                  label: "Architecture",
                  content: (
                    <div className="grid h-full grid-cols-2 gap-3 bg-white p-4 pt-14">
                      {([
                        ["stenosis-full-architecture.png", 681, 553, "Encoder-decoder pipeline: EfficientNetV2-S encoder stages and decoder stages with deep supervision heads", "Pipeline"],
                        ["stenosis-decoder-modules.png", 712, 576, "Decoder modules: an up module with PixelShuffle and a fusion module with deformable convolutions and dual attention", "Decoder modules"],
                      ] as const).map(([file, w, h, alt, label]) => (
                        <figure key={file} className="flex min-h-0 flex-col items-center justify-center">
                          <Image src={`${P}/${file}`} width={w} height={h} alt={alt}
                            sizes="(min-width: 768px) 28vw, 50vw" className="h-auto max-h-[calc(100%-1.75rem)] w-auto max-w-full object-contain" />
                          <figcaption className="mono mt-2 text-[10px] text-muted">{label}</figcaption>
                        </figure>
                      ))}
                    </div>
                  ),
                },
              ]} />
            </div>
            <div className="flex flex-col p-6 sm:p-7 md:col-span-5">
              <Eyebrow n="02">Computer vision · Cardiology</Eyebrow>
              <h3 className="mt-3 text-[22px] font-semibold leading-tight text-balance">
                A deep learning approach to stenosis detection and coronary artery segmentation
              </h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink-60 text-pretty">
                A dual-task model that segments the coronary tree and localizes focal stenoses on X-ray angiograms. An
                EfficientNetV2 backbone feeds a custom decoder with deformable convolutions (DCNv2) and dual attention, and
                deep supervision helps it trace thin vascular branches.
              </p>
              <Stats items={[["80.51%", "artery F1"], ["60.21%", "stenosis F1", "text-accent-ink"]]} />
              <Tags items={["EfficientNetV2", "DCNv2", "Dual attention", "PyTorch", "ARCADE"]} />
            </div>
          </article>

          {/* 03 Prostate */}
          <article className="reveal mb-6 grid overflow-hidden border border-line bg-surface md:grid-cols-12">
            <div className="grid grid-cols-2 gap-px border-b border-line bg-black md:col-span-7 md:border-b-0 md:border-r">
              <Image src={`${P}/Seg.png`} width={260} height={259} alt="Axial prostate MRI slice with the segmented gland outlined in green and yellow"
                sizes="(min-width: 768px) 29vw, 50vw" className="h-full w-full object-contain" />
              <Image src={`${P}/ProstataPNG.png`} width={341} height={318} alt="Axial prostate MRI slice with a red model output overlay"
                sizes="(min-width: 768px) 29vw, 50vw" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col p-6 sm:p-7 md:col-span-5">
              <Eyebrow n="03">Machine learning · MRI</Eyebrow>
              <h3 className="mt-3 text-[22px] font-semibold leading-tight text-balance">Prostate cancer detection with deep neural networks</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink-60 text-pretty">
                An Attention U-Net that segments the prostate on MRI, evaluated with 5-fold cross-validation, with a medical
                imaging preprocessing pipeline built on NiBabel and PIL.
              </p>
              <Tags items={["Attention U-Net", "5-fold CV", "MRI", "NiBabel", "PyTorch"]} />
              <RepoLink href="https://github.com/AlexandruBlbn/ProstateSegmentation" />
            </div>
          </article>

          {/* 04 + 05 hardware */}
          <div className="grid gap-6 md:grid-cols-12">
            <article className="reveal group flex flex-col overflow-hidden border border-line bg-surface md:col-span-7">
              <div className="relative h-[260px] overflow-hidden border-b border-line bg-paper-warm">
                <Image src={`${P}/CuraBot.jpg`} alt="Curabot: a red Braccio robotic arm mounted next to its control box" fill
                  sizes="(min-width: 768px) 58vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Eyebrow n="04">Robotics · Siemens internship</Eyebrow>
                <h3 className="mt-2 text-[19px] font-semibold">Curabot: a voice and vision robotic arm</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-60">
                  A robotic arm that helps immobilized patients. Voice commands and a residual CNN running on a Raspberry Pi
                  drive an Arduino-controlled Braccio arm.
                </p>
                <Tags items={["Raspberry Pi", "Arduino", "Braccio", "PyTorch", "C++"]} />
                <RepoLink href="https://github.com/AlexandruBlbn/Internship-Siemens" />
              </div>
            </article>
            <article className="reveal group flex flex-col overflow-hidden border border-line bg-surface md:col-span-5">
              <div className="relative h-[260px] overflow-hidden border-b border-line bg-paper-warm">
                <Image src={`${P}/tensiometru.jpeg`} alt="Soldering the medical multimeter's circuit board, with a blood pressure cuff on the arm" fill
                  sizes="(min-width: 768px) 42vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Eyebrow n="05">Firmware</Eyebrow>
                <h3 className="mt-2 text-[19px] font-semibold">Medical multimeter</h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-60">
                  An Arduino Mega 2560 device that measures blood pressure, heart rate and oxygen saturation: my first
                  end-to-end hardware project.
                </p>
                <Tags items={["C", "Arduino", "Microchip"]} />
                <RepoLink href="https://github.com/AlexandruBlbn/Multimetru-Siemens" />
              </div>
            </article>
          </div>
        </section>

        {/* About */}
        <section id="about" className="reveal mx-auto max-w-[1280px] border-t border-line px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="mono mb-3 text-[11px] text-muted">About</p>
              <h2 className="display text-[36px] leading-[1.02] text-balance md:text-[44px]">
                Curious by default.<br /> Builder by habit.
              </h2>
              <p className="mt-6 max-w-[58ch] text-[16px] leading-[1.8] text-ink-60 text-pretty">
                I&apos;m a Computer Science student in Brașov who got hooked on machine learning somewhere between a
                computer vision course and a hackathon. Since then, most of what I build involves teaching software to
                understand images. My bachelor&apos;s thesis, VasoJEPA, asks how much a model can learn about coronary
                arteries before anyone labels a single image.
              </p>
              <p className="mt-4 max-w-[58ch] text-[16px] leading-[1.8] text-ink-60 text-pretty">
                I care about the unglamorous parts — clean data, honest evaluation, models that hold up outside the demo.
                When I&apos;m not training something, I&apos;m probably at a hackathon, reading papers, or fixing that one
                bug at 2 AM.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={CV} target="_blank" rel="noopener" className="mono whitespace-nowrap border border-ink bg-surface px-5 py-2.5 text-[12px] transition-colors hover:bg-ink hover:text-white">
                  Download CV ↗
                </a>
                <span className="mono flex items-center gap-2 whitespace-nowrap border border-line bg-paper-warm px-5 py-2.5 text-[12px]">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-600 motion-safe:animate-pulse" /> Open to ML internships
                </span>
              </div>
            </div>
            <div className="md:col-span-5">
              <dl className="divide-y divide-line border border-line bg-surface text-[14px]">
                <div className="flex justify-between gap-4 p-5"><dt className="text-muted">Name</dt><dd className="font-medium">Alexandru Balaban</dd></div>
                <div className="flex justify-between gap-4 p-5"><dt className="text-muted">Email</dt><dd><a href={`mailto:${EMAIL}`} className="break-all underline underline-offset-2">{EMAIL}</a></dd></div>
                <div className="flex justify-between gap-4 p-5"><dt className="text-muted">Location</dt><dd>Brașov, Romania</dd></div>
                <div className="p-5">
                  <dt className="mb-4 text-muted">Experience</dt>
                  <dd>
                    <ol className="space-y-5 border-l-2 border-accent pl-4">
                      <li>
                        <p className="text-[12px] text-muted">2025 — 2026</p>
                        <p className="font-medium">Embedded Systems Intern · Siemens Romania</p>
                        <p className="text-[13px] text-ink-60">Firmware development and hardware-software integration projects.</p>
                      </li>
                      <li>
                        <p className="text-[12px] text-muted">2023 — Present</p>
                        <p className="font-medium">Electrical Engineering & Computer Science · UNITBV</p>
                        <p className="text-[13px] text-ink-60">Automation and Applied Informatics. Thesis: VasoJEPA.</p>
                      </li>
                    </ol>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="reveal mx-auto max-w-[1280px] border-t border-line px-6 py-16">
          <div className="mb-8 flex items-baseline justify-between gap-6">
            <h2 className="display text-[36px] md:text-[44px]">Tools I work with</h2>
            <p className="hidden text-[13px] text-muted sm:block">Favorites first.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {([
              ["Languages", ["Python", "C/C++", "Java", "C#"]],
              ["Machine learning", ["PyTorch", "timm", "NumPy", "OpenCV", "scikit-image", "scikit-learn", "NiBabel"]],
              ["Hardware and more", ["Arduino", "Raspberry Pi", "Git", "Linux", "React", "MySQL"]],
            ] as const).map(([title, items]) => (
              <div key={title} className="border border-line bg-surface p-7">
                <h3 className="mb-4 text-[15px] font-semibold">{title}</h3>
                <ul className="flex flex-wrap gap-2 text-[13px]">
                  {items.map((t, i) => (
                    <li key={t} className={i === 0 ? "bg-ink px-3 py-1.5 text-white" : "border border-line px-3 py-1.5"}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="reveal mx-auto max-w-[1280px] border-t border-line px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="display text-[36px] leading-[1.02] text-balance md:text-[44px]">
                Let&apos;s impact the world<br />together<span className="text-accent">.</span>
              </h2>
              <p className="mt-4 max-w-[45ch] text-[16px] leading-[1.7] text-ink-60">
                Have an idea, an internship, or just want to talk ML? My inbox is always open.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center bg-ink px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-black">{EMAIL}</a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-line bg-surface px-5 py-3 text-[14px] font-medium transition-colors hover:border-ink">GitHub ↗</a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-line bg-surface px-5 py-3 text-[14px] font-medium transition-colors hover:border-ink">LinkedIn ↗</a>
              </div>
            </div>
            <div className="md:col-span-5">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
