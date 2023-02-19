import React from 'react';
import img1 from '../assets/images/IMG_5667.jpg';
import img2 from '../assets/images/IMG_5662.jpg';
import img3 from '../assets/images/IMG_5666.jpg';

export default function Services() {
  return (
    <>

      <div className='mt-8 flex flex-col justify-center items-center w-full h-full'>
        <div className='text-3xl font-bold mb-16'>Wood Milling</div>
        <div className='max-w-[1200px] w-full pb-16'>
          <div className='grid grid-cols-2 gap-x-20'>
            <div className='flex justify-center items-center flex-col'>
              <div className='text-left'>
                <div className='text-2xl pb-4'>Heading</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam distinctio earum expedita fugit
                  impedit magni minima nam obcaecati odio optio perferendis provident quae qui quibusdam, quidem quis
                  quo
                  repellendus suscipit?
                </div>
                <span className="sm:ml-3 flex justify-center pt-20">

        </span>
              </div>
            </div>
            <div className='flex justify-center w-[500px]'>
              <img src={img1} alt="Wood" className='rounded-lg'/>
            </div>
          </div>
        </div>

        <div className='max-w-[1200px] w-full pb-16'>
          <div className='grid grid-cols-2 gap-x-20'>
            <div className='flex justify-center w-[500px]'>
              <img src={img3} alt="Wood" className='rounded-lg'/>
            </div>
            <div className='flex justify-center items-center flex-col'>
              <div className='text-left'>
                <div className='text-2xl pb-4'>Heading</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam distinctio earum expedita fugit
                  impedit magni minima nam obcaecati odio optio perferendis provident quae qui quibusdam, quidem quis
                  quo
                  repellendus suscipit?
                </div>
                <span className="sm:ml-3 flex justify-center pt-20">

        </span>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-[1200px] w-full pb-16'>
          <div className='grid grid-cols-2 gap-x-20'>
            <div className='flex justify-center items-center flex-col'>
              <div className='text-left'>
                <div className='text-2xl pb-4'>Heading</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam distinctio earum expedita fugit
                  impedit magni minima nam obcaecati odio optio perferendis provident quae qui quibusdam, quidem quis
                  quo
                  repellendus suscipit?
                </div>
                <span className="sm:ml-3 flex justify-center pt-20">

        </span>
              </div>
            </div>
            <div className='flex justify-center w-[500px]'>
              <img src={img2} alt="Wood" className='rounded-lg'/>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}