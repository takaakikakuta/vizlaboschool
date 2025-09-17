"use client";

import React from "react";
import Link from "next/link";

type Props = {
  href?: string;
  label?: string;
  note?: string;
  className?: string;
};

export default function CTA({
  href = "/apply",
  label = "無料カウンセリングを予約する",
  note = "まずはお気軽にご相談ください",
  className = "",
}: Props) {
  return (
    <div className="bg-zinc-100 w-full">
    <section className={`mx-auto max-w-xl md:py-10 py-4 text-center ${className}`}>
      {/* 上の注記（＼ ／ 付き） */}
      <p className="mb-4 text-sm font-semibold text-zinc-800">
        <span className="text-blue-900">＼</span> {note}
        <span className="text-blue-900">／</span>
      </p>

      {/* ボタン */}
      <Link
        href={href}
        className="group inline-flex min-w-[280px] items-center justify-center gap-3 rounded-lg bg-gradient-to-b from-red-700 to-red-600 px-6 py-4 font-semibold text-white shadow-[0_6px_16px_rgba(2,6,23,.25)] hover:from-red-600 hover:to-red-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-300"
        >
        {/* 左のライン矢印 */}
        <svg
          className="h-4 w-10 text-blue-200 transition group-hover:text-white"
          viewBox="0 0 64 16"
          aria-hidden
          >
          <line
            x1="2"
            y1="8"
            x2="46"
            y2="8"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.9"
            />
          <polyline
            points="46,2 62,8 46,14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            />
        </svg>

        <span>{label}</span>
      </Link>
    </section>
    </div>
  );
}
