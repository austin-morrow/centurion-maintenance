import React, {useState} from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import logo from '../assests/cm-logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='w-screen h-[150px] z-10 bg-[var(--primary-blue)] fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <img className='h-[250px] pl-10 lg:h-[300px]' src={logo} alt='Logo' />
          {/*<h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>*/}
        </div>
          <ul className='pr-10 hidden md:flex text-xl text-[var(--primary-white)]'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>

        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-8 mr-10' /> : <XIcon className='w-8 mr-10' /> }

        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute absolute bg-zinc-200 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full'>HOME</li>
        <li className='border-b-2 border-zinc-300 w-full'>ABOUT</li>
        <li className='border-b-2 border-zinc-300 w-full'>PROJECTS</li>
        <li className='border-b-2 border-zinc-300 w-full'>CONTACT</li>
      </ul>

    </div>
  )
}

export default Navbar