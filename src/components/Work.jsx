import React from 'react'
import IMG1 from '../assets/images/IMG_1.JPG'
import IMG2 from '../assets/images/IMG_2.jpg'
import IMG3 from '../assets/images/IMG_3.JPG'
import IMG4 from '../assets/images/IMG_4.JPG'
import IMG5 from '../assets/images/IMG_5.jpg'
import IMG6 from '../assets/images/IMG_6.jpg'
import IMG7 from '../assets/images/IMG_7.jpg'
import IMG8 from '../assets/images/IMG_8.jpg'
import IMG9 from '../assets/images/IMG_9.jpg'

const products = [
  {
    id: 1,
    imageSrc: IMG1,
    imageAlt: '',
  },
  {
    id: 2,
    imageSrc: IMG2,
    imageAlt: '',
  },
  {
    id: 3,
    imageSrc: IMG3,
    imageAlt: '',
  },
  {
    id: 4,
    imageSrc: IMG4,
    imageAlt: '',
  },
  {
    id: 5,
    imageSrc: IMG5,
    imageAlt: '',
  },
  {
    id: 6,
    imageSrc: IMG6,
    imageAlt: '',
  },
  {
    id: 7,
    imageSrc: IMG7,
    imageAlt: '',
  },
  {
    id: 8,
    imageSrc: IMG8,
    imageAlt: '',
  },
  {
    id: 9,
    imageSrc: IMG9,
    imageAlt: '',
  },
]

export default function Work() {
  return (
    <div name='work' className="bg-[#2C434D]">
      <div className="mx-auto max-w-2xl px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center" >
        <div className='pb-16 max-w-2xl'>
          <div className="flex justify-center">
            <div className="relative flex w-48 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">WORK</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
          </div>
          <div className='flex justify-center text-[#a8a899] font-medium text-4xl'>
            SOME OF OUR RECENT WORK
          </div>
          <p className="mt-8 font-light text-lg leading-loose text-white">
            Here is some of our recent projects. We provide free estimates, ripping timbers up to 16'x34" in diameter, and moving and organizing timbers in site.
          </p>
        </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
