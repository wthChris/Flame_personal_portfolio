# PROJECT_STATUS.md

> 📌 这份文件给 AI 助手（Claude Code / Codex）和未来的我看，让任何人/任何机器在 60 秒内知道项目当前到哪一步了、能做什么、不能做什么。
> **每次完成一个里程碑时，请更新本文件**（尤其是"当前状态"、"已知问题"、"下一步建议"三块）。

---

## 🟢 当前状态（Last Updated: 2026-04-28）

- **生命周期**：✅ MVP 已上线
- **本地能跑**：`npm run dev` → http://localhost:3000 正常
- **线上部署**：✅ Vercel 自动部署到 main 分支
- **TypeScript**：零错误（`npx tsc --noEmit` 通过）
- **响应式**：桌面 / 平板 / 手机三档已适配
- **三主题**：GAMEBOY GREEN / FUTURE MINT / ARCADE NIGHT 全部可切换并 localStorage 持久化

---

## 📊 功能完成度

### ✅ 已完成
- [x] Next.js 16 + Tailwind v4 + TypeScript 脚手架
- [x] Press Start 2P + VT323 像素字体
- [x] 三主题 CSS variables + 网格底 + CRT 扫描线 + 暗角
- [x] TopBar：SCORE / LEVEL / HARDCORE MODE / SYS.ONLINE / LIVES（心跳动画）/ 齿轮
- [x] CharSheet：avatar + 中英姓名 + STATS / INVENTORY 6 格 / CURRENT QUEST + 最小化为左侧立式条
- [x] ABOUT 页（MissionLog）：MISSION BRIEFING + 引言段 + SKILL TREE 4 卡（CORE/STRATEGIC/PASSIVE/ACTIVE 徽章）
- [x] WORK 页（ProjectFiles）：5 张文件卡（含 STAR/MB/Tag）
- [x] WRITING 页（DataArchives）：5 条 hover 反色文章列表 + READ MORE 按钮
- [x] CONTACT 页（EstablishComms）：SOCIAL / OPEN_FOR_QUESTS / CAREER_LOG / QUICK_MESSAGE 四区
- [x] OPTIONS 弹窗：主题切换 + SOUND 开关 + CONFIRM
- [x] HARDCORE MODE 按钮 → 一键切到 ARCADE NIGHT 主题
- [x] RESUME_LOG 弹窗：3 段经历
- [x] localStorage 持久化主题与当前 Tab
- [x] 移动端响应式
- [x] Vercel 自动部署管线

### ⏳ 待办（按优先级）
- [ ] **替换占位头像**：`public/avatar.svg` 当前是临时像素图，准备一张真实风格头像
- [ ] **填真实社交链接**：`data/portfolio.ts` 的 `CONTACT.social.x` / `CONTACT.social.linkedin` / `CONTACT.message.href` 当前是占位
- [ ] **真实 Writing 文章**：`data/portfolio.ts` 的 `WRITING.posts` 当前是占位标题，需要换成真实文章 + 外链
- [ ] **简历 PDF**：`public/resume.pdf` 还没放（CONTACT 页 CAREER_LOG 当前打开内置 RESUME_LOG 弹窗，未来可改成下载 PDF）
- [ ] **HUD 真实数值**：SCORE 12450 / LEVEL 26 当前是占位，未来可对应一个有意义的指标
- [ ] **自定义域名**：在 Vercel Settings → Domains 加上自有域名（可选）
- [ ] **Speed Insights / Analytics**：Vercel 一键开启（可选）

---

## ⚠️ 已知问题 / 注意事项

### 1. Next.js 16 是 brand new
仓库根 `AGENTS.md` 已警告：Next.js 16 与训练数据可能存在差异。改路由/中间件/服务端组件前**先查 `node_modules/next/dist/docs/`**。

### 2. Tailwind v4 不是 v3
- 没有 `tailwind.config.js`，配置在 `app/globals.css` 的 `@theme inline { ... }` 块里
- 颜色 token 引用方式：`bg-bg / text-text / border-border` 等映射到 CSS 变量
- 不要去翻 `tailwind.config.ts`，那个文件**不存在**

### 3. CRLF / LF 警告
Windows 下 git 会大量提示 `LF will be replaced by CRLF`，无害。

### 4. dev server 端口
默认 3000；如果被占用 Next 会自动用 3001。本地开发不影响，但贴 URL 给别人看时注意是哪个端口。

### 5. 头像文件
`public/avatar.svg` 是用代码画的极简像素图。如果要换 PNG，记得在 `data/portfolio.ts` 的 `CHAR_SHEET.avatar` 把路径改成 `/avatar.png`。

---

## 🗺 关键文件与改动指引

| 想改什么 | 改哪个文件 |
|---|---|
| 任何文字（HUD 数值 / 姓名 / 自我介绍 / 项目 / 文章 / 联系方式 / 简历） | `data/portfolio.ts` |
| 主题颜色 | `app/globals.css` 顶部 `[data-theme="..."]` 块 |
| 字体 | `app/layout.tsx` 的 `Press_Start_2P` / `VT323` import |
| 像素图标 | `components/PixelIcon.tsx`（switch case 加新 case） |
| 顶部栏布局 | `components/TopBar.tsx` |
| 角色卡布局 | `components/CharSheet.tsx` |
| 4 个 Tab 内容卡片样式 | `components/{MissionLog,ProjectFiles,DataArchives,EstablishComms}.tsx` |
| Tab 切换逻辑 | `app/page.tsx` 的 `renderMain()` |
| 弹窗 | `components/OptionsModal.tsx` / `components/ResumeModal.tsx` |
| 全局视觉效果（扫描线 / 网格） | `app/globals.css` 的 `.scanlines` / `.bg-grid` / `.crt` |

---

## 🤖 给 AI 助手的协作约定

1. **改内容优先改 `data/portfolio.ts`**，不要硬编码进组件
2. **改样式用 CSS 变量**，不要为了某个主题硬编码颜色 hex
3. **保持像素美学**：font-pixel 用于标题/徽章/按钮，font-mono (VT323) 用于正文
4. **不要随便加依赖**：当前依赖极简（next + react + tailwind），有清晰理由再加
5. **Next.js 16 / Tailwind v4 的 API 与训练数据可能不同**，写代码前先在 `node_modules` 里确认 API 签名
6. **改完后跑一遍 `npx tsc --noEmit`** 确保零类型错误
7. **commit 前 `git pull --rebase`**，多机协作避免冲突

---

## 📜 复刻参考

- **视觉灵感**：YouTube 视频 `W2uM7bDTm9c` 的 90s game-themed portfolio
- **作者博客（仅风格参考）**：https://www.fourzerothree.in/
- **截图蓝本**：用户提供的 13 张截图（覆盖 4 个 tab + OPTIONS 弹窗 + 3 主题 + 最小化态 + 简历详情）

⚠️ 本仓库**不复用**任何参考网站的具体内容，所有文案以 `data/portfolio.ts` 为准。

---

## 🔄 多机协作（参考 README.md "多机协作工作流" 章节）

每次坐下：`git pull` → 干活 → `git add . && git commit -m '...' && git push`
