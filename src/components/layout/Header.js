"use client"

import React, { useEffect, useState } from 'react'
import Search from './SearchBox'
import Image from 'next/image'


import { Icon } from '@iconify/react'
import Link from 'next/link'
import Saidebar from './Sidebar'
import LogoutButton from '@/elements/LogoutButton'
import useOptionsStore from '@/stores/OptionsStore'
import { getToken } from '@/stores/SignupStore'
import useBrandStore from '@/stores/useBrandStore'
import Categorys from '@/models/Categorys'
import Brands from '@/models/Brands'



function Header() {

  const { options, getOptionsFromApi } = useOptionsStore()
  const { brands, fetchBrands } = useBrandStore();

  const token = getToken();

  const [optionsData, setOptionsData] = useState({
    logo: null,
    sitename: null,
    description: null,
    // اطلاعات دیگر که می‌خواهید دریافت کنید را اینجا اضافه کنید
  });




  const [showBox, setShowBox] = useState(false);
  const [blog, setblog] = useState(false);
  const [search, setsearch] = useState(false);
  const [saidbar, setSaidbar] = useState(false)
  const [cart, setCart] = useState(false)
  const [shadow, setShadow] = useState(false);
  const [brand, setBrand] = useState(false);

  useEffect(() => {
    if (options) {
      setOptionsData({
        logo: options.information_site.logo,
        sitename: options.information_site.sitename,
        description: options.information_site.description
      });
    }
  }, [options]);



  useEffect(() => {
    getOptionsFromApi()


    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);



  return (
    <div id='header' className=' fixed z-50 md:w-auto  animate__fadeInUp animate__delay-1s'>
      <div className={
        shadow
          ? "bg-white flex justify-around items-center rounded-none p-1 w-screen   h-32 md:h-24 animate__animated animate__fadeInUp animate__delay-2s "
          : "bg-white flex justify-around items-center rounded-full p-1 w-screen  md:w-auto my-10 md:my-20 md:mx-20 h-32 md:h-24  animate__animated animate__fadeInUp animate__delay-2s "
      }
      >
        <div className=' hidden md:flex '>
          <img alt='logo' src={optionsData.logo} />
        </div>
        <div className="  items-center hidden md:flex">
          <Link href={'/'} > <h2 className=" text-black text-lg p-6 w-auto   hover:text-yellow cursor-pointer">صفحه اصلی</h2></Link>
          <h2 className=" text-black text-lg p-6 w-auto   hover:text-yellow cursor-pointer">درباره ما</h2>
          <h2 className=" text-black text-lg p-6 w-auto   hover:text-yellow delay-100 cursor-pointer" onMouseEnter={() => setBrand(true)} onMouseLeave={() => setBrand(false)}>برند ها</h2>

          <h2 className=" text-black text-lg p-6 w-auto   hover:text-yellow delay-100 cursor-pointer" onMouseEnter={() => setblog(true)} onMouseLeave={() => setblog(false)}>بلاگ</h2>
          <h2 className=" text-black text-lg p-6 w-auto   hover:text-yellow delay-100 cursor-pointer"  >گالری</h2>
          <h2 className=" text-black text-lg p-6 w-auto   hover:text-yellow delay-100 cursor-pointer " onMouseEnter={() => setShowBox(true)} onMouseLeave={() => setShowBox(false)}>دسته بندی</h2>
          <h2 className=" text-black text-lg p-6 w-auto   hover:text-yellow delay-100 cursor-pointer">تماس باما</h2>


        </div>







        <div className=' flex flex-col md:flex-row justify-between items-center'>
          <img className='md:hidden mb-4 w-[200px]  ' alt='logo'></img>
          <div className='flex ml-5'>
            <Icon className='text-yellow  h-fit w-8 md:w-6 cursor-pointer' onClick={() => setsearch(!search)} icon={'majesticons:search-line'} />
            <Icon className='text-black  h-fit w-8 md:w-6 mx-5 flex  cursor-pointer' onMouseEnter={() => setCart(true)} onMouseLeave={() => setCart(false)} icon={'icon-park-outline:buy'} />
            <Icon className='text-black w-8 md:w-6 h-fit md:hidden cursor-pointer' onClick={() => setSaidbar(!saidbar)} icon={'ion:menu'} />
          </div>
          <div className=' hidden md:flex ml-5  w-auto'>
            {!token ? (
              <Link href={'/signup'} >
                <div className='w-24 h-12  text-white bg-yellow hover:text-yellow hover:bg-white hover:border-yellow hover:border transition-all delay-75 rounded-full cursor-pointer flex justify-center p-2'>
                  <h4 className=' text-lg pl-2 ' >ورود</h4>
                  <Icon className='  w-7 h-7' icon={'material-symbols:login'} />
                </div>
              </Link>
            ) : (<LogoutButton />)}
          </div>
        </div>






        {blog && (
          <div className="bg-white p-4 w-36 rounded-lg flex-col justify-center items-center absolute top-24 left-[600px]  z-50 animate__animated animate__backInUp border-b-4 border-yellow "
            onMouseEnter={() => setblog(true)}
            onMouseLeave={() => setblog(false)}>
            <ul className=' '>
              <li className="text-gray-900 hover:text-yellow cursor-pointer">بلاگ</li>
              <li className="text-gray-900 hover:text-yellow cursor-pointer py-2">ادامه مطالب </li>

            </ul>
          </div>
        )}

        {brand && (
          <div className="  w-auto  absolute top-24 right-[500px]  z-50 "
            onMouseEnter={() => setBrand(true)}
            onMouseLeave={() => setBrand(false)}>
            <Brands />
          </div>
        )}

        {showBox && (
          <div className="  w-auto  absolute top-24 left-[300px]  z-50 "
            onMouseEnter={() => setShowBox(true)}
            onMouseLeave={() => setShowBox(false)}>
            <Categorys />
          </div>
        )}

        {cart && (
          <div className="bg-white  w-80 rounded-lg flex-col justify-center items-center absolute md:top-24 top-[140px] left-10 md:left-[150px]  z-50 animate__animated animate__backInUp border-b-4 border-yellow"
            onMouseEnter={() => setCart(true)}
            onMouseLeave={() => setCart(false)}>
            <div className='flex-col  text-center p-4'>
              <h4 className='text-gray-600 mb-3'>شما 3 مورد در سبد خرید خود دارید</h4>
              <div className='flex justify-between items-center'>
                <img className='w-14 h-fit' src='/images/coffee_bag2.png' />
                <div>
                  <h6 className='text-gray-900 mb-2'>قهوه روبستا</h6>
                  {/* <Counter /> */}
                </div>
                <span className='text-gray-900'>22$</span>
              </div>
              <div className='flex justify-between items-center my-3'>
                <img className='w-14' src='/images/coffee1.png' />
                <div>
                  <h6 className='text-gray-900 mb-2'>ماگ قهوه </h6>
                  {/* <Counter /> */}
                </div>
                <span className='text-gray-900'>12$</span>
              </div>
              <div className='flex justify-between items-center'>
                <img className='w-14' src='/images/banner_coffee_bag.png' />
                <div>
                  <h6 className='text-gray-900 mb-2'>قهوه عربیکا</h6>
                  {/* <Counter /> */}
                </div>
                <span className='text-gray-900'>42$</span>
              </div>

            </div>
            <button className='w-full h-12 bg-yellow text-white font-bold'>پرداخت</button>
          </div>
        )}




        {saidbar && <Saidebar sidebarHandler={setSaidbar} />}
        {/*{search && <Search searchHandler={setsearch} />} */}


      </div>


    </div>
  )
}

export default Header