"use client"
import useCategoryStore from '@/stores/useCategoryStore';
import Link from 'next/link';
import React, { useEffect } from 'react';

function Categorys() {
    const { categories, fetchCategories, isLoading, isError } = useCategoryStore();

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    const renderChildCategories = (children) => {
        if (!children || children.length === 0) {
            return null;
        }

        return (
            <ul>
                {children.map(category => (
                    <li key={category.id}>
                        <Link  href={`/category/${category.slug}`}>
                            {category.title}
                        </Link>
                        {renderChildCategories(category.children)}
                    </li>
                ))}
            </ul>
        );
    };

    const renderCategories = () => {
    
        const mid = Math.ceil(categories.length / 2);
        const categoriesColumn1 = categories.slice(0, mid);
        const categoriesColumn2 = categories.slice(mid);

        return (
            <div className="bg-white p-4 w-auto rounded-lg flex justify-center items-center animate__animated animate__backInUp border-b-4 border-yellow">
                <div className='flex-col justify-center p-1'>
                    <ul className='pb-3 px-3'>
                        {categoriesColumn1.map(category => (
                            <li key={category.id} className="text-lg text-yellow cursor-pointer pb-2">
                                <Link href={`/`}>
                                    {category.title}
                                </Link>
                                <ul>
                                    {category.children.map(child => (
                                        <li key={child.id} className="text-gray-600 text-sm  hover:text-yellow cursor-pointer">
                                            <Link href={`/`}>
                                                {child.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex-col justify-center p-1'>
                    <ul className='pb-3 px-3'>
                        {categoriesColumn2.map(category => (
                            <li key={category.id} className="text-lg text-yellow cursor-pointer pb-2">
                                <Link href={`/`}>
                                    {category.title}
                                </Link>
                                <ul>
                                    {category.children.map(child => (
                                        <li key={child.id} className="text-gray-600 text-sm hover:text-yellow cursor-pointer">
                                            <Link href={`/`}>
                                                {child.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <div>
            {renderCategories()}
        </div>
    );
}

export default Categorys;






{/*
"use client"
import useCategoryStore from '@/stores/useCategoryStore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
function Categorys() {
    const { categories, fetchCategories } = useCategoryStore();
  
    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    return (
        <div className="bg-white p-4 w-auto rounded-lg flex justify-center items-center  animate__animated animate__backInUp border-b-4 border-yellow ">
            <div className='flex-col justify-center p-1'>
                <ul className=' pb-3 px-3'>
                <Link href={'/'}>    <li className=" text-lg text-yellow cursor-pointer pb-2">{categories.title}</li></Link>
                <Link href={'/'}>   <li className="text-gray-900 hover:text-yellow cursor-pointer ">categories.children.title </li></Link>
                </ul>
               <ul className=' pb-3 px-3'>
                <Link href={'/'}>    <li className=" text-lg text-yellow cursor-pointer pb-2">{categories.title}</li></Link>
                <Link href={'/'}>   <li className="text-gray-900 hover:text-yellow cursor-pointer ">categories.children.title </li></Link>
                </ul>
               <ul className=' pb-3 px-3'>
                <Link href={'/'}>    <li className=" text-lg text-yellow cursor-pointer pb-2">{categories.title}</li></Link>
                <Link href={'/'}>   <li className="text-gray-900 hover:text-yellow cursor-pointer ">categories.children.title </li></Link>
                </ul>
            </div>
             <div className='flex-col justify-center p-1'>
              <ul className=' pb-3 px-3'>
                <Link href={'/'}>    <li className=" text-lg text-yellow cursor-pointer pb-2">{categories.title}</li></Link>
                <Link href={'/'}>   <li className="text-gray-900 hover:text-yellow cursor-pointer ">categories.children.title </li></Link>
                </ul>
                <ul className=' pb-3 px-3'>
                <Link href={'/'}>    <li className=" text-lg text-yellow cursor-pointer pb-2">{categories.title}</li></Link>
                <Link href={'/'}>   <li className="text-gray-900 hover:text-yellow cursor-pointer ">categories.children.title </li></Link>
                </ul>
                 <ul className=' pb-3 px-3'>
                <Link href={'/'}>    <li className=" text-lg text-yellow cursor-pointer pb-2">{categories.title}</li></Link>
                <Link href={'/'}>   <li className="text-gray-900 hover:text-yellow cursor-pointer ">categories.children.title </li></Link>
                </ul>
            </div>
         
            </div>
    ) 
}

export default Categorys;



*/}




{/*
 return (
        <div className="bg-white p-4 w-auto rounded-lg flex justify-center items-center animate__animated animate__backInUp border-b-4 border-yellow">
            <div className='flex-col justify-center p-1'>
                <ul className='pb-3 px-3'>
                    {categories.map(category => (
                        <li key={category.id} className="text-gray-900 hover:text-yellow cursor-pointer py-1">
                            <Link href={`/category/${category.slug}`}>
                                {category.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    ) */}