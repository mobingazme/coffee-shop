"use client"
import React, { useEffect } from 'react';
import SignupPage from '@/template/SignupPage';
import { getToken } from '@/stores/SignupStore'; // باید به مسیر مناسب اشاره کنید

function Signup() {
  useEffect(() => {
    const token = getToken();
    if (token) {
      // اگر توکن موجود بود، ممنوعیت دسترسی به صفحه را اعمال کنید
      // مثلا انتقال کاربر به یک صفحه خاص یا انجام اقدام مناسب
      // به عنوان مثال:
      window.location.replace("/");
    }
  }, []);

  return <SignupPage />
}

export default Signup;