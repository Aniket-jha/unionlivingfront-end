import React from 'react'
import Monogram from "../../asset/monogram.png"
const Loader = () => {
  return (

   <div className='m-auto top-[45%]  fixed ' role="status">
  <img src={Monogram} alt="Loading" className='w-[250px]' />
</div>

  )
}

export default Loader