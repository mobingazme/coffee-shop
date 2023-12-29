"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { Icon } from '@iconify/react'

function Card( props ) {
  const {id ,cover ,sale_price,title} = props

    return (
        <Link href={`/store/${id}`}>
        <div className="bg-white rounded-xl flex flex-col w-60 h-fit p-2 border-2 border-yellow hover:shadow-md ">
         <h6 className="bg-yellow text-white w-24 rounded-full px-2">30% تخفیف</h6>
            <img width={300} height={100} alt='عکس' className="w-48 h-48  m-4" src={cover} />
            <h4 className="text-black text-2xl flex justify-center ">{title}</h4>
            <h4 className="text-black text-xl flex justify-center ">{sale_price}</h4>
        </div>
        </Link>
    )
}

export default Card


//<Icon className='text-yellow mx-1 w-5 h-fit' icon={'clarity:star-solid'} />