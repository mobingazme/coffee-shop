import { create } from 'zustand';
import CustomAxios from '@/api/CustomApi';
import { devtools, persist } from 'zustand/middleware';

const useCategoryStore = create(
  persist(
    devtools(
      (set) => ({
        categories: [],
        isLoading: false,
        isError: false,
        fetchCategories: async () => {
          try {
            set({ isLoading: true }); // تغییر isLoading به true
            const response = await CustomAxios.get('categories');
            set({ categories: response.data.result, isLoading: false }); // آپدیت داده‌های categories و isLoading به false
            //console.log(response.data.result); // لاگ کردن داده‌های دریافتی
          } catch (error) {
            set({ isError: true, isLoading: false }); // اگر خطا رخ دهد، isLoading به false تغییر می‌کند
            console.error('Error fetching categories:', error);
          }
        },
      })
    ),
    {
      name: 'category-store',
      storage: sessionStorage,
    }
  )
);

export default useCategoryStore;