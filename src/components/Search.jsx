import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className='py-4'>
          Rising majestically above the 600 acre beach front resort of Anse Chastanet, Jade Mountain Resort on St. Lucia’s south-western Caribbean coastline is a cornucopia of organic architecture celebrating St. Lucia’s stunning scenic beauty.Architect owner Nick Troubetzkoy has expanded upon his philosophy of building in harmony with Caribbean nature in his creation of Jade Mountain St. Lucia. The bold architectural design – individual bridges leading to exceptional infinity pool sanctuaries and rugged stoned-faced columns reaching towards the sky – makes Jade Mountain St. Lucia one of the Caribbean’s most mesmerizing resort experiences.Expect grand sweeping spaces where bedroom, living area and an extravagant private infinity pool glide into one another to form extraordinary platforms floating out into nature. With the fourth wall entirely absent, Jade Mountain’s sanctuaries are stage-like settings from which to embrace the full glory of St. Lucia’s Pitons World Heritage Site, and of course, the eternal Caribbean Sea.

Wrapped around an infinity pool with a dazzling kaleidoscope of colors, the Jade Mountain Club celebrates James Beard Award winner Chef Allen Susser’s “Jade Cuisine.” Hovering in space above the Jade Mountain Club is the Celestial Terrace, perfect for sunset cocktails or star-gazing.

A wide range of spa services can be enjoyed in the privacy of the Jade Mountain sanctuaries or at Kai en Ciel, Jade Mountain’s boutique spa and fitness studio. The resort major domos and a dedicated resort team ensure outstanding service around the clock.

Enjoy the exclusivity and privacy of Jade Mountain with all of sister resort Anse Chastanet’s restaurants, bars, boutiques, art gallery, spa, scuba, bike and watersports facilities as well as 2 soft sand beaches available and easily accessible to Jade Mountain guests by foot or resort shuttle at all times.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div>
          <div className='border text-center'>
              <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
              <p className='py-4'>12 HOURS LEFT</p>
              <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Destination</label>
                  <select className='border rounded-md p-2'>
                      <option>Jade Mountain</option>
                      <option>Anse Chastanet</option>
                      <option>Ladera Resort</option>
                      <option>Stonefield Villa</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
          </form>
      </div>
    </div>
  );
};

export default Search;
