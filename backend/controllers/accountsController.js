const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Accounts = require('../models/accountModel')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

//Get Passwords
const getAccounts = asyncHandler(async (req, res) => {
    const accounts = await Accounts.find({ user: req.user.id })
    res.status(200).json(accounts)
  })

  // @desc    Update Account
// @route   PUT /api/Acount/:id
// @access  Private
const updateAccount = asyncHandler(async (req, res) => {
    const account = await Accounts.findById(req.params.id)
  
    if (!account) {
      res.status(400)
      throw new Error('Account not found')
    }
  
    const user = await User.findById(req.user.id)
  
    if(!user)
      {
          res.status(401)
          throw new Error('User not found')
      }
      if(goal.user.toString() !== user.id)
          {
              
          }
    // Check for user
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    const updatedAccount = await Accounts.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedAccount)
  })
  
  // @desc    Delete goal
  // @route   DELETE /api/goals/:id
  // @access  Private
  const deleteAccount = asyncHandler(async (req, res) => {
    const account = await Accounts.findById(req.params.id)
  
    if (!account) {
      res.status(400)
      throw new Error('Account not found')
    }
  
    // Check for user
    if (!req.user) {
      res.status(401)
      throw new Error('User not found')
    }
  
    // Make sure the logged in user matches the goal user
    if (account.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error('User not authorized')
    }
  
    await account.remove()
  
    res.status(200).json({ id: req.params.id })
  })


  // @desc    Set accounts
// @route   POST /api/accounts
// @access  Private
const setAccount = asyncHandler(async (req, res) => {
    if (!req.body.website || !req.body.username || !req.body.password) {
      res.status(400)
      throw new Error('Please add a text field')
    }
  
    const newAccount = await Accounts.create({
      user: req.user.id,
      website,
      username,
      password: bcrypt.hash
    })
  
    res.status(200).json(newAccount)
  })


  module.exports = {
    getAccounts,
    setAccount,
    updateAccount,
    deleteAccount,
  }
