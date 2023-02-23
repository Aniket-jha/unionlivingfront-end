import React,{useState,useEffect} from 'react'
import Amenities from '../components/Home/Amenities'
import CTA from '../components/Home/CTA'
import HomeBanner from '../components/Home/HomeBanner'
import LeftAndRight from '../components/Home/LeftAndRight'
import Reviews from '../components/Home/Reviews'
import TalkingSection from '../components/Home/TalkingSection'
import Types from '../components/Home/Types'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import axios from "axios"
import { client } from '../asset/client'
import { reviewsQuery } from '../utils/data'
import Unite from '../components/Home/Unite'
import Loader from '../components/Layout/Loader'
const Home = () => {
  const [reviews, setReviews] = useState([])
  const [homeContent, setHomeContent] = useState({})
  console.log(process.env.REACT_APP_API_TOKEN)
   useEffect(()=>{
  //       const query=`*[_type == "reviews" ]{
  //   videoOne{
  //       asset->{
  //         _id,
  //         url
  //       }
  //     },
  //      videoTwo{
  //       asset->{
  //         _id,
  //         url
  //       }
  //     },
  //     imageOne,
  //     imageTwo,
  //     imageThree,
  //     imageFour,
  //     imageFive
      
  // }`

  //            client.fetch(query).then((data) => {
  //      setReviews(data[0])
       
  //     });
  //     const homeQuery = `*[_type == "homeContent" ]{
  //   homeBanner{
  //       asset->{
  //         _id,
  //         url
  //       }
  //     },
  //     studentImage,
  //     studentMobileImage,
  //     workMobileImage,
  //     workImage,
  //     guesswork,
  //     missing,
  //     rents,
  //     responsive,
  //     ctaImage,
  //     mainContent,
  //     homeContentOne,
  //     homeContentTwo
      
      
  // }`
  //            client.fetch(homeQuery).then((data) => {
  //      setHomeContent(data[0])
  //     });
      const fetchData = async () =>{
        try{
          const data = await axios.get(process.env.REACT_APP_API_URL+"/home-contents?populate=*",{
            headers:{
              Authorization: "bearer" + process.env.REACT_STRAPI_API_TOKEN
            }
          })
          console.log(data.data.data[0])
         setHomeContent(data.data.data[0].attributes)
        } catch(err){
            console.log(err)
        }
      }
     fetchData()
    },[])
    console.log(homeContent)
  return (
    <div>
    
  {homeContent.HomeBanner ?  (<div>
      <Navbar/>
      <HomeBanner homeContent={homeContent} />
      <Types homeContent={homeContent} />
      <Amenities/>
      <Unite homeContent={homeContent} />
       <LeftAndRight homeContent={homeContent} />
      <CTA />
     {/* <Reviews reviews={reviews}  /> */}
     <Footer/>
    </div>) : 
     ( <div className='flex items-center justify-center w-full h-full' >
      <Loader/>
      </div>)
  }
  </div>
  )
}

export default Home