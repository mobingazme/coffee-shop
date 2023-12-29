"use client"
import Image from 'next/image'

function Loading() {
  return (
    <div className=" w-screen h-screen fixed top-0 bottom-0 right-0 left-0  gap-6 flex flex-col justify-center items-center bg-white ">
            

    <div>
        <Image width={20} height={20} alt="" className="w-32 h-32  " src='/images/preloader.gif'/>
    </div>
    </div>

  )
}

export default Loading