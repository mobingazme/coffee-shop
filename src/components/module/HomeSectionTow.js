"use client"
import Image from 'next/image'
import SliderParts from './Slider/SliderParts'
import { useEffect, useState } from 'react';

 function HomeSectionTow  () {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY >= 170;
      setScrolled(isScrolled);

      //console.log('Scroll home:', isScrolled)
    };


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
        <div className='bg-greay w-screen mt-20 p-20'>
        <div className='flex flex-col justify-center items-center '>
          <h4 className='text-white text-4xl py-2'>گروه ما    </h4>
          <Image width={100} alt="/" height={100} className='py-3' src='/images/coffee_underline.png' />
          <p className='text-white text-center'>در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ
            <br />در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه رط سخت تایپ </p>
        </div>
        <div className={` pt-10 ${scrolled ? "animate__animated animate__fadeInUp animate__delay-2s" :''}`}>
          <SliderParts/>

        </div>

      </div>

    )
 }

 export default HomeSectionTow