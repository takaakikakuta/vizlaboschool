import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Campaign from "@/components/Campaign"
import Breadcrumbs from "@/components/Breadcrumbs";

// ---- メタデータ ----
export const metadata = {
  title: "コース一覧 | オンラインCGコーチング",
  description:
    "スピード／レギュラー／マスターの3コース。基礎の動画自習＋週1面談、サンプル制作（週1作品・面談60分）、卒業制作（実務案件または上位課題）で実務力を定着させます。",
};

// 料金表示のフォーマッタ
const formatJPY = (n: number) => `¥${n.toLocaleString("ja-JP")}` as const;

// ---- データ定義 ----
type PhaseKey = "video" | "sample" | "final";

const PHASES: { key: PhaseKey; label: string; summary: string; meeting: string; href: string }[] = [
  {
    key: "video",
    label: "基礎（動画自習＋面談）",
    summary: "まずは動画で基礎を自習。週1回の30分面談で進捗管理と詰まり解消を行います。",
    meeting: "週1回／30分（進捗管理）",
    href: "/course/archviz/basics",          // ← 追加
  },
  {
    key: "sample",
    label: "サンプル制作",
    summary: "提供サンプルを見本に制作。複雑形状も扱うため、面談は60分。質問がなくても講師から補足説明を実施します。",
    meeting: "週1回／60分（技術解説・添削）",
    href: "/course/archviz/sample",          // ← 追加
  },
  {
    key: "final",
    label: "最終実践課題",
    summary: "実務案件またはサンプルより難度の高い課題に挑戦。提出物はポートフォリオ化します。",
    meeting: "週1回／60分（レビュー・仕上げ）",
    href: "/course/archviz/final",           // ← 追加
  },
];

const COURSES = [
  {
    key: "speed",
    title: "スピードコース(3ヵ月)",
    durations: { video: "1か月", sample: "1か月", final: "1か月" },
    price: 660_000,
    blurb:
      "短期集中で基礎〜制作〜仕上げまでを一気通貫。まずはスピード感を持って“作れる状態”へ。",
  },
  {
    key: "regular",
    title: "レギュラーコース(4ヵ月)",
    durations: { video: "1.5か月", sample: "1.5か月", final: "1か月" },
    price: 880_000,
    blurb:
      "十分な演習量を確保しつつ、安定した制作フローを定着。現場投入を見据えた標準コース。",
  },
  {
    key: "long",
    title: "マスターコース(6ヵ月)",
    durations: { video: "2か月", sample: "2か月", final: "2か月" },
    price: 1_100_000,
    blurb:
      "難度の高い形状・大規模シーンにも対応。品質基準・社内標準の内製化まで視野に入れる拡張プラン。",
  },
];

// ---- 小物UI ----
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 shadow-sm">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-center justify-center gap-6">
      <span className="h-px w-16 bg-zinc-300 hidden md:flex" />
      <h2 className="text-xl font-bold tracking-wide text-zinc-900 sm:text-2xl">
        {children}
      </h2>
      <span className="h-px w-16 bg-zinc-300 hidden md:flex" />
    </div>
  );
}

