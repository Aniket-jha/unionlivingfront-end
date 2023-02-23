import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const PropertyNavbar = () => {
  return (
    <div className='hidden lg:block' >
        <div className='flex  bg-white items-start my-6 sticky  justify-start  top-[170px] ' >
        <Link activeClass="active" to="photos" spy={true} smooth={true} offset={-50} duration={500} >
           <p className='lg:pr-8 cursor-pointer  text-lg text-[#7c7c7c] pl-3 font-[Neue Haas Grotesk Display Pro] py-3' >Photos</p>
        </Link>
          
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={20} duration={500} >
            <p className='lg:px-8 cursor-pointer  text-lg text-[#7c7c7c] font-[Neue Haas Grotesk Display Pro] py-3' >About</p>
        </Link>
         <Link activeClass="active" to="rooms" spy={true} smooth={true} offset={50} duration={500} >
                 <p className='lg:px-8 cursor-pointer  text-lg text-[#7c7c7c] font-[Neue Haas Grotesk Display Pro] py-3' >Rooms</p>
        </Link>
            <Link activeClass="active" to="video" spy={true} smooth={true} offset={50} duration={500} >
                  <p className='lg:px-8 cursor-pointer  text-lg text-[#7c7c7c] font-[Neue Haas Grotesk Display Pro] py-3' >Video</p>
        </Link>
        <Link activeClass="active" to="location" spy={true} smooth={true} offset={50} duration={500} >
                 <p className='lg:px-8 cursor-pointer  text-lg text-[#7c7c7c] font-[Neue Haas Grotesk Display Pro] py-3' >Location</p>
        </Link>
<Link activeClass="active" to="faqs" spy={true} smooth={true} offset={50} duration={500} >
                 <p className='lg:px-8 cursor-pointer  text-lg text-[#7c7c7c] font-[Neue Haas Grotesk Display Pro] py-3' >FAQS</p>
        </Link>
            
            
        </div>
    </div>
  )
}

export default PropertyNavbar