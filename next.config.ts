import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        // ビルド時に ESLint エラーがあっても処理を中断しない
        ignoreDuringBuilds: true,
      },

    images: {
      domains: ['vexpostudio.s3.ap-northeast-1.amazonaws.com','vexpo.s3.ap-northeast-1.amazonaws.com'],
      // 可能なら出力フォーマットをAVIF優先に
    formats: ['image/avif', 'image/webp'],
    },
};

export default nextConfig;
