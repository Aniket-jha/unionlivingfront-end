import React,{useEffect,useState} from 'react'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import PropertiesList from '../components/Properties/PropertiesList'
import { client } from '../asset/client'
import axios from "axios"
import Loader from '../components/Layout/Loader'
const Properties = () => {
  const [properties, setProperties] = useState([])
  const [allProperties, setAllProperties] = useState([])
   useEffect(()=>{
        const query = '*[_type == "property"] | order(_createdAt asc)'
             client.fetch(query).then((data) => {
       setProperties(data)
      });
      const fetchData = async () =>{
        try{
          const data = await axios.get(process.env.REACT_APP_API_URL+"/properties?populate=*",{
            headers:{
              Authorization: "bearer" + process.env.REACT_STRAPI_API_TOKEN
            }
          })
        setAllProperties(data.data.data)
        } catch(err){
            console.log(err)
        }
      }
     fetchData()
    },[])
    console.log(allProperties)
  return (
    <>
    {
      properties ? (
        <div>
        <Navbar/>
        <PropertiesList allProperties={allProperties} properties={properties} />
        <Footer/>
    </div>
      ) :(
        <div className='flex items-center justify-center w-full h-full' >
      <Loader/>
      </div>
      )
    }
    
    </>
  )
}

export default Properties