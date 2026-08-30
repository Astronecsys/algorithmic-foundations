"use client";

import { useMemo, useState } from "react";
import { decompositionWeights, doublingRows } from "../../lib/algorithms/egyptianMultiplication";

function clamp(value: string, fallback: number) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? Math.max(1, Math.min(255, parsed)) : fallback;
}

export function EgyptianMultiplicationLab() {
  const [multiplicand, setMultiplicand] = useState(23);
  const [multiplier, setMultiplier] = useState(18);
  const [selected, setSelected] = useState<number[]>([]);
  const rows = useMemo(() => doublingRows(multiplicand, multiplier), [multiplicand, multiplier]);
  const weightSum = rows.filter((row) => selected.includes(row.weight)).reduce((sum, row) => sum + row.weight, 0);
  const productSum = rows.filter((row) => selected.includes(row.weight)).reduce((sum, row) => sum + row.product, 0);
  const complete = weightSum === multiplier;
  const update = (which: "a" | "b", value: string) => {
    which === "a" ? setMultiplicand(clamp(value, multiplicand)) : setMultiplier(clamp(value, multiplier));
    setSelected([]);
  };
  const toggle = (weight: number) => setSelected((items) => items.includes(weight) ? items.filter((item) => item !== weight) : [...items, weight]);
  const reveal = () => setSelected(decompositionWeights(multiplier));

  return <div className="egypt-lab">
    <div className="egypt-workspace">
      <div className="input-pair">
        <label>被乘数<input value={multiplicand} inputMode="numeric" onChange={(event) => update("a", event.target.value)} /></label><span>×</span>
        <label>乘数<input value={multiplier} inputMode="numeric" onChange={(event) => update("b", event.target.value)} /></label>
      </div>
      <p>从左栏选择若干加倍行，使它们恰好拼出乘数 <b>{multiplier}</b>。</p>
      <div className="doubling-table" role="group" aria-label="加倍表">
        <header><span>倍数</span><span>{multiplicand} 的倍数</span><span>选择</span></header>
        {rows.map((row) => {
          const active = selected.includes(row.weight);
          return <button key={row.weight} className={active ? "active" : ""} aria-pressed={active} onClick={() => toggle(row.weight)}>
            <span>{row.weight}</span><strong>{row.product}</strong><i>{active ? "✓" : "+"}</i>
          </button>;
        })}
      </div>
      <div className="lab-buttons"><button onClick={() => setSelected([])}>清空选择</button><button className="next" onClick={reveal}>显示一种分解</button></div>
    </div>
    <aside className={`egypt-result ${complete ? "complete" : ""}`} aria-live="polite">
      <span>左栏合计</span><strong>{weightSum} <small>/ {multiplier}</small></strong>
      <span>右栏合计</span><strong>{productSum}</strong>
      <div><b>{complete ? `${multiplicand} × ${multiplier} = ${productSum}` : "继续选择加倍行"}</b><p>{complete ? "两栏使用同一组行，因此左边拼成乘数时，右边就拼成乘积。" : "左栏超过目标时，取消一行再试。每个正整数都能由不同的 2 的幂相加得到。"}</p></div>
    </aside>
  </div>;
}
