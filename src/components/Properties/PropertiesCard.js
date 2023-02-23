import React,{useState,useEffect} from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { urlFor } from '../../asset/client'
import { ArrowRightIcon,ArrowLeftIcon } from '@heroicons/react/20/solid'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const PropertiesCard = ({
   property
}) => {

  return (

    <>
  { property.soldOutImage ?
   ( <div className='xl:mx-2 mx-3 lg:my-3 px-2 lg:py-3 '>
        <div>
           <img className='w-[330px]  rounded-xl' src={property.soldOutImage && urlFor(property.soldOutImage)} />
        </div>
        <div className='my-6'>
      
            <h1 className='text-2xl font-bold text-[#272727] font-[Neue Haas Grotesk Display Pro]' >{property.propertyName}</h1>
           <h3 className='text-lg font-[600]  text-[#535252]  pb-2 pt-2' > {property.PropertyLocation}</h3>
        
  
        </div>

    </div> ) : (
     <div className='xl:mx-2 mx-2 lg:my-3 px-4 lg:py-3 '>
       <div>
         {property.propertyImages && <Carousel  renderArrowPrev={(clickHandler, hasPrev) => {
    return (
      <div
        className={`${
          hasPrev ? "absolute" : "hidden"
        } lg:bottom-[2px] bottom-0 left-[180px] rounded-lg  lg:left-[210px] border-[2px] border-white  flex justify-center items-center m-3 opacity-100 hover:opacity-100 cursor-pointer z-20`}
        onClick={clickHandler}
      >
        <ArrowLeftIcon className="w-9 h-9 text-white rounded-lg bg-[#272727]" />
      </div>
    );
  }}
  renderArrowNext={(clickHandler, hasNext) => {
    return (
      <div
        className={`${
          hasNext ? "absolute" : "hidden"
        } lg:bottom-[2px]  lg:left-[260px] bottom-0 left-[230px] border-[2px] rounded-lg border-white flex justify-center items-center m-3  hover:opacity-100 cursor-pointer z-20`}
        onClick={clickHandler}
      >
        <ArrowRightIcon className="w-9 h-9 bg-[#272727] rounded-lg  text-white" />
      </div>
    );
  }} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} className='xl:w-[330px] lg:w-[200px]' autoPlay={false} >
 {property.propertyImages && property.propertyImages.map((image)=>(
  
   
         <Link to={property.propertyLocation && `/property/${property._id}`} >
                <div className='' >
                    <img className='w-[300px] rounded-xl ' alt='' src={image && urlFor(image.asset)} /> 
                </div>
                </Link>
                
 )) }
              
            </Carousel>}
         
        </div>
       
        <div className='my-6'>

         <Link to={property.propertyLocation && `/property/${property._id}`} >
           
            <h1 className='text-2xl font-bold text-[#272727] font-[Neue Haas Grotesk Display Pro]' >{property.propertyName && property.propertyName}</h1>
           <h3 className='text-lg font-[600]  text-[#535252]  pb-2 pt-2' > {property.propertyLocation ? property.propertyLocation : "Coming Soon"}</h3>
          
          </Link>
        </div>

    </div>
    
    )}
    </>
  )
}

export default PropertiesCard