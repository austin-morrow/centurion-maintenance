import React from "react";
import {MdOutlineEmail, MdOutlineLocationOn, MdPhone} from "react-icons/md";



const Contact = () => {
  return (
    <>

      <div className='flex flex-col justify-center items-center mt-8 w-full h-full'>

        <div className='max-w-[1200px] w-full pb-16'>
          <div className="pb-14 mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum.
          </p>
        </div>
          <div className='grid grid-cols-3 gap-x-20'>
            <div className='flex flex-col justify-center'>
              <div className="mt-2 flex  justify-center items-center text-lg text-gray-500 gap-4">
                <MdPhone />
                720-394-5506
              </div>
            </div>

            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-column sm:flex-wrap sm:space-x-6">
              <div className="mt-2 flex items-center text-lg text-gray-500 gap-4">
                <MdOutlineEmail />
                dwworkforce@centurylink.net
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