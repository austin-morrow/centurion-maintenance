import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center py-40 w-full h-full bg-[#2C434D]">
        <div className='max-w-2xl'>
          <div className="flex justify-center">
            <div className="relative flex w-3/12 py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">ABOUT US</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
          </div>
          <div className='flex justify-center text-[#a8a899] font-medium text-4xl'>
            PROTECTING YOUR INVESTMENTS
          </div>
        <p className="mt-8 font-light text-lg leading-loose text-white">
          Centurion Maintenance Inc. established business in Denver Colorado on 10-3-2001 focusing on residential and commercial capital gains projects. As our journey leads us to Georgia 12-14-2022 we wanted to take a leap of faith and focus on sawmill log ripping for residential customers. Our goal is to provide a variety of lumber for future woodworking projects.
        </p>
        </div>
      </div>

    </>

  )
}

export default About