import { EuclidLab } from "./EuclidLab";

const eras = [
  { year: "约前 1800", title: "计算成为方法", body: "从巴比伦开方到古埃及乘法，人们开始把经验写成可重复的步骤。" },
  { year: "约前 300", title: "推理成为程序", body: "欧几里得算法展示了：不断缩小问题，也能抵达确定答案。" },
  { year: "17—19 世纪", title: "近似成为科学", body: "插值、微分方程与最小二乘，让不可直接求解的问题变得可计算。" },
  { year: "20 世纪至今", title: "算法进入现实", body: "优化、控制、成像、纠错与生物信息学重塑科学和社会。" },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top"><span className="brand-mark">算</span><span>可执行的智慧</span></a>
        <nav aria-label="主导航"><a href="#journey">时间线</a><a href="#lab">实验</a><a href="#method">学习方法</a></nav>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> 一本可以亲手运行的算法文明史</div>
        <h1>人类如何把问题<br />变成<span>可执行的步骤</span></h1>
        <p className="hero-copy">从泥板上的开方，到医学成像、航天控制与基因组装。不把计算机当作故事的主角，而是追随一种跨越文明的思想：如何可靠地解决问题。</p>
        <div className="hero-actions"><a className="primary" href="#lab">开始第一次实验 <b>↓</b></a><span>无需安装 · 本地运行 · 每一步都可回退</span></div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" />
          <span className="orbit-label label-a">测量</span><span className="orbit-label label-b">搜索</span><span className="orbit-label label-c">控制</span><span className="orbit-label label-d">证明</span>
          <div className="orbit-center">问题<br /><b>→</b><br />方法</div>
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="section-heading"><p>跨越四千年的主线</p><h2>算法不始于计算机</h2></div>
        <div className="timeline">
          {eras.map((era, index) => <article key={era.year}><div className="timeline-index">0{index + 1}</div><time>{era.year}</time><h3>{era.title}</h3><p>{era.body}</p></article>)}
        </div>
      </section>

      <section className="lab-section" id="lab">
        <div className="section-heading lab-heading"><p>样板实验 · 欧几里得算法</p><h2>不要只看懂，亲手让它发生</h2></div>
        <EuclidLab />
      </section>

      <section className="method" id="method">
        <div className="section-heading"><p>每一章的学习闭环</p><h2>从困惑走向解释</h2></div>
        <div className="method-grid">
          {[["01","遇见问题","先进入算法诞生时的真实困境，而不是先背定义。"],["02","大胆预测","在运行前判断下一步，让直觉暴露出来。"],["03","操纵实验","改变输入、制造极端情况，观察方法何时有效。"],["04","形成解释","最后才连接伪代码、复杂度、不变量与证明。"]].map(([n,title,body]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <footer><p>可执行的智慧 <span>·</span> Algorithms as Human Problem Solving</p><p>项目原型 · 内容与书名仍可演进</p></footer>
    </main>
  );
}
