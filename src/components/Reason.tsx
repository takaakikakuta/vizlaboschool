"use client";

import React from "react";
import Image from "next/image";

const reasons = [
  {
    num: "01",
    title: "実案件ベースで学べる実践的カリキュラム",
    desc: "建築・インテリア業界の実案件を想定した課題で学ぶことで、受講後すぐに現場で通用するスキルを習得できます。シーン構成やライティング、マテリアル設定など、実務で求められる一連のワークフローを体系的に学べます。",
    img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/reason1.jpg",
    alt: "CGパースの画面と設計図",
  },
  {
    num: "02",
    title: "現役CGパースクリエイターによるマンツーマン添削",
    desc: "第一線で活躍するプロが週1回のオンラインセッションで進捗を確認。レンダリング設定や質感表現など、つまずきやすいポイントをその場で解消し、常に最短距離でクオリティを引き上げます。",
    img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/360_F_215667260_O4V0pl6FqpzL40rLvc0nrMWkKV6eDHXR.jpg",
    alt: "オンラインで指導するCG講師",
  },
  {
    num: "03",
    title: "多様なCGパースサンプルで表現の幅を習得",
    desc: "建築・インテリア業界で実際に使われている様々なテイストのCGパース事例を提供。スタイルや用途の異なるサンプルを参考にすることで、表現の引き出しを増やし、案件に応じた最適な仕上げ方を学べます。",
    img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/perspective-making_interview_1306-e1665602593121.png",
    alt: "チェックリストとパース画像",
  },
];

export default function Reason() {
  return (
    <div className="w-full bg-rose-100 py-3">

    <section className="mx-auto max-w-6xl rounded-2xl bg-zinc-50 px-4 md:py-12 py-4 shadow-inner sm:px-6 lg:px-8">
      <h2 className="md:mb-12 mb-2 text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
        <span className="text-amber-500">3つの理由</span> で選ばれています
      </h2>

      <div className="grid md:gap-12 gap-4">
        {reasons.map((r) => (
            <div
            key={r.num}
            className="grid items-center gap-6 md:grid-cols-2"
            >
            {/* 左：画像 */}
            <div className="relative order-1 md:order-none">
              <div className="absolute -inset-2 -z-10 rounded-2xl bg-amber-100/60 blur-2xl" />
              <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
                <Image
                  src={r.img}
                  alt={r.alt}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover"
                  />
              </div>
            </div>

            {/* 右：テキスト */}
            <div>
              <p className="mb-1 text-sm font-semibold text-amber-500">
                REASON {r.num}
              </p>
              <h3 className="text-lg font-bold text-zinc-900">{r.title}</h3>
              <p className="mt-3 text-sm text-zinc-700 leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
