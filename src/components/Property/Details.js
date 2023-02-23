import React,{useState} from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { Zoom } from 'react-reveal'
const Details = ({propertyDetail}) => {
 
  return (
    <Zoom>
    <div id="details" className=' lg:mr-24 w-[100%]   px-6 py-6 xl:w-[800px] lg:px-12 lg:py-12 border-[1px] rounded-xl border-[#d0d0d0]  '>
        <div>
            <h1 className='lg:text-4xl text-3xl  font-bold font-[Neue Haas Grotesk Display Pro]'>{propertyDetail.PropertyTitle && propertyDetail.PropertyTitle}</h1>
        </div>
        <div className=' py-6 flex'>
            <MapPinIcon className='w-6 mr-2' />
            <h5 className='text-xl' >{ propertyDetail && propertyDetail.PropertyLocation}</h5>
            
        </div>
        <div>
          <h6 className=' text-[#272727] font-[Neue Haas Grotesk Display Pro] text-xl' >Rent starting from  <strong>Rs.{propertyDetail && propertyDetail.PropertyStartingPrice}</strong></h6>
        </div>
    </div>
    </Zoom>
  )
}

export default Details