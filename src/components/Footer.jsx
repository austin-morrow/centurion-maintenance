import React from "react"
import Logo from '../assets/brand/am-logo.png'

const Footer = () => {

  return (
    <div className='w-full bg-[#2C434D] text-[#A8A899] px-2'>
      <div className='flex flex-col items-center max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-[text-[#A8A899]'>
        <p className='py-4'>2023 Centurion Maintenance. All Rights Reserved</p>
        <div>

          <a
             href="https://austinmorrow.me" target="_blank" rel="noreferrer">
            <img
              className="h-6"
              src={Logo}
              alt="Your Company"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer