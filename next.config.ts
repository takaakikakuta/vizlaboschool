import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        // ビルド時に ESLint エラーがあっても処理を中断しない
        ignoreDuringBuilds: true,
      },

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'vexpostudio.s3.ap-northeast-1.amazonaws.com',
        },
        {
          protocol: 'https',
          hostname: 'vexpo.s3.ap-northeast-1.amazonaws.com',
        },
      ],
      // 可能なら出力フォーマットをAVIF優先に
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [360, 420, 640, 768, 1024, 1200], // 主要ブレイクポイント
      imageSizes: [320, 480, 640, 800], // 固定幅用
    },
};

export default nextConfig;
