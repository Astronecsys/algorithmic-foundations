import { access, mkdir, writeFile } from "node:fs/promises";
import { chapters } from "../src/content/book.ts";
import { modelingFrames } from "../src/content/modeling.ts";

const outputDirectory = new URL("../src/content/docs/chapters/", import.meta.url);
await mkdir(outputDirectory, { recursive: true });
const force = process.argv.includes("--force");
let generated = 0;

for (const chapter of chapters) {
  if (chapter.slug === "euclid") continue;
  const frame = modelingFrames[chapter.slug];
  if (!frame) throw new Error(`Missing modeling frame for ${chapter.slug}`);
  const target = new URL(`${chapter.slug}.mdx`, outputDirectory);
  if (!force) {
    try {
      await access(target);
      continue;
    } catch {
      // A missing chapter is expected and will be scaffolded below.
    }
  }

  const source = `---
title: ${JSON.stringify(chapter.title)}
description: ${JSON.stringify(chapter.question)}
---

import ChapterLead from "../../../components/book/ChapterLead.astro";
import ModelCard from "../../../components/book/ModelCard.astro";

<ChapterLead
  number={${chapter.number}}
  part=${JSON.stringify(chapter.partTitle)}
  period=${JSON.stringify(chapter.period)}
  idea=${JSON.stringify(chapter.idea)}
  lab=${JSON.stringify(chapter.lab)}
  status=${JSON.stringify(chapter.status ?? "planned")}
/>

<ModelCard
  scene=${JSON.stringify(frame.scene)}
  abstraction=${JSON.stringify(frame.abstraction)}
  boundary=${JSON.stringify(frame.boundary)}
/>

## 现实现场

${frame.scene}

这里首先要辨认的不是某个熟悉的算法名称，而是谁需要作出什么判断、可观察到什么，以及怎样的结果才算有用。

## 从现实到模型

${frame.abstraction}

这一步决定模型里的对象、变量、目标和约束。模型不是现实的缩小照片，而是一组为了求解而作出的取舍。

> **本章暂时接受的简化：** ${frame.boundary}

## 从模型到计算问题

把模型继续形式化为输入、输出、允许的操作与评价标准，才会得到一道能够交给算法处理的问题。同一现实任务可能产生多个模型，也就可能需要完全不同的算法。

## 算法如何利用结构

### ${chapter.idea}

先通过图形、操作和反例形成直觉，再观察算法利用了模型中的哪一种结构，并把它连接到状态、步骤、不变量、终止条件与误差边界。

算法并不直接解决现实；它只对已经写清楚的计算问题给出答案。

## 历史现场

本节将从具体人物、器物、制度或科学问题进入：当时已经有哪些方法，它们为什么不够，以及新算法究竟解决了什么困难。

## 互动实验

<div className="planned-experiment">
  <span>计划实验</span>
  <h3>${chapter.lab}</h3>
  <p>实验将允许读者改变现实输入和建模假设，再单步求解并主动制造失败情形，而不是只播放一段不可操纵的动画。</p>
  <div><i>现实输入</i><b>→</b><i>调整模型</i><b>→</b><i>单步求解</i><b>→</b><i>回到现实</i></div>
</div>

## 验证：答案真的有用吗？

验证分成两层。第一层检查算法是否忠实地求解了计算问题：尝试边界输入、寻找反例、归纳不变量，并解释正确性、效率或近似误差。第二层回到现实，检查模型的输入能否测得、约束是否遗漏、目标是否真正代表需要。

## 模型失效的地方

${frame.boundary}

本节不会把这些遗漏藏在脚注里，而会通过反例或参数变化让模型失效，再讨论应增加变量、改变目标，还是换一种问题表述。

## 现实回声

最后追踪这一建模方式和算法如何迁移到其他领域、今天仍在哪里运行，以及它带来了哪些新的限制与价值选择。

## 史料与引用

<div className="source-state">本章尚处于内容骨架阶段。正式写作前将建立一手史料、可靠二手研究、数学定义和实现来源，并明确区分历史事实与现代教学表达。</div>
`;

  await writeFile(target, source, "utf8");
  generated += 1;
}

console.log(`Generated ${generated} chapter outline${generated === 1 ? "" : "s"}.`);
