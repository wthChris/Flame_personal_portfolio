export type Theme = "gameboy" | "mint" | "arcade";
export type TabKey = "about" | "work" | "writing" | "contact";

export const HUD = {
  score: 12450,
  level: 26,
  lives: 3,
  hardcoreLabel: "HARDCORE MODE",
  sysLabel: "SYS.ONLINE",
};

export const CHAR_SHEET = {
  nameEn: "FLAME",
  nameCn: "Flame · BJUT_M.ENG",
  role: "MECH_ENGINEER · AI_OPERATOR",
  avatar: "/avatar.svg",
  stats: [
    { key: "CLASS", value: "Mech Engineer" },
    { key: "SPECIAL", value: "Control Systems" },
    { key: "BUFF", value: "AI Workflows" },
  ],
  inventory: [
    { icon: "🔧", name: "Simulink" },
    { icon: "📊", name: "MATLAB" },
    { icon: "🤖", name: "ChatGPT" },
    { icon: "✨", name: "Claude" },
    { icon: "📱", name: "小红书" },
    { icon: "🎬", name: "抖音" },
  ],
  currentQuest: "Completing thesis: 原位预制管道更换模块",
};

export const ABOUT = {
  title: "Mech Systems &\nAI Operations",
  briefingTag: "MISSION BRIEFING",
  quote:
    '"Engineer by training, operator by craft — bridging hardcore mechanics with AI-driven products."',
  paragraphs: [
    "我是 Flame，目前在 **北京工业大学** 攻读机械工程与控制系统方向硕士；同时在 **北京航林益达科技有限公司** 担任结构设计工程师与研究助理。",
    "在工程领域之外，我也是一名 **AI 产品运营专家**，深度参与过美图秀秀、醒图等头部修图应用的运营策略，专注于把硬核工程方法论搬进 AI 内容产品的增长链路。",
    "我相信跨界是这个时代最好的杠杆 —— **with a deep focus on control systems and AI-augmented operations.**",
  ],
  skillTree: [
    {
      icon: "⚙",
      name: "CONTROL SYSTEMS",
      badge: "CORE",
      desc: "LADRC / ESO / Simulink 系统级仿真. 跑得动闭环就能跑得动产品.",
    },
    {
      icon: "⚡",
      name: "AI WORKFLOWS",
      badge: "STRATEGIC",
      desc: "ChatGPT, Claude Pro, Gemini 高级链路. Bridging engineering & content.",
    },
    {
      icon: ">_",
      name: "OPS GROWTH",
      badge: "PASSIVE",
      desc: "美图秀秀 / 小红书 / 抖音 操盘. AI 影像内容的增长引擎.",
    },
    {
      icon: "📐",
      name: "ENG DRAWING",
      badge: "ACTIVE",
      desc: "论文级二维矢量工程图. 把图纸做得能直接见审稿人.",
    },
  ],
};

export const WORK = {
  rootPath: "/ROOT/PROJECTS",
  files: [
    {
      slug: "DEEPSEA_WELDER",
      size: "24.0 MB",
      title: "400m Deep-Sea Pulse Arc Welder",
      desc: "深水高压极端环境焊接设备的整体结构设计与图纸输出.",
      tags: ["Mechanical", "CAD", "Pressure"],
      star: true,
    },
    {
      slug: "PIPE_REPLACER",
      size: "18.6 MB",
      title: "In-Situ Prefab Pipe Replacement",
      desc: "硕士课题：机械结构设计、尺寸链分析与三维建模开发.",
      tags: ["Simulink", "3D", "Thesis"],
      star: true,
    },
    {
      slug: "MEITU_LIVE",
      size: "12.4 MB",
      title: "Meitu '修Live' Q2 Operation",
      desc: "针对25-44女性核心用户的 AI 影像功能拉新与促活策略.",
      tags: ["Growth", "AI", "Content"],
      star: false,
    },
    {
      slug: "LADRC_SIM",
      size: "6.8 MB",
      title: "LADRC + ESO Simulation",
      desc: "线性自抗扰控制 + 扩张状态观测器的 Simulink 系统级建模.",
      tags: ["LADRC", "ESO", "MATLAB"],
      star: false,
    },
    {
      slug: "XHS_PLAYBOOK",
      size: "4.2 MB",
      title: "XHS / Douyin Growth Playbook",
      desc: "AI 工具融合的内容生态操盘 & 英语教育内容策划.",
      tags: ["小红书", "抖音", "EDU"],
      star: false,
    },
  ],
};

