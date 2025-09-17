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

      <Footer/>
    </main>
  );
};

export default Home;