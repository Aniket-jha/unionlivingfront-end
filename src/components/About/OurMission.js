import React from 'react'
import Testimonail from "../../asset/testimonial.jpg"
import Mission2 from "../../asset/misson2.png"
import Mission1Mobile from "../../asset/mission1mobile.jpg"
import Mission2Mobile from "../../asset/mission2mobile.png"
import { Zoom } from 'react-reveal'
const OurMission = () => {
  return (
    <div className='bg-gradient-to-r from-[#002a3f] to-[#000000] text-white  mb-16 lg:grid  justify-center mt-[120px] grid-flow-col items-center gap-[6px] font-[Neue Haas Grotesk Display Pro] mx-4 my-0 rounded-xl xl:py-0 lg:px-4 xl:px-12 lg:py-8 px-6 py-6'>
    <Zoom>
     <div className=''>
            <img className='w-[300px] mt-[-80px] mb-6 block lg:hidden   rounded-xl' src={Mission2Mobile} alt="" />
        </div>
        </Zoom>
        <Zoom>
       <div className=''>
            <img className='w-[400px] mt-[-80px] hidden lg:block   rounded-xl' src={Mission2} alt="" />
        </div>
        </Zoom>
        <div className='xl:w-[550px] lg:mx-12  '>
        <p className="text-white   text-2xl text-center  font-[600] font-[Neue Haas Grotesk Display Pro]">
         Our Mission
        </p>
        <div className='flex items-center justify-center '>
        <div className="border-b-[1px] text-white w-20 my-3"></div>
       </div>
              <h1 className=' lg:my-6 text-white text-center text-2xl  font-bold font-[Neue Haas Grotesk Display Pro] lg:text-3xl xl:leading-[3rem] xl:text-5xl' >Transforming the way millennials
              <span className="  rounded-xl px-0  mt-2 py-2  lg:w-[460px]  ">
           <h4
            style={{
              background: "linear-gradient(to right, #ee0979 0%, #ff6a00 100%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
            className="py-2  px-2 inline"
          > rent, live and grow</h4></span>
               </h1>
            <p className=' text-[#d4d4d4] text-base lg:text-xl text-center xl:text-2xl' >Through hassle-free amenities and community based living</p>
        </div>
        <Zoom>
        <div className=''>
            <img className='w-[400px] hidden lg:block mb-[-80px]   rounded-xl' src={Testimonail} alt="" />
        </div>
        </Zoom>
            <Zoom>
         <div className=''>
            <img className='w-[300px] mb-[-70px] block lg:hidden mt-6   rounded-xl' src={Mission1Mobile} alt="" />
        </div>
        </Zoom>
    </div>
  )
}

export default OurMission