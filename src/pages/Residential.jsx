import React from 'react';
import { Link } from 'react-router-dom';

const Residential = () => {
  return (
    <>
      <div name='home' className='residentialImg relative'>

      </div>

      <div className=" py-100 px-4 mt-8">
        <div className='text-3xl font-bold mb-16 flex justify-center'>Residential</div>
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
          <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            Our Services
          </h2>
          <dl className="w-full md:w-2/3">
            <div>
              <ul className='list-disc'>
                <li>Accessory Dwelling Units</li>
                <li>Additions</li>
                <li>Attic Restoration</li>
                <li>Basement Remodeling</li>
                <li>Bathroom Remodeling</li>
                <li>Deck Building</li>
                <li>Deck Repair</li>
                <li>Dock Design & Construction</li>
                <li>Consultations</li>
                <li>Drawing Services</li>
                <li>Finishing</li>
                <li>Finishing Selections</li>
                <li>Permitting</li>
                <li>Product Selection & Sourcing</li>
              </ul>
            </div>
          </dl>
        </div>

        <span className="sm:ml-3 flex justify-center pt-20">
          <Link to="/contact"><button
            type="button"

            className="inline-flex items-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            Contact for more information
          </button></Link>
        </span>
      </div>

    </>

  )
}

export default Residential

