"use client"
import React, { useState } from 'react';

function FormDetails({ cartItems }) {
  // استیت محلی برای ذخیره تخفیف هر محصول و تعداد آن
  const [discounts, setDiscounts] = useState({});
  const [quantities, setQuantities] = useState({});
console.log(cartItems)
  // تابع برای اعمال تخفیفات و تغییر قیمت
  const applyDiscount = (item) => {
    // دریافت تخفیف
    const itemDiscount = discounts[item.id] || 0;
    // دریافت تعداد محصول
    const itemQuantity = quantities[item.id] || 1;
    // محاسبه قیمت با توجه به تعداد و تخفیف
    const totalPrice = item.sale_price * itemQuantity - itemDiscount;

    return totalPrice;
  };

  // تابع برای افزایش تعداد محصول
  const increaseQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  // تابع برای کاهش تعداد محصول
  const decreaseQuantity = (itemId) => {
    if (quantities[itemId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: prevQuantities[itemId] - 1,
      }));
    }
  };

  return (
    <div>
      {cartItems &&cartItems.map((item, index) => (
        <div key={index}>
          <h4>نام محصول: {item.title}</h4>
          <p>قیمت: {item.sale_price}</p>
          {/* اعمال تخفیفات و تغییر قیمت بر اساس شرایط مورد نظر */}
          <p>قیمت با تخفیف: {applyDiscount(item)}</p>
          {/* دکمه‌ها برای افزایش و کاهش تعداد محصول */}
          <button onClick={() => increaseQuantity(item.id)}>افزایش تعداد</button>
          <span>تعداد: {quantities[item.id] || 1}</span>
          <button onClick={() => decreaseQuantity(item.id)}>کاهش تعداد</button>
          {/* دیگر اطلاعات مورد نیاز */}
        </div>
      ))}
    </div>
  );
}

export default FormDetails;