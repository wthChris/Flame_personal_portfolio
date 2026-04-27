# Flame Personal Portfolio · 90s Game-Themed

Flame 的 90 年代游戏机风格个人作品集。Next.js 16 + Tailwind v4 + 像素字体。

**线上地址**：部署在 Vercel（详见 Vercel Dashboard)
**仓库**：https://github.com/wthChris/Flame_personal_portfolio

---

## 🎯 这是什么

一个看起来像 Game Boy / 复古街机界面的 portfolio 网站，包含：
- 顶部 SCORE / LEVEL / HARDCORE MODE / LIVES 状态栏
- 左侧 CHAR_SHEET 角色卡（avatar + STATS + INVENTORY + CURRENT QUEST）
- 4 个 Tab：ABOUT / WORK / WRITING / CONTACT，每个 Tab 一个像素窗口
- 三主题切换：GAMEBOY GREEN / FUTURE MINT / ARCADE NIGHT
- RESUME_LOG 简历弹窗 / OPTIONS 设置弹窗

灵感来源：YouTube `W2uM7bDTm9c` 的 90s game-themed portfolio。本仓库为基于截图的复刻 + 内容本地化。

---

## 🛠 技术栈

| 类别 | 选型 |
|---|---|
| 框架 | Next.js 16 (App Router) + React 19 + TypeScript 5 |
| 样式 | Tailwind CSS v4 (CSS variables 驱动主题) |
| 字体 | Press Start 2P (标题) + VT323 (正文)，next/font 托管 |
| 图标 | 自绘 SVG 像素图标 (`components/PixelIcon.tsx`) |
| 状态 | React hooks + localStorage（无第三方状态库） |
| 部署 | Vercel（main 分支自动部署） |

---

## 📁 项目结构

```
portfolio-90s/
├─ app/
│  ├─ layout.tsx          根布局，注入字体 + 全局背景效果
│  ├─ page.tsx            主页装配
│  └─ globals.css         三主题 CSS variables + 网格 + 扫描线
├─ components/
│  ├─ TopBar.tsx          顶部 HUD 栏
│  ├─ CharSheet.tsx       左侧角色卡
│  ├─ MissionLog.tsx      ABOUT 页
│  ├─ ProjectFiles.tsx    WORK 页（文件管理器风）
│  ├─ DataArchives.tsx    WRITING 页
│  ├─ EstablishComms.tsx  CONTACT 页
│  ├─ BottomNav.tsx       底部 4 tab
│  ├─ OptionsModal.tsx    设置弹窗（主题切换）
│  ├─ ResumeModal.tsx     简历弹窗
│  ├─ Panel.tsx           通用像素窗口框架
│  └─ PixelIcon.tsx       SVG 像素图标库
├─ data/portfolio.ts      ⭐ 唯一的内容源（HUD/CharSheet/About/Work/Writing/Contact/Resume）
├─ store/useUI.ts         主题/Tab/弹窗 hooks（带 localStorage 持久化）
├─ public/avatar.svg      像素头像（占位，可替换）
└─ tsconfig.json
```

**改内容只改 `data/portfolio.ts`，不要改组件。**

---

## 🚀 在新机器上跑起来（首次配置）

### 1. 装基础工具
- **Mac**：`xcode-select --install` + `brew install node`
- **Windows**：装 Git for Windows + Node.js LTS

### 2. 配置 git 身份（每台机器一次）
```bash
git config --global user.name "<你的 GitHub 用户名>"
git config --global user.email "<你的 GitHub 注册邮箱>"
```

### 3. 克隆 + 启动
```bash
git clone https://github.com/wthChris/Flame_personal_portfolio.git portfolio-90s
cd portfolio-90s
npm install
npm run dev
```

打开 http://localhost:3000 即可看到。

---

## 🔄 多机协作工作流

**核心纪律：开干前 `git pull`，结束 `git push`。**

### 每次开始工作
```bash
cd portfolio-90s
git pull            # 拉最新
npm install         # 仅当 package.json 有变化时需要
npm run dev
```

### 每次结束工作
```bash
git add .
git commit -m "feat: 改了 XXX"     # 哪怕没写完也提交，写 wip: 前缀
git push                            # 推上去 → Vercel 自动部署
```

### 切换机器（A → B）
**A 机离开前**：先 commit + push（即使是 wip）
**B 机开始前**：先 pull

### 常见问题

#### push 被拒（"non-fast-forward"）
说明远程有你这边没拉的 commit。修复：
```bash
git pull --rebase
git push
```

#### node_modules 不一致
**永远不要 commit node_modules**。`.gitignore` 已经忽略。每台机器各自 `npm install` 即可。

#### Mac / Windows 行尾差异警告（CRLF/LF）
无害，可忽略。

---

## 🤖 在新机器上让 AI（Claude Code / Codex）秒懂项目

仓库根目录有这些文件给 AI 读：

| 文件 | 作用 |
|---|---|
| `README.md` | 项目总览（你正在读的这份） |
| `PROJECT_STATUS.md` | 当前进展、已知问题、下一步计划 |
| `CLAUDE.md` / `AGENTS.md` | AI 行为准则（Next.js 16 注意事项） |

在新机器上跑 Claude Code 时，第一句话推荐说：

> 先读 `README.md` 和 `PROJECT_STATUS.md`，然后告诉我项目当前状态。

这样 AI 立刻有完整上下文，不需要你重新解释一遍。

---

## ✏️ 怎么改内容

### 改文字（最常见）
打开 `data/portfolio.ts`，修改对应字段，保存 → 浏览器自动热更新。

### 改头像
覆盖 `public/avatar.svg` 即可（保持 64×64 像素风更搭）。

### 改主题颜色
`app/globals.css` 顶部三个 `[data-theme="..."]` 块，每块定义一组颜色变量。

### 加新页/新组件
1. `components/` 下新建 `.tsx` 文件
2. 在 `app/page.tsx` 装配进去
3. 如有内容，加到 `data/portfolio.ts`

---

## 📦 部署

**已绑定 Vercel 自动部署**：

```
git push origin main  →  Vercel 自动 build  →  线上 1-2 分钟内更新
```

不需要在 Vercel 网页上做任何额外操作。

### 想看部署日志
打开 https://vercel.com → 选项目 → Deployments

### 想加自定义域名
Vercel 项目 Settings → Domains → 添加你的域名

---

## 📜 License

MIT
