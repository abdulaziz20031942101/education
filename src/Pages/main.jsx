import React from 'react'
// companents 
import Navbar from "../Companents/Navbar"
import Home  from '../Companents/Home'
import Future from "../Companents/Future"
import Courses from '../Companents/Courses'
import Register from '../Companents/Register'
import Form from '../Companents/Form'
import Expors from "../Companents/Expors"
import Footer from "../Companents/Footer"
const Main = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Future/>
        <Courses/>
        <Register/>
        <Expors/>
        <Footer/>
        {/* <Form/> */}
    </div>
  )
}

export default Main