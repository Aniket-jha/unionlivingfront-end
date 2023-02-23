import React from 'react'

const Third = ({formData,setFormData}) => {
  return (
    <div>
         <h1 className='text-center text-2xl' >Question 3</h1>
        <div className='flex items-center flex-col justify-center mt-8' >
          <div>
          <h1 className='my-3 text-lg font-[300]' >Move In Date<span className='text-red-600' > *</span></h1>
          <input onChange={(e) => {
            setFormData({
              ...formData,
              date: e.target.value,
            });
          }}
          value={formData.date} type="date" required placeholder='Enter your Move In Date' className=' outline-none w-64  lg:w-96 py-3 px-3 rounded-lg border-gray-200 border-[1px]' />
          </div>
        <div className='mt-6' >
          <h1 className='my-3 text-lg font-[300]' >City<span className='text-red-600' > *</span></h1>
          <select onChange={(e) => {
            setFormData({
              ...formData,
              city: e.target.value,
            });
          }}
          value={formData.city} className=' outline-none  w-64  lg:w-96 py-3 px-3 rounded-lg border-gray-200 border-[1px]'>
           <option value="Select an Option">Select an Option</option>
  <option value="Abode, Pune">Abode, Pune</option>
<option value="Bayside, Seawoods">Bayside, Seawoods</option>
<option value="Casa, Andheri">Casa, Andheri</option>
<option value="Chapter 1, Belapur">Chapter 1, Belapur</option>
<option value="Commune, Kharghar">Commune, Kharghar</option>

</select>
          </div>
        </div>
       
         
    </div>
  )
}

export default Third