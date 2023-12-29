"use client"
import { Icon } from '@iconify/react'
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Link from 'next/link';




// import required modules





function SliderProduct({ data }) {

    return (
        <>
            <Swiper
                breakpoints={{
                    0: {
                        // width: 576,
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    320: {
                        // width: 576,
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    450: {
                        // width: 576,
                        slidesPerView: 1.20,
                        spaceBetween: 0
                    },
                    576: {
                        // width: 576,
                        slidesPerView: 1.50,
                        spaceBetween: 0
                    },
                    676: {
                        // width: 576,
                        slidesPerView: 2,
                        spaceBetween: 0
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 2.20,
                        spaceBetween: 0
                    },
                    900: {
                        // width: 768,
                        slidesPerView: 3,
                        spaceBetween: 0
                    },
                    1148: {
                        // width: 768,
                        slidesPerView: 4,
                        spaceBetween: 0
                    },
                }}
                slidesPerView={4}
                spaceBetween={30}


                className="mySwiper"
            >

                {data.map((item) => (

                    <SwiperSlide key={item.id} >
                      <div className="bg-white rounded-xl flex flex-col w-60 h-fit p-2">
                            <h6 className="bg-yellow text-white w-24 rounded-full px-2">30% تخفیف</h6>
                            <Link href={`/store/${item.id}`}>
                            <img width={300} height={100} alt='' className="w-48 h-48  m-4" src={item.cover} />
                            <h4 className="text-black text-2xl flex justify-center ">{item.title}</h4>
                            <h4 className="text-black text-xl flex justify-center ">{item.old_price}</h4>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}

export default SliderProduct




