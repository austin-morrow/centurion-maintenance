import React from "react";
import {MdOutlineEmail, MdOutlineLocationOn, MdPhone} from "react-icons/md";


const Contact = () => {
  return (
    <>


      <div name='contact' className='contactImg relative'>

      </div>

      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1200px] w-full pb-16'>
          <div className='grid grid-cols-3 gap-x-20'>
            <div className='flex justify-center items-center flex-col'>
              <div className='text-left'>
                <div className='text-2xl pb-4'>Get in Touch</div>
              </div>
            </div>

            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-column sm:flex-wrap sm:space-x-6">
              <div className="mt-2 flex items-center text-lg text-gray-500 gap-4">
                <MdOutlineEmail />
                centurion.maintenance03@gmail.com
              </div>

              <div className="mt-2 flex items-center text-lg text-gray-500 gap-4">
                <MdPhone />
                720-394-5506
              </div>
            </div>

            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
              <div className="mt-2 flex items-center text-lg text-gray-500 gap-4">
                <MdOutlineLocationOn />
                268 Dogwood Ln. Hoschton, GA 30548
              </div>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Contact