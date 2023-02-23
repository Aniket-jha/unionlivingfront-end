import React from 'react'
import PropertiesCard from './PropertiesCard'
import SoldOut from "../../asset/soldout.jpg"
import Loader from '../Layout/Loader'
import { Zoom } from 'react-reveal'
import PropertiesCardTwo from './PropertiesCardTwo'
const PropertiesList = ({properties,allProperties}) => {
  console.log()
  return (
    <>
   {properties ? (<div className=' lg:my-16 lg:mx-2 mx-2 xl:mx-6' >
    <div className='mb-8 mt-12 mx-2' >
        <h1 className='font-bold text-5xl font-[Montserrat] text-[#272727] text-center  ' >Our <span className="lg:bg-[#ebe3d6] mx-2  rounded-xl px-0  mt-2 py-2  lg:w-[460px]  ">
           <h4
            style={{
              background: "linear-gradient(to right, #ee0979 0%, #ff6a00 100%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
            className="py-2  px-2 inline"
          >   Properties </h4></span> </h1>
    </div>
    <div className='flex items-center justify-center ' >
    
    </div>
    <div className='my-16 flex items-center justify-center gap-3 xl:gap-6 lg:gap-0 flex-wrap ' >
    
     {allProperties && allProperties.map((property,key)=>(
      <Zoom>

      <PropertiesCardTwo property={property}  />
      
      </Zoom>
    ))}
   
      
        {/* <PropertiesCard name="Property" location="Navi Mumbai" content="Anythings" price="25,000 Per Month" image="https://images.pexels.com/photos/4907458/pexels-photo-4907458.jpeg?auto=compress&cs=tinysrgb&w=600"/>
         <PropertiesCard name="Property" location="Navi Mumbai" content="Anythings" price="25,000 Per Month" image="https://images.pexels.com/photos/4907458/pexels-photo-4907458.jpeg?auto=compress&cs=tinysrgb&w=600"/>
          <PropertiesCard name="Property" location="Navi Mumbai" content="Anythings" price="25,000 Per Month" image="https://images.pexels.com/photos/4907458/pexels-photo-4907458.jpeg?auto=compress&cs=tinysrgb&w=600"/> */}
        </div>
    </div>) : (
       <div className='flex items-center justify-center w-full h-full' >
      <Loader/>
      </div>
    )}
    </>
  )
}

export default PropertiesList