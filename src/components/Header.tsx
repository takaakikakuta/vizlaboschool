"use client"

import React, { useState } from 'react'
import Link from 'next/link';

import {
  EnvelopeIcon,
  DocumentArrowDownIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full md:py-4 fixed top-0 left-0 z-50 bg-white'>
      <div className='h-16 2xl:px-20 px-4 flex text-white mx-auto'>
          {/* Logo */}
            <div className='w-full md:w-auto'>
              <Link href="/" className='h-full flex items-center space-x-3 py-3'>
                <img className="h-full rounded-full" src="https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/logo.png" alt="" />
                <h1 className='font-bold md:text-4xl text-2xl text-red-600'>VizlaboSchool</h1>
              </Link>
            </div>
            <div className='flex xl:justify-between items-center w-full md:px-8 px-2 justify-end'>

            

            {/* Menu */}
            <div className='items-center 2xl:space-x-12 space-x-2 2xl:text-xl text-lg 2xl:font-bold px-12 hidden xl:flex text-gray-400 justify-start'>
                <Link href="/">
                  <h1 className='hover:border-b-2 hover:font-semibold hover:text-black'>ホーム</h1>
                </Link>
                <Link href={"/course"}>
                  <h1 className='hover:border-b-2 hover:font-semibold hover:text-black'>コース</h1>
                </Link>
                {/* <Link  href={"/function"}>
                  <h1 className='hover:border-b-2 hover:font-semibold hover:text-black'>サービス</h1>
                </Link>
                <Link  href={"/UserGuide"}>
                  <h1 className='hover:border-b-2 hover:font-semibold hover:text-black'>はじめる</h1>
                </Link> */}
                {/* <Link href="/blogposts/1">
                  <h1 className='hover:border-b-2 hover:font-semibold hover:text-black'>ブログ</h1>
                </Link>
                <Link href="/youtube">
                  <h1 className='hover:border-b-2 hover:font-semibold hover:text-black'>YouTube</h1>
                </Link> */}
            </div>

            {/* スマホ用ハンバーガーメニュー */}
            <div className="xl:hidden text-black my-auto text-2xl" onClick={toggleMenu}>
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </div>
            <div className='flex items-center'>
            {/* CTA */}
            <div className="text-red-600 w-full hidden xl:flex">
                <div className="container mx-auto px-4 py-2 flex justify-end space-x-4 text-sm md:text-base">
                {/* お問い合わせ */}
                <Link href="/Contact">
                <button className="flex items-center gap-1 bg-transparent px-5 py-2 hover:opacity-50 transition font-bold  border border-red-600 rounded">
                    <EnvelopeIcon className="w-5 h-5" />
                    お問い合わせ
                </button>
                </Link>

                {/* 資料請求 */}
                {/* <Link href="/download">
                <button className="flex items-center gap-1 px-5 py-2 rounded hover:opacity-50 transition font-bold border border-red-600">
                    資料ダウンロード
                </button>
                </Link> */}

                {/* 無料トライアル */}
                <Link href="/pre_register">
                <button className="flex items-center gap-1 px-5 py-2 rounded bg-red-600 hover:opacity-50 transition font-bold border border-red-600 text-white">
                    事前登録
                </button>
                </Link>
                </div>
            </div>
            </div>
          
          
          {isOpen && (
          <div className="absolute top-28 left-0 w-full bg-black z-10 xl:hidden">
            <div className="flex flex-col items-start p-4 space-y-3">
              <Link href="/" onClick={toggleMenu}>
                <h1 className='hover:border-b-2 hover:text-white'>ホーム</h1>
              </Link>
              <Link href="/course" onClick={toggleMenu}>
                <h1 className='hover:border-b-2 hover:text-white'>コース</h1>
              </Link>
              {/* <Link href="/function" onClick={toggleMenu}>
                <h1 className='hover:border-b-2 hover:text-white'>サービス</h1>
              </Link>
              <Link  href="/UserGuide">
                <h1 className='hover:border-b-2 hover:text-white'>はじめる</h1>
              </Link>
               <Link href="/blogposts/1">
                <h1 className='hover:border-b-2 hover:text-white'>Blog</h1>
              </Link>
              <Link  href="/Contact">
                <h1 className='hover:border-b-2 hover:text-white'>ブログ</h1>
              </Link>
              <Link  href="/youtube">
                <h1 className='hover:border-b-2 hover:text-white'>YouTube</h1>
              </Link> */}
              
              
            </div>
            
          </div>
        )}
        
      </div>
      </div>
      <div className="bg-white w-full xl:hidden h-12">
                <div className="container mx-auto px-4 pb-2 flex justify-center space-x-4 text-sm md:text-base">

                {/* 無料トライアル */}
                <Link href="/pre_register">
                <button className="flex items-center gap-1 bg-red-600 text-white px-5 py-2 rounded hover:bg-white hover:text-red-600 transition font-semibold border border-red-600">
                    事前登録
                </button>
                </Link>

                {/* 資料請求 */}
                {/* <Link href="/download">
                <button className="flex items-center gap-1 bg-white px-5 py-2 rounded hover:bg-orange-400 text-red-600 transition font-semibold border border-red-600">
                    <DocumentArrowDownIcon className="w-5 h-5" />
                    資料請求
                </button>
                </Link> */}
                </div>
            </div>
    </div>
  )
}

export default Header
