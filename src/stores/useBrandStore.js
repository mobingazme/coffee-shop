import { create } from 'zustand';
import CustomAxios from '@/api/CustomApi';
import { devtools, persist } from 'zustand/middleware';

const useBrandStore = create(
  persist(
    devtools(
      (set) => ({
        brands: [],
        isLoading: false,
        isError: false,
        fetchBrands: async () => {
          set((state) => ({ ...state, isLoading: true }));
          try {
            const response = await CustomAxios.get('brands');
            set({ brands:  response.data.result });
           //  console.log( response.data.result);
          } catch (error) {
            set({ isError: true });
            console.error('Error fetching brands:', error);
          } finally {
            set({ isLoading: false });
          }
        },
      })
    ),
    {
      name: 'brand-store',
      storage: sessionStorage,
    }
  )
);

export default useBrandStore;