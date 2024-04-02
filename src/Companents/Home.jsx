import React from 'react'


// imgs
import home_img from "../Assets/back.jpg"
const Home = () => {
  return (
    <div className='relative w-full h-[100vh] parda'>
        {/* <img src={home_img} alt=" home_img" className='absolute w-full h-[100vh] top-0 left-0' /> */}

        <div className='absolute z-[2] w-full h-[100vh]  flex flex-col gap-4 justify-center items-center'>
          <h1 className='text-[25px] md:text-[30px] lg:text-[40px] font-bold text-[white]'>Education of the highest quality</h1>
          <p className=' w-[80%] md:w-[60%] text-center text-[white] text-[15px] md:text-[20px]'>It involves high academic standards and focuses on social-emotional learning, character development, and practical skill acquisition.  </p>
        <div className='flex gap-5'>
          <a href="/" className='capitalize md:px-7 md:py-3 px-5 py-2 text-[14px] md:text-[16px] bg-[#0a2050] text-[white] rounded-lg hover:bg-[#f3f3f3] hover:text-[#0a2050] transition-[1s]'>Learn more</a>
          <a href="/"  className='capitalize md:px-7 md:py-3  px-5 py-2  text-[14px] md:text-[16px] bg-[orange] text-[white] rounded-lg hover:bg-[#f3f3f3] hover:text-[#0a2050] transition-[1s]'> Visit courses</a>
        </div>
        </div>
    </div>
  )
}

export default Home




