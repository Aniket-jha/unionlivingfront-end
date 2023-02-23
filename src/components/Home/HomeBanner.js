import React from 'react'
import Union from "../../asset/union.mp4"
import { Zoom } from "react-reveal";
const HomeBanner = ({homeContent}) => {
  console.log(homeContent.HomeBanner.data.attributes.url)
  return (
    <div className='relative' >
    <div className=' overflow-hidden'>
        { homeContent.HomeBanner && <video className=' z-[-1]  h-auto w-full' autoPlay muted loop >
            <source src={process.env.REACT_APP_UPLOAD_URL +  homeContent.HomeBanner.data.attributes.url} type="video/mp4" />
        </video>}
        </div>
       <Zoom>
        <div className='absolute left-0 bottom-0 flex items-center justify-center flex-col right-0 m-auto w-full text-center z-[3] top-[10px] lg:top-[0px]'>
            <h1 className='bg-[#ebe3d67d] my-2 font-[600]  xl:w-[30%] w-[60%] font-[Neue Haas Grotesk Display Pro] px-3 py-3 lg:py-6 lg:text-6xl' >Live <span className="italic" > Easy,</span> </h1>
            <h2 className='bg-[#ebe3d67d]   font-[500]   xl:w-[30%] w-[60%] px-3 py-3 lg:py-6 lg:text-5xl'>Live <span className="italic" > United </span></h2>
            </div>
       </Zoom>
    </div>
  )
}

export default HomeBanner