import React from 'react'
import { Zoom } from 'react-reveal'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const PropertyRight = () => {
  return (
    <Zoom>
    <div className='bg-white z-[999] shadow-2xl fixed md:static bottom-0 lg:h-[240px] left-0 right-0  lg:w-[300px] lg:mx-6  xl:w-[400px] border-[1px]   rounded-xl md:h-[210px]  md:top-[3rem] md:right-[30px] border-[#d0d0d0] md:px-4  md:py-6'>
        <div className='flex items-center justify-center md:block' >
            <h1 className='text-xl font-bold font-[Neue Haas Grotesk Display Pro] mx-6 md:text-center md:mx-0'>Request to Book</h1>
            <div className='flex items-center justify-center my-3 lg:my-3 mr-3'>
              <a target="_blank" rel="noreferrer" href="https://unionliving.surveysparrow.com/s/DATA/tt-gZnC1TkT2z7Z1qMJU9oNq3?">  <button className='bg-[#002a3f] font-[Neue Haas Grotesk Display Pro] text-white w-48 lg:w-80 px-4 py-3 rounded-full' >Book Now</button></a>
            </div>
             <div className='md:flex hidden items-center justify-center my-3 mr-3'>
              <Link activeClass="active" to="faqs" spy={true} smooth={true} offset={-50} duration={500} > <button className='bg-[white] font-[Neue Haas Grotesk Display Pro] text-black border-[#d0d0d0]  border-[1px] w-80 px-4 py-3 rounded-full' >Got a Question</button></Link>
            </div>
        </div>
    </div>
    </Zoom>
  )
}

export default PropertyRight