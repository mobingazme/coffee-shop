import { create } from 'zustand';
import CustomAxios from '@/api/CustomApi';
import { devtools, persist } from 'zustand/middleware';

const useProductsStore = create(
  persist(
    devtools(
      (set) => ({
        products: [],
        can_filter: {},
        paginate: {}, // اضافه کردن paginate به استور
        isLoading: false,
        isError: false,
        fetchProducts: async () => {
          set((state) => ({ ...state, isLoading: true }));

          try {
            const response = await CustomAxios.get('products');
            set((state) => ({
              ...state,
              products: response.data.result.products,
              can_filter: response.data.result.can_filter,
              paginate: response.data.paginate, // مقداردهی به paginate از داده‌های دریافتی
            }));
            console.log( "s" ,response.data.paginate)
          } catch (error) {
            set({ isError: true, isLoading: false });
            console.error('Error fetching products:', error);
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

export default useProductsStore;