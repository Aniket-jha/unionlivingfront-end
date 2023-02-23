import React from 'react'
import { Zoom } from 'react-reveal'
import { urlFor } from '../../asset/client'
import Linkedin from "../../asset/linkedinblack.png"
const Founders = ({founders}) => {
  console.log(founders)
  return (
    <div>
        <div className='my-12' >
            <h1 className='text-center  my-6 font-bold text-[#272727] font-[Neue Haas Grotesk Display Pro] text-4xl' >Meet<span className="lg:bg-[#ebe3d6] mx-2  rounded-xl px-0  mt-2 py-2  lg:w-[420px]  ">
           <h4
            style={{
              background: "linear-gradient(to right, #ee0979 0%, #ff6a00 100%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
            className="py-2  px-2 inline"
          >Our Founders </h4></span> </h1>
            <p className="text-gray-500 italic text-xl text-center font-[600] font-[Neue Haas Grotesk Display Pro]">
         "For the youth, by the youth"
        </p>
        <div className=' flex items-center justify-center'>
        <div className="border-b-[1px] border-[#d0d0d0] w-20 my-3"></div>
       </div>
            <div className='lg:mx-2 flex items-center flex-wrap justify-center lg:my-12'>
            {
              founders && founders.map((founder)=>(
                <Zoom>
                  <div className='mx-6 my-6 ' >
                    <img className='w-[320px] rounded-lg' src={founder && process.env.REACT_APP_UPLOAD_URL + founder.FounderImage.data.attributes.url} alt="" />
                    <h1 className='font-bold text-2xl text-center text-[#272727] mt-4 font-[Neue Haas Grotesk Display Pro] my-2' >{founder.FounderName}</h1>
                    <p className='font-semibold text-lg text-[#555454] text-center' >{founder && founder.FounderDesignation}</p>
                    <div className="flex items-center justify-center" >
                     <a href={founder && founder.founderLinkedin} > <img className='w-8 cursor-pointer mx-4 mt-4' src={Linkedin} alt="" /></a>
                    </div>
                </div>
                </Zoom>
              ))
            }
                
                 
            </div>
        </div>
    </div>
  )
}

export default Founders