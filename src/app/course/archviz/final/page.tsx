import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "卒業制作｜コース詳細",
  description:
    "実務案件または高難度課題に挑戦。レビュー基準に沿って仕上げ、ポートフォリオを完成させます。",
};

export default function FinalDetailPage() {
  return (
    <main className="bg-white">
      <Header />
      <section className="mx-auto max-w-5xl px-6 md:pt-12 pt-20">
        <nav className="mb-6 text-sm text-zinc-500">
          <Link href="/course" className="hover:underline">
            ← コース一覧に戻る
          </Link>
        </nav>

        <h1 className="text-2xl font-bold text-zinc-900">最終実践課題</h1>
        <p className="mt-3 text-zinc-600">
          実務案件（守秘契約の範囲内）またはサンプルより難度の高い課題を選択。
          企画〜仕上げまでを自律的に遂行し、レビュー基準に沿って完成度を高めます。
        </p>

        {/* 3つのパターン */}
        <div className="mt-8 space-y-4">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-zinc-900">卒業課題</h2>
            <p className="mt-2 text-sm text-zinc-700">
              こちらで用意した建築図面をもとに、CGパースを制作します。
              学習内容の総復習として取り組みます。
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-zinc-900">卒業制作</h2>
            <p className="mt-2 text-sm text-zinc-700">
              受講者自身が用意した建築図面をもとに、CGパースを制作します。
              自身の関心領域や得意分野を活かした制作が可能です。
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-zinc-900">実案件</h2>
            <p className="mt-2 text-sm text-zinc-700">
              受講者が所属する法人の実案件をもとに、CGパースを制作します。
              要望があればNDA（秘密保持契約）を締結し、非公開環境で評価を行います。
            </p>
          </div>
        </div>

        {/* レビュー基準・成果物 */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold">レビュー基準（例）</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
              <li>構図・視線誘導・情報量の最適化</li>
              <li>光と質感の一貫性、現実感の担保</li>
              <li>背景・小物の説得力、ノイズ管理</li>
              <li>納品要件（解像度・形式・色空間）の適合</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold">成果物・提出</h2>
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
              <li>最終画像（複数アングル可）＋工程メモ</li>
              <li>シーンファイル（可能な範囲で提出）</li>
              <li>ポートフォリオページ（テンプレ提供）</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border bg-emerald-50 p-5 text-sm text-emerald-800">
          注意：実案件の場合はNDAに準拠します。公開不可の場合でも、評価は非公開環境で実施可能です。
        </div>
      </section>
      <Footer />
    </main>
  );
}
