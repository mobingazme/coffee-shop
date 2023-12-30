"use client"
import useProductsStore from '@/stores/useProductsStore';
import ProductDetailsPage from '@/template/ProductDetailsPage'
import React, { useEffect } from 'react'



function product() {
  const {products , fetchProducts } = useProductsStore()
  useEffect(() => {
    fetchProducts(); // دریافت محصولات از API هنگام بارگیری کامپوننت
  }, [fetchProducts]);

  
  return <ProductDetailsPage data={products}/>
}

export default product