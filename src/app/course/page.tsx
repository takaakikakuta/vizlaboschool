"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * 提供物：アーキビジュアライゼーション／エンジニアリングビジュアライゼーションの2コース紹介ページ
 * - Next.js(App Router)想定の単一ファイルコンポーネント
 * - 依存：Tailwind CSS のみ（shadcn等に依存しません）
 * - セクション：Hero / コース概要カード / カリキュラム / 受講対象 / よくある質問 / CTA
 * - a[href="#..."] でページ内リンク
 */

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-800">
      {/* ===== Hero ===== */}
      <Header/>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]">
          <svg viewBox="0 0 1200 600" className="h-full w-full">
            <defs>
              <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopOpacity="1"/>
                <stop offset="100%" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <g fill="none" stroke="currentColor" className="text-zinc-200">
              {Array.from({ length: 20 }).map((_, i) => (
                <circle key={i} cx={600} cy={300} r={30 + i * 30} opacity={0.4} />
              ))}
            </g>
          </svg>
        </div>
        <div className="mx-auto max-w-6xl px-4 pt-20">
          <p className="text-xs font-semibold tracking-widest text-emerald-600">COURSES</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-zinc-900 sm:text-5xl">
            ビジュアライゼーションで<br className="hidden sm:block" />
            伝わるデザインと説得力を。
          </h1>
          <p className="mt-4 max-w-3xl text-base text-zinc-600 sm:text-lg">
            「建築ビジュアライゼーションコース」と「エンジニアリングビジュアライゼーションコース」の二本立て。建築の空間表現から産業機器のテクニカル表現まで、現場で使えるスキルを体系的に学べます。
          </p>
          {/* <div className="mt-6 flex flex-wrap gap-3">
            <a href="#arch" className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-zinc-50">アーキコースを見る</a>
            <a href="#eng" className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-zinc-50">エンジコースを見る</a>
          </div> */}
        </div>
      </section>

      {/* ===== Sticky in-page nav ===== */}
      <nav className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="flex flex-wrap gap-2 py-3 text-sm font-medium text-zinc-700">
            <li><a href="#overview" className="rounded-md px-3 py-1.5 hover:bg-zinc-100">概要</a></li>
            {/* <li><a href="#curriculum" className="rounded-md px-3 py-1.5 hover:bg-zinc-100">カリキュラム</a></li> */}
            <li><a href="#audience" className="rounded-md px-3 py-1.5 hover:bg-zinc-100">受講対象</a></li>
            <li><a href="#faq" className="rounded-md px-3 py-1.5 hover:bg-zinc-100">FAQ</a></li>
            {/* <li className="ml-auto"><a href="#apply" className="rounded-full bg-emerald-600 px-4 py-1.5 text-white hover:bg-emerald-700">申し込む</a></li> */}
          </ul>
        </div>
      </nav>

      {/* ===== 概要 ===== */}
      <section id="overview" className="mx-auto max-w-6xl px-4 md:py-12 py-4">
        <div className="grid gap-6 md:grid-cols-2">
          <CourseCard
            id="arch"
            badge="建築・空間表現"
            titleJP="建築ビジュアライゼーションコース"
            titleEN="Architectural Visualization"
            points={[
              "建築・インテリアの光と質感をフォトリアルに再現",
              "カメラワークと構図で“伝わる”1枚を設計",
              "マテリアル／ライティング／レンダリングの実践",
            ]}
            ctaLabel="コース詳細"
            link="/course/archviz"
          />

          <CourseCard
            id="eng"
            badge="産業機器・テクニカル表現"
            titleJP="エンジニアリングビジュアライゼーションコース"
            titleEN="Engineering Visualization"
            points={[
              "CADインポートから軽量化・分解図・断面表現まで",
              "動作・構造を理解させるテクニカル演出",
              "用途提案・安全教育・営業資料まで活用",
            ]}
            ctaLabel="準備中"
            link="#"
            comingSoon
          />
        </div>
      </section>

      {/* ===== 受講対象 ===== */}
      <section id="audience" className="mx-auto max-w-6xl px-4 md:py-12 py-4">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">どんな人に向いている？</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <AudienceCard
            title="アーキビジュアライゼーション"
            items={[
              "建築・内装・不動産の提案資料を強化したい",
              "フォトリアルな静止画・短尺動画を制作したい",
              "小規模案件でも“説得力のある一枚”で勝ちたい",
            ]}
          />
          <AudienceCard
            title="エンジニアリングビジュアライゼーション"
            items={[
              "産業機器の構造・動作をわかりやすく伝えたい",
              "営業・保守・安全教育で使えるビジュアルを作りたい",
              "CADを活かした3D可視化の内製化を進めたい",
            ]}
          />
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">よくある質問</h2>
          <div className="mt-6 space-y-3">
            <FaqItem q="どのソフトで学べますか？" a="Blenderをベースに進行します。必要に応じて他ツールとの連携（CAD→Blender、Photoshop等）にも触れます。" />
            <FaqItem q="初心者でも大丈夫？" a="大丈夫です。各コースとも基礎から段階的に進み、最終的に実務レベルの成果物制作まで到達します。" />
            <FaqItem q="実務にすぐ使える成果物は作れますか？" a="テンプレート化した提案書・静止画・短尺動画の制作を課題として用意します。納品形式の作法も扱います。" />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="apply" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-rose-900 sm:text-3xl">まずは無料相談から</h2>
          <p className="mx-auto mt-2 max-w-2xl text-rose-900/80">
            コース内容・日程・社内研修向けカスタマイズなど、ニーズに合わせたプランをご提案します。
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/Contact" className="inline-flex items-center rounded-full bg-rose-600 px-5 py-2.5 text-white shadow-sm hover:bg-rose-700">問い合わせる</Link>
            {/* <a href="#overview" className="inline-flex items-center rounded-full border border-rose-300 bg-white px-5 py-2.5 text-rose-700 hover:bg-emerald-50">もう一度見る</a> */}
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 pb-12 text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Vizlabo School</p>
      </footer>
      <Footer/>
    </main>
  );
}

/* ========= Sub Components ========= */
function CourseCard({
  id,
  badge,
  titleJP,
  titleEN,
  points,
  ctaLabel,
  link,
  comingSoon = false,
}: {
  id: string;
  badge: string;
  titleJP: string;
  titleEN: string;
  points: string[];
  ctaLabel: string;
  link: string;
  comingSoon?: boolean;
}) {
  return (
    <div id={id} className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-100" />
      <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-600">
        {badge}
      </span>
      <h3 className="mt-3 text-xl font-bold text-zinc-900">{titleJP}</h3>
      <p className="text-sm text-zinc-500">{titleEN}</p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-700">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5">
        {comingSoon ? (
          <span
            className="inline-flex items-center rounded-full bg-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-500 cursor-not-allowed"
            aria-disabled="true"
          >
            準備中
          </span>
        ) : (
          <a
            href={link}
            className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-50"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </div>
  );
}

function AudienceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-zinc-700">
        {items.map((t, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-zinc-400" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
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
