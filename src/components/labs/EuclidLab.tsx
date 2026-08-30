"use client";

import { useMemo, useState } from "react";
import { euclidSteps, greatestCommonDivisor } from "../../lib/algorithms/euclid";

function safeNumber(value: string, fallback: number) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? Math.min(9999, Math.max(1, parsed)) : fallback;
}

export function EuclidLab() {
  const [first, setFirst] = useState(252), [second, setSecond] = useState(105), [cursor, setCursor] = useState(0);
  const steps = useMemo(() => euclidSteps(first, second), [first, second]);
  const step = steps[Math.min(cursor, steps.length - 1)], completed = cursor >= steps.length;
  const gcd = greatestCommonDivisor(first, second), scale = Math.max(first, second);
  const update = (which: "first" | "second", value: string) => {
    const next = safeNumber(value, which === "first" ? first : second);
    which === "first" ? setFirst(next) : setSecond(next); setCursor(0);
  };

  return <div className="lab-shell">
    <div className="lab-controls">
      <div className="input-pair">
        <label>第一个整数<input value={first} inputMode="numeric" onChange={(e) => update("first", e.target.value)} /></label><span>与</span>
        <label>第二个整数<input value={second} inputMode="numeric" onChange={(e) => update("second", e.target.value)} /></label>
      </div>
      <p className="prompt">寻找能同时铺满两段长度的最大单位。下一步应该保留什么？</p>
      <div className="bars" aria-label="两个整数的长度比较"><div><span style={{ width: `${Math.max(first, second) / scale * 100}%` }}>{Math.max(first, second)}</span></div><div><span style={{ width: `${Math.min(first, second) / scale * 100}%` }}>{Math.min(first, second)}</span></div></div>
      <div className="equation" aria-live="polite">{completed ? <><small>余数成为 0，算法结束</small><strong>最大公约数 = {gcd}</strong></> : <><small>第 {cursor + 1} 步</small><strong>{step.a} = {step.q} × {step.b} + <em>{step.r}</em></strong></>}</div>
      <div className="lab-buttons">
        <button onClick={() => setCursor(Math.max(0, cursor - 1))} disabled={cursor === 0}>← 上一步</button>
        <button className="next" onClick={() => setCursor(Math.min(steps.length, cursor + 1))} disabled={completed}>{cursor === steps.length - 1 ? "得到答案" : "执行下一步"} →</button>
        <button className="reset" onClick={() => setCursor(0)}>重置</button>
      </div>
    </div>
    <div className="lab-trace">
      <div className="trace-head"><span>执行记录</span><span>{steps.length} 步完成</span></div>
      <ol>{steps.map((item, index) => <li key={`${item.a}-${item.b}`} className={index === cursor ? "active" : index < cursor || completed ? "done" : "pending"}><span>{String(index + 1).padStart(2,"0")}</span><code>{item.a} mod {item.b} = {item.r}</code><b>{index < cursor || completed ? "✓" : index === cursor ? "现在" : ""}</b></li>)}</ol>
      <div className="insight"><span>关键不变量</span><p>如果一个数能同时整除 <b>a</b> 与 <b>b</b>，它也一定能整除余数 <b>a mod b</b>。</p></div>
    </div>
  </div>;
}
