"use client";

import { useState } from "react";

const repairs = [
  { key: "input", title: "说清输入", text: "输入是一列有限的整数，可以包含重复值。" },
  { key: "compare", title: "定义“最小”", text: "用通常的整数大小关系比较；相等时保留原先次序。" },
  { key: "action", title: "写出动作", text: "从尚未处理的位置中找到最小值，与当前第一个位置交换。" },
  { key: "stop", title: "规定停止", text: "当前待处理位置到达列表末尾时停止并输出整列。" },
] as const;

export function InstructionClinic() {
  const [enabled, setEnabled] = useState<string[]>([]);
  const toggle = (key: string) => setEnabled((items) => items.includes(key) ? items.filter((item) => item !== key) : [...items, key]);
  const complete = enabled.length === repairs.length;

  return <div className="clinic-shell">
    <div className="clinic-brief">
      <span>含糊指令</span>
      <blockquote>“把这些数整理好：每次找一个小的放到前面，继续做。”</blockquote>
      <p>它表达了意图，却还不能交给一个不了解背景的执行者。逐项补上缺失的契约。</p>
    </div>
    <div className="clinic-repairs" aria-label="算法契约检查项">
      {repairs.map((repair, index) => {
        const active = enabled.includes(repair.key);
        return <button key={repair.key} className={active ? "active" : ""} aria-pressed={active} onClick={() => toggle(repair.key)}>
          <b>{String(index + 1).padStart(2, "0")}</b><span><strong>{repair.title}</strong><small>{repair.text}</small></span><i>{active ? "已补足" : "待决定"}</i>
        </button>;
      })}
      <div className={`clinic-verdict ${complete ? "complete" : ""}`} aria-live="polite">
        <span>{complete ? "现在可以机械执行" : `还缺 ${repairs.length - enabled.length} 项`}</span>
        <p>{complete ? "输入、比较规则、状态转移和停止条件已经明确。下一步才是讨论它是否正确、是否高效。" : "会做的人可以靠常识补空白；算法必须把这些常识变成可检查的约定。"}</p>
      </div>
    </div>
  </div>;
}