export const WRITING = {
  posts: [
    {
      date: "2026-04-20",
      title: "LADRC 在水下机械臂控制中的工程化笔记",
      minRead: "8 MIN READ",
    },
    {
      date: "2026-03-15",
      title: "AI 影像产品 Q2 运营复盘 · 数据驱动而非感觉驱动",
      minRead: "6 MIN READ",
    },
    {
      date: "2026-02-04",
      title: "把 Simulink 模型当作 'product spec' 来读",
      minRead: "5 MIN READ",
    },
    {
      date: "2025-12-22",
      title: "跨界者的简历：怎么不让 HR 一眼劝退",
      minRead: "9 MIN READ",
    },
    {
      date: "2025-11-10",
      title: "Claude Pro 用了一年，我把它做成了第二大脑",
      minRead: "11 MIN READ",
    },
  ],
  endLabel: "... END OF LOGS ...",
  ctaLabel: "READ MORE @Flame",
};

export const CONTACT = {
  social: {
    x: "@flame",
    linkedin: "in/flame/",
  },
  open: {
    title: "OPEN FOR QUESTS",
    desc: "Exploring full-time roles in mech-systems / AI operations.",
  },
  career: {
    title: "CAREER_LOG",
    desc: "VIEW RESUME OVERVIEW",
  },
  message: {
    title: "QUICK_MESSAGE",
    desc: "Fastest way to reach me is via LinkedIn DM.",
    cta: "MESSAGE ON LINKEDIN",
    href: "https://www.linkedin.com/",
  },
};

export const RESUME = {
  title: "EXPERIENCE BRIEF",
  subtitle: "A concise overview of my professional experience.",
  jobs: [
    {
      role: "Structural Design Engineer / Research Assistant",
      org: "BEIJING HANGLIN YIDA",
      time: "2024 - Present",
      loc: "BEIJING",
      bullets: [
        "Lead structural design of a 400m deep-sea pulse arc welder under extreme high-pressure conditions.",
        "Authored thesis-grade 2D vector engineering drawings used for fabrication review.",
        "Built Simulink system-level models with LADRC/ESO for closed-loop validation.",
      ],
    },
    {
      role: "M.Eng. Candidate · Mechanical Eng. & Control Systems",
      org: "BEIJING UNIVERSITY OF TECHNOLOGY (BJUT)",
      time: "2024 - 2027",
      loc: "BEIJING",
      bullets: [
        "Thesis: In-situ prefabricated pipeline replacement module — mechanical design, dimension-chain analysis, 3D modeling.",
        "Research focus: linear active disturbance rejection control (LADRC), extended state observer (ESO).",
      ],
    },
    {
      role: "AI Product Operations Specialist",
      org: "MEITU / XIUSHI · Cross-platform Content",
      time: "2025 - Present",
      loc: "REMOTE",
      bullets: [
        "Drove Q2 operation of '修Live' module targeting 25-44 female users.",
        "Designed AI imaging-driven growth loops on 小红书 / 抖音.",
        "Authored EN-language education content with deep AI tooling integration.",
      ],
    },
  ],
  footer: "Full CV available on request.",
};

export const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: "about", label: "ABOUT", icon: "shield" },
  { key: "work", label: "WORK", icon: "sword" },
  { key: "writing", label: "WRITING", icon: "scroll" },
  { key: "contact", label: "CONTACT", icon: "mail" },
];
