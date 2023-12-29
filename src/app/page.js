"use client"
import useOptionsStore from '@/stores/OptionsStore';
import HomePage from '@/template/HomePage';
import Image from 'next/image';
import { useEffect } from 'react';

{/*
export async function getServerSideProps() {
  const optionsStore = useOptionsStore.getState();
  await optionsStore.getOptionsFromApi(); // فراخوانی تابع دریافت اطلاعات از API

  return {
    props: {
      options: optionsStore.options,
    },
    revalidate: 60 * 60 * 24 , // زمان (ثانیه) برای ری‌گنریشن مجدد صفحه
  };
}  */}

export default function Home() {
  const { options, getOptionsFromApi } = useOptionsStore()
  

  useEffect(()=>{
    getOptionsFromApi()
  },[])
  return (
    <div>
      {/* از وضعیت‌هایی که از useOptionsStore دریافت کردید استفاده کنید */}
      {/* به طور مثال، نمایش اطلاعات دریافت شده */}
      <HomePage options={options} />
    </div>
  );
}