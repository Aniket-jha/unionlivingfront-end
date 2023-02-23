import React from 'react'
import { Zoom } from 'react-reveal'
import { urlFor } from '../../asset/client'

const PropertyBanner = ({propertyDetail}) => {
  console.log(propertyDetail)
  return (
    <div id="photos">
      <div className='grid lg:grid-cols-4 mt-6 md:mt-0 lg:gap-[12px] grid-cols-2 ' >
      <Zoom>
        <div className='col-span-2 ' >
          <img className='2xl:w-[700px] xl:h-[490px] lg:h-[345px] xl:w-[750px] lg:w-[600px] w-full pr-2 lg:px-0 lg:mr-0 mb-6  rounded-xl ' src={propertyDetail && process.env.REACT_APP_UPLOAD_URL + propertyDetail.data[0].attributes.url} alt="" />
        </div>
        </Zoom>
      
        <div>
           <Zoom> <img className='xl:w-[340px] xl:h-[235px] lg:w-[250px] w-[100%] pr-2 lg:px-0 lg:mr-0 mb-6 rounded-xl  ' src={propertyDetail && process.env.REACT_APP_UPLOAD_URL + propertyDetail.data[1].attributes.url} alt="" /></Zoom>
          <Zoom><img className='xl:w-[340px] xl:h-[235px] lg:w-[250px] w-[100%] pr-2 lg:px-0 lg:mr-0 mb-6  rounded-xl' src={propertyDetail && process.env.REACT_APP_UPLOAD_URL + propertyDetail.data[2].attributes.url} alt="" /></Zoom>
        </div>
        <div>
        <Zoom>  <img className='xl:w-[340px] xl:h-[235px] lg:w-[250px] w-[100%] pr-2 lg:px-0 lg:mx-0 mb-6 rounded-xl ' src={propertyDetail && process.env.REACT_APP_UPLOAD_URL + propertyDetail.data[3].attributes.url} alt="" /></Zoom>
          <Zoom> <img className='xl:w-[340px] xl:h-[235px] lg:w-[250px] w-[100%] pr-2 lg:px-0 lg:mx-0 mb-6 rounded-xl ' src={propertyDetail && process.env.REACT_APP_UPLOAD_URL + propertyDetail.data[4].attributes.url} alt="" /></Zoom>
        </div>
      </div>
    </div>
  )
}

export default PropertyBanner