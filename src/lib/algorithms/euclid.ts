export interface EuclidStep {
  a: number;
  b: number;
  q: number;
  r: number;
}

export function euclidSteps(first: number, second: number): EuclidStep[] {
  const result: EuclidStep[] = [];
  let a = Math.max(first, second);
  let b = Math.min(first, second);
  while (b !== 0) {
    const q = Math.floor(a / b);
    const r = a % b;
    result.push({ a, b, q, r });
    a = b;
    b = r;
  }
  return result;
}

export function greatestCommonDivisor(first: number, second: number): number {
  const steps = euclidSteps(first, second);
  return steps.length ? steps.at(-1)!.b : first;
}
