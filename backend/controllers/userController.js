const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')


const loginUser = asyncHandler( async(req,res) => {
   const{username, password} = req.body

   const accountUsername = await User.findOne({username})
    if(accountUsername && (await bcrypt.compare(password,accountUsername.password)))
        {
            res.json({
                _id: accountUsername.id,
                name: accountUsername.username,
                email: accountUsername.email,
                token: generateToken(accountUsername._id)
               })
        } else {
            res.status(400)
            throw new Error('Invalid Credential')
        }
})

const registerUser = asyncHandler( async (req,res) => {
    const {firstname,lastname, username,email,password } = req.body
    if(!firstname || !lastname || !username || !email || !password ) {
        res.status(400)
        throw new Error('Fill in all feilds')
    }

    //Check if user exits

    const usernameExists = await User.findOne({username})
    const emailExists = await User.findOne({email})

    if(usernameExists || emailExists)
        {
            res.status(400)
            throw new Error('This Account is already registered')
        }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await User.create({
        firstname,
        lastname,
        username,
        email,
        password: hashedPassword
    })


    if(user) 
        {
           res.status(201).json({
            _id: user.id,
            name: user.username,
            email: user.email,
            token: generateToken(user._id)
           })
         } else {
            res.status(400)
            throw new Error('Invalid User Data')
           }
        
 })
    


const generateToken = (id) => 
{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}

const getUser = asyncHandler( async (req,res) => {
  const {_id,username,email} = await User.findById(req.user.id)

  res.status(200).json({
    id: _id,
    username,
    email,
  })
})

module.exports = {
    registerUser,
    loginUser,
    getUser

}