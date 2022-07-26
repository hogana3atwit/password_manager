import React from "react";
import { logout, reset } from '../features/auth/authSlice'
import {useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'



function Home() {

    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    
        return(
            <>
            <h1> You are Home </h1> 
            
            </>

        );
    }

    export default Home