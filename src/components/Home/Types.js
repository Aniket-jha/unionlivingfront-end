import React from 'react'
import Wall from "../../asset/wall.jpg"
import Work from "../../asset/work.png"
import WorkMobile from "../../asset/workmobile.png"
import Student from "../../asset/student.png"
import StudentMobile from "../../asset/studentmobile.png"
import {Link,useNavigate} from "react-router-dom"
import { urlFor } from '../../asset/client'
import { Zoom } from 'react-reveal'
const Types = ({homeContent}) => {
  const navigate =  useNavigate()
  const handleProperties = () =>{
    navigate("/properties")
  }
  return (
    <div className='mx-4 lg:py-8 py-8 my-6  w-auto h-[300px]   lg:h-[800px] font-[Neue Haas Grotesk Display Pro] lg:my-16 rounded-xl bg-contain bg-no-repeat bg-[#ebe3d6] lg:bg-cover'  >
      <div className='flex items-start pt-8 lg:items-center justify-center' >
        <Zoom>
        <div onClick={handleProperties} style={{backgroundImage:`url(${homeContent && process.env.REACT_APP_UPLOAD_URL +  homeContent.StudentImage.data.attributes.url})`}} className='lg:mx-0 hidden cursor-pointer  lg:flex items-center justify-center relative mx-2 lg:w-[100%]  lg:h-[600px] bg-cover'>
   
            <div className="flex items-center  justify-center mx-6 absolute lg:w-[250px]  bottom-[20px] left-[28%] rounded-xl bg-[#ebe3d6b4]" >
          <h1 className='lg:text-[3.5rem]   mt-0 text-[1.5rem]  text-center font-bold'  > <span className=" rounded-xl px-6 mt-0 py-0 block lg:w-[650px]  " ><span style={{"background":"linear-gradient(to right, #ee0979 0%, #ff6a00 100%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}  className="py-0 lg:text-6xl  inline" >I Study</span></span></h1>
          </div>
      
        </div>
      </Zoom>
          <Zoom>
        <div onClick={handleProperties} style={{backgroundImage:`url(${homeContent && process.env.REACT_APP_UPLOAD_URL +  homeContent.StudentMobileImage.data.attributes.url})`}} className='lg:mx-0 cursor-pointer lg:hidden flex items-center justify-center h-[200px] w-[150px] relative mx-2 lg:w-[100%] bg-center  lg:h-[600px] bg-cover'>
            <div className="flex items-center  justify-center mx-6 absolute lg:w-[250px]  bottom-[20px] left-[8%] rounded-xl bg-[#ebe3d6b4]" >
          <h1 className='lg:text-[3.5rem]   mt-0 text-[1rem]  text-center font-bold'  > <span className=" rounded-xl px-2 my-2 mx-1 py-0 block lg:w-[650px]  " ><span style={{"background":"linear-gradient(to right, #ee0979 0%, #ff6a00 100%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}  className="py-0 lg:text-6xl  inline" >I Study</span></span></h1>
          </div>
        </div>
        </Zoom>
         <Zoom>
          <div onClick={handleProperties} style={{backgroundImage:`url(${homeContent && process.env.REACT_APP_UPLOAD_URL +  homeContent.WorkMobileImage.data.attributes.url})`}} className='lg:mx-0 cursor-pointer lg:hidden flex items-center justify-center h-[200px] w-[150px] relative mx-2 lg:w-[100%] bg-center lg:h-[600px] bg-cover'>
            <div className="flex items-center  justify-center mx-6 absolute lg:w-[250px]  bottom-[20px] left-[8%] rounded-xl bg-[#ebe3d6b4]" >
          <h1 className='lg:text-[3.5rem]   mt-0 text-[1rem]  text-center font-bold'  > <span className=" rounded-xl px-2 my-2 mx-1 py-0 block lg:w-[650px]  " ><span style={{"background":"linear-gradient(to right, #ee0979 0%, #ff6a00 100%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}  className="py-0 lg:text-6xl  inline" >I Work</span></span></h1>
          </div>
        </div>
        </Zoom>
           <Zoom>
        <div onClick={handleProperties} style={{backgroundImage:`url(${homeContent && process.env.REACT_APP_UPLOAD_URL +  homeContent.WorkImage.data.attributes.url})`}} className='lg:mx-0 hidden cursor-pointer  lg:flex items-center justify-center relative mx-2 lg:w-[100%] lg:h-[600px] bg-cover'>
          <div className="flex items-center  justify-center absolute lg:w-[250px] mx-6 lg:bottom-[20px] lg:left-[28%] rounded-xl  bg-[#ebe3d6b4]" >
           <h1 className='lg:text-[3.5rem]   mt-0 text-[1.5rem]  text-center font-bold'  > <span className=" rounded-xl px-6 mt-0 py-0 block lg:w-[650px]  " ><span style={{"background":"linear-gradient(to right, #ee0979 0%, #ff6a00 100%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}  className="py-0 lg:text-6xl  inline" >I Work</span></span></h1>
             </div>

        </div>
        </Zoom>
      </div>
  
    </div>
  )
}

export default Types