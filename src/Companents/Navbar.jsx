import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";


import logo from "../Assets/logo.png"
const Navbar = () => {
    const [toggle,setToggle] = useState()
  return (
    <nav className=' containerr fixed z-[100] w-full h-[80px] md:h-[100px] bg-[white] flex justify-between items-center'>
        <div className=' w-[150px] md:w-[200px] cursor-pointer'>
            <img src={logo} alt="logo" />
        </div>

        <div className={` text-blue-800  md:block md:static absolute  md:w-full top-[80px] w-[50%]  ${toggle ? 'left-0 backdrop-blur'  : 'left-[-100%] transition-[1s]' }  p-[20px]`} >
         <ul className='flex md:flex-row flex-col md:justify-end gap-10 md:text-[18px] lg:text-[22px] font-bold'>
            <li className='hover:text-[#dbdb58]'><a href="#home">Home</a></li>
            <li className='hover:text-[#dbdb58]'><a href="#about">About</a></li>
            <li className='hover:text-[#dbdb58]'><a href="#blog">Blog</a></li>
            <li className='hover:text-[#dbdb58]'><a href="#cuorses">Cuorses</a></li>
            <li className='hover:text-[#dbdb58]'><a href="#contact">Contact</a></li>
            
         </ul>
        </div>

        <div className='md:hidden block text-[25px]' onClick={()=>setToggle(!toggle)}>
            {toggle ? <span><GiCancel /></span> :  <span><FiMenu/></span> }
           
            
        </div>
    </nav>
  )
}

export default Navbar