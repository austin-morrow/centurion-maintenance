import React from 'react';
import img1 from '../assets/images/IMG_5667.jpg';

export default function WoodMilling() {
  return (
    <>
      <section name='home' className='woodMillingImg mb-10'>
      <div>
        <div className='text-white'>Wood Milling</div>
      </div>
      </section>

      <div className='grid grid-cols-2'>
        <div className='flex justify-center'>Text
        </div>
        <div className='flex justify-center w-[500px]'>
          <img src={img1} alt="Image" className='rounded-lg'/>
        </div>
      </div>
    </>
  )
}