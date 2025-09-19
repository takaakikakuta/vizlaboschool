"use client";
import React from "react";

/**
 * OutcomesCapabilities.tsx
 * 法人向けLPで使う「修了時にどんな業務ができるようになるか」を“定量的”に示すカードグリッド。
 * Tailwindのみ。外部UI依存なし。アクセシブルに配慮。
 *
 * ✅ できること
 * - KPI/定量値（例: 週3件、30%短縮、¥150,000削減 など）を強調表示
 * - Before/Afterをバッジで明示
 * - 補足の根拠・検証方法（Evidence）も併記可能
 * - スモール（compact）/デフォルト（default）レイアウト
 * - セクション見出し・説明の有無を制御
 *
 * 使い方（例）
 * <OutcomesCapabilities
 *   heading="修了後に担える業務（定量イメージ）"
 *   subheading="4ヶ月で“現場で使える”基準を満たします。数値は実務基準の目安です。"
 *   items={SAMPLE_ITEMS}
 * />
 */

export type OutcomeItem = {
  /** 業務名 */
  title: string;
  /** 数値の短い見出し（例: 週3件 / 30%短縮 / ¥150,000/月 削減 ）*/
  metric: string;
  /** 指標の補足ラベル（例: "生産性", "コスト削減" など）*/
  metricLabel?: string;
  /** 一言説明（〜が可能に / 〜を自走化 など）*/
  summary?: string;
  /** Before -> After 比較（ある場合）*/
  before?: string;
  after?: string;
  /** 根拠・検証方法などの箇条書き */
  evidence?: string[];
  /** 任意のアイコン（emojiや小SVGを想定） */
  icon?: React.ReactNode;
};

export type OutcomesCapabilitiesProps = {
  heading?: string;
  subheading?: string;
  items: OutcomeItem[];
  variant?: "default" | "compact";
  className?: string;
};

