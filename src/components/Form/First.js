import React from 'react'

const First = ({formData,setFormData}) => {
  
  return (
    <div>
    <h1 className='text-center text-2xl' >Question 1</h1>
        <div className='flex items-center flex-col justify-center mt-8' >
          <div>
          <h1 className='my-3 text-lg font-[300]' >Enter your name<span className='text-red-600' > *</span></h1>
          <input   onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value,
            });
          }}
          value={formData.name} type="text" required placeholder='Enter your Name' className=' outline-none w-64  lg:w-96 py-3 px-3 rounded-lg border-gray-200 border-[1px]' />
          </div>
        <div className='mt-6' >
          <h1 className='my-3 text-lg font-[300]' >Enter your Phone Number<span className='text-red-600' > *</span></h1>
          <input   onChange={(e) => {
            setFormData({
              ...formData,
              phone: e.target.value,
            });
          }}
          value={formData.phone} type="tel" required placeholder='Enter your Phone Number' className=' outline-none  w-64 lg:w-96 py-3 px-3 rounded-lg border-gray-200 border-[1px]' />
          </div>
        </div>
       
    </div>
  )
}

export default First