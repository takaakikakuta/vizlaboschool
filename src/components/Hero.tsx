import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full bg-zinc-100'>

    <section id="hero" className="relative w-full h-auto md:pb-4">
       <div className="h-full md:h-[500px] flex flex-col md:flex-row 2xl:container mx-auto md:py-4">

  {/* 右：キャッチコピーとボタン */}
  <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col 2xl:items-center md:pt-4 pt-2">
    <div className="text-left md:px-6 space-y-2 px-2">
      <div className='flex flex-col w-full text-red-600 md:pt-10 pt-2 items-center'>
        <div className='flex flex-col'>
          <h1 className="text-2xl md:text-3xl font-bold md:mb-2 mb-0 pt-0 text-red-950">
            {/* 産業機器マーケティング向け<br /> */}
            3DCGを学ぶならオンラインCGコーチング
          </h1>
        </div>
        <div className='flex text-3xl md:text-7xl font-extrabold mt-0 items-center'>
          VizlaboSchool
        </div>
      </div>
  </div>
  <div className='w-full space-y-2 md:px-8 px-2 pt-6'>
    
    <div className="md:flex gap-4 px-8 py-4 text-white hidden justify-center mt-20">
      <Link href="/pre_register" aria-label="無料トライアルページへ">
        <button className="bg-red-600 px-8 py-5 rounded-lg font-bold hover:opacity-50 md:text-xl border border-red-600 text-lg">事前登録をする</button>
      </Link>
      {/* <Link href="/download" aria-label="資料請求ページへ">
        <button className="px-8 py-5 rounded-lg font-bold hover:opacity-50 md:text-xl text-lg text-red-600 border border-red-600">資料ダウンロード</button>
        </Link> */}
    </div>
</div>  
  </div>
  <div className="w-full md:w-1/2 h-[300px] md:h-full">
  {/* 画像ラッパー */}
  <div className="w-full h-full relative flex items-center justify-center">
     <Link href={"/course"}>
        <Image
          src="https://vexpo.s3.ap-northeast-1.amazonaws.com/VizlaboSchool/39ae955d-17c6-41e5-b068-9e9ea49460a6.png"
          alt="Vizlabo Logo"
          fill
          className="object-contain"
          />
      </Link>

    {/* オーバーレイの右上マーク（画像の表示領域に合わせて中央からずらす） */}
  </div>
</div>

   
</div>

  </section>
  </div>
  )
}

export default Hero
