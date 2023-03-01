import img2 from "../assets/images/IMG_5666.jpg";
import React from "react";


const links = [
  { name: 'Mobile Sawmill' },
  { name: 'Indoor curring Environment'},
]

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="grid grid-cols-2 mx-auto max-w-6xl px-6 lg:px-8">
        <div>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-500">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-black sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='flex justify-center w-[350px]'>
          <img src={img2} alt="Wood" className='rounded-lg'/>
        </div>
      </div>
      </div>
    </div>
  )
}
