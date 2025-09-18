"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Campaign() {
  return (
    <div className="w-full bg-rose-100">

    <section className="relative mx-auto md:my-5 my-2 max-w-5xl overflow-hidden rounded-3xl shadow-xl md:w-1/2 w-full">
      {/* 背景画像 */}
      <Image
        src="https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/1-1024x768.png"
        alt="建築設計の作業風景"
        fill
        className="object-cover"
        priority
      />

      {/* オーバーレイ（やや白寄りで文字を見やすく） */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

      {/* コンテンツ */}
      <div className="relative z-10 md:px-10 px-3 md:py-8 py-7 text-center text-gray-800">
        {/* 上部リボン */}
        <div className="mx-auto mb-4 inline-block rounded-full bg-rose-500 px-6 py-1 text-sm font-semibold text-white shadow-md">
          建築CGコース｜先着10名様限定
        </div>

        {/* メインキャッチ */}
        <h2 className="mb-4 md:text-4xl text-2xl font-bold tracking-tight">
          9月30日までの事前登録者には
          <br />
          <span className="text-rose-600 underline decoration-rose-400">
            88万円コースが33万円に！
          </span>
        </h2>

        <p className="mb-6 text-lg font-semibold text-gray-700">
          クーポンを今だけ発行中（2026年1月開講予定）
        </p>

        {/* 価格インパクト部分 */}
        <div className="md:mb-8 mb-2 flex md:items-end justify-center md:gap-4 gap-2 flex-col md:flex-row items-center">
          <span className="text-xl text-gray-500 line-through">¥880,000</span>
          <span className="md:text-6xl text-4xl font-extrabold text-rose-600">¥330,000</span>
        </div>

        {/* CTA */}
        <Link href={"/campaign_lp1"}>
          <button className="rounded-full bg-rose-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-rose-600">
            詳細はこちら
          </button>
        </Link>

        {/* 注意書き */}
        <p className="mt-6 text-xs text-gray-600">
          ※クーポン適用は事前登録者限定・定員に達し次第終了します
        </p>
      </div>
    </section>
        </div>
  );
}
