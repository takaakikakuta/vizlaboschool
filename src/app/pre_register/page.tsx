"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

import type { Schema } from "../../../amplify/data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import outputs from "../../../amplify_outputs.json";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

Amplify.configure(outputs);
const client = generateClient<Schema>();

// ブラウザの FormData と名前が被るので別名に
interface PreRegisterPayload {
  name: string;
  company: string;
  department?: string;
  email: string;
  category: string;
  message: string;
}

// 事前登録ページ
export default function PreRegisterPage() {
  const router = useRouter();

  // 送信ペイロード
  const [formData, setFormData] = useState<PreRegisterPayload>({
    name: "",
    company: "",
    department: "",
    email: "",
    category: "PreRegister", // ← 正しいキーに修正
    message: "",
  });

  // 追加ヒアリング（本文に含めるが、APIの引数には含めない）
  const [course, setCourse] = useState<"Speed" | "Regular" | "Master">("Regular");
  const [seats, setSeats] = useState<number>(1);
  const [start, setStart] = useState<string>("2026-01");

  // 雑多
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 共通 onChange（name 属性必須）
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // バリデーションは formData を参照（重複 state を排除）
  const canSubmit =
    formData.name.trim() &&
    formData.company.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    seats > 0 &&
    agree &&
    !submitting;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setSubmitting(true);
    setError(null);

    // サーバへ渡す本文をここで組み立て（登録内容＋備考）
    const text = `
    【事前登録（先行予約）】
    ----------------------------
    お名前      : ${formData.name}
    会社名      : ${formData.company}
    部署名      : ${formData.department || "(未入力)"}
    メール      : ${formData.email}
    希望コース  : ${course}（Speed/Regular/Master）
    想定人数    : ${seats} 名
    開始時期    : ${start || "未定"}
    備考        :
    ${formData.message || "(なし)"}
    ----------------------------
    クーポン : Vizlaboschool2026
    ※ 本登録はクーポン発行のための事前登録です。費用は発生しません／申し込み確定ではありません。
    `.trim();

    try {
      await client.queries.sendMail({
        ...formData,
        category: "事前登録", // 念のため明示
        message: text,
      });
      router.replace("/pre_register/thanks?src=pre_register");
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      <Header />

      {/* 上部バナー（キャンペーン） */}
      <div className="bg-rose-600 text-white md:mt-24 mt-28">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-6 py-2 sm:flex-row">
          <p className="text-sm sm:text-base font-semibold">
            🎉 10/15 23:59 までの事前登録でクーポン発行／30日間返金保証
          </p>
        </div>
      </div>

      {/* ヒーロー */}
      <section className="bg-gradient-to-b from-white via-zinc-50 to-white">
        <div className="mx-auto max-w-6xl px-6 pt-4 pb-8 text-center">
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 shadow-sm">
            先行予約（事前登録）
            <span className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:inline-block" />
            <span className="text-rose-600">通常88万円 → 33万円</span>
          </p>
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 shadow-sm">
            2026年1月開講予定
          </p>
          <h1 className="mx-auto max-w-4xl text-2xl font-bold leading-tight text-zinc-900 sm:text-5xl">
            法人向けオンラインCGコーチング
            <br className="hidden sm:block" />
            <span className="text-rose-600">事前登録フォーム</span>
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-zinc-600 sm:text-base">
            かんたんな情報入力で、<strong>お申込み前に使えるクーポン</strong>を発行します。<br/>
            登録＝申し込み確定ではありません。費用はかかりません。
          </p>
        </div>
      </section>

      {/* フォーム */}
      <section id="form" className="mx-auto max-w-3xl px-6 pb-20">
        <form onSubmit={onSubmit} className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-center text-xl font-bold text-zinc-900">事前登録（先行予約）</h2>
          <p className="mt-1 text-center text-xs text-zinc-500">* は必須項目です</p>

          {done ? (
            <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-5 text-rose-900">
              <p className="font-semibold">送信が完了しました。</p>
              <p className="mt-1 text-sm">ご登録ありがとうございます。担当より営業日内にご連絡いたします。</p>
              <div className="mt-4 flex gap-3">
                <button
                  type="button"
                  className="rounded-full border border-rose-300 bg-white px-4 py-2 text-sm font-semibold text-rose-700 hover:bg-rose-50"
                  onClick={() => router.push("/")}
                >
                  ホームへ戻る
                </button>
                <a
                  href="/course/archviz"
                  className="rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700"
                >
                  コース内容を見る
                </a>
              </div>
            </div>
          ) : (
            <>
              {error && (
                <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
                  {error}
                </div>
              )}

              {/* 基本情報 */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="お名前 *">
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border px-3 py-2"
                  />
                </Field>
                <Field label="メールアドレス *">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border px-3 py-2"
                  />
                </Field>
                <Field label="会社名 *">
                  <input
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border px-3 py-2"
                  />
                </Field>
                <Field label="部署名（任意）">
                  <input
                    name="department"
                    type="text"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2"
                  />
                </Field>
              </div>

              {/* 希望内容（APIには入れず本文に含める） */}
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <Field label="希望コース">
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value as any)}
                    className="w-full rounded-md border px-3 py-2"
                  >
                    {/* <option value="Speed">スピード（3ヶ月）</option> */}
                    <option value="Regular">レギュラー（4ヶ月）</option>
                    {/* <option value="Master">マスター（6ヶ月）</option> */}
                  </select>
                </Field>
                <Field label="想定受講人数">
                  <input
                    type="number"
                    min={1}
                    max={99}
                    value={seats}
                    onChange={(e) => setSeats(Number(e.target.value))}
                    className="w-full rounded-md border px-3 py-2"
                  />
                </Field>
                <Field label="開始時期">
                  <select
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    className="w-full rounded-md border px-3 py-2"
                  >
                    <option value="2026-01">2026年1月ごろ</option>
                    <option value="2026-02">2026年2月ごろ</option>
                    <option value="2026-03">2026年3月ごろ</option>
                    <option value="">未定（相談したい）</option>
                  </select>
                </Field>
              </div>

              {/* 備考 */}
              <div className="mt-4">
                <Field label="連絡事項（任意）">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="導入背景や対象者のスキル感、社内で想定している用途などがあればご記入ください。"
                  />
                </Field>
              </div>

              {/* 同意 */}
              <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="h-4 w-4"
                  />
                  <span>
                    <a href="/terms" className="underline">
                      利用規約
                    </a>
                    ・
                    <a href="/privacy" className="underline">
                      プライバシーポリシー
                    </a>
                    に同意します
                  </span>
                </label>
              </div>

              {/* 送信 */}
              <button
                type="submit"
                disabled={!canSubmit}
                className="mt-6 w-full rounded-lg bg-rose-600 px-4 py-3 font-semibold text-white shadow hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? "送信中..." : "事前登録する"}
              </button>

              <p className="mt-3 text-center text-xs text-zinc-500">
                10/15 23:59 までの事前登録でクーポンを発行。開講から30日間の返金保証つき。
              </p>
            </>
          )}
        </form>
      </section>

      <Footer />
    </main>
  );
}

/* ---------- 小物 ---------- */
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-zinc-800">{label}</span>
      {children}
    </label>
  );
}
