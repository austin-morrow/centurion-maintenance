import React from 'react';
import img1 from '../assets/images/IMG_5667.jpg';
import img2 from '../assets/images/IMG_5662.jpg';
import img3 from '../assets/images/IMG_5666.jpg';

export default function WoodMilling() {
  return (
    <>
      <div name='home' className='woodMillingImg mb-16 relative'>
        <div>
          <div className='text-white text-3xl absolute left-1/4 bottom-5'>Wood Milling</div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1200px] w-full pb-16'>
          <div className='grid grid-cols-2 gap-x-20'>
            <div className='flex justify-center items-center flex-col'>
              <div className='text-left'>
              <div className='text-2xl pb-4'>Heading</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam distinctio earum expedita fugit
                impedit magni minima nam obcaecati odio optio perferendis provident quae qui quibusdam, quidem quis quo
                repellendus suscipit?
              </div>
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
                  impedit magni minima nam obcaecati odio optio perferendis provident quae qui quibusdam, quidem quis quo
                  repellendus suscipit?
                </div>
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
                  impedit magni minima nam obcaecati odio optio perferendis provident quae qui quibusdam, quidem quis quo
                  repellendus suscipit?
                </div>
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