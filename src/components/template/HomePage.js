
"use client"
import Image from 'next/image'

import AboutCofee from '@/module/AboutCofee'
import HomeSectionFive from '@/module/HomeSectionFive'
import HomeSectionFour from '@/module/HomeSectionFour'
import HomeSectionOne from '@/module/HomeSectionOne'
import HomeSectionThree from '@/module/HomeSectionThree'
import HomeSectionTow from '@/module/HomeSectionTow'
import 'animate.css';
import SliderImage from '@/module/Slider/SliderImage'
import { useEffect, useState } from 'react'

function HomePage({ options }) {
    const [scrolled, setScrolled] = useState(0);
    const data = options
    //console.log(data)
    const [optionsData, setOptionsData] = useState({
        logo: null,
        sitename: null,
        description: null,
        // اطلاعات دیگر که می‌خواهید دریافت کنید را اینجا اضافه کنید
    });
    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY >= 50;
          setScrolled(isScrolled);
    
          console.log('Scroll home:', isScrolled)
        };
    
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    useEffect(() => {
        if (data) {
            setOptionsData({
                logo: data.information_site.logo2,
                sitename:data.information_site.sitename,
                description: data.information_site.description
            });
            
        }
    }, [data])

    return (

        <div className='bg-white relative'>
            <div className='w-screen md:h-[800px] h-[500px]'>
           <SliderImage data={options}/>
            </div>

            <div className='relative flex-col md:flex-row   py-10 mx-5 mt-20  md:p-10'>
                <div className={`flex ${scrolled? 'animate__animated animate__backInLeft animate__delay-2s':''}`} >
                    <Image width={500} height={800} alt='' className='rounde-xl' src='/images/coffee_about.jpg' />
                </div>
                <div className={`pt-5 md:pt-0 md:absolute bottom-40 right-80 md:mr-40 mr-0${scrolled ? " animate__animated animate__backInRight animate__delay-2s" :''}`}>
                    <div className='flex-col flex items-center justify-center md:h-80  md:w-[800px] rounded-lg bg-greay p-5'>
                        <h4 className='text-3xl text-white py-3'>درباره</h4>
                        <h2 className='text-4xl text-yellow font-bold pb-5'>{optionsData.sitename} </h2>
                        <p className='text-xl text-white text-center md:text-start'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                        <button className='text-xl border-b border-yellow text-yellow mt-3 md:mt-0'  >بیشتر بخوانید</button>
                    </div>
                </div>
                <div className={`absolute bottom-0 left-0 hidden md:flex ${scrolled ? "animate__animated animate__fadeInUp animate__delay-2s" :''}`}>
                    <Image width={200} height={800} alt='' src='/images/coffee_bag2.png'/>
                </div>
            </div>

            <AboutCofee />
            <HomeSectionOne />
            <HomeSectionTow />
            <HomeSectionThree />
            <HomeSectionFour />
            <HomeSectionFive />







        </div>
    )
}

export default HomePage