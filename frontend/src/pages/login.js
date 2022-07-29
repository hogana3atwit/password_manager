import {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { login,reset } from '../features/auth/authSlice'

function Login() {
    return (
        <h1> Login </h1>
    )
  }
  
  export default Login