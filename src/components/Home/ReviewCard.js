import React from 'react'

const ReviewCard = ({name,content,stars,img}) => {
  let totalStars = []
  for(let i = 0; i<=stars;i++){
    totalStars.push('⭐')
    i++
  }
  return (
    <div className='bg-[#dadada] rounded-xl px-4 lg:px-6 py-4 w-full lg:w-[350px] lg:mx-0 my-2'>
        <div className=''>
        <h4 className='font-bold py-3 text-[1.3rem] font-[Neue Haas Grotesk Display Pro] px-3'>{name}</h4>
        </div>
        <div>
            <p className='py-3 px-3 text-justify text-[#484848]'>{content}</p>
        </div>
      
    </div>
  )
}

export default ReviewCard