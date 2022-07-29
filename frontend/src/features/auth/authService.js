import axios from 'axios'
import { response } from 'express'

const API_URL = '/api/users/'

const register = async (userData) => {

    const response = await axios.post(API_URL + 'register',userData)

    if(response.data)
        {
            localStorage.setItem('user',JSON.stringify(response.data))
        }
return response.data
}

//Login User 
const login = async (userData) => {
    const response  = await axios(API_URL +'login',userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
    
      return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
  }
  
  const authService = {
    register,
    logout,
    login,
  }
  
  export default authService