"use client"
import Image from 'next/image'

function error() {
  return (
    <div className='bg-white w-screen h-fit flex justify-center'>
    <div className=' flex justify-center bg-greay w-[1000px] h-[500px] p-10 relative rounded-3xl mt-60 mb-40'>
        <div className='bg-yellow w-[400px] h-[400px] flex justify-center items-center rounded-full'>
            <Image width={500} height={20} alt="" className="w-60 h-fit   " src='/images/spilled-cup-of-coffee-spray-and-drop-sloppy-handling-in-kitchen-vector copy.jpg' />
        </div>
        <div className='flex-col items-center p-5'>
            <h2 className='text-white text-2xl py-5 '>errroooooooorrrrrrrr</h2>
            <p className='text-white text-2xl'>لورم اپیسون متن ساختگی برایه نمایش ارور تویه صفحه ی ارور در اینجا بد<br /> ها قراره پیام ارور سرور ب صورت مستقیم ب کار بر نمایش داده بسشه</p>
        </div>
        <button className= ' absolute bottom-40 left-20 bg-yellow hover:bg-white text-white hover:text-yellow w-32 h-fit rounded-xl text-lg border-2 border-yellow hover:border-yellow'>نلاش مجدد</button>
    </div>
</div>
  )
}

export default error