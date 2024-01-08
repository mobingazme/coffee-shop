"use client"
import React from 'react';

function AttributeModal({ title, values, selectedValues, handleChange, handleClose }) {
    if (!values) {
        return null; // یا هر عملیات دیگری که بهتر می‌دانید
    }
    return (
        <div className='modal pr-10 -mt-16'>
            <div className='modal-content'>
                <span className='close' onClick={handleClose}>&times;</span>
                <h2>{title}</h2>
                {values.map((val) => (
                    <div key={val.id} className='flex items-center border-r-2 border-yellow mx-'>
                        <input
                        className='mx-2'
                            type='checkbox'
                            id={`${title}-${val.id}`}
                            name={`${title}-${val.id}`}
                            value={val.title}
                            checked={selectedValues.includes(val.title)}
                            onChange={handleChange}
                        />
                        <label htmlFor={`${title}-${val.id}`} className='text-gray-700 '>
                            {val.title}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AttributeModal;