"use client"
import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useOptionsStore from '@/stores/OptionsStore'

{/*
      phone_support: options.business_information.phone_support,
        email_support: options.business_information.email_support,
        address: options.business_information.address,
        address_2: options.business_information.address_2,
        instagram: options.social.instagram,
        whatsApp: options.social.whatsApp,
        telegram: options.social.telegram,
       */}

function Footer() {
  const { options, getOptionsFromApi } = useOptionsStore()

const data = options;
  const [optionsData, setOptionsData] = useState({
    logo: null,
    sitename: null,
    description: null,
    phone_support: null,
    email_support: null,
    video_about_us: null,
    address: null,
    address_2: null,
    instagram: null,
    whatsApp: null,
    telegram: null,
    // اطلاعات دیگر که می‌خواهید دریافت کنید را اینجا اضافه کنید
  });
 

  useEffect(() => {
    getOptionsFromApi()
  }, [])

  useEffect(() => {
    if (data) {
      setOptionsData({
        logo: data.information_site.logo,
        sitename: data.information_site.sitename,
        description: data.information_site.description,
        phone_support: data.business_information.phone_support,
        email_support: data.business_information.email_support,
        address: data.business_information.address,
        address_2: data.business_information.address_2,
        instagram: data.social.instagram,
        whatsApp: data.social.whatsApp,
        telegram: data.social.telegram,
      });
      
    }
  }, [data])


  return (
    <div className='bg-white w-screen    '>
      <div className=' md:flex-row  flex-col flex  items-center justify-around '>
        <img src="/images/footer_support.png" />
        <h4 className='text-black text-2xl my-3 md:mt-0  text-center'>پشتیبانی اختصاصی و دوستانه<br /> در هر مرحله از راه</h4>
        <div className='flex w-auto h-16 mt-2  md:mt-0 bg-[#ec5e5e] rounded-full'>
          <Icon className='text-white h-16 pr-2 rounded-r-full  w-10' icon={'bxs:phone-call'} />
          <div className=' w-auto p-3'>
              <h4 className='text-lg'>{optionsData.phone_support}</h4>
          </div>
        </div>
        <div className=' w-auto  mt-2 md:mt-0 h-16 bg-yellow rounded-full flex  items-center'>
          <Icon className='w-20 h-12 ' icon={'ic:outline-local-post-office'} />
          <h4 className='text-lg p-3'> {optionsData.email_support}</h4>
        </div>
      </div>

      <div className='border-t mt-5 grid sm:grid-cols-2 md:grid-cols-4 gap-5  p-5'>
        <div className='pt-5'>
          <img className='pr-24 md:pr-0' src={optionsData.logo} />
          <h4 className='text-black pt-3 text-center md:text-start'> {optionsData.address}</h4>
          <h4 className='text-black  text-center md:text-start'> {optionsData.address_2}</h4>
          <div className=' flex items-center justify-center pt-2'>
            <Icon className=' text-black ' icon={'ic:outline-local-post-office'} />
            <h4 className='text-black pr-1 '> {optionsData.email_support}</h4>
          </div>
          <div className=' flex items-center justify-center pt-2 '>
            <Icon className='text-black' icon={'bxs:phone-call'} />
            <h5 className='text-black text-center md:text-start'> {optionsData.phone_support}</h5>
          </div>
          <div className='flex justify-center pt-4'>
            <Icon className='text-black bg-white hover:bg-yellow rounded-full md:w-6  w-8 ml-4 h-fit' icon={'eva:facebook-fill'} />
            <Icon className='text-black bg-white hover:bg-yellow rounded-full md:w-6  w-8 h-fit' icon={'streamline:telegram'} />
            <Icon className='text-black bg-white hover:bg-yellow rounded-full md:w-6  w-8 mx-5 h-fit' icon={'ion:logo-whatsapp'} />
            <Link href="/"> <Icon className='text-black bg-white hover:bg-yellow rounded-full md:w-6  w-8 h-fit' icon={'mdi:instagram'} /></Link>
          </div>
        </div>

        <div className='pt-5'>
          <h3 className='text-black text-2xl font-bold'>اطلاعات</h3>
          <div className='flex items-center pt-5  '>
            <Icon className='text-gray-600 ' icon={'icon-park-outline:left'} />
            <h5 className='text-gray-600 hover:text-yellow transform-all cursor-pointer'>فروشگاه</h5>
          </div>
          <div className='flex items-center py-2 '>
            <Icon className='text-gray-600' icon={'icon-park-outline:left'} />
            <h5 className='text-gray-600 hover:text-yellow transform-all cursor-pointer'>محدوده ما</h5>
          </div>
          <div className='flex items-center '>
            <Icon className='text-gray-600' icon={'icon-park-outline:left'} />
            <h5 className='text-gray-600 hover:text-yellow transform-all cursor-pointer'>درباره ما</h5>
          </div>
          <div className='flex items-center py-2 '>
            <Icon className='text-gray-600' icon={'icon-park-outline:left'} />
            <h5 className='text-gray-600 hover:text-yellow transform-all cursor-pointer' >اخبار</h5>
          </div>
          <div className='flex items-center '>
            <Icon className='text-gray-600' icon={'icon-park-outline:left'} />
            <h5 className='text-gray-600 hover:text-yellow transform-all cursor-pointer'>تماس باما</h5>
          </div>
        </div>

        <div className='pt-5'>
          <h3 className='text-black text-2xl font-bold'>دسته بندی ها</h3>
          <div className='flex items-center pt-5 '>
            <Icon className='text-gray-600' icon={'icon-park-outline:left'} />
            <h5 className='text-gray-600   hover:text-yellow transform-all cursor-pointer'>قهوه ها</h5>
          </div>
          <div className='flex items-center py-2 '>
            <Icon className='text-gray-600' icon={'icon-park-outline:left'} />
            <h5 className='text-gray-600 hover:text-yellow transform-all cursor-pointer'> دستگاها هایه قهوه</h5>
          </div>
          <div className='flex items-center '>
            <Icon className='text-gray-600' icon={'icon-park-outline:left'} />
            <h5 className='text-gray-600 hover:text-yellow transform-all cursor-pointer'> لوازم قهوه</h5>
          </div>
          <div className='flex items-center py-2 '>
            <Icon className='text-gray-600' icon={'icon-park-outline:left'} />
            <h5 className='text-gray-600 hover:text-yellow transform-all cursor-pointer'>اموزش قهوه</h5>
          </div>
          <div className='flex items-center ' >
            <Icon className='text-gray-600' icon={'icon-park-outline:left'} />
            <h5 className='text-gray-600  hover:text-yellow transform-all cursor-pointer' >اموزش کشت قهوه </h5>
          </div>
        </div>

        <div className='pt-5'>
          <h3 className='text-black text-2xl font-bold'>  اخرین اخبار</h3>

          <p className='text-black  pt-5 text-lg'>{optionsData.description}</p>
          <p className='text-yellow' >https://T.Co/Sr45bvMJU6</p>

          <p className='text-black  text-lg'> {optionsData.description}</p>
          <p className='text-yellow' >https://T.Co/Sr45bvMJU6</p>
        </div>


      </div>

      <div className='bg-greay w-screen h-12 flex justify-center items-center'>
        <p className='text-white text-'> تمامی حقوق محفوظ است.قالب اختصاصی</p>
      </div>

    </div>



  )
}

export default Footer