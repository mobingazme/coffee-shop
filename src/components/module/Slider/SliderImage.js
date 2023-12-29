
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

function SliderImage({ data }) {
    const options = data
    const [optionsData, setOptionsData] = useState({
        logo: null,
        sitename: null,
        description: null,
        // اطلاعات دیگر که می‌خواهید دریافت کنید را اینجا اضافه کنید
    });


    useEffect(() => {
        if (options) {
            setOptionsData({
                logo: options.information_site.logo2,
                sitename: options.information_site.sitename,
                description: options.information_site.description
            });
        }
    }, [options])
    return (
        <>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper flex "
            >

                <SwiperSlide className="bg-[url('/image/index6_slider_bg2.jpg')] md:h-[800px] h-[600px]  relative">
                    <div className="flex  backdrop-blur-sm bg-[#000000b2] md:h-[800px] h-[600px] ">
                        <div className="flex items-end">
                            <Image width={500} height={100} alt='' className="hidden md:flex h-[500px]" src='/images/banner_coffee_bag.png' />
                            <div className=" absolute md:bottom-10 md:left-10 flex flex-col items-center md:items-start " >
                                <h4 className=" text-center font-bold text-yellow text-2xl bg-[#6b6c70] w-40 rounded-md p-1 md:mt-0 mt-5" >کشاورزی قهوه</h4>
                                <h2 className="  text-white text-3xl md:text-6xl p-1 py-2"  >{optionsData.sitename}</h2>
                                <h2 className="text-yellow text-6xl p-1 py-2" >سلامتی بیشتر</h2>
                                <h5 className="text-white text-xl p-1 py-4 text-center md:text-start" >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                    استفاده <br />از طراحان گرافیک است.
                                </h5>
                                <button className="text-white hover:text-yellow hover:border-2 border-yellow text-xl w-40 h-10 bg-yellow hover:bg-greay  rounded-full p-1 transition-all delay-100  my-8 md:my-0 ">بیشتر بخوانید</button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-[url('/image/index6_slider_bg2.jpg')] md:h-[800px] h-[600px]  relative">
                    <div className="flex  backdrop-blur-sm bg-[#000000b2] md:h-[800px] h-[600px] ">
                        <div className="flex items-end">
                            <Image width={500} height={100} alt='' className="hidden md:flex h-[500px]" src='/images/banner_coffee_bag.png' />
                            <div className=" absolute md:bottom-10 md:left-10 flex flex-col items-center md:items-start " >
                                <h4 className=" text-center font-bold text-yellow text-2xl bg-[#6b6c70] w-40 rounded-md p-1 md:mt-0 mt-5" >کشاورزی قهوه</h4>
                                <h2 className="  text-white text-3xl md:text-6xl p-1 py-2"  ><span className=' border-b-4  font-bold'>قهوه</span> سالم برای</h2>
                                <h2 className="text-yellow text-6xl p-1 py-2" >سلامتی بیشتر</h2>
                                <h5 className="text-white text-xl p-1 py-4 text-center md:text-start" >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                    استفاده <br />از طراحان گرافیک است.
                                </h5>
                                <button className="text-white hover:text-yellow hover:border-2 border-yellow text-xl w-40 h-10 bg-yellow hover:bg-greay  rounded-full p-1 transition-all delay-100  my-8 md:my-0 ">بیشتر بخوانید</button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-[url('/image/index6_slider_bg2.jpg')] md:h-[800px] h-[600px]  relative">
                    <div className="flex  backdrop-blur-sm bg-[#000000b2] md:h-[800px] h-[600px] ">
                        <div className="flex items-end">
                            <Image width={500} height={100} alt='' className="hidden md:flex h-[500px]" src='/images/banner_coffee_bag.png' />
                            <div className=" absolute md:bottom-10 md:left-10 flex flex-col items-center md:items-start " >
                                <h4 className=" text-center font-bold text-yellow text-2xl bg-[#6b6c70] w-40 rounded-md p-1 md:mt-0 mt-5" >کشاورزی قهوه</h4>
                                <h2 className="  text-white text-3xl md:text-6xl p-1 py-2"  ><span className=' border-b-4  font-bold'>قهوه</span> سالم برای</h2>
                                <h2 className="text-yellow text-6xl p-1 py-2" >سلامتی بیشتر</h2>
                                <h5 className="text-white text-xl p-1 py-4 text-center md:text-start" >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                    استفاده <br />از طراحان گرافیک است.
                                </h5>
                                <button className="text-white hover:text-yellow hover:border-2 border-yellow text-xl w-40 h-10 bg-yellow hover:bg-greay  rounded-full p-1 transition-all delay-100  my-8 md:my-0 ">بیشتر بخوانید</button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}





export default SliderImage











{/*


import React from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectFade } from 'swiper/modules';


// import required modules
import { EffectCoverflow, Pagination  } from "swiper";

function SliderImage() {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper flex "
            >

             

                <SwiperSlide className="bg-[url('/image/index6_slider_bg2.jpg')] md:h-[800px] h-[600px]  relative">
                    <div className="flex  backdrop-blur-sm bg-[#00000056] md:h-[800px] h-[600px] ">
                        <div className="flex items-end">
                            <img className="hidden md:flex h-[500px]" src='/images/banner_coffee_bag.png'></img>
                            <div className=" absolute md:bottom-10 md:left-10 flex flex-col items-center md:items-start " >
                                <h4 className=" text-center font-bold text-yellow text-2xl bg-[#6b6c70] w-40 rounded-md p-1 md:mt-0 mt-5" >کشاورزی قهوه</h4>
                                <h2 className="  text-white text-3xl md:text-6xl p-1 py-2"  ><span className=' border-b-4  font-bold'>قهوه</span> سالم برای</h2>
                                <h2 className="text-yellow text-6xl p-1 py-2" >سلامتی بیشتر</h2>
                                <h5 className="text-white text-xl p-1 py-4 text-center md:text-start" >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                    استفاده <br />از طراحان گرافیک است.
                                </h5>
                                <button className="text-white hover:text-yellow hover:border-2 border-yellow text-xl w-40 h-10 bg-yellow hover:bg-greay  rounded-full p-1 transition-all delay-100  my-8 md:my-0 ">بیشتر بخوانید</button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>




            </Swiper>


        </>
    );
}




*/}