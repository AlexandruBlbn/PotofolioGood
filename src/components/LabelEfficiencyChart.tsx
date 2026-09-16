import { labelEfficiency as data } from "@/content/vasojepa";

const W = 600, H = 360, L = 56, R = 118, T = 20, B = 64;
const x = (n: number) => L + (Math.log10(n) - 2) * (W - L - R); // 100 to 1,000 labels on a log axis
const y = (v: number) => T + ((81 - v) / 11) * (H - T - B);     // Dice 70 to 81
const line = (k: "scratch" | "vasojepa") => data.map((d, i) => `${i ? "L" : "M"}${x(d.images)} ${y(d[k])}`).join(" ");
const all = data[data.length - 1];

export default function LabelEfficiencyChart() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" className="h-auto w-full text-[15px]"
      aria-label="Test Dice against the number of labeled training images. VasoJEPA: 76.06, 77.59, 78.16, 79.97 at 100, 250, 500, 1,000 labels. Random init: 71.29, 73.53, 74.63, 77.28.">
      {[70, 72, 74, 76, 78, 80].map((v) => (
        <g key={v}>
          <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke="var(--border)" />
          <text x={L - 12} y={y(v)} dy="0.35em" textAnchor="end" fill="var(--muted)">{v}</text>
        </g>
      ))}
      {data.map((d) => (
        <text key={d.images} x={x(d.images)} y={H - B + 26} textAnchor="middle" fill="var(--muted)">{d.images.toLocaleString("en-US")}</text>
      ))}
      <text x={(L + W - R) / 2} y={H - 8} textAnchor="middle" fill="var(--muted)">labeled training images (log scale)</text>
      <text transform={`translate(16 ${(T + H - B) / 2}) rotate(-90)`} textAnchor="middle" fill="var(--muted)">test Dice (%)</text>

      <line x1={L} x2={W - R} y1={y(all.scratch)} y2={y(all.scratch)} stroke="var(--muted)" strokeDasharray="5 5" />
      <text x={x(250) + 10} y={y(all.scratch) + 22} fill="var(--muted)" fontSize="13">random init, all 1,000 labels</text>

      <path d={line("scratch")} fill="none" stroke="var(--muted)" strokeWidth={2} />
      <path d={line("vasojepa")} fill="none" stroke="var(--accent)" strokeWidth={2.5} />
      {data.map((d) => (
        <g key={d.images}>
          <circle cx={x(d.images)} cy={y(d.scratch)} r={4.5} fill="var(--surface)" stroke="var(--muted)" strokeWidth={2}>
            <title>{`Random init, ${d.images} labels: ${d.scratch.toFixed(2)} Dice`}</title>
          </circle>
          <circle cx={x(d.images)} cy={y(d.vasojepa)} r={5} fill="var(--accent)">
            <title>{`VasoJEPA, ${d.images} labels: ${d.vasojepa.toFixed(2)} Dice`}</title>
          </circle>
        </g>
      ))}
      <text x={W - R + 14} y={y(all.vasojepa)} dy="0.35em" fill="var(--accent-ink)" fontWeight={600}>VasoJEPA</text>
      <text x={W - R + 14} y={y(all.scratch)} dy="0.35em" fill="var(--muted)" fontWeight={600}>Random init</text>
    </svg>
  );
}