export default function OutcomesCapabilities({
  heading,
  subheading,
  items,
  variant = "default",
  className = "",
}: OutcomesCapabilitiesProps) {
  const isCompact = variant === "compact";

  return (
    <section
      aria-labelledby={heading ? "outcomes-heading" : undefined}
      className={`rounded-2xl bg-white container mx-auto ${
        isCompact ? "p-4" : "p-6 sm:p-8"
      } ${className}`}
    >
      {(heading || subheading) && (
        <header className={isCompact ? "mb-3" : "mb-6"}>
          {heading && (
            <h2
              id="outcomes-heading"
              className={`font-bold text-zinc-900 text-center ${
                isCompact ? "text-lg" : "text-2xl"
              }`}
            >
              {heading}
            </h2>
          )}
          {subheading && (
            <p className={`mt-1 text-zinc-600 text-center ${isCompact ? "text-xs" : "text-sm"}`}>
              {subheading}
            </p>
          )}
        </header>
      )}

      <ol
        className={`grid list-none gap-3 md:pl-5 ${
          isCompact ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-2"
        }`}
      >
        {items.map((it, i) => (
          <li key={i} className="marker:text-zinc-400">
            <article className="group relative rounded-xl border border-zinc-200 bg-white p-4 transition hover:shadow-md">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-zinc-50 ring-1 ring-zinc-200">
                  <span aria-hidden className="text-xl">
                    {it.icon ?? "📈"}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-base font-semibold text-zinc-900">{it.title}</h3>
                  {it.summary && (
                    <p className="mt-0.5 line-clamp-2 text-xs text-zinc-600">{it.summary}</p>
                  )}
                </div>
              </div>

              {/* KPI バッジ */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  {it.metric}
                </span>
                {it.metricLabel && (
                  <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 text-[11px] text-zinc-600">
                    {it.metricLabel}
                  </span>
                )}
              </div>

              {/* Before / After */}
              {(it.before || it.after) && (
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  {it.before && (
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-2">
                      <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-500">Before</p>
                      <p className="mt-0.5 font-medium text-zinc-800">{it.before}</p>
                    </div>
                  )}
                  {it.after && (
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-2">
                      <p className="text-[10px] font-medium uppercase tracking-wide text-emerald-600">After</p>
                      <p className="mt-0.5 font-medium text-emerald-800">{it.after}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Evidence */}
              {/* {it.evidence && it.evidence.length > 0 && (
                <div className="mt-3 rounded-lg bg-zinc-50 p-3 text-xs ring-1 ring-zinc-200">
                  <p className="mb-1 font-medium text-zinc-700">検証・根拠</p>
                  <ul className="list-disc space-y-1 pl-5 text-zinc-600">
                    {it.evidence.map((ev, idx) => (
                      <li key={idx} className="marker:text-zinc-400">
                        {ev}
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}

              {/* Hoverアクセント */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 blur-lg transition group-hover:opacity-100" style={{
                background:
                  "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(16,185,129,0.08), transparent 40%)",
              }} />
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ---- サンプル（そのまま貼り付けて動作確認可能） ----
export const SAMPLE_ITEMS: OutcomeItem[] = [
  {
    title: "内観パース量産（広告・提案用）",
    metric: "週3件を自走制作",
    metricLabel: "生産性",
    summary: "ラフ受領〜レンダリング〜レタッチまでを一人で完結。",
    before: "外注依存・社内制作は月1件",
    after: "社内制作で週3件（1件あたり4〜6h）",
    evidence: [
      "テンプレGLB＋マテリアルライブラリで初速化（プリセット20種）",
      "レビュー基準チェックリストに基づく合否判定（80点合格）",
    ],
    icon: "🧱",
  },
//   {
//     title: "BIM/図面からの起こし",
//     metric: "制作工数▲30%",
//     metricLabel: "時間短縮",
//     summary: "BIM/2D図面→ベースモデル化→テクスチャ→ライティングの最短手順を習得。",
//     before: "新規案件で毎回ゼロから建て起こし",
//     after: "プロキット活用で可視化までのリードタイム短縮",
//     evidence: [
//       "チェックポイント（壁/床/建具/什器）通過時間を週次で計測",
//       "講師レビューの改善点フィードバックをIssue化して再発防止",
//     ],
//     icon: "📐",
//   },
  {
    title: "外注コストの置換",
    metric: "¥150,000/月 削減",
    metricLabel: "コスト削減",
    summary: "定常パースを社内化（3件/月を内製）",
    before: "定常案件を外注（1件あたり¥50,000）",
    after: "月3件を新人＋レビューで内製",
    evidence: [
      "実案件サンプルの見積比較・原価試算を提出",
      "描画品質スコア80点以上を維持（ノイズ/歪み/黒潰れを評価）",
    ],
    icon: "💰",
  },
  {
    title: "広告用“映える”サムネ生成",
    metric: "CTR +0.8pt",
    metricLabel: "CV前KPI",
    summary: "SNS/LPでクリック率改善。構図・カラースクリプトを実践適用。",
    before: "一般写真素材に依存",
    after: "案件テーマに合わせた生成・レタッチ運用",
    evidence: [
      "A/Bテスト（既存→生成アセット）を2週間運用して比較",
      "光源方向/反射/被写界深度の統一ルールを運用マニュアル化",
    ],
    icon: "🎯",
  },
//   {
//     title: "レビュー運用の内製化",
//     metric: "手戻り▲40%",
//     metricLabel: "品質/工数",
//     summary: "“レビュー基準”をチームに定着させ、初回提出の合格率を向上。",
//     before: "チェック観点が属人化し指摘がバラつく",
//     after: "基準票に沿ったセルフレビュー→合格ライン80点",
//     evidence: [
//       "合格率・修正回数・所要時間の3指標をダッシュボード化",
//     ],
//     icon: "✅",
//   },
  {
    title: "提案資料のビジュアル強化",
    metric: "受注率 +10pt",
    metricLabel: "営業成果",
    summary: "パース×平面図×断面図の組版テンプレを運用。",
    before: "文字中心の提案書",
    after: "視覚重視の提案テンプレで見せ方を標準化",
    evidence: [
      "提案別の勝率をSalesログでトラッキング",
      "勝因/敗因レビューからテンプレ改修",
    ],
    icon: "📊",
  },
];
