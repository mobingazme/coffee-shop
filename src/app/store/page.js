"use client"
import React, { useEffect } from 'react'
import Data from '@/data/dataCafee'
import StorePage from '@/template/StorePage'
import useProductsStore from '@/stores/useProductsStore'


function store() {
  
 const {products , fetchProducts ,can_filter} = useProductsStore()
 
//console.log(can_filter)
  useEffect(() => {
    fetchProducts(); // دریافت محصولات از API هنگام بارگیری کامپوننت
  }, [fetchProducts]);

 
  return <StorePage data={products} filters={can_filter} />
}

export default store