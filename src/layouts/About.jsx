import React from "react";

const About = () => {
  return (
    <>
      <div name='about' className="flex flex-col items-center py-20 sm:py-40 w-full h-full bg-[#2C434D]">
        <div className='max-w-2xl'>
          <div className="flex justify-center">
            <div className="relative flex w-48 py-5 items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">ABOUT US</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
          </div>
          <div className='flex justify-center sm:flex-row text-center text-[#a8a899] font-medium text-4xl'>

            {/*flex flex-col items-center max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-[text-[#A8A899]'*/}
            QUALITY WOOD MILLING
          </div>
        <p className="mt-8 font-light px-6 md:px-0 leading-loose text-white">
        Centurion Maintenance Inc. began its journey in Denver, Colorado on October 3, 2001, with a focus on residential and commercial capital gain projects. Our journey lead us to Georgia on December 14, 2022, where are took a leap of faith by transitioning our focus to sawmill log ripping for residential customers. Our mission is to offer a wide selection of lumber to cater to future woodworking projects. With this new venture, we hope to deliver unparalleled quality and service to our customers.
        </p>
        </div>
      </div>

    </>

  )
}

export default About