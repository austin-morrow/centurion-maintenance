import React from "react";
import {Link} from "react-router-dom";
import img1 from "../assets/images/IMG_5667.jpg";
import img2 from "../assets/images/IMG_5666.jpg";
import img3 from "../assets/images/IMG_5662.jpg";
import img4 from "../assets/images/IMG_5663.jpg";
import img5 from "../assets/images/IMG_5664.jpg";

export default function Home() {
  return (
    <>
<div className='w-full py-16 px-28 bg-[#181d18]'>
  <div className='pb-8 text-white text-3xl font-bold flex justify-center'>
    <div>Recent Projects</div>
  </div>
  <div className='grid grid-cols-4 gap-6'>
    <div className='flex justify-center w-[300px]'>
      <img src={img1} alt="Wood" className='rounded-lg'/>
    </div>
    <div className='flex justify-center w-[300px]'>
      <img src={img2} alt="Wood" className='rounded-lg'/>
    </div>
    <div className='flex justify-center w-[300px]'>
      <img src={img3} alt="Wood" className='rounded-lg'/>
    </div>
    <div className='flex justify-center w-[300px]'>
      <img src={img4} alt="Wood" className='rounded-lg'/>
    </div>
    <div className='flex justify-center w-[300px]'>
      <img src={img5} alt="Wood" className='rounded-lg'/>
    </div>
    <div className='flex justify-center w-[300px]'>
      <img src={img1} alt="Wood" className='rounded-lg'/>
    </div>
    <div className='flex justify-center w-[300px]'>
      <img src={img2} alt="Wood" className='rounded-lg'/>
    </div>
    <div className='flex justify-center w-[300px]'>
      <img src={img3} alt="Wood" className='rounded-lg'/>
    </div>
  </div>
  <span className="sm:ml-3 flex justify-center pt-10">
          <Link to="/contact"><button
            type="button"

            className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Contact for more information
          </button></Link>
        </span>
</div>

    </>
  )
}