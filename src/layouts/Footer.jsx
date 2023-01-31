import logo from '../assets/brand/cm-logo.png';
import {Link} from "react-router-dom";
import React from "react";
import { MdOutlineEmail, MdPhone, MdOutlineLocationOn } from "react-icons/md";


const Footer = () => {

  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
      <div className='max-w[1240px] items-center mx-auto grid grid-cols-2 md:grid-cols-3 border-b-2 border-gray-600 py-8'>
        <div>
          <Link to='/'><img className='h-[200px] pl-10 lg:h-[200px]' src={logo} alt='Logo'/></Link>
        </div>
        <div>
          <ul>
           <li><MdOutlineEmail />centurion.maintenance03@gmail.com</li>
            <li><MdPhone />720-394-5506</li>
          </ul>
        </div>
        <div>
          <div><MdOutlineLocationOn />268 Dogwood Ln. Hoschton, GA 30548</div>
        </div>
      </div>

      <div className='flex flex-col items-center max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023 Centurion Maintenance. All Rights Reserved</p>
        <div>
          WEBSITE BY AM
        </div>
      </div>
    </div>
  )
}

export default Footer