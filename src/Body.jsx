import React from 'react'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './component/footer'

const Body = () => {
  return (
    <div>

         <Navbar />
         <Outlet />
         <Footer />

    </div>

  )
}

export default Body