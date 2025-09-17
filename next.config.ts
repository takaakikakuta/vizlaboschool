import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        // ビルド時に ESLint エラーがあっても処理を中断しない
        ignoreDuringBuilds: true,
      },

    images: {
      domains: ['vexpostudio.s3.ap-northeast-1.amazonaws.com','vexpo.s3.ap-northeast-1.amazonaws.com']
    },
};

export default nextConfig;
