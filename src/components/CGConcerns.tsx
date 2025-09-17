"use client";

import React from "react";
import clsx from "clsx";

/** オンラインCGスクール版「こんなお悩みはありませんか？」セクション */
export default function CGConcerns({
  className,
  ctaHref = "/course",
}: {
  className?: string;
  ctaHref?: string;
}) {
  const concerns: React.ReactNode[] = [
    <>CGを学びたいけど<Em>何から始めれば</Em>いい？</>,
    <>Blenderで<Em>フォトリアル</Em>まで作れるようになりたい</>,
    <><Em>添削回数の制限</Em>がないスクールで学びたい</>,
    <>実案件に近い<Em>課題とワークフロー</Em>で練習したい</>,
    <>レンダだけでなく<Em>作品の最終仕上げ</Em>も学びたい</>,
    <>将来的に<Em>Unreal Engine</Em>も触れたい</>,
  ];

  return (
    <section className="w-full bg-gray-100">
      {/* 背景の斜めライン */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-40"
        viewBox="0 0 1200 600"
      >
        {[...Array(30)].map((_, i) => (
          <line
            key={i}
            x1={-200}
            y1={i * 24}
            x2={1400}
            y2={i * 24 - 260}
            stroke="#e0f2fe"
            strokeWidth="2"
          />
        ))}
      </svg>

      <div className="mx-auto max-w-6xl px-4 md:py-12 py-2 sm:py-16">
        {/* 見出し */}
        <h2 className="text-center text-2xl font-bold text-sky-800 sm:text-3xl">
          CGを学びたいときに
          <br className="sm:hidden" />
          <span className="ml-1">こんなお悩みはありませんか？</span>
        </h2>

        {/* 吹き出し */}
        <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-1 lg:grid-cols-2">
          {concerns.map((c, i) => (
            <SpeechBubble key={i}>{c}</SpeechBubble>
          ))}
        </div>

        {/* 人物イラスト風（簡易SVG） */}
        <div className="mt-6 flex items-center justify-center gap-12">
          <ArrowDown />
        </div>

        {/* 解決メッセージ */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 text-center">
          <div className="flex items-center gap-3">
            <p className="text-lg font-semibold text-zinc-800">
              VizlaboSchoolならすべて解決
            </p>
          </div>
          <a
            href={ctaHref}
            className="mt-3 inline-flex items-center rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-rose-700"
          >
            コース・カリキュラム説明へ
          </a>
        </div>
      </div>
    </section>
  );
}

/* === Parts === */

function Em({ children }: { children: React.ReactNode }) {
  return (
    <span className="underline decoration-amber-300 decoration-[6px] underline-offset-[6px]">
      {children}
    </span>
  );
}

function SpeechBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-3xl border border-sky-100 bg-white px-4 py-3 text-center text-sm text-zinc-800 shadow-sm">
      {children}
      {/* しっぽ */}
      <span className="absolute -bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 rounded-[4px] border border-sky-100 bg-white" />
    </div>
  );
}

function PersonIcon({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={clsx("h-16 w-16 text-sky-700", flip && "scale-x-[-1]")}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <circle cx="40" cy="26" r="10" fill="#fff" />
      <rect x="20" y="38" width="40" height="24" rx="8" fill="#fff" />
      <path d="M28 50c4-4 20-4 24 0" />
      <path d="M34 26h12M32 30h16" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6 text-sky-500">
      <path
        d="M16 3v20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M8 17l8 12 8-12" fill="currentColor" opacity={0.7} />
    </svg>
  );
}

function LogoGlobe() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-700" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  );
}
