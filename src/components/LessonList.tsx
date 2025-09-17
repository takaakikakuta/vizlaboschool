"use client";

import React from "react";

export type Lesson = { title: string; desc: string };

export default function LessonList({ items }: { items: Lesson[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2">
      {items.map((t, i) => (
        <li key={i}>
          <details className="group rounded-xl border border-zinc-200 bg-white p-0 shadow-sm">
            {/* 見出し行 */}
            <summary className="flex cursor-pointer list-none items-start gap-3 px-4 py-3">
              <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-rose-50 text-sm font-bold text-rose-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-zinc-900">{t.title}</span>
              <span className="ml-auto mt-1 inline-block rotate-0 text-zinc-400 transition-transform group-open:rotate-180">
                {/* chevron */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </summary>

            {/* 伸びる部分 */}
            <div className="grid overflow-hidden px-4 pb-4 text-sm text-zinc-700 transition-[grid-template-rows] duration-300 ease-out [grid-template-rows:0fr] group-open:[grid-template-rows:1fr]">
              <div className="min-h-0 leading-6">
                {t.desc}
              </div>
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}
