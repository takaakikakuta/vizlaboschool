import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FlowSteps from "@/components/FlowSteps";
import FlowSteps_Campaign from "@/components/FlowSteps_Campaign";

/* =========================
   メタデータ
========================= */
export const metadata = {
  // title: "建築設計者向け 即戦力育成プログラム | 先行予約キャンペーン",
  description:
    "4か月集中・伴走コーチングで即戦力化。法人向け人材育成プログラム。先着10名限定で88万円→33万円（2026年1月開講予定）。10/15まで登録でクーポン発行・30日間返金保証。",
  openGraph: {
    title: "建築設計者向け 即戦力育成プログラム | 先行予約キャンペーン",
    description:
      "4か月集中・伴走コーチングで即戦力化。先着10名限定 88万円→33万円。10/15まで登録でクーポン発行・30日間返金保証。",
    type: "website",
  },
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90 backdrop-blur">
      {children}
    </span>
  );
}
function CapacityBar({ total = 10, reserved = 0 }: { total?: number; reserved?: number }) {
  const pct = Math.min(100, Math.round((reserved / total) * 100));
  return (
    <div className="w-full">
      <div className="mb-1 flex items-center justify-between text-xs text-white/80">
        <span>先着 {total} 名</span>
        <span>残り {Math.max(0, total - reserved)} 名</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/20">
        <div
          className="h-full bg-rose-400"
          style={{ width: `${pct}%`, transition: "width .6s ease" }}
          aria-label={`予約率 ${pct}%`}
        />
      </div>
    </div>
  );
}

/* =========================
   期間限定バナー
========================= */
function PromoBanner() {
  return (
    <div className="bg-rose-600 text-white md:mt-24 mt-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-2">
        <p className="md:text-2xl text-lg font-semibold">
          🎉 建築ビジュアライゼーションコース完成記念｜【9/30 23:59 まで】事前登録でクーポン発行
        </p>
        <p className="text-xs sm:text-sm">登録＝申し込みではありません／30日間返金保証</p>
      </div>
    </div>
  );
}

