"use client"
import React, { useState, useEffect } from 'react';
import Card from '@/module/Card';

function StorePage({ data, filters }) {
  const [minPrice, setMinPrice] = useState(filters.min_price || 0);
  const [maxPrice, setMaxPrice] = useState(filters.max_price || Infinity);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [variety, setVariety] = useState(filters.variety || '');
  const [brand, setBrand] = useState('');
  const [bodyMaterial, setBodyMaterial] = useState('');
  //const { min_price, max_price, variety, brands, attributes } = filters;

  useEffect(() => {
    applyFilters();
  }, [data, minPrice, maxPrice, variety, brand, bodyMaterial]);

  // اعمال فیلترها
  const applyFilters = () => {
    let filtered = [...data];
    filtered = data.filter(
      (product) =>
        product.sale_price >= minPrice &&
        product.sale_price <= maxPrice &&
        (variety === '' || product.variety === variety) &&
        (brand === '' || product.brand === brand) &&
        (bodyMaterial === '' || product.body_material === bodyMaterial)
      // اضافه کردن شرایط دیگر فیلترها به اینجا
    );

    setFilteredProducts(filtered);
  };

  // هندل کردن تغییرات فیلترها از طریق المنت‌های فرم
  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'min_price':
        setMinPrice(value);
        break;
      case 'max_price':
        setMaxPrice(value);
        break;
      case 'variety':
        setVariety(value);
        break;
      case 'brands':
        setBrand(value);
        break;
      case 'body_material': // Handle body material filter
        setBodyMaterial(value);
        break;
      default:
        break;
    }
  };

  const clearFilters = () => {
    // تنظیم مقادیر فیلترها به حالت اولیه
    setMinPrice(0);
    setMaxPrice(Infinity);
    setVariety('');
    setBrand('');
    setBodyMaterial('');
  };


  return (
    <div className='w-screen h-auto bg-greay grid grid-cols-4 '>
      {/* الگوی فرم برای انتخاب فیلترها */}
      <form className='mt-60 mx-10 col-span-1 w-80 h-fit bg-white border-4 border-yellow rounded-xl  '>
       
        <div className=' p-3'>
          <label className='text-gray-800 px-2' htmlFor='min_price'>حداقل قیمت :</label>
          <input className='text-gray-700 border border-yellow rounded-lg px-2 mb-3 w-48 h-7' type='number' id='min_price' name='min_price' value={minPrice} onChange={handleFilterChange} />
          <label className='text-gray-800 px-2 ' htmlFor='max_price'>حداکثر قیمت:</label>
          <input className='text-gray-700 border border-yellow rounded-lg px-2 w-48 h-7' type='number' id='max_price' name='max_price' value={maxPrice} onChange={handleFilterChange} />
        </div>

        <div className=' p-3'>
          <label className='text-gray-800 px-2' htmlFor='variety'>رنگ محصول:</label>
          <select className=' bg-white text-gray-700 border border-yellow rounded-lg px-2 mb-3  w-48 h-7' id='variety' name='variety' value={variety} onChange={handleFilterChange}>
            <option className='text-gray-700' value=''>همه</option>
            {/* اضافه کردن گزینه‌های مربوط به رنگها از اطلاعات دریافتی */}
            {filters.variety && filters.variety[0].values.map((color) => (
              <option className=' text-gray-700' key={color.id} value={color.value}>{color.value}</option>
            ))}
          </select>
        </div>


        <div className=' p-3'>
          <label className='text-gray-800 px-2' htmlFor='brands'>برندها:</label>
          <select className=' bg-white text-gray-700 border border-yellow rounded-lg px-2 mb-3  w-48 h-7' id='brands' name='brands' value={brand} onChange={handleFilterChange}>
            <option className='text-gray-700' value=''>همه</option>
            {filters.brands && filters.brands.map((brand) => (
              <option className='text-gray-700' key={brand.id} value={brand.title}>{brand.title}</option>
            ))}
          </select>
        </div>


        <div className=' p-3'>
          <label className='text-gray-800 px-2' htmlFor='body_material'>جنس بدنه:</label>
          <select className=' bg-white text-gray-700 border border-yellow rounded-lg px-2 mb-3  w-48 h-7' id='body_material' name='body_material' value={bodyMaterial} onChange={handleFilterChange}>
            <option className='text-gray-700' value=''>همه</option>
            {/* Map through attribute values for body material */}
            {filters.attributes && filters.attributes[0].values.map((attribute) => (
              <option className='text-gray-700' key={attribute.id} value={attribute.title}>{attribute.title}</option>
            ))}
          </select>
        </div>

        <div className='col-span-1 flex justify-end items-center p-2'>
          <h3 className='text-white bg-yellow hover:text-yellow border p-1 border-yellow hover:bg-white hover:border-yellow hover:border transition-all delay-75 rounded-full cursor-pointer ' onClick={clearFilters}>
            حذف فیلترها
          </h3>
        </div>





        {/* المنت‌های دیگر برای انتخاب فیلترهای دیگر */}
      </form>

      <div className='grid grid-cols-3 gap-4 p-32 pt-60 col-span-3'>
        {filteredProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default StorePage;