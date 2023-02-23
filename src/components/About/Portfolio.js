import React from 'react'
import { Zoom } from 'react-reveal'
import { urlFor } from '../../asset/client'
import Network from "../../asset/network.png"
import Plans from "../../asset/plans.png"
const Portfolio = ({portfolio}) => {
  return (
   <div className='lg:px-16 lg:pt-0 lg:pb-16 gap-12 lg:gap-0 flex items-center flex-col-reverse lg:flex-row px-6 py-6 justify-center ' >
   <Zoom>
   <div className='lg:px-12' >
            <img className='lg:w-[650px]  ' src={portfolio.PortfolioImage && process.env.REACT_APP_UPLOAD_URL +  portfolio.PortfolioImage.data.attributes.url} alt="" />
        </div>
        </Zoom>
        <div className='lg:px-12 lg:w-[800px]' >
            <h1 className="text-3xl my-6  text-[#272727] font-bold font-[Neue Haas Grotesk Display Pro] ">
         We are here for the 
          <span className="lg:bg-[#ebe3d6]   rounded-xl px-0 ml-2   mt-2 py-2  lg:w-[180px]  ">
           <h4
            style={{
              background: "linear-gradient(to right, #ee0979 0%, #ff6a00 100%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
            className="py-2  px-2 inline"
          >Long Haul. </h4></span>
       
        
        </h1>
            <p className=' text-justify  text-base lg:text-lg text-[#555454]' >Union is the first coliving approach based in the city of dreams, Mumbai. With property management demanding time, effort, and constant improvements, Union has drawn an exceptional graph of growth in the given amount of time. The plans for the future are mapped out with 5+ cities</p>
        </div>
        
    </div>
  )
}

export default Portfolio