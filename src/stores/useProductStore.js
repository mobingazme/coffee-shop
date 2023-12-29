import { create } from 'zustand';
import CustomAxios from '@/api/CustomApi';
import { devtools, persist } from 'zustand/middleware';

const useProductStore = create(
  persist(
    devtools(
      (set) => ({
        products: [],
        // اضافه کردن can_filter
        isLoading: false,
        isError: false,
        fetchProducts: async () => {
          set((state) => ({ ...state, isLoading: true }));

          try {
            const response = await CustomAxios.get('products');
            set((state) => ({ ...state, products: response.data.result.products }));

            console.log(response.data.result);
          } catch (error) {
            set({ isError: true, isLoading: false });
            console.error('Error fetching products:', error);
          } finally {
            set((state) => ({ ...state, isLoading: false }));
          }
        },
      })
    ),
    {
      name: 'product-store',
      storage: sessionStorage,
    }
  )
);

export default useProductStore;