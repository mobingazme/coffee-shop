"use client"
import { Icon } from '@iconify/react'
import LogoutButton from "src/elements/LogoutButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import Image from 'next/image'

function ProfilePage({ data }) {
    //console.log(data)
    const { result, updateUserData, user_message } = data;
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        username: "",

    })

    useEffect(() => {
        if (data) {
            setUser({
                first_name: data.result.first_name || "",
                last_name: data.result.last_name || "",
                phone: data.result.phone || "",
                email: data.result.email || "",
                username: data.result.username || "",
            });

            setLoading(false);
            // toast.success(result.user_message)

        } else {
            toast.error(result.user_message)
        }
    }, [data]);

    const handleUpdateUser = async () => {
        setLoading(true);
        try {
            await updateUserData(user.first_name, user.last_name, user.username);
            setLoading(false)
            toast.success(user_message || "عملیات بروز رسانی با موفقیت انجام شد");
        } catch (error) {
            toast.error(user_message || 'خطا در به‌روزرسانی اطلاعات کاربری!');
        } finally {
            setLoading(false); // پایان وضعیت بارگیری
        }

    };
    // console.log(updateUserData)
    // اپدیت پروفایل

    //  console.log(result)
    // if (result.status == 201) {
    //     toast.success(result.user_message)
    //     
    //     router.replace("/")
    // } else {
    //     toast.error(result.user_message)
    //     router.replace("/signup");
    // }




    return (
        <div className=' '>
            <div className='bg-white  h-full shadow-md rounded-lg flex-col px-5 justify-center mt-40 md:mt-0 pt-60'>

                <div className='relative md:mr-15 flex  justify-center'>
                    <Image width={300} height={30} alt='' className='rounded-full w-40 ' src='/images/user_profile.jpg' />

                </div>
                <h2 className='text-2xl text-gray-900 p-5 text-center md:text-start mt-5 md:mt-0'>اطلاعات اصلی</h2>
                <div className=' pt-10'>

                    <div className='p-5 grid grid-cols-1 md:grid-cols-4'>

                        <div>
                            <h4 className='text-xl text-gray-600 pb-2'>نام</h4>
                            <input className='bg-white text-gray-600 shadow-sm border border-yellow rounded-2xl p-2'
                                defaultValue={user.first_name} placeholder={user.first_name}
                                onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                            />
                        </div>

                        <div className='pt-5'>
                            <h4 className='text-xl text-gray-600 pb-2'>نام خانوادگی</h4>
                            <input className='bg-white text-gray-600 shadow-sm border border-yellow rounded-2xl p-2'
                                defaultValue={user.last_name} placeholder={user.last_name}
                                onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                            />
                        </div>
                        <div className='pt-5'>
                            <h4 className='text-xl text-gray-600 pb-2'>نام کاربری </h4>
                            <input className='bg-white text-gray-600 shadow-sm border border-yellow rounded-2xl p-2'
                                defaultValue={user.username} placeholder={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                            />
                        </div>
                        <div className='pt-5'>
                            <h4 className='text-xl text-gray-600 pb-2'>ایمیل </h4>
                            <input className='bg-white text-gray-600 shadow-sm border border-yellow rounded-2xl p-2'
                                defaultValue={user.email} type='text'
                                placeholder={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                        </div>
                        <div className='pt-5'>
                            <h4 className='text-xl text-gray-600 pb-2'>شماره تلفن</h4>
                            <input className='bg-white text-gray-600 shadow-sm border border-yellow rounded-2xl p-2 '
                                defaultValue={user.phone} disabled type='text'
                                placeholder={user.phone}
                                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <div className='flex justify-center md:justify-start py-5 mx-5'>
                    {loading ? (<ThreeDots
                        color="#fec007"
                        height={15}
                        ariaLabel="three-dost-loading"
                        visible={true}
                        wrapperStyle={{ margin: "20", }}
                    />) : (<>
                        <button
                            className='  ml-3 w-24 h-12 rounded-full text-white bg-yellow hover:text-yellow hover:bg-white hover:border-yellow hover:border transition-all delay-75'
                            onClick={handleUpdateUser}>ذخیره
                        </button>
                        <LogoutButton />
                    </>
                    )}
                </div>


            </div>
            <Toaster />
        </div>
    );
}

export default ProfilePage;




