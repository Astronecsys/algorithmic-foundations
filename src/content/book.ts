export type ChapterStatus = "sample" | "outlined" | "planned";

export interface Chapter {
  number: number;
  slug: string;
  title: string;
  period: string;
  question: string;
  idea: string;
  lab: string;
  status?: ChapterStatus;
}

export interface Part {
  number: number;
  slug: string;
  title: string;
  foundation: string;
  subtitle: string;
  span: string;
  color: string;
  chapters: Chapter[];
}

export const parts: Part[] = [
  {
    number: 1,
    slug: "origins",
    title: "计算成为步骤",
    foundation: "计算语言",
    subtitle: "从记数、乘法、开方到代数，建立可重复计算的基本语言。",
    span: "约前 1800—公元 1200",
    color: "clay",
    chapters: [
      { number: 1, slug: "what-is-an-algorithm", title: "什么才算算法", period: "序章", question: "一个方法怎样才算明确、可重复、会停止？", idea: "输入、步骤、状态、输出与终止", lab: "给一组含糊指令补足缺失条件" },
      { number: 2, slug: "egyptian-multiplication", title: "古埃及乘法", period: "约前 1650", question: "只会加倍和相加，怎样完成任意乘法？", idea: "分解、加倍与二进制表示的前影", lab: "选择加倍行，拼出目标乘积" },
      { number: 3, slug: "babylonian-square-root", title: "巴比伦开方", period: "约前 1800", question: "不知道平方根时，怎样不断逼近它？", idea: "迭代、误差与收敛", lab: "改变初始猜测，观察误差缩小" },
      { number: 4, slug: "euclid", title: "不断缩小问题", period: "约前 300", question: "怎样不用枚举全部因数求最大公约数？", idea: "递减、余数与不变量", lab: "在长度条和除法记录之间单步切换", status: "sample" },
      { number: 5, slug: "sieve-of-eratosthenes", title: "筛去合数", period: "约前 240", question: "怎样一次找出范围内的所有素数？", idea: "批量排除与计算上界", lab: "在数字网格上选择筛选顺序" },
      { number: 6, slug: "nine-chapters-elimination", title: "《九章算术》的方程术", period: "约公元 1 世纪", question: "多项买卖关系怎样化成唯一答案？", idea: "矩阵消元与等价变换", lab: "用算筹逐列消元，并保持方程等价" },
      { number: 7, slug: "chinese-remainder-theorem", title: "从余数重建数字", period: "约 3—5 世纪", question: "只知道若干余数，能否找回原数？", idea: "模运算与局部信息的组合", lab: "转动余数刻度盘寻找共同位置" },
      { number: 8, slug: "positional-notation", title: "位置记数改变计算", period: "约 5—9 世纪", question: "一种表示法为什么能让运算大幅简化？", idea: "数据表示与算法复杂度", lab: "比较罗马数字、算筹与十进位笔算" },
      { number: 9, slug: "al-khwarizmi-algebra", title: "代数成为程序", period: "约 820", question: "怎样把不同方程归约为有限种标准形式？", idea: "分类、归约与符号操作", lab: "通过移项与配方完成方程归约" },
    ],
  },
  {
    number: 2,
    slug: "measurement",
    title: "测量不确定的世界",
    foundation: "科学测量",
    subtitle: "现实很少给出整洁答案，误差本身也必须被计算。",
    span: "1600—1950",
    color: "gold",
    chapters: [
      { number: 10, slug: "logarithms-and-tables", title: "对数表与查表计算", period: "17 世纪", question: "怎样把昂贵的乘法变成便宜的加法？", idea: "预计算、查表与插值", lab: "用有限表格完成航海计算" },
      { number: 11, slug: "newton-method", title: "沿切线寻找根", period: "17 世纪", question: "方程无法直接求解时，怎样快速逼近？", idea: "局部线性化与收敛域", lab: "拖动初始点，制造收敛、振荡和失败" },
      { number: 12, slug: "least-squares", title: "让误差彼此抵消", period: "1805—1809", question: "互相矛盾的观测怎样给出一个答案？", idea: "残差、平方损失与最佳拟合", lab: "移动观测点，观察最佳直线重算" },
      { number: 13, slug: "numerical-integration", title: "把面积切成小片", period: "17—19 世纪", question: "无法积分的曲线怎样估算面积？", idea: "离散化、局部近似与误差阶", lab: "比较矩形、梯形和辛普森法" },
      { number: 14, slug: "runge-kutta", title: "一步步预测变化", period: "1895—1901", question: "只知道变化率，怎样预测系统未来？", idea: "采样斜率与数值稳定性", lab: "模拟摆和轨道，观察步长导致的漂移" },
      { number: 15, slug: "fourier-analysis", title: "在波形中听见频率", period: "19 世纪", question: "复杂信号能否拆成简单的周期成分？", idea: "基函数、频谱与变换", lab: "叠加正弦波，再从波形中恢复它们" },
      { number: 16, slug: "fast-fourier-transform", title: "让频谱计算突然变快", period: "20 世纪", question: "怎样避免重复计算全部频率关系？", idea: "对称、分治与重用", lab: "比较直接变换与FFT的计算网络" },
      { number: 17, slug: "monte-carlo", title: "用随机性进行计算", period: "1940 年代", question: "确定计算太复杂时，随机抽样能否可靠回答？", idea: "采样、估计与置信范围", lab: "撒点估算圆周率和高维体积" },
    ],
  },
  {
    number: 3,
    slug: "search-and-optimization",
    title: "搜索与优化",
    foundation: "决策机制",
    subtitle: "排序、路径与资源配置，让系统不必逐一尝试所有可能。",
    span: "1940—至今",
    color: "forest",
    chapters: [
      { number: 18, slug: "sorting-and-divide-conquer", title: "排序与分治", period: "1940—1960 年代", question: "怎样组织信息而不比较每一对元素？", idea: "分治、合并与复杂度", lab: "让快速排序和归并排序同场竞赛" },
      { number: 19, slug: "binary-search", title: "每一步排除一半", period: "20 世纪", question: "怎样在有序空间中快速定位答案？", idea: "区间不变量与边界", lab: "亲手修复常见的边界错误" },
      { number: 20, slug: "dynamic-programming", title: "记住已经解决的问题", period: "1950 年代", question: "重叠的子问题为什么不必反复计算？", idea: "状态、递推与最优子结构", lab: "从递归树压缩成状态表" },
      { number: 21, slug: "dijkstra", title: "从最近处扩展地图", period: "1956", question: "所有道路代价不同，怎样找到最短路线？", idea: "贪心选择与已确定边界", lab: "编辑路网并单步确认节点" },
      { number: 22, slug: "a-star", title: "让目标指引搜索", period: "1968", question: "知道大致方向后，怎样少走弯路？", idea: "启发函数与可采纳性", lab: "设计启发函数并观察过度乐观或悲观" },
      { number: 23, slug: "maximum-flow", title: "一张网络能通过多少", period: "1950 年代", question: "道路、管道或通信网络的瓶颈在哪里？", idea: "增广路、剩余网络与最小割", lab: "调节容量并寻找阻断网络的割" },
      { number: 24, slug: "simplex", title: "沿边界走向最优", period: "1947", question: "许多线性限制同时存在时，最佳方案在哪里？", idea: "可行域、顶点与枢轴变换", lab: "在二维工厂计划中沿顶点移动" },
      { number: 25, slug: "hardness-and-approximation", title: "最好答案来不及时", period: "1970 年代至今", question: "找最优解太慢时，什么样的妥协可信？", idea: "归约、界限、近似与启发式", lab: "为旅行路线比较精确搜索与近似方案" },
    ],
  },
  {
    number: 4,
    slug: "simulation-control-space",
    title: "模拟与控制",
    foundation: "工程系统",
    subtitle: "把连续世界放进网格、状态与反馈回路。",
    span: "1900—至今",
    color: "blue",
    chapters: [
      { number: 26, slug: "finite-difference", title: "在网格上模拟热", period: "20 世纪", question: "连续变化的温度怎样变成有限次计算？", idea: "网格、时间步与稳定条件", lab: "加热金属板并观察数值爆炸" },
      { number: 27, slug: "finite-element", title: "把复杂形状切成小单元", period: "1940—1960 年代", question: "桥梁和机翼的受力怎样被计算？", idea: "局部单元、组装与稀疏系统", lab: "改变桁架结构并观察应力分布" },
      { number: 28, slug: "barnes-hut", title: "远处的星群可以看成一个", period: "1986", question: "数百万天体之间的引力怎样加速计算？", idea: "空间分层与可控近似", lab: "调节近似阈值，比较速度和轨道误差" },
      { number: 29, slug: "kalman-filter", title: "在预测与观测之间", period: "1960", question: "传感器有噪声时，怎样持续估计真实状态？", idea: "不确定性、预测与校正", lab: "追踪一个被噪声遮蔽的移动物体" },
      { number: 30, slug: "feedback-control", title: "让误差驱动控制", period: "20 世纪", question: "机器怎样不断纠正自己而不发生振荡？", idea: "反馈、PID与稳定性", lab: "控制恒温器、倒立摆或月球着陆器" },
      { number: 31, slug: "computational-geometry", title: "计算空间的形状", period: "1970 年代至今", question: "地图、制造与机器人怎样组织空间关系？", idea: "凸包、扫描线、Voronoi与三角剖分", lab: "拖动点集，观察区域边界重新生成" },
      { number: 32, slug: "ct-reconstruction", title: "从投影看见身体内部", period: "1960—1970 年代", question: "多个方向的影子怎样重建内部图像？", idea: "Radon变换与滤波反投影", lab: "采集虚拟投影并逐步恢复切片", status: "outlined" },
    ],
  },
  {
    number: 5,
    slug: "information",
    title: "信息的压缩、传输与保护",
    foundation: "信息系统",
    subtitle: "编码决定消息怎样存储、传输、恢复与保密。",
    span: "1940—至今",
    color: "violet",
    chapters: [
      { number: 33, slug: "huffman-coding", title: "让常见符号更短", period: "1952", question: "怎样在不丢信息的前提下缩短消息？", idea: "频率、前缀码与贪心合并", lab: "为一段文本建树并编码" },
      { number: 34, slug: "lempel-ziv", title: "用已经出现的片段说话", period: "1977—1978", question: "不知道数据规律时，怎样边读边压缩？", idea: "字典、重复片段与自适应编码", lab: "观察字典随文本增长" },
      { number: 35, slug: "error-correcting-codes", title: "消息损坏后仍能恢复", period: "1950—1960 年代", question: "接收者怎样发现并修复传输错误？", idea: "冗余、距离、汉明码与Reed–Solomon", lab: "破坏二维码式数据块并尝试恢复" },
      { number: 36, slug: "public-key-cryptography", title: "公开锁，保密钥匙", period: "1976—1977", question: "从未见面的人怎样建立秘密通信？", idea: "单向函数、模运算与RSA", lab: "用小素数完成密钥生成和加解密" },
      { number: 37, slug: "secret-sharing", title: "把秘密分给多人保管", period: "1979", question: "怎样让任意足够多的人恢复秘密，少一个却不行？", idea: "多项式插值与门限", lab: "分发份额并组合不同参与者" },
      { number: 38, slug: "image-compression", title: "图像中什么可以被舍弃", period: "1980—1990 年代", question: "怎样显著缩小图像而保持视觉可接受？", idea: "变换、量化与感知取舍", lab: "逐步调节JPEG块的频率系数" },
    ],
  },
  {
    number: 6,
    slug: "life-and-society",
    title: "生命与社会",
    foundation: "生命与制度",
    subtitle: "算法比较DNA，也安排人与机会之间的关系。",
    span: "1960—至今",
    color: "rose",
    chapters: [
      { number: 39, slug: "sequence-alignment", title: "寻找生命序列的对应", period: "1970—1981", question: "两段DNA如何在插入、删除和替换后仍被比较？", idea: "编辑代价与动态规划", lab: "填写比对矩阵并回溯最佳路径" },
      { number: 40, slug: "genome-assembly", title: "从碎片重建基因组", period: "1980 年代至今", question: "大量短序列怎样拼回原始长序列？", idea: "重叠图、De Bruijn图与欧拉路径", lab: "从一袋短片段组装微型基因组" },
      { number: 41, slug: "phylogenetic-trees", title: "重建生命的分叉", period: "20 世纪", question: "从现存差异怎样推测共同祖先？", idea: "距离、树与逐步合并", lab: "修改序列距离并观察演化树变化" },
      { number: 42, slug: "stable-matching", title: "没有双方都想私奔的匹配", period: "1962", question: "志愿与名额怎样形成稳定分配？", idea: "提议、拒绝与稳定性", lab: "扮演申请者和机构运行匹配" },
      { number: 43, slug: "voting-and-fair-division", title: "公平并不只有一种", period: "18 世纪至今", question: "席位、物品和集体选择怎样被公平分配？", idea: "排序、配额、公理与不可能性", lab: "切换规则，观察同一选票产生不同结果" },
    ],
  },
  {
    number: 7,
    slug: "infrastructure",
    title: "数字世界的基础设施",
    foundation: "数字基础设施",
    subtitle: "存储、排名、拥塞与共识，构成看不见的公共底座。",
    span: "1970—至今",
    color: "slate",
    chapters: [
      { number: 44, slug: "b-trees", title: "让磁盘少转几次", period: "1970", question: "海量记录怎样用很少的存取次数找到？", idea: "多路平衡树与外部存储", lab: "插入记录并观察节点分裂" },
      { number: 45, slug: "pagerank", title: "让链接投票", period: "1998", question: "网页的价值能否由引用它的网页共同决定？", idea: "随机游走、迭代与稳态", lab: "编辑链接网络并观察排名传播" },
      { number: 46, slug: "congestion-control", title: "网络怎样避免把自己堵死", period: "1980 年代", question: "发送者看不见全网时，怎样共同控制流量？", idea: "反馈、拥塞窗口与乘性退让", lab: "让多条数据流竞争同一瓶颈" },
      { number: 47, slug: "distributed-consensus", title: "失联的机器怎样达成一致", period: "1980 年代至今", question: "消息延迟和机器故障时，系统怎样同意一个决定？", idea: "多数派、任期、日志与安全性", lab: "暂停节点并运行简化的Raft选举" },
    ],
  },
];

export const chapters = parts.flatMap((part) =>
  part.chapters.map((chapter) => ({ ...chapter, partNumber: part.number, partSlug: part.slug, partTitle: part.title })),
);

export const chapterCount = chapters.length;
