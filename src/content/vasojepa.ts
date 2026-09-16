// Test-set results from the thesis runs (paper_stats.json, 15 Sep 2026).
// Dice in %, per-image mean over the 300 ARCADE test images; gains in Dice points with 95% bootstrap CIs.
export const CORPUS = 37945;

export const vessels = { scratch: [77.06, 0.23], vasojepa: [79.59, 0.34], gain: 2.52, ci: [1.79, 3.27], better: 70 };
export const vesselsClDice = { scratch: [77.68, 0.29], vasojepa: [81.05, 0.59], gain: 3.37, ci: [2.35, 4.41], better: 72 };
export const stenosis = { scratch: [49.44, 0.36], vasojepa: [52.41, 0.5], gain: 2.97, ci: [1.14, 4.77], better: 58 };

// seed 42, same nested subsets and 12,500 steps for every row
export const labelEfficiency = [
  { images: 100, scratch: 71.29, vasojepa: 76.06 },
  { images: 250, scratch: 73.53, vasojepa: 77.59 },
  { images: 500, scratch: 74.63, vasojepa: 78.16 },
  { images: 1000, scratch: 77.28, vasojepa: 79.97 },
];

// test images split into terciles by mean vessel width at 512 x 512, three seeds averaged
export const byWidth = [
  { group: "Thinnest", range: "8.8–11.9 px", scratch: 73.37, vasojepa: 76.22, gain: 2.85, ci: [1.41, 4.23] },
  { group: "Middle", range: "11.9–13.7 px", scratch: 77.25, vasojepa: 80.5, gain: 3.25, ci: [1.94, 4.53] },
  { group: "Thickest", range: "13.7–24.0 px", scratch: 80.57, vasojepa: 82.04, gain: 1.46, ci: [0.6, 2.42] },
];

// published rows as reported by VasoMIM (ViT-B/16 + UNet, 224 x 224, 5 seeds); the 40K point is read off its scaling figure
export const published = [
  { method: "MAE", images: "171,478", vessels: 79.39, stenosis: 51.72 },
  { method: "I-JEPA", images: "171,478", vessels: 77.06, stenosis: 47.38 },
  { method: "VasoMIM", images: "171,478", vessels: 80.25, stenosis: 55.62 },
  { method: "VasoMIM, 40K subset", images: "40,000", vessels: 79.11, stenosis: null },
];

export const signed = (v: number) => `${v < 0 ? "−" : "+"}${Math.abs(v).toFixed(2)}`;
