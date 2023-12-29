"use client"
import Image from 'next/image'
import { Icon } from '@iconify/react'
import SliderProduct from './Slider/SliderProduct'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useProductsStore from '@/stores/useProductsStore'

function HomeSectionFour  ()  {
  const {products , fetchProducts } = useProductsStore()
    const [scrolled, setScrolled] = useState(false);

 //console.log(products)

    useEffect(() => {
      fetchProducts();
      const handleScroll = () => {
        const isScrolled = window.scrollY >= 170;
        setScrolled(isScrolled);
  
       // console.log('Scroll home:', isScrolled)
      };
  
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [fetchProducts]);
    return (
        <div className='bg-greay w-screen mt-20 p-20'>
            <div className='flex flex-col justify-center items-center '>
                <h4 className='text-white text-4xl py-2'> فروشگاه آنلاین     </h4>
                <Image width={150} height={100} alt=""className='py-3' src='/images/coffee_underline.png' />
                <p className='text-white text-center'>در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ
                    <br />در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه رط سخت تایپ </p>
            </div>
            <div className={`pt-10 flex justify-between ${scrolled ? ' animate__animated animate__rotateInDownLeft animate__delay-2s ' :''}`}>
                <SliderProduct data={products}/>
                <Link href='/store' className="flex-col items-center justify-center bg-yellow hover:bg-white text-white hover:text-yellow delay-75 border-yellow border-2 rounded-l-xl  cursor-pointer transition-all w-14 md:w-40  " >
                
                <h3 className="text-2xl pt-20 px-1 md:px-7">نمایش بیشتر</h3>
                <Icon className=' w-10 h-10 ml-5 md:mx-12 ' icon={'icon-park-solid:left-two'} />
                
                </Link>
            </div>

        </div>
    )
}

export default HomeSectionFour