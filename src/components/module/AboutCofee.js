"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'


function AboutCofee() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY >= 120;
      setScrolled(isScrolled);

      //console.log('Scroll about:', isScrolled)
    };


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
    <div className='bg-greay w-screen mt-20 p-20'>
      <div className='flex flex-col justify-center items-center '>
        <h4 className='text-white md:text-4xl text-3xl py-2 text-center '>مادر این زمینه متخصص هستیم</h4>
        <Image width={100} height={100} alt='' className='py-3' src='/images/coffee_underline.png' />
        <p className='text-white text-center '>در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ
          <br />در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه رط سخت تایپ </p>
      </div>
      <div className={`flex flex-col md:flex-row justify-around pt-10 
      ${scrolled ? 'flex flex-col md:flex-row justify-around pt-10 animate__animated animate__fadeInUp animate__delay-2s' : ""}`}>
        <div className='flex flex-col  items-center'>
          <Image width={100} height={100} alt='' className='bg-[#f44026] w-28 h-28 p-6 rounded-full' src='/images/counter_customer.png' />
          <span className='text-white text-4xl font-bold pt-5'>+26k</span>
          <h4 className='text-white text-xl'>مشتریان راضی</h4>
        </div>

        <div className='flex flex-col  items-center my-7 md:my-0 '>
          <Image width={100} height={100} alt='' className='bg-[#fec422] w-24 h-28 p-6 rounded-full' src='/images/counter_project.png' />
          <span className='text-white text-4xl font-bold pt-5'>+700</span>
          <h4 className='text-white text-xl'> پروزه هایه تکمیل شده</h4>
        </div>

        <div className='flex flex-col  items-center '>
          <Image width={100} height={100} alt='' className='bg-[#ed6622] w-28 h-28 p-8 rounded-full' src='/images/counter_branch.png' />
          <span className='text-white text-4xl font-bold pt-5'>+200</span>
          <h4 className='text-white text-xl'> شعبه هایه بین المللی</h4>
        </div>


      </div>

    </div>
  )
}

export default AboutCofee