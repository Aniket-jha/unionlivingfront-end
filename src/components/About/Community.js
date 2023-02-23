import React from 'react'
import { Zoom } from 'react-reveal'
import { urlFor } from '../../asset/client'
import Network from "../../asset/network.png"
const Community = ({community}) => {
  return (
   <div className='lg:px-16 lg:pt-16 lg:pb-0 gap-12 lg:gap-0 flex items-center flex-col lg:flex-row px-6 py-6 justify-center  ' >
        <div className='lg:px-12 lg:w-[800px]' >
             
        <h1 className="lg:text-3xl text-2xl my-6  text-[#272727] font-bold font-[Neue Haas Grotesk Display Pro] ">
        Community is what
        <span className="lg:bg-[#ebe3d6]  rounded-xl px-0 ml-2   mt-2 py-2  lg:w-[300px]  ">
           <h4
            style={{
              background: "linear-gradient(to right, #ee0979 0%, #ff6a00 100%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
            className="py-2  px-2 inline "
          >escalates the graph. </h4></span>
       
        </h1>
            <p className=' text-justify font-[Neue Haas Grotesk Display Pro] text-base lg:text-lg text-[#555454]' >  There are friends, there is family and then there are friends who turn into family. At Union, you stay with friends that stay for life. While sharing a space with peers lets you grow your network and dodge loneliness, workshops and events keep the mood cheered up. Needless to say, it forms a sustainable revenue model owing to a lower vacancy rate and automated Word of Mouth and therefore higher returns.
</p>
        </div>
        <Zoom>
        <div className='lg:px-12' >
            <img className='w-[550px]' src={community.CommunityImage && process.env.REACT_APP_UPLOAD_URL +  community.CommunityImage.data.attributes.url} alt="" />
        </div>
        </Zoom>
    </div>
  )
}

export default Community