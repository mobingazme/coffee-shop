import { create } from 'zustand';
import CustomAxios from '@/api/CustomApi';
import { devtools, persist } from 'zustand/middleware';

const useProductsStore = create(
  persist(
    devtools(
      (set) => ({
        products: [],
        can_filter: {},
        paginate: {}, 
        isLoading: false,
        isError: false,
        fetchProducts: async (page = 1, perPage = 5) => {
          set((state) => ({ ...state, isLoading: true }));

          try {
            const response = await CustomAxios.get('products', {
              params: { page, per_page: perPage },
            });
            set((state) => ({
              ...state,
              products: response.data.result.products,
              can_filter: response.data.result.can_filter,
              paginate: response.data.paginate,
              isLoading: false,
            }));
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