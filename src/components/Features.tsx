"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  title?: string;
  subtitle?: string;
  imageSrc?: string; // 例: "/images/coach.jpg"
  imageAlt?: string;
  className?: string;
};

const Em = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold underline decoration-amber-300 decoration-[6px] underline-offset-[6px]">
    {children}
  </span>
);

export default function Features({
  title = "“現場で通用する”CGパース制作力を身につける",
  subtitle = "オンラインCGコーチング",
  imageSrc = "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/Screenshot+2025-09-15+082555.png",
  imageAlt = "CGパース制作の様子",
  className,
}: Props) {
  return (
    <section
      className={clsx(
        "mx-auto max-w-6xl px-4 md:py-12 py-2 sm:px-6 lg:px-8",
        className
      )}
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* 左：テキスト */}
        <div>
          {/* <h2 className="text-2xl font-extrabold leading-tight text-zinc-900 sm:text-3xl">
            {title}
          </h2> */}
          <p className="mt-2 text-2xl font-extrabold text-amber-500 sm:text-3xl">
            {subtitle}
          </p>

          <div className="prose prose-zinc mt-6 max-w-none text-[15px] leading-7">
            <p>
              建築提案で伝わるCGパースを作るには、
              <Em>効率の良いワークフロー選択</Em>と
              <Em>品質×速度の両立</Em>が欠かせません。本コースでは実案件を想定し、
              毎週アウトプットを積み上げる設計です。忙しい日々でも
              「短時間で要点を押さえて仕上げる」習慣を作り、
              現場で使えるスキルを確実に定着させます。
            </p>
            <p>
              専任コーチがあなたの業務や案件特性に合わせて
              <Em>最適な学習カリキュラム</Em>を設計。
              <Em>構図設計・ライティング・マテリアル/質感</Em>、
              <Em>レンダリング設定</Em>、さらに
              <Em>ポストプロ（Photoshop）</Em>までを一連のフローで指導します。
              毎週のレビューでボトルネックを解消していきます。
            </p>
            <p>
              これまでのサポート知見を活かし、
              この4か月で、<Em>あなたのCGパースと提案力を一段引き上げる</Em>ことを約束します。
            </p>
          </div>
        </div>

        {/* 右：写真 */}
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-amber-100/60 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={880}
              height={1100}
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
