
import React from "react"
function Product1 (){
    return(
        <div className='grid  md:grid-cols-3 mt-5  justify-items-center animate__animated animate__fadeInUp'>
        <div className=' w-80 flex flex-col md:shadow md:hover:shadow-lg mt-6 md:mt-0'>
          <div className='bg-red-600 rounded-t-xl rounded-br-3xl w-80 h-40 '>
            <h6 className='text-2xl flex justify-center mt-5 pb-3'>پایه</h6>
            <h4 className='text-4xl flex justify-center '>20000</h4>
          </div>
          <div className='flex flex-col  items-center'>
            <h4 className='text-gray-800 md:text-sm py-8 md:py-5  '>1کیلو قهوه ی عالی</h4>
            <h4 className='text-gray-800 md:text-sm  '>1 دستگاه قهوه ساز</h4>
            <h4 className='text-gray-800 md:text-sm py-8 md:py-5  '>آموزش ساخت قهوه</h4>
            <h4 className='text-gray-800 md:text-sm  pb-5'>آموزش فروش قهوه</h4>
            <button className='bg-greay  hover:bg-yellow w-40 h-14 md:h-10 rounded-full transition-all delay-75'>پرداخت</button>

          </div>
        </div>
        <div className=' w-80 flex flex-col md:shadow md:hover:shadow-lg mt-6 md:mt-0'>
          <div className='bg-blue-400 rounded-t-xl  w-80 h-40'>
            <h6 className='text-2xl flex justify-center mt-5 pb-3'>حرفه ای</h6>
            <h4 className='text-4xl flex justify-center'>20000</h4>
          </div>
          <div className='flex flex-col  items-center'>
            <h4 className='text-gray-800 md:text-sm py-8 md:py-5  '>1کیلو قهوه ی عالی</h4>
            <h4 className='text-gray-800 md:text-sm  '>1 دستگاه قهوه ساز</h4>
            <h4 className='text-gray-800 md:text-sm py-8 md:py-5  '>آموزش ساخت قهوه</h4>
            <h4 className='text-gray-800 md:text-sm  pb-5'>آموزش فروش قهوه</h4>
            <button className='bg-greay  hover:bg-yellow w-40 h-14 md:h-10 rounded-full transition-all delay-75'>پرداخت</button>

          </div>
        </div>
        <div className=' w-80 flex flex-col md:shadow md:hover:shadow-lg mt-6 md:mt-0'>
          <div className='bg-yellow rounded-t-xl rounded-bl-3xl w-80 h-40'>
            <h6 className='text-2xl flex justify-center mt-5 pb-3'>نامحدود</h6>
            <h4 className='text-4xl flex justify-center'>20000</h4>
          </div>
          <div className='flex flex-col  items-center'>
            <h4 className='text-gray-800 md:text-sm py-8 md:py-5  '>1کیلو قهوه ی عالی</h4>
            <h4 className='text-gray-800 md:text-sm  '>1 دستگاه قهوه ساز</h4>
            <h4 className='text-gray-800 md:text-sm py-8 md:py-5  '>آموزش ساخت قهوه</h4>
            <h4 className='text-gray-800 md:text-sm  pb-5'>آموزش فروش قهوه</h4>
            <button className='bg-greay  hover:bg-yellow w-40 h-14 md:h-10 rounded-full mb-2 transition-all delay-75'>پرداخت</button>

          </div>
        </div>
      </div>

    )
}

export default Product1