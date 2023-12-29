"use client"
import Image from "next/image";
import { Icon } from '@iconify/react'
import Link from "next/link";
//import Counter from "@/elements/Counter";




function FormDetails({ data }) {


    return (

        <>
            <Link href={`/card/${item.id}`}>
                {data.map((item) => (
                    <div key={item.id} className='flex justify-between pt-20 items-center'>
                        <div className='flex items-center'>
                            <Image className="" width={100} height={100} alt="محصول" src={item.img} />
                            <span className="text-gray-900 text-xl pr-5">{item.title}</span>
                        </div>
                        {/*<Counter />*/}
                        <div >
                            <span className="text-gray-900 text-xl ml-10">{item.sprice}</span>
                        </div>
                        <div >
                            <span className="text-gray-900 text-xl ">{item.sprice}</span>
                        </div>
                        <button className=' h-fit  w-auto p-3 rounded-full text-white bg-yellow hover:text-yellow hover:bg-white hover:border-yellow border transition-all delay-75 '>حذف  </button>
                    </div>

                ))}
            </Link>
        </>
    )
}
export default FormDetails;