import React from "react";
import Unite from "../../asset/unite.png";
import Property from "../../asset/property.png";
import Cleaning from "../../asset/cleaning-min.png";
import Meal from "../../asset/meal.png";
import Wifi from "../../asset/wifi.png";
import Room from "../../asset/room.png";
import { Zoom } from "react-reveal";
const Amenities = () => {
  return (
    <div className="flex bg-[#ebe3d6] gap-12 lg:gap-0 lg:my-16 font-[Neue Haas Grotesk Display Pro] mx-4 my-2 rounded-xl xl:py-8 lg:px-2 xl:px-0 lg:py-8 px-6 py-6 items-start justify-center flex-wrap ">
    <Zoom>
      <div className="w-[100%] lg:mx-2 xl:mx-12 lg:my-12 lg:w-[200px] xl:w-[310px]">
        <div className="text-center flex flex-col justify-center items-center">
          <div className="mr-2">
            <img className="w-[200px]" src={Room} alt="" />
          </div>
          <div className="my-2">
            <h3 className="xl:text-[1.7rem] lg:text-[1.1rem] text-[1.6rem]  text-[#272727] font-[650]">
              Fully Furnished
            </h3>
          </div>
        </div>
        <p className="xl:text-sm lg:text-xs  my-2 text-center">
          Entirely furnished from tile to top, each property is ready for you
          with elements that inject life into a home.
        </p>
      </div>
      </Zoom>
       <Zoom>
        <div className="w-[100%] lg:mx-2 xl:mx-12 lg:my-12 lg:w-[200px] xl:w-[310px]">
        <div className="text-center flex flex-col justify-center items-center">
          <div className="">
            <img className="w-[200px]" src={Cleaning} alt="" />
          </div>
          <div className="my-2">
            <h3 className="xl:text-[1.7rem] lg:text-[1.1rem] text-[1.6rem]  text-[#272727] font-[650]">
              Professional Housekeeping
            </h3>
          </div>
        </div>
        <p className="xl:text-sm lg:text-xs  my-2 text-center">
          Come home to a clean and hygienic space that enriches your body &
          mind.
        </p>
      </div>
      </Zoom>
      <Zoom>
      <div className="w-[100%] lg:mx-2 xl:mx-12 lg:my-12 lg:w-[200px] xl:w-[310px]">
        <div className="text-center flex flex-col justify-center items-center">
          <div className=" ">
            <img className="w-[200px]" src={Unite} alt="" />
          </div>
          <div className="my-2 ">
            <h3 className="xl:text-[1.7rem] lg:text-[1.1rem] text-[1.6rem]  text-[#272727] font-[650]">
              The Unite Community
            </h3>
          </div>
        </div>
        <p className="xl:text-sm lg:text-xs  my-2  text-center">
          Various events, workshops & activities organised by Unite call for
          happening days & heartwarming nights.
        </p>
      </div>
      </Zoom>
      <Zoom>
      <div className="w-[100%] lg:mx-2 xl:mx-12 lg:my-12 lg:w-[200px] xl:w-[310px]">
        <div className="text-center flex flex-col justify-center items-center">
          <div className="">
            <img className="w-[200px]" src={Wifi} alt="" />
          </div>
          <div className="my-2">
            <h3 className="xl:text-[1.7rem] lg:text-[1.1rem] text-[1.6rem]  text-[#272727] font-[650]">
              High-speed Wi-Fi
            </h3>
          </div>
        </div>
        <p className="xl:text-sm lg:text-xs  my-2 text-center">
          Calls, lectures, meetings and leisure activities are all seamless with
          high-speed Wi-Fi.
        </p>
      </div>
    </Zoom>
     <Zoom>
      <div className="w-[100%] lg:mx-2 xl:mx-12 lg:my-12 lg:w-[200px] xl:w-[310px]">
        <div className="text-center flex flex-col justify-center items-center">
          <div className="mr-2">
            <img className="w-[200px]" src={Meal} alt="" />
          </div>
          <div className="my-2">
            <h3 className="xl:text-[1.7rem] lg:text-[1.1rem] text-[1.6rem]  text-[#272727] font-[650]">
              Fresh & Timely meals
            </h3>
          </div>
        </div>
        <p className="xl:text-sm lg:text-xs  my-2 text-center">
          A great meal is all you need after a long day. Serving ready-to-eat,
          fresh & timely meals.
        </p>
      </div>
      </Zoom>
      <Zoom>
      <div className="w-[100%] lg:mx-2 xl:mx-12 lg:my-12 lg:w-[200px] xl:w-[310px]">
        <div className="text-center flex flex-col justify-center items-center">
          <div className="">
            <img className="w-[200px]" src={Property} alt="" />
          </div>
          <div className="my-2">
            <h3 className="xl:text-[1.7rem] lg:text-[1.1rem] text-[1.6rem]  text-[#272727] font-[650]">
             Onsite Property Manager
            </h3>
          </div>
        </div>
        <p className="xl:text-sm lg:text-xs  my-2  text-center">
          Live with utmost convenience as a supervisor caters to all your
          on-site needs.
        </p>
      </div>
     </Zoom>
    </div>
  );
};

export default Amenities;
