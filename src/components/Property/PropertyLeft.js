import React from 'react'
import Community from './Community'
import Comparison from './Comparison'
import Details from './Details'
import Location from './Location'
import PropertyNavbar from './PropertyNavbar'
import Rooms from './Rooms'

const PropertyLeft = ({propertyDetail}) => {
  return (
    <>
     
    <div className='  my-0' >
         
          <div>
            <Details propertyDetail={propertyDetail}  />
            
          </div>
    </div>
    </>
  )
}

export default PropertyLeft