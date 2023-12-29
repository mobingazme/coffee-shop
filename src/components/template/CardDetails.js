"use client"
import React, { useState } from "react"
import { Icon } from '@iconify/react'
import Image from 'next/image'
import SliderProductDetails from "@/module/Slider/sliderProductDetails";
import ShowDetails from "@/models/ShowDetails";
import Link from "next/link";

function CardDetails({ data }) {
     const { id, title, brief,cover,inventory,sale_price,sku, old_price, value_discount,sale_type,} = data || "";
    

   // console.log(data)



    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };


    return (
        <div className="w-full bg-white  md:p-40 p-7 mt-40 md:mt-0">
            <div className="grid md:grid-cols-4  grid-cols-1  pt-0 md:pt-20 ">
                <div className=" w-40 hidden md:flex flex-col ">

                    <img alt='' className="w-28 h-32 rounded-lg border-yellow border-2 p-2" src={cover} />
                    <img width={100} height={30} alt='' className="w-28 h-32 rounded-lg border-yellow border-2 p-2 my-4" src={cover} />
                    <img width={100} height={30} alt='' className="w-28 h-32 rounded-lg border-yellow border-2 p-2" src={cover} />

                </div>

                <div className="md:w-[350px] w-[300px] md:col-span-2 mr-8 md:mr-0">
                    <SliderProductDetails Data={data} />
                </div>


                <div className=" mt-5 md:mt-0 mr-0">
                    <h2 className="text-gray-900 text-2xl">{title} </h2>
                    <h4 className="text-gray-500">{sale_type}</h4>
                    <div className="flex mt-5">
                        <Icon className='text-yellow mx-1 w-5 h-fit' icon={'clarity:star-solid'} />
                        <Icon className='text-yellow w-5 h-fit' icon={'clarity:star-solid'} />
                        <Icon className='text-yellow mx-1 w-5 h-fit' icon={'clarity:star-solid'} />
                        <Icon className='text-gray-500 w-5 h-fit' icon={'clarity:star-solid'} />
                        <Icon className='text-gray-500 mx-1 w-5 h-fit' icon={'clarity:star-solid'} />
                        <h4 className="text-gray-500">{inventory} بازخورد</h4>
                    </div>
                    <div className="flex mt-5">
                        <h4 className="text-gray-500 ml-5 text-lg ">کد محصول :{sku}</h4>
                        <h4 className="text-gray-500 text-lg">وضعیت : <span className="text-yellow text-lg">درانبار</span></h4>
                    </div>
                    <p className="text-gray-500 pt-5 text-center md:text-start">{brief}</p>
                    <div className="flex mt-5 ">
                        <h4 className="text-gray-900 text-xl">{sale_price}</h4>
                        <del className="text-gray-500 text-lg mx-3">{old_price}</del>
                        <h4 className="text-yellow ">10% تخفیف</h4>
                    </div>
                    <div className="flex justify-around items-baseline ">
                        <div className="flex border rounded-lg  p-1">
                            {/*<Counter/> */}
                        </div>

                        <button className=' h-fit mt-10 w-auto p-3 rounded-full text-white bg-yellow hover:text-yellow hover:bg-white hover:border-yellow border transition-all delay-75 hover:animate__animated animate__zoomOut'>افزودن ب سبد خرید</button>

                    </div>
                </div>

            </div>


            <ShowDetails Data={data} />





        </div>
    )
}

export default CardDetails