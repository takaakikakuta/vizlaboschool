// src/components/Faq.tsx
import React from "react";

export type FaqEntry = { q: string; a: string };

export default function Faq({
  items,
  title = "よくある質問",
  className = "",
}: {
  items: FaqEntry[];
  title?: string;
  className?: string;
}) {
  return (
    <section className={`border-t border-zinc-200 bg-white ${className} md:w-1/2 w-full mx-5`}>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">{title}</h2>
        <div className="mt-6 space-y-3">
          {items.map((it, i) => (
            <DetailsItem key={i} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailsItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-xl border border-zinc-200 bg-zinc-50 p-4">
      <summary className="cursor-pointer list-none font-medium text-zinc-900">
        <span className="mr-2 inline-block rounded-md bg-white px-2 py-0.5 text-xs text-zinc-600">FAQ</span>
        {q}
        <span className="float-right text-zinc-400 transition group-open:rotate-45">＋</span>
      </summary>
      <p className="mt-2 text-sm text-zinc-700">{a}</p>
    </details>
  );
}
