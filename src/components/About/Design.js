import React from 'react'
import { Zoom } from 'react-reveal'
import { urlFor } from '../../asset/client'
import Designs from "../../asset/design.png"
const Design = ({design}) => {
  return (
    <div className='lg:px-16 lg:py-16 gap-12 lg:gap-0 flex items-center flex-col-reverse lg:flex-row px-6 py-6 justify-center ' >
    <Zoom>
     <div className='lg:px-24' >
            <img className='w-[500px] rounded-xl shadow-xl ' src={design.DesignImage && process.env.REACT_APP_UPLOAD_URL +  design.DesignImage.data.attributes.url} alt="" />
        </div>
        </Zoom>
        <div className='lg:px-4 lg:w-[700px]' >
          
        <h1 className="lg:text-3xl text-2xl my-6  text-[#272727] font-bold font-[Neue Haas Grotesk Display Pro] ">
          We are <span className="lg:bg-[#ebe3d6]  rounded-xl px-0  mt-2 py-2  lg:w-[460px]  ">
           <h4
            style={{
              background: "linear-gradient(to right, #ee0979 0%, #ff6a00 100%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
            className="py-2  px-2 inline"
          > design obsessed.</h4></span>
        </h1>
            <p className=' text-justify font-[Neue Haas Grotesk Display Pro] text-base lg:text-lg text-[#555454]' >Conventional rental provisions such as PGs and apartments in the unorganized sector- fail to offer a sense of design. With most of the time spent indoors, the space has a major role in uplifting the vibes. Each of the properties are thoughtfully designed and tastefully decorated to complement your personality. And of course, notwithstanding functionality by making sure each nook and corner serves a purpose.
</p>
        </div>
       
    </div>
  )
}

export default Design