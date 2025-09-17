// components/PostCourseFollowUp.tsx
"use client";

import React from "react";

export default function PostCourseFollowUp() {
  const benefits = [
    {
      title: "建築CG 3Dモデルライブラリ",
      desc: "建築CGに特化した3Dモデルを1,000点以上提供。制作スピードと品質を両立できます。",
      img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/Screenshot+2025-09-17+083732.png",
      alt: "3Dモデルの一覧",
    },
    {
      title: "追加動画教材 見放題",
      desc: "新しく追加される教材をいつでも視聴可能。法人加入なら社内の誰でも視聴できます（※マンツーマン指導は別途必要）。",
      img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/PostFollow3.png",
      alt: "動画教材の視聴画面",
    },
    {
      title: "最新動向＆コミュニティ",
      desc: "最新の建築CG動向をメルマガ・ブログでキャッチアップ。年1回のコミュニティイベントにもご招待します。",
      img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/20190625.jpg.jpeg",
      alt: "コミュニティイベントの様子",
    },
    {
      title: "月1回の専門家相談",
      desc: "CGパースの専門家に直接質問・相談できる機会を提供。実務の悩みや最新ノウハウを気軽に聞けます。",
      img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/1269f195-91da-4389-a029-fedcacdf5483.png",
      alt: "オンラインで相談する様子",
    },
  ];

  return (
    <div className="w-full bg-zinc-100">

    <section className="mx-auto max-w-6xl px-6 md:py-12 py-4">
      <h2 className="mb-10 text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
        受講後も「Vizlabo Journal」で継続フォロー
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
            <div
            key={i}
            className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
            >
            <img
              src={b.img}
              alt={b.alt}
              className="aspect-[4/3] w-full object-cover"
              />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-base font-semibold text-zinc-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 料金注記 */}
      <p className="mt-10 text-center text-sm text-zinc-500">
        ※Vizlabo Journalへの入会は <span className="font-semibold text-zinc-800">月会費5万円（年払い50万円）</span> が必要です。
      </p>
    </section>
        </div>
  );
}
