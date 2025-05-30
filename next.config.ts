import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 关键配置：启用静态导出（解决 "Output directory not found"）
  output: 'export',
   // 静态导出相关配置
  trailingSlash: true,            // 确保URL以/结尾
    images: {
    unoptimized: true,            // 禁用图片优化（静态站点不需要）
  }
};

export default nextConfig;