/* =========================
   HERO（オファー訴求）
========================= */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-100">
      {/* 背景格子 */}
      {/* <svg className="absolute inset-0 -z-10 h-full w-full opacity-40" aria-hidden viewBox="0 0 800 600">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="100%" stopColor="#f4f4f5" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#g)" />
        {[...Array(40)].map((_, i) => (
          <line
            key={i}
            x1={-200}
            y1={i * 18}
            x2={1000}
            y2={i * 18 - 300}
            stroke="#e4e4e7"
            strokeWidth="1"
            opacity="0.35"
          />
        ))}
      </svg> */}

      <div className="mx-auto max-w-6xl px-6 pb-8 pt-4 text-center">
        {/* <p className="mb-2 md:text-2xl text-lg font-semibold text-rose-600">
          🎉 建築CGコース作成記念｜10月15日までの事前登録者にクーポン発行中
        </p> */}

        <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 shadow-sm mr-3">
          建築設計者向け・法人研修
          <span className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:inline-block" />
          <span className="text-rose-600">4か月で“使える”を定着</span>
        </p>
        <SoftwareNote />   {/* ← これを追加 */}
        <LaunchNote />
        <h1 className="mx-auto max-w-4xl text-2xl font-bold leading-tight text-zinc-900 sm:text-5xl">
          <span className="text-rose-600">伴走コーチング</span>で“即戦力化”。<br className="hidden sm:block" />
          先着10名だけの<strong>特別オファー</strong>
        </h1>
      </div>

      {/* オファーカード */}
      <div className="relative mx-auto -mt-4 mb-10 max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-r from-zinc-900 to-zinc-800 px-6 md:py-10 py-4 shadow-2xl sm:px-10">
        <div className="relative z-10 grid gap-8 sm:grid-cols-2 sm:items-center">
          <div className="text-white">
            <div className="mb-3 flex flex-wrap gap-2">
              <Badge>法人向け</Badge>
              <Badge>建築CGコース完成記念</Badge>
              <Badge>9/30までクーポン</Badge>
              <Badge>30日間返金保証</Badge>
            </div>
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              レギュラーコース（4か月・通常<strong>88万円</strong>）
              <br className="hidden sm:block" />
              <span className="text-rose-300 underline decoration-rose-500 underline-offset-4">
                事前登録で <strong>33万円</strong>
              </span>{" "}
              で受講可能
            </h2>
            <p className="mb-6 text-sm text-white/80">
              9/30までの登録で<span className="font-semibold">建築CGコース完成記念クーポンを発行</span>（申込時に自動適用／法人名義OK）。
            </p>

            <div className="mb-6 max-w-sm">
              <CapacityBar total={10} reserved={0} />
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="/pre_register"
                className="inline-flex w-full items-center justify-center rounded-full bg-rose-500 px-6 py-3 font-semibold text-white shadow hover:bg-rose-600 sm:w-auto"
              >
                今すぐ事前登録する
              </Link>
              <a
                href="/course/archviz"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 sm:w-auto"
              >
                コース内容・カリキュラムを確認
              </a>
            </div>
          </div>

          {/* 右側ビジュアル：CGパースを勉強している様子 */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-rose-500/20 via-rose-400/10 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-inner">
              <img
                src="https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/Campaign_Hero.png"
                alt="建築CGパースを勉強している様子"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SoftwareNote() {
  return (
    <p className="mx-auto mt-2 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
      使用ソフト：Blender（無料の3DCGソフト）
    </p>
  );
}

/* =========================
   セールス要素
========================= */
function SocialProof() {
  return (
    <section className="mx-auto mt-6 max-w-6xl rounded-2xl border bg-white p-6 shadow-sm">
      <div className="grid gap-6 sm:grid-cols-3">
        {[
          { k: "属人化からの脱却", v: "標準化テンプレとチェックリスト付" },
          { k: "時間不足でも続く", v: "教材×週1コーチングで詰まり即解消" },
          { k: "社内に残る", v: "月次レポートで定着を可視化" },
        ].map((x) => (
          <div key={x.k} className="rounded-xl border bg-zinc-50 p-5">
            <p className="text-sm font-semibold text-zinc-900">{x.k}</p>
            <p className="mt-1 text-sm text-zinc-600">{x.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ValueStack() {
  const items = [
    { t: "週1マンツーマン伴走", d: "30–45分／回。進捗確認と詰まり解消、翌週計画まで。" },
    { t: "教材＆リファレンス", d: "実務で使う手順を短時間でキャッチアップ。" },
    { t: "テンプレ＆チェックリスト", d: "社内の標準化に転用可能。品質のバラつきを抑制。" },
    { t: "法人向けレポート", d: "上長・人事向けに進捗を可視化。意思決定を支援。" },
  ];
  return (
    <section id="value" className="mx-auto mt-12 max-w-6xl">
      {/* <h3 className="text-xl font-semibold">この価格に含まれるもの</h3> */}
      {/* <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {items.map((x) => (
          <div key={x.t} className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold">{x.t}</p>
            <p className="mt-1 text-sm text-zinc-600">{x.d}</p>
          </div>
        ))}
      </div> */}
      <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
        <p className="font-semibold">30日間返金保証</p>
        <p className="mt-1">
          開講日から30日以内にご満足いただけない場合は<strong>受講料を返金</strong>します（契約条件に準拠・手続き要）。
        </p>
      </div>
      {/* <p className="mt-3 text-xs text-zinc-500">※ 詳細カリキュラムは別ページでご案内しています。</p> */}
    </section>
  );
}

function PriceAnchor() {
  return (
    <section className="mx-auto mt-12 max-w-6xl">
      <div className="grid items-stretch gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h4 className="text-lg font-semibold">通常プラン（法人）</h4>
          <p className="mt-2 text-sm text-zinc-600">1名あたり</p>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-3xl font-bold">¥880,000</span>
            <span className="text-sm text-zinc-500">（税込）</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700">
            <li>・4か月／週1コーチング</li>
            <li>・テンプレ＆チェックリスト</li>
            <li>・法人向けレポート</li>
            <li>・使用ソフト：Blender（無料）</li> {/* ← 追加 */}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
          <span className="absolute right-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white">
            先行予約
          </span>
          <h4 className="text-lg font-semibold text-rose-900">今だけのオファー（先着10名）</h4>
          <p className="mt-2 text-sm text-rose-700">2026年1月開講予定／受講者差し替え可</p>
          <div className="mt-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-rose-900">¥330,000</span>
              <span className="text-sm text-rose-700">（税込）</span>
            </div>
            <p className="mt-1 text-xs text-rose-700 line-through">通常 ¥880,000</p>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-rose-900">
            <li>・内容は通常プランと同等</li>
            <li>・<strong>9/30までの登録でクーポン発行</strong>（申込時に自動適用）</li>
            <li>・<strong>30日間返金保証</strong>つき</li>
          </ul>
          <Link
            href="/pre_register"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-rose-500 px-6 py-3 font-semibold text-white shadow hover:bg-rose-600"
          >
            事前登録でクーポンゲット
          </Link>
        </div>
      </div>
      <p className="mt-3 text-xs text-zinc-500">※ 3名以上の導入は別途お見積り。助成金の活用もご相談ください。</p>
    </section>
  );
}

function ObjectionHandling() {
  const items = [
    {
      q: "忙しくて続かないのでは？",
      a: "教材と面談で“詰まり”を即時解消。次週タスクが明確になり、ムダ戻りが減ります。",
    },
    {
      q: "教えたスキルが社内に残らないのでは？",
      a: "テンプレとチェックリストを提供。担当が替わっても同じ品質基準で運用できます。",
    },
    {
      q: "まずは小さく試したい",
      a: "先行予約は少人数導入に最適。効果を見てからのスケールが可能です。",
    },
  ];
  return (
    <section className="mx-auto mt-12 max-w-6xl">
      <h3 className="text-xl font-semibold">よくある懸念への回答</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.q} className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold">{it.q}</p>
            <p className="mt-2 text-sm text-zinc-600">{it.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="mx-auto mt-12 max-w-6xl">
      <div className="rounded-2xl border bg-zinc-50 p-6">
        <h3 className="text-xl font-semibold">保証と条件</h3>
        <ul className="mt-3 space-y-2 text-sm text-zinc-700">
          <li>・<strong>30日間返金保証</strong>：開講から30日以内に申請で返金（契約条件に準拠）</li>
          <li>・<strong>クーポン発行</strong>：<span className="font-medium">9/30 23:59</span> までの登録が対象（法人名義可）</li>
          <li>・<strong>受講者差し替え可</strong>：開講前まで名簿変更に対応</li>
        </ul>
        <p className="mt-3 text-xs text-zinc-500">※ 返金・クーポンの詳細条件はお申し込み時の契約書にてご確認ください。</p>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { n: 1, t: "お申し込み", d: "先行予約フォームより。受講枠を確保します。" },
    { n: 2, t: "要件ヒアリング", d: "対象者・現状課題・ゴールをすり合わせ。" },
    { n: 3, t: "開講準備", d: "教材アクセス・面談スケジュールを設定。" },
    { n: 4, t: "開講", d: "教材学習＋週1面談で運用開始（月次レポート付）。" },
  ];
  return (
    <section className="mx-auto mt-12 max-w-6xl">
      <h3 className="text-xl font-semibold">導入までの流れ</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-xl border bg-white p-5 text-sm shadow-sm">
            <p className="text-xs font-semibold text-zinc-500">STEP {String(s.n).padStart(2, "0")}</p>
            <p className="mt-1 font-medium">{s.t}</p>
            <p className="mt-1 text-zinc-600">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="relative mx-auto mt-16 max-w-6xl overflow-hidden rounded-3xl border bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 p-10 text-center text-white">
      <div className="mb-3 flex flex-wrap items-center justify-center gap-2">
        <Badge>先着10名限定</Badge>
        <Badge>通常80万円 → 30万円</Badge>
        <Badge>9/30までクーポン</Badge>
        <Badge>30日間返金保証</Badge>
      </div>
      <h3 className="mx-auto max-w-3xl text-2xl font-bold">“今”なら、小さく始めて大きく残せる</h3>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80">
        まずは1名から。効果を見て、必要な部署へ水平展開。社内にスキルが残る仕組みを一緒に作りませんか。
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/pre_register"
          className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 font-semibold text-white shadow hover:bg-rose-600"
        >
          事前登録する
        </Link>
        {/* <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
        >
          資料請求・相談する
        </Link> */}
      </div>
    </section>
  );
}

function LaunchNote() {
  return (
    <p className="mx-auto mt-2 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
      🗓 2026年1月開講予定
    </p>
  );
}

/* =========================
   ページ本体
========================= */
export default function ArchitectCampaignLP() {
  return (
    <main className="bg-white">
      <Header />
      <PromoBanner />
      <Hero />
      <FlowSteps_Campaign/>
      {/* <SocialProof /> */}
      <ValueStack />
      <PriceAnchor />
      {/* <ObjectionHandling /> */}
      <Guarantee />
      {/* <Steps /> */}
      <BottomCTA />
      <Footer />
    </main>
  );
}
