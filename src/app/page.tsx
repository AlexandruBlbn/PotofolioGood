"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("is-loading");
    const t = setTimeout(() => {
      document.documentElement.classList.remove("is-loading");
      setLoading(false);
    }, 700);
    return () => { clearTimeout(t); document.documentElement.classList.remove("is-loading"); };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] selection:bg-[var(--accent)] selection:text-white">
      <div className="loading-bar" aria-hidden />
      {/* Header — Desktop: Resume centered | Mobile: Clean compact bar with menu */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)]"
        style={{
          background: 'rgba(245, 243, 239, 0.75)',
          backdropFilter: 'blur(10px) saturate(1.1)',
          WebkitBackdropFilter: 'blur(10px) saturate(1.1)',
        }}>
        {/* Desktop Navigation (Centered Resume) */}
        <div className="hidden md:grid mx-auto max-w-[820px] px-6 h-[72px] grid-cols-3 items-center">
          <nav className="flex items-center gap-8 justify-end">
            <a href="#work" className="text-[15px] font-medium text-[var(--ink-60)] hover:text-[var(--ink)] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-200">Work</a>
            <a href="#about" className="text-[15px] font-medium text-[var(--ink-60)] hover:text-[var(--ink)] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-200">About</a>
          </nav>
          <div className="flex justify-center px-6">
            <a href="/Curriculum Vitae.pdf" target="_blank" className="inline-flex items-center gap-2 bg-[var(--ink)] text-white px-6 py-2.5 text-[14px] font-medium hover:bg-black transition-colors whitespace-nowrap">
              Resume <span className="text-[12px]">↗</span>
            </a>
          </div>
          <nav className="flex items-center gap-8 justify-start">
            <a href="#stack" className="text-[15px] font-medium text-[var(--ink-60)] hover:text-[var(--ink)] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-200">Stack</a>
            <a href="#contact" className="text-[15px] font-medium text-[var(--ink-60)] hover:text-[var(--ink)] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-200">Contact</a>
          </nav>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden items-center justify-between px-5 h-[62px]">
          <a href="#home" className="mono text-[12px] font-semibold tracking-wider text-[var(--ink)]">
            ALEXANDRU BALABAN
          </a>
          <div className="flex items-center gap-2.5">
            <a
              href="/Curriculum Vitae.pdf"
              target="_blank"
              className="inline-flex items-center gap-1.5 bg-[var(--ink)] text-white px-3 py-1.5 text-[12px] font-medium hover:bg-black transition-colors whitespace-nowrap"
            >
              Resume <span className="text-[10px]">↗</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 -mr-1 text-[var(--ink)] hover:text-[var(--accent)] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md px-6 py-4 flex flex-col gap-3">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[15px] font-medium text-[var(--ink)] hover:text-[var(--accent)] transition-colors py-2 border-b border-[var(--border)]/40 flex items-center justify-between"
            >
              <span>Work</span>
              <span className="mono text-[11px] text-[var(--muted)]">01</span>
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[15px] font-medium text-[var(--ink)] hover:text-[var(--accent)] transition-colors py-2 border-b border-[var(--border)]/40 flex items-center justify-between"
            >
              <span>About</span>
              <span className="mono text-[11px] text-[var(--muted)]">02</span>
            </a>
            <a
              href="#stack"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[15px] font-medium text-[var(--ink)] hover:text-[var(--accent)] transition-colors py-2 border-b border-[var(--border)]/40 flex items-center justify-between"
            >
              <span>Stack</span>
              <span className="mono text-[11px] text-[var(--muted)]">03</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[15px] font-medium text-[var(--ink)] hover:text-[var(--accent)] transition-colors py-2 flex items-center justify-between"
            >
              <span>Contact</span>
              <span className="mono text-[11px] text-[var(--muted)]">04</span>
            </a>
          </nav>
        )}
      </header>

      {/* Hero — full-bleed animated texture, type on top, video on the right */}
      <section id="home" className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
        {/* Full-width blended background: blobs + dots + animated waves + grain */}
        <div aria-hidden className="absolute inset-0 pointer-events-none hero-bg" />
        <div aria-hidden className="hero-topo" />
        <div aria-hidden className="hero-topo hero-topo--2" />
        <div aria-hidden className="hero-grain" />

        <div className="relative mx-auto max-w-[1280px] w-full px-6 pt-8 pb-20 md:py-16">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            {/* Left — original typography and buttons */}
            <div className="lg:col-span-7">
              <p className="mono text-[11px] tracking-[0.18em] text-[var(--muted)] hero-rise" style={{ animationDelay: '0ms' }}>
                ALEXANDRU BALABAN
              </p>
              <h1 className="display mt-5 text-[52px] sm:text-[68px] lg:text-[88px] font-[900] hero-rise" style={{ animationDelay: '80ms', textWrap: 'balance' }}>
                I teach machines<br />
                <span className="font-[400] text-[var(--muted)]" style={{ fontFamily: 'var(--font-instrument)' }}>to see clearly</span><span className="text-[var(--accent)]">.</span>
              </h1>
              <p className="mt-7 text-[17px] md:text-[19px] leading-[1.7] max-w-[52ch] text-[var(--ink-60)] hero-rise" style={{ animationDelay: '160ms', textWrap: 'pretty' }}>
                Hi, I&apos;m Alexandru — a CS & Engineering student who develops machine learning applications applied in medical imaging. I like building things that actually work and solve problems.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-5 hero-rise" style={{ animationDelay: '240ms' }}>
                <a href="#work" className="inline-flex items-center gap-2.5 bg-[var(--ink)] text-white px-7 py-3.5 text-[13px] tracking-[0.06em] uppercase font-medium hover:bg-black hover:-translate-y-0.5 transition-all duration-200">
                  See my work <span className="text-[15px]">→</span>
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-2 py-3.5 text-[13px] tracking-[0.06em] uppercase font-medium text-[var(--ink)] border-b-2 border-[var(--accent)] hover:opacity-70 transition-opacity">
                  Get in touch
                </a>
              </div>
            </div>

            {/* Right — Frameless Floating Origami Video */}
            <div className="lg:col-span-5 flex items-center justify-center hero-rise relative" style={{ animationDelay: '200ms' }}>
              <div className="relative w-full max-w-[580px] lg:max-w-[640px] aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center pointer-events-none">
                <video
                  src="/images/hero-video.mp4"
                  poster="/images/origami-heart.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain select-none scale-[1.12] sm:scale-[1.35] lg:scale-[1.5] origin-center transition-transform"
                  style={{
                    filter: 'brightness(1.08) saturate(0.7) contrast(1.03)',
                    maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 25%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 25%, transparent 70%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <a href="#work" aria-label="Scroll to work"
          className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[var(--muted)] hover:text-[var(--ink)] transition-colors">
          <span className="mono text-[9px] tracking-[0.2em]">SCROLL</span>
          <span className="block w-px h-8 bg-[var(--ink-30)] overflow-hidden">
            <span className="block w-px h-3 bg-[var(--ink)] animate-scrollhint" />
          </span>
        </a>
      </section>

      {/* Divider hairline */}
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="h-px bg-[var(--border)]" />
      </div>

      {/* Work — editorial list, not equal grid */}
      <section id="work" className="reveal mx-auto max-w-[1280px] px-6 py-12 md:py-16">
        <div className="flex items-baseline justify-between gap-6 mb-8">
          <h2 className="display text-[32px] md:text-[40px]">Selected work</h2>
          <span className="mono text-[11px] text-[var(--muted)] hidden sm:inline">6 projects · 2023—2026 · <a href="https://github.com/AlexandruBlbn" target="_blank" rel="noopener noreferrer" className="underline">github.com/AlexandruBlbn</a></span>
        </div>

        {/* Featured 01 — VasoJEPA (main research) */}
        <article className="border border-[var(--ink)] bg-white grid md:grid-cols-12 mb-6 group overflow-hidden">
          <div className="md:col-span-7 border-b md:border-b-0 md:border-r border-[var(--border)] relative min-h-[380px] overflow-hidden bg-white p-4 flex items-center justify-center">
            <img
              src="/content/projects/vasojepa-architecture.png"
              alt="VasoJEPA architecture"
              className="max-h-[350px] w-auto object-contain group-hover:opacity-0 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-white p-4 sm:p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
                <img
                  src="/content/projects/vasojepa-pca-visualization.png"
                  alt="VasoJEPA Latent Representation PCA Visualization"
                  className="w-full h-auto max-h-[300px] object-contain"
                />
              </div>
              <div className="mono text-[9px] text-[var(--muted)] border-t border-[var(--border)] pt-2 mt-2 w-full flex justify-between px-1 tracking-wider uppercase">
                <span>Self-Supervised JEPA</span>
                <span>Latent PCA: Raw · Masked · Target · Pred</span>
                <span>Anatomy Preservation</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 p-7 flex flex-col">
            <div className="mono text-[10px] tracking-[0.12em] text-[var(--muted)] flex gap-2"><span className="text-[var(--accent)]">01</span> Self-Supervised Learning · Research</div>
            <h3 className="mt-3 text-[22px] font-semibold leading-tight" style={{ textWrap: 'balance' }}>VasoJEPA — anatomy-aware JEPA for coronary angiography</h3>
            <p className="mt-3 text-[14px] leading-[1.6] text-[var(--ink-60)]" style={{ textWrap: 'pretty' }}>
              Self-supervised pretraining framework on 171K unlabeled coronary angiograms. An exogenous vesselness anchor prevents representation collapse without an EMA teacher, outperforming models trained from scratch on vascular segmentation.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="border border-[var(--border)] bg-[var(--bg-warm)] py-2.5 px-1"><div className="text-[18px] font-semibold">171K</div><div className="mono text-[9px] text-[var(--muted)]">XCA images</div></div>
              <div className="border border-[var(--border)] bg-[var(--bg-warm)] py-2.5 px-1"><div className="text-[18px] font-semibold text-[var(--accent)]">+4.06%</div><div className="mono text-[9px] text-[var(--muted)]">vs random init</div></div>
              <div className="border border-[var(--border)] bg-[var(--bg-warm)] py-2.5 px-1"><div className="text-[18px] font-semibold">−45%</div><div className="mono text-[9px] text-[var(--muted)]">encoder params</div></div>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5 mono text-[10px]">
              <span className="px-2 py-1 bg-[var(--bg-warm)] border border-[var(--border)]">JEPA</span>
              <span className="px-2 py-1 border border-[var(--border)]">SwinV2</span>
              <span className="px-2 py-1 border border-[var(--border)]">SSL</span>
              <span className="px-2 py-1 border border-[var(--border)]">PyTorch</span>
            </div>
            <a href="https://github.com/AlexandruBlbn" target="_blank" rel="noopener noreferrer" className="mt-auto pt-6 inline-flex gap-2 mono text-[11px] underline underline-offset-4">Read the paper ↗</a>
          </div>
        </article>

        {/* Featured 02 — Stenosis Detection & Coronary Segmentation */}
        <article className="border border-[var(--ink)] bg-white grid md:grid-cols-12 mb-6 group overflow-hidden">
          <div className="md:col-span-7 border-b md:border-b-0 md:border-r border-[var(--border)] relative h-[300px] sm:h-[360px] md:h-auto md:min-h-[400px] overflow-hidden bg-black flex items-center justify-center">
            <img
              src="/content/projects/stenosis-segmentation-hd.jpg"
              alt="Coronary artery and stenosis segmentation"
              className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-white p-3 sm:p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full items-center">
                <div className="h-full flex flex-col items-center justify-center border-r border-[var(--border)] pr-2 sm:pr-3 overflow-hidden">
                  <img
                    src="/content/projects/stenosis-full-architecture.png"
                    alt="End-to-End Deep Learning Architecture"
                    className="max-h-[260px] sm:max-h-[300px] md:max-h-[330px] w-auto max-w-full object-contain"
                  />
                  <span className="mono text-[9px] text-[var(--muted)] mt-1.5 uppercase tracking-wider text-center">Pipeline Architecture</span>
                </div>
                <div className="h-full flex flex-col items-center justify-center pl-1 sm:pl-2 overflow-hidden">
                  <img
                    src="/content/projects/stenosis-decoder-modules.png"
                    alt="Stage Breakdown: Up Module, Fusion Module, and Deformable Conv Block"
                    className="max-h-[260px] sm:max-h-[300px] md:max-h-[330px] w-auto max-w-full object-contain"
                  />
                  <span className="mono text-[9px] text-[var(--muted)] mt-1.5 uppercase tracking-wider text-center">Stage & DCNv2 Detail</span>
                </div>
              </div>
              <div className="mono text-[9px] text-[var(--muted)] border-t border-[var(--border)] pt-1.5 mt-1 flex justify-between px-1">
                <span>EfficientNetV2-Small</span>
                <span>SubPixel + DCNv2</span>
                <span>Deep Supervision</span>
              </div>
            </div>
            <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-xs text-white border border-white/20 px-2.5 py-1 mono text-[10px] pointer-events-none group-hover:opacity-0 transition-opacity">
              <span className="text-yellow-400">● Arteries</span> &nbsp;·&nbsp; <span className="text-red-500">● Stenosis</span>
            </div>
          </div>
          <div className="md:col-span-5 p-7 flex flex-col">
            <div className="mono text-[10px] tracking-[0.12em] text-[var(--muted)] flex gap-2">
              <span className="text-[var(--accent)]">02</span> Computer Vision · Cardiology
            </div>
            <h3 className="mt-3 text-[22px] font-semibold leading-tight" style={{ textWrap: 'balance' }}>
              A deep learning approach in stenosis detection and coronary arteries segmentation
            </h3>
            <p className="mt-3 text-[14px] leading-[1.6] text-[var(--ink-60)]" style={{ textWrap: 'pretty' }}>
              Dual-task deep learning model for coronary artery segmentation and focal stenosis localization on X-ray angiography. Employs an EfficientNetV2 backbone, custom decoder with Deformable Convolutions (DCNv2) and Dual Attention, and deep supervision for robust vascular branch tracing.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="border border-[var(--border)] bg-[var(--bg-warm)] py-2.5 px-1">
                <div className="text-[18px] font-semibold text-yellow-600">80.51%</div>
                <div className="mono text-[9px] text-[var(--muted)]">artery F1</div>
              </div>
              <div className="border border-[var(--border)] bg-[var(--bg-warm)] py-2.5 px-1">
                <div className="text-[18px] font-semibold text-[var(--accent)]">60.21%</div>
                <div className="mono text-[9px] text-[var(--muted)]">stenosis F1</div>
              </div>
              <div className="border border-[var(--border)] bg-[var(--bg-warm)] py-2.5 px-1">
                <div className="text-[18px] font-semibold">DCNv2</div>
                <div className="mono text-[9px] text-[var(--muted)]">dual attention</div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5 mono text-[10px]">
              <span className="px-2 py-1 bg-[var(--bg-warm)] border border-[var(--border)]">EfficientNetV2</span>
              <span className="px-2 py-1 border border-[var(--border)]">DeformConv2d</span>
              <span className="px-2 py-1 border border-[var(--border)]">Dual Attention</span>
              <span className="px-2 py-1 border border-[var(--border)]">PyTorch</span>
              <span className="px-2 py-1 border border-[var(--border)]">ARCADE</span>
            </div>
            <a href="https://github.com/AlexandruBlbn" target="_blank" rel="noopener noreferrer" className="mt-auto pt-6 inline-flex gap-2 mono text-[11px] underline underline-offset-4">
              View pipeline details ↗
            </a>
          </div>
        </article>

        {/* Featured 03 — Prostate */}
        <article className="border border-[var(--border)] bg-white grid md:grid-cols-12 mb-6 group overflow-hidden">
          <div className="md:col-span-7 border-b md:border-b-0 md:border-r border-[var(--border)] relative h-[380px] overflow-hidden bg-[var(--bg-warm)]">
            <img src="/content/projects/Seg.png" alt="Medical image segmentation" className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300" />
            <video src="/content/projects/prostate-hover.mp4" poster="/content/projects/Seg.png" muted loop playsInline preload="none" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" onMouseEnter={e=> (e.target as HTMLVideoElement).play()} onMouseLeave={e=> { (e.target as HTMLVideoElement).pause(); (e.target as HTMLVideoElement).currentTime=0; }} />
          </div>
          <div className="md:col-span-5 p-7 flex flex-col">
            <div className="mono text-[10px] tracking-[0.12em] text-[var(--muted)] flex gap-2"><span className="text-[var(--accent)]">03</span> Machine Learning · Featured</div>
            <h3 className="mt-3 text-[22px] font-semibold leading-tight" style={{ textWrap: 'balance' }}>Prostate cancer detection using deep neural networks</h3>
            <p className="mt-3 text-[14px] leading-[1.6] text-[var(--ink-60)]" style={{ textWrap: 'pretty' }}>Attention U-Net for prostate segmentation from MRI. k-fold cross-validation, medical preprocessing with Nibabel/PIL, validated with honest metrics.</p>
            <div className="mt-4 flex flex-wrap gap-1.5 mono text-[10px]">
              <span className="px-2 py-1 bg-[var(--bg-warm)] border border-[var(--border)]">Attention U-Net</span>
              <span className="px-2 py-1 border border-[var(--border)]">5-fold</span>
              <span className="px-2 py-1 border border-[var(--border)]">MRI</span>
            </div>
            <a href="https://github.com/AlexandruBlbn/ProstateSegmentation" target="_blank" rel="noopener noreferrer" className="mt-auto pt-6 inline-flex gap-2 mono text-[11px] underline underline-offset-4">View repo ↗</a>
          </div>
        </article>

        {/* Bento 4 & 5 — video on hover */}
        <div className="grid md:grid-cols-12 gap-6">
          <article className="md:col-span-7 border border-[var(--border)] bg-white group overflow-hidden">
            <div className="relative h-[240px] overflow-hidden border-b border-[var(--border)] bg-[var(--bg-warm)]">
              <img src="/content/projects/CuraBot.jpg" alt="Curabot" className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300" />
              <video src="/content/projects/curabot-hover.mp4" poster="/content/projects/CuraBot.jpg" muted loop playsInline preload="none" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" onMouseEnter={e=> (e.target as HTMLVideoElement).play()} onMouseLeave={e=> { (e.target as HTMLVideoElement).pause(); (e.target as HTMLVideoElement).currentTime=0; }} />
            </div>
            <div className="p-6">
              <div className="mono text-[10px] text-[var(--muted)]">04 · Robotics · Featured</div>
              <h3 className="mt-2 text-[18px] font-semibold">Curabot — voice + vision arm</h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-[var(--ink-60)]">ResCNN on Raspberry Pi + Arduino Braccio. Voice recognition + residual CNN for immobilized patients.</p>
              <div className="mt-3 mono text-[10px] flex gap-1.5 flex-wrap"><span className="border border-[var(--border)] px-2 py-1">Raspberry Pi</span><span className="border border-[var(--border)] px-2 py-1">Braccio</span><span className="border border-[var(--border)] px-2 py-1">PyTorch</span></div>
            </div>
          </article>
          <article className="md:col-span-5 border border-[var(--border)] bg-white group overflow-hidden">
            <div className="relative h-[240px] overflow-hidden border-b border-[var(--border)] bg-[var(--bg-warm)]">
              <img src="/content/projects/tensiometru.jpeg" alt="Medical multimeter" className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300" />
              <video src="/content/projects/multimeter-hover.mp4" poster="/content/projects/tensiometru.jpeg" muted loop playsInline preload="none" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" onMouseEnter={e=> (e.target as HTMLVideoElement).play()} onMouseLeave={e=> { (e.target as HTMLVideoElement).pause(); (e.target as HTMLVideoElement).currentTime=0; }} />
            </div>
            <div className="p-6">
              <div className="mono text-[10px] text-[var(--muted)]">05 · Firmware</div>
              <h3 className="mt-2 text-[18px] font-semibold">Medical multimeter</h3>
              <p className="mt-2 text-[13px] text-[var(--ink-60)]">Arduino Mega2560 measuring blood pressure, heart rate and oxygen saturation — my first end-to-end hardware project.</p>
            </div>
          </article>
        </div>

        {/* Row 6 small */}
        <div className="grid md:grid-cols-12 gap-6 mt-6">
          <article className="md:col-span-12 border border-[var(--border)] bg-white p-7">
            <div className="mono text-[10px] text-[var(--muted)]">06 · WEB</div>
            <h3 className="mt-2 text-[18px] font-semibold">Portfolio</h3>
            <p className="mt-2 text-[13px] text-[var(--ink-60)] max-w-[70ch]">The site you&apos;re on — designed and built from scratch. Typography-first, warm paper tones, everything in service of the work.</p>
          </article>
        </div>
      </section>

      {/* About — natural, human */}
      <section id="about" className="reveal mx-auto max-w-[1280px] px-6 py-16 md:py-20 border-t border-[var(--border)]">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <div className="mono text-[11px] tracking-[0.12em] text-[var(--muted)] mb-3">About</div>
            <h2 className="display text-[32px] md:text-[38px] leading-[1.05]" style={{ textWrap: 'balance' }}>
              Curious by default.<br /> Builder by habit.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.8] max-w-[58ch] text-[var(--ink-60)]" style={{ textWrap: 'pretty' }}>
              I&apos;m a Computer Science student in Brașov who got hooked on machine learning
              somewhere between a computer vision course and a hackathon. Since then, most of
              what I build involves teaching software to understand images.
            </p>
            <p className="mt-4 text-[16px] leading-[1.8] max-w-[58ch] text-[var(--ink-60)]" style={{ textWrap: 'pretty' }}>
              I care about the unglamorous parts — clean data, honest evaluation, models that
              hold up outside the demo. When I&apos;m not training something, I&apos;m probably at a
              hackathon, reading papers, or fixing that one bug at 2 AM.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/Curriculum Vitae.pdf" target="_blank" className="mono text-[12px] border border-[var(--ink)] px-5 py-2.5 bg-white hover:bg-[var(--ink)] hover:text-white transition-colors">Download CV ↗</a>
              <span className="mono text-[12px] px-5 py-2.5 bg-[var(--bg-warm)] border border-[var(--border)] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Open to ML internships</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="border border-[var(--border)] bg-white divide-y divide-[var(--border)]">
              <div className="p-5 flex justify-between text-[13px]"><span className="text-[var(--muted)]">Name</span><span className="font-medium">Alexandru</span></div>
              <div className="p-5 flex justify-between text-[13px]"><span className="text-[var(--muted)]">Email</span><a href="mailto:alexbalaban2004@gmail.com" className="underline">alexbalaban2004@gmail.com</a></div>
              <div className="p-5 flex justify-between text-[13px]"><span className="text-[var(--muted)]">Location</span><span>Brașov, Romania</span></div>
              <div className="p-5">
                <div className="text-[13px] text-[var(--muted)] mb-3">Experience</div>
                <div className="space-y-5 border-l-2 border-[var(--accent)] pl-4">
                  <div><div className="text-[12px] text-[var(--muted)]">2025 — 2026</div><div className="text-[14px] font-medium">Embedded Systems Intern · Siemens Romania</div><div className="text-[13px] text-[var(--ink-60)]">Firmware development and hardware-software integration projects.</div></div>
                  <div><div className="text-[12px] text-[var(--muted)]">2023 — Present</div><div className="text-[14px] font-medium">Computer Science · UNITBV</div><div className="text-[13px] text-[var(--ink-60)]">Focus: machine learning, computer vision</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack — simple, honest */}
      <section id="stack" className="reveal mx-auto max-w-[1280px] px-6 py-16 border-t border-[var(--border)]">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="display text-[32px] md:text-[38px]">Tools I work with</h2>
          <span className="text-[13px] text-[var(--muted)] hidden sm:inline">Favorites first.</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-[var(--border)] bg-white p-7">
            <div className="text-[14px] font-semibold mb-4">Languages</div>
            <div className="flex flex-wrap gap-2 text-[13px]"><span className="bg-[var(--ink)] text-white px-3 py-1.5">Python</span><span className="border border-[var(--border)] px-3 py-1.5">Java</span><span className="border border-[var(--border)] px-3 py-1.5">C#</span><span className="border border-[var(--border)] px-3 py-1.5">C/C++</span></div>
          </div>
          <div className="border border-[var(--border)] bg-white p-7">
            <div className="text-[14px] font-semibold mb-4">Machine Learning</div>
            <div className="flex flex-wrap gap-2 text-[13px]"><span className="bg-[var(--ink)] text-white px-3 py-1.5">PyTorch</span><span className="border border-[var(--border)] px-3 py-1.5">scikit-learn</span><span className="border border-[var(--border)] px-3 py-1.5">NumPy</span><span className="border border-[var(--border)] px-3 py-1.5">PIL</span></div>
          </div>
          <div className="border border-[var(--border)] bg-white p-7">
            <div className="text-[14px] font-semibold mb-4">Also comfortable</div>
            <div className="flex flex-wrap gap-2 text-[13px]"><span className="border border-[var(--border)] px-3 py-1.5">React</span><span className="border border-[var(--border)] px-3 py-1.5">MySQL</span><span className="border border-[var(--border)] px-3 py-1.5">Git</span><span className="border border-[var(--border)] px-3 py-1.5">Linux</span></div>
          </div>
        </div>
      </section>

      {/* Contact — warm, inviting */}
      <section id="contact" className="reveal mx-auto max-w-[1280px] px-6 py-16 border-t border-[var(--border)]">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <h2 className="display text-[32px] md:text-[40px] leading-[1.02]" style={{ textWrap: 'balance' }}>
              Let&apos;s impact the world<br />together<span className="text-[var(--accent)]">.</span>
            </h2>
            <p className="mt-4 text-[15px] text-[var(--ink-60)] max-w-[45ch]">Have an idea, an internship, or just want to talk ML? My inbox is always open.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="mailto:alexbalaban2004@gmail.com" className="inline-flex items-center gap-2 bg-[var(--ink)] text-white px-5 py-3 text-[14px] font-medium hover:bg-black transition-colors">alexbalaban2004@gmail.com</a>
              <a href="https://github.com/AlexandruBlbn" className="inline-flex items-center gap-2 border border-[var(--border)] bg-white px-5 py-3 text-[14px] font-medium hover:border-[var(--ink)] transition-colors">GitHub ↗</a>
              <a href="https://linkedin.com/in/AlexandruBlbn" className="inline-flex items-center gap-2 border border-[var(--border)] bg-white px-5 py-3 text-[14px] font-medium hover:border-[var(--ink)] transition-colors">LinkedIn ↗</a>
            </div>
          </div>
          <form className="md:col-span-5 border border-[var(--border)] bg-white p-6">
            <div className="text-[14px] font-medium mb-5">Send a message</div>
            <input placeholder="Your name" className="w-full border border-[var(--border)] px-3.5 py-3 text-[14px] mb-3 outline-none focus:border-[var(--ink)] transition-colors" />
            <input placeholder="Email" className="w-full border border-[var(--border)] px-3.5 py-3 text-[14px] mb-3 outline-none focus:border-[var(--ink)] transition-colors" />
            <textarea placeholder="What&apos;s on your mind?" rows={3} className="w-full border border-[var(--border)] px-3.5 py-3 text-[14px] mb-3 outline-none focus:border-[var(--ink)] transition-colors" />
            <button type="button" className="w-full bg-[var(--ink)] text-white text-[14px] font-medium py-3.5 hover:bg-black transition-colors">Send →</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] mt-6">
        <div className="mx-auto max-w-[1280px] px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-[13px] text-[var(--muted)]">
          <span>© 2026 Alexandru Balaban</span>
          <a href="#home" className="hover:text-[var(--ink)] transition-colors">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
