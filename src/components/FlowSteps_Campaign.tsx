import Image from "next/image";

type Step = {
  num: string;      // "01" など
  title: string;
  desc: string;
  img: string;      // "/images/step1.jpg" など
  alt: string;
};

const steps: Step[] = [
  {
    num: "01",
    title: "初回面談（要件ヒアリング）",
    desc: "現状のスキル・業務内容・使用ツールを確認し、目標到達イメージを定義。実案件に合わせた到達指標と4か月の学習計画を作成します。",
    img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/a04bdbd798c8b78006e0eba9548e741c_t.jpeg",
    alt: "初回面談の様子",
  },
  {
    num: "02",
    title: "基礎・実践の自習（動画教材）",
    desc: "構図・ライティング・マテリアルなどを動画教材で学習。シーンテンプレートやチェックリストで短時間でも進められるタスクに分解し、制作物を提出します。",
    img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/ba9974e7940725d39b0e07dd2097e936970296c6-thumb-540xauto-7425.jpeg",
    alt: "動画教材で学習する様子",
  },
  {
    num: "03",
    title: "週1回の振り返り・個別コーチング",
    desc: "提出された制作物をもとにレビューを実施。改善点を提示し、次週の学習計画を一緒に立てます。詰まりはその場で解消します。",
    img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/common_191225_005_woman.jpg",
    alt: "オンライン面談のシーン",
  },
  {
    num: "04",
    title: "サイクルを繰り返し卒業制作へ",
    desc: "STEP2とSTEP3を繰り返すことでスキルを段階的に定着。最終的には卒業制作を完成させます。",
    img: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/schedule-kanri.jpg",
    alt: "カレンダーで進捗管理",
  },
];


export default function FlowSteps_Campaign({
  heading = "受講の流れ",
  items = steps,
}: {
  heading?: string;
  items?: Step[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
      {/* 見出し（左右ライン） */}
      <div className="mb-10 flex items-center justify-center gap-6">
        <span className="h-px w-16 bg-zinc-300" />
        <h2 className="text-xl font-bold tracking-wide text-zinc-900 sm:text-2xl">
          {heading}
        </h2>
        <span className="h-px w-16 bg-zinc-300" />
      </div>

      {/* グリッド */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s) => (
          <article
            key={s.num}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
          >
            {/* STEPヘッダー */}
            <div className="px-5 pt-5">
              <p className="text-xs font-semibold tracking-widest text-amber-600">
                STEP
              </p>
              <p className="-mt-1 text-5xl font-extrabold leading-none text-amber-500">
                {s.num}
              </p>
            </div>

            {/* 画像 */}
            <div className="mt-3">
              <Image
                src={s.img}
                alt={s.alt}
                width={640}
                height={400}
                className="h-44 w-full object-cover sm:h-48"
                priority={s.num === "01"}
              />
            </div>

            {/* 本文 */}
            <div className="space-y-2 px-5 pb-6 pt-4">
              <h3 className="text-base font-semibold text-amber-600">
                {s.title}
              </h3>
              <p className="text-sm leading-7 text-zinc-700">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
