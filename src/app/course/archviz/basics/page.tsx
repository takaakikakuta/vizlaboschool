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

// 事前に Lesson / IndexItem 型は以下を想定
// export type IndexItem = { label: string; video?: string; poster?: string; tip?: string };
// export type Lesson = { title: string; desc: string; index?: IndexItem[] };

const LESSONS: Lesson[] = [
  {
    title: "インストール＆7項目の初期設定",
    desc: "インストール、単位・色管理・GPU・自動保存など推奨初期設定をまとめて整えます。",
    index: [
      { label: "インストールと日本語化", video: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/basics/Blender_tips_download.mp4", poster: "/images/install-setup-1.jpg", tip: "LTS版を推奨。Addon互換も安定。" },
      { label: "単位・色管理・GPU設定", video: "/videos/install-setup-2.mp4", poster: "/images/install-setup-2.jpg", tip: "メーター/ACES/OptiXの基本。" },
      { label: "自動保存とファイル管理", video: "/videos/install-setup-3.mp4", poster: "/images/install-setup-3.jpg", tip: "Auto Saveとバージョン管理。" },
    ],
  },
  {
    title: "画面構成と基本的な操作方法",
    desc: "UIの見方、ビュー操作、選択/移動/回転/拡大縮小など“迷わない”ための基礎操作。",
    index: [
      { label: "UI概要とワークスペース", video: "/videos/ui-basics-1.mp4", poster: "/images/ui-basics-1.jpg", tip: "必要なエディタだけ見せる。" },
      { label: "ビュー操作（回転・パン・ズーム）", video: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/basics/Blender_tips_control.mp4", poster: "/images/ui-basics-2.jpg", tip: "テンキー＆マウス操作の統一。" },
      { label: "移動/回転/拡大縮小の基礎", video: "/videos/ui-basics-3.mp4", poster: "/images/ui-basics-3.jpg", tip: "G/R/Sと軸制約を体で覚える。" },
    ],
  },
  {
    title: "画面の分割・統合",
    desc: "エディタの分割/結合、よく使うレイアウトの保存で作業効率を上げます。",
    // index: [
    //   { label: "エディタ分割と結合", video: "/videos/split-join-1.mp4", poster: "/images/split-join-1.jpg", tip: "ドラッグの方向で判定を意識。" },
    //   { label: "レイアウトの保存", video: "/videos/split-join-2.mp4", poster: "/images/split-join-2.jpg", tip: "Workspacesをプリセット化。" },
    //   { label: "便利エディタの組み合わせ", video: "/videos/split-join-3.mp4", poster: "/images/split-join-3.jpg", tip: "3D View + Shader + Outliner。" },
    // ],
  },
  {
    title: "頂点・辺・面の基本",
    desc: "メッシュの仕組みと編集モードの考え方を理解し、破綻しない形づくりを学びます。",
    index: [
      { label: "編集モードと要素選択", video: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/basics/Blender_tips_editmode.mp4", poster: "/images/mesh-basics-1.jpg", tip: "1/2/3キーで頂点/辺/面。" },
      { label: "法線と面の向き", video: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/basics/Blender_tips_normal.mp4", poster: "/images/mesh-basics-2.jpg", tip: "裏表の青/赤を確認。" },
      { label: "トポロジの基本", video: "/videos/mesh-basics-3.mp4", poster: "/images/mesh-basics-3.jpg", tip: "四角面主体で破綻回避。" },
    ],
  },
  {
    title: "基本のモデリング（押し出し／面の差し込み）",
    desc: "Extrude / Insetで厚みや溝を素早く作るコツと注意点。",
    index: [
      { label: "E：押し出しの基本", video: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/basics/Blender_tips_exclude.mp4", poster: "/images/extrude-basic.jpg", tip: "面を選択してEキー→マウス移動。厚み付けの基本操作" },
      { label: "I：面の差し込み", video: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/basics/Blender_tips_insert.mp4", poster: "/images/inset-basic.jpg", tip: "Iキー→マウス移動で枠を作成。新しい面を内側に生成" },
      { label: "個別に面を差し込む", video: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/basics/Blender_tips_insert_individual.mp4", poster: "/images/extrude-thickness.jpg", tip: "Inset時にIndividualボタンONで各面ごとに差し込み" },
      { label: "法線に沿って押し出す", video: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/basics/Blender_tips_exclude_along_normals.mp4", poster: "/images/inset-bevel.jpg", tip: "Alt+E→『法線に沿って押し出し』で均一な厚みを付加" },
      { label: "ワイヤーフレーム表示で押し込んだ面を確認", video: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/basics/Blender_tips_exclude_wireframe.mp4", poster: "/images/inset-bevel.jpg", tip: "Zキー→ワイヤーフレームで裏面や重なりを確認" },
    ],
  },
  {
    title: "選択の基本／いろいろな選択方法",
    desc: "矩形/投げ縄/ループ/リング/拡張縮小など、選択の時短テクを網羅。",
    index: [
      { label: "矩形/投げ縄選択", video: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/basics/Blender_tips_select.mp4", poster: "/images/select-1.jpg", tip: "B/Lで範囲選択を瞬時に。" },
      { label: "ループ/リング選択", video: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/basics/Blender_tips_loopselect.mp4", poster: "/images/select-2.jpg", tip: "Alt+クリックで素早く取得。" },
      { label: "拡張/縮小・類似選択", video: "https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/basics/Blender_tips_selectmore.mp4", poster: "/images/select-3.jpg", tip: "Shift+/Ctrl+で効率化。" },
    ],
  },
  {
    title: "プロポーショナル編集／8つの減衰タイプ",
    desc: "広い範囲をなめらかに変形。減衰カーブの使い分けで自然な形状に。",
    // index: [
    //   { label: "有効化と基本操作", video: "/videos/proportional-1.mp4", poster: "/images/proportional-1.jpg", tip: "OキーでON/OFF切替。" },
    //   { label: "減衰タイプの違い", video: "/videos/proportional-2.mp4", poster: "/images/proportional-2.jpg", tip: "Sharp/Smoothの見極め。" },
    //   { label: "影響半径と制約", video: "/videos/proportional-3.mp4", poster: "/images/proportional-3.jpg", tip: "マウスホイールで半径調整。" },
    // ],
  },
  {
    title: "基本のモデリング（ループカット）",
    desc: "ループ追加・等間隔・スライド。クリーンなトポロジを保つ基本技。",
    // index: [
    //   { label: "Ctrl+R：ループ追加", video: "/videos/loopcut-1.mp4", poster: "/images/loopcut-1.jpg", tip: "確定前に回数を調整。" },
    //   { label: "等間隔配置", video: "/videos/loopcut-2.mp4", poster: "/images/loopcut-2.jpg", tip: "Evenオプションで均一化。" },
    //   { label: "エッジスライド", video: "/videos/loopcut-3.mp4", poster: "/images/loopcut-3.jpg", tip: "GGで滑らかに移動。" },
    // ],
  },
  {
    title: "ナイフツール・ナイフ投影",
    desc: "任意カットと外形投影でエッジを正確に作成します。",
    // index: [
    //   { label: "K：ナイフツール基本", video: "/videos/knife-1.mp4", poster: "/images/knife-1.jpg", tip: "角スナップで精度UP。" },
    //   { label: "Z通過/角度制約", video: "/videos/knife-2.mp4", poster: "/images/knife-2.jpg", tip: "Zで貫通、Cで角度拘束。" },
    //   { label: "ナイフ投影", video: "/videos/knife-3.mp4", poster: "/images/knife-3.jpg", tip: "外形をオブジェクトから投影。" },
    // ],
  },
  {
    title: "削除と溶解",
    desc: "Delete／Dissolve の違いと、形を保ったまま要素を整理する方法。",
    // index: [
    //   { label: "DeleteとDissolveの違い", video: "/videos/delete-dissolve-1.mp4", poster: "/images/delete-dissolve-1.jpg", tip: "面保持なら溶解を使う。" },
    //   { label: "溶解の実例", video: "/videos/delete-dissolve-2.mp4", poster: "/images/delete-dissolve-2.jpg", tip: "余計な頂点を整理する。" },
    //   { label: "非多様体チェック", video: "/videos/delete-dissolve-3.mp4", poster: "/images/delete-dissolve-3.jpg", tip: "Select→Non Manifold確認。" },
    // ],
  },
  {
    title: "分割・分離・切り裂き・複製",
    desc: "Separate / Split / Duplicate の使いどころと安全な分割手順。",
    // index: [
    //   { label: "分離(Separate)の種類", video: "/videos/separate-1.mp4", poster: "/images/separate-1.jpg", tip: "Selection/By Loose Parts。" },
    //   { label: "切り裂き(Split)", video: "/videos/separate-2.mp4", poster: "/images/separate-2.jpg", tip: "面共有のまま引き離す。" },
    //   { label: "複製と原点", video: "/videos/separate-3.mp4", poster: "/images/separate-3.jpg", tip: "Shift+D/Alt+Dの違い。" },
    // ],
  },
  {
    title: "統合とブーリアン",
    desc: "Merge/Join と Boolean演算の基礎。非多様体やノイズの回避策も解説。",
    // index: [
    //   { label: "結合(Join)と統合(Merge)", video: "/videos/boolean-1.mp4", poster: "/images/boolean-1.jpg", tip: "頂点距離統合を活用。" },
    //   { label: "Booleanの種類", video: "/videos/boolean-2.mp4", poster: "/images/boolean-2.jpg", tip: "Difference/Union/Intersect。" },
    //   { label: "アーティファクト対策", video: "/videos/boolean-3.mp4", poster: "/images/boolean-3.jpg", tip: "法線再計算とクリンナップ。" },
    // ],
  },
  {
    title: "ペアレント／親子関係",
    desc: "階層化で管理を楽に。トランスフォームの継承と原点の扱い。",
    // index: [
    //   { label: "親子付けの基本", video: "/videos/parent-1.mp4", poster: "/images/parent-1.jpg", tip: "Ctrl+PでEmptyも活用。" },
    //   { label: "トランスフォーム継承", video: "/videos/parent-2.mp4", poster: "/images/parent-2.jpg", tip: "Keep Transformの違い。" },
    //   { label: "原点と親の関係", video: "/videos/parent-3.mp4", poster: "/images/parent-3.jpg", tip: "原点を正しく配置する。" },
    // ],
  },
  {
    title: "フィルで面貼り",
    desc: "穴埋め・Grid Fill・Beautifyなど、面をきれいに閉じるテクニック。",
    // index: [
    //   { label: "穴埋めとFace Fill", video: "/videos/fill-1.mp4", poster: "/images/fill-1.jpg", tip: "Fキーで基本を素早く。" },
    //   { label: "Grid Fillと流れ", video: "/videos/fill-2.mp4", poster: "/images/fill-2.jpg", tip: "Span/Offsetの調整。" },
    //   { label: "Beautifyの使いどころ", video: "/videos/fill-3.mp4", poster: "/images/fill-3.jpg", tip: "三角面の偏りを解消。" },
    // ],
  },
  {
    title: "ピボットポイント",
    desc: "ピボット／原点の設定と、正確な回転・スケールのための活用法。",
    // index: [
    //   { label: "ピボット切替", video: "/videos/pivot-1.mp4", poster: "/images/pivot-1.jpg", tip: "Median/3D Cursor等。" },
    //   { label: "3Dカーソル活用", video: "/videos/pivot-2.mp4", poster: "/images/pivot-2.jpg", tip: "回転中心を自在に。" },
    //   { label: "原点の移動", video: "/videos/pivot-3.mp4", poster: "/images/pivot-3.jpg", tip: "Set Originの基本。" },
    // ],
  },
  {
    title: "モディファイヤー",
    desc: "Subdivision, Array, Mirror など非破壊編集の導入とワークフロー。",
    // index: [
    //   { label: "Subdivisionと順序", video: "/videos/modifier-1.mp4", poster: "/images/modifier-1.jpg", tip: "低解像→高解像の流れ。" },
    //   { label: "Arrayの実例", video: "/videos/modifier-2.mp4", poster: "/images/modifier-2.jpg", tip: "相対/定数オフセット。" },
    //   { label: "Mirrorの要点", video: "/videos/modifier-3.mp4", poster: "/images/modifier-3.jpg", tip: "原点・クリッピング設定。" },
    // ],
  },
  {
    title: "マテリアルの超基本",
    desc: "PBRの考え方と BaseColor / Roughness / Normal の役割を把握。",
    // index: [
    //   { label: "PBRの三要素", video: "/videos/material-1.mp4", poster: "/images/material-1.jpg", tip: "色/粗さ/法線を整理。" },
    //   { label: "画像テクスチャ設定", video: "/videos/material-2.mp4", poster: "/images/material-2.jpg", tip: "色空間と非カラー実データ。" },
    //   { label: "金属と非金属", video: "/videos/material-3.mp4", poster: "/images/material-3.jpg", tip: "Metallic/Specularの理解。" },
    // ],
  },
  {
    title: "カメラの設定",
    desc: "焦点距離・センサーサイズ・DOF・構図ガイドで“伝わる画角”を作る。",
    // index: [
    //   { label: "焦点距離/センサー", video: "/videos/camera-1.mp4", poster: "/images/camera-1.jpg", tip: "24/35/50mmの違い。" },
    //   { label: "被写界深度(DOF)", video: "/videos/camera-2.mp4", poster: "/images/camera-2.jpg", tip: "F値とフォーカス距離。" },
    //   { label: "構図ガイド", video: "/videos/camera-3.mp4", poster: "/images/camera-3.jpg", tip: "三分割/対角線/黄金比。" },
    // ],
  },
  {
    title: "レンダリングのやり方・設定",
    desc: "エンジン選択、サンプル/デノイズ、出力解像度と形式までを一気通貫。",
    // index: [
    //   { label: "Cycles/Eevee選択", video: "/videos/render-1.mp4", poster: "/images/render-1.jpg", tip: "品質/速度で使い分け。" },
    //   { label: "サンプルとデノイズ", video: "/videos/render-2.mp4", poster: "/images/render-2.jpg", tip: "低ノイズと時間の両立。" },
    //   { label: "出力設定と式", video: "/videos/render-3.mp4", poster: "/images/render-3.jpg", tip: "解像度/フォーマット/命名。" },
    // ],
  },
  {
    title: "【+α講座】マテリアル設定の基本",
    desc: "材質テンプレの構成、テクスチャ管理、色合わせのコツを追加解説。",
    // index: [
    //   { label: "材質テンプレ運用", video: "/videos/material-plus-1.mp4", poster: "/images/material-plus-1.jpg", tip: "再利用で速度UP。" },
    //   { label: "テクスチャ管理", video: "/videos/material-plus-2.mp4", poster: "/images/material-plus-2.jpg", tip: "命名/階層/解像度統一。" },
    //   { label: "色合わせのコツ", video: "/videos/material-plus-3.mp4", poster: "/images/material-plus-3.jpg", tip: "参照画像で客観化。" },
    // ],
  },
  {
    title: "【+α講座】ノード設定の基本",
    desc: "Shader Editor入門。Mix/Mask/UVの基礎で応用表現への足がかりを作ります。",
    // index: [
    //   { label: "Shader Editor入門", video: "/videos/node-plus-1.mp4", poster: "/images/node-plus-1.jpg", tip: "Principled中心に。" },
    //   { label: "Mix/Maskの基礎", video: "/videos/node-plus-2.mp4", poster: "/images/node-plus-2.jpg", tip: "頂点カラー/UVで制御。" },
    //   { label: "UVとスケール感", video: "/videos/node-plus-3.mp4", poster: "/images/node-plus-3.jpg", tip: "実寸合わせで破綻回避。" },
    // ],
  },
];

// ▼ 追加：CGパース入門（4テーマ）
const Interior: Lesson[] = [
  {
  title: "マグカップをつくる",
  desc: "スピン（回転押し出し）で本体を作成し、取っ手はカーブから押し出して滑らかにつなげる。スムーズシェードと厚み付けで仕上げる。",
  // index: [
  //   {label: "スケール調整",video: "/videos/book-scale.mp4",poster: "/images/book-scale.jpg",tip: "Sキーで本らしい縦横比に整える"},
  //   {label: "複製と整列",video: "/videos/book-array.mp4",poster: "/images/book-array.jpg",tip: "Arrayで等間隔に複製して並べる"},
  //   {label: "色分けマテリアル",video: "/videos/book-material.mp4",poster: "/images/book-material.jpg",tip: "マテリアルスロットで背表紙に色を付ける"},
  // ],
  },
  {
  title: "本をつくる",
  desc: "シンプルな立方体から始め、スケール調整・複製・整列で本を並べる。Arrayで効率よくボリューム感を出し、マテリアルで背表紙に色をつける。",
  // index: [
  //   {label: "スケール調整",video: "/videos/book-scale.mp4",poster: "/images/book-scale.jpg",tip: "Sキーで本らしい縦横比に整える"},
  //   {label: "複製と整列",video: "/videos/book-array.mp4",poster: "/images/book-array.jpg",tip: "Arrayで等間隔に複製して並べる"},
  //   {label: "色分けマテリアル",video: "/videos/book-material.mp4",poster: "/images/book-material.jpg",tip: "マテリアルスロットで背表紙に色を付ける"},
  // ],
  },
  {
    title: "棚をつくる",
    desc: "ミラーとスナップを活用して棚を効率的に構築。厚み付け・ブーリアンで強度や空間を表現し、木目マテリアルで質感を演出する。",
    // index: [
    //   {label: "ミラーモディファイア",video: "/videos/shelf-mirror.mp4",poster: "/images/shelf-mirror.jpg",tip: "左右対称にして編集作業を半減"},
    //   {label: "スナップで整列",video: "/videos/shelf-snap.mp4",poster: "/images/shelf-snap.jpg",tip: "頂点スナップで板を正確に配置"},
    //   {label: "木目マテリアル",video: "/videos/shelf-wood.mp4",poster: "/images/shelf-wood.jpg",tip: "UV展開して木目を自然に貼る"},
    // ],
  },
  {
    title: "テーブルをつくる",
    desc: "原点位置を意識しながら天板と脚を構成。複製と整列で脚を効率的に配置し、スムーズシェードで質感を整える。",
    // index: [
    //   {label: "原点と整列",video: "/videos/table-origin.mp4",poster: "/images/table-origin.jpg",tip: "原点を中央に設定し、脚を等間隔に配置"},
    //   {label: "複製と整列",video: "/videos/table-legs.mp4",poster: "/images/table-legs.jpg",tip: "Shift+Dと軸制限で正確に複製配置"},
    //   {label: "スムーズシェード",video: "/videos/table-shade.mp4",poster: "/images/table-shade.jpg",tip: "角をBevel後にスムーズシェードで質感調整"},
    // ],
  },
  {
    title: "椅子をつくる",
    desc: "ローカル軸を意識した回転配置で椅子を組み立て。親子付けでパーツを整理し、姿勢を崩さず動かせるようにする。",
    // index: [
    //   {label: "ローカル軸回転",video: "/videos/chair-local.mp4",poster: "/images/chair-local.jpg",tip: "ローカル軸で背もたれを自然に傾ける"},
    //   {label: "親子付け",video: "/videos/chair-parent.mp4",poster: "/images/chair-parent.jpg",tip: "脚と座面を親子付けして一体操作"},
    //   {label: "配置と複製",video: "/videos/chair-duplicate.mp4",poster: "/images/chair-duplicate.jpg",tip: "座面を中心に等角度で複製して並べる"},
    // ],
  },
  {
    title: "ベッドライトをつくる",
    desc: "基本的なランプオブジェクトを使い、ポイントライトで柔らかな光を演出。色温度と減衰距離を調整して自然な照明を再現。",
    // index: [
    //   {label: "ポイントライト配置",video: "/videos/bedlight-light.mp4",poster: "/images/bedlight-light.jpg",tip: "ポイントライトを電球の位置に設置"},
    //   {label: "色温度設定",video: "/videos/bedlight-color.mp4",poster: "/images/bedlight-color.jpg",tip: "暖色系（約3000K）で温かみを演出"},
    //   {label: "減衰距離調整",video: "/videos/bedlight-falloff.mp4",poster: "/images/bedlight-falloff.jpg",tip: "減衰距離で光の届く範囲をコントロール",
    //   },
    // ],
  },
  {
    title: "カーテンをつくる",
    desc: "クロスモディファイアで自然なたわみを表現し、シンプルな布ジオメトリから始めて、ピン留めと重力でリアルなドレープを再現。",
    // index: [
    //   {label: "クロスモディファイア",video: "/videos/curtain-cloth.mp4",poster: "/images/curtain-cloth.jpg",tip: "クロス設定で布の物理シミュレーションを有効化"},
    //   {label: "ピン留めと重力",video: "/videos/curtain-pin.mp4",poster: "/images/curtain-pin.jpg",tip: "頂点グループで上端を固定して垂らす"},
    //   {label: "Subdivisionで滑らかに",video: "/videos/curtain-subdiv.mp4",poster: "/images/curtain-subdiv.jpg",tip: "Subdivisionで滑らかなドレープに仕上げる"},
    // ],
  },
  {
    title: "クッションをつくる",
    desc: "立方体にSubdivisionとクロスモディファイアを適用して自然なたわみを作る。ピン留めと押し出しでふくらみ感を演出する。",
    // index: [
    //   {label: "クロスモディファイア",video: "/videos/curtain-cloth.mp4",poster: "/images/curtain-cloth.jpg",tip: "クロス設定で布の物理シミュレーションを有効化"},
    //   {label: "ピン留めと重力",video: "/videos/curtain-pin.mp4",poster: "/images/curtain-pin.jpg",tip: "頂点グループで上端を固定して垂らす"},
    //   {label: "Subdivisionで滑らかに",video: "/videos/curtain-subdiv.mp4",poster: "/images/curtain-subdiv.jpg",tip: "Subdivisionで滑らかなドレープに仕上げる"},
    // ],
  },
  {
    title: "観葉植物をつくる",
    desc: "葉は平面からモディファイアで曲げ、Arrayで複製して配置。鉢は回転押し出しで作成し、全体をコレクションで整理する。",
    // index: [
    //   {label: "クロスモディファイア",video: "/videos/curtain-cloth.mp4",poster: "/images/curtain-cloth.jpg",tip: "クロス設定で布の物理シミュレーションを有効化"},
    //   {label: "ピン留めと重力",video: "/videos/curtain-pin.mp4",poster: "/images/curtain-pin.jpg",tip: "頂点グループで上端を固定して垂らす"},
    //   {label: "Subdivisionで滑らかに",video: "/videos/curtain-subdiv.mp4",poster: "/images/curtain-subdiv.jpg",tip: "Subdivisionで滑らかなドレープに仕上げる"},
    // ],
  }

];


// ▼ 追加：CGパース入門（4テーマ）
const CG_INTRO: Lesson[] = [
  {
    title: "太陽光の入る白い部屋",
    desc: "Sun/Sky と HDRI の使い分け、露出とホワイトバランス、白素材での色被り対策、窓際のハイライト管理とポストプロの基本。",
    // index: [
    //   { label: "Shader Editor入門", video: "/videos/node-plus-1.mp4", poster: "/images/node-plus-1.jpg", tip: "Principled中心に。" },
    //   { label: "Mix/Maskの基礎", video: "/videos/node-plus-2.mp4", poster: "/images/node-plus-2.jpg", tip: "頂点カラー/UVで制御。" },
    //   { label: "UVとスケール感", video: "/videos/node-plus-3.mp4", poster: "/images/node-plus-3.jpg", tip: "実寸合わせで破綻回避。" },
    // ],
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
          <LessonList items={LESSONS} color="rose"/>
          <p className="mt-3 text-xs text-zinc-500">※ 「【+α講座】」は応用編です。理解度に応じて順序を前後します。</p>
        </div>

        {/* ▼ 追加：CGパース入門（4テーマ） */}
        <div className="mt-12">
          <h2 className="mb-4 text-base font-semibold text-zinc-900">インテリアを作りながら基本操作に慣れる</h2>
          <LessonList items={Interior} color="emerald"/>
          <p className="mt-3 text-xs text-zinc-500">
            ※ 各テーマはテンプレート／チェックリスト付き。作例は課題として提出し、面談で添削します。
          </p>
        </div>

        {/* ▼ 追加：CGパース入門（4テーマ） */}
        <div className="mt-12">
          <h2 className="mb-4 text-base font-semibold text-zinc-900">CGパース入門</h2>
          <LessonList items={CG_INTRO} color="sky"/>
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
