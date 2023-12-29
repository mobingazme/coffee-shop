"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';

function HomeSectionOne (){
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
        <div className='relative flex flex-col md:flex-row justify-around pt-20  pb-10 p-10 '>
        <div className='flex flex-col  items-center  '>
          <h4 className='text-black text-xl md:text-3xl'>ما چه کسانی هستیم</h4>
          <h2 className='text-black text-3xl md:text-5xl pt-3'>کشاورزی قهوه عالی</h2>
          <p className='text-black text-xl pt-10 text-center md:text-start'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با<br /> استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در<br /> ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
          <p className='text-black text-xl pt-10 text-center md:text-start'>کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان<br /> جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای<br /> طراحان رایانه ای</p>
          <button className='text-yellow text-xl border-b border-yellow my-3 md:my-0'>بیشتر بخوانید</button>
        </div>
        <div className={`${scrolled ? " animate__animated animate__fadeInLeft animate__delay-2s" : ""}`} >
          <Image width={500} height={500} alt="" className='w-full rounde-xl' src='/images/coffee_farming.jpg' />
        </div>

        <div className={` md:absolute md:bottom-0 md:right-40 mt-7 md:mt-0 ${scrolled ? "animate__animated animate__fadeInUp animate__delay-2s" :''}`}>
          <div className='  h-auto  md:w-[600px] rounded-lg bg-greay '>
            <div className='flex-col flex items-center'>
              <h4 className=' text-xl md:text-3xl text-white py-3'>بهترین</h4>
              <h2 className=' text-3xl md:text-4xl text-yellow font-bold pb-5'>  خدمات قهوه</h2>
            </div>
            <div className='flex flex-col md:flex-row justify-around py-2 '>
              <div className='flex flex-col items-center'>
                <Image width={100} height={100} alt=""className='bg-[#2b2d34] rounded-full w-20 p-5' src='/images/coffee_icon1.png' />
                <h4 className='text-white text-lg pt-2'>قهوه</h4>
              </div>
              <div className='flex flex-col items-center my-7 md:my-0'>
                <Image width={100} height={100} alt=""className='bg-[#2b2d34] rounded-full w-20 h-20 p-5' src='/images/coffee_icon2.png' />
                <h4 className='text-white text-lg pt-2'>فنجان قهوه</h4>
              </div>
              <div className='flex flex-col items-center'>
                <Image width={100} height={100} alt=""className='bg-[#2b2d34] rounded-full w-20 h-20 p-5' src='/images/coffee_icon3.png' />
                <h4 className='text-white text-lg pt-2'>قهوه ساز</h4>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
}

export default HomeSectionOne