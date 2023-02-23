import React,{useState} from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Zoom } from "react-reveal";
import { urlFor } from "../../asset/client";
import ReviewCard from "./ReviewCard";
const Reviews = ({ reviews }) => {
  console.log(reviews);
  const [show, setShow] = useState(false)
  console.log(reviews)
  return (
    <div className="lg:my-16 my-6">
      <div className="flex items-center justify-center">
        <p className="text-center text-[#272727] text-[1.9rem] lg:text-[3rem] font-bold font-[Neue Haas Grotesk Display Pro] mt-8 mb-0 lg:my-6">
          {" "}
          Real Residents,
          <span className="lg:bg-[#ebe3d6] rounded-xl px-0 ml-2 mt-2 py-2  lg:w-[550px]  ">
          <h4
            style={{
              background: "linear-gradient(to right, #ee0979 0%, #ff6a00 100%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
            className="py-2 px-2 inline"
          >
            Real Reviews
          </h4>{" "}
          </span>
        </p>
      </div>
     <div className='grid lg:grid-cols-5 mt-6 mx-12 md:mt-8 lg:gap-[18px] grid-cols-2 ' >
     <Zoom>
        <div className='col-span-2 ' >
        {reviews.videoOne && <video className='xl:w-[690px] lg:w-[600px] w-full px-2 lg:px-0 lg:mr-0 mb-6  rounded-xl '  controls>
  <source src={reviews.videoOne && reviews.videoOne.asset.url} type="video/mp4" />

</video>}
       
        </div>
        </Zoom>
           <Zoom>
        <div>
          <img className='xl:w-[350px] lg:w-[250px] w-[100%] px-2 lg:px-0 lg:mr-0 mb-6 rounded-xl  ' src={reviews.imageOne &&  urlFor(reviews.imageOne)} alt="" />
        
        </div>
        </Zoom>
        {/* <div>
          <img className='xl:w-[350px] lg:w-[250px] w-[100%] px-2 lg:px-0 lg:mx-0 mb-6 rounded-xl ' src={propertyDetail &&  urlFor(propertyDetail.propertyImages[3])} alt="" />
          <img className='xl:w-[350px] lg:w-[250px] w-[100%] px-2 lg:px-0 lg:mx-0 mb-6 rounded-xl ' src={propertyDetail &&  urlFor(propertyDetail.propertyImages[4])} alt="" />
        </div>
        <div>
          <img className='xl:w-[350px] lg:w-[250px] w-[100%] px-2 lg:px-0 lg:mx-0 mb-6 rounded-xl ' src={propertyDetail &&  urlFor(propertyDetail.propertyImages[3])} alt="" />
          <img className='xl:w-[350px] lg:w-[250px] w-[100%] px-2 lg:px-0 lg:mx-0 mb-6 rounded-xl ' src={propertyDetail &&  urlFor(propertyDetail.propertyImages[4])} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Reviews;
