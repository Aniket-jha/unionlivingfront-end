import React from 'react'
import Logo from "../../asset/Logo2.png"
import { Link } from 'react-router-dom'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  MapPinIcon,
 
} from '@heroicons/react/24/outline'
import Instagram from "../../asset/instagram.png"
import Linkedin from "../../asset/linkedin.png"
const Footer = () => {
  return (
    <div className='bg-[#272727] lg:px-36 py-6 lg:py-16  '>
        <div className='grid lg:grid-cols-4 grid-cols-1  gap-4'>
            <div className='mx-4 col-span-1'>
                <div>
                    <img src={Logo} className="w-48" alt="" />
                </div>
                <div className='grid grid-flow-col grid-cols-4 my-8 '>
                    <MapPinIcon className='text-white col-span-1 w-8 mr-2' />
                    <p className='text-white col-span-3' >910, Centrum - Commercial spaces, Thane-Mumbai, 400604</p>
                </div>
                <div className='grid grid-flow-col grid-cols-4 my-8'>
                    <PhoneIcon className='text-white col-span-1 w-8 mr-2' />
                   <a href='tel:9137915406' > <p className='text-white col-span-3' >+919137915406</p></a>
                </div>
            </div>
            <div className='lg:mx-16 col-span-1 mx-6 font-[Neue Haas Grotesk Display Pro]'>
                <div>
                    <h1 className='font-bold  text-3xl text-white  mt-6 font-[Neue Haas Grotesk Display Pro] tracking-wider'>Locations</h1>
                    <div className='text-[#878787] text-xl my-3'>
                        <p  className='my-2'>Navi Mumbai</p>
                        <p  className='my-2'> Mumbai</p>
                        <p  className='my-2'>Pune</p>
                    </div>
                </div>
            </div>
            <div className='font-[Neue Haas Grotesk Display Pro] col-span-1 mx-6 '>
                 <div>
                    <h1 className='font-bold  text-3xl text-white  mt-6 font-[Neue Haas Grotesk Display Pro] tracking-wider'>Sitemap</h1>
                    <div className='text-[#878787] text-xl my-3'>
                    <Link to="/" > <p className='my-2' >Home</p></Link>
                    <Link to="/properties" ><p  className='my-2'>Properties</p></Link>
                        <Link to="/ourstory" ><p  className='my-2'>Our Story</p></Link>
                        
                       
                    </div>
                </div>
            </div>
           <div className='font-[Neue Haas Grotesk Display Pro] col-span-1 mx-6 '>
                 <div>
                    <h1 className='font-bold  text-3xl text-white  mt-6 font-[Neue Haas Grotesk Display Pro] tracking-wider'>Important Links</h1>
                    <div className='text-[#878787] text-xl my-3'>
                        <Link to="/termsandcondition"><p  className='my-2'>Terms and Conditions</p></Link>
                        <Link to="/onboardingpolicy"><p  className='my-2'>Rules and Regulations</p></Link> 
                    </div>
                </div>
            </div>
        </div>
        <hr className='text-white my-3 bg-white' />
        <div className='flex items-center justify-between' >
            <p className='text-white mx-6' >© 2023, All Rights Reserved</p>
            <div className='flex items-center justify-center' >
               <a href='https://www.linkedin.com/company/union-coliving-spaces/mycompany/?viewAsMember=true' > <img className='w-8 mx-4' src={Linkedin} alt="" /></a>
                <a href="https://instagram.com/union_living?igshid=MWI4MTIyMDE="><img className='w-8 mx-4'  src={Instagram} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer