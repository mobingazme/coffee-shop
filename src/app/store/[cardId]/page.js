"use client"
import { useRouter } from 'next/navigation';

import CardDetails from '@/template/CardDetails';
import useProductStore from '@/stores/useProductStore';
import { useEffect } from 'react';

//برایه مشخص کردن صفحات داینامیک ssg
{/* export async function generateStaticParams(){
const cards = await fetch("/");
const data = await card.json();
const params = data.map((card)=>({cardId:String(card.id)}));
  //return [{cardId:"1"},{cardId:"2"},{cardId:"3"}]
}
*/}



function pageDetails(props) { //{params}
  const { products, fetchProducts } = useProductStore();
  // console.log(props)
  // console.log(products)

  useEffect(() => {
    const id = parseInt(props.params.cardId, 10);
    fetchProducts(id); // استفاده از id برای فراخوانی fetchProducts با آن
  }, [fetchProducts, props.params.cardId]);





  {/* 
const cards = await fetch("/");
const data = await card.json();
*/}

  //const id = parseInt(props.params.cardId, 10);
  //const product = products.find(item => item.id === id);

  // console.log(id)
  // console.log(product)

  return <CardDetails data={products}  />
}

export default pageDetails