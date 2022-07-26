import React from "react";
import { logout, reset } from '../features/auth/authSlice'
import {useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'



function Home() {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()

const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
    
        return(
            <><h1> You are Home </h1><button onClick={onLogout}> Logout </button></>

        );
    }

    export default Home