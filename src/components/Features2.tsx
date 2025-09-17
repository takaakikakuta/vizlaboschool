"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

const Em = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold underline decoration-amber-300 decoration-[6px] underline-offset-[6px]">
    {children}
  </span>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 shadow-sm">
    {children}
  </span>
);

export default function Features2({
  title = "“現場で通用する”CGパース制作力を身につける",
  subtitle = "使用ソフト：Blender（無料）／ Unreal Engine",
  imageSrc = "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/night2.png",
  imageAlt = "BlenderとUnreal Engineでの制作の様子",
  className,
}: Props) {
  return (
    <section className={clsx("mx-auto max-w-6xl px-4 md:py-12 py-2 sm:px-6 lg:px-8", className)}>
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* 左：写真（位置を逆に） */}
        <div className="relative order-1 md:order-none">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-amber-100/60 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={880}
              height={1100}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* 右：テキスト */}
        <div>
          {/* <h2 className="text-2xl font-extrabold leading-tight text-zinc-900 sm:text-3xl">
            {title}
          </h2> */}
          <p className="mt-2 text-2xl font-extrabold text-amber-500 sm:text-3xl">{subtitle}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            <Pill>Blender（無料・OSS）</Pill>
            <Pill>Unreal Engine（リアルタイム）</Pill>
            <Pill>Photoshop（ポスプロ）</Pill>
          </div>

          <div className="prose prose-zinc mt-6 max-w-none text-[15px] leading-7">
            <p>
              本スクールでは <Em>Blender をメインツール</Em>として採用。
              <Em>無料</Em>でありながらフォトリアル表現まで対応でき、<Em>有料ソフトに引けを取りません</Em>。
              モデリング・ライティング・マテリアル・レンダリングまでワンストップで学べます。
            </p>
            <p>
              さらに、<Em>Unreal Engine</Em> を併用し、リアルタイムレンダリングやウォークスルー、インタラクティブな
              プレゼンにも対応。<Em>高速なプレビューと即時フィードバック</Em>で制作スピードを底上げします。
            </p>
            <p>
              カリキュラムは実案件を想定し、<Em>構図設計・光の設計・質感調整・レンダ設定・ポストプロ</Em>を一連の
              フローで習得。テンプレート／プリセット／チェックリストも提供し、<Em>品質×速度の両立</Em>を当たり前にします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
