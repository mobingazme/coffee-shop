import { create } from 'zustand';
import CustomAxios from '@/api/CustomApi';
import { devtools, persist } from 'zustand/middleware';
import Cookies from 'js-cookie';

const useSignupStore = create(
  persist(
    devtools(
      (set) => ({
        step: 1,
        phone: null,
        code: null,
        usermessage: null,
        user_message: null,
        isAuthenticated: false,
        isLoading: false,
        isError: false,
        sendCode: async (phone, exists, type, minutes) => {
          set({ isLoading: true });
          try {
            const response = await CustomAxios.post('otp', {
              phone,
              exists,
              type,
              minutes,
            });
            console.log(response.data.developer_message.code)
            set((state) => ({
              ...state,
              usermessage: response.data.user_message,
              step: 2,
              phone: phone,
              isLoading: false,
            }));
            console.log('Code sent:', response);
          } catch (error) {
            set((state) => ({
              ...state,
              isError: true,
              isLoading: false,
            }));
            console.error('Error sending code:', error);
          }
        },
        verifyCode: async (code, phone) => {
          set({ isLoading: true });
          try {
            const response = await CustomAxios.post('login_register', {
              phone,
              code,
            });
            set((state) => ({
              ...state,
              user_message: response.data.user_message,
              isAuthenticated: true,
              isLoading: false,
            }));
            setTokenToCookie(response.data.result.token);
            CustomAxios.setToken(response.data.result.token);
            console.log('Code verified:', response);
          } catch (error) {
            set((state) => ({
              ...state,
              isError: true,
              isLoading: false,
            }));
            console.error('Error verifying code:', error);
          }
        },
      })
    ),
    {
      name: 'auth-store',
      storage: sessionStorage,
    }
  )
);
const setTokenToCookie = (token) => {
  Cookies.set('authToken', token, { signed: true, expires: 1 }); // تنظیم توکن در کوکی
};

const getToken = () => {
  return Cookies.get('authToken');
};

export { setTokenToCookie, getToken };

export default useSignupStore;