import React from 'react'
import HostelImage from "../../asset/hostel.jpg"
import Guesswork from "../../asset/guesswork.png"
import Mobile from "../../asset/mobile.png"
import Responsive from "../../asset/responsive.png"
import Checklist from "../../asset/checklist.png"
import { Zoom } from 'react-reveal'
import { urlFor } from '../../asset/client'
const LeftAndRight = ({homeContent}) => {
  return (
    <div className=' px-4 py-8 lg:px-16 mx-4 my-16 rounded-xl bg-[#ebe3d6] lg:py-24'>
        <div className="flex items-center justify-center" >
             <h1 className='lg:text-5xl text-[#272727] text-2xl my-6 font-[700] font-[Neue Haas Grotesk Display Pro]  mx-3 lg:mx-6 mb-8 lg:mb-20 mt-6  leading-[1.2] text-center  ' >There's Never Been a  <span className=" rounded-xl px-6 lg:mt-4 py-0 block lg:w-[650px]  " ><span style={{"background":"linear-gradient(to right, #ee0979 0%, #ff6a00 100%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}  className="py-2 lg:text-6xl  inline" >Better  time to move</span></span></h1>
        </div>
        <div className='py-4 lg:px-8 flex items-center flex-col lg:flex-row justify-center' >
            <div className=' lg:mx-4 mx-2' >
                <h1 className='lg:text-[2.8rem] w-full  text-[#272727] text-2xl font-[700] font-[Neue Haas Grotesk Display Pro] lg:mx-12  leading-[1.1]  lg:w-[650px] ' >We have taken the guesswork  <span className="  " > <span style={{"background":"linear-gradient(to right, #ee0979 0%, #ff6a00 100%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}  className="pt-0 pb-3  " >out of the pricing</span></span></h1>
                <p className='lg:text-[1.2rem] text-md lg:w-[650px] text-justify text-[#252525] mt-6 lg:mx-12 ' >Our pricing engine calculates rent based on location, quality of the home, sqft, appliances, amenities, and more. </p>
            </div>
            <Zoom>
            <div className='my-6 lg:my-0' >
                <img  src={process.env.REACT_APP_UPLOAD_URL +  homeContent.Guesswork.data.attributes.url}  className="rounded-none mx-4  w-[250px] lg:w-[500px]" alt="" />
            </div>
            </Zoom>
        </div>
        <div className='' >
             <div className='lg:py-6 mt-6 lg:mt-20 lg:px-8 flex-col-reverse lg:flex-row flex items-center justify-center' >
             <Zoom>
             <div className='my-6 xl:ml-6 lg:my-0' >
                <img src={process.env.REACT_APP_UPLOAD_URL +  homeContent.Missing.data.attributes.url} className="w-[250px] mx-6 shadow-lg rounded-xl lg:w-[580px]" alt="" />
            </div>
            </Zoom>
            <div className='lg:ml-24  mx-2 '>
                <h1 className='lg:text-[2.8rem] text-2xl text-[#272727] font-[700] font-[Neue Haas Grotesk Display Pro] lg:mx-12  leading-[1.1]  lg:w-[650px] ' >What’s missing is you,  <span className="   "><p style={{"background":"linear-gradient(to right, #ee0979 0%, #ff6a00 100%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}  className="py-6  inline" >Everything else is ready.</p></span> </h1>
                <p className='lg:text-[1.2rem] text-md lg:w-[650px] text-justify text-[#252525] mt-6 lg:mx-12 ' >Settling in can be overwhelming. With big & little things already taken care of, you will be at ease throughout.</p>
            </div>
            
        </div>
        </div>
        <div className='py-6 lg:px-4 flex items-center flex-col lg:flex-row justify-center' >
            <div className='mx-2 lg:mr-12' >
                <h1 className='lg:text-[2.8rem] text-2xl font-[700] font-[Neue Haas Grotesk Display Pro] lg:mx-12 text-[#272727]  leading-[1.1]  lg:w-[650px] ' > <span style={{"background":"linear-gradient(to right, #ee0979 0%, #ff6a00 100%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}  className="" >Pay Rent,</span> manage your lease, and stay updated in a few clicks</h1>
                <p className='lg:text-[1.2rem] text-md lg:w-[650px] text-justify text-[#252525] mt-6 lg:mx-12 ' >No more splitting bills. Everyone pays and manages their stay directly through the app.</p>
            </div>
            <Zoom>
            <div className='my-2 lg:my-0' >
                <img src={process.env.REACT_APP_UPLOAD_URL +  homeContent.Rents.data.attributes.url} className=" w-[250px] lg:w-[420px] mr-0 lg:mr-20  " alt="" />
            </div>
            </Zoom>
        </div>
        <div className='' >
             <div className='py-6 lg:mt-0 lg:px-4 flex items-center flex-col-reverse lg:flex-row justify-center' >
             <Zoom>
             <div className='my-6 lg:my-0 mr-12' >
                <img src={process.env.REACT_APP_UPLOAD_URL +  homeContent.Responsive.data.attributes.url} className="w-[100%]   lg:w-[400px]" alt="" />
            </div>
            </Zoom>
            <div className='lg:mr-[16px] mx-2  '>
                <h1 className='lg:text-[2.8rem] text-2xl font-[700] text-[#272727]  font-[Neue Haas Grotesk Display Pro] lg:mx-12  leading-[1.1]  lg:w-[600px] ' >A responsive team is  <span style={{"background":"linear-gradient(to right, #ee0979 0%, #ff6a00 100%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}  className="" >always looking out </span> for you.</h1>
                <p className='lg:text-[1.2rem] text-md lg:w-[600px] text-justify text-[#252525] mt-6 lg:mx-12 ' >Unexpected needs pop up anytime, and cannot be postponed. A team will always respond and attend to each of them.</p>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default LeftAndRight