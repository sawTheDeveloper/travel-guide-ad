import React from 'react'

import JadeMountain from '../assets/JadeMountain.jpg';
import JadeMountain0 from '../assets/JadeMountain0.png';
import JadeMountain1 from '../assets/JadeMountain1.jpg';
import JadeMountain2 from '../assets/JadeMountain2.jpg';
import JadeMountain3 from '../assets/JadeMountain3.jpg';
import JadeMountain4 from '../assets/JadeMountain4.jpg';
import SelectsCard from './SelectsCard';


const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={JadeMountain} text='Infinity Pools' />
    <SelectsCard bg={JadeMountain0} text='Views' />
    <SelectsCard bg={JadeMountain1} text='Rooftop Lounge' />
    <SelectsCard bg={JadeMountain2} text='Private Suites' />
    <SelectsCard bg={JadeMountain3} text='3 Wall Rooms' />
    <SelectsCard bg={JadeMountain4} text='Amazing Service' />
    
    
        
    </div>
  )
}

export default Selects