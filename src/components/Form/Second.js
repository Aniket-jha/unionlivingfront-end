import React from 'react'

const Second = ({formData,setFormData}) => {
  return (
    <div>
         <h1 className='text-center text-2xl' >Question 2</h1>
        <div className='flex items-center flex-col justify-center mt-8' >
          <div>
          <h1 className='my-3 text-lg font-[300]' >College/Company Name<span className='text-red-600' > *</span></h1>
          <input onChange={(e) => {
            setFormData({
              ...formData,
              cname: e.target.value,
            });
          }}
          value={formData.cname} type="text" required placeholder='Enter your Company/College Name' className=' outline-none  w-64  lg:w-96 py-3 px-3 rounded-lg border-gray-200 border-[1px]' />
          </div>
        <div className='mt-6' >
          <h1 className='my-3 text-lg font-[300]' >Period of Stay<span className='text-red-600' > *</span></h1>
          <select onChange={(e) => {
            setFormData({
              ...formData,
              time: e.target.value,
            });
          }}
          value={formData.time}  className=' outline-none w-64  lg:w-96 py-3 px-3 rounded-lg border-gray-200 border-[1px]'>
  <option value="null">Select an Option</option>
  <option value="1 Month">1 Month</option>
<option value="2 Month">2 Month</option>
<option value="3 Month">3 Month</option>
<option value="4 Month">4 Month</option>
<option value="5 Month">5 Month</option>
<option value="6 Month">6 Month</option>
<option value="7 Month">7 Month</option>
<option value="8 Month">8 Month</option>
<option value="9 Month">9 Month</option>
<option value="10 Month">10 Month</option>
<option value="11 Month">11 Month</option>
<option value="12 Month">12 Month</option>
</select>
          </div>
        </div>
        
    </div>
  )
}

export default Second