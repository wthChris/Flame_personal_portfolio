import type { NextConfig } from "next";

// Cloudflare Pages: 在 dev 阶段启用 next-dev 平台代理（生产由 next-on-pages 自动注入）
if (process.env.NODE_ENV === "development") {
  // 动态加载，避免构建时被打包
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any
  const setup = (require("@cloudflare/next-on-pages/next-dev") as any)
    ?.setupDevPlatform;
  if (typeof setup === "function") {
    setup().catch(() => {
      /* ignore: 仅在 cf 环境调试时需要 */
    });
  }
}

const nextConfig: NextConfig = {
  // next-on-pages 推荐：图片不要用默认优化器（CF Workers 不支持原生图片优化）
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
