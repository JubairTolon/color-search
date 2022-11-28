import React, { useState } from 'react';

const ColorFind = () => {
    const [color, setColor] = useState('');

    const handleChange = event => {
        setColor(event.target.value);
    };

    console.log('value is:', color);

    return (
        <div>
            <h1 className='text-gray-600 text-4xl font-semibold mb-10'>Find Your Color</h1>
            <div className='flex flex-col'>
                <textarea style={{ backgroundColor: `${color}` }} className='border-2 border-gray-300 rounded-md mb-10 focus:outline-none focus:ring-1 focus:ring-gray-300 text-gray-700 font-semibold' name="color-container" cols="30" rows="10"></textarea>
                <input onChange={handleChange} className='border-2 border-gray-300 rounded-md h-11 px-2 text-center font-semibold text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300' type="text" placeholder='Enter color name/code' />
            </div>
        </div>
    );
};

export default ColorFind;