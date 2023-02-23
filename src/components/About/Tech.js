import React from 'react'
import { Zoom } from 'react-reveal'
import { urlFor } from '../../asset/client'

const Tech = ({tech}) => {
  return (
    <div className='lg:px-16 lg:py-16 gap-12 lg:gap-0 flex items-center flex-col lg:flex-row px-6 py-6 justify-center  ' >
        <div className='lg:px-12 lg:w-[700px]' >
          
        <h1 className="lg:text-3xl text-2xl my-6  text-[#272727] font-bold font-[Neue Haas Grotesk Display Pro] ">
          Tech is the <span className="lg:bg-[#ebe3d6]  rounded-xl px-0  mt-2 py-2  lg:w-[460px]  ">
           <h4
            style={{
              background: "linear-gradient(to right, #ee0979 0%, #ff6a00 100%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
            className="py-2  px-2 inline"
          > Catalyst.</h4></span>
        
        </h1>
        
            <p className=' text-justify text-base lg:text-lg text-[#555454]' > Traditional renting ways no longer complement our modern lifestyle. At Union, everything is digitally made smart. Starting from the discovery of a property to managing stays, technology hones the entire process. The website, application, and social media also induce greater transparency between residents and the team. With the use of the app, R&M is streamlined, resulting in better TAT and therefore higher appreciation and loyalty.</p>
        </div>
        <Zoom>
        <div className='lg:px-12' >
            <img className='w-[550px]' src={tech.TechImage && process.env.REACT_APP_UPLOAD_URL +  tech.TechImage.data.attributes.url} alt="" />
        </div>
        </Zoom>
    </div>
  )
}

export default Tech