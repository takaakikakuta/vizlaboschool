import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black w-full">

        <div className='container h-full bg-black mx-auto text-white my-5 justify-between flex flex-col md:flex-row p-6'>
            {/* Logo */}
            <div className='flex items-center py-3 space-x-3 h-20'>
                <img className="h-full rounded-full" src="https://vexpo.s3.ap-northeast-1.amazonaws.com/vizlabo_logo.png" alt="" />
                <h1 className='font-bold text-4xl'>Vizlabo</h1>
            </div>
        
            <div className='flex space-x-6'>
                <div className='text-center space-y-2'>
                    <h1 className='text-lg font-semibold'>サービス</h1>
                    <Link href={"/TermsOfServices"}>
                        <p>利用規約</p>
                    </Link>
                    <Link href={"/SecurityPolicy"}>
                        <p>セキュリティポリシー</p>
                    </Link>
                    {/* <p>料金プラン</p> */}
                </div>

                <div className='text-center space-y-2'>
                    <h1 className='text-lg font-semibold'>サポート</h1>
                    {/* <p>よくある質問</p> */}
                    {/* <p>お支払いについて</p> */}
                    {/* <p>ご利用の流れ</p> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