// ---- コンポーネント本体 ----
export default function CoursePage() {
  return (
    <main className="bg-white">
      <Header />
      <div className="mx-auto max-w-6xl px-4 py-2 mt-24">
        <Breadcrumbs
          // 自動生成でOKだが、表示名を日本語にしたい場合は titleMap を使う
          titleMap={{
            course: "コース",
            archviz: "建築ビジュアライゼーション",
            engineering: "エンジニアリング",
          }}
          homeLabel="トップ"
          homeHref="/"
          separator="›"
        />
      </div>

      {/* ページ全体の見出し（h1） */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-6 text-center">
          <h1 className="text-3xl font-bold text-zinc-900 sm:text-5xl">
            建築ビジュアライゼーションコース一覧
          </h1>
          <p className="mt-2 text-sm text-zinc-600 sm:text-base">
            実務で通用するCGパース力を身につけるための3つのコース
          </p>
        </div>
      </section>

      {/* HERO */}
     <section className="bg-gradient-to-b from-white via-zinc-50 to-white">
      <div className="mx-auto max-w-6xl px-6 md:py-4 text-center">
        <Pill>学習のステップ</Pill>
        <h2 className="mx-auto mt-4 max-w-4xl text-2xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          実務で通用する力を身につける<br />
          <span className="text-rose-600">3段階カリキュラム</span>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-zinc-600 sm:text-base">
          基礎は動画で効率よくインプット。週1面談で詰まりを解消しながら、
          サンプル制作を経て最終課題へ。段階的に「使える制作力」を定着させます。
        </p>
      </div>
    </section>

       <section className="mx-auto max-w-6xl px-6 py-4">
        <SectionTitle>カリキュラムの考え方</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-3">
            {PHASES.map((p, idx) => (
            <div key={p.key} className="rounded-2xl border bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold tracking-widest text-emerald-700">
                STEP {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-base font-semibold text-zinc-900">{p.label}</h3>
                <p className="mt-2 text-sm text-zinc-600">{p.summary}</p>
                <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
                面談：{p.meeting}
                </div>

                {/* ▼ 追加：詳細ボタン */}
                <Link
                href={p.href}
                className="mt-5 inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white px-4 py-2 text-xs font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
                >
                詳細を見る →
                </Link>
            </div>
            ))}
        </div>
        <p className="mt-4 text-xs text-zinc-500">
            ※ サンプル制作フェーズは <span className="font-medium">原則「週1で1作品」</span> のペースで進めます（難度により調整）。
        </p>
     </section>

      {/* HERO */}
      <section className="bg-gradient-to-b from-white via-zinc-50 to-white md:mt-6 mt-0">
        <div className="mx-auto max-w-6xl px-6 md:pb-14 pb-4 pt-4 text-center">
          <Pill>コースは3種類</Pill>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            目的とスケジュールに合わせて選べる<br />
            <span className="text-rose-600"> 3つのコース</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-zinc-600 sm:text-base">
            基礎は動画で効率よく自習。週1面談で詰まりを解消しながら、サンプル制作を経て卒業制作へ。
            実務で通用するCGパースの制作力を、段階的に定着させます。
          </p>
        </div>
      </section>

      {/* コースカード */}
      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <article
              key={c.key}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
            >
              <div className="bg-zinc-50 px-6 py-5">
                <h3 className="text-lg font-bold text-zinc-900">{c.title}</h3>
                <p className="mt-1 text-sm text-zinc-600">{c.blurb}</p>

                {/* 料金表示 */}
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-rose-600">
                    {formatJPY(c.price)}
                  </span>
                  <span className="text-xs text-zinc-500">（税込）</span>
                </div>
              </div>

              <div className="grid flex-1 grid-cols-3 border-t border-zinc-100">
                {PHASES.map((p) => (
                  <div key={p.key} className="px-4 py-5">
                    <p className="text-[11px] font-semibold text-emerald-700">
                      {p.label}
                    </p>
                    <p className="mt-1 text-lg font-bold text-zinc-900">
                      {
                        // @ts-ignore
                        c.durations[p.key]
                      }
                    </p>
                    <p className="mt-1 text-[11px] text-zinc-500">{p.meeting}</p>
                  </div>
                ))}
              </div>

              {/* <div className="border-t border-zinc-100 px-6 py-5">
                <Link
                  href="/apply"
                  className="inline-flex w-full items-center justify-center rounded-full bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-rose-700"
                >
                  このコースで申し込む
                </Link>
              </div> */}
            </article>
          ))}
        </div>
      </section>

      {/* カリキュラム（段階説明） */}
    
      <Campaign/>

      {/* 比較テーブル */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <SectionTitle>期間・料金 比較表</SectionTitle>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="min-w-[720px] w-full border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-zinc-50 text-zinc-500">
                <th className="px-4 py-3 text-left font-medium">フェーズ</th>
                {COURSES.map((c) => (
                  <th key={c.key} className="px-4 py-3 text-left font-medium">
                    {c.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-zinc-800">
              {PHASES.map((p) => (
                <tr key={p.key} className="border-t">
                  <td className="px-4 py-3 font-medium">{p.label}</td>
                  {COURSES.map((c) => (
                    <td key={c.key} className="px-4 py-3">
                      {
                        // @ts-ignore
                        c.durations[p.key]
                      }
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t bg-zinc-50 font-semibold">
                <td className="px-4 py-3">合計</td>
                {COURSES.map((c) => {
                  const sum =
                    (c.durations.video === "1.5か月" ? 1.5 : parseFloat(c.durations.video)) +
                    (c.durations.sample === "1.5か月" ? 1.5 : parseFloat(c.durations.sample)) +
                    parseFloat(c.durations.final);
                  return (
                    <td key={c.key} className="px-4 py-3">
                      {`${sum}か月`}
                    </td>
                  );
                })}
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3 font-medium">料金</td>
                {COURSES.map((c) => (
                  <td key={c.key} className="px-4 py-3">
                    <span className="font-semibold text-rose-600">
                      {formatJPY(c.price)}
                    </span>
                    <span className="ml-1 text-xs text-zinc-500">（税込）</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          ※ 表示価格は税込みです。企業導入や複数名割引、助成金の活用についてはお問い合わせください。
        </p>
      </section>

      {/* 最下部CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20 text-center">
        <p className="mb-3 text-sm font-semibold text-zinc-800">
          迷ったら <span className="text-rose-700">事前登録</span> へ
        </p>
        <Link
          href="/pre_register"
          className="inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 font-semibold text-white shadow hover:bg-rose-700"
        >
          事前登録をする
        </Link>
      </section>
      <Footer />
    </main>
  );
}
