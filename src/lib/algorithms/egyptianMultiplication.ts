export interface DoublingRow {
  weight: number;
  product: number;
}

export function doublingRows(multiplicand: number, multiplier: number): DoublingRow[] {
  const rows: DoublingRow[] = [];
  for (let weight = 1, product = multiplicand; weight <= multiplier; weight *= 2, product *= 2) {
    rows.push({ weight, product });
  }
  return rows;
}

export function decompositionWeights(multiplier: number): number[] {
  return doublingRows(1, multiplier).filter((row) => Math.floor(multiplier / row.weight) % 2 === 1).map((row) => row.weight);
}

export function multiplyByDoubling(multiplicand: number, multiplier: number): number {
  const selected = new Set(decompositionWeights(multiplier));
  return doublingRows(multiplicand, multiplier).filter((row) => selected.has(row.weight)).reduce((sum, row) => sum + row.product, 0);
}
