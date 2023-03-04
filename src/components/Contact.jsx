import React from "react";
import {MdOutlineEmail, MdOutlineLocationOn, MdPhone} from "react-icons/md";



const Contact = () => {
  return (
    <>

      <div name='contact' className='flex flex-col justify-center items-center py-32 w-full h-full'>

        <div className='max-w-[1200px] w-full pb-16'>
          <div className="flex justify-center">
            <div className="relative flex w-48 py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">CONTACT</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
          </div>
          <div className='flex justify-center text-[#a8a899] font-medium text-4xl'>
            READY TO START YOUR NEXT PROJECT?
          </div>
          <div className='grid grid-cols-3 pt-16 gap-x-20'>
            <div className='flex flex-col justify-center'>
              <div className="mt-2 flex  justify-center items-center text-lg text-gray-500 gap-4">
                <MdPhone />
                720-394-5506
              </div>
            </div>

            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-column sm:flex-wrap sm:space-x-6">
              <div className="mt-2 flex items-center text-lg text-gray-500 gap-4">
                <MdOutlineEmail />
                centurion.maintenance03@gmail.com
              </div>
            </div>

            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
              <div className="mt-2 flex items-center text-lg text-gray-500 gap-4">
                <MdOutlineLocationOn />
                Hoschton, GA
              </div>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Contact