import React from 'react'
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Campaign from '@/components/Campaign';
import Features from '@/components/Features';
import Reason from '@/components/Reason';
import FlowSteps from '@/components/FlowSteps';
import CTA from '@/components/CTA';
import Features2 from '@/components/Features2';
import CGSkills from '@/components/CGSkills';
import CGConcerns from '@/components/CGConcerns';
import PostCourseFollowUp from '@/components/PostCourseFollowUp';
import Faq from "@/components/FAQ";


// サーバーコンポーネントとして定義
const Home = async () => {

  return (
    <main className="w-full flex flex-col min-h-screen items-center justify-between xl:pt-24 pt-28">
      <Header/>
      <Hero/>
      <Campaign/>
      <Features/>
      <Features2/>
      <CGConcerns/>
      <Reason/>
      <CTA/>
      <FlowSteps/>
      <PostCourseFollowUp/>
      <CGSkills/>
      <Faq
        items={[
          { q: "どのソフトで学べますか？", a: "Blenderをベースに進行します。必要に応じて他ツールとの連携（CAD→Blender、Photoshop等）にも触れます。" },
          { q: "初心者でも大丈夫？", a: "大丈夫です。各コースとも基礎から段階的に進み、最終的に実務レベルの成果物制作まで到達します。" },
          { q: "実務にすぐ使える成果物は作れますか？", a: "テンプレート化した提案書・静止画・短尺動画の制作を課題として用意します。納品形式の作法も扱います。" },
          { q: "パソコンは支給されますか？", a: "パソコンのご支給はございません。恐れ入りますが、ご自身のPC環境をご用意いただいたうえでご受講ください。" },
          { q: "パソコンのスペックが低いですが受講可能ですか", a: "受講自体は問題ございませんが、フォトリアルなレンダリングなど負荷の高い処理では動作が重くなる場合がございます。学習は進められますので、ご安心ください。" },
        ]}
      />
      <CTA/>
      <Footer/>
    </main>
  );
};

export default Home;