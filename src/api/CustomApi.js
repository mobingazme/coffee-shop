import axios from 'axios';
import { getToken } from '@/stores/SignupStore'; // مسیر useAuthStore باید به درستی تنظیم شود

const request = axios.create({
    baseURL: 'https://best-cms.ir/api/v1/',
    timeout: 25000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

const setToken = (token) => {
    if (token) {
      request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete request.defaults.headers.common['Authorization'];
    }
  };

  const setTokenFromStore = async () => {
    const tokenFromStore = await getToken(); // دریافت توکن از useAuthStore
    setToken(tokenFromStore); // تنظیم توکن برای استفاده در هدرهای درخواست
  };

setTokenFromStore(); // اجرای تابع برای تنظیم توکن از useAuthStore در زمان بارگیری کد

request.interceptors.request.use(
    (config) => {
        // درخواست با توکن کنونی ارسال می‌شود، اینجا نیازی به تنظیم مجدد توکن نیست
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    (response) => {
        // اگر نیاز دارید کار خاصی روی response انجام دهید، اینجا انجام دهید
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default request; // صدور axios instance
