import Logo from '../assets/brand/cm-logo.png';
import React from "react";
import {Link} from "react-router-dom";
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <section name='home' className='coverImg'>
        {/* Logo */}
        <div className='max-w-[700px] 2xl:max-w-[600px] mx-auto px-20 pt-20 flex flex-col justify-center h-full'>
          <img src={Logo} alt='logo' />
        </div>
      </section>

      <div className='mt-44 flex flex-col justify-center items-center w-full h-full'>

      <div className="pb-44 mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Protecting Your Investments</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam amet, architecto blanditiis cumque ea ex fuga hic itaque iure iusto nihil nisi nostrum omnis pariatur, quam repudiandae sequi temporibus?
        </p>
      </div>

        <Projects />

        <h2 className="mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
      <div className='mt-10 max-w-[1200px] w-full pb-16'>
      <div className='grid grid-cols-2'>
        <div className='flex justify-center items-center flex-col'>
          <div className='rounded-lg border-2 border-black flex justify-center w-[425px] h-[400px]'>
          <div className='top-1/2 left-1/2 mt-10'>
            <div className='text-2xl pb-4'>Wood Milling</div>
            <div>
              <ul className='list-disc'>
                <li>Accessory Dwelling Units</li>
                <li>Additions</li>
                <li>Attic Restoration</li>
                <li>Basement Remodeling</li>
                <li>Bathroom Remodeling</li>
                <li>Deck Building</li>
                <li>Deck Repair</li>
              </ul>
            </div>
            <span className="sm:ml-3 flex justify-center pt-20">
          <Link to="/woodmilling"><button
            type="button"

            className="inline-flex items-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            See more Wood Milling
          </button></Link>
        </span>
          </div>
          </div>
        </div>

        <div className='flex justify-center items-center flex-col'>
          <div className='rounded-lg border-2 border-black flex justify-center w-[425px] h-[400px]'>
            <div className='top-1/2 left-1/2 mt-10'>
              <div className='text-2xl pb-4'>Residential</div>
              <div>
                <ul className='list-disc'>
                  <li>Accessory Dwelling Units</li>
                  <li>Additions</li>
                  <li>Attic Restoration</li>
                  <li>Basement Remodeling</li>
                  <li>Bathroom Remodeling</li>
                  <li>Deck Building</li>
                  <li>Deck Repair</li>
                </ul>
              </div>
              <span className="sm:ml-3 flex justify-center pt-20">
          <Link to="/residential"><button
            type="button"

            className="inline-flex items-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            See more Residential
          </button></Link>
        </span>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}