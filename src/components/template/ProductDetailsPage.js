"use client"
//import Counter from '@/models/Counter'

import React, { useState } from "react"
import FormDetails from '@/models/FormDetails'

function ProductDetailsPage({ data }) {
  // استیت محلی برای نگهداری محصولات در سبد خرید
  const [cartItems, setCartItems] = useState([]);
console.log(data)
  // تابع برای افزودن محصول به سبد خرید
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className='bg-white w-screen h-full'>
      <div className=' shadow-lg rounded-lg flex-col p-20  pt-60 justify-center  '>
        <div className=' flex justify-between m-10'>
          <h3 className='text-black text-2xl font-bold'>سبد خرید</h3>
          <h3 className='text-black text-2xl font-bold'>{cartItems.length} محصول در سبد خرید شما موجود است</h3>
        </div>
        <div className='flex justify-between pt-10'>
          <h4 className='text-gray-500 text-xl font-bold'>محصول</h4>
          <h4 className='text-gray-500 text-xl font-bold'>تعداد</h4>
          <h4 className='text-gray-500 text-xl font-bold'>قیمت</h4>
          <h4 className='text-gray-500 text-xl font-bold'>مجموع</h4>
          <h4 className='text-gray-500 text-xl font-bold'>حذف</h4>
        </div>

        {/* نمایش محصولات در سبد خرید */}
        <FormDetails cartItems={cartItems} />

        <button className=' h-fit mt-10 w-auto p-3 rounded-full text-white bg-yellow hover:text-yellow hover:bg-white hover:border-yellow border transition-all delay-75 '>رفتن به پرداخت</button>
      </div>
    </div>
  )
}

export default ProductDetailsPage;