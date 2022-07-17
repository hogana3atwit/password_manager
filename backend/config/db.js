const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://iammanny17:808Man13@cluster0.49dshxq.mongodb.net");

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    console.log("Database Connection Successful")
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
