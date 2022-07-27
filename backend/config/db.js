const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://seniordesign:parkerstreet@seniordesignsum2022.1mzwc.mongodb.net/passwordmanager?retryWrites=true&w=majority")

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB