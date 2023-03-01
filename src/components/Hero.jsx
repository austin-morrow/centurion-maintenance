import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Hero = () => {
  return (
    <>
      <section name='home' className='heroImg'>
        {/* Logo */}
        <div className='max-w-[525px] 2xl:max-w-[600px] mx-auto flex flex-col justify-center h-full'>
          <div>
            <div className='text-3xl'>
              Protecting Your Investments
            </div>

              <Link to="work" smooth={true} duration={500} >
                <button className='group text-black text-2xl my-2 flex items-center'>
                  Learn More
                  <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3' /></span>
                </button>
              </Link>
            </div>

        </div>
      </section>
    </>
  )
}

export default Hero