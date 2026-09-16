import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Figure from "@/components/Figure";
import LabelEfficiencyChart from "@/components/LabelEfficiencyChart";
import { EMAIL } from "@/content/site";
import { CORPUS, byWidth, published, signed, stenosis, vessels, vesselsClDice } from "@/content/vasojepa";

export const metadata: Metadata = {
  title: "VasoJEPA",
  description:
    "Self-supervised pre-training for coronary angiography. A SwinV2-S encoder pre-trained on 37,945 unlabeled angiograms adds 2.52 Dice on ARCADE vessel segmentation and 2.97 on stenosis segmentation over random initialization.",
};

const IMG = "/content/projects/vasojepa";
const pm = ([m, sd]: number[]) => `${m.toFixed(2)} ± ${sd.toFixed(2)}`;
const ci = ([a, b]: number[]) => `[${signed(a)}, ${signed(b)}]`;

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="reveal grid gap-x-12 border-t border-line py-14 md:grid-cols-[170px_minmax(0,1fr)] md:py-20">
      <h2 id={`${id}-h`} className="mono mb-5 text-[11px] text-muted md:mb-0 md:pt-3">{label}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="display mt-14 text-[30px] text-balance first:mt-0 md:text-[36px]">{children}</h3>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-5 max-w-[66ch] text-[16px] leading-[1.75] text-ink-60 text-pretty">{children}</p>
);

const STEPS = [
  ["Find the vessels", "A precomputed vessel map is pooled into an 8 × 8 grid of cells. A cell counts as vessel when at least three of its pixels pass 0.5."],
  ["Hide blocks over them", "Four random rectangles on that grid are redrawn until they cover 40–60% of the vessel cells."],
  ["Encode twice", "One SwinV2-S encoder turns the clean image into LayerNorm targets, in eval mode and without gradient, and the masked image into context tokens. There is no separate teacher network."],
  ["Predict what is hidden", "At each of the encoder’s four stages, from 64 × 64 down to 8 × 8 tokens, a two-layer transformer predicts the hidden tokens under an L1 loss and flags where a vessel continues beneath the mask, while a linear guide reads vessel presence off the visible tokens. Stage weights halve from the finest grid to the coarsest."],
];

const PROTOCOL = [
  ["Network", "SwinV2-S encoder (49.0M parameters) and a UNet-style decoder built from SwinUNETR blocks (18.8M)"],
  ["Data", "ARCADE official splits: 1,000 training, 200 validation and 300 test images per task, at 256 × 256"],
  ["Training", "BCE + Dice loss, AdamW at 2 × 10⁻⁴, 100 epochs, batch 8, no flips"],
  ["Selection", "Checkpoint with the best validation Dice; three seeds for each initialization"],
];

