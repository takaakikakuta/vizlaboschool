import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "サンプル制作｜コース詳細",
  description:
    "提供サンプルを見本に制作。複雑形状も扱うため面談は60分。質問がなくても講師から補足解説を実施。",
};

type SampleItem = {
  title: string;
  img: string;
  desc: string;
  alt?: string;
};
type Genre = {
  key: string;   // ← アンカー用ID
  title: string;
  desc: string;
  samples: SampleItem[];
};

const GENRES: Genre[] = [
  {
    key: "exterior",
    title: "外観CGパース",
    desc:
      "太陽光・環境光の設計、空気遠近・大気表現、植栽や人・車のレイアウトまで含めて“伝わる外観”を作る。昼光／夕景の切り替えと露出コントロールも習得します。",
    samples: [
      {
        title: "都市型住宅（昼光）",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/exterior1.png",
        desc:
          "Sun & Sky のバランス、白壁での色被り対策、ファサードのハイライト設計、パースの歪曲コントロールを学びます。",
      },
      {
        title: "集合住宅（夕景）",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/exterior3.png",
        desc:
          "IESライトと窓のエミッシブで“住まいの気配”を演出。青とオレンジの補色で印象的な夕景に仕上げます。",
      },
      {
        title: "公共施設（広角アングル）",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/exterior4.png",
        desc:
          "広角での歪み抑制、群衆・車両アセット配置、空気遠近と霧でスケール感を作るテクニックを扱います。",
      },
    ],
  },
  {
    key: "interior",
    title: "内観CGパース",
    desc:
      "間接光・反射・質感表現にフォーカス。家具のスケール感、被写界深度や構図ガイドで視線誘導をデザインし、清潔感〜温かみまでテイストを作り分けます。",
    samples: [
      {
        title: "LDK（白木×ファブリック）",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/interior1.png",
        desc:
          "白木のRoughness設計、ファブリックの法線・毛羽、窓際の露出制御とポストでの色調整の要点。",
      },
      {
        title: "寝室（間接照明）",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/interior2.png",
        desc:
          "面光源の配置、色温度の設計、柔らかな陰影の作り方。DOFで落ち着いた空気感を演出します。",
      },
      {
        title: "オフィス（広めのワンショット）",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/interior3.png",
        desc:
          "グレアの管理、ガラス反射の整理、床材の法線と反射、人物アセットの馴染ませまでを総合的に。",
      },
    ],
  },
  {
    key: "exterior-space",
    title: "エクステリアCGパース",
    desc:
      "外構・造園・舗装・サイン計画を一体で表現。植栽アセットの最適化、水景や石材の質感、ハイライトの作り方で“屋外の気持ちよさ”を可視化します。",
    samples: [
      {
        title: "アプローチ＋カーポート",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/exterior_space1.png",
        desc:
          "舗装のスケール感、車両の映り込み、陰の落ち方と植栽の抜け感。雨上がりの表現にも触れます。",
      },
      {
        title: "中庭テラス",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/exterior_space2.png",
        desc:
          "木陰のパターン、テクスチャの繰り返し抑制、ベンチや照明器具の質感整理で居心地を作ります。",
      },
      {
        title: "共用外構（商業施設）",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/exterior_space3.png",
        desc:
          "ピクト・サイン計画、舗装割付、ベイク×リアルタイムの併用で軽快なワークフローを実践。",
      },
    ],
  },
  {
    key: "night",
    title: "夜景・夕景CGパース（照明演出）",
    desc:
      "色温度・露出・コントラストを設計し、エミッシブ材やIESライトで“光の心地よさ”を演出。ネオンやサイン、ウィンドウの内外表現で商業的な魅力も高めます。",
    samples: [
      {
        title: "住宅外観（夕景）",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/night1.png",
        desc:
          "窓の内外差・カーテンの透過、空の色と建物の色の整合、青橙コントラストで印象を強化。",
      },
      {
        title: "商業店舗（看板＆間接光）",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/night2.png",
        desc:
          "看板の輝度設計、眩しさを抑えるグレア管理、床の反射で“光だまり”を表現します。",
      },
      {
        title: "ロビー（夜間照明）",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/night3.png",
        desc:
          "ダウンライトと間接光のレイヤ、金属・石材のハイライト整理、露出とWBの追い込みを学びます。",
      },
    ],
  },
  {
    key: "retail",
    title: "商業店舗CGパース",
    desc:
      "ブランド体験を可視化。サイン計画・什器レイアウト・動線設計を画面内で調和させ、質感と照明で“らしさ”を立ち上げます。",
    samples: [
      { title: "ロードサイド物販", img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/retail1.png", desc: "サインの視認性、ファサードの素材感、駐車場と人流の配置。" },
      { title: "テナント区画（モール）", img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/retail2.png", desc: "什器モジュール化、素材バリエ、通路側からの視線設計。" },
      { title: "カフェ＆ベーカリー", img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/retail3.png", desc: "食品系の色再現、ガラス反射整理、暖色系照明で滞在欲求を高める。" },
    ],
  },
  {
    key: "hospitality",
    title: "ホテル・大規模施設",
    desc:
      "大空間のスケール感、反復要素の最適化、マテリアルの統一感。ロビー・客室・宴会場まで、一貫した世界観で表現します。",
    samples: [
      { title: "ロビーラウンジ", img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/hospitality1.png", desc: "天井高の強調、照明レイヤ、石材・金属のハイライト管理。" },
      { title: "客室（ツイン）", img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/hospitality2.png", desc: "ベッドスプレッドの法線、窓景の露出、静けさの色調整。" },
      { title: "宴会場・ホール", img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/hospitality3.png", desc: "反復モデリングの効率化、照明シーンの切替、群衆の馴染ませ。" },
    ],
  },
  {
    key: "japanese",
    title: "日本建築",
    desc:
      "和の空間特有の“柔らかな拡散光”と自然素材の質感を再現。障子・格子・畳・漆喰・木部のPBR設計と、数寄屋の納まり感を重視します。",
    samples: [
      {
        title: "和室（床の間と縁側）",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/japanese1.png",
        desc:
          "障子越しの拡散光設定、畳目のスケールと反射、床の間の陰影設計。柱・長押の木理と艶も調整。"
      },
      {
        title: "数寄屋造の玄関土間",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/japanese2.png",
        desc:
          "三和土の微細凹凸、黒木の艶、格子戸の透け感。行灯照明の暖色で落ち着いた空気感を演出。"
      },
      {
        title: "町家外観（格子と瓦）",
        img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/sample/japanese3.png",
        desc:
          "杉格子の繰り返し最適化、瓦の法線＆ハイライト、夕景の内外コントラストで“住まいの気配”を表現。"
      }
    ]
  }
];

export default function SampleDetailPage() {
  return (
    <main className="bg-white">
      <Header />

      <section className="mx-auto max-w-5xl px-6 md:pt-12 pt-20">
        <nav className="mb-6 text-sm text-zinc-500">
          <Link href="/course" className="hover:underline">
            ← コース一覧に戻る
          </Link>
        </nav>

        <h1 className="text-2xl font-bold text-zinc-900">サンプル制作</h1>
        <p className="mt-3 text-zinc-600">
          テーマごとに用意したサンプルをトレースしながら、実制作と同じ手順で品質と速度を両立します。
          原則「週1で1作品」。難度に応じてスコープを調整します。
        </p>

        {/* 進め方とサンプル数（コース別） */}
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm text-zinc-800">
            <span className="font-semibold">基礎フェーズの面談（週1・30分）</span> で
            「卒業制作の方向性」をすり合わせ、その達成に必要なジャンルから
            <span className="font-semibold">取り組むサンプルを事前に選定</span>します。
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
              <p className="text-xs text-zinc-500">スピードコース</p>
              <p className="mt-1 text-2xl font-extrabold text-rose-600">4つ</p>
              <p className="text-[11px] text-zinc-500">目安のサンプル数</p>
            </div>
            <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
              <p className="text-xs text-zinc-500">レギュラーコース</p>
              <p className="mt-1 text-2xl font-extrabold text-rose-600">6つ</p>
              <p className="text-[11px] text-zinc-500">目安のサンプル数</p>
            </div>
            <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
              <p className="text-xs text-zinc-500">マスターコース</p>
              <p className="mt-1 text-2xl font-extrabold text-rose-600">8つ</p>
              <p className="text-[11px] text-zinc-500">目安のサンプル数</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            ※ 難度や卒業制作の要件に合わせて増減・差し替え可能です。
          </p>
        </div>

        {/* ジャンル一覧（アンカー） */}
        <div id="genre-index" className="mt-8">
            <p className="mb-2 text-xs font-semibold tracking-widest text-zinc-500">
                ジャンル一覧
            </p>

            {/* auto-fit で横幅に応じて気持ちよく折り返すグリッド */}
            <ul className="grid gap-2 [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))] sm:[grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
                {GENRES.map((g) => (
                <li key={g.key}>
                    <a
                    href={`#${g.key}`}
                    className="inline-flex w-full items-center justify-center rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 sm:text-sm"
                    >
                    {g.title}
                    </a>
                </li>
                ))}
            </ul>
        </div>


        {/* 各ジャンル（写真＋説明の横並び） */}
        <div className="mt-8 space-y-10">
          {GENRES.map((g) => (
            <article
              key={g.key}
              id={g.key}
              className="scroll-mt-24 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold text-zinc-900">{g.title}</h2>
                <a
                  href="#genre-index"
                  className="hidden text-xs text-zinc-500 hover:underline sm:inline"
                >
                  ↑ ジャンル一覧へ
                </a>
              </div>
              <p className="mt-2 text-sm leading-7 text-zinc-700">{g.desc}</p>

              <div className="mt-5 space-y-4">
                {g.samples.map((s, i) => (
                  <div
                    key={i}
                    className="grid items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-3 sm:grid-cols-2"
                  >
                    {/* 写真 */}
                    <div className="relative h-44 w-full overflow-hidden rounded-xl">
                      <Image
                        src={s.img}
                        alt={s.alt ?? s.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 50vw, 100vw"
                      />
                    </div>

                    {/* 説明 */}
                    <div className="px-1 py-1">
                      <h3 className="text-sm font-semibold text-zinc-900">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-zinc-700">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:hidden">
                <a
                  href="#genre-index"
                  className="inline-flex rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700"
                >
                  ↑ ジャンル一覧へ戻る
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* 面談案内（据え置き） */}
        <div className="mt-10 rounded-2xl border bg-emerald-50 p-5 text-sm text-emerald-800">
          面談（週1／60分）：提出作品のライブ添削、再現できない箇所の実演、次週テーマとテンプレ配布。
          成果物は「完成画像／シーンファイル／チェックリスト」。テンプレ・プリセットは社内標準化にも活用可能。
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-3">
          <Link
            href="/course//archviz/final"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
          >
            次：卒業制作の詳細 →
          </Link>
          <Link
            href="/pre_register"
            className="inline-flex items-center justify-center rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white hover:bg-rose-700"
          >
            事前登録をする
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
