import { create } from 'zustand';
import CustomAxios from '@/api/CustomApi';
import { devtools, persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    devtools(
      (set) => ({
        result: {
          id: null,
          first_name: null,
          last_name: null,
          phone: null,
          email: null,
          message_upUser: null,
          // سایر اطلاعات مورد نیاز
        },
        isAuthenticated: false,
        isAdmin: false,
        isLoading: false,
        isError: false,
        getUserFromApi: async () => {
          set((state) => ({ ...state, isLoading: true }));
          try {
            const response = await CustomAxios.get('user');
            set((state) => ({
              ...state,
              result: response.data.result,
              isAuthenticated: true,
              isLoading: false,
            }));
          } catch (error) {
            set((state) => ({
              ...state,
              isError: true,
              isLoading: false,
            }));
            console.error('Error fetching user:', error);
          }
        },
        updateUserData: async (first_name, last_name, username) => {
          set((state) => ({ ...state, isLoading: true }));
          try {
            const response = await CustomAxios.put('user/update', { first_name, last_name, username });
            set((state) => ({
              ...state,
              result: response.data.result,
              isLoading: false,
              message_upUser: response.data.user_message,
              
            }));
            console.log("پیام بروز رسانی",response.data.user_message)
            console.log('User data updated:', response);
           // console.log(state.message_upUser);
          } catch (error) {
            set((state) => ({
              ...state,
              isError: true,
              isLoading: false,
            }));
            console.error('Error updating user data:', error);
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

export default useUserStore;
