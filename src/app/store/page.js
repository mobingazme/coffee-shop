"use client"
import React, { useEffect } from 'react'
import StorePage from '@/template/StorePage'
import useProductsStore from '@/stores/useProductsStore'


function store() {
  
 const {products , fetchProducts ,can_filter,paginate} = useProductsStore()
 
//console.log(paginate)
  useEffect(() => {
    fetchProducts(); // دریافت محصولات از API هنگام بارگیری کامپوننت
  }, [fetchProducts]);

 
  return <StorePage data={products} filters={can_filter} paginate={paginate} />
}

export default store