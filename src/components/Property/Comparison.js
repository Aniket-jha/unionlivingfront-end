import React from 'react'
import Chart from "../../asset/chart.jpg"
import { urlFor } from '../../asset/client'
import { Zoom } from 'react-reveal'
const Comparison = ({propertyDetail}) => {
  console.log(propertyDetail)
  return (
    <div className='lg:mr-24 mt-12 w-[100%] flex items-center justify-center px-2 py-2 lg:px-12 lg:py-12 ' >
        <Zoom>
        <img style={{width:"400px !important"}} className=' lg:w-[1500px] w-[400px]  rounded-xl ' src={propertyDetail &&  process.env.REACT_APP_UPLOAD_URL + propertyDetail.ComparisonImage.data.attributes.url} alt="" />
        </Zoom>
    </div>
  )
}

export default Comparison