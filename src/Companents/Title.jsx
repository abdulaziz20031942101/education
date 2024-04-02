import React from 'react'

const Title = ({title= "No Title",description= "No Description"}) => {
  return (
    <div className='w-full text-center text-[#0a2050]'>
        <h1 className=' capitalize text-[25px] sm:text-[35px] md:text-[40px] font-bold my-10 px-2'>{title}</h1>
        <p className=' text-[14px] md:text-[18px]'>{description}</p>
    </div>
  )
}

export default Title