import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "卒業制作｜コース詳細",
  description:
    "実務案件または高難度課題に挑戦。レビュー基準に沿って仕上げ、ポートフォリオを完成させます。",
};

export default function FinalDetailPage() {
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
            basics:"基礎（動画自習＋面談）",
            sample:"サンプル制作",
            final:"最終実践課題"
          }}
          homeLabel="トップ"
          homeHref="/"
          separator="›"
          />
      </div>
      <section className="mx-auto max-w-5xl px-6 pt-4">

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

       {/* 制作プロセス（参考） */}
          <section className="mt-12">
            <h2 className="text-base font-semibold text-zinc-900 mb-4">
              参考：進行イメージ（4週間）
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Week 1 */}
              <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
                <img
                  src="https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/week1.png"
                  alt="企画・構図設計"
                  className="w-full md:h-64 h-40 object-cover"
                />
                <div className="p-5">
                  <p className="text-xs font-semibold text-emerald-700">Week 1</p>
                  <h3 className="mt-1 text-sm font-semibold text-zinc-900">
                    企画・構図設計
                  </h3>
                  <p className="mt-2 text-xs text-zinc-600">
                    建築図面を読み取り、用途・訴求ポイントを決定。
                    ラフパースでカメラアングルや構図を検討します。
                  </p>
                </div>
              </div>

              {/* Week 2 */}
              <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
                <img
                  src="https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/week2.png"
                  alt="モデリング・マテリアル"
                  className="w-full md:h-64 h-40 object-cover"
                />
                <div className="p-5">
                  <p className="text-xs font-semibold text-emerald-700">Week 2</p>
                  <h3 className="mt-1 text-sm font-semibold text-zinc-900">
                    モデリング・マテリアル
                  </h3>
                  <p className="mt-2 text-xs text-zinc-600">
                    建物モデルや主要オブジェクトを制作。
                    質感設定やライティングの下地を整えます。
                  </p>
                </div>
              </div>

              {/* Week 3 */}
              <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
                <img
                  src="https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/week3.png"
                  alt="ライティング・レンダリング"
                  className="w-full md:h-64 h-40 object-cover"
                />
                <div className="p-5">
                  <p className="text-xs font-semibold text-emerald-700">Week 3</p>
                  <h3 className="mt-1 text-sm font-semibold text-zinc-900">
                    ライティング・レンダリング
                  </h3>
                  <p className="mt-2 text-xs text-zinc-600">
                    光源設計や背景演出を行い、最終品質に近いレンダリングを試作します。
                  </p>
                </div>
              </div>

              {/* Week 4 */}
              <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
                <img
                  src="https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/week4.png"
                  alt="仕上げ・提出"
                  className="w-full md:h-64 h-40 object-cover"
                />
                <div className="p-5">
                  <p className="text-xs font-semibold text-emerald-700">Week 4</p>
                  <h3 className="mt-1 text-sm font-semibold text-zinc-900">
                    仕上げ・提出
                  </h3>
                  <p className="mt-2 text-xs text-zinc-600">
                    ポストプロセスや色調整を行い、成果物を提出。
                    講師レビューを受けて最終ブラッシュアップします。
                  </p>
                </div>
              </div>

            </div>

            <p className="mt-3 text-xs text-zinc-500">
              ※ 実際の進行は課題内容や進捗により変動します（目安としてご参照ください）。
            </p>
          </section>



        <div className="mt-6 rounded-2xl border bg-emerald-50 p-5 text-sm text-emerald-800">
          注意：実案件の場合はNDAに準拠します。公開不可の場合でも、評価は非公開環境で実施可能です。
        </div>
      </section>
      <Footer />
    </main>
  );
}
