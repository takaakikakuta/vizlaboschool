import React from "react";
import clsx from "clsx";

/** オンラインCGスクール版の「身につくスキル」セクション */
export default function CGSkills({
  className,
  title = "オンラインCGスクールで身につくスキル",
}: {
  className?: string;
  title?: string;
}) {
  const features = [
    { icon: <BulbIcon />, text: "根拠あるライティング・構図設計ができる" },
    { icon: <CodeIcon />, text: "Blenderでモデリング〜レンダリングまで一気通貫" },
    { icon: <HandshakeIcon />, text: "実案件準拠のワークフローとクライアント対応" },
    { icon: <MonitorIcon />, text: "公開後の修正や量産に強いテンプレ運用" },
  ];

  const blocks: {
    title: string;
    tools: string[];
    skills: string[];
  }[] = [
    {
      title: "CGデザイン（アーキ）",
      tools: ["Blender", "Photoshop", "PureRef", "Quixel"],
      skills: ["構図設計", "PBRマテリアル", "物理ベース光源", "ポストプロ"],
    },
    {
      title: "リアルタイム／動画",
      tools: ["Unreal Engine", "After Effects", "DaVinci Resolve"],
      skills: ["Sequencer", "カメラアニメ", "Lumen／Nanite", "ウォークスルー"],
    },
    {
      title: "パイプライン／共通スキル",
      tools: ["Google Drive", "Notion", "Trello", "Asset管理"],
      skills: ["リファレンス収集", "版管理・命名規則", "チェックリスト運用", "品質基準"],
    },
  ];

  return (
    <section className={clsx("w-full bg-rose-100 md:py-12 py-4", className)}>
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-bold text-zinc-900 sm:text-3xl">
          {title}
        </h2>

        {/* 上段：丸カプセルの特徴 */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-full border border-amber-200 bg-white px-4 py-3 shadow-sm"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-amber-100 text-amber-700">
                {f.icon}
              </span>
              <p className="text-sm text-zinc-800">{f.text}</p>
            </div>
          ))}
        </div>

        {/* 中段：カテゴリーカード（左右） */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {blocks.slice(0, 2).map((b) => (
            <SkillBlock key={b.title} {...b} />
          ))}
        </div>

        {/* 下段：横長カード */}
        <div className="mt-5">
          <SkillBlock {...blocks[2]} wide />
        </div>
      </div>
    </section>
  );
}

/* ===== Sub Components ===== */

function SkillBlock({
  title,
  tools,
  skills,
  wide = false,
}: {
  title: string;
  tools: string[];
  skills: string[];
  wide?: boolean;
}) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-2xl border border-amber-200 bg-white p-4 shadow-sm sm:p-5",
        wide && "md:col-span-2"
      )}
    >
      {/* リボン */}
      <div className="mb-3 inline-flex items-center rounded-md bg-emerald-700 px-3 py-1 text-xs font-semibold text-white">
        {title}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <InfoBox label="ツール" items={tools} />
        <InfoBox label="スキル" items={skills} />
      </div>
    </div>
  );
}

function InfoBox({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4">
      <p className="text-xs font-semibold text-zinc-500">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===== Inline Icons (No external deps) ===== */
function BulbIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 18h6m-5 3h4M6 10a6 6 0 1112 0c0 2.2-1.2 3.6-2.2 4.6-.5.5-.8 1.1-.8 1.8H9c0-.7-.3-1.3-.8-1.8C7.2 13.6 6 12.2 6 10z" />
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 16l-4-4 4-4M16 8l4 4-4 4M10 20l4-16" />
    </svg>
  );
}
function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 12l3 3a2 2 0 003-3l-3-3M12 12L9 9a2 2 0 10-3 3l3 3M12 12l-2 2m4-4l2-2" />
      <path d="M3 7l4-1 5 4M21 7l-4-1-5 4" />
    </svg>
  );
}
function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
