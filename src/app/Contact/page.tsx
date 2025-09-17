"use client"

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

import type { Schema } from "../../../amplify/data/resource"
import { Amplify } from "aws-amplify"
import { generateClient } from "aws-amplify/api"
import outputs from "../../../amplify_outputs.json"
import Header from "@/components/Header";

Amplify.configure(outputs)

const client = generateClient<Schema>()

interface FormData {
  name: string;
  company: string;
  department: string;
  email: string;
  category:string;
  message: string;
}

const ApplyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", company: "", department: "", email: "", category:"問い合わせ", message: "" });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = `
    【問い合わせ】
    ----------------------------
    お名前      : ${formData.name}
    会社名      : ${formData.company}
    部署名      : ${formData.department || "(未入力)"}
    メール      : ${formData.email}
    問い合わせ内容        :
    ${formData.message || "(なし)"}
    ----------------------------
    `.trim();

    try {
      await client.queries.sendMail({
        ...formData,
        category: "問い合わせ", // 念のため明示
        message: text,
      });
      console.log(formData);
      
      // 👉 サンクスへ遷移（src パラメータで発火元を持っていく）
      router.replace("/Contact/thanks?src=contact");
    } catch (error) {
      console.error("Error sending mail:", error);
    }
  };
  

  return (
    <main className="md:pt-24 pt-28">
    <Header/>
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl text-center mt-10 border-4">
      <h1 className="text-3xl font-extrabold text-gray-800">問い合わせフォーム</h1>
      {submitted ? (
        <div className="mt-6 text-green-600 font-semibold">
          問い合わせを受け付けました！
          <button
            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            onClick={() => router.push("/")}
            >
            ホームへ戻る
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 text-left">
          <label className="block mb-2 text-gray-700">名前</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
            />
          <label className="block mt-4 mb-2 text-gray-700">会社名</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
            />
          <label className="block mt-4 mb-2 text-gray-700">部署名</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
            />
          <label className="block mt-4 mb-2 text-gray-700">メールアドレス</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
            />
          <label className="block mt-4 mb-2 text-gray-700">問い合わせ内容</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md h-32"
            ></textarea>
          <button
            type="submit"
            className="mt-6 w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
           問い合わせする
          </button>
        </form>
      )}
    </div>
    </main>
  );
};

export default ApplyForm;