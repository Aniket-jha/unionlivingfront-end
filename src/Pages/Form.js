import React,{useState} from 'react'
import First from '../components/Form/First'
import Second from '../components/Form/Second'
import Third from '../components/Form/Third'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import Ready from "../asset/readySection.jpg"
import { ArrowRightIcon,ArrowLeftIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
const Form = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
  name: '',
  phone: '',
  cname:'',
  time:'',
  date:'',
  city:''
});
console.log(formData)
     const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <First formData={formData} setFormData={setFormData} />;
      case 1:
        return <Second formData={formData} setFormData={setFormData} />;
       case 2:
         return <Third formData={formData} setFormData={setFormData}/>;
       default:
         return <First formData={formData} setFormData={setFormData} />;
    }
  }; 

  async function handleSubmit () {
  if (page === 0) {
   if (formData.name === '' || formData.name.length <= 1 && formData.phone === '' || formData.phone.length <= 1) {
    return alert('Please enter your name or phone number');
  } else {
    setPage(page + 1);
    console.log(formData);
  }
  } else if (page === 1) {
    if (formData.cname === '' || formData.cname.length <= 1 && formData.time === '' || formData.time.length <= 1) {
    return alert('Please enter your College/Company name or/and Period of Stay');
  } else {
    setPage(page + 1);
    console.log(formData);
  }
  } else if (page === 2) {
   setPage(0);
   console.log(formData);
   let res = await axios
                .post(process.env.REACT_APP_API_URL + "/surveys", {
     
                    "data": { "name": formData.name, "phone": formData.phone, "cname": formData.cname,"date":formData.date,"time":formData.time,"city":formData.city}
                })
     
           .catch((err) => console.log(err));
   setFormData({
     name: '',
  phone: '',
  cname:'',
  time:'',
  date:'',
  city:''
   })
  } else setPage(page + 1);
} 
  return (
    <div style={{backgroundImage:`url(${Ready})`}} className='bg-gray-300 bg-cover flex items-center justify-center w-[100vw] h-[100vh]' > 
       
        <div className='lg:px-[80px]  rounded-xl bg-[#ffffff] 2xl:w-[35vw] xl:w-[50vw] w-[100%] py-12 mx-6 px-6   shadow-xl lg:py-8 ' >
        <h6 className='text-center mb-3' >{page+1}/3</h6>
        <div>
                <h1 className='text-center font-[300] capitalize font-[Neue Haas Grotesk Display Pro] text-2xl text-[#8a8a8a] ' >fill in the form and get assistance</h1>
            </div>
            <div className='flex items-center justify-center' >
             <div className='border-b-[1px] flex items-center justify-center border-[#d0d0d0] w-48 my-6' >

        </div>
        </div>
          {conditionalComponent()}
           <div className='flex mt-6 items-center justify-center' >
           <button className='bg-[#002a3f]  text-white px-12 hover:bg-[#021721]  py-3 rounded-full text-xl' onClick={handleSubmit}>
        { page === 0 || page === 1 ? "Next" : "Submit" } 
      </button>
      
          {
            page > 0 && <button className='bg-[#949494] text-white px-12 mx-2 hover:bg-[#424242] py-3 rounded-full text-xl' onClick={() => setPage(page - 1)}>Back</button>
          }
     </div>
        </div>
      
    </div>
  )
}

export default Form