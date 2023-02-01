import React, {useState} from 'react';
import {Link, NavLink } from 'react-router-dom';
import {MenuIcon, XIcon} from '@heroicons/react/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] z-10 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-center items-center w-full h-full'>
          <ul className='pr-10 hidden md:flex text-xl text-[white]'>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='woodmilling'><li>Wood Working</li></NavLink>
            <NavLink to='projects'><li>Residential</li></NavLink>
            <NavLink to='about'><li>About</li></NavLink>
            <NavLink to='contact'><li>Contact</li></NavLink>
          </ul>

        <div style={{color: 'white'}} className='md:hidden' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-8' /> : <XIcon value={{ color: 'white' }} className='w-8' /> }
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute absolute bg-white w-full px-8'}>
        <NavLink to='/'><li className='border-b-2 border-zinc-300 w-full'>Home</li></NavLink>
        <NavLink to='woodmilling'><li className='border-b-2 border-zinc-300 w-full'>Wood Milling</li></NavLink>
        <NavLink to='projects'><li className='border-b-2 border-zinc-300 w-full'>Residential</li></NavLink>
        <NavLink to='about'><li className='border-b-2 border-zinc-300 w-full'>About</li></NavLink>
        <NavLink to='contact'><li className='border-b-2 border-zinc-300 w-full'>Contact</li></NavLink>
      </ul>

    </div>
  )
}

export default Navbar