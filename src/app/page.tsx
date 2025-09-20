// app/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Campaign from "@/components/Campaign";
import Features from "@/components/Features";
import Reason from "@/components/Reason";
import FlowSteps from "@/components/FlowSteps";
import CTA from "@/components/CTA";
import Features2 from "@/components/Features2";
import CGSkills from "@/components/CGSkills";
import CGConcerns from "@/components/CGConcerns";
import PostCourseFollowUp from "@/components/PostCourseFollowUp";
import Faq from "@/components/FAQ";

const site = {
  name: "Vizlabo School",
  url: "https://school.vizlabo.com",        // ←本番
  // logo: "https://vizlabo.com/logo.png",
  // twitter: "@vizlabo",               // ←あれば
};

export const revalidate = 3600; // ISR: 1時間ごとに再生成（ニュース性が低いLP向け）

export async function generateMetadata(): Promise<Metadata> {
  const title = "建築・産業CGの法人向けコーチング | Vizlabo School";
  const description =
    "Blenderを軸に、業務で使える静止画/短尺動画/提案書を短期で内製化。週1の1on1で実務品質に定着。アーキ/エンジニアリング向け。";
  const canonical = new URL("/", site.url).toString();

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      type: "website",
      images: [{ url: "/ogp.jpg", width: 1200, height: 630, alt: title }],
      locale: "ja_JP",
    },
    // twitter: {
    //   card: "summary_large_image",
    //   site: site.twitter,
    //   title,
    //   description,
    //   images: ["/ogp.jpg"],
    // },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview" : "large" },
    },
  };
}

// FAQの中身（既存の items をそのまま使う）
const faqItems = [
  { q: "どのソフトで学べますか？", a: "Blenderをベースに進行します。必要に応じて他ツールとの連携（CAD→Blender、Photoshop等）にも触れます。" },
  { q: "初心者でも大丈夫？", a: "大丈夫です。各コースとも基礎から段階的に進み、最終的に実務レベルの成果物制作まで到達します。" },
  { q: "実務にすぐ使える成果物は作れますか？", a: "テンプレート化した提案書・静止画・短尺動画の制作を課題として用意します。納品形式の作法も扱います。" },
  { q: "パソコンは支給されますか？", a: "パソコンのご支給はございません。恐れ入りますが、ご自身のPC環境をご用意いただいたうえでご受講ください。" },
  { q: "パソコンのスペックが低いですが受講可能ですか", a: "受講自体は問題ございませんが、フォトリアルなレンダリングなど負荷の高い処理では動作が重くなる場合がございます。学習は進められますので、ご安心ください。" },
];

// 構造化データを生成
function JsonLdBlocks() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((it) => ({
      "@type": "Question",
      "name": it.q,
      "acceptedAnswer": { "@type": "Answer", "text": it.a },
    })),
  };

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": site.name,
    "url": site.url,
    // "logo": site.logo,
    // "sameAs": site.twitter ? [`https://x.com/${site.twitter.replace("@","")}`] : [],
  };

  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": site.name,
    "url": site.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${site.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script id="ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Script id="ld-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
      <Script id="ld-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }} />
    </>
  );
}

// サーバーコンポーネント
export default async function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen items-center justify-between xl:pt-24 pt-28">
      <Header />
      <Hero />
      <Campaign />
      <Features />
      <Features2 />
      <CGConcerns />
      <Reason />
      <CTA />
      <FlowSteps />
      <PostCourseFollowUp />
      <CGSkills />
      <Faq items={faqItems} />
      <CTA />
      <Footer />
      <JsonLdBlocks />
    </main>
  );
}
