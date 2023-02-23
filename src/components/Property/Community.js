import React,{useState} from 'react'
import { HomeIcon } from '@heroicons/react/24/outline'
import AirConditioner from "../../asset/air-conditioner.png"
import CctvCamera from "../../asset/cctv-camera.png"
import Cleaning from "../../asset/cleaning.png"
import DinningTable from "../../asset/dining-table.png"
import Elevator from "../../asset/elevator.png"
import Gym from "../../asset/fitness.png"
import Food from "../../asset/food.png"
import Kitchen from "../../asset/kitchen.png"
import LivingRoom from "../../asset/living-room.png"
import Parking from "../../asset/parking.png"
import SecurityGuard from "../../asset/security-guard.png"
import StudyTable from "../../asset/study-table.png"
import VendingMachine from "../../asset/vending-machine.png"
import WashingMachine from "../../asset/washing-machine.png"
import Wifibg from "../../asset/wifibg.png"
import { Zoom } from 'react-reveal'
const Community = ({propertyDetail}) => {
      const [show, setShow] = useState(false)
  return (
    <Zoom>
    <div id="about" className='mt-12  w-[100%] px-12 py-12 border-[1px] rounded-xl border-[#d0d0d0]  '>
        <div>
            <h1 className='font-bold font-[Neue Haas Grotesk Display Pro] text-[#272727]  text-3xl ' >About Property</h1>
        </div>
        <div className='border-b-[1px] border-[#d0d0d0] w-20 my-6' >

        </div>
       
         <div>
            <p className='text-justify font-[Neue Haas Grotesk Display Pro] text-[#555454]'  >{propertyDetail && propertyDetail.AboutProperty}</p>
        </div>
        <div className='my-6 mx-6 ' >
            <h3 className='font-bold  font-[Neue Haas Grotesk Display Pro]   text-[#272727] text-3xl ' >Amenities</h3>
        </div>
       
      { show &&  <div id="amenities" className='flex lg:gap-16 gap-4  items-center justify-center  flex-wrap text-[#3e3d3d] font-[Neue Haas Grotesk Display Pro]'  >
            <div className='flex items-center flex-col mt-2 mb-12 justify-center mx-6' >
              <img className='w-12' src={AirConditioner} alt="" />
                <p className=' mt-4 text-lg' >Air Conditioner</p>
            </div>
            <div className='flex items-center flex-col mt-2 mb-12  justify-center mx-6 ' >
             <img className='w-12' src={CctvCamera} alt="" />
                <p className='= mt-4 text-lg' >CCTV Camera</p>
            </div>
            <div className='flex items-center flex-col  justify-center mx-6 mt-2 mb-12' >
               <img className='w-12' src={Cleaning} alt="" />
                <p className='=  mt-4 text-lg'>Cleaning</p>
            </div>
            <div className='flex items-center justify-center mx-6 flex-col mt-2 mb-12' >
               <img className='w-12' src={DinningTable} alt="" />
                <p className='=  mt-4 text-lg'>Dining area</p>
            </div>
            <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
               <img className='w-12' src={Elevator} alt="" />
                <p className='mx-2  mt-4 text-lg'>Elevator</p>
            </div>
            <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
               <img className='w-12' src={Gym} alt="" />
                <p className='  mt-4 text-lg'>Gym</p>
            </div>
            <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
               <img className='w-12' src={Kitchen} alt="" />
                <p className='  mt-4 text-lg'>Kitchen</p>
            </div>
            <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={Food} alt="" />
                <p className='  mt-4 text-lg'>Food</p>
            </div>
             <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={LivingRoom} alt="" />
                <p className='  mt-4 text-lg'>Living Room</p>
            </div>
             <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={Parking} alt="" />
                <p className='  mt-4 text-lg'>Parking</p>
            </div>
             <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={SecurityGuard} alt="" />
                <p className='  mt-4 text-lg'>Security Guard</p>
            </div>
            <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={StudyTable} alt="" />
                <p className='  mt-4 text-lg'>Study Table</p>
            </div>
            <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={VendingMachine} alt="" />
                <p className='  mt-4 text-lg'>Vending Machine</p>
            </div>
              <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={WashingMachine} alt="" />
                <p className='  mt-4 text-lg'>Washing Machine</p>
            </div>
               <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={Wifibg} alt="" />
                <p className=' mt-4 text-lg'>Wifi</p>
            </div>
        </div>}
         { !show &&  <div className='flex lg:gap-16 gap-4 lg:items-start items-center justify-center lg:justify-start flex-wrap text-[#3e3d3d] font-[Neue Haas Grotesk Display Pro]'  >
            <div className='flex items-center flex-col mt-2 mb-12 justify-center mx-6' >
              <img className='w-12' src={AirConditioner} alt="" />
                <p className=' mt-4 text-lg' >Air Conditioner</p>
            </div>
            <div className='flex items-center flex-col mt-2 mb-12  justify-center mx-6 ' >
             <img className='w-12' src={CctvCamera} alt="" />
                <p className='= mt-4 text-lg' >CCTV Camera</p>
            </div>
            <div className='flex items-center flex-col  justify-center mx-6 mt-2 mb-12' >
               <img className='w-12' src={Cleaning} alt="" />
                <p className='=  mt-4 text-lg'>Cleaning</p>
            </div>
            <div className='flex items-center justify-center mx-6 flex-col mt-2 mb-12' >
               <img className='w-12' src={DinningTable} alt="" />
                <p className='=  mt-4 text-lg'>Dining area</p>
            </div>
            <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
               <img className='w-12' src={Elevator} alt="" />
                <p className='mx-2  mt-4 text-lg'>Elevator</p>
            </div>
            <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
               <img className='w-12' src={Gym} alt="" />
                <p className='  mt-4 text-lg'>Gym</p>
            </div>
            <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
               <img className='w-12' src={Kitchen} alt="" />
                <p className='  mt-4 text-lg'>Kitchen</p>
            </div>
            {/* <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={Food} alt="" />
                <p className='  mt-4 text-lg'>Food</p>
            </div> */}
             {/* <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={LivingRoom} alt="" />
                <p className='  mt-4 text-lg'>Living Room</p>
            </div>
             <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={Parking} alt="" />
                <p className='  mt-4 text-lg'>Parking</p>
            </div>
             <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={SecurityGuard} alt="" />
                <p className='  mt-4 text-lg'>Security Guard</p>
            </div>
            <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={StudyTable} alt="" />
                <p className='  mt-4 text-lg'>Study Table</p>
            </div>
            <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={VendingMachine} alt="" />
                <p className='  mt-4 text-lg'>Vending Machine</p>
            </div>
              <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={WashingMachine} alt="" />
                <p className='  mt-4 text-lg'>Washing Machine</p>
            </div>
               <div className='flex items-center flex-col justify-center mx-6 mt-2 mb-12' >
              <img className='w-12' src={Wifibg} alt="" />
                <p className=' mt-4 text-lg'>Wifi</p>
            </div> */}
        </div>}
        <div className='flex items-center justify-center' >
         {
          !show ? <p className='px-6 py-3 rounded-full border-[1px] border-gray-400 cursor-pointer ' onClick={()=>(setShow(true))} >Show More</p> : <p className='px-6 py-3 rounded-full border-[1px] cursor-pointer border-gray-400' onClick={()=>(setShow(false))}>Show Less</p>
        }
        </div>
    </div>
    </Zoom>
  )
}

export default Community