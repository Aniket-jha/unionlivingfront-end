import React from 'react'
import { urlFor } from '../../asset/client'
import { Zoom } from 'react-reveal'
const Rooms = ({propertyDetail}) => {
  console.log(propertyDetail)
  return (
    <div id="rooms" className='mt-12  w-[100%] px-6 py-12 border-[1px] rounded-xl border-[#d0d0d0]  '>
        <div>
            <h1 className='font-bold font-[Neue Haas Grotesk Display Pro] text-2xl ' >Rooms</h1>
        </div>
        <div className='border-b-[1px] border-[#d0d0d0] w-20 my-6' ></div>
        <div className='my-6 flex items-center lg:gap-0 gap-12 lg:justify-start flex-wrap' >
        {
        propertyDetail &&  propertyDetail.map((room)=>(
            <Zoom>
            <div className='flex items-center md:items-center gap-6 lg:gap-0  lg:justify-start flex-col md:flex-row  py-4 ' >
                <div>
                  <img className='rounded-xl w-[80%] lg:w-48 xl:w-72  ' src={room.RoomImage && process.env.REACT_APP_UPLOAD_URL + room.RoomImage.data.attributes.url} alt="" />
                </div>
                <div className='lg:mx-4' >
                    <h1 className='lg:my-2 xl:my-4 font-semibold font-[Neue Haas Grotesk Display Pro] lg:text-xl xl:text-2xl' >{room.RoomTitle}</h1>
                    <p className='lg:w-[200px] xl:w-[300px] font-[Neue Haas Grotesk Display Pro] my-2 text-xs text-[#727272]'>{room.RoomContent}</p>
                </div>
            </div>
            </Zoom>
          ))
        }
            
           
        
        </div>
    </div>
  )
}

export default Rooms