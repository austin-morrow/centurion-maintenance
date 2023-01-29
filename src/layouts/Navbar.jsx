import React, {useState} from 'react';
import {Link, NavLink } from 'react-router-dom';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import logo from '../assets/brand/cm-logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='relative w-screen h-[150px] z-10 bg-[var(--primary-blue)] fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <Link to='/'><img className='h-[250px] pl-10 lg:h-[300px]' src={logo} alt='Logo' /></Link>
        </div>
          <ul className='pr-10 hidden md:flex text-xl text-[var(--primary-white)]'>
            <NavLink to='/'><li>HOME</li></NavLink>
            <NavLink to='about'><li>ABOUT</li></NavLink>
            <NavLink to='services'><li>SERVICES</li></NavLink>
            <NavLink to='projects'><li>PROJECTS</li></NavLink>
            <NavLink to='contact'><li>CONTACT</li></NavLink>
          </ul>

        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-8 mr-10' /> : <XIcon className='w-8 mr-10' /> }

        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute absolute bg-zinc-200 w-full px-8'}>
        <NavLink to='/'><li className='border-b-2 border-zinc-300 w-full'>HOME</li></NavLink>
        <NavLink to='about'><li className='border-b-2 border-zinc-300 w-full'>ABOUT</li></NavLink>
        <NavLink to='projects'><li className='border-b-2 border-zinc-300 w-full'>PROJECTS</li></NavLink>
        <NavLink to='contact'><li className='border-b-2 border-zinc-300 w-full'>CONTACT</li></NavLink>
      </ul>

    </div>
  )
}

export default Navbar