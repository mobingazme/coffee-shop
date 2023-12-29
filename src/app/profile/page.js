"use client"
import React, { useEffect } from 'react';
import ProfilePage from '@/template/ProfilePage';
import useUserStore from '@/stores/UserStore';
import { useRouter } from 'next/navigation';
import { getToken } from '@/stores/SignupStore';

function Profile() {
  const { result, getUserFromApi, updateUserData,user_message  } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.replace('/signup'); // Redirect به صفحه احراز هویت
    } else {
      getUserFromApi(); // دریافت اطلاعات کاربر
    }
  }, []);

 

  return <ProfilePage data={{result,updateUserData,user_message}}   />;
}

export default Profile;