// components/LessonListWide.tsx
"use client";

import React from "react";

export type IndexItem = {
  label: string;
  video?: string;
  poster?: string;
  tip?: string;
};

export type Lesson = {
  title: string;
  desc: string;
  index?: IndexItem[];
  // 任意：行の左に出すサムネ。未指定なら index[0].poster を使用
  thumbnail?: string;
  skills?: string[]; // ← 追加: タイトル下に出す技術タグ
};

const COLOR_MAP = {
  rose: { bg: "bg-rose-50", text: "text-rose-600" },
  sky: { bg: "bg-sky-50", text: "text-sky-600" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
  zinc: { bg: "bg-zinc-100", text: "text-zinc-700" },
} as const;

type Props = {
  items: Lesson[];
  color?: keyof typeof COLOR_MAP;
  // サムネのアスペクト比（デフォルト 16:9）
  thumbAspectClass?: string; // 例: "aspect-[4/3]" "aspect-square"
};

export default function LessonListWide({
  items,
  color = "rose",
  thumbAspectClass = "aspect-video",
}: Props) {
  const colorSet = COLOR_MAP[color];

  const getThumb = (t: Lesson) =>
    t.thumbnail || t.index?.find((x) => x.poster)?.poster || "";

  return (
    <ol className="space-y-3">
      {items.map((t, i) => (
        <li key={i}>
          <details className="group rounded-xl border border-zinc-200 bg-white shadow-sm">
            {/* ヘッダー：サムネ + タイトル（横並び） */}
            <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3">
              {/* サムネ */}
              <div
                className={`relative ${thumbAspectClass} w-28 overflow-hidden rounded-lg bg-zinc-100 sm:w-36 h-32`}
                aria-hidden
              >
                {getThumb(t) ? (
                  <img
                    src={getThumb(t)!}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center text-xs text-zinc-400">
                    No image
                  </div>
                )}
              </div>

              {/* タイトル + カウント */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex h-7 w-7 flex-none items-center justify-center rounded-full text-sm font-bold ${colorSet.bg} ${colorSet.text}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="sm:truncate text-sm font-medium text-zinc-900 break-words">
                    {t.title}
                  </span>
                </div>

                 {/* 技術タグ（あれば表示） */}
                    {t.skills?.length ? (
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {t.skills.map((s, k) => (
                          <span
                            key={k}
                            className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] leading-none text-zinc-600"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    ) : null}
              </div>

              {/* chevron */}
              <span
                className="ml-auto mt-1 inline-block rotate-0 text-zinc-400 transition-transform group-open:rotate-180"
                aria-hidden
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </summary>

            {/* 本文：説明 + 目次 */}
            <div className="grid overflow-hidden px-4 pb-3 text-sm text-zinc-700 transition-[grid-template-rows] duration-300 ease-out [grid-template-rows:0fr] group-open:[grid-template-rows:1fr]">
              <div className="min-h-0 leading-6">{t.desc}</div>
            </div>

            {t.index?.length ? (
              <div className="hidden group-open:block px-4 pb-4">
                <h4 className="mb-2 text-xs font-semibold text-zinc-500">目次</h4>
                <ul className="flex flex-col space-y-3">
                  {t.index.map((it, idx) => (
                    <li key={idx} className="rounded-xl border border-zinc-200 p-3">
                      <div className="flex space-x-2">
                        <div className="w-3/4">
                          <div className="text-sm font-medium text-zinc-900">{it.label}</div>
                          {it.tip && (
                            <div className="mt-0.5 text-xs text-zinc-500">{it.tip}</div>
                          )}
                        </div>
                        <div className="relative w-1/4 aspect-video overflow-hidden rounded-lg bg-zinc-100">
                          {it.video ? (
                            <video
                              src={it.video}
                              poster={it.poster}
                              muted
                              loop
                              autoPlay
                              playsInline
                              preload="metadata"
                              className="absolute inset-0 h-full w-full object-contain"
                            />
                          ) : it.poster ? (
                            <img
                              src={it.poster}
                              alt={it.label}
                              loading="lazy"
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 grid place-items-center text-xs text-zinc-400">
                              No preview
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </details>
        </li>
      ))}
    </ol>
  );
}
