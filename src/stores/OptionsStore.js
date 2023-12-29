import { create } from 'zustand';
import CustomAxios from '@/api/CustomApi';
import { devtools, persist } from 'zustand/middleware';

const useOptionsStore = create(
  persist(
    devtools(
      (set) => ({
        options: {
          information_site: {
            sitename: null,
            short_description: null,
            description: null,
            keyword: null,
            logo: null,
            logo2: null,
            icon_logo: null,
            type_site: null,
            is_active: null,
          },
          social: {
            instagram: null,
            whatsApp: null,
            telegram: null,
          },
          business_information: {
            phone_support: null,
            email_support: null,
            video_about_us: null,
            address: null,
            address_2: null,
          },
        },
        isLoading: false,
        isError: false,
        getOptionsFromApi: async () => {
          set({ isLoading: true });
          try {
            const response = await CustomAxios.get('options');
            set((state) => ({
              ...state,
              options: response.data.results,
             
              isLoading: false,
            }));
            
           /// console.log(response)
          } catch (error) {
            set((state) => ({
              ...state,
              isError: true,
              isLoading: false,
            }));
            console.error('Error fetching options:', error);
          }
        },
      })
    ),
    {
      name: 'options-store',
      // جایگزین کردن deprecated `getStorage` با `storage`
      // به جای `getStorage: () => sessionStorage`
      storage: sessionStorage,
    }
  )
);

export default useOptionsStore;