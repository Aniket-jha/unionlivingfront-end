import React from "react";
import Traditional from "../../asset/traditional.png";
import Modern from "../../asset/oldandmodern.png";
import { urlFor } from "../../asset/client";
import { Zoom } from "react-reveal";
const OurVision = ({vision}) => {
  return (
    <div className="lg:px-8 lg:py-16 gap-12 lg:gap-0 flex items-center flex-col-reverse lg:flex-row px-6 py-6 justify-center ">
    <Zoom>
      <div className="lg:px-12 flex items-center justify-center">
        <img className="w-[550px]" src={vision.VisionImage && process.env.REACT_APP_UPLOAD_URL +  vision.VisionImage.data.attributes.url} alt="" />
        {/* <img className="w-[250px]" src={Traditional} alt="" /> */}
      </div>
      </Zoom>
      <div className="lg:px-12 lg:w-[700px]">
        <p className="text-gray-500 text-lg lg:text-2xl font-[600] font-[Neue Haas Grotesk Display Pro]">
          {vision && vision.title}
        </p>
        <div className="border-b-[1px] border-[#d0d0d0] w-20 my-3"></div>
        <p className="lg:text-3xl text-2xl  my-6  text-[#272727] font-bold font-[Neue Haas Grotesk Display Pro] ">
          Housing is broken. We are creating a <span className="lg:bg-[#ebe3d6] lg:block rounded-xl px-0  mt-2 py-2  lg:w-[460px]  ">
          <h4
            style={{
              background: "linear-gradient(to right, #ee0979 0%, #ff6a00 100%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
            className="py-2  px-2 inline"
          > win-win for everyone  involved.</h4></span>
        </p>
        <p className=" text-justify font-[Neue Haas Grotesk Display Pro] text-base lg:text-lg text-[#555454]">
          From the lack of discoverability of millennial friendly spaces to having to deal with leaks and locks by yourself, it’s a vicious cycle. By spotlighting the resident experience and zeroing in on their unique concerns and housing needs, our occupancy rates are best-in-class.   Whilst coliving is being recognised as a form of asset-class, we have started to create and design our own supply, generating rental yield like never before. 
        </p>
      </div>
    </div>
  );
};

export default OurVision;
