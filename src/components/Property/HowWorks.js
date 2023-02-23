import React from 'react'
import { Link } from 'react-router-dom'
import Apply from "../../asset/apply.png"
import Move from "../../asset/move.png"
import Talk from "../../asset/talk.png"
import { Zoom } from 'react-reveal'
const HowWorks = () => {
  return (
    <div className='mr-24 mt-12 w-[100%] lg:w-[100%] px-12 py-12 rounded-xl  bg-[#ebe3d6] ' >
         <div className='mb-12' >
            <h1 className='font-bold text-[#272727] font-[Neue Haas Grotesk Display Pro] text-5xl text-center mb-4 ' >How it Works</h1>
            <p className='text-center font-[400] font-[Neue Haas Grotesk Display Pro] text-[#555454] text-lg ' >3 Simple Steps</p>
        </div>
     
        <div className='flex  items-center justify-center flex-col md:flex-row ' >
        <Zoom>
            <div className='lg:w-[300px] my-6 lg:mx-12 flex items-center justify-center flex-col ' >
                <img className='w-[200px]' src={Apply} alt="" />
                <h1 className='text-center text-2xl font-[Neue Haas Grotesk Display Pro] font-bold my-4 ' >1. Apply</h1>
                <p className='text-center text-sm font-[Neue Haas Grotesk Display Pro] text-[#373737] ' >Once you click ‘Book’ you will be redirected to a form that requires you to fill in your basic details and select the home you would like to colive at, all within 5 minutes. And then, just sitback.</p>
              
            </div>
            </Zoom>
            <Zoom>
            <Link to="properties">
            <div className='lg:w-[300px] my-6 lg:mx-12 flex items-center justify-center flex-col ' >
                <img className='w-[200px]' src={Talk} alt="" />
                <h1 className='text-center text-2xl font-[Neue Haas Grotesk Display Pro] font-bold my-4 ' >2. Get Assistance</h1>
                <p className='text-center text-sm font-[Neue Haas Grotesk Display Pro] text-[#373737] ' >Our team will run a background check for your application and get in touch for some follow-up questions to make sure you find utmost comfort.</p>
               
            </div>
            </Link>
            </Zoom>
            <Zoom>
             <div className='lg:w-[300px] my-6 lg:mx-12 flex items-center justify-centerlores fugit possimus. flex-col ' >
                <img className='w-[200px]' src={Move} alt="" />
                <h1 className='text-center text-2xl font-[Neue Haas Grotesk Display Pro] font-bold my-4 ' >3. Move in and enjoy</h1>
                <p className='text-center text-sm font-[Neue Haas Grotesk Display Pro] text-[#373737] ' >Once your booking is confirmed, you just have to pack your bags as everything else is more than ready. A warm and welcoming community awaits you with open arms in your new home</p>
            </div>
            </Zoom>
        </div>
          <div className='mt-8 flex items-center justify-center'><a className='px-12 text-xl py-3 text-white rounded-full bg-gradient-to-r from-[#ee0979] to-[#ff6a00]' href="https://unionliving.surveysparrow.com/s/DATA/tt-gZnC1TkT2z7Z1qMJU9oNq3?">Apply Now</a></div>
    </div>
  )
}

export default HowWorks