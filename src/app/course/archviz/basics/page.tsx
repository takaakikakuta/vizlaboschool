import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import LessonList, { Lesson } from "@/components/LessonList";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "基礎（動画自習＋面談）｜コース詳細",
  description:
    "動画で基礎を自習し、週1の30分面談で進捗管理と詰まり解消を行うフェーズの詳細。全21トピックのカリキュラム。",
};

const LESSONS: Lesson[] = [
  { title: "インストール＆7項目の初期設定", desc: "インストール、単位・色管理・GPU・自動保存など推奨初期設定をまとめて整えます。" },
  { title: "画面構成と基本的な操作方法", desc: "UIの見方、ビュー操作、選択/移動/回転/拡大縮小など“迷わない”ための基礎操作。" },
  { title: "画面の分割・統合", desc: "エディタの分割/結合、よく使うレイアウトの保存で作業効率を上げます。" },
  { title: "頂点・辺・面の基本", desc: "メッシュの仕組みと編集モードの考え方を理解し、破綻しない形づくりを学びます。" },
  { title: "押し出し／面の差し込み", desc: "Extrude / Insetで厚みや溝を素早く作るコツと注意点。" },
  { title: "選択の基本／いろいろな選択方法", desc: "矩形/投げ縄/ループ/リング/拡張縮小など、選択の時短テクを網羅。" },
  { title: "プロポーショナル編集／8つの減衰タイプ", desc: "広い範囲をなめらかに変形。減衰カーブの使い分けで自然な形状に。" },
  { title: "ループカット", desc: "ループ追加・等間隔・スライド。クリーンなトポロジを保つ基本技。" },
  { title: "ナイフツール・ナイフ投影", desc: "任意カットと外形投影でエッジを正確に作成します。" },
  { title: "削除と溶解", desc: "Delete／Dissolve の違いと、形を保ったまま要素を整理する方法。" },
  { title: "分割・分離・切り裂き・複製", desc: "Separate / Split / Duplicate の使いどころと安全な分割手順。" },
  { title: "統合とブーリアン", desc: "Merge/Join と Boolean演算の基礎。非多様体やノイズの回避策も解説。" },
  { title: "ペアレント／親子関係", desc: "階層化で管理を楽に。トランスフォームの継承と原点の扱い。" },
  { title: "フィルで面貼り", desc: "穴埋め・Grid Fill・Beautifyなど、面をきれいに閉じるテクニック。" },
  { title: "ピボットポイント", desc: "ピボット／原点の設定と、正確な回転・スケールのための活用法。" },
  { title: "モディファイヤー", desc: "Subdivision, Array, Mirror など非破壊編集の導入とワークフロー。" },
  { title: "マテリアルの超基本", desc: "PBRの考え方と BaseColor / Roughness / Normal の役割を把握。" },
  { title: "カメラの設定", desc: "焦点距離・センサーサイズ・DOF・構図ガイドで“伝わる画角”を作る。" },
  { title: "レンダリングのやり方・設定", desc: "エンジン選択、サンプル/デノイズ、出力解像度と形式までを一気通貫。" },
  { title: "【+α講座】マテリアル設定の基本", desc: "材質テンプレの構成、テクスチャ管理、色合わせのコツを追加解説。" },
  { title: "【+α講座】ノード設定の基本", desc: "Shader Editor入門。Mix/Mask/UVの基礎で応用表現への足がかりを作ります。" },
];

// ▼ 追加：CGパース入門（4テーマ）
const CG_INTRO: Lesson[] = [
  {
    title: "太陽光の入る白い部屋",
    desc: "Sun/Sky と HDRI の使い分け、露出とホワイトバランス、白素材での色被り対策、窓際のハイライト管理とポストプロの基本。",
  },
  {
    title: "柔らかな光に迎えられる和の玄関",
    desc: "面光源と色温度設計、障子の透過（Transmission/SSSの基礎）、木材の法線・粗さ表現、温白色のライティングで情緒を演出。",
  },
  {
    title: "タイルが映えるサニタリースペース",
    desc: "PBRテクスチャの正しい適用（Base/Rough/Normal/Height）、目地と面取り、半光沢の反射コントロール、ミラー反射のノイズ対策。",
  },
  {
    title: "グリーンタイルが魅せるブランドショップ",
    desc: "アクセントカラーの見せ方、ミックス照明（環境＋スポット）の設計、Arrayでのタイル配置、ガラス/金属のマテリアル整理と構図作り。",
  },
];

export default function BasicsDetailPage() {
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
            basics:"基礎（動画自習＋面談）"
          }}
          homeLabel="トップ"
          homeHref="/"
          separator="›"
          />
      </div>

      <section className="mx-auto max-w-5xl px-6 md:pt-4 pt-4">

        <h1 className="text-2xl font-bold text-zinc-900">基礎（動画自習＋面談）</h1>
        <p className="mt-3 text-zinc-600">
          まずは動画で基礎を自習。週1回の30分面談で進捗を確認し、詰まりを素早く解消します。
          本フェーズでは、制作の土台となる操作・ワークフロー・命名規則・ライト＆マテリアルの基礎を体系化します。
        </p>

        {/* Blender操作（全21トピック） */}
        <div className="mt-8">
          <h2 className="mb-4 text-base font-semibold text-zinc-900">Blender操作（全21トピック）</h2>
          <LessonList items={LESSONS} />
          <p className="mt-3 text-xs text-zinc-500">※ 「【+α講座】」は応用編です。理解度に応じて順序を前後します。</p>
        </div>

        {/* ▼ 追加：CGパース入門（4テーマ） */}
        <div className="mt-12">
          <h2 className="mb-4 text-base font-semibold text-zinc-900">CGパース入門（4テーマ）</h2>
          <LessonList items={CG_INTRO} />
          <p className="mt-3 text-xs text-zinc-500">
            ※ 各テーマはテンプレート／チェックリスト付き。作例は課題として提出し、面談で添削します。
          </p>
        </div>

        {/* 面談と進め方 */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold">到達目標</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              <li>基本操作・UI・ショートカットの定着</li>
              <li>モデリングの基礎（頂点／辺／面・編集手法）</li>
              <li>ライト・マテリアル・カメラの基礎設定</li>
              <li>レンダリング設定の基礎とノイズ抑制</li>
              <li>シーン管理（命名規則・レイヤ・アセット）</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold">面談（週1／30分）</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              <li>進捗レビューと詰まりの解消</li>
              <li>翌週の視聴リスト／演習の指示</li>
              <li>学習ログの確認と改善提案</li>
            </ul>
            <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
              面談は録画・議事メモの提供可（希望者のみ）
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-3">
          <Link href="/course/archviz/sample" className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50">
            次：サンプル制作の詳細 →
          </Link>
          <Link href="/pre_register" className="inline-flex items-center justify-center rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white hover:bg-rose-700">
            事前登録をする
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
