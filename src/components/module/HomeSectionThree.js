"use client"
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useEffect, useState } from 'react';

function HomeSectionThree  () {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY >= 170;
      setScrolled(isScrolled);

     // console.log('Scroll home:', isScrolled)
    };


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return(
        <div className=' w-screen pt-20 '>
        <div className='flex flex-col justify-center items-center pb-24 '>
          <h4 className='text-black text-4xl py-2'> مشتریان    </h4>
          <Image width={150} height={100} alt='' className='py-3' src='/images/coffee_underline.png' />
          <p className='text-black text-center p-3'>در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ
            <br />در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه رط سخت تایپ </p>
        </div>

        <div className={`bg-greay  md:rounded-2xl  md:m-5 relative ${scrolled ? 'animate__animated animate__backInLeft animate__delay-2s':''}`}>
          <Image width={100} height={100} alt=''className=' absolute hidden md:flex bottom-[200px]  right-[600px] rounded-full' src='/images/testimonial_client3.jpg' />
          <p className='text-lg text-center  py-10'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک <br />است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی <br />تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
          <div className='flex justify-center'>
            <Icon className='text-gray-200 w-6 h-fit mt-5 ' icon={'lucide:move-right'} />
            <h4 className='text-yellow text-xl p-5'>مبین گزمه</h4>
            <Icon className='text-gray-200 w-6 h-fit mt-5  ' icon={'lucide:move-left'} />
          </div>
        </div>


      </div>
    )
}

export default HomeSectionThree