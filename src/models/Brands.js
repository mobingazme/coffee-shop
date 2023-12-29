"use client"
import useBrandStore from '@/stores/useBrandStore'
import Link from 'next/link';
import React, { useEffect } from 'react'


function Brands() {
    const {brands ,fetchBrands } =useBrandStore();
 
//console.log(brands)

useEffect(()=>{
    fetchBrands();
},[fetchBrands])
  return (
    <div className="bg-white p-4 w-auto rounded-lg flex justify-center items-center animate__animated animate__backInUp border-b-4 border-yellow">
        <ul>
           {brands.map(brand => (
            <li className='text-sm text-yellow' key={brand.id} >
                <Link href={"/"}>
                {brand.title}
                </Link>
            </li>
           ))}
        </ul>

    </div>
  )
}

export default Brands