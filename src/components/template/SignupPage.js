"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { Icon } from '@iconify/react'
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Image from 'next/image'
import useSignupStore from "@/stores/SignupStore";

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/
{/*اعتبار سنجی */
}
const ValidationSchima = yup.object().shape({
  code: yup.string().required('لطفاً کد را وارد کنید').matches(/^[0-9]+$/, 'کد وارد شده نادرست است').length(5, 'کد باید 5 رقمی باشد'),
  phone: yup.string().required('لطفاً شماره تلفن را وارد کنید').min(11, 'شماره تلفن باید حداقل 11 رقم باشد').matches(phoneRegExp, 'فرمت وارد شده نادرست است')
})


function SignupPage() {
  const { sendCode, verifyCode, user_message, usermessage } = useSignupStore();

  console.log(user_message, usermessage)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);
    const router = useRouter('');


  let isValid = false;

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      isValid = true;
    }, 400);
  };


  const sendOtp = async () => {
   
    if (!isValid) {
      setLoading(true);
      try {
          await sendCode(phoneNumber, true, 'phone', 5);
          setLoading(false);
          toast.success(usermessage || "کد برایه شما ارسال شد");
          setStep(1);
      } catch (error) {
          setLoading(false);
          toast.error('Error sending OTP');
      }
    }
  }

  
  const login = async () => {
    if (!isValid) {
      setLoading(true);
        try {
            await verifyCode(code, phoneNumber);
            setLoading(false);
            toast.success(user_message || "عملیات ورود با موفقیت انجام شد");
            router.replace("/profile")
        } catch (error) {
            setLoading(false);
            toast.error('Error verifying code');
        }
    }

  }
  const editHandler = () => {
    setPhone("")
    setCode("")
    setStep(0)
  }


  return (
    <>

      <div
        className="w-screen h-screen   fixed backdrop-blur bg-[#00000056] overflow-hidden z-50  flex  justify-center ">


        <div
          className="bg-yellow w-[400px] h-[550px] flex flex-col p-5 mt-10 justify-center items-center rounded-r-2xl animate__animated animate__backInUp">
          <Image width={100} height={100} alt='' src="/images/lolo.png" />
          <h4 className="text-white text-2xl pt-5">به <span className="font-bold">Cultivation</span>خوش آمدید!
          </h4>
          <p className=" py-5 text-center ">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه</p>
          <div className="flex justify-center items-center pt-5">
            <Icon
              className='text-white border-2 border-white hover:bg-white  hover:text-yellow rounded-full w-12 ml-3 h-fit  p-2 transition-all delay-75'
              icon={'eva:facebook-fill'} />
            <Icon
              className='text-white border-2 border-white hover:bg-white  hover:text-yellow rounded-full w-12 h-fit p-2 transition-all delay-75'
              icon={'dashicons:twitter'} />
            <Icon
              className='text-white border-2 border-white hover:bg-white  hover:text-yellow rounded-full w-12 mx-3 h-fit p-2 transition-all delay-75'
              icon={'fa6-brands:youtube'} />
            <Icon
              className='text-white border-2 border-white hover:bg-white  hover:text-yellow rounded-full w-12 h-fit p-2 transition-all delay-75'
              icon={'mdi:instagram'} />
          </div>
        </div>


        {step == 0 ? (
          <div
            className="bg-white flex flex-col items-center h-[550px] mt-10 w-[400px] rounded-l-2xl p-5 animate__animated animate__backInUp">
            <div className="mr-[360px] pb-2 "><Link href="/"><Icon
              className="w-7 h-fit  text-yellow rounded-full  " icon='mdi:close'></Icon></Link></div>
            <h2 className="text-gray-900 flex justify-center text-2xl  "> ورود یا ثبت نام</h2>
            <div className="flex-col justify-center items-center py-5">
              <h4>فرم ورود و ثبت نام</h4>

              <Formik
                initialValues={{ phone: '' }}
                validationSchema={ValidationSchima}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-2">
                      <label className="text-gray-500 ">تفلن </label>
                      <Field
                        id="phone-input"
                        name="phone"
                        placeholder="09123456789"
                        type="phone"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        className="h-10 mb-2 outline-none flex-1 rounded-lg w-full px-4 bg-transparent border-yellow border text-black"
                      />
                      <ErrorMessage name="phone" component="div"
                        className="text-red-500"></ErrorMessage>
                    </div>
                    <div className='flex justify-center md:justify-start py-5 '>
                      {loading ? (<ThreeDots
                        color="#fec007"
                        height={20}
                        ariaLabel="three-dost-loading"
                        visible={true}
                        wrapperStyle={{ margin: "20" }}
                      />) : (<button
                        className="text-white bg-yellow hover:bg-white hover:text-yellow hover:border-yellow border-2 w-32 h-12 rounded-3xl transition-all delay-75 "
                        disabled={isSubmitting} type="submit" onClick={sendOtp}>
                        ارسال کد
                      </button>)}
                    </div>
                  </Form>
                )}

              </Formik>

            </div>
          </div>) : (<div
            className="bg-white flex flex-col items-center h-[550px] mt-10 w-[400px] rounded-l-2xl p-5 animate__animated animate__backInUp">
            <div className="mr-[360px] pb-2 "><Icon className="w-7 h-fit  text-yellow rounded-full  "
              icon='mdi:close'></Icon></div>
            <h2 className="text-gray-900 flex justify-center text-2xl  "> ورود یا ثبت نام</h2>
            <div className="flex-col justify-center items-center py-5">
              <h4>فرم ورود و ثبت نام</h4>

              <Formik
                initialValues={{ code: '', phone: '' }}
                validationSchema={ValidationSchima}
                onSubmit={handleSubmit}
              >

                <Form>
                  <div className="mb-2">
                    <label className="text-gray-500 ">تفلن </label>
                    <Field
                      id="phone-input"
                      name="phone"
                      placeholder="09123456789"
                      type="phone"
                      value={phoneNumber}
                      disabled
                      className="h-10 outline-none flex-1 rounded-lg w-full px-4 bg-transparent border-yellow border text-black disabled"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-500" />

                  </div>
                  <div className="mb-2">
                    <label htmlFor="code" className="text-gray-500">
                      کد
                    </label>
                    <Field
                      placeholder="******"
                      value={code}
                      type="password"
                      id="code"
                      name="code"
                      onChange={e => setCode(e.target.value)}
                      className="h-10 mb-2 outline-none flex-1 rounded-lg w-full px-4 bg-transparent border-yellow border text-black"
                    />
                    <ErrorMessage name="code" component="div" className="text-red-500" />
                  </div>


                  <div className='flex justify-center md:justify-start py-5 '>
                    {loading ? (<ThreeDots
                      color="#fec007"
                      height={20}
                      ariaLabel="three-dost-loading"
                      visible={true}
                      wrapperStyle={{ margin: "20" }}
                    />) : (<button
                      className="text-white bg-yellow hover:bg-white hover:text-yellow hover:border-yellow border-2 w-32 h-12 rounded-3xl transition-all delay-75 "
                      type="submit" onClick={login}>
                      ورود
                    </button>)}
                  </div>
                </Form>
              </Formik>
              <button
                className=" text-gray-500  hover:text-yellow  w-36 h-14  transition-all delay-75 mt-10"
                onClick={editHandler}>ویرایش شماره
              </button>


            </div>
          </div>
        )}


        <Toaster />
      </div>

    </>
  )

}

export default SignupPage

























