import img2 from "../assets/images/IMG_5922.JPG";
import React from "react";

export default function Example() {
  return (
    <div name='services' className="relative isolate overflow-hidden bg-white py-40 sm:py-40">
      <div className="grid grid-cols-2 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl ">
          <div className='flex justify-center'>
          <div className="relative flex w-48 py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">SERVICES</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          </div>
          <div className='flex justify-center text-[#a8a899] font-medium mr-8 text-3xl'>
            MOBILE SAWMILL
          </div>
          <ul className="mt-6 text-lg list-disc leading-8 text-gray-500">
            <li>Free estimates</li>
            <li>Mobile sawmill ripping timbers up to 16'x34" in diameter to preferred thickness</li>
            <li>Moving and organizing timbers on site</li>
            <li>Available indoor temperature controlled timber curing.</li>
            <div className='list-none italic pt-10 text-sm '>
            <li>** Coming soon. Variety of cut timbers for your woodworking projects **</li>
            </div>
          </ul>
        </div>

      <div className='ml-16 flex justify-center'>
        <div className='flex justify-center w-[500px]'>
          <img src={img2} alt="Wood" className='rounded-lg'/>
        </div>
      </div>
      </div>
    </div>
  )
}
