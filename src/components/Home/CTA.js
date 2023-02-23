import React from 'react'
import { Zoom } from 'react-reveal'
import { Link } from 'react-router-dom'
import Ready from "../../asset/readySection.jpg"
const CTA = () => {
  return (
    <div>
        <div style={{backgroundImage:`url(${Ready})`}} className=" bg-cover py-6 mx-4 rounded-xl  bg-no-repeat lg:px-16 h-[100%] lg:h-[600px] lg:py-16 ">
        <Zoom>
            <div className='bg-[#ebe3d67d] py-3 rounded-lg lg:px-12 flex items-center justify-center flex-col  my-auto mx-auto w-[80%] lg:w-[400px] h-[250px] lg:h-[320px] lg:mt-16   ' >
                <h1 className='text-center  lg:text-[2rem] font-[Neue Haas Grotesk Display Pro] lg:leading-[2rem] text-[#272727]  font-bold  '>Ready to Find your next home?</h1>
                <p className='lg:mt-6 text-sm  px-6 text-center'>We have many homes in the urban metros of the country. Each of them is fully furnished and ready for you to move in. </p>
              
                    <Link to="/properties" ><button className=' text-white bg-gradient-to-r from-[#ee0979] to-[#ff6a00] rounded-xl px-12 py-3 mt-6 text-lg font-[600] font-[Neue Haas Grotesk Display Pro]'>Start Your Search</button></Link>
               
                
            </div>
           </Zoom>
        </div>
    </div>
  )
}

export default CTA