import React,{useEffect,useState} from 'react'
import Community from '../components/About/Community'
import Design from '../components/About/Design'
import Founders from '../components/About/Founders'
import OurMission from '../components/About/OurMission'
import OurVision from '../components/About/OurVision'
import Portfolio from '../components/About/Portfolio'
import Team from '../components/About/Team'
import Tech from '../components/About/Tech'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import { client } from '../asset/client'
import axios from "axios"
import Loader from '../components/Layout/Loader'
const About = () => {
  const [about, setAbout] = useState({})
  const [founders, setFounders] = useState([])
  useEffect(()=>{
      //   const query = '*[_type == "aboutContent"]'
      //        client.fetch(query).then((data) => {
      //  setAbout(data[0])
      // });

        const fetchData = async () =>{
        try{
          const data = await axios.get(process.env.REACT_APP_API_URL+"/about-contents?populate=*",{
            headers:{
              Authorization: "bearer" + process.env.REACT_STRAPI_API_TOKEN
            }
          })
          console.log(data.data.data[0])
        setAbout(data.data.data[0].attributes)
         const foundersData = await axios.get(process.env.REACT_APP_API_URL+"/about-contents?populate=Founders.FounderImage",{
            headers:{
              Authorization: "bearer" + process.env.REACT_STRAPI_API_TOKEN
            }
          })
          
        setFounders(foundersData.data.data[0].attributes.Founders && foundersData.data.data[0].attributes.Founders)
        console.log(founders)
        } catch(err){
            console.log(err)
        }
      }
     fetchData()
     
    },[])
    console.log(about)
  return (
    <>
   {about ?  (<div>
        <Navbar/>
        <OurMission/>
        <OurVision vision={about} />
        <Tech tech={about} />
        <Design design={about} />
        <Community community={about} />
        <Portfolio portfolio={about} />
        <Founders founders={founders}  />
        <Team aboutContent={about} />
        
        <Footer/>
    </div>) :
      ( <div className='flex items-center justify-center w-full h-full' >
      <Loader/>
      </div>)
   }
    </>
  )
}

export default About