import React,{useState,useEffect} from 'react'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import PropertyBanner from '../components/Property/PropertyBanner'
import PropertyLeft from '../components/Property/PropertyLeft'
import PropertyNavbar from '../components/Property/PropertyNavbar'
import PropertyRight from '../components/Property/PropertyRight'
import { Link, useParams } from "react-router-dom";
import { propertyDetailQuery } from '../utils/data'
import Details from '../components/Property/Details'
import Community from '../components/Property/Community'
import Rooms from '../components/Property/Rooms'
import Location from '../components/Property/Location'
import Comparison from '../components/Property/Comparison'
import { client } from '../asset/client'
import HowWorks from '../components/Property/HowWorks'
import Faqs from '../components/Property/Faqs'
import YoutubeVideo from '../components/Property/YoutubeVideo'
import Loader from '../components/Layout/Loader'
import useFetch from '../hooks/useFetch'
import axios from "axios";
const Property = () => {
  const { id } = useParams();
  const [propertyDetail, setPropertyDetail] = useState(null);
  const [faqs, setfaqs] = useState([])
  const [rooms, setRooms] = useState([])
    // const { data, loading, error } = useFetch(`/properties/${id}?populate=*`);
  useEffect(()=>{
    // let query = propertyDetailQuery(id);
    //  client.fetch(query).then((data) => {
    //    setPropertyDetail(data[0])
    //   });
    //   let faqsQuery = '*[_type == "faqs"]'
    //    client.fetch(faqsQuery).then((data) => {
    //    setfaqs(data)
    //   });
    const fetchData = async () =>{
        try{
          const data = await axios.get(process.env.REACT_APP_API_URL+`/properties/${id}?populate=*`,{
            headers:{
              Authorization: "bearer" + process.env.REACT_STRAPI_API_TOKEN
            }
          })
              setPropertyDetail(data.data.data)
           const roomsData = await axios.get(process.env.REACT_APP_API_URL+`/properties/${id}?populate=Rooms.RoomImage`,{
            headers:{
              Authorization: "bearer" + process.env.REACT_STRAPI_API_TOKEN
            }
          })
          setRooms(roomsData.data.data.attributes.Rooms)
        } catch(err){
            console.log(err)
        }
      }
     fetchData()
  },[id])
  console.log(id)
  console.log(rooms)
  return (
    <>

    {propertyDetail?.attributes.PropertyImages ?   (<div className='' >
      <Navbar/>
      <div className='lg:px-12 lg:py-6 mx-6 md:mx-0' >
      <PropertyBanner propertyDetail={propertyDetail.attributes.PropertyImages && propertyDetail.attributes.PropertyImages} />
       <PropertyNavbar/>
      <div className='grid grid-flow-col grid-cols-1 lg:grid-cols-3' >
      <div className='lg:col-span-2 col-span-1'>
          
        <PropertyLeft propertyDetail={propertyDetail.attributes && propertyDetail.attributes } />
        </div>
        <div className='' >
        <PropertyRight/>
        </div>
      </div>
      <div>
        
            <Community propertyDetail={propertyDetail.attributes} />
           {propertyDetail.attributes.Rooms.length > 0 && <Rooms propertyDetail={rooms && rooms } />}
          <YoutubeVideo propertyDetail={propertyDetail.attributes} />
            <HowWorks/>
            <Location propertyDetail={propertyDetail.attributes} />
            {propertyDetail.attributes.ComparisonImage.data && <Comparison propertyDetail={propertyDetail.attributes}/>}
            {/* <Faqs faqs={faqs} /> */}
      </div>
      </div>
      <Footer/>
    </div>) :
    (
       <div className='flex items-center justify-center w-full h-full' >
      <Loader/>
      </div>
    )
    }
    </>
  )
}

export default Property