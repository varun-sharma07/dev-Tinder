import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'
import axios from 'axios'
import { Base_URL } from '../utils/constants'
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux'

export const Body = () => {
    const dispatch = useDispatch();
    const fetchUser = async() => {
       try{

        const user = await axios.get(Base_URL +"/profile/view", {withCredentials: true})

        dispatch(addUser(user.data))
    }
       catch(err){
        console.error(err)  
       }
    }

    useEffect(() => {
        fetchUser(); 
    })
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}