export default function VasoJEPAPage() {
  return (
    <div id="top" className="min-h-screen">
      <SiteHeader />
      <main id="main">
        <article className="mx-auto max-w-[1100px] px-6">
          <header className="pb-14 pt-10 md:pb-20 md:pt-14">
            <Link href="/#work" className="mono text-[11px] text-muted transition-colors hover:text-ink">← All work</Link>
            <p className="mono mt-10 text-[11px] text-muted">
              <span className="text-accent-ink">01</span> · Bachelor’s thesis · Self-supervised learning · Ongoing
            </p>
            <h1 className="display mt-4 text-[68px] sm:text-[96px] md:text-[120px]">VasoJEPA</h1>
            <p className="display mt-3 max-w-[20ch] text-[34px] leading-[1.02] text-muted-soft text-balance sm:text-[46px]">
              Learning from angiograms nobody labeled<span className="text-accent">.</span>
            </p>
            <p className="mt-8 max-w-[62ch] text-[18px] leading-[1.7] text-ink-60 text-pretty md:text-[19px]">
              Labeled coronary angiograms are scarce: the ARCADE benchmark gives 1,000 annotated training images per task.
              VasoJEPA pre-trains a SwinV2-S encoder on {CORPUS.toLocaleString("en-US")} unlabeled angiograms by hiding
              blocks of each image, placed over the vessels, and predicting the encoder’s own features for what is hidden.
              Fine-tuned on ARCADE, it segments vessels and stenoses better than the same network trained from scratch.
            </p>
            <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-line pt-6 text-[14px] sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Role", "Bachelor’s thesis, Transilvania University of Brașov"],
                ["Stack", "PyTorch, timm, SwinV2-S, OpenCV"],
                ["Data", "CADICA, CoronaryDominance, SYNTAX, XCAD; ARCADE"],
                ["Status", "Ongoing: 512 × 512 fine-tuning, paper write-up"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="mono text-[11px] text-muted">{k}</dt>
                  <dd className="mt-1.5 leading-[1.5]">{v}</dd>
                </div>
              ))}
            </dl>
          </header>

          <section aria-label="Key results" className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ink py-12 lg:grid-cols-4">
            {[
              [signed(vessels.gain), "Dice points", `on vessel segmentation: ${vessels.vasojepa[0]} against ${vessels.scratch[0]} from random initialization`],
              [signed(stenosis.gain), "Dice points", `on stenosis segmentation: ${stenosis.vasojepa[0]} against ${stenosis.scratch[0]}`],
              ["250", "labels", "are enough to match random init trained on all 1,000 (77.59 against 77.28 Dice)"],
              [CORPUS.toLocaleString("en-US"), "images", "of unlabeled pre-training data, none of them from ARCADE"],
            ].map(([value, unit, text]) => (
              <div key={text}>
                <p className="display text-[44px] tabular-nums sm:text-[56px]">{value}</p>
                <p className="mono mt-3 text-[11px] text-accent-ink">{unit}</p>
                <p className="mt-2 text-[14px] leading-[1.55] text-ink-60">{text}</p>
              </div>
            ))}
          </section>

          <Section id="why" label="Why pre-train">
            <H3>A thousand labels is not much to learn anatomy from</H3>
            <P>
              A network trained from scratch on ARCADE has to learn what a coronary artery looks like from 1,000 annotated
              images. Four public angiography datasets, CADICA, CoronaryDominance, SYNTAX and XCAD, hold many more frames
              without vessel masks. VasoJEPA learns from those first and fine-tunes afterwards.
            </P>
            <P>
              The frames come from X-ray videos, so consecutive CoronaryDominance frames are often near-identical. Removing
              them leaves {CORPUS.toLocaleString("en-US")} images, 22% of the 171,478 frames the same four sources contribute
              to XA-170K, the corpus VasoMIM pre-trains on.
            </P>
          </Section>

          <Section id="method" label="Method">
            <H3>Predict the hidden vessels in feature space, not in pixels</H3>
            <Figure
              src={`${IMG}/pretraining.png`} width={2220} height={1080} minWidth={760} unoptimized
              alt="Diagram of one VasoJEPA pre-training step: a vessel prior is pooled into 8 by 8 vessel cells that place a block mask; one SwinV2-S encoder encodes the clean angiogram into targets and the masked angiogram into context; per-stage predictors and guide heads feed the stage losses."
              caption="One pre-training step. The same encoder runs on the clean angiogram and on a masked copy. The vessel prior never becomes a feature target: it only decides where the mask falls and supervises the three vessel terms (in blue), which ramp in over the first 5,000 batches."
            />
            <ol className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {STEPS.map(([title, text], i) => (
                <li key={title} className="border-t border-line pt-4">
                  <p className="mono text-[11px] text-accent-ink">Step {i + 1}</p>
                  <p className="mt-2 text-[16px] font-semibold">{title}</p>
                  <p className="mt-1.5 text-[15px] leading-[1.65] text-ink-60">{text}</p>
                </li>
              ))}
            </ol>
            <P>
              Pre-training runs for 100 epochs over 37,433 images, with 512 more held out for monitoring. It starts from
              random weights, with no ImageNet initialization: batch 128, AdamW, peak learning rate 1.5 × 10⁻⁴.
            </P>
          </Section>

          <Section id="fine-tuning" label="Fine-tuning">
            <H3>Same network, same recipe, two starting points</H3>
            <Figure
              src={`${IMG}/segnet.png`} width={2000} height={624} minWidth={760} unoptimized
              alt="Diagram of the segmentation network: SwinV2-S encoder stages f0 to f3 feed a UNet-style decoder of up-blocks with convolutional skips from the image, ending in a 1 by 1 convolution that outputs vessel logits."
              caption="The segmentation network behind every result below. The encoder starts from VasoJEPA weights or from random initialization; nothing else changes between the two."
            />
            <dl className="divide-y divide-line border-y border-line">
              {PROTOCOL.map(([k, v]) => (
                <div key={k} className="grid gap-1 py-3.5 sm:grid-cols-[130px_1fr] sm:gap-6">
                  <dt className="mono pt-0.5 text-[11px] text-muted">{k}</dt>
                  <dd className="text-[15px] leading-[1.6]">{v}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="results" label="Results">
            <H3>Better on both tasks, and on most images</H3>
            <P>
              Scores are per-image means over the 300 official ARCADE test images, averaged over seeds 42, 43 and 44.
              Differences are paired per image, with 95% bootstrap confidence intervals.
            </P>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-[15px] tabular-nums">
                <thead>
                  <tr className="mono border-b border-ink text-[11px] text-muted">
                    <th scope="col" className="py-3 pr-4 font-normal">Test metric</th>
                    <th scope="col" className="py-3 pr-4 text-right font-normal">Random init</th>
                    <th scope="col" className="py-3 pr-4 text-right font-normal">VasoJEPA</th>
                    <th scope="col" className="py-3 text-right font-normal">Difference [95% CI]</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Vessels, Dice", ...vessels },
                    { name: "Vessels, clDice", ...vesselsClDice },
                    { name: "Stenosis, Dice", ...stenosis },
                  ].map((row) => (
                    <tr key={row.name} className="border-b border-line">
                      <th scope="row" className="py-3.5 pr-4 font-medium">{row.name}</th>
                      <td className="py-3.5 pr-4 text-right text-ink-60">{pm(row.scratch)}</td>
                      <td className="py-3.5 pr-4 text-right font-semibold">{pm(row.vasojepa)}</td>
                      <td className="py-3.5 text-right">
                        <span className="font-semibold text-accent-ink">{signed(row.gain)}</span>{" "}
                        <span className="text-muted">{ci(row.ci)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P>
              VasoJEPA scores higher on {vessels.better}% of test images for vessel Dice and on {stenosis.better}% for
              stenosis. clDice compares vessel centerlines, so it rewards predictions that keep vessels connected; the gain
              there, {signed(vesselsClDice.gain)}, is larger than on Dice.
            </P>

            <H3>The same Dice with a quarter of the labels</H3>
            <figure className="mt-8">
              <div className="border border-line bg-surface p-4 sm:p-8">
                <div className="mx-auto max-w-[640px]">
                  <LabelEfficiencyChart />
                </div>
              </div>
              <figcaption className="mt-3 text-[13px] leading-[1.65] text-muted text-pretty">
                ARCADE vessels, seed 42. Both initializations train on the same nested subsets of the training set for the
                same 12,500 steps. With 250 labels VasoJEPA reaches 77.59 Dice, level with random init on all 1,000 (77.28;
                difference +0.31, 95% CI −0.34 to +0.96). The gap widens as labels get scarcer, to +4.77 at 100 images.
              </figcaption>
            </figure>

            <H3>Thinner vessels gain more</H3>
            <P>
              Test images split into three equal groups by mean vessel width, measured at the native 512 × 512. Pre-training
              helps thin and mid-width vessels most.
            </P>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-[15px] tabular-nums">
                <thead>
                  <tr className="mono border-b border-ink text-[11px] text-muted">
                    <th scope="col" className="py-3 pr-4 font-normal">Vessel width</th>
                    <th scope="col" className="py-3 pr-4 text-right font-normal">Random init</th>
                    <th scope="col" className="py-3 pr-4 text-right font-normal">VasoJEPA</th>
                    <th scope="col" className="w-[40%] py-3 font-normal">Dice gain [95% CI]</th>
                  </tr>
                </thead>
                <tbody>
                  {byWidth.map((w) => (
                    <tr key={w.group} className="border-b border-line">
                      <th scope="row" className="py-3.5 pr-4 font-medium">
                        {w.group} <span className="font-normal text-muted">{w.range}</span>
                      </th>
                      <td className="py-3.5 pr-4 text-right text-ink-60">{w.scratch.toFixed(2)}</td>
                      <td className="py-3.5 pr-4 text-right font-semibold">{w.vasojepa.toFixed(2)}</td>
                      <td className="py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="relative h-2 flex-1 bg-paper-warm" aria-hidden>
                            <div className="absolute inset-y-0 left-0 bg-accent" style={{ width: `${(w.gain / 5) * 100}%` }} />
                            <div className="absolute top-1/2 h-px bg-ink" style={{ left: `${(w.ci[0] / 5) * 100}%`, width: `${((w.ci[1] - w.ci[0]) / 5) * 100}%` }} />
                          </div>
                          <span className="w-[150px] shrink-0 whitespace-nowrap text-right text-[14px]">
                            <span className="font-semibold text-accent-ink">{signed(w.gain)}</span>{" "}
                            <span className="text-muted">{ci(w.ci)}</span>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H3>What the predictions look like</H3>
            <Figure
              src={`${IMG}/qual-vessels.png`} width={1616} height={1382} minWidth={560}
              alt="Vessel segmentation on three ARCADE test images, each shown as angiogram, ground truth, random-init prediction and VasoJEPA prediction, with correct pixels in green, false positives in orange and missed pixels in purple."
              caption="Vessel segmentation on the test images at the 10th, 50th and 90th percentile of VasoJEPA’s per-image Dice, picked by rank rather than by eye, with the seed-42 models. Green: correct; orange: false positive; purple: missed. In the first row the long orange stretch from random init follows a visible vessel the annotation leaves out, because SYNTAX labels cover selected segments only."
            />
            <Figure
              src={`${IMG}/qual-stenosis.png`} width={1616} height={1382} minWidth={560}
              alt="Stenosis segmentation on three ARCADE test images, each shown as angiogram, ground truth, random-init prediction and VasoJEPA prediction."
              caption="Stenosis segmentation, rows picked the same way. A lesion mask covers a short stretch of one vessel, 0.5–1.3% of the image in these rows. At the 10th percentile random init marks other vessels and misses the lesion entirely (Dice 0), while VasoJEPA overlaps a small part of it (13.3)."
            />
          </Section>

          <Section id="representations" label="Representations">
            <H3>The vessel tree shows up before any fine-tuning</H3>
            <Figure
              src={`${IMG}/pca-stages.png`} width={1616} height={1636} minWidth={560}
              alt="Five angiograms with the pre-trained encoder's features at four stages, projected to their first three principal components and shown as RGB; vessels stand out at the finest stage."
              caption="Pre-trained features at each of the four stages, first three principal components shown as RGB, with one PCA basis per stage shared by all rows. Rows 1–3 are held-out pre-training images; rows 4–5 are ARCADE test images, a dataset pre-training never saw. At f0 the vessel tree already stands apart from the background at 4-pixel resolution; deeper stages group the image into coarser regions."
            />
            <Figure
              src={`${IMG}/pca-masked.png`} width={1554} height={1237} minWidth={560}
              alt="Three held-out angiograms with hidden blocks tinted, their target features, the predictor's features for the hidden tokens, and a map of predicted vessel presence under the mask."
              caption="What the stage-0 predictor recovers under a training-style mask. Hidden tokens come out smooth: the predictor restores the local, low-frequency content of the target features rather than individual vessel paths, and its presence head marks where vessels continue under the mask. Its L1 error on hidden tokens is 0.46, 0.49 and 0.40, against 0.62, 0.60 and 0.57 for predicting the mean visible token."
            />
          </Section>

          <Section id="context" label="Context">
            <H3>How it compares with published pre-training</H3>
            <P>
              VasoMIM, the strongest published method on ARCADE, reaches 80.25 Dice on vessels and 55.62 on stenosis after
              pre-training on all 171,478 XA-170K frames. At 40,000 frames, the point on its data-scaling curve closest to
              VasoJEPA’s corpus, it reports 79.11 on vessels, where VasoJEPA reaches 79.59. Stenosis is where VasoJEPA still
              trails: 52.41 against 55.62.
            </P>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-[15px] tabular-nums">
                <thead>
                  <tr className="mono border-b border-ink text-[11px] text-muted">
                    <th scope="col" className="py-3 pr-4 font-normal">Method</th>
                    <th scope="col" className="py-3 pr-4 text-right font-normal">Pre-training images</th>
                    <th scope="col" className="py-3 pr-4 text-right font-normal">Vessels Dice</th>
                    <th scope="col" className="py-3 text-right font-normal">Stenosis Dice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td colSpan={4} className="mono pb-2 pt-5 text-[11px] text-muted">Reported by VasoMIM · ViT-B/16, 224 × 224</td></tr>
                  {published.map((r) => (
                    <tr key={r.method} className="border-b border-line">
                      <th scope="row" className="py-3 pr-4 font-medium">{r.method}</th>
                      <td className="py-3 pr-4 text-right text-ink-60">{r.images}</td>
                      <td className="py-3 pr-4 text-right">{r.vessels.toFixed(2)}</td>
                      <td className="py-3 text-right">{r.stenosis?.toFixed(2) ?? "—"}</td>
                    </tr>
                  ))}
                  <tr><td colSpan={4} className="mono pb-2 pt-6 text-[11px] text-muted">This work · SwinV2-S, 256 × 256</td></tr>
                  <tr className="border-b border-line">
                    <th scope="row" className="py-3 pr-4 font-medium">Random init</th>
                    <td className="py-3 pr-4 text-right text-ink-60">—</td>
                    <td className="py-3 pr-4 text-right">{vessels.scratch[0].toFixed(2)}</td>
                    <td className="py-3 text-right">{stenosis.scratch[0].toFixed(2)}</td>
                  </tr>
                  <tr className="border-b border-ink">
                    <th scope="row" className="py-3 pr-4 font-semibold">VasoJEPA</th>
                    <td className="py-3 pr-4 text-right text-ink-60">{CORPUS.toLocaleString("en-US")}</td>
                    <td className="py-3 pr-4 text-right font-semibold">{vessels.vasojepa[0].toFixed(2)}</td>
                    <td className="py-3 text-right font-semibold">{stenosis.vasojepa[0].toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 max-w-[66ch] text-[13px] leading-[1.65] text-muted text-pretty">
              The two groups differ in backbone, input size (224 against 256 pixels), number of seeds and checkpoint
              selection, so comparisons across them are indicative, not head-to-head. The 40K point is read off VasoMIM’s
              data-scaling figure. Neither pre-training corpus contains ARCADE images.
            </p>
          </Section>

          <Section id="next" label="Next">
            <H3>Full resolution, then the paper</H3>
            <P>
              Next is fine-tuning at the native 512 × 512 resolution, where the thinnest vessels keep more of their pixels,
              and writing the results up as a paper. Questions about VasoJEPA or the data are welcome at{" "}
              <a href={`mailto:${EMAIL}`} className="text-ink underline underline-offset-4 hover:text-accent-ink">{EMAIL}</a>.
            </P>
            <Link href="/#work" className="mt-10 inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.06em] text-white transition-colors hover:bg-black">
              ← Back to all work
            </Link>
          </Section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
