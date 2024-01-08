"use client"
import React, { useState, useEffect } from 'react';
import Card from '@/module/Card';
import AttributeModal from '@/models/AttributeModal';
import { Icon } from '@iconify/react'
import 'animate.css';
import VarietyModal from '@/models/VarietyModal';
import useProductsStore from '@/stores/useProductsStore';

function StorePage({ data, filters,paginate }) {
  const { fetchProducts } = useProductsStore();
  const [minPrice, setMinPrice] = useState(filters.min_price || 0);
  const [maxPrice, setMaxPrice] = useState(filters.max_price || Infinity);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [brand, setBrand] = useState('');
  const [attribute, setAttribute] = useState(filters.attribute || '');
  const [variety, setVariety] = useState(filters.variety || ''); // Define variety state
  const [isModalOpenAttribute, setIsModalOpenAttribute] = useState(false);
  const [isModalOpenVariety, setIsModalOpenVariety] = useState(false);
  const [selectedAttributeValues, setSelectedAttributeValues] = useState([]);
  const [selectedVarietyValues, setSelectedVarietyValues] = useState([]);
 
 console.log(paginate)
  

 
 useEffect(() => {
  fetchProducts(paginate.page, paginate.perPage); // با هر تغییر در paginate، درخواست جدید را ارسال کنید
}, [fetchProducts, paginate]);
 
  useEffect(() => {
    applyFilters();
  }, [data, minPrice, maxPrice, variety, brand, attribute]);


 



  const applyFilters = () => {
    let filtered = [...data];
    filtered = data.filter(
      (product) =>
        product.sale_price >= minPrice &&
        product.sale_price <= maxPrice &&
        (variety === '' || product.variety === variety) &&
        (brand === '' || product.brand === brand) &&
        (attribute === '' || product.attribute === attribute)
      // Add other filter conditions here
    );

    setFilteredProducts(filtered);
  };

  const handlePageChange = (page) => {
    fetchProducts(page);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'min_price':
        setMinPrice(value);
        break;
      case 'max_price':
        setMaxPrice(value);
        break;
      case 'variety': // Update the switch case here
        setVariety(value);
        break;
      case 'brands':
        setBrand(value);
        break;
        case 'attribute':
          setAttribute(value);
          break;
        default:
          break;
    }
  };


  const openModalAttribute = () => {
    setIsModalOpenAttribute((prevIsModalOpen) => !prevIsModalOpen);
  };

  const closeModalAttribute = () => {
    setIsModalOpenAttribute(false);
  };

  const handleAttributeChange = (event) => {
    const { value, checked } = event.target;
  
    if (checked) {
      // اگر تیک فعال شده است، آن را به آرایه اضافه کنید
      setSelectedAttributeValues([...selectedAttributeValues, value]);
    } else {
      // اگر تیک غیر فعال شده است، آن را از آرایه حذف کنید
      setSelectedAttributeValues(selectedAttributeValues.filter((val) => val !== value));
    }
  };


  const openModalVariety = () => {
    setIsModalOpenVariety((prevIsModalOpen) => !prevIsModalOpen);
  };

  const closeModalVariety = () => {
    setIsModalOpenVariety(false);
  };

  const handleVarietyChange = (event) => {
    const { value, checked } = event.target;
    
    if (checked) {
      setSelectedVarietyValues([...selectedVarietyValues, value]);
    } else {
      setSelectedVarietyValues(selectedVarietyValues.filter((val) => val !== value));
    }
  };




 


  const clearFilters = () => {
    setMinPrice(0);
    setMaxPrice(Infinity);
    setVariety('');
    setBrand('');
    setAttribute('');
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
          <label className='text-gray-800 px-2' htmlFor='brands'>برندها:</label>
          <select className=' bg-white text-gray-700 border border-yellow rounded-lg px-2 mb-3  w-48 h-7' id='brands' name='brands' value={brand} onChange={handleFilterChange}>
            <option className='text-gray-700' value=''>همه</option>
            {filters.brands && filters.brands.map((brand) => (
              <option className='text-gray-700' key={brand.id} value={brand.title}>{brand.title}</option>
            ))}
          </select>
        </div>


      
        <div className=' p-3 flex cursor-pointer' onClick={openModalVariety}>
          <label className='text-gray-800 px-2'>{filters.variety && filters.variety[0].title}:</label>
          <input className='bg-white text-gray-700 border border-yellow rounded-lg px-2 mb-3 w-48 h-7 cursor-pointer' value={selectedVarietyValues.join(', ')} readOnly />
          <Icon
            className={`text-yellow h-fit w-8 md:w-6 cursor-pointer  ${isModalOpenVariety ? 'transform rotate-180 animate__animated animate__flipInX' : ''}`}
            icon={'icon-park-outline:down'}
          />
        </div>
        {isModalOpenVariety && (
          <VarietyModal
            title={filters.variety && filters.variety[0].title}
            values={filters.variety && filters.variety[0].values}
            selectedValues={selectedAttributeValues}
            handleChange={handleVarietyChange}
            handleClose={closeModalVariety}
          />
        )}



        <div className=' p-3 flex cursor-pointer' onClick={openModalAttribute}>
          <label className='text-gray-800 px-2'>{filters.attributes && filters.attributes[0].title}:</label>
          <input className='bg-white text-gray-700 border border-yellow rounded-lg px-2 mb-3 w-48 h-7 cursor-pointer' value={selectedAttributeValues.join(', ')} readOnly />
          <Icon
            className={`text-yellow h-fit w-8 md:w-6 cursor-pointer  ${isModalOpenAttribute ? 'transform rotate-180 animate__animated animate__flipInX' : ''}`}
            icon={'icon-park-outline:down'}
          />
        </div>
        {isModalOpenAttribute && (
          <AttributeModal
            title={filters.attributes && filters.attributes[0].title}
            values={filters.attributes && filters.attributes[0].values}
            selectedValues={selectedAttributeValues}
            handleChange={handleAttributeChange}
            handleClose={closeModalAttribute}
          />
        )}






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
      <div className='flex justify-center items-center p-10'>
        <button onClick={() => handlePageChange(1)} className='text-white bg-yellow hover:text-yellow border p-1 border-yellow hover:bg-white hover:border-yellow hover:border transition-all delay-75 rounded-md w-10  '>1</button>
        <button onClick={() => handlePageChange(2)} className='text-white bg-yellow hover:text-yellow border p-1 border-yellow hover:bg-white hover:border-yellow hover:border transition-all delay-75 rounded-md w-10 mx-2 '>2</button>
        <button className='text-white bg-yellow hover:text-yellow border p-1 border-yellow hover:bg-white hover:border-yellow hover:border transition-all delay-75 rounded-md w-10  '>3</button>

      </div>
    </div>
  );
}



export default StorePage;
