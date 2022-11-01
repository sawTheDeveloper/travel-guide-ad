import React from 'react'
import JadeMountain7 from '../assets/JadeMountain7.jpg';
import JadeMountain8 from '../assets/JadeMountain8.jpg';
import JadeMountain9 from '../assets/JadeMountain9.jpg';
import JadeMountain10 from '../assets/JadeMountain10.jpg';
import JadeMountain11 from '../assets/JadeMountain11.jpeg';


const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resort</h1>
        <p className='py-4'>One of the Caribbean's Best Beach</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={JadeMountain11} alt="/" />
            <img className='w-full h-full object-cover' src={JadeMountain7} alt="/" />
            <img className='w-full h-full object-cover' src={JadeMountain10} alt="/" />
            <img className='w-full h-full object-cover' src={JadeMountain9} alt="/" />
            <img className='w-full h-full object-cover' src={JadeMountain8} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations