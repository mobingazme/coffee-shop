"use client"
import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';

const LogoutButton = () => {
  const logouthandler = () => {
    Cookies.remove('authToken'); // حذف توکن از کوکی
    window.location.replace("/signup");
  }

  return (
    <div onClick={logouthandler} className='w-24 h-12 text-white bg-yellow hover:text-yellow hover:bg-white hover:border-yellow hover:border transition-all delay-75 rounded-full cursor-pointer flex justify-center p-2'>
      <h4 className='text-lg pl-2' >خروج</h4>
      <Icon className='w-7 h-7' icon={'mdi:logout'} />
    </div>
  );
}

export default LogoutButton;