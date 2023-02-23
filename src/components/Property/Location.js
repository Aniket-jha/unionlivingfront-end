import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Zoom } from 'react-reveal'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Location = ({propertyDetail}) => {
    const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <div id="location" className=' mr-24 mt-12 w-[100%] bg-[#002a3f] text-white  px-12 py-12  rounded-xl  ' >
        <div>
            <h1 className='font-bold font-[Neue Haas Grotesk Display Pro] text-2xl ' >Location</h1>
        </div>
        <div className='border-b-[1px] border-[#d0d0d0] w-20 my-6' > </div>
            <div>
                <p className='text-md font-[Neue Haas Grotesk Display Pro]' > {propertyDetail && propertyDetail.propertyName}, {propertyDetail && propertyDetail.propertyLocation}</p>
            </div>
            
            <div style={{ height: '100%', width: '100%' }}>
    <Zoom> <iframe src={propertyDetail &&  propertyDetail.PropertyMap} className='w-[100%] h-[400px] rounded-xl my-6' style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Zoom>
    </div>
    </div>
  )
}

export default Location