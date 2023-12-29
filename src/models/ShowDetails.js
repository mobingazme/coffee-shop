"use client"
import React, { useState } from "react"

function ShowDetails({Data}) {
    const { id, title, brief,cover,inventory,sale_price,sku, old_price, value_discount,sale_type,} = Data || "";

   
    const [monthlyButtonStyle, setMonthlyButtonStyle] = useState('text-white  text-lg bg-yellow p-3 rounded-xl w-40');
    const [yearlyButtonStyle, setYearlyButtonStyle] = useState('text-gray-900 :mr-10 w-40 text-lg  ');
    const [showDetails, setShowDetails] = useState(false);

    const handleMonthlyButtonClick = () => {
        setMonthlyButtonStyle('text-white  text-lg bg-yellow p-3 rounded-xl w-40');
        setYearlyButtonStyle('text-gray-900 :mr-10 w-40 text-lg');
        setShowDetails(false);
    };

    const handleYearlyButtonClick = () => {
        setYearlyButtonStyle('text-white :mr-10 text-lg bg-yellow p-3 rounded-xl w-40');
        setMonthlyButtonStyle('text-gray-900  w-40 text-lg');
        setShowDetails(true);
    };



    return (
        <>
            <div className="pt-10 flex justify-start ">
                <button className={monthlyButtonStyle} onClick={handleMonthlyButtonClick}>توضیحات</button>
                <button className={yearlyButtonStyle} onClick={handleYearlyButtonClick}>اطلاعات تکمیلی</button>
            </div>
            <div>
                {showDetails ? (
                    <div className="flex justify-start animate__animated animate__fadeInUp ">
                        <div className="pt-8">
                            <h4 className="text-gray-900 text-lg ">نام - <span className="text-gray-500 ">{title} </span></h4>
                            <h4 className="text-gray-900 text-lg py-5">قیمت - <span className="text-gray-500">{sale_price}  </span></h4>
                            <h4 className="text-gray-900 text-lg">وزن - <span className="text-gray-500">1 کیلو گرم</span></h4>
                        </div>
                        <div className="pt-8 mr-40">
                            <h4 className="text-gray-900 text-lg ">امتیاز - <span className="text-gray-500 ">4.2  </span></h4>
                            <h4 className="text-gray-900 text-lg py-5">ارسال - <span className="text-gray-500">رایگان  </span></h4>
                            <h4 className="text-gray-900 text-lg">تحویل - <span className="text-gray-500">5 روز کاری </span></h4>
                        </div>

                    </div>) : (
                    <p className="text-gray-500 pt-5 text-center  md:text-start animate__animated animate__fadeInUp">
                        {brief}
                    </p>

                )}


            </div>
        </>
    )
}

export default ShowDetails